import React from 'react';

export default function HeroSection() {
    return (
        <header className="relative w-full overflow-hidden text-white" style={{ minHeight: '480px' }}>
            
            {/* Imagen de fondo */}
           

            {/* Overlay degradado: negro a la izquierda, transparente a la derecha */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <img
                src="/build/assets/Captura-mejora.png"
                alt=""
                className="absolute  h-full w-full  object-cover object-right"
            /> 
            {/* Contenido encima */}
            <div className="relative z-10 mx-auto flex max-w-6xl items-center px-6 py-20">
                
                <div className="max-w-xl">
                    <h1 className="mb-4 text-4xl font-extrabold leading-tight text-[var(--rf-gold)]">
                        Vive la mejor experiencia de poker
                    </h1>
                    <p className="mb-6 text-lg text-white/80">
                        Juega, compite y gana en el mejor ambiente.
                    </p>
                    <div className="flex gap-3">
                        <a href="#tables" className="inline-block rounded-md bg-[var(--rf-gold)] px-5 py-3 font-semibold text-[var(--rf-black)] shadow">
                            Ver mesas
                        </a>
                        <a href="#location" className="inline-block rounded-md border border-white/20 px-5 py-3 text-white">
                            Cómo llegar
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}