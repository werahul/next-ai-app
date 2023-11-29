// components/My360ImageViewer.tsx
"use client"
import { useEffect, useRef } from 'react';

const PanormaOutput: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    let isDragging = false;
    let previousX = 0;
    let previousY = 0;

    useEffect(() => {
        const container = containerRef.current;

        const handleMouseDown = (event: MouseEvent) => {
            isDragging = true;
            previousX = event.clientX;
            previousY = event.clientY;
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (isDragging && container) {
                const deltaX = event.clientX - previousX;
                const deltaY = event.clientY - previousY;
                previousX = event.clientX;
                previousY = event.clientY;

                const currentBackgroundPositionX = parseFloat(
                    getComputedStyle(container).backgroundPositionX
                );
                const currentBackgroundPositionY = parseFloat(
                    getComputedStyle(container).backgroundPositionY
                );

                const newBackgroundPositionX = currentBackgroundPositionX + deltaX;
                const newBackgroundPositionY = currentBackgroundPositionY + deltaY;

                container.style.backgroundPositionX = `${newBackgroundPositionX}px`;
                container.style.backgroundPositionY = `${newBackgroundPositionY}px`;
            }
        };

        const handleMouseUp = () => {
            isDragging = false;
        };

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className="w-[100%] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] h-[910px] flex items-center justify-center text-center font-bold text-[43px]">
            <div
                ref={containerRef}
                style={{
                    height: '300px',
                    width: '100%',
                    background: `url(${imageUrl})`,
                    backgroundSize: 'fill',
                    overflow: 'hidden',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
        </div>
    );
};

export default PanormaOutput;