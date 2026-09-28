import React, { useMemo, useState } from 'react';
import { Home, Leaf, Sprout, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

import PlantGrid from '../components/plants/PlantGrid';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import { plants } from '../data/plants';

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

type PlaceFilter = 'All' | 'Home' | 'Office';

const places: { id: PlaceFilter; label: string }[] = [
  { id: 'All', label: 'All spaces' },
  { id: 'Home', label: 'Homes' },
  { id: 'Office', label: 'Offices' },
];

const notes = [
  { icon: Sun, title: 'Light', text: 'Low, medium, or bright, marked on every plant.' },
  { icon: Sprout, title: 'Care', text: 'Watering and care level come with the plant.' },
  { icon: Home, title: 'Place', text: 'Picked for a kitchen, a balcony, or a quiet desk.' },
];

const PlantsPage: React.FC = () => {
  const [place, setPlace] = useState<PlaceFilter>('All');

  const visiblePlants = useMemo(
    () =>
      plants.filter((plant) => {
        if (place === 'All') return true;
        return plant.suitableFor === place || plant.suitableFor === 'Both';
      }),
    [place],
  );

  return (
    <main className="min-h-screen bg-[#FFF8EE]">
      <section className="px-4 pb-12 pt-6 sm:px-5 sm:pb-8 sm:pt-8 lg:px-6">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p
              variants={rise}
              className="flex flex-wrap items-center gap-2 text-sm font-medium italic text-[#0F6B4F]!"
            >
              <Leaf size={14} />
              The same neighbors, growing
            </motion.p>
            <motion.h1
              variants={rise}
              className="mt-4 max-w-xl font-serif text-[2rem]! font-semibold! leading-[1.05]! tracking-[-0.03em] text-[#0B2E20]! sm:text-5xl! lg:text-6xl!"
            >
              Plants from
              <span className="block italic text-[#0F6B4F]!">people you follow</span>
            </motion.h1>
            <motion.p
              variants={rise}
              className="mt-4 max-w-lg text-sm leading-7 text-[#3E3A1D]! sm:mt-5 sm:text-lg"
            >
              A cook posts the herb on their step, with light and water notes.
              Ask for a cutting and pick it up from that home.
            </motion.p>
            <motion.div variants={rise} className="mt-6 flex flex-wrap gap-2">
              {['Homes', 'Offices', 'Seeds'].map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-[#FFF8EE] px-4 py-2 text-sm font-semibold text-[#0F6B4F]"
                >
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute right-0 top-6 h-40 w-40 rounded-full bg-[#0F6B4F]/20 blur-3xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200&auto=format&fit=crop"
              alt="A snake plant in a bright room"
              containerClassName="aspect-[4/3] w-full rounded-[1.5rem] shadow-[0_24px_60px_rgba(11,46,32,0.12)] sm:aspect-[5/4] sm:rounded-[2rem]"
            />
            <div className="absolute bottom-3 right-3 max-w-[calc(100%-1.5rem)] rounded-2xl bg-white px-3 py-2.5 shadow-[0_14px_30px_rgba(11,46,32,0.1)] sm:bottom-4 sm:right-6 sm:px-4 sm:py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F6B4F]!">
                Care included
              </p>
              <p className="mt-1 text-sm font-bold text-[#0B2E20]!">
                Light, water, and place
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-5 lg:px-6">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-3 gap-2 sm:gap-3">
          {notes.map((note) => (
            <div
              key={note.title}
              className="min-w-0 rounded-2xl border border-[#D4AF37] bg-[#FFF8EE] p-2.5 sm:flex sm:items-start sm:gap-3 sm:p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#0F6B4F] sm:h-10 sm:w-10">
                <note.icon size={16} />
              </span>
              <div className="min-w-0">
                <p className="mt-2 text-xs font-bold text-[#0B2E20]! sm:mt-0 sm:text-sm">
                  {note.title}
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#3E3A1D]! sm:text-sm sm:leading-6">
                  {note.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-14 pt-4 sm:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl! font-semibold! text-[#0B2E20]! sm:text-3xl!">
                Growing near you
              </h2>
              <p className="mt-2 text-sm text-[#3E3A1D]!">
                {visiblePlants.length}{' '}
                {visiblePlants.length === 1 ? 'post' : 'posts'} with care notes
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
              {places.map((item) => {
                const active = place === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPlace(item.id)}
                    className={`rounded-full px-2 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 sm:text-sm ${
                      active
                        ? 'bg-[#0F6B4F] text-white shadow-[0_8px_18px_rgba(15,107,79,0.28)]'
                        : 'bg-[#FFF8EE] text-[#0B2E20] hover:bg-[#FFF8EE]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <PlantGrid plants={visiblePlants} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlantsPage;
