import React from 'react';

export default function HeroSection() {
    return (
        <header className="relative w-full bg-gradient-to-r from-[var(--rf-black)] via-[#1f1f1f] to-[var(--rf-black)] text-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-20">
                <div className="max-w-2xl">
                    <h1 className="mb-4 text-4xl font-extrabold leading-tight text-[var(--rf-gold)]">Vive la mejor experiencia de poker</h1>
                    <p className="mb-6 text-lg text-white/80">Juega, compite y gana en el mejor ambiente.</p>

                    <div className="flex gap-3">
                        <a href="#tables" className="inline-block rounded-md bg-[var(--rf-gold)] px-5 py-3 font-semibold text-[var(--rf-black)] shadow">Ver mesas</a>
                        <a href="#location" className="inline-block rounded-md border border-white/20 px-5 py-3 text-white">Cómo llegar</a>
                    </div>
                </div>

                <div className="hidden w-1/3 rounded-lg bg-[var(--rf-white)]/5 p-4 lg:block">
                    <div className="aspect-video w-full overflow-hidden rounded">
                        <img alt="poker" src="/build/assets/poker-hero.jpg" className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </header>
    );
}
