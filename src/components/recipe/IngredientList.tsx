import React from 'react';
import { Check, ShoppingBasket } from 'lucide-react';

export interface Ingredient {
  id: string;
  name: string;
  quantity: number | string;
  unit: string;
  notes?: string;
  isOptional?: boolean;
}

interface IngredientListProps {
  ingredients: Ingredient[];
  title?: string;
}

const IngredientList: React.FC<IngredientListProps> = ({
  ingredients,
  title = 'Ingredients',
}) => {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF8EE] text-[#0F6B4F]">
          <ShoppingBasket size={19} />
        </div>
        <div className="min-w-0">
          <h2 className="font-sans text-xl! font-extrabold! leading-tight! text-[#0B2E20]! sm:text-2xl!">
            {title}
          </h2>
          <p className="text-xs text-[#3E3A1D]!">
            Quantities for this dish, ready before you start.
          </p>
        </div>
      </div>

      <div className="space-y-2.5">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="flex items-start gap-3 rounded-2xl border border-[#D4AF37] bg-white px-3.5 py-3 transition-colors duration-200 hover:border-[#D4AF37] hover:bg-[#FFF8EE]"
          >
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF8EE] text-[#0F6B4F]">
              <Check size={13} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="min-w-0 break-words text-sm font-semibold text-[#0B2E20]!">
                  {ingredient.name}
                </p>
                <p className="shrink-0 text-sm font-bold text-[#0F6B4F]!">
                  {ingredient.quantity} {ingredient.unit}
                </p>
              </div>

              {ingredient.notes && (
                <p className="mt-1 text-xs leading-5 text-[#3E3A1D]!">
                  {ingredient.notes}
                </p>
              )}

              {ingredient.isOptional && (
                <span className="mt-1 inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0F6B4F]">
                  Optional
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IngredientList;
