import React, { useMemo, useState } from 'react';
import { ChefHat, Clapperboard, Leaf, ListChecks } from 'lucide-react';
import { motion } from 'framer-motion';

import RecipeGrid from '../components/recipe/RecipeGrid';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import { recipes } from '../data/recipes';

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

type LevelFilter = 'All' | 'Easy' | 'Medium';

const levels: LevelFilter[] = ['All', 'Easy', 'Medium'];

const facts = [
  { icon: ListChecks, label: 'Ingredients', text: 'What to buy, and how much' },
  { icon: ChefHat, label: 'Level', text: 'Easy or medium, before you start' },
  { icon: Clapperboard, label: 'Videos', text: 'A clip for every step' },
];

const RecipePage: React.FC = () => {
  const [level, setLevel] = useState<LevelFilter>('All');

  const visibleRecipes = useMemo(
    () =>
      level === 'All'
        ? recipes
        : recipes.filter((recipe) => recipe.difficulty === level),
    [level],
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
              Neighbors cooking today
            </motion.p>
            <motion.h1
              variants={rise}
              className="mt-4 max-w-xl font-serif text-[2rem]! font-semibold! leading-[1.05]! tracking-[-0.03em] text-[#0B2E20]! sm:text-5xl! lg:text-6xl!"
            >
              Cook along
              <span className="block italic text-[#0F6B4F]!">with someone nearby</span>
            </motion.h1>
            <motion.p
              variants={rise}
              className="mt-4 max-w-lg text-sm leading-7 text-[#3E3A1D]! sm:mt-5 sm:text-lg"
            >
              Follow a cook, open their post, and get the ingredients, the
              quantities, the level, and a video for each step.
            </motion.p>
            <motion.div
              variants={rise}
              className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3"
            >
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[#D4AF37] bg-[#FFF8EE] p-2.5 sm:p-4"
                >
                  <fact.icon size={18} className="text-[#0F6B4F]" />
                  <p className="mt-2 text-xs font-bold text-[#0B2E20]! sm:mt-3 sm:text-sm">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-[#3E3A1D]! sm:text-xs sm:leading-5">
                    {fact.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute left-0 top-8 h-40 w-40 rounded-full bg-[#0F6B4F]/20 blur-3xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&auto=format&fit=crop"
              alt="A fresh vegetable salad"
              containerClassName="aspect-[4/3] w-full rounded-[1.5rem] shadow-[0_24px_60px_rgba(11,46,32,0.12)] sm:aspect-[5/4] sm:rounded-[2rem]"
            />
            <div className="absolute bottom-3 left-3 rounded-2xl bg-white px-3 py-2.5 shadow-[0_14px_30px_rgba(11,46,32,0.1)] sm:bottom-4 sm:left-6 sm:px-4 sm:py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F6B4F]!">
                Ready to cook
              </p>
              <p className="mt-1 text-sm font-bold text-[#0B2E20]!">
                {recipes.length} homemade guides
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl! font-semibold! text-[#0B2E20]!">
                Today&apos;s cooking posts
              </h2>
              <p className="mt-2 text-sm text-[#3E3A1D]!">
                {visibleRecipes.length}{' '}
                {visibleRecipes.length === 1 ? 'post' : 'posts'} from neighbors
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
              {levels.map((item) => {
                const active = level === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLevel(item)}
                    className={`rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300 sm:px-4 ${
                      active
                        ? 'bg-[#0F6B4F] text-white shadow-[0_8px_18px_rgba(15,107,79,0.28)]'
                        : 'bg-[#FFF8EE] text-[#0B2E20] hover:bg-[#FFF8EE]'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <RecipeGrid recipes={visibleRecipes} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecipePage;
