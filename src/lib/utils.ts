export type ClassValue =
  | string
  | false
  | null
  | undefined
  | 0;

export const cn = (...classes: ClassValue[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const formatCurrency = (
  amount: number,
  currency = 'INR',
  locale = 'en-IN',
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const truncateText = (
  text: string,
  maxLength: number,
): string => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
};

export const slugify = (value: string): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  if (!isBrowser()) {
    return;
  }

  window.scrollTo({
    top: 0,
    behavior,
  });
};

export const getInitials = (name: string): string => {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
};
