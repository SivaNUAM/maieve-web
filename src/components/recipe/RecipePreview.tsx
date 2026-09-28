import React from 'react';
import {
  ArrowLeft,
  ChefHat,
  Clock,
  PlayCircle,
  Sparkles,
  Users,
} from 'lucide-react';

import Badge from '../ui/Badge';
import ImageWithFallback from '../ui/ImageWithFallback';
import IngredientList, { type Ingredient } from './IngredientList';
import CookingSteps, { type CookingStep } from './CookingSteps';

import type { Recipe } from './RecipeCard';

export interface RecipeDetails extends Recipe {
  ingredients: Ingredient[];
  steps: CookingStep[];
  videoUrl?: string;
  nutrition?: {
    calories?: number;
    protein?: number;
    carbohydrates?: number;
    fat?: number;
  };
}

interface RecipePreviewProps {
  recipe: RecipeDetails;
  onBack?: () => void;
}

const RecipePreview: React.FC<RecipePreviewProps> = ({ recipe, onBack }) => {
  const totalTime = recipe.preparationTime + recipe.cookingTime;

  const facts = [
    { icon: Clock, label: 'Total time', value: `${totalTime} min` },
    { icon: ChefHat, label: 'Level', value: recipe.difficulty },
    { icon: Users, label: 'Servings', value: String(recipe.servings) },
    {
      icon: Sparkles,
      label: 'Ingredients',
      value: String(recipe.ingredients.length),
    },
  ];

  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-[#D4AF37] bg-white shadow-[0_16px_40px_rgba(11,46,32,0.06)]">
      {onBack && (
        <div className="border-b border-[#D4AF37] px-5 py-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2E20] transition-colors hover:text-[#0F6B4F]"
          >
            <ArrowLeft size={17} />
            Back to recipes
          </button>
        </div>
      )}

      <div className="relative aspect-video overflow-hidden">
        <ImageWithFallback
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-3 top-3 max-w-[46%] sm:left-5 sm:top-5">
          <Badge variant="success" size="sm" className="max-w-full truncate">
            {recipe.category}
          </Badge>
        </div>
        <div className="absolute right-3 top-3 max-w-[46%] sm:right-5 sm:top-5">
          <span className="flex items-center gap-1.5 rounded-full bg-[#0F6B4F] px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-[0_8px_18px_rgba(15,107,79,0.35)] sm:px-3 sm:py-2 sm:text-xs">
            <Sparkles size={14} />
            Recipe AI
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0F6B4F]!">
            {recipe.difficulty} level
          </p>
          <h1 className="mt-2 break-words font-sans text-2xl! font-extrabold! leading-tight! tracking-tight! text-[#0B2E20]! sm:text-4xl!">
            {recipe.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#3E3A1D]! sm:mt-4 sm:text-base sm:leading-8">
            {recipe.description}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-[#D4AF37] bg-[#FFF8EE] p-3 sm:p-4"
            >
              <fact.icon size={18} className="text-[#0F6B4F]" />
              <p className="mt-2 text-xs text-[#3E3A1D]!">{fact.label}</p>
              <p className="mt-1 text-sm font-bold text-[#0B2E20]!">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        {recipe.videoUrl && (
          <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#0B2E20] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 font-semibold text-white!">
                <PlayCircle size={19} className="text-[#D4AF37]" />
                Step-by-step video
              </p>
              <p className="mt-1 text-sm text-[#FFF8EE]!">
                Watch the guide for this dish, one step at a time.
              </p>
            </div>
            <a
              href={recipe.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#0F6B4F] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(15,107,79,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2E20] sm:w-auto"
            >
              Watch video
            </a>
          </div>
        )}

        <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[0.85fr_1.15fr]">
          <IngredientList ingredients={recipe.ingredients} />
          <CookingSteps steps={recipe.steps} />
        </div>

        {recipe.nutrition && (
          <div className="mt-10 border-t border-[#D4AF37] pt-8">
            <h2 className="font-sans text-2xl! font-extrabold! text-[#0B2E20]!">
              Nutrition
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Object.entries(recipe.nutrition).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-2xl border border-[#D4AF37] bg-[#FFF8EE] p-4"
                >
                  <p className="text-xs capitalize text-[#3E3A1D]!">{key}</p>
                  <p className="mt-1 text-lg font-bold text-[#0B2E20]!">
                    {value ?? '--'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default RecipePreview;
