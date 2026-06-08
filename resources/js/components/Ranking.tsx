import React from 'react';

export default function Ranking() {
    return (
        <section className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <h3 className="mb-3 text-lg font-bold">Ranking</h3>
            <ol className="space-y-2 text-sm">
                <li className="flex items-center justify-between"> <span>1. Juan P.</span> <span className="font-medium">1200 pts</span></li>
                <li className="flex items-center justify-between"> <span>2. María R.</span> <span className="font-medium">1180 pts</span></li>
                <li className="flex items-center justify-between"> <span>3. Diego L.</span> <span className="font-medium">1105 pts</span></li>
            </ol>
        </section>
    );
}
