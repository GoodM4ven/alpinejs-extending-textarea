export default function extendingTextarea(Alpine) {
    Alpine.directive('extending-textarea', (el, {}, { effect, cleanup }) => {
        if (el.tagName !== 'TEXTAREA') {
            throw 'The `x-extending-textarea` directive must be applied to <textarea> elements only.';
        }

        el.style.overflow = 'hidden';
        el.style.boxSizing = 'border-box';

        let baseHeight = 0;

        const updateHeight = () => {
            el.style.height = 'auto';
            el.style.height = Math.max(el.scrollHeight, baseHeight) + 'px';
        };

        effect(() => {
            window.requestAnimationFrame(() => {
                baseHeight = el.scrollHeight;
                updateHeight();
            });

            el.addEventListener('input', updateHeight);
        });

        cleanup(() => {
            el.removeEventListener('input', updateHeight);
        });
    });
}
