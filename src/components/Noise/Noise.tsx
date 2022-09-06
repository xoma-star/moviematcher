import React from 'react';

const Noise = () => {
    return (
        <svg className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light top-0 left-0" width="100%"
             height="100%">
            <filter id="aboba">
                <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
            </filter>
            <rect width="100%" height="100%" filter="url(#aboba)"></rect>
        </svg>
    );
};

export default Noise;