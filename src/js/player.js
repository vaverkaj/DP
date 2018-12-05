import Raven from 'raven-js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        Raven.context(() => {
            const selector = '#player';
            const container = document.getElementById('container');

            if (window.shr) {
                window.shr.setup({
                    count: {
                        classname: 'button__count',
                    },
                });
            }

            // Setup tab focus
            const tabClassName = 'tab-focus';

            // Remove class on blur
            document.addEventListener('focusout', event => {
                if (!event.target.classList || container.contains(event.target)) {
                    return;
                }

                event.target.classList.remove(tabClassName);
            });

            // Add classname to tabbed elements
            document.addEventListener('keydown', event => {
                if (event.keyCode !== 9) {
                    return;
                }

                // Delay the adding of classname until the focus has changed
                // This event fires before the focusin event
                setTimeout(() => {
                    const focused = document.activeElement;

                    if (!focused || !focused.classList || container.contains(focused)) {
                        return;
                    }

                    focused.classList.add(tabClassName);
                }, 10);
            });

            // Setup the player
            const player = new Plyr(selector, {
                debug: true,
                title: 'ToyStory',
                iconUrl: 'node_modules/plyr/dist/plyr.svg',
                keyboard: {
                    global: true,
                },
                tooltips: {
                    controls: true,
                },
                captions: {
                    active: true,
                },
                keys: {
                    google: 'AIzaSyDrNwtN3nLH_8rjCmu5Wq3ZCm4MNAVdc0c',
                },
                ads: {
                },
            });

            // Expose for tinkering in the console
            window.player = player;

            // Setup type toggle
            const buttons = document.querySelectorAll('[data-source]');
            const types = {
                video: 'video',
                audio: 'audio',
                youtube: 'youtube',
                vimeo: 'vimeo',
            };
            let currentType = window.location.hash.replace('#', '');
            const historySupport = window.history && window.history.pushState;

            // Toggle class on an element
            function toggleClass(element, className, state) {
                if (element) {
                    element.classList[state ? 'add' : 'remove'](className);
                }
            }

            // Set a new source
            function newSource(type, init) {
                // Bail if new type isn't known, it's the current type, or current type is empty (video is default) and new type is video
                if (
                    !(type in types) ||
                    (!init && type === currentType) ||
                    (!currentType.length && type === types.video)
                ) {
                    return;
                }

                // Set the current type for next time
                currentType = type;

                // Remove active classes
                Array.from(buttons).forEach(button => toggleClass(button.parentElement, 'active', false));

                // Set active on parent
                toggleClass(document.querySelector(`[data-source="${type}"]`), 'active', true);

                // Show cite
                Array.from(document.querySelectorAll('.plyr__cite')).forEach(cite => {
                    cite.setAttribute('hidden', '');
                });
                document.querySelector(`.plyr__cite--${type}`).removeAttribute('hidden');
            }

            // Bind to each button
            Array.from(buttons).forEach(button => {
                button.addEventListener('click', () => {
                    const type = button.getAttribute('data-source');

                    newSource(type);

                    if (historySupport) {
                        window.history.pushState({ type }, '', `#${type}`);
                    }
                });
            });

            // List for backwards/forwards
            window.addEventListener('popstate', event => {
                if (event.state && 'type' in event.state) {
                    newSource(event.state.type);
                }
            });

            // On load
            if (historySupport) {
                const video = !currentType.length;

                // If there's no current type set, assume video
                if (video) {
                    currentType = types.video;
                }

                // Replace current history state
                if (currentType in types) {
                    window.history.replaceState(
                        {
                            type: currentType,
                        },
                        '',
                        video ? '' : `#${currentType}`,
                    );
                }

                // If it's not video, load the source
                if (currentType !== types.video) {
                    newSource(currentType, true);
                }
            }
        });
    });

})();
