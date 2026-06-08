import React from 'react';

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-lg bg-white p-5 shadow-md dark:bg-[#0b0b0b]">
            {children}
        </div>
    );
}

export default function StatsCards() {
    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card>
                <h3 className="text-sm font-medium text-gray-500">Teléfono</h3>
                <p className="mt-1 text-lg font-semibold">320 993 1968</p>
                <p className="mt-1 text-sm text-gray-400">Contáctanos por WhatsApp</p>
            </Card>

            <Card>
                <h3 className="text-sm font-medium text-gray-500">Dirección</h3>
                <p className="mt-1 text-lg font-semibold">Calle 52 #15-97</p>
                <p className="mt-1 text-sm text-gray-400">Bogotá, Colombia</p>
            </Card>

            <Card>
                <h3 className="text-sm font-medium text-gray-500">Horario</h3>
                <p className="mt-1 text-lg font-semibold">Domingo a Domingo</p>
                <p className="mt-1 text-sm text-gray-400">10:00 AM - 3:00 AM</p>
            </Card>
        </section>
    );
}
