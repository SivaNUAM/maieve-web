import React from 'react';
import { Clock, MapPin, Package } from 'lucide-react';

import FeedPost from '../social/FeedPost';

export type FoodCategory =
  | 'Breakfast'
  | 'Lunch'
  | 'Dinner'
  | 'Snacks'
  | 'Desserts'
  | 'Beverages'
  | 'Other';

export interface FoodListing {
  id: string;
  name: string;
  description: string;
  image: string;
  category: FoodCategory;
  price: number;
  quantityAvailable: number;
  quantityUnit: string;
  sellerName: string;
  sellerId: string;
  location: string;
  pickupDistance?: string;
  pickupTime?: string;
  isVegetarian?: boolean;
  isHomemade?: boolean;
  isFeatured?: boolean;
  neighborId: string;
  likes: number;
  postedAgo: string;
}

interface FoodListingCardProps {
  listing: FoodListing;
  onSelect?: (listing: FoodListing) => void;
  featured?: boolean;
  requested?: boolean;
}

const FoodListingCard: React.FC<FoodListingCardProps> = ({
  listing,
  onSelect,
  featured = false,
  requested = false,
}) => {
  return (
    <FeedPost
      neighborId={listing.neighborId}
      image={listing.image}
      imageAlt={listing.name}
      likes={listing.likes}
      postedAgo={listing.postedAgo}
      caption={`${listing.name}. ₹${listing.price}. ${listing.description}`}
      mediaClassName={
        featured
          ? 'aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[320px]'
          : 'aspect-[4/3] w-full sm:aspect-[5/4]'
      }
      badge={listing.category}
      featured={featured}
      done={requested}
      doneLabel="Pick it up from the house"
      actionLabel="Request a plate"
      onAction={() => onSelect?.(listing)}
      meta={
        <div className="space-y-1.5 text-xs font-medium text-[#3E3A1D]">
          <p className="flex items-center gap-1.5">
            <MapPin size={13} className="shrink-0 text-[#0F6B4F]" />
            <span className="min-w-0 break-words">
              {listing.pickupDistance ?? listing.location}
            </span>
          </p>
          <p className="flex items-center gap-1.5">
            <Clock size={13} className="shrink-0 text-[#0F6B4F]" />
            <span className="min-w-0 break-words">
              {listing.pickupTime ?? 'Pickup today'}
            </span>
          </p>
          <p className="flex items-center gap-1.5">
            <Package size={13} className="shrink-0 text-[#0F6B4F]" />
            <span className="min-w-0 break-words">
              {listing.quantityAvailable} {listing.quantityUnit} left
            </span>
          </p>
        </div>
      }
    />
  );
};

export default FoodListingCard;
