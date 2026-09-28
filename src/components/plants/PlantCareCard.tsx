import React from 'react';
import { CheckCircle2, Droplets, Leaf, Sprout, Sun } from 'lucide-react';

export type PlantCareType = 'watering' | 'sunlight' | 'soil' | 'general';

export interface PlantCareTip {
  id: string;
  title: string;
  description: string;
  type: PlantCareType;
  tips: string[];
  duration?: string;
}

interface PlantCareCardProps {
  care: PlantCareTip;
  compact?: boolean;
}

const careIcons: Record<PlantCareType, React.ReactNode> = {
  watering: <Droplets size={20} />,
  sunlight: <Sun size={20} />,
  soil: <Sprout size={20} />,
  general: <Leaf size={20} />,
};

const PlantCareCard: React.FC<PlantCareCardProps> = ({
  care,
  compact = false,
}) => {
  return (
    <article
      className={`rounded-[1.6rem] border border-[#D4AF37] bg-white shadow-[0_10px_30px_rgba(11,46,32,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(11,46,32,0.08)] ${
        compact ? 'p-4' : 'p-5 sm:p-6'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF8EE] text-[#0F6B4F]">
          {careIcons[care.type]}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="break-words font-sans text-lg! font-extrabold! leading-tight! text-[#0B2E20]! sm:text-xl!">
            {care.title}
          </h3>
          {care.duration && (
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#0F6B4F]! sm:tracking-[0.12em]">
              {care.duration}
            </p>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-[#3E3A1D]!">{care.description}</p>

      {care.tips.length > 0 && (
        <ul className="mt-5 space-y-3">
          {care.tips.map((tip, index) => (
            <li
              key={`${care.id}-tip-${index}`}
              className="flex items-start gap-2.5 text-sm leading-6 text-[#0B2E20]"
            >
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-[#0F6B4F]"
              />
              <span className="min-w-0 break-words">{tip}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default PlantCareCard;
