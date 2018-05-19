import React from 'react';

export default function create(update) {
    let dragging = false;
    const onMouseDown = () => dragging = true;
    window.addEventListener('mouseup', () => dragging = false);
    window.addEventListener('mousemove', event => {
        if (!dragging) return;
        event.preventDefault();
        let sideWidth = event.pageX;
        let max = window.innerWidth / 2;
        let min = window.innerWidth / 5;
        if (sideWidth > max) sideWidth = max;
        if (sideWidth < min) sideWidth = min;
        update(model => ({
            ...model,
            sideWidth
        }));
    });
    return {
        view(model) {
            return (
                <div id="sidenav-drag" onMouseDown={onMouseDown} >
                    <div id="sidenav-drag-button" />
                </div>
            );
        }
    };
}
