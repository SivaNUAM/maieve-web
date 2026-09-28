import React from 'react';
import { MapPin } from 'lucide-react';

import ImageWithFallback from '../ui/ImageWithFallback';

export interface CommunityStory {
  id: string;
  name: string;
  role: string;
  location: string;
  story: string;
  image: string;
  contribution: string;
}

interface CommunityStoryCardProps {
  story: CommunityStory;
}

const CommunityStoryCard: React.FC<CommunityStoryCardProps> = ({ story }) => {
  return (
    <article className="flex h-full flex-col rounded-[1.6rem] bg-white p-4 shadow-[0_16px_40px_rgba(11,46,32,0.06)] sm:p-5">
      <ImageWithFallback
        src={story.image}
        alt={story.name}
        containerClassName="h-16 w-16 rounded-full ring-4 ring-[#FFF8EE]"
        className="rounded-full"
      />
      <p className="mt-5 font-serif text-3xl leading-none text-[#D4AF37]" aria-hidden="true">
        “
      </p>
      <p className="mt-2 flex-1 break-words text-sm leading-7 text-[#3E3A1D]!">{story.story}</p>
      <div className="mt-6 border-t border-[#D4AF37]/40 pt-4">
        <h3 className="break-words font-serif text-lg! font-semibold! text-[#0B2E20]!">{story.name}</h3>
        <p className="mt-1 break-words text-sm text-[#0F6B4F]!">{story.role}</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-[#1C1C24]!">
          <MapPin size={12} className="shrink-0 text-[#0F6B4F]" />
          <span className="min-w-0 break-words">{story.location}</span>
        </p>
        <p className="mt-3 break-words text-sm font-medium text-[#0B2E20]!">{story.contribution}</p>
      </div>
    </article>
  );
};

export default CommunityStoryCard;
