import React, { useEffect, useRef, useState } from 'react';
import { createSwapy } from 'swapy';
import { skillsData } from '../data/skillsData';

export const SwapyComponent: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const swapyRef = useRef<any>(null);

    // genera N items (puedes poblar desde API / state)
    const [items] = useState(skillsData);

    // init / destroy Swapy
    useEffect(() => {
        if (!containerRef.current) return;
        swapyRef.current = createSwapy(containerRef.current, { animation: 'dynamic' });
        swapyRef.current.onSwap((event: any) =>
            console.log('Nuevo orden:', event.newSlotItemMap.asArray)
        );
        return () => swapyRef.current?.destroy();
    }, []);

    // cada vez que cambie `items` (se añada/elimine), forzamos refresh
    useEffect(() => {
        swapyRef.current?.update?.();
    }, [items]);

    return (
        <>
            <div ref={containerRef} className="swapy-container
                grid grid-cols-1 md:grid-cols-6 gap-8
            ">
                {items.map((item) => (
                    <div key={item.id} className="slot" data-swapy-slot={`slot-${item.id}`}>
                        <div className="item" data-swapy-item={item.id}>
                            <img src={item.icon} alt={item.name} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
