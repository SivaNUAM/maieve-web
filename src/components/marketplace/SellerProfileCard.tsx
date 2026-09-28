import React from 'react';
import { BadgeCheck, MapPin, Star, UserRound } from 'lucide-react';

export interface SellerProfile {
  id: string;
  name: string;
  avatar?: string;
  location: string;
  description: string;
  rating?: number;
  reviewCount?: number;
  listingCount?: number;
  joinedDate?: string;
  isVerified?: boolean;
  specialty?: string;
}

interface SellerProfileCardProps {
  seller: SellerProfile;
  compact?: boolean;
  onViewProfile?: (seller: SellerProfile) => void;
}

const SellerProfileCard: React.FC<SellerProfileCardProps> = ({
  seller,
  compact = false,
  onViewProfile,
}) => {
  return (
    <article
      className={`rounded-[1.6rem] border border-[#D4AF37] bg-white shadow-[0_10px_30px_rgba(11,46,32,0.05)] ${
        compact ? 'p-4' : 'p-6'
      }`}
    >
      <div className="flex items-start gap-4">
        {seller.avatar ? (
          <img
            src={seller.avatar}
            alt={seller.name}
            className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
          />
        ) : (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF8EE] text-[#0F6B4F] sm:h-16 sm:w-16">
            <UserRound size={26} />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="min-w-0 break-words font-sans text-lg! font-extrabold! leading-tight! text-[#0B2E20]! sm:text-xl!">
              {seller.name}
            </h3>
            {seller.isVerified && (
              <BadgeCheck
                size={17}
                className="text-[#0F6B4F]"
                aria-label="Verified seller"
              />
            )}
          </div>

          <p className="mt-1 flex items-center gap-1.5 text-xs text-[#3E3A1D]!">
            <MapPin size={14} className="shrink-0 text-[#0F6B4F]" />
            <span className="min-w-0 break-words">{seller.location}</span>
          </p>

          {seller.specialty && (
            <p className="mt-2 break-words text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0F6B4F]! sm:tracking-[0.12em]">
              {seller.specialty}
            </p>
          )}
        </div>
      </div>

      <p className="mt-5 break-words text-sm leading-7 text-[#3E3A1D]!">{seller.description}</p>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {seller.rating !== undefined && (
          <div className="rounded-xl bg-[#FFF8EE] p-3">
            <div className="flex items-center gap-1.5 text-[#0F6B4F]">
              <Star size={14} />
              <span className="text-xs font-semibold">Rating</span>
            </div>
            <p className="mt-1 text-sm font-bold text-[#0B2E20]!">
              {seller.rating.toFixed(1)}
            </p>
            {seller.reviewCount !== undefined && (
              <p className="mt-1 text-[11px] text-[#3E3A1D]!">
                {seller.reviewCount} reviews
              </p>
            )}
          </div>
        )}

        {seller.listingCount !== undefined && (
          <div className="rounded-xl bg-[#FFF8EE] p-3">
            <p className="text-xs font-semibold text-[#3E3A1D]">Listings</p>
            <p className="mt-1 text-sm font-bold text-[#0B2E20]!">
              {seller.listingCount}
            </p>
            <p className="mt-1 text-[11px] text-[#3E3A1D]!">Food items</p>
          </div>
        )}

        {seller.joinedDate && (
          <div className="rounded-xl bg-[#FFF8EE] p-3">
            <p className="text-xs font-semibold text-[#3E3A1D]">Member since</p>
            <p className="mt-1 break-words text-sm font-bold text-[#0B2E20]!">
              {seller.joinedDate}
            </p>
          </div>
        )}
      </div>

      {onViewProfile && (
        <button
          type="button"
          onClick={() => onViewProfile(seller)}
          className="mt-5 w-full rounded-lg border border-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#0B2E20] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0F6B4F] hover:text-[#0F6B4F]"
        >
          View kitchen
        </button>
      )}
    </article>
  );
};

export default SellerProfileCard;
