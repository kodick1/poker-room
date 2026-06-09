import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-xl bg-white p-5 shadow-md dark:bg-[#0b0b0b] border border-gray-200 dark:border-zinc-800">
            {children}
        </div>
    );
}

export default function StatsCards() {
    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* TELEFONO */}
            <Card>
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Phone size={22} />
                    </div>

                    <div>
                        <h3 className="text-xs uppercase text-gray-500">
                            Teléfono
                        </h3>

                        <a
                            href="tel:+573209931968"
                            className="mt-1 block text-lg font-semibold hover:text-blue-600"
                        >
                            320 993 1968
                        </a>

                        <a
                            href="https://wa.me/573209931968"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block text-sm text-gray-400 hover:text-green-500"
                        >
                            Contáctanos por WhatsApp
                        </a>
                    </div>
                </div>
            </Card>

            {/* DIRECCION */}
            <Card>
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
                        <MapPin size={22} />
                    </div>

                    <div>
                        <h3 className="text-xs uppercase text-gray-500">
                            Dirección
                        </h3>

                        <a
                            href="https://maps.google.com/?q=Calle+52+15-97+Bogota"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block text-lg font-semibold hover:text-green-600"
                        >
                            Calle 52 #15-97
                        </a>

                        <p className="mt-1 text-sm text-gray-400">
                            Bogotá, Colombia
                        </p>

                        <a
                            href="https://maps.google.com/?q=Calle+52+15-97+Bogota"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block text-sm font-medium text-blue-600 hover:underline"
                        >
                            Ver en el mapa
                        </a>
                    </div>
                </div>
            </Card>

            {/* HORARIO */}
            <Card>
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
                        <Clock size={22} />
                    </div>

                    <div>
                        <h3 className="text-xs uppercase text-gray-500">
                            Horario de Atención
                        </h3>

                        <p className="mt-1 text-lg font-semibold">
                            Domingo a Domingo
                        </p>

                        <p className="mt-1 text-sm text-gray-400">
                            10:00 AM - 3:00 AM
                        </p>

                        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            ABIERTO AHORA
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
}