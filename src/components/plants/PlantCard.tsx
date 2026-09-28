import React, { useState } from 'react';
import { Droplets, Sun } from 'lucide-react';

import FeedPost from '../social/FeedPost';

export type PlantLightLevel = 'Low' | 'Medium' | 'Bright';
export type PlantCareLevel = 'Easy' | 'Moderate' | 'Advanced';

export interface Plant {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  unit?: string;
  lightLevel: PlantLightLevel;
  careLevel: PlantCareLevel;
  wateringFrequency: string;
  suitableFor: 'Home' | 'Office' | 'Both';
  isOrganic?: boolean;
  isFeatured?: boolean;
  neighborId: string;
  likes: number;
  postedAgo: string;
  caption: string;
}

interface PlantCardProps {
  plant: Plant;
  onSelect?: (plant: Plant) => void;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onSelect }) => {
  const [asked, setAsked] = useState(false);

  return (
    <FeedPost
      neighborId={plant.neighborId}
      image={plant.image}
      imageAlt={plant.name}
      likes={plant.likes}
      postedAgo={plant.postedAgo}
      caption={plant.caption}
      mediaClassName="aspect-[4/3] w-full sm:aspect-[5/4]"
      badge={plant.careLevel}
      done={asked}
      doneLabel="Asked for a cutting"
      actionLabel="Ask for a cutting"
      onAction={() => {
        setAsked(true);
        onSelect?.(plant);
      }}
      meta={
        <div className="space-y-1.5 text-xs font-medium text-[#3E3A1D]">
          <p className="flex items-center gap-1.5">
            <Sun size={13} className="shrink-0 text-[#0F6B4F]" />
            {plant.lightLevel} light
          </p>
          <p className="flex items-center gap-1.5">
            <Droplets size={13} className="shrink-0 text-[#0F6B4F]" />
            <span className="min-w-0 break-words">{plant.wateringFrequency}</span>
          </p>
        </div>
      }
    />
  );
};

export default PlantCard;
