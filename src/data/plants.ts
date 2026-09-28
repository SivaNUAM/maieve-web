import type { Plant } from '../components/plants/PlantCard';
import { neighbors } from './neighbors';

export const plants: Plant[] = [
  {
    id: 'plant-1',
    name: 'Snake Plant',
    description:
      'A low-maintenance indoor plant that is suitable for homes and offices.',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop',
    category: 'Indoor Plants',
    price: 0,
    unit: 'cutting',
    lightLevel: 'Low',
    careLevel: 'Easy',
    wateringFrequency: 'Once every 1–2 weeks',
    suitableFor: 'Both',
    isOrganic: true,
    isFeatured: true,
    neighborId: neighbors.rahul.id,
    likes: 64,
    postedAgo: '6 hours ago',
    caption:
      'This snake plant lives by my desk. Easy care, low light. Ask if you want a cutting for home or the office.',
  },
  {
    id: 'plant-2',
    name: 'Aloe Vera',
    description:
      'A useful succulent plant that grows well in warm environments with proper sunlight.',
    image:
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&auto=format&fit=crop',
    category: 'Medicinal Plants',
    price: 0,
    unit: 'cutting',
    lightLevel: 'Bright',
    careLevel: 'Easy',
    wateringFrequency: 'When the soil is dry',
    suitableFor: 'Home',
    isOrganic: true,
    neighborId: neighbors.leela.id,
    likes: 41,
    postedAgo: 'Yesterday',
    caption:
      'Aloe on the sunny step. Water only when the soil is dry. Happy to pass a pup to someone nearby.',
  },
  {
    id: 'plant-3',
    name: 'Money Plant',
    description:
      'A popular indoor plant that adds greenery to homes and workspaces.',
    image:
      'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&auto=format&fit=crop',
    category: 'Indoor Plants',
    price: 0,
    unit: 'cutting',
    lightLevel: 'Medium',
    careLevel: 'Easy',
    wateringFrequency: 'Once a week',
    suitableFor: 'Both',
    isOrganic: true,
    neighborId: neighbors.priya.id,
    likes: 97,
    postedAgo: '2 hours ago',
    caption:
      'The money plant in the kitchen window. Once a week is enough. Cuttings are ready if you follow along.',
  },
  {
    id: 'plant-4',
    name: 'Tulsi Plant',
    description:
      'A traditional aromatic plant suitable for home gardens and balconies.',
    image:
      'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&auto=format&fit=crop',
    category: 'Herbs',
    price: 0,
    unit: 'cutting',
    lightLevel: 'Bright',
    careLevel: 'Moderate',
    wateringFrequency: 'When the topsoil is dry',
    suitableFor: 'Home',
    isOrganic: true,
    neighborId: neighbors.anjali.id,
    likes: 132,
    postedAgo: '1 hour ago',
    caption:
      'Tulsi by the door, the same plant I cook with. Bright light. Message me if you want a cutting.',
  },
  {
    id: 'plant-5',
    name: 'Peace Lily',
    description:
      'A beautiful indoor plant with green leaves and elegant flowers.',
    image:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&auto=format&fit=crop',
    category: 'Indoor Plants',
    price: 0,
    unit: 'cutting',
    lightLevel: 'Low',
    careLevel: 'Moderate',
    wateringFrequency: 'Keep soil lightly moist',
    suitableFor: 'Both',
    isOrganic: true,
    neighborId: neighbors.devaki.id,
    likes: 58,
    postedAgo: '8 hours ago',
    caption:
      'Peace lily in the front room. Keep the soil lightly moist. It does well on a quiet desk too.',
  },
  {
    id: 'plant-6',
    name: 'Mint Plant',
    description:
      'A fragrant herb that can be grown in containers, balconies, and kitchen gardens.',
    image:
      'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=800&auto=format&fit=crop',
    category: 'Herbs',
    price: 0,
    unit: 'cutting',
    lightLevel: 'Medium',
    careLevel: 'Easy',
    wateringFrequency: 'Regular watering',
    suitableFor: 'Home',
    isOrganic: true,
    neighborId: neighbors.meera.id,
    likes: 77,
    postedAgo: '3 hours ago',
    caption:
      'Mint for the salad I posted. Regular water, medium light. Come by if you want a sprig for your kitchen.',
  },
];
