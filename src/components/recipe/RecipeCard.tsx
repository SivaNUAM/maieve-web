import React, { useState } from 'react';
import { ChefHat, Clock } from 'lucide-react';

import FeedPost from '../social/FeedPost';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  preparationTime: number;
  cookingTime: number;
  servings: number;
  ingredientsCount: number;
  rating?: number;
  isVegetarian?: boolean;
  neighborId: string;
  likes: number;
  postedAgo: string;
  caption: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  onSelect?: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect }) => {
  const [cooking, setCooking] = useState(false);
  const totalTime = recipe.preparationTime + recipe.cookingTime;

  return (
    <FeedPost
      neighborId={recipe.neighborId}
      image={recipe.image}
      imageAlt={recipe.title}
      likes={recipe.likes}
      postedAgo={recipe.postedAgo}
      caption={recipe.caption}
      mediaClassName="aspect-[4/3] w-full sm:aspect-[5/4]"
      badge={recipe.difficulty}
      done={cooking}
      doneLabel="Guide saved"
      actionLabel="Cook along"
      onAction={() => {
        setCooking(true);
        onSelect?.(recipe);
      }}
      meta={
        <div className="space-y-1.5 text-xs font-medium text-[#3E3A1D]">
          <p className="flex items-center gap-1.5">
            <Clock size={13} className="shrink-0 text-[#0F6B4F]" />
            {totalTime} min · video each step
          </p>
          <p className="flex items-center gap-1.5">
            <ChefHat size={13} className="shrink-0 text-[#0F6B4F]" />
            {recipe.ingredientsCount} ingredients · {recipe.servings} plates
          </p>
        </div>
      }
    />
  );
};

export default RecipeCard;
