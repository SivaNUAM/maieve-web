export const APP_CONFIG = {
  name: 'Nourish',
  tagline: 'Cook. Grow. Share.',
  description:
    'Discover recipes, organic plants, homemade food, and local communities.',
  defaultRoute: '/',
} as const;

export const ROUTES = {
  HOME: '/',
  RECIPES: '/recipes',
  PLANTS: '/plants',
  MARKETPLACE: '/marketplace',
  COMMUNITY: '/community',
  ABOUT: '/about',
} as const;

export const COLORS = {
  emerald: '#0F6B4F',
  forest: '#0B2E20',
  champagne: '#D4AF37',
  jet: '#000000',
  antique: '#3E3A1D',
  charcoal: '#1C1C24',
  vanilla: '#FFF8EE',
  primary: '#0F6B4F',
  primaryLight: '#0B2E20',
  accent: '#D4AF37',
  accentHover: '#3E3A1D',
  background: '#FFF8EE',
  surface: '#FFF8EE',
  surfaceSoft: '#FFF8EE',
  border: '#D4AF37',
  textPrimary: '#0B2E20',
  textSecondary: '#3E3A1D',
  textMuted: '#1C1C24',
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1280,
} as const;

export const RECIPE_CATEGORIES = [
  'All',
  'Vegetarian',
  'Healthy',
  'Indian',
  'Breakfast',
  'Desserts',
] as const;

export const PLANT_CATEGORIES = [
  'All',
  'Indoor Plants',
  'Medicinal Plants',
  'Herbs',
  'Outdoor Plants',
] as const;

export const MARKETPLACE_CATEGORIES = [
  'All',
  'Meals',
  'Snacks',
  'Breakfast',
  'Homemade Products',
] as const;

export const COMMUNITY_CATEGORIES = [
  'Food Sharing',
  'Home Cook',
  'Plant Community',
] as const;
