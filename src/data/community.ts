import type { CommunityStory } from '../components/community/CommunityStoryCard';
import type { FoodSharingItem } from '../components/community/FoodSharingCard';

export const communityStories: CommunityStory[] = [
  {
    id: 'story-1',
    name: 'Anjali Menon',
    role: 'Home Cook',
    location: 'Kochi',
    story:
      'What our family could not finish became a reason for someone nearby to knock. They came for a plate, and stayed long enough to feel like home.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    contribution: 'Keeps a place at her table',
  },
  {
    id: 'story-2',
    name: 'Rahul Thomas',
    role: 'Plant Enthusiast',
    location: 'Ernakulam',
    story:
      'A cutting from our balcony crossed the wall and started a friendship. The garden taught us how to eat, and then how to welcome the people next door.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    contribution: 'Shares cuttings from home',
  },
  {
    id: 'story-3',
    name: 'Meera Joseph',
    role: 'Community Volunteer',
    location: 'Kakkanad',
    story:
      'A shared meal does what a message cannot. People who arrived as strangers sit down together, and leave knowing they have someone nearby.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
    contribution: 'Brings neighbours to one table',
  },
];

export const foodSharingItems: FoodSharingItem[] = [
  {
    id: 'sharing-1',
    title: 'A vegetable meal, made with care',
    description:
      'Anjali cooked more than her family needed. These vegetarian plates were made at home, and a place has been kept for anyone who can walk over this evening.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop',
    contributorName: 'Anjali',
    location: 'A short walk from home',
    availableTime: 'Today, 6:00 PM',
    servings: 5,
    category: 'Free Sharing',
  },
  {
    id: 'sharing-2',
    title: 'Snacks for the families nearby',
    description:
      'Meera prepared a batch of traditional snacks for the homes around her. There is enough to share, and the only thing asked in return is your company.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop',
    contributorName: 'Meera',
    location: 'In the neighbourhood',
    availableTime: 'Today, 4:00 PM',
    servings: 8,
    category: 'Extra Food',
  },
  {
    id: 'sharing-3',
    title: 'Breakfast for the neighbourhood',
    description:
      'Rahul is setting a simple breakfast so the morning can begin together. Come tomorrow, take a seat, and start the day among people who live close by.',
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop',
    contributorName: 'Rahul',
    location: 'The neighbourhood table',
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
