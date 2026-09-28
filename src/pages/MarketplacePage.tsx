import React, { useMemo, useState } from 'react';
import { Leaf, MapPin, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

import FoodListingCard from '../components/marketplace/FoodListingCard';
import FoodListingGrid from '../components/marketplace/FoodListingGrid';
import MarketplaceFilters, {
  type MarketplaceFilterValues,
} from '../components/marketplace/MarketplaceFilters';
import { marketplaceListings } from '../data/marketplace';

const defaultFilters: MarketplaceFilterValues = {
  search: '',
  category: 'All',
  vegetarianOnly: false,
  pickupRadius: 'all',
  sortBy: 'recommended',
};

const ease = [0.22, 1, 0.36, 1] as const;

const getDistanceKm = (distance?: string) => {
  if (!distance) return Number.POSITIVE_INFINITY;

  const value = Number.parseFloat(distance);
  return Number.isFinite(value) ? value : Number.POSITIVE_INFINITY;
};

const MarketplacePage: React.FC = () => {
  const [filters, setFilters] =
    useState<MarketplaceFilterValues>(defaultFilters);
  const [requestedId, setRequestedId] = useState<string | null>(null);

  const featured =
    marketplaceListings.find((listing) => listing.isFeatured) ??
    marketplaceListings[0];

  const filteredListings = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    const radiusLimit =
      filters.pickupRadius === 'all'
        ? Number.POSITIVE_INFINITY
        : Number(filters.pickupRadius);

    const matches = marketplaceListings.filter((listing) => {
      const matchesSearch =
        query.length === 0 ||
        listing.name.toLowerCase().includes(query) ||
        listing.description.toLowerCase().includes(query) ||
        listing.sellerName.toLowerCase().includes(query) ||
        listing.neighborId.toLowerCase().includes(query);

      const matchesCategory =
        filters.category === 'All' || listing.category === filters.category;

      const matchesVegetarian =
        !filters.vegetarianOnly || Boolean(listing.isVegetarian);

      const matchesRadius =
        getDistanceKm(listing.pickupDistance) <= radiusLimit;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesVegetarian &&
        matchesRadius
      );
    });

    return [...matches].sort((first, second) => {
      if (filters.sortBy === 'price-low') {
        return first.price - second.price;
      }

      if (filters.sortBy === 'price-high') {
        return second.price - first.price;
      }

      if (filters.sortBy === 'nearest') {
        return (
          getDistanceKm(first.pickupDistance) -
          getDistanceKm(second.pickupDistance)
        );
      }

      return 0;
    });
  }, [filters]);

  const requested = marketplaceListings.find((listing) => listing.id === requestedId);
  const nearest = Math.min(
    ...marketplaceListings.map((listing) => getDistanceKm(listing.pickupDistance)),
  );

  return (
    <main className="min-h-screen bg-[#FFF8EE] text-[#0B2E20]">
      <section className="px-4 pb-6 pt-6 sm:px-5 lg:px-6 lg:pt-8">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium italic text-[#0F6B4F]!">
              <Leaf size={14} className="shrink-0" />
              <span>Follow a cook</span>
              <span aria-hidden="true">·</span>
              <span>Request a plate</span>
              <span aria-hidden="true">·</span>
              <span>Pick it up</span>
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-[2rem]! font-semibold! leading-[1.05]! tracking-[-0.03em] text-[#0B2E20]! sm:text-5xl! lg:text-6xl!">
              Extra plates
              <span className="block italic text-[#0F6B4F]!">from nearby homes</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#3E3A1D]! sm:mt-5 sm:text-base">
              Home cooks list what they already made. You request a plate and
              collect it from their house. No delivery rider in the middle.
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-8">
              <div className="min-w-0">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#3E3A1D] sm:text-[11px] sm:tracking-[0.16em]">
                  Plates today
                </dt>
                <dd className="mt-1 font-serif text-lg font-semibold text-[#0B2E20] min-[380px]:text-2xl sm:text-3xl">
                  {marketplaceListings.length}
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#3E3A1D] sm:text-[11px] sm:tracking-[0.16em]">
                  Closest kitchen
                </dt>
                <dd className="mt-1 inline-flex max-w-full items-center gap-1 font-serif text-lg font-semibold text-[#0B2E20] min-[380px]:text-2xl sm:gap-1.5 sm:text-3xl">
                  <MapPin size={14} className="shrink-0 text-[#0F6B4F]" />
                  {Number.isFinite(nearest) ? `${nearest} km` : '—'}
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#3E3A1D] sm:text-[11px] sm:tracking-[0.16em]">
                  How you get it
                </dt>
                <dd className="mt-1 inline-flex max-w-full items-center gap-1 font-serif text-lg font-semibold text-[#0B2E20] min-[380px]:text-2xl sm:gap-1.5 sm:text-3xl">
                  <ShoppingBag size={14} className="shrink-0 text-[#D4AF37]" />
                  Pickup
                </dd>
              </div>
            </dl>
          </motion.div>

          {featured ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6, ease }}
            >
              <FoodListingCard
                listing={featured}
                featured
                requested={featured.id === requestedId}
                onSelect={(listing) => setRequestedId(listing.id)}
              />
            </motion.div>
          ) : null}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-[1440px]">
          <MarketplaceFilters
            filters={filters}
            onChange={setFilters}
            onClear={() => setFilters(defaultFilters)}
          />

          <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F6B4F]!">
                Today&apos;s feed
              </p>
              <h2 className="mt-1 font-serif text-2xl! font-semibold! text-[#0B2E20]! sm:text-3xl!">
                {filteredListings.length}{' '}
                {filteredListings.length === 1 ? 'plate' : 'plates'} near you
              </h2>
            </div>
            {requested ? (
              <p className="w-full break-words rounded-2xl bg-[#0B2E20] px-4 py-2 text-sm text-white! sm:w-auto sm:max-w-sm sm:rounded-full">
                Requested {requested.name} from {requested.sellerName}. Pick it
                up at their house.
              </p>
            ) : null}
          </div>

          <div className="mt-6">
            <FoodListingGrid
              listings={filteredListings}
              requestedId={requestedId}
              onSelectListing={(listing) => setRequestedId(listing.id)}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MarketplacePage;
