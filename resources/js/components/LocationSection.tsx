import React from 'react';

export default function LocationSection() {
    const mapsUrl = 'https://www.google.com/maps/search/Calle+52+15-97+Bogota+Colombia';
    
    return (
        <section id="location" className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-2 text-lg font-bold">Dirección</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Calle 52 #15-97, Bogotá, Colombia</p>
            <a className="mt-4 inline-block text-[var(--rf-blue)]" href={mapsUrl} target="_blank" rel="noreferrer">Ver en el mapa</a>
        </section>
    );
}
