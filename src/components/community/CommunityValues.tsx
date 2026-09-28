import React from 'react';
import { HeartHandshake, Leaf, Sprout, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CommunityValue {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface CommunityValuesProps {
  values?: CommunityValue[];
}

const defaultValues: CommunityValue[] = [
  {
    id: 'share-food',
    title: 'Share food',
    description:
      'A meal offered freely can turn a nearby stranger into someone you are glad to know.',
    icon: HeartHandshake,
  },
  {
    id: 'support-families',
    title: 'Support families',
    description:
      'Home cooks share what they already make, and a neighbour collects it with care.',
    icon: Users,
  },
  {
    id: 'protect-nature',
    title: 'Care for nature',
    description:
      'Organic plants and seeds for a kitchen window, a balcony, or a desk.',
    icon: Leaf,
  },
  {
    id: 'grow-together',
    title: 'Grow together',
    description:
      'The circle stays within a kilometre, so the people you meet are the people who live close by.',
    icon: Sprout,
  },
];

const CommunityValues: React.FC<CommunityValuesProps> = ({
  values = defaultValues,
}) => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <article
              key={value.id}
              className="min-w-0 rounded-[1.4rem] bg-white p-4 shadow-[0_12px_30px_rgba(11,46,32,0.05)] sm:rounded-[1.6rem] sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF8EE] text-[#0F6B4F] sm:h-12 sm:w-12">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 break-words font-serif text-lg! font-semibold! leading-tight! text-[#0B2E20]! sm:mt-5 sm:text-2xl!">
                {value.title}
              </h3>
              <p className="mt-2 break-words text-xs leading-5 text-[#3E3A1D]! sm:text-sm sm:leading-6">
                {value.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CommunityValues;
