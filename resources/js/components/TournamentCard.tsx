import React from 'react';

export default function TournamentCard() {
    return (
        <section className="rounded-lg bg-gradient-to-r from-[#0b0b0b] to-[#1a1a1a] p-6 text-white shadow-md">
            <div className="flex items-center justify-between">
                <div>
                    <span className="inline-block rounded-full bg-[var(--rf-gold)] px-3 py-1 text-sm font-semibold text-[var(--rf-black)]">Torneo destacado</span>
                    <h2 className="mt-4 text-2xl font-bold">Free Roll Turbo</h2>
                    <p className="mt-2 text-sm text-white/80">Lunes — 4:00 PM — Entrada: FREE</p>
                </div>

                <div>
                    <a className="inline-block rounded-md border border-white/20 px-4 py-2 text-sm" href="#tournaments">Ver torneos</a>
                </div>
            </div>
        </section>
    );
}
