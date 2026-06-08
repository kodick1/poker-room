import React from 'react';

export default function ScheduleSection() {
    return (
        <section className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-2 text-lg font-bold">Horario de atención</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Domingo a Domingo — 10:00 AM - 3:00 AM</p>
            <div className="mt-3 inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--rf-green)]" />
                <span className="text-sm text-gray-500">Abierto ahora</span>
            </div>
        </section>
    );
}
