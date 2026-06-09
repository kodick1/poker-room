import {
    Gem,
    Shield,
    Headphones,
    Scale,
    Timer,
} from "lucide-react";

const features = [
    {
        title: "Ambiente Premium",
        description: "Disfruta de un lugar exclusivo y seguro.",
        icon: Gem,
    },
    {
        title: "Seguridad",
        description: "Control y transparencia en cada juego.",
        icon: Shield,
    },
    {
        title: "Atención Permanente",
        description: "Nuestro equipo siempre dispuesto a ayudarte.",
        icon: Headphones,
    },
    {
        title: "Fair Play",
        description: "Juego limpio para todos los jugadores.",
        icon: Scale,
    },
    {
        title: "Próximamente",
        description: "Más funciones y estadísticas disponibles pronto.",
        icon: Timer,
        disabled: true,
    },
];

export default function FeaturesSection() {
    return (
        <section className="mt-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">

                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.title}
                            className={`
                                rounded-xl
                                border
                                p-4
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                                bg-white
                                dark:bg-[#0b0b0b]
                                ${
                                    feature.disabled
                                        ? "opacity-60"
                                        : "hover:border-[var(--rf-gold)]"
                                }
                            `}
                        >
                            <div className="flex items-start gap-3">

                                <div
                                    className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[var(--rf-gold)]/10
                                    "
                                >
                                    <Icon
                                        size={28}
                                        className="text-[var(--rf-gold)]"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-sm">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}