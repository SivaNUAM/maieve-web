import React from 'react';
import { ArrowRight } from 'lucide-react';

import stepDiscover from '../../assets/images/step-discover.png';
import stepVisit from '../../assets/images/step-visit.png';
import stepEnjoy from '../../assets/images/step-enjoy.png';
import stepSupport from '../../assets/images/step-support.png';

const STEPS = [
  {
    step: '1',
    title: 'Discover',
    text: 'Find amazing homemade food near you.',
    image: stepDiscover,
  },
  {
    step: '2',
    title: 'Visit',
    text: 'Pick up directly from the home cook.',
    image: stepVisit,
  },
  {
    step: '3',
    title: 'Enjoy',
    text: 'Taste home-cooked meals with real stories.',
    image: stepEnjoy,
  },
  {
    step: '4',
    title: 'Support',
    text: 'Help local families and communities grow.',
    image: stepSupport,
  },
] as const;

function LeafCluster({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 320 200" className={`h-auto w-full ${flip ? '-scale-x-100' : ''}`}>
      <path d="M0 200c40-20 70-70 40-120C20 40 0 80 0 200Z" fill="#E3F0DC" />
      <path d="M18 188c8-46 2-78 28-104 8 22 6 48-4 72-8 16-16 24-24 32Z" fill="#6FA67A" />
      <path d="M36 170c22-18 48-16 62 2-22 8-42 8-62-2Z" fill="#8FBF90" />
      <path d="M28 150c-16-28-4-58 22-68 2 24-4 46-22 68Z" fill="#4F8A62" />
      <path d="M58 148c18-34 52-40 74-18-28 6-50 12-74 18Z" fill="#7EAE7C" />
      <path d="M70 168c28-8 58 2 70 22-30 2-52-4-70-22Z" fill="#5C9468" />
      <path d="M96 132c8-30 36-46 62-36-16 18-36 28-62 36Z" fill="#A8CFA4" />
      <path d="M12 176c22 6 40-8 48-24" fill="none" stroke="#3E6B4A" strokeWidth="2" />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative z-0 overflow-hidden bg-[#F7F3E8] px-4 pb-32 pt-12 sm:px-5 sm:pb-44 sm:pt-20 lg:px-6 lg:pb-32 lg:pt-24">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0F6B4F]!">
            How it works
          </p>
          <h2 className="mt-3 max-w-sm font-serif text-4xl! font-semibold! leading-[1.05]! text-[#0B2E20]! sm:text-5xl!">
            Good Food Brings People Together
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#3E3A1D]!">
            More than just a meal — it&apos;s a story, a person, and a community.
          </p>
        </div>

        <ol className="grid grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-4 xl:gap-8">
          {STEPS.map((item, index) => (
            <li key={item.step} className="relative text-center">
              {index < STEPS.length - 1 ? (
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                  className="absolute -right-3 top-12 hidden text-[#0F6B4F]/50 xl:block"
                />
              ) : null}
              <img
                src={item.image}
                alt=""
                className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-[0_12px_28px_rgba(11,46,32,0.12)] sm:h-32 sm:w-32"
              />
              <p className="mt-4 text-xs font-semibold text-[#0F6B4F]!">{item.step}</p>
              <h3 className="mt-1 font-serif text-xl! font-semibold! text-[#0B2E20]!">
                {item.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[11rem] text-xs leading-5 text-[#3E3A1D]! sm:text-sm sm:leading-6">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-36 sm:w-56 lg:w-72" aria-hidden="true">
        <LeafCluster />
        <p className="absolute bottom-5 left-3 max-w-[6.5rem] rotate-[-8deg] font-serif text-[11px] italic leading-4 text-[#0F6B4F] sm:bottom-8 sm:left-6 sm:max-w-[8.5rem] sm:text-sm sm:leading-5">
          Real food. Real people. Local homes.
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-40 sm:w-56 lg:w-72" aria-hidden="true">
        <LeafCluster flip />
        <p className="absolute bottom-6 right-4 max-w-[6.5rem] rotate-[6deg] text-right font-serif text-[11px] italic leading-4 text-[#0F6B4F] sm:bottom-10 sm:right-8 sm:max-w-[8rem] sm:rotate-[8deg] sm:text-sm sm:leading-5">
          Small choices create a bigger impact
        </p>
      </div>
    </section>
  );
}
