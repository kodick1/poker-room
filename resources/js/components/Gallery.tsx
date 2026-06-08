import React from 'react';

export default function Gallery() {
    return (
        <section className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <h3 className="mb-3 text-lg font-bold">Galería</h3>
            <div className="grid grid-cols-3 gap-2">
                <div className="h-20 w-full rounded bg-gray-200 dark:bg-gray-800" />
                <div className="h-20 w-full rounded bg-gray-200 dark:bg-gray-800" />
                <div className="h-20 w-full rounded bg-gray-200 dark:bg-gray-800" />
            </div>
        </section>
    );
}
