import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  ChefHat,
  Clapperboard,
  Clock,
  Heart,
  HeartHandshake,
  Home,
  Leaf,
  ListChecks,
  MapPin,
  Play,
  ShoppingBag,
  Sprout,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import heroScene from '../assets/images/hero-neighborhood.png';
import sharedMeal from '../assets/images/shared-meal.jpg';
import HowItWorks from '../components/home/HowItWorks';
import PickupJourney from '../components/home/PickupJourney';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import { ROUTES } from '../lib/constants';

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const viewport = { once: true, amount: 0.28 } as const;

const buttonPrimary =
  'inline-flex items-center rounded-lg bg-[#0F6B4F] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(15,107,79,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2E20] hover:shadow-[0_14px_30px_rgba(15,107,79,0.36)]';

const buttonDark =
  'inline-flex items-center rounded-lg bg-[#0B2E20] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2E20] hover:shadow-[0_12px_28px_rgba(11,46,32,0.22)]';

const buttonGhost =
  'inline-flex items-center rounded-lg border border-[#D4AF37] bg-white px-6 py-3 text-sm font-semibold text-[#0B2E20] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0F6B4F] hover:shadow-[0_10px_24px_rgba(11,46,32,0.06)]';

const HomePage: React.FC = () => {
  return (
    <main className="bg-[#FFF8EE] text-[#0B2E20]">
      <section className="relative z-10 px-4 pb-8 pt-6 sm:px-5 sm:pb-16 lg:min-h-[760px] lg:px-6 lg:pb-20 lg:pt-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={heroScene}
            alt="A neighbor with a green tote looking toward a home cook's house"
            className="h-full w-full object-cover object-[68%_center] lg:object-[62%_center]"
          />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-8 lg:min-h-[680px] lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.p
              variants={rise}
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium italic text-[#0F6B4F]!"
            >
              <Leaf size={14} />
              Real Food · Real People · Local Homes
              <Leaf size={14} className="rotate-180" />
            </motion.p>

            <motion.h1
              variants={rise}
              className="mt-4 max-w-xl font-serif text-[2.35rem] font-semibold! leading-[1.02] tracking-[-0.03em] text-[#0B2E20]! min-[380px]:text-[2.7rem] sm:text-6xl lg:text-[4.4rem]"
            >
              Homemade Food
              <span className="block">from Your</span>
              <span className="block italic text-[#0F6B4F]!">Neighborhood</span>
            </motion.h1>

            <motion.p
              variants={rise}
              className="mt-5 max-w-md text-sm leading-7 text-[#3E3A1D]! sm:text-base"
            >
              Discover, connect and enjoy fresh homemade meals prepared by
              people in your community.
            </motion.p>

            <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={ROUTES.MARKETPLACE}
                className="inline-flex items-center gap-2 rounded-full bg-[#0B2E20] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,46,32,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F6B4F]"
              >
                Explore Homemade Food
                <ArrowRight size={16} />
              </Link>
              <a
                href="#pickup-journey"
                className="inline-flex items-center gap-3 text-sm font-semibold text-[#0B2E20]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0B2E20]/20 bg-white text-[#0B2E20] shadow-sm">
                  <Play size={16} className="ml-0.5 fill-[#0B2E20]" />
                </span>
                <span>
                  Watch Story
                  <span className="mt-0.5 block text-[11px] font-medium text-[#3E3A1D]">
                    (1 min)
                  </span>
                </span>
              </a>
            </motion.div>
          </motion.div>

          <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[640px]">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease }}
              className="absolute right-0 top-2 z-20 w-[min(100%,230px)] rounded-[1.35rem] bg-white p-2.5 shadow-[0_18px_40px_rgba(11,46,32,0.18)] sm:top-4 sm:w-[248px]"
            >
              <div className="flex items-center gap-2.5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop"
                  alt="Priya"
                  containerClassName="h-10 w-10 shrink-0 rounded-full"
                />
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1 text-sm font-bold text-[#0B2E20]!">
                    Priya&apos;s Kitchen
                    <BadgeCheck size={14} className="text-[#0F6B4F]" />
                  </p>
                  <p className="truncate text-[11px] text-[#3E3A1D]!">
                    Homemade Vegetable Thali
                  </p>
                </div>
                <Heart size={16} className="text-[#0F6B4F]" />
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&auto=format&fit=crop"
                alt="Homemade vegetable thali"
                containerClassName="mt-3 h-28 w-full rounded-xl"
              />
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-medium text-[#3E3A1D]">
                <span>₹120</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} />
                  30 mins
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} />
                  2.4 km
                </span>
              </div>
            </motion.article>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5, ease }}
              className="absolute right-4 top-[16.75rem] z-20 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(11,46,32,0.12)] sm:right-8"
            >
              <span className="flex -space-x-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
                  alt=""
                  containerClassName="h-6 w-6 rounded-full ring-2 ring-white"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop"
                  alt=""
                  containerClassName="h-6 w-6 rounded-full ring-2 ring-white"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
                  alt=""
                  containerClassName="h-6 w-6 rounded-full ring-2 ring-white"
                />
              </span>
              <Heart size={12} className="fill-[#0F6B4F] text-[#0F6B4F]" />
              <p className="text-[11px] font-semibold text-[#0B2E20]!">
                Loved by 124 people
              </p>
            </motion.div>

            <div className="absolute bottom-16 right-1 z-20 hidden w-[7.2rem] rotate-3 rounded-sm border border-[#C4A574] bg-[#F6E7C4] px-2.5 py-3 text-center shadow-[0_8px_18px_rgba(92,64,32,0.18)] sm:block">
              <p className="font-serif text-[11px] leading-[1.35] font-semibold text-[#3E3A1D]">
                Good Food
                <span className="mt-1 block">Happy People</span>
                <span className="mt-1 block">Local Homes</span>
              </p>
            </div>

            <div className="absolute bottom-[28%] left-[8%] z-20 hidden lg:block">
              <p className="font-serif text-xl leading-tight italic text-[#0F6B4F]">
                Support
                <span className="block">Local Cooks</span>
              </p>
              <svg
                viewBox="0 0 120 48"
                className="ml-8 mt-1 h-10 w-24 text-[#0F6B4F]"
                aria-hidden="true"
              >
                <path
                  d="M8 36c28-6 46-22 78-28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeDasharray="3 4"
                />
                <path d="M78 6l10 4-8 8" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative z-30 mx-auto mt-5 w-full max-w-[1440px] sm:absolute sm:inset-x-5 sm:bottom-0 sm:mx-0 sm:mt-0 sm:w-auto sm:max-w-none sm:translate-y-[50%] lg:inset-x-6">
          <ul className="mx-auto grid w-full max-w-[980px] grid-cols-2 gap-2 rounded-[1.35rem] bg-white p-3 shadow-[0_16px_40px_rgba(11,46,32,0.12)] sm:flex sm:items-center sm:justify-between sm:gap-2 sm:rounded-full sm:px-6 sm:py-3.5">
            {[
              { icon: Leaf, title: 'Fresh & Healthy', detail: 'Ingredients' },
              { icon: Home, title: 'Made by', detail: 'Local Cooks' },
              { icon: Users, title: 'Support', detail: 'Communities' },
              { icon: Heart, title: 'Real Connections', detail: 'Not Just Orders' },
            ].map((item) => (
              <li key={item.detail} className="flex min-w-0 items-center gap-2.5 px-1 sm:min-w-[9.5rem] sm:px-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E7F3EE] text-[#0F6B4F]">
                  <item.icon size={16} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold leading-4 text-[#0B2E20]">{item.title}</span>
                  <span className="block text-[11px] leading-4 text-[#3E3A1D]">{item.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks />

      <PickupJourney />

      <section className="border-t border-[#D4AF37] bg-[#FFF8EE] px-4 py-14 sm:px-5 lg:px-6">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            {
              title: 'Recipes',
              text: 'AI lists the ingredients, the level, and a video for the meal you want to cook.',
              href: ROUTES.RECIPES,
              icon: ChefHat,
            },
            {
              title: 'Plants',
              text: 'Organic plants and seeds for homes and offices.',
              href: ROUTES.PLANTS,
              icon: Leaf,
            },
            {
              title: 'Marketplace',
              text: 'Register and sell extra homemade food nearby, with no delivery agent.',
              href: ROUTES.MARKETPLACE,
              icon: ShoppingBag,
            },
            {
              title: 'Community',
              text: 'Share extra food within about a kilometre, free, and meet your neighbors.',
              href: ROUTES.COMMUNITY,
              icon: HeartHandshake,
            },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, delay: index * 0.08, ease }}
            >
              <Link
                to={item.href}
                className="group flex h-full flex-col rounded-2xl bg-white p-3.5 shadow-[0_10px_30px_rgba(11,46,32,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(11,46,32,0.1)] sm:p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF8EE] text-[#0F6B4F] transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11 sm:rounded-2xl">
                  <item.icon size={18} />
                </span>
                <h2 className="mt-3 break-words text-base! font-semibold! leading-tight! text-[#0B2E20]! sm:mt-4 sm:text-lg!">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-xs leading-5 text-[#3E3A1D]! sm:mt-2 sm:text-sm sm:leading-6">
                  {item.text}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-5 sm:py-20 lg:px-6">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={rise}
          >
            <p className="text-sm font-semibold text-[#0F6B4F]!">
              Recipe AI
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-extrabold tracking-[-0.03em] text-[#0B2E20]! sm:text-5xl">
              Tell us the dish. AI prepares the rest.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#3E3A1D]! sm:text-base">
              When you want to cook, the app gives you the ingredients, the
              quantities, the skill level, and a video for each step. You do
              not have to search five different places.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: ListChecks, label: 'Ingredients', detail: 'What to buy and how much' },
                { icon: ChefHat, label: 'Level', detail: 'Easy, medium, or hard' },
                { icon: Clapperboard, label: 'Videos', detail: 'A clip for every step' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, delay: 0.12 + index * 0.08, ease }}
                  className="rounded-2xl border border-[#D4AF37] bg-[#FFF8EE] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_12px_28px_rgba(15,107,79,0.12)]"
                >
                  <item.icon size={18} className="text-[#0F6B4F]" />
                  <p className="mt-3 text-sm font-bold text-[#0B2E20]!">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#3E3A1D]!">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
            <Link to={ROUTES.RECIPES} className={`${buttonPrimary} mt-8`}>
              Open Recipe AI
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
            className="group overflow-hidden rounded-[2rem]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&auto=format&fit=crop"
              alt="A home cook preparing a meal with fresh ingredients"
              containerClassName="aspect-[3/2] h-auto w-full sm:aspect-auto sm:h-[460px]"
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FFF8EE] px-4 py-16 sm:px-5 sm:py-20 lg:px-6">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
            className="group overflow-hidden rounded-[2rem]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&auto=format&fit=crop"
              alt="Organic plants growing for a home garden"
              containerClassName="aspect-[3/2] h-auto w-full sm:aspect-auto sm:h-[460px]"
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={rise}
          >
            <p className="text-sm font-semibold text-[#0F6B4F]!">
              Organic plants and seeds
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-extrabold tracking-[-0.03em] text-[#0B2E20]! sm:text-5xl">
              Grow something for home or the office.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#3E3A1D]! sm:text-base">
              Find organic plants and seeds for a kitchen window, a balcony,
              or a quiet desk. Care notes come with each plant, so a first
              garden is easier to keep alive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Home, label: 'Homes' },
                { icon: Sprout, label: 'Offices' },
                { icon: Leaf, label: 'Seeds' },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0B2E20]"
                >
                  <item.icon size={16} className="text-[#0F6B4F]" />
                  {item.label}
                </span>
              ))}
            </div>
            <Link to={ROUTES.PLANTS} className={`${buttonDark} mt-8`}>
              Browse plants
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-5 sm:py-20 lg:px-6">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0F6B4F]!">
              Sell from your kitchen
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-[#0B2E20]! sm:text-5xl">
              Extra food can reach a neighbor, not a delivery agent.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#3E3A1D]! sm:text-base">
              Mothers, aunts, and anyone at home can register and sell food
              they already cook. Pickup stays inside a small kilometre range,
              so the cook and the customer meet directly.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                step: '01',
                title: 'The family cooks together',
                text: 'Three people at home wake early and prepare a meal meant for five.',
              },
              {
                step: '02',
                title: 'Two portions are listed',
                text: 'The family keeps what they need and puts the extra two plates on Nourish.',
              },
              {
                step: '03',
                title: 'A neighbor picks it up',
                text: 'Someone nearby collects the food. No delivery rider is in the middle.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, delay: index * 0.12, ease }}
                whileHover={{ y: -6 }}
                className="rounded-[1.5rem] border border-[#D4AF37] bg-white p-6 shadow-[0_10px_30px_rgba(11,46,32,0.04)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(11,46,32,0.08)]"
              >
                <p className="text-sm font-bold text-[#0F6B4F]!">{item.step}</p>
                <h3 className="mt-3 text-xl font-bold text-[#0B2E20]!">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#3E3A1D]!">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <Link
            to={ROUTES.MARKETPLACE}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0F6B4F]!"
          >
            <MapPin size={16} />
            See food near you
          </Link>
        </div>
      </section>

      <section className="bg-[#0B2E20] px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-6">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-sm font-semibold text-[#D4AF37]!">
              Selling guidance
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-[-0.03em] text-white! sm:text-5xl">
              A clear path to an FSSAI licence.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#D5E2D8]! sm:text-base">
              Home cooks who want to sell are shown how an FSSAI food licence
              works, what it is for, and how to begin the application. The
              guide stays on the website so a family kitchen is not left
              guessing.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="rounded-[1.5rem] bg-white p-6 text-[#0B2E20] shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
          >
            <BadgeCheck className="text-[#0F6B4F]" size={28} />
            <h3 className="mt-4 text-2xl font-bold text-[#0B2E20]!">
              What the guide covers
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#3E3A1D]!">
              <li>Who needs a licence before selling homemade food</li>
              <li>Which details a home kitchen should keep ready</li>
              <li>How to start the FSSAI application</li>
              <li>How selling on Nourish fits after you are registered</li>
            </ul>
            <Link
              to={ROUTES.MARKETPLACE}
              className={`${buttonPrimary} mt-6`}
            >
              Start selling nearby
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-5 sm:py-20 lg:px-6">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease }}
            className="group overflow-hidden rounded-[1.4rem] sm:rounded-[2rem]"
          >
            <ImageWithFallback
              src={sharedMeal}
              alt="Neighbours sharing biryani at a table in the lane"
              containerClassName="aspect-[16/9] h-auto w-full sm:aspect-[3/2] lg:aspect-auto lg:h-[440px]"
              className="object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={rise}
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F6B4F]!">
              <Users size={16} />
              Food sharing
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-extrabold tracking-[-0.03em] text-[#0B2E20]! sm:text-5xl">
              A biryani shared, and a friendship begun.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#3E3A1D]! sm:text-base">
              When a home has food to spare, it can welcome people within
              about a kilometre. Neighbours who have never met may sit down
              together and leave knowing one another. The meal is offered
              freely. What remains is the company.
            </p>
            <Link to={ROUTES.COMMUNITY} className={`${buttonGhost} mt-8`}>
              Come to a shared meal
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
