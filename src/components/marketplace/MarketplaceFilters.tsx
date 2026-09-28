import React from 'react';
import { Filter, Search, X } from 'lucide-react';

import type { FoodCategory } from './FoodListingCard';

export type MarketplaceSortOption =
  | 'recommended'
  | 'price-low'
  | 'price-high'
  | 'nearest';

export interface MarketplaceFilterValues {
  search: string;
  category: FoodCategory | 'All';
  vegetarianOnly: boolean;
  pickupRadius: string;
  sortBy: MarketplaceSortOption;
}

interface MarketplaceFiltersProps {
  filters: MarketplaceFilterValues;
  onChange: (filters: MarketplaceFilterValues) => void;
  onClear?: () => void;
}

const categories: Array<FoodCategory | 'All'> = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snacks',
  'Desserts',
  'Beverages',
  'Other',
];

const fieldClass =
  'h-11 w-full rounded-full border border-[#D4AF37]/70 bg-[#FFF8EE] px-4 text-sm text-[#0B2E20] outline-none transition-colors focus:border-[#0F6B4F] focus:ring-2 focus:ring-[#0F6B4F]/15';

const MarketplaceFilters: React.FC<MarketplaceFiltersProps> = ({
  filters,
  onChange,
  onClear,
}) => {
  const updateFilter = <K extends keyof MarketplaceFilterValues>(
    key: K,
    value: MarketplaceFilterValues[K],
  ) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <section className="rounded-[1.8rem] bg-white p-4 shadow-[0_16px_40px_rgba(11,46,32,0.06)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF8EE] text-[#0F6B4F]">
            <Filter size={16} />
          </span>
          <h2 className="min-w-0 font-serif text-base! font-semibold! leading-tight! text-[#0B2E20]! sm:text-lg!">
            Find a plate nearby
          </h2>
        </div>

        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-[#0F6B4F] transition-colors hover:bg-[#FFF8EE]"
          >
            <X size={14} />
            Clear
          </button>
        )}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <label htmlFor="marketplace-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#3E3A1D]"
            />
            <input
              id="marketplace-search"
              type="search"
              value={filters.search}
              onChange={(event) => updateFilter('search', event.target.value)}
              placeholder="Biryani, snacks, breakfast..."
              className={`${fieldClass} pl-11 placeholder:text-[#1C1C24]/50`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="marketplace-radius" className="sr-only">
            Pickup distance
          </label>
          <select
            id="marketplace-radius"
            value={filters.pickupRadius}
            onChange={(event) => updateFilter('pickupRadius', event.target.value)}
            className={fieldClass}
          >
            <option value="all">Any distance</option>
            <option value="1">Within 1 km</option>
            <option value="3">Within 3 km</option>
            <option value="5">Within 5 km</option>
            <option value="10">Within 10 km</option>
          </select>
        </div>

        <div>
          <label htmlFor="marketplace-sort" className="sr-only">
            Sort
          </label>
          <select
            id="marketplace-sort"
            value={filters.sortBy}
            onChange={(event) =>
              updateFilter('sortBy', event.target.value as MarketplaceSortOption)
            }
            className={fieldClass}
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="nearest">Nearest first</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const active = filters.category === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => updateFilter('category', category)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                active
                  ? 'bg-[#0B2E20] text-white'
                  : 'bg-[#FFF8EE] text-[#3E3A1D] hover:text-[#0B2E20]'
              }`}
            >
              {category === 'All' ? 'All plates' : category}
            </button>
          );
        })}
        <button
          type="button"
          aria-pressed={filters.vegetarianOnly}
          onClick={() => updateFilter('vegetarianOnly', !filters.vegetarianOnly)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
            filters.vegetarianOnly
              ? 'bg-[#0F6B4F] text-white'
              : 'bg-[#FFF8EE] text-[#3E3A1D] hover:text-[#0B2E20]'
          }`}
        >
          Vegetarian
        </button>
      </div>
    </section>
  );
};

export default MarketplaceFilters;
