import React from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

import RecipeCard, { type Recipe } from './RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
  onSelectRecipe?: (recipe: Recipe) => void;
  emptyMessage?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const RecipeGrid: React.FC<RecipeGridProps> = ({
  recipes,
  onSelectRecipe,
  emptyMessage = 'No recipes available yet.',
}) => {
  if (recipes.length === 0) {
    return (
      <div className="rounded-[1.6rem] border border-dashed border-[#D4AF37] bg-[#FFF8EE] px-4 py-12 text-center sm:px-6 sm:py-16">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0F6B4F] shadow-sm">
          <Leaf size={22} />
        </span>
        <h3 className="mt-4 font-sans text-xl! font-extrabold! text-[#0B2E20]!">
          No recipes found
        </h3>
        <p className="mt-2 text-sm text-[#3E3A1D]!">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
      {recipes.map((recipe, index) => (
        <motion.div
          key={recipe.id}
          className="h-full"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            delay: (index % 3) * 0.08,
            ease,
          }}
        >
          <RecipeCard recipe={recipe} onSelect={onSelectRecipe} />
        </motion.div>
      ))}
    </div>
  );
};

export default RecipeGrid;
