import {
  Home,
  ChefHat,
  Leaf,
  ShoppingBag,
  Users,
  Info,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: Home,
    description: 'Explore our platform',
  },
  {
    id: 'recipes',
    label: 'Recipes',
    href: '/recipes',
    icon: ChefHat,
    description: 'Discover cooking ideas',
  },
  {
    id: 'plants',
    label: 'Plants',
    href: '/plants',
    icon: Leaf,
    description: 'Explore organic plants',
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    href: '/marketplace',
    icon: ShoppingBag,
    description: 'Find homemade food',
  },
  {
    id: 'community',
    label: 'Community',
    href: '/community',
    icon: Users,
    description: 'Connect and share',
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    icon: Info,
    description: 'Learn about our mission',
  },
];
