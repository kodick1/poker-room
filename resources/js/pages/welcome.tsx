import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import HeroSection from '@/components/HeroSection';
import StatsCards from '@/components/StatsCards';
import TournamentCard from '@/components/TournamentCard';
import LiveTables from '@/components/LiveTables';
import Ranking from '@/components/Ranking';
import Gallery from '@/components/Gallery';
import LocationSection from '@/components/LocationSection';
import ScheduleSection from '@/components/ScheduleSection';
import Footer from '@/components/Footer';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-[var(--rf-white)] text-[var(--rf-black)] dark:bg-[var(--rf-black)] dark:text-[var(--rf-white)]">
                <HeroSection />

                <main className="mx-auto max-w-6xl px-6 py-10">
                    <StatsCards />

                    <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="col-span-2">
                            <TournamentCard />
                            <LiveTables />
                        </div>
                        <aside className="col-span-1 space-y-6">
                            <Ranking />
                            <Gallery />
                        </aside>
                    </section>

                    <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <LocationSection />
                        <ScheduleSection />
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
