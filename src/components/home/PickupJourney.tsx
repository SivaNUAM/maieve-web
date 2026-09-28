import React, { useRef, useState } from 'react';
import { Bookmark, Heart, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import type { MotionValue } from 'framer-motion';

import phoneScreen from '../../assets/images/newnuam.png';
import ImageWithFallback from '../ui/ImageWithFallback';
import useMediaQuery from '../../hooks/useMediaQuery';
import { ROUTES } from '../../lib/constants';

const STEPS = [
  { id: 'discover', label: 'Feed', caption: 'A cook posted meals nearby' },
  { id: 'visit', label: 'Walk', caption: 'Walking to her house' },
  { id: 'meet', label: 'Meet', caption: 'She confirms your request' },
  { id: 'handover', label: 'Pickup', caption: 'She hands you the meal' },
  { id: 'complete', label: 'Done', caption: 'Picked up from the house' },
] as const;

const stepFromProgress = (value: number) => {
  if (value < 0.3) return 0;
  if (value < 0.58) return 1;
  if (value < 0.76) return 2;
  if (value < 0.92) return 3;
  return 4;
};

const DIALOGUE = [
  {
    id: 'notice',
    speaker: 'You',
    kind: 'thought',
    text: 'I open Nourish. Cooks near me post what they made today.',
  },
  {
    id: 'book',
    speaker: 'You',
    kind: 'thought',
    text: 'Anjali posted vegetable meals, 2 km away. I’ll request a plate.',
  },
  {
    id: 'walk',
    speaker: 'You',
    kind: 'thought',
    text: 'She said yes. I’m walking to her house to pick it up myself.',
  },
  {
    id: 'greet',
    speaker: 'Anjali',
    kind: 'speech',
    text: 'You saw my post and asked for the vegetable meals?',
  },
  {
    id: 'answer',
    speaker: 'You',
    kind: 'speech',
    text: 'Yes. I follow nearby cooks and requested this plate.',
  },
  {
    id: 'offer',
    speaker: 'Anjali',
    kind: 'speech',
    text: 'It’s packed. Take it from my hands.',
  },
  {
    id: 'thanks',
    speaker: 'You',
    kind: 'speech',
    text: 'Got it. Straight from your house — no rider.',
  },
  {
    id: 'after',
    speaker: 'You',
    kind: 'thought',
    text: 'Scroll the feed, request a plate, pick it up from the house.',
  },
] as const;

const lineFromProgress = (value: number) => {
  if (value < 0.15) return 0;
  if (value < 0.3) return 1;
  if (value < 0.58) return 2;
  if (value < 0.67) return 3;
  if (value < 0.76) return 4;
  if (value < 0.84) return 5;
  if (value < 0.92) return 6;
  return 7;
};

const foodPhoto =
  'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=900&auto=format&fit=crop';

const cookAvatar =
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop';

const Parcel: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative ${className}`} aria-hidden="true">
    <div className="relative h-[3.35rem] w-[4.4rem]">
      <div className="absolute inset-x-0 bottom-0 h-11 rounded-[0.45rem] bg-gradient-to-b from-[#F0D7AE] via-[#D7B48A] to-[#D4AF37] shadow-[0_10px_16px_rgba(92,64,32,0.28),inset_0_1px_0_rgba(255,248,236,0.7)]" />
      <div className="absolute left-1/2 top-1 h-10 w-[3px] -translate-x-1/2 rounded-full bg-[#F6E7C8]/80" />
      <div className="absolute left-1 right-1 top-[1.35rem] h-[3px] rounded-full bg-[#F6E7C8]/75" />
      <div className="absolute left-1/2 top-[0.85rem] flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-[#FFF8EE] shadow-[inset_0_0_0_1px_rgba(196,165,116,0.45)]">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
          <path
            d="M12 20c4-3 7-6.2 7-9.4A4.6 4.6 0 0 0 12 7.2 4.6 4.6 0 0 0 5 10.6C5 13.8 8 17 12 20Z"
            fill="#0F6B4F"
          />
        </svg>
      </div>
      <div className="absolute -top-1 left-2 h-3 w-8 rounded-t-md bg-[#E7C99A]" />
      <div className="absolute -top-1 right-2 h-3 w-5 rounded-t-md bg-[#C9A56E]" />
    </div>
    <span className="mt-1 block text-center text-[9px] font-semibold tracking-[0.14em] text-[#6B4E32]">
      NOURISH
    </span>
  </div>
);

const Neighborhood: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <svg
    viewBox={compact ? '600 100 480 560' : '0 0 1200 700'}
    className="h-full w-full"
    aria-hidden="true"
    preserveAspectRatio={compact ? 'xMidYMax slice' : 'xMidYMid slice'}
  >
    <defs>
      <linearGradient id="pickup-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F7E7CF" />
        <stop offset="42%" stopColor="#E7F0DE" />
        <stop offset="100%" stopColor="#C9DDB8" />
      </linearGradient>
      <linearGradient id="pickup-roof" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A67C52" />
        <stop offset="100%" stopColor="#6E4A30" />
      </linearGradient>
      <radialGradient id="pickup-sun" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF4D8" />
        <stop offset="55%" stopColor="#F6D7A8" />
        <stop offset="100%" stopColor="#F6D7A8" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="1200" height="700" fill="url(#pickup-sky)" />
    <ellipse cx="240" cy="150" rx="90" ry="28" fill="#fff" opacity="0.45" />
    <ellipse cx="300" cy="158" rx="54" ry="18" fill="#fff" opacity="0.35" />
    <circle cx="980" cy="118" r="90" fill="url(#pickup-sun)" />
    <circle cx="980" cy="118" r="36" fill="#F8E2B8" />
    <ellipse cx="180" cy="545" rx="210" ry="58" fill="#D5E4C4" />
    <ellipse cx="860" cy="575" rx="280" ry="62" fill="#C5D7B2" />
    <path d="M0 575c180 28 320-10 520 8 180 16 340-20 680 6v111H0Z" fill="#E8D3B4" />
    <path
      d="M830 470c-40 40-90 78-40 130 30 18 80 8 120-20 50-36 40-90-10-120-18-8-46-4-70 10Z"
      fill="#E4CFAA"
      opacity="0.85"
    />
    <path d="M160 455c48-130 108-132 156 4" fill="#0F6B4F" />
    <path d="M188 430c30-70 78-78 92 8" fill="#7EA184" />
    <rect x="228" y="448" width="18" height="120" rx="4" fill="#8A6244" />
    <path d="M48 500c36-100 86-104 118 2" fill="#87A58A" />
    <rect x="98" y="492" width="14" height="84" rx="3" fill="#8A6244" />
    <path d="M1020 410c28-84 70-86 96 4" fill="#5E7C64" />
    <rect x="1062" y="404" width="14" height="96" rx="3" fill="#8A6244" />
    <rect x="688" y="268" width="286" height="214" rx="10" fill="#F7F1E6" />
    <path d="M664 278 832 148l176 130" fill="url(#pickup-roof)" />
    <path d="M700 278h262" stroke="#D4AF37" strokeWidth="6" />
    <rect x="792" y="348" width="72" height="134" rx="6" fill="#6B4E32" />
    <rect x="804" y="360" width="48" height="78" rx="3" fill="#8A6244" />
    <circle cx="848" cy="412" r="3.5" fill="#D4AF37" />
    <rect x="724" y="308" width="52" height="62" rx="4" fill="#D7E6CF" />
    <path d="M750 308v62M724 338h52" stroke="#F7F1E6" strokeWidth="3" />
    <rect x="888" y="308" width="52" height="62" rx="4" fill="#F6E7C4" />
    <path d="M914 308v62M888 338h52" stroke="#F7F1E6" strokeWidth="3" />
    {compact ? null : (
      <>
        <rect x="632" y="468" width="78" height="40" rx="16" fill="#D4AF37" />
        <circle cx="650" cy="452" r="16" fill="#0F6B4F" />
        <rect x="972" y="436" width="58" height="30" rx="12" fill="#D4AF37" />
        <circle cx="998" cy="420" r="13" fill="#7EA184" />
      </>
    )}
  </svg>
);

const CustomerFigure: React.FC = () => (
  <svg viewBox="0 0 108 156" className="h-44 w-28 drop-shadow-sm sm:h-56 sm:w-36" aria-hidden="true">
    <ellipse cx="46" cy="148" rx="26" ry="5" fill="#5C4030" opacity="0.16" />
    <rect x="30" y="98" width="12" height="40" rx="6" fill="#3E5146" />
    <rect x="46" y="98" width="12" height="40" rx="6" fill="#4E6256" />
    <ellipse cx="36" cy="140" rx="11" ry="5" fill="#6B4E32" />
    <ellipse cx="52" cy="140" rx="11" ry="5" fill="#5C4030" />
    <path d="M26 62c0-10 8-16 20-16s20 6 20 16v38c0 8-8 12-20 12s-20-4-20-12V62Z" fill="#F7F1E8" />
    <path d="M32 78h28v18c0 4-6 8-14 8s-14-4-14-8V78Z" fill="#E7E1D6" />
    <path
      d="M22 68c-8 4-10 18-6 26"
      stroke="#E7C2A6"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    <ellipse cx="14" cy="96" rx="7" ry="6" fill="#E7C2A6" />
    <path
      d="M58 66c14 2 28 8 36 16"
      stroke="#E7C2A6"
      strokeWidth="9"
      strokeLinecap="round"
      fill="none"
    />
    <ellipse cx="96" cy="84" rx="11" ry="8" fill="#E7C2A6" />
    <circle cx="104" cy="80" r="3.2" fill="#E7C2A6" />
    <circle cx="102" cy="88" r="2.6" fill="#E7C2A6" />
    <circle cx="46" cy="34" r="16" fill="#E7C2A6" />
    <path d="M30 32c2-16 28-18 32 0-6 3-26 4-32 0Z" fill="#3D342C" />
    <circle cx="41" cy="35" r="1.6" fill="#3D342C" />
    <circle cx="52" cy="35" r="1.6" fill="#3D342C" />
    <path d="M42 41c2.4 2.4 7 2.4 9 0" stroke="#C4896A" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const CookFigure: React.FC<{ wave: MotionValue<number> }> = ({ wave }) => (
  <svg viewBox="-16 0 112 156" className="h-44 w-32 drop-shadow-sm sm:h-56 sm:w-40" aria-hidden="true">
    <ellipse cx="48" cy="148" rx="26" ry="5" fill="#5C4030" opacity="0.16" />
    <rect x="34" y="98" width="12" height="40" rx="6" fill="#5C4030" />
    <rect x="50" y="98" width="12" height="40" rx="6" fill="#6B4E32" />
    <ellipse cx="40" cy="140" rx="11" ry="5" fill="#3D342C" />
    <ellipse cx="56" cy="140" rx="11" ry="5" fill="#2C2420" />
    <path d="M30 60c0-12 8-18 20-18s20 6 20 18v40c0 8-8 12-20 12s-20-4-20-12V60Z" fill="#0F6B4F" />
    <path d="M34 52h28c1 8-4 14-14 14S33 60 34 52Z" fill="#D4AF37" />
    <path d="M36 80h24v16c0 4-5 8-12 8s-12-4-12-8V80Z" fill="#245743" />
    <path
      d="M68 70c8 6 10 16 6 24"
      stroke="#E7C2A6"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    <ellipse cx="76" cy="96" rx="7" ry="6" fill="#E7C2A6" />
    <motion.g style={{ rotate: wave, originX: '34px', originY: '66px' }}>
      <path
        d="M34 66C16 72 2 78-6 84"
        stroke="#E7C2A6"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="-8" cy="86" rx="11" ry="8" fill="#E7C2A6" />
      <circle cx="-16" cy="82" r="3.2" fill="#E7C2A6" />
      <circle cx="-14" cy="90" r="2.6" fill="#E7C2A6" />
    </motion.g>
    <circle cx="50" cy="32" r="16" fill="#E7C2A6" />
    <path d="M34 28c2-14 30-16 34 2-8 3-26 3-34-2Z" fill="#2C2420" />
    <circle cx="45" cy="33" r="1.6" fill="#3D342C" />
    <circle cx="56" cy="33" r="1.6" fill="#3D342C" />
    <path d="M46 39c2.4 2.4 7 2.4 9 0" stroke="#C4896A" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const FoodCard: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <article className="w-[min(100%,300px)] overflow-hidden rounded-[1.35rem] border border-[#D4AF37] bg-white shadow-[0_24px_50px_rgba(15,107,79,0.14)]">
    <header className="flex items-center gap-2.5 px-3 py-2.5">
      <span className="rounded-full bg-gradient-to-br from-[#D4AF37] to-[#0F6B4F] p-[2px]">
        <ImageWithFallback
          src={cookAvatar}
          alt="Anjali Menon"
          containerClassName="h-9 w-9 rounded-full ring-2 ring-[#FFF8EE]"
        />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#0F6B4F]!">anjali.menon</p>
        <p className="text-[11px] text-[#1C1C24]!">Home cook · 2 km</p>
      </div>
      <Link
        to={ROUTES.COMMUNITY}
        className="text-xs font-semibold text-[#0F6B4F]!"
      >
        Follow
      </Link>
    </header>
    <ImageWithFallback
      src={foodPhoto}
      alt="Homemade vegetable meals posted by Anjali"
      containerClassName={compact ? 'h-32 w-full sm:h-40' : 'aspect-[5/4] w-full'}
    />
    <div className="px-3 pb-3 pt-2.5">
      <div className="flex items-center justify-between text-[#0F6B4F]">
        <div className="flex items-center gap-3">
          <Heart size={18} className="fill-[#0F6B4F]" aria-hidden="true" />
          <MessageCircle size={18} aria-hidden="true" />
          <Send size={18} aria-hidden="true" />
        </div>
        <Bookmark size={18} className="text-[#D4AF37]" aria-hidden="true" />
      </div>
      <p className="mt-2 text-xs font-semibold text-[#0F6B4F]!">186 neighbors</p>
      <p className="mt-1 text-[13px] leading-5 text-[#0F6B4F]!">
        <span className="font-semibold">anjali.menon</span> Two extra plates of
        vegetable meals. ₹120. Come pick one up from my house.
      </p>
      <Link
        to={ROUTES.MARKETPLACE}
        className="mt-2 inline-flex text-xs font-semibold text-[#3E3A1D]!"
      >
        Request a plate
      </Link>
      <p className="mt-1 text-[11px] text-[#1C1C24]!">30 min ago</p>
    </div>
  </article>
);

const HeadBubble: React.FC<{
  line: (typeof DIALOGUE)[number];
  side: 'you' | 'anjali';
  floating?: boolean;
}> = ({ line, side, floating = false }) => {
  const thought = line.kind === 'thought';
  const you = side === 'you';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={
        floating
          ? 'w-full'
          : `pointer-events-none absolute bottom-[calc(100%+6px)] z-40 hidden w-[12.5rem] sm:w-[15rem] lg:block ${
              you ? 'right-[18%]' : 'left-[28%]'
            }`
      }
      role="status"
      aria-live="polite"
    >
      <div
        className={`relative px-3.5 py-2.5 shadow-[0_16px_30px_rgba(92,64,32,0.14)] ${
          thought
            ? `border border-[#D4AF37] bg-[#FFF8EE] ${
                you ? 'rounded-[1.35rem_1.35rem_0.45rem_1.35rem]' : 'rounded-[1.35rem_1.35rem_1.35rem_0.45rem]'
              }`
            : `border border-white bg-white/95 backdrop-blur-sm ${
                you ? 'rounded-[1.2rem_1.2rem_0.35rem_1.2rem]' : 'rounded-[1.2rem_1.2rem_1.2rem_0.35rem]'
              }`
        }`}
      >
        <p
          className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
            you ? 'text-[#0F6B4F]!' : 'text-[#D4AF37]!'
          }`}
        >
          {thought ? 'Thinking' : line.speaker}
        </p>
        <p
          className={`mt-1 text-[12px] leading-5 text-[#0B2E20]! sm:text-[13px] ${
            thought ? 'italic' : 'font-medium'
          }`}
        >
          {thought ? line.text : `“${line.text}”`}
        </p>
        {thought ? null : (
          <span
            className={`absolute -bottom-1.5 h-3 w-3 rotate-45 bg-white ${
              you ? 'right-5' : 'left-5'
            }`}
            aria-hidden="true"
          />
        )}
      </div>
      {thought ? (
        <span
          className={`mt-1 flex items-center gap-1 ${you ? 'justify-end pr-5' : 'pl-5'}`}
          aria-hidden="true"
        >
          {you ? (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              <span className="h-1 w-1 rounded-full bg-[#D4AF37]/70" />
              <span className="h-[3px] w-[3px] rounded-full bg-[#D4AF37]/45" />
            </>
          ) : (
            <>
              <span className="h-[3px] w-[3px] rounded-full bg-[#D4AF37]/45" />
              <span className="h-1 w-1 rounded-full bg-[#D4AF37]/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            </>
          )}
        </span>
      ) : (
        <span className="block h-2" aria-hidden="true" />
      )}
    </motion.div>
  );
};

const OpeningBackdrop: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-[#E4F0D8]" />
    <div className="absolute -right-10 top-6 h-72 w-72 rounded-full bg-[#F8E4C4]" />
    <div className="absolute bottom-[-4rem] left-1/3 h-56 w-56 rounded-full bg-[#DCEBCB]" />
    <svg viewBox="0 0 1200 700" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="180" cy="120" rx="70" ry="22" fill="#fff" opacity="0.55" />
      <circle cx="1040" cy="90" r="46" fill="#F6D7A8" opacity="0.9" />
      <path d="M70 250c36-90 84-92 118 0" fill="#8FB592" />
      <rect x="122" y="248" width="12" height="70" rx="3" fill="#8A6244" />
      <path d="M1080 280c28-70 64-72 90 0" fill="#0F6B4F" />
      <rect x="1120" y="278" width="10" height="64" rx="3" fill="#8A6244" />
      <path d="M0 560c160 24 300-16 500 6 200 22 360-18 700 10v124H0Z" fill="#E7D4B6" />
      <ellipse cx="260" cy="590" rx="160" ry="28" fill="#D5E4C4" />
      <ellipse cx="920" cy="600" rx="180" ry="30" fill="#C9D9B6" />
    </svg>
  </div>
);

const AppPhone: React.FC = () => (
  <img
    src={phoneScreen}
    alt="The app, with homemade meals from cooks nearby"
    className="block h-[min(86%,680px)] w-auto max-w-[min(100%,420px)] object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.45)] sm:h-[min(92%,780px)]"
  />
);

const notes = [
  { title: 'Open the feed', text: 'Cooks near your house post what they made today.' },
  { title: 'Request a plate', text: 'Follow a home cook and ask for an extra plate.' },
  { title: 'Walk to that house', text: 'You go there yourself. No delivery rider.' },
  { title: 'Pick it up in person', text: 'The cook hands the meal to you at home.' },
];

const ReducedJourney: React.FC = () => (
  <section className="bg-[#FFF8EE] px-4 py-16 sm:px-5 lg:px-6">
    <div className="mx-auto grid w-full max-w-[1440px] gap-8 lg:grid-cols-2">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F6B4F]!">
          Neighborhood pickup
        </p>
        <h2 className="mt-3 font-sans text-4xl! font-extrabold! leading-tight! text-[#0B2E20]!">
          Scroll the feed. Request a plate. Pick it up from the house.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-7 text-[#3E3A1D]!">
          Nourish works like a neighborhood feed. Follow home cooks, see what
          they posted today, request a plate, then collect it from that house.
        </p>
        <div className="mt-6 space-y-3">
          {DIALOGUE.filter((_, index) => index % 2 === 0).map((line) => (
            <p key={line.id} className="text-sm leading-6 text-[#0B2E20]!">
              <span className="font-bold">{line.speaker}. </span>
              {line.kind === 'thought' ? line.text : `“${line.text}”`}
            </p>
          ))}
        </div>
      </div>
      <FoodCard />
      <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
        {notes.map((note) => (
          <div key={note.title} className="rounded-2xl bg-white p-4">
            <p className="text-sm font-bold text-[#0B2E20]!">{note.title}</p>
            <p className="mt-1 text-sm text-[#3E3A1D]!">{note.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 lg:col-span-2">
        <Link
          to={ROUTES.MARKETPLACE}
          className="inline-flex items-center rounded-full bg-[#0F6B4F] px-5 py-3 text-sm font-semibold text-white"
        >
          Explore More Homemade Food
        </Link>
        <Link
          to={ROUTES.COMMUNITY}
          className="inline-flex items-center rounded-full border border-[#D4AF37] bg-white px-5 py-3 text-sm font-semibold text-[#0B2E20]"
        >
          Discover Local Cooks
        </Link>
      </div>
    </div>
  </section>
);

const PickupJourney: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isCompact = useMediaQuery('(max-width: 1023px)');
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });
  const [step, setStep] = useState(0);
  const [line, setLine] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = stepFromProgress(value);
    const nextLine = lineFromProgress(value);
    setStep((current) => (current === next ? current : next));
    setLine((current) => (current === nextLine ? current : nextLine));
  });

  const cardY = useTransform(scrollYProgress, [0, 0.26, 0.38], [24, 0, -90]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.26, 0.36], [1, 1, 0]);
  const cardScale = useTransform(scrollYProgress, [0.26, 0.36], [1, 0.94]);

  const sceneOpacity = useTransform(
    scrollYProgress,
    [0.24, 0.36, 0.86, 0.97],
    [0, 1, 1, 0],
  );
  const sceneXWide = useTransform(scrollYProgress, [0.32, 0.58], ['0%', '-4%']);
  const sceneScaleWide = useTransform(scrollYProgress, [0.32, 0.58], [1, 1.08]);
  const leavesY = useTransform(scrollYProgress, [0.32, 0.9], [0, -28]);

  const customerLeftWide = useTransform(scrollYProgress, [0.32, 0.58], ['16%', '36%']);
  const customerLeftCompact = useTransform(scrollYProgress, [0.32, 0.58], ['2%', '8%']);
  const customerOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.38, 0.86, 0.94],
    [0, 1, 1, 0],
  );

  const cookLeftWide = useTransform(scrollYProgress, [0.52, 0.64], ['64%', '46%']);
  const cookLeftCompact = useTransform(scrollYProgress, [0.52, 0.64], ['70%', '58%']);
  const cookOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.58, 0.86, 0.94],
    [0, 1, 1, 0],
  );
  const cookWave = useTransform(scrollYProgress, [0.58, 0.66, 0.74], [0, -18, 0]);

  const parcelLeftWide = useTransform(
    scrollYProgress,
    [0.56, 0.68, 0.76, 0.9],
    ['56%', '47%', '47%', '39%'],
  );
  const parcelLeftCompact = useTransform(
    scrollYProgress,
    [0.56, 0.68, 0.8, 0.9],
    ['52%', '38%', '24%', '18%'],
  );
  const parcelBottomWide = useTransform(
    scrollYProgress,
    [0.76, 0.84, 0.9],
    ['20%', '28%', '18%'],
  );
  const parcelBottomCompact = useTransform(
    scrollYProgress,
    [0.56, 0.68, 0.8, 0.9],
    ['8.5rem', '11rem', '11rem', '10rem'],
  );
  const parcelRotate = useTransform(scrollYProgress, [0.76, 0.84, 0.9], [-6, 8, 0]);
  const parcelOpacity = useTransform(
    scrollYProgress,
    [0.56, 0.64, 0.9, 0.95],
    [0, 1, 1, 0],
  );
  const meetingScaleWide = useTransform(scrollYProgress, [0.58, 0.84], [1, 1.14]);

  const backdropOpacity = useTransform(scrollYProgress, [0.16, 0.34], [1, 0]);
  const completeOpacity = useTransform(scrollYProgress, [0.9, 0.98], [0, 1]);
  const phoneY = useTransform(scrollYProgress, [0.88, 0.98], ['108%', '0%']);

  if (reducedMotion) {
    return <ReducedJourney />;
  }

  const customerLeft = isCompact ? customerLeftCompact : customerLeftWide;
  const cookLeft = isCompact ? cookLeftCompact : cookLeftWide;
  const parcelLeft = isCompact ? parcelLeftCompact : parcelLeftWide;
  const parcelBottom = isCompact ? parcelBottomCompact : parcelBottomWide;
  const sceneX = isCompact ? '0%' : sceneXWide;
  const sceneScale = isCompact ? 1 : sceneScaleWide;
  const meetingScale = isCompact ? 1 : meetingScaleWide;

  return (
    <section ref={trackRef} className="relative h-[520vh] bg-[#FFF8EE]" id="pickup-journey">
      <div className="sticky top-[4.5rem] h-[calc(100vh-4.5rem)] overflow-hidden lg:top-28 lg:h-[calc(100vh-7rem)]">
        <div className="absolute inset-0 bg-[#FFF8EE]" />
        <motion.div className="absolute inset-0" style={{ opacity: backdropOpacity }}>
          <OpeningBackdrop />
        </motion.div>

        <motion.div
          className="absolute inset-0 origin-right"
          style={{ opacity: sceneOpacity, x: sceneX, scale: sceneScale }}
        >
          <motion.div className="absolute inset-0" style={{ y: leavesY }}>
            <Neighborhood compact={isCompact} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-0 z-20 h-[48%] origin-bottom sm:h-[54%]"
          style={{ scale: meetingScale }}
        >
          <motion.div
            className="absolute bottom-28 z-10 lg:bottom-[6%]"
            style={{ left: cookLeft, opacity: cookOpacity }}
          >
            {step > 0 && step < 4 && DIALOGUE[line].speaker === 'Anjali' ? (
              <HeadBubble key={DIALOGUE[line].id} line={DIALOGUE[line]} side="anjali" />
            ) : null}
            <CookFigure wave={cookWave} />
          </motion.div>

          <motion.div
            className="absolute bottom-28 z-10 lg:bottom-[6%]"
            style={{ left: customerLeft, opacity: customerOpacity }}
          >
            {step > 0 && step < 4 && DIALOGUE[line].speaker === 'You' ? (
              <HeadBubble key={DIALOGUE[line].id} line={DIALOGUE[line]} side="you" />
            ) : null}
            <CustomerFigure />
          </motion.div>

          <motion.div
            className="absolute z-30"
            style={{
              left: parcelLeft,
              bottom: parcelBottom,
              opacity: parcelOpacity,
              rotate: parcelRotate,
            }}
          >
            <Parcel />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-30 bg-[#0B2E20]"
          style={{ opacity: completeOpacity, pointerEvents: 'none' }}
        />
        <motion.div
          className={`absolute inset-x-3 z-40 flex justify-center lg:inset-x-0 ${
            step === 4
              ? 'inset-y-3 items-center'
              : 'bottom-0 top-16 items-end lg:top-4 lg:items-center'
          }`}
          style={{
            y: phoneY,
            opacity: completeOpacity,
            pointerEvents: step === 4 ? 'auto' : 'none',
          }}
        >
          <AppPhone />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-40 flex items-start justify-center overflow-hidden px-3 pt-20 lg:items-center lg:px-4 lg:pt-0"
          style={{
            y: cardY,
            opacity: cardOpacity,
            scale: cardScale,
            pointerEvents: step === 0 ? 'auto' : 'none',
          }}
        >
          <div className="grid w-full max-w-5xl items-center gap-4 rounded-[1.5rem] bg-[#FFF8EE]/75 px-3 py-3 shadow-[0_20px_50px_rgba(92,64,32,0.06)] backdrop-blur-[2px] sm:rounded-[2rem] sm:px-6 sm:py-6 lg:grid-cols-[0.9fr_1fr] lg:gap-10 lg:px-10 lg:py-8">
            <div className="hidden lg:block">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F6B4F]!">
                Nourish
              </p>
              <h2 className="mt-3 max-w-sm font-sans text-4xl! font-extrabold! leading-[1.05]! text-[#0B2E20]!">
                A feed of cooks near you. Then you pick it up.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#3E3A1D]!">
                Follow home cooks the way you follow people on a social app.
                See today’s post, request a plate, and collect it from that house.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Stories', 'Follow cooks', 'Pick up yourself'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0B2E20]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                {step === 0 ? (
                  <HeadBubble key={DIALOGUE[line].id} line={DIALOGUE[line]} side="you" floating />
                ) : null}
              </div>
            </div>
            <div className="flex flex-col items-center lg:justify-end">
              <div className="mb-3 w-full max-w-sm lg:hidden">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0F6B4F]!">
                  Neighborhood pickup
                </p>
                <h2 className="mt-1 font-sans text-[1.35rem]! font-extrabold! leading-tight! text-[#0B2E20]!">
                  A feed of cooks near you. Then you pick it up.
                </h2>
              </div>
              <FoodCard compact={isCompact} />
            </div>
          </div>
        </motion.div>

        {step < 4 ? (
          <div className="absolute left-3 right-3 top-3 z-50 lg:hidden">
            <ol className="flex gap-1">
              {STEPS.map((item, index) => (
                <li
                  key={item.id}
                  className={`min-w-0 flex-1 truncate rounded-full px-1 py-1.5 text-center text-[10px] font-semibold ${
                    index === step
                      ? 'bg-white text-[#0B2E20] shadow-[0_6px_16px_rgba(11,46,32,0.28)]'
                      : index < step
                        ? 'bg-[#0F6B4F] text-white'
                        : 'bg-white/80 text-[#3E3A1D]'
                  }`}
                >
                  {item.label}
                </li>
              ))}
            </ol>
            <p className="mx-auto mt-2 w-fit max-w-full rounded-full bg-[#FFF8EE]/95 px-3 py-1 text-center text-[11px] font-semibold text-[#0B2E20]">
              {STEPS[step].caption}
              {step === 0 ? ' · Scroll' : ''}
            </p>
          </div>
        ) : null}

        {step > 0 && step < 4 ? (
          <div className="absolute inset-x-3 bottom-3 z-50 lg:hidden">
            <div className="rounded-2xl border border-[#D4AF37]/80 bg-[#FFF8EE]/95 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(11,46,32,0.12)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0F6B4F]!">
                {DIALOGUE[line].speaker}
              </p>
              <p className="mt-1 text-sm leading-5 text-[#0B2E20]!">
                {DIALOGUE[line].text}
              </p>
            </div>
          </div>
        ) : null}

        <ol className="absolute left-4 top-1/2 z-50 hidden w-40 -translate-y-1/2 flex-col lg:flex">
          {STEPS.map((item, index) => {
            const active = index === step;
            const done = index < step;
            return (
              <li key={item.id} className="relative flex items-center gap-3 pb-3 last:pb-0">
                {index < STEPS.length - 1 ? (
                  <span
                    className={`absolute left-[15px] top-8 h-[calc(100%-1.1rem)] w-px ${
                      done ? 'bg-[#0F6B4F]' : 'bg-[#D4AF37]'
                    }`}
                    aria-hidden="true"
                  />
                ) : null}
                <span
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    active
                      ? 'bg-[#0B2E20] text-white shadow-[0_0_0_6px_rgba(15,107,79,0.35)]'
                      : done
                        ? 'bg-[#0F6B4F] text-white'
                        : 'bg-white text-[#3E3A1D] shadow-sm'
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    active
                      ? 'bg-[#0B2E20] text-white shadow-[0_8px_18px_rgba(11,46,32,0.18)]'
                      : done
                        ? 'text-[#0F6B4F]'
                        : 'text-[#3E3A1D]'
                  }`}
                >
                  {item.label}
                </span>
              </li>
            );
          })}
        </ol>

        {step < 4 ? (
          <p className="absolute bottom-4 left-1/2 z-50 hidden -translate-x-1/2 rounded-full border border-[#D4AF37] bg-[#FFF8EE]/95 px-4 py-2 text-xs font-semibold text-[#0B2E20] shadow-sm lg:block">
            {STEPS[step].caption}
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default PickupJourney;
