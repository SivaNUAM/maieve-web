import React, { useState } from 'react';
import { Heart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import CommunityMapPreview from '../components/community/CommunityMapPreview';
import CommunityStoryCard from '../components/community/CommunityStoryCard';
import CommunityValues from '../components/community/CommunityValues';
import FoodSharingCard, {
  type FoodSharingItem,
} from '../components/community/FoodSharingCard';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import {
  communityMapLocations,
  communityStories,
  foodSharingItems,
} from '../data/community';
import { ROUTES } from '../lib/constants';

const ease = [0.22, 1, 0.36, 1] as const;

const CommunityPage: React.FC = () => {
  const [joinedId, setJoinedId] = useState<string | null>(null);
  const joined = foodSharingItems.find((item) => item.id === joinedId);

  const handleViewDetails = (item: FoodSharingItem) => {
    setJoinedId(item.id);
  };

  return (
    <main className="min-h-screen bg-[#FFF8EE] text-[#0B2E20]">
      <section className="px-4 pb-8 pt-6 sm:px-5 lg:px-6 lg:pt-8">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium italic text-[#0F6B4F]!">
              <Leaf size={14} className="shrink-0" />
              <span>Offered freely</span>
              <span aria-hidden="true">·</span>
              <span>Within a kilometre</span>
              <span aria-hidden="true">·</span>
              <span>Among neighbours</span>
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-[2rem]! font-semibold! leading-[1.05]! tracking-[-0.03em] text-[#0B2E20]! sm:text-5xl! lg:text-6xl!">
              A place kept
              <span className="block italic text-[#0F6B4F]!">at a nearby table</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#3E3A1D]! sm:mt-5 sm:text-base">
              When a home has more than it needs, that kindness stays close.
              Accept an invitation, walk over, and share a meal that asks
              nothing in return.
            </p>
            <div className="mt-6 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#shared-meals"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B2E20] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,46,32,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F6B4F] sm:w-auto"
              >
                <Heart size={16} />
                Find a place at the table
              </a>
              <Link
                to={ROUTES.MARKETPLACE}
                className="text-sm font-semibold text-[#0B2E20] underline decoration-[#D4AF37] underline-offset-4"
              >
                Or request a plate to collect
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease }}
            className="relative mx-auto h-[340px] w-full max-w-lg overflow-hidden sm:h-[420px]"
          >
            {foodSharingItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute overflow-hidden rounded-[1.4rem] shadow-[0_18px_40px_rgba(11,46,32,0.16)] sm:rounded-[1.6rem] ${
                  index === 0
                    ? 'left-0 top-4 h-52 w-[66%] sm:top-6 sm:h-64 sm:w-[68%]'
                    : index === 1
                      ? 'right-0 top-0 h-36 w-[44%] sm:h-44 sm:w-[42%]'
                      : 'bottom-16 right-3 h-32 w-[48%] sm:bottom-4 sm:right-6 sm:h-40 sm:w-[46%]'
                }`}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  containerClassName="h-full w-full"
                />
              </div>
            ))}
            <div className="absolute inset-x-3 bottom-3 max-w-none rounded-2xl bg-white px-3 py-2.5 shadow-[0_12px_28px_rgba(11,46,32,0.12)] sm:inset-x-auto sm:bottom-8 sm:left-6 sm:max-w-[14rem] sm:px-4 sm:py-3">
              <p className="font-serif text-base font-semibold text-[#0B2E20] sm:text-lg">
                {joined ? joined.title : 'A place kept for you'}
              </p>
              <p className="mt-1 break-words text-xs leading-5 text-[#3E3A1D]">
                {joined
                  ? `A place with ${joined.contributorName} · ${joined.availableTime}`
                  : 'Someone nearby cooked a little more, and saved you a seat.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-[1440px]">
          <CommunityValues />
        </div>
      </section>

      <section id="shared-meals" className="scroll-mt-20 px-4 py-10 sm:px-5 lg:scroll-mt-32 lg:px-6">
        <div className="mx-auto w-full max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0F6B4F]! sm:tracking-[0.2em]">
            Shared meals
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-lg font-serif text-2xl! font-semibold! leading-tight! text-[#0B2E20]! sm:text-4xl! lg:text-5xl!">
              An open place at the table
            </h2>
            <p className="max-w-sm text-sm leading-6 text-[#3E3A1D]!">
              These meals are offered within about a kilometre. The family
              keeps what it needs, and welcomes neighbours to the rest.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-3">
            {foodSharingItems.map((item) => (
              <FoodSharingCard
                key={item.id}
                item={item}
                joined={item.id === joinedId}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-[1440px]">
          <CommunityMapPreview
            locations={communityMapLocations}
            title="A short walk from your door"
            description="Shared meals, home kitchens, and garden circles remain within a gentle kilometre of home."
          />
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 sm:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0F6B4F]! sm:tracking-[0.2em]">
            From the neighbourhood
          </p>
          <h2 className="mt-3 max-w-lg font-serif text-2xl! font-semibold! leading-tight! text-[#0B2E20]! sm:text-4xl! lg:text-5xl!">
            Stories from nearby homes
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-3">
            {communityStories.map((story) => (
              <CommunityStoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommunityPage;
