import React from 'react';
import { CalendarClock, Info, MapPin, ShieldCheck } from 'lucide-react';

import { DaughterFigure } from '../home/PickupJourney';

export interface PickupDetails {
  location: string;
  address?: string;
  date?: string;
  time?: string;
  instructions?: string;
  distance?: string;
  status?: 'Available' | 'Limited' | 'Unavailable';
}

interface PickupInfoProps {
  pickup: PickupDetails;
  compact?: boolean;
}

const statusStyles: Record<NonNullable<PickupDetails['status']>, string> = {
  Available: 'bg-[#FFF8EE] text-[#0F6B4F]',
  Limited: 'bg-[#FFF8EE] text-[#D4AF37]',
  Unavailable: 'bg-[#FFF8EE] text-[#1C1C24]',
};

const PickupInfo: React.FC<PickupInfoProps> = ({ pickup, compact = false }) => {
  return (
    <section
      className={`rounded-[1.6rem] border border-[#D4AF37] bg-white shadow-[0_10px_30px_rgba(11,46,32,0.05)] ${
        compact ? 'p-4' : 'p-6'
      }`}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFF8EE] text-[#0F6B4F]">
          <MapPin size={20} />
        </div>

        <div className="min-w-0 flex-1 basis-36">
          <h3 className="break-words font-sans text-lg! font-extrabold! leading-tight! text-[#0B2E20]! sm:text-xl!">
            Pickup
          </h3>
          <p className="mt-1 text-xs text-[#3E3A1D]!">
            Collect it from the cook. No delivery rider.
          </p>
        </div>

        {pickup.status && (
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em] ${statusStyles[pickup.status]}`}
          >
            {pickup.status}
          </span>
        )}
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex items-start gap-3">
          <MapPin size={16} className="mt-0.5 shrink-0 text-[#0F6B4F]" />
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3E3A1D]!">
              Location
            </p>
            <p className="mt-1 break-words text-sm font-semibold text-[#0B2E20]!">
              {pickup.location}
            </p>
            {pickup.address && (
              <p className="mt-1 break-words text-sm leading-6 text-[#3E3A1D]!">
                {pickup.address}
              </p>
            )}
            {pickup.distance && (
              <p className="mt-1 text-xs font-semibold text-[#0F6B4F]!">
                {pickup.distance} away
              </p>
            )}
          </div>
        </div>

        {(pickup.date || pickup.time) && (
          <div className="flex items-start gap-3">
            <CalendarClock size={16} className="mt-0.5 shrink-0 text-[#0F6B4F]" />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3E3A1D]!">
                When
              </p>
              {pickup.date && (
                <p className="mt-1 text-sm font-semibold text-[#0B2E20]!">
                  {pickup.date}
                </p>
              )}
              {pickup.time && (
                <p className="mt-1 text-sm text-[#3E3A1D]!">{pickup.time}</p>
              )}
            </div>
          </div>
        )}

        {pickup.instructions && (
          <div className="flex items-start gap-3">
            <Info size={16} className="mt-0.5 shrink-0 text-[#0F6B4F]" />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3E3A1D]!">
                Note
              </p>
              <p className="mt-1 break-words text-sm leading-6 text-[#3E3A1D]!">
                {pickup.instructions}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center gap-2.5 rounded-2xl bg-[#FFF8EE] p-4">
        <ShieldCheck size={18} className="mt-0.5 shrink-0 self-start text-[#0F6B4F]" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-[#0B2E20]!">
            Meet the cook nearby
          </p>
          <p className="mt-1 break-words text-xs leading-5 text-[#3E3A1D]!">
            Confirm the pickup time, and keep the handoff inside a short walk.
          </p>
        </div>
        <DaughterFigure className="h-16 w-10 shrink-0" />
      </div>
    </section>
  );
};

export default PickupInfo;
