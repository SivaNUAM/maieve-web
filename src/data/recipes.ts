import type { Recipe } from '../components/recipe/RecipeCard';
import { neighbors } from './neighbors';

export const recipes: Recipe[] = [
  {
    id: 'recipe-1',
    title: 'Creamy Vegetable Pasta',
    description:
      'A delicious and easy pasta recipe prepared with fresh vegetables and a creamy sauce.',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop',
    category: 'Vegetarian',
    difficulty: 'Easy',
    preparationTime: 10,
    cookingTime: 20,
    servings: 4,
    ingredientsCount: 8,
    isVegetarian: true,
    neighborId: neighbors.priya.id,
    likes: 128,
    postedAgo: '2 hours ago',
    caption:
      'Posted the pasta I make on Sundays. Ingredients, quantities, and a video for every step are in the guide.',
  },
  {
    id: 'recipe-2',
    title: 'Fresh Vegetable Salad',
    description:
      'A healthy and colorful salad made with fresh vegetables and a simple homemade dressing.',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
    category: 'Healthy',
    difficulty: 'Easy',
    preparationTime: 15,
    cookingTime: 0,
    servings: 2,
    ingredientsCount: 6,
    isVegetarian: true,
    neighborId: neighbors.meera.id,
    likes: 86,
    postedAgo: '5 hours ago',
    caption:
      'No stove. Just what was on the balcony. Follow along if you want the same plate tonight.',
  },
  {
    id: 'recipe-3',
    title: 'Homemade Vegetable Curry',
    description:
      'A flavorful homemade curry using seasonal vegetables and aromatic spices.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop',
    category: 'Indian',
    difficulty: 'Medium',
    preparationTime: 15,
    cookingTime: 25,
    servings: 4,
    ingredientsCount: 10,
    isVegetarian: true,
    neighborId: neighbors.anjali.id,
    likes: 214,
    postedAgo: '1 hour ago',
    caption:
      'The curry from today’s extra plates. Same pot, same house. Cook it with me or come pick one up.',
  },
  {
    id: 'recipe-4',
    title: 'Healthy Breakfast Bowl',
    description:
      'A nutritious breakfast bowl prepared with fruits, grains, and healthy toppings.',
    image:
      'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&auto=format&fit=crop',
    category: 'Breakfast',
    difficulty: 'Easy',
    preparationTime: 10,
    cookingTime: 0,
    servings: 2,
    ingredientsCount: 5,
    isVegetarian: true,
    neighborId: neighbors.rahul.id,
    likes: 73,
    postedAgo: 'Yesterday',
    caption:
      'Morning bowl from the window garden. Easy level, short videos, nothing fancy.',
  },
  {
    id: 'recipe-5',
    title: 'Homemade Vegetable Soup',
    description:
      'A warm and comforting soup made with fresh vegetables and herbs.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop',
    category: 'Healthy',
    difficulty: 'Easy',
    preparationTime: 10,
    cookingTime: 25,
    servings: 4,
    ingredientsCount: 7,
    isVegetarian: true,
    neighborId: neighbors.leela.id,
    likes: 91,
    postedAgo: '3 hours ago',
    caption:
      'Soup for a quiet evening. The guide lists what to buy and how much.',
  },
  {
    id: 'recipe-6',
    title: 'Traditional Rice Meal',
    description:
      'A comforting homemade rice meal served with flavorful vegetables and side dishes.',
    image:
      'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&auto=format&fit=crop',
    category: 'Indian',
    difficulty: 'Medium',
    preparationTime: 15,
    cookingTime: 30,
    servings: 4,
    ingredientsCount: 9,
    isVegetarian: true,
    neighborId: neighbors.devaki.id,
    likes: 156,
    postedAgo: '4 hours ago',
    caption:
      'Rice meal the way Amma plates it. Medium level. A clip for each step.',
  },
];
