import React from 'react';
import { Clock, Heart, MapPin, Users } from 'lucide-react';

import ImageWithFallback from '../ui/ImageWithFallback';

export interface FoodSharingItem {
  id: string;
  title: string;
  description: string;
  image: string;
  contributorName: string;
  location: string;
  availableTime: string;
  servings: number;
  category: 'Free Sharing' | 'Community Meal' | 'Extra Food';
}

interface FoodSharingCardProps {
  item: FoodSharingItem;
  joined?: boolean;
  onViewDetails?: (item: FoodSharingItem) => void;
}

const FoodSharingCard: React.FC<FoodSharingCardProps> = ({
  item,
  joined = false,
  onViewDetails,
}) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-[0_16px_40px_rgba(11,46,32,0.08)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F3E8]">
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 max-w-[58%] truncate rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0F6B4F] shadow-sm sm:left-4 sm:top-4 sm:tracking-[0.14em]">
          {item.category}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-[#0B2E20] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#FFF8EE] sm:right-4 sm:top-4 sm:tracking-[0.14em]">
          Free
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF8EE] font-serif text-lg text-[#0F6B4F]">
            {item.contributorName.slice(0, 1)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#0B2E20]!">{item.contributorName}</p>
            <p className="text-[11px] text-[#1C1C24]!">Sharing a meal nearby</p>
          </div>
          <Heart
            size={18}
            className={`ml-auto ${joined ? 'fill-[#0F6B4F] text-[#0F6B4F]' : 'text-[#D4AF37]'}`}
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-4 break-words font-serif text-xl! font-semibold! leading-tight! text-[#0B2E20]! sm:text-2xl!">
          {item.title}
        </h3>
        <p className="mt-2 break-words text-sm leading-6 text-[#3E3A1D]!">{item.description}</p>

        <div className="mt-5 grid gap-2 text-sm text-[#3E3A1D]">
          <p className="flex items-start gap-2">
            <MapPin size={15} className="mt-0.5 shrink-0 text-[#0F6B4F]" />
            <span className="min-w-0 break-words">{item.location} · within a kilometre</span>
          </p>
          <p className="flex items-start gap-2">
            <Clock size={15} className="mt-0.5 shrink-0 text-[#0F6B4F]" />
            <span className="min-w-0 break-words">{item.availableTime}</span>
          </p>
          <p className="flex items-start gap-2">
            <Users size={15} className="mt-0.5 shrink-0 text-[#0F6B4F]" />
            <span className="min-w-0 break-words">
              {item.servings} places, offered freely
            </span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => onViewDetails?.(item)}
          aria-pressed={joined}
          className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
            joined
              ? 'bg-[#FFF8EE] text-[#0F6B4F]'
              : 'bg-[#0F6B4F] text-white shadow-[0_10px_24px_rgba(15,107,79,0.22)] hover:bg-[#0B2E20]'
          }`}
        >
          {joined ? 'Your place is held' : 'Accept this invitation'}
        </button>
      </div>
    </article>
  );
};

export default FoodSharingCard;
