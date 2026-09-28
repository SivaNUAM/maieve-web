import type { CommunityStory } from '../components/community/CommunityStoryCard';
import type { FoodSharingItem } from '../components/community/FoodSharingCard';

export const communityStories: CommunityStory[] = [
  {
    id: 'story-1',
    name: 'Anjali Menon',
    role: 'Home Cook',
    location: 'Kochi',
    story:
      'Sharing homemade meals helped me connect with people in my neighborhood and reduce food waste.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    contribution: 'Shared homemade meals',
  },
  {
    id: 'story-2',
    name: 'Rahul Thomas',
    role: 'Plant Enthusiast',
    location: 'Ernakulam',
    story:
      'Growing plants at home has helped my family explore a healthier and more sustainable lifestyle.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    contribution: 'Grew organic plants',
  },
  {
    id: 'story-3',
    name: 'Meera Joseph',
    role: 'Community Volunteer',
    location: 'Kakkanad',
    story:
      'Food sharing creates meaningful connections and helps neighbors support one another.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
    contribution: 'Organized local food sharing',
  },
];

export const foodSharingItems: FoodSharingItem[] = [
  {
    id: 'sharing-1',
    title: 'Homemade Vegetable Meals',
    description:
      'Fresh homemade vegetarian meals prepared with locally sourced ingredients.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop',
    contributorName: 'Anjali',
    location: 'Nearby Community',
    availableTime: 'Today, 6:00 PM',
    servings: 5,
    category: 'Free Sharing',
  },
  {
    id: 'sharing-2',
    title: 'Fresh Homemade Snacks',
    description:
      'Traditional homemade snacks prepared for sharing with nearby families.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop',
    contributorName: 'Meera',
    location: 'Local Neighborhood',
    availableTime: 'Today, 4:00 PM',
    servings: 8,
    category: 'Extra Food',
  },
  {
    id: 'sharing-3',
    title: 'Community Breakfast',
    description:
      'A simple homemade breakfast shared with neighbors in the local community.',
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop',
    contributorName: 'Rahul',
    location: 'Community Center',
    availableTime: 'Tomorrow, 9:00 AM',
    servings: 10,
    category: 'Community Meal',
  },
];

export interface CommunityMapLocation {
  id: string;
  name: string;
  category: 'Food Sharing' | 'Home Cook' | 'Plant Community';
  position: {
    top: string;
    left: string;
  };
}

export const communityMapLocations: CommunityMapLocation[] = [
  {
    id: 'map-1',
    name: 'Home Food Sharing',
    category: 'Food Sharing',
    position: {
      top: '28%',
      left: '23%',
    },
  },
  {
    id: 'map-2',
    name: 'Local Home Cook',
    category: 'Home Cook',
    position: {
      top: '45%',
      left: '63%',
    },
  },
  {
    id: 'map-3',
    name: 'Organic Plant Group',
    category: 'Plant Community',
    position: {
      top: '67%',
      left: '36%',
    },
  },
];
