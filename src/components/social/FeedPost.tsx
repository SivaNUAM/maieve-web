import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { BadgeCheck, Bookmark, Heart, MessageCircle } from 'lucide-react';

import ImageWithFallback from '../ui/ImageWithFallback';
import { getNeighbor } from '../../data/neighbors';
import { useNeighborhood } from '../../context/Neighborhood';

interface FeedPostProps {
  neighborId: string;
  image: string;
  imageAlt: string;
  likes: number;
  postedAgo: string;
  caption: string;
  badge?: string;
  meta?: ReactNode;
  actionLabel: string;
  doneLabel?: string;
  done?: boolean;
  onAction?: () => void;
  featured?: boolean;
  mediaClassName?: string;
}

const FeedPost: React.FC<FeedPostProps> = ({
  neighborId,
  image,
  imageAlt,
  likes,
  postedAgo,
  caption,
  badge,
  meta,
  actionLabel,
  doneLabel = 'Saved',
  done = false,
  onAction,
  featured = false,
  mediaClassName,
}) => {
  const neighbor = getNeighbor(neighborId);
  const { isFollowing, toggleFollow } = useNeighborhood();
  const following = isFollowing(neighbor.id);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const profile = (
    <div className="flex items-center gap-3">
      <span className="rounded-full bg-gradient-to-br from-[#D4AF37] to-[#0F6B4F] p-[2px]">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF8EE] text-sm font-semibold text-[#0F6B4F]">
          {neighbor.name.slice(0, 1)}
        </span>
      </span>
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1 truncate text-sm font-semibold text-[#0F6B4F]!">
          {neighbor.handle}
          <BadgeCheck size={14} aria-hidden="true" />
        </p>
        <p className="truncate text-[11px] text-[#1C1C24]!">
          {neighbor.place}
        </p>
      </div>
      <button
        type="button"
        onClick={() => toggleFollow(neighbor.id)}
        aria-pressed={following}
        className={`text-xs font-semibold ${following ? 'text-[#3E3A1D]' : 'text-[#0F6B4F]'}`}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  );

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-[0_16px_40px_rgba(11,46,32,0.08)] ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <header className={`px-4 py-3.5 ${featured ? 'lg:hidden' : ''}`}>{profile}</header>

      <div className={`relative overflow-hidden bg-[#F7F3E8] ${featured ? 'lg:w-[52%]' : ''}`}>
        <ImageWithFallback
          src={image}
          alt={imageAlt}
          containerClassName={
            mediaClassName
              ? mediaClassName
              : featured
                ? 'aspect-[5/4] w-full lg:aspect-auto lg:h-full lg:min-h-[320px]'
                : 'aspect-[5/4] w-full'
          }
          className="transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0F6B4F] shadow-sm">
            {badge}
          </span>
        ) : null}
      </div>

      <div className={`flex flex-1 flex-col p-4 ${featured ? 'lg:justify-center lg:p-8' : ''}`}>
        {featured ? <div className="mb-4 hidden lg:block">{profile}</div> : null}

        <div className="flex items-center justify-between text-[#0F6B4F]">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={liked ? 'Unlike' : 'Like'}
              aria-pressed={liked}
              onClick={() => setLiked((value) => !value)}
            >
              <Heart size={18} className={liked || done ? 'fill-[#0F6B4F]' : ''} />
            </button>
            <MessageCircle size={18} aria-hidden="true" />
          </div>
          <button
            type="button"
            aria-label={saved ? 'Unsave' : 'Save'}
            aria-pressed={saved}
            onClick={() => setSaved((value) => !value)}
          >
            <Bookmark size={18} className={saved ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-[#D4AF37]'} />
          </button>
        </div>

        <p className="mt-2 text-xs font-semibold text-[#0F6B4F]!">
          {likes + (liked ? 1 : 0)} neighbors
        </p>
        <p className="mt-1 text-sm leading-6 text-[#0B2E20]!">
          <span className="font-semibold">{neighbor.handle}</span> {caption}
        </p>
        {meta ? <div className="mt-3">{meta}</div> : null}

        <button
          type="button"
          onClick={onAction}
          aria-pressed={done}
          className={`mt-4 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
            done
              ? 'bg-[#FFF8EE] text-[#0F6B4F]'
              : 'bg-[#0B2E20] text-white shadow-[0_10px_24px_rgba(11,46,32,0.18)] hover:bg-[#0F6B4F]'
          }`}
        >
          {done ? doneLabel : actionLabel}
        </button>
        <p className="mt-2 text-[11px] text-[#1C1C24]!">{postedAgo}</p>
      </div>
    </article>
  );
};

export default FeedPost;
