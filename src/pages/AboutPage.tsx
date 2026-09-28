import React from 'react';
import {
  BadgeCheck,
  ChefHat,
  HeartHandshake,
  Leaf,
  MapPin,
  Sprout,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ROUTES } from '../lib/constants';

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: '01',
    title: 'A cook posts',
    text: 'Someone at home lists the extra plates they already cooked today.',
  },
  {
    number: '02',
    title: 'You request one',
    text: 'Follow nearby cooks the way you follow people, then ask for a plate.',
  },
  {
    number: '03',
    title: 'You walk over',
    text: 'Pickup stays inside a small kilometre range. You take the food from their hands.',
  },
  {
    number: '04',
    title: 'A seat can be free',
    text: 'Food shared within about a kilometre has no bill. The point is the company.',
  },
];

const cares: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  label: string;
}> = [
  {
    icon: ChefHat,
    title: 'Recipe AI',
    description:
      'Name a dish and get the ingredients, the quantities, the skill level, and a video for each step.',
    href: ROUTES.RECIPES,
    label: 'Open Recipe AI',
  },
  {
    icon: Sprout,
    title: 'Plants at home',
    description:
      'Organic plants and seeds for a kitchen window, a balcony, or a quiet desk, with care notes included.',
    href: ROUTES.PLANTS,
    label: 'Browse plants',
  },
  {
    icon: MapPin,
    title: 'Plates nearby',
    description:
      'Registered home cooks sell extra food. You collect it yourself. No delivery rider is in the middle.',
    href: ROUTES.MARKETPLACE,
    label: 'See food near you',
  },
  {
    icon: HeartHandshake,
    title: 'An open seat',
    description:
      'Extra plates within about a kilometre can be shared for free, so neighbours sit down and leave as friends.',
    href: ROUTES.COMMUNITY,
    label: 'Join a shared meal',
  },
];

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FFF8EE] text-[#0B2E20]">
      <section className="px-4 pb-8 pt-6 sm:px-5 lg:px-6 lg:pt-8">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium italic text-[#0F6B4F]!">
              <Leaf size={14} className="shrink-0" />
              <span>Cook</span>
              <span aria-hidden="true">·</span>
              <span>Grow</span>
              <span aria-hidden="true">·</span>
              <span>Share</span>
              <span aria-hidden="true">·</span>
              <span>Repeat</span>
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-[2rem]! font-semibold! leading-[1.05]! tracking-[-0.03em] text-[#0B2E20]! sm:text-5xl! lg:text-6xl!">
              Food that stays
              <span className="block italic text-[#0F6B4F]!">in the neighbourhood</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#3E3A1D]! sm:mt-5 sm:text-base">
              Nourish is a feed of home cooks. See what they made, request a
              plate, and pick it up from the house. Sharing within about a
              kilometre stays free.
            </p>
            <div className="mt-6 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to={ROUTES.MARKETPLACE}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#0B2E20] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,46,32,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F6B4F] sm:w-auto"
              >
                Explore homemade food
              </Link>
              <Link
                to={ROUTES.COMMUNITY}
                className="text-sm font-semibold text-[#0B2E20] underline decoration-[#D4AF37] underline-offset-4"
              >
                Meet the community
              </Link>
            </div>
          </motion.div>

          <motion.ol
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease }}
            className="rounded-[1.4rem] bg-white p-2 shadow-[0_18px_44px_rgba(11,46,32,0.08)] sm:rounded-[1.8rem] sm:p-4"
          >
            {steps.map((step) => (
              <li
                key={step.number}
                className="flex gap-3 rounded-2xl px-2 py-3 sm:gap-4 sm:px-4 sm:py-4"
              >
                <span className="shrink-0 font-serif text-xl text-[#D4AF37] sm:text-2xl">
                  {step.number}
                </span>
                <div className="min-w-0">
                  <h2 className="break-words font-serif text-lg! font-semibold! text-[#0B2E20]! sm:text-xl!">
                    {step.title}
                  </h2>
                  <p className="mt-1 break-words text-sm leading-6 text-[#3E3A1D]!">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-5 lg:px-6">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0F6B4F]! sm:tracking-[0.2em]">
              Why it exists
            </p>
            <h2 className="mt-3 font-serif text-2xl! font-semibold! leading-tight! text-[#0B2E20]! sm:text-4xl! lg:text-5xl!">
              A family kitchen, not a delivery app
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <p className="rounded-[1.4rem] bg-white p-4 text-sm leading-7 text-[#3E3A1D]! shadow-[0_12px_30px_rgba(11,46,32,0.05)] sm:rounded-[1.6rem] sm:p-6">
              Mothers, aunts, and anyone at home can register and sell food
              they already cook. The family keeps what they need and lists the
              extra plates.
            </p>
            <p className="rounded-[1.4rem] bg-[#0B2E20] p-4 text-sm leading-7 text-[#FFF8EE]! sm:rounded-[1.6rem] sm:p-6">
              Someone nearby walks over and collects the meal. The cook and
              the neighbour meet directly, inside a small kilometre range.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0F6B4F]! sm:tracking-[0.2em]">
            What we care about
          </p>
          <h2 className="mt-3 max-w-lg font-serif text-2xl! font-semibold! leading-tight! text-[#0B2E20]! sm:text-4xl! lg:text-5xl!">
            Four ways to stay close to your food
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:mt-8 sm:gap-5 lg:grid-cols-4">
            {cares.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full min-w-0 flex-col rounded-[1.4rem] bg-white p-4 shadow-[0_12px_30px_rgba(11,46,32,0.05)] sm:rounded-[1.6rem] sm:p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF8EE] text-[#0F6B4F] sm:h-12 sm:w-12">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 break-words font-serif text-lg! font-semibold! leading-tight! text-[#0B2E20]! sm:mt-5 sm:text-2xl!">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 break-words text-xs leading-5 text-[#3E3A1D]! sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                  <Link
                    to={item.href}
                    className="mt-6 text-sm font-semibold text-[#0F6B4F] underline decoration-[#D4AF37] underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 sm:px-5 lg:px-6">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-6 rounded-[1.4rem] bg-[#0B2E20] px-4 py-8 text-[#FFF8EE] sm:gap-8 sm:rounded-[1.8rem] sm:px-10 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-12">
          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-2 text-sm font-medium italic text-[#D4AF37]!">
              <BadgeCheck size={16} className="shrink-0" />
              Selling guidance
            </p>
            <h2 className="mt-3 max-w-lg break-words font-serif text-2xl! font-semibold! leading-tight! text-[#FFF8EE]! sm:text-4xl! lg:text-5xl!">
              A clear path to an FSSAI licence
            </h2>
            <p className="mt-4 max-w-xl break-words text-sm leading-7 text-[#FFF8EE]! sm:text-base">
              Home cooks who want to sell can read how an FSSAI food licence
              works, what it is for, and how to begin the application. The
              guide stays public so a family kitchen is not left guessing.
            </p>
          </div>
          <ul className="space-y-3 rounded-[1.2rem] bg-[#FFF8EE] p-4 text-sm leading-6 break-words text-[#3E3A1D] sm:rounded-[1.4rem] sm:p-6">
            <li>Who needs a licence before selling homemade food</li>
            <li>Which details a home kitchen should keep ready</li>
            <li>How to start the FSSAI application</li>
            <li>How selling on Nourish fits after you are registered</li>
            <li className="pt-2">
              <Link
                to={ROUTES.MARKETPLACE}
                className="inline-flex w-full justify-center rounded-full bg-[#0F6B4F] px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0B2E20] sm:w-auto"
              >
                Start selling nearby
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
