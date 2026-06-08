import React from 'react';

function Table({ name, seats, status }: { name: string; seats: string; status: string }) {
    return (
        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{seats}</p>
            <p className="mt-2 text-sm text-[var(--rf-green)]">{status}</p>
        </div>
    );
}

export default function LiveTables() {
    return (
        <section className="mt-6 space-y-3">
            <h3 className="mb-2 text-lg font-bold">Mesas en vivo</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Table name="Mesa 1" seats="6 / 9" status="Disponible" />
                <Table name="Mesa 2" seats="8 / 9" status="Pocos lugares" />
                <Table name="Mesa 3" seats="9 / 9" status="Completa" />
                <Table name="Mesa 4" seats="5 / 9" status="Disponible" />
            </div>
        </section>
    );
}
