import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-[var(--rf-black)]">
            <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
                    <div className="flex items-center gap-3">
                        <div className="text-[var(--rf-gold)] font-bold">RF</div>
                        <div>Royal Flush Poker Club © 2024</div>
                    </div>

                    <nav className="flex gap-4">
                        <a href="#" className="text-gray-500">Inicio</a>
                        <a href="#" className="text-gray-500">Torneos</a>
                        <a href="#" className="text-gray-500">Contacto</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
