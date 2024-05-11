export default function extendingTextarea(Alpine) {
    Alpine.directive('extending-textarea', (el, {}, { effect, cleanup }) => {
        // ? Throw if it's applied to the wrong tag
        if (el.tagName !== 'TEXTAREA') {
            throw 'The `x-extending-textarea` directive must be applied to <textarea> elements only.';
        }

        el.style.overflow = 'hidden';

        const updateHeight = () => {
            el.style.height = 'auto'; // ? Reset the height
            el.style.height = el.scrollHeight + 'px'; // ? Update the height to the scroll height
        };

        // ? Initialize the height
        updateHeight();

        // ? Register on input
        effect(() => {
            el.addEventListener('input', updateHeight);
        });

        // ? Clear upon unmounting
        cleanup(() => {
            el.removeEventListener('input', updateHeight);
        });
    });
}
