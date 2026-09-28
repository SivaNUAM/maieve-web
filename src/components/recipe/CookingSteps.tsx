import React from 'react';
import { Clock, PlayCircle } from 'lucide-react';

import ImageWithFallback from '../ui/ImageWithFallback';

export interface CookingStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  duration?: number;
  image?: string;
}

interface CookingStepsProps {
  steps: CookingStep[];
  title?: string;
}

const CookingSteps: React.FC<CookingStepsProps> = ({
  steps,
  title = 'Cooking steps',
}) => {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF8EE] text-[#0F6B4F]">
          <PlayCircle size={19} />
        </div>
        <div className="min-w-0">
          <h2 className="font-sans text-xl! font-extrabold! leading-tight! text-[#0B2E20]! sm:text-2xl!">
            {title}
          </h2>
          <p className="text-xs text-[#3E3A1D]!">
            A clip and a clear move for every step.
          </p>
        </div>
      </div>

      <ol className="space-y-4">
        {steps.map((step) => (
          <li
            key={step.id}
            className="rounded-[1.4rem] border border-[#D4AF37] bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(11,46,32,0.06)] sm:p-4"
          >
            <div className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F6B4F] text-sm font-bold text-white shadow-[0_8px_16px_rgba(15,107,79,0.28)]">
                {step.stepNumber}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="min-w-0 break-words font-sans text-base! font-bold! text-[#0B2E20]!">
                    {step.title}
                  </h3>
                  {step.duration !== undefined && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF8EE] px-2.5 py-1 text-[11px] font-semibold text-[#0F6B4F]">
                      <Clock size={12} />
                      {step.duration} min
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm leading-7 text-[#3E3A1D]!">
                  {step.description}
                </p>

                {step.image && (
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    containerClassName="mt-4 h-40 w-full rounded-2xl sm:h-52"
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default CookingSteps;
