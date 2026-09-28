import React from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

import PlantCard, { type Plant } from './PlantCard';

interface PlantGridProps {
  plants: Plant[];
  onSelectPlant?: (plant: Plant) => void;
  emptyMessage?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const PlantGrid: React.FC<PlantGridProps> = ({
  plants,
  onSelectPlant,
  emptyMessage = 'No plants available at the moment.',
}) => {
  if (plants.length === 0) {
    return (
      <div className="rounded-[1.6rem] border border-dashed border-[#D4AF37] bg-[#FFF8EE] px-4 py-12 text-center sm:px-6 sm:py-16">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0F6B4F] shadow-sm">
          <Leaf size={22} />
        </span>
        <h3 className="mt-4 font-sans text-xl! font-extrabold! text-[#0B2E20]!">
          No plants found
        </h3>
        <p className="mt-2 text-sm text-[#3E3A1D]!">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
      {plants.map((plant, index) => (
        <motion.div
          key={plant.id}
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
          <PlantCard plant={plant} onSelect={onSelectPlant} />
        </motion.div>
      ))}
    </div>
  );
};

export default PlantGrid;
