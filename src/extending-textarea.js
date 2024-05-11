export default function extendingTextarea(Alpine) {
    Alpine.directive('extending-textarea', (el, {}, { effect, cleanup }) => {
        // ? Throw if it's applied to the wrong tag
        if (el.tagName !== 'TEXTAREA') {
            throw 'The `x-extending-textarea` directive must be applied to <textarea> elements only.';
        }

        el.style.overflow = 'hidden';

        let initialHeight = 0;

        const calculateInitialHeight = () => {
            el.style.height = 'auto'; // ? Reset the height
            initialHeight = el.scrollHeight; // ? Calculate initial height based on content or default row size
        };

        const updateHeight = () => {
            el.style.height = 'auto'; // ? Reset the height
            el.style.height = Math.max(el.scrollHeight, initialHeight) + 'px'; // ? Use the greater of scrollHeight or initialHeight
        };

        calculateInitialHeight();
        updateHeight();

        // ? Register on input
        effect(() => el.addEventListener('input', updateHeight));

        // ? Clear upon unmounting
        cleanup(() => el.removeEventListener('input', updateHeight));
    });
}
