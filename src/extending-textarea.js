export default function extendingTextarea(Alpine) {
    Alpine.directive('extending-textarea', (el, {}, { effect, cleanup }) => {
        if (el.tagName !== 'TEXTAREA') {
            throw 'The `x-extending-textarea` directive must be applied to <textarea> elements only.';
        }

        el.style.overflow = 'hidden';
        el.style.boxSizing = 'border-box';

        const calculateInitialHeight = () => {
            el.style.height = 'auto';
            return el.scrollHeight + 'px';
        };

        const minHeight = calculateInitialHeight();
        el.style.height = minHeight;

        const updateHeight = () => {
            el.style.height = 'auto';
            el.style.height = Math.max(el.scrollHeight, parseInt(minHeight)) + 'px';
        };

        updateHeight();

        effect(() => {
            el.addEventListener('input', updateHeight);
        });

        cleanup(() => {
            el.removeEventListener('input', updateHeight);
        });
    });
}
