import React from 'react';
import { Leaf, MapPin, Users } from 'lucide-react';

interface CommunityMapLocation {
  id: string;
  name: string;
  category: 'Food Sharing' | 'Home Cook' | 'Plant Community';
  position: {
    top: string;
    left: string;
  };
}

interface CommunityMapPreviewProps {
  locations?: CommunityMapLocation[];
  title?: string;
  description?: string;
}

const defaultLocations: CommunityMapLocation[] = [
  {
    id: 'location-1',
    name: 'Home Food Sharing',
    category: 'Food Sharing',
    position: { top: '28%', left: '23%' },
  },
  {
    id: 'location-2',
    name: 'Local Home Cook',
    category: 'Home Cook',
    position: { top: '45%', left: '63%' },
  },
  {
    id: 'location-3',
    name: 'Organic Plant Group',
    category: 'Plant Community',
    position: { top: '67%', left: '36%' },
  },
];

const markerStyle: Record<
  CommunityMapLocation['category'],
  { icon: React.ReactNode; pin: string; dot: string }
> = {
  'Food Sharing': {
    icon: <MapPin size={15} />,
    pin: 'bg-[#0F6B4F] text-white',
    dot: 'bg-[#0F6B4F]',
  },
  'Home Cook': {
    icon: <Users size={15} />,
    pin: 'bg-[#0B2E20] text-white',
    dot: 'bg-[#0B2E20]',
  },
  'Plant Community': {
    icon: <Leaf size={15} />,
    pin: 'bg-[#D4AF37] text-[#0B2E20]',
    dot: 'bg-[#D4AF37]',
  },
};

const CommunityMapPreview: React.FC<CommunityMapPreviewProps> = ({
  locations = defaultLocations,
  title = 'People within a short walk',
  description = 'Free meals, home cooks, and plant groups stay inside a small kilometre range.',
}) => {
  return (
    <section className="overflow-hidden rounded-[1.6rem] border border-[#D4AF37] bg-white shadow-[0_10px_30px_rgba(11,46,32,0.05)]">
      <div className="flex flex-col gap-4 p-4 sm:p-6">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF8EE] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0F6B4F]! sm:tracking-[0.16em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0F6B4F]" />
            Nearby
          </p>
          <h2 className="mt-3 break-words font-serif text-2xl! font-semibold! leading-tight! text-[#0B2E20]! sm:text-[clamp(1.8rem,3vw,2.6rem)]!">
            {title}
          </h2>
          <p className="mt-2 max-w-xl break-words text-sm leading-6 text-[#3E3A1D]!">
            {description}
          </p>
        </div>
      </div>

      <div className="relative mx-4 mb-4 h-[280px] overflow-hidden rounded-2xl bg-[#FFF8EE] sm:mx-6 sm:mb-5 sm:h-[360px]">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute left-[8%] top-[10%] h-[25%] w-[30%] rounded-3xl bg-[#E3F3D4]" />
          <div className="absolute right-[7%] top-[8%] h-[30%] w-[27%] rounded-3xl bg-[#D7EEC4]" />
          <div className="absolute bottom-[8%] left-[12%] h-[30%] w-[28%] rounded-3xl bg-[#E7F6DA]" />
          <div className="absolute bottom-[12%] right-[9%] h-[24%] w-[35%] rounded-3xl bg-[#D3EBBD]" />
        </div>

        <div className="absolute left-1/2 top-[-10%] h-[120%] w-4 -translate-x-1/2 rotate-[28deg] bg-white/80" />
        <div className="absolute left-[-10%] top-1/2 h-4 w-[120%] -translate-y-1/2 -rotate-[18deg] bg-white/80" />
        <div className="absolute left-[-10%] top-[30%] h-3 w-[120%] rotate-[35deg] bg-white/70" />

        {locations.map((location) => {
          const marker = markerStyle[location.category];

          return (
            <div
              key={location.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                top: location.position.top,
                left: location.position.left,
              }}
            >
              <div className="group relative">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-4 border-white shadow-[0_10px_20px_rgba(11,46,32,0.16)] transition-transform duration-300 hover:scale-110 ${marker.pin}`}
                >
                  {marker.icon}
                </div>
                <div className="absolute left-1/2 top-14 hidden w-40 -translate-x-1/2 rounded-xl bg-white px-3 py-2 text-center shadow-[0_10px_24px_rgba(11,46,32,0.08)] sm:block">
                  <p className="text-xs font-semibold text-[#0B2E20]!">
                    {location.name}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[#3E3A1D]!">
                    {location.category}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute inset-x-4 bottom-4 hidden items-center justify-between sm:flex">
          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#0B2E20] shadow-sm sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#0F6B4F]" />
            About 1 km around you
          </div>
          <div className="rounded-full bg-white/95 px-3 py-2 text-[10px] font-medium text-[#3E3A1D] shadow-sm">
            A sketch of the neighbourhood
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-3 border-t border-[#D4AF37] px-4 py-4 sm:px-6 sm:py-5">
        <p className="w-full text-xs font-semibold text-[#0B2E20]! sm:hidden">
          About 1 km around you
        </p>
        <p className="w-full text-[11px] text-[#3E3A1D]! sm:hidden">
          A sketch of the neighbourhood
        </p>
        {(
          Object.keys(markerStyle) as CommunityMapLocation['category'][]
        ).map((category) => (
          <div
            key={category}
            className="flex items-center gap-2 text-xs font-medium text-[#3E3A1D]"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${markerStyle[category].dot}`}
            />
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityMapPreview;
