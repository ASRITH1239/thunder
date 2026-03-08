import React from 'react';

const GrainOverlay = () => {
    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.025] mix-blend-overlay">
            <svg className="w-full h-full">
                <filter id="grainy-noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.75"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grainy-noise)" />
            </svg>
            {/* High-frequency animated noise overlay */}
            <div className="absolute inset-0 bg-noise-animate" />
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes noise {
          0%, 100% { transform:translate(0,0) }
          10% { transform:translate(-1%,-1%) }
          20% { transform:translate(-2%,1%) }
          30% { transform:translate(1%,-2%) }
          40% { transform:translate(-1%,2%) }
          50% { transform:translate(-2%,1%) }
        }
        .bg-noise-animate {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          background-repeat: repeat;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          animation: noise 0.2s steps(2) infinite;
          opacity: 0.15;
          pointer-events: none;
        }
      `}} />
        </div>
    );
};

export default GrainOverlay;
