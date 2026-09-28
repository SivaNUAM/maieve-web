import React from 'react';
import { ArrowUpRight, Leaf } from 'lucide-react';

import ImageWithFallback from '../ui/ImageWithFallback';

export interface PlantCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  plantCount?: number;
}

interface PlantCategoryCardProps {
  category: PlantCategory;
  onSelect?: (category: PlantCategory) => void;
}

const PlantCategoryCard: React.FC<PlantCategoryCardProps> = ({
  category,
  onSelect,
}) => {
  return (
    <article className="group relative overflow-hidden rounded-[1.6rem] bg-[#0B2E20]">
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
        <ImageWithFallback
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E20] via-[#0B2E20]/35 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#0F6B4F] text-white shadow-[0_8px_16px_rgba(15,107,79,0.35)]">
          <Leaf size={18} />
        </div>

        <h3 className="break-words font-sans text-xl! font-extrabold! leading-tight! text-white! sm:text-2xl!">
          {category.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#D5E4D8]!">
          {category.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          {category.plantCount !== undefined && (
            <span className="text-xs font-medium text-[#D5E4D8]">
              {category.plantCount} plants
            </span>
          )}

          <button
            type="button"
            onClick={() => onSelect?.(category)}
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-[#D4AF37]"
          >
            Explore
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlantCategoryCard;
