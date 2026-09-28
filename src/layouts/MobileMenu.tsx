
import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface NavigationLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface MobileMenuProps {
  links: NavigationLink[];
  onLinkClick?: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.04 },
  },
};

const row = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease } },
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  links,
  onLinkClick,
}) => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="bg-white px-3 py-3 lg:hidden">
      <motion.nav
        className="mx-auto flex w-full max-w-[1440px] flex-col gap-1"
        initial={reducedMotion ? false : 'hidden'}
        animate="show"
        variants={reducedMotion ? undefined : list}
      >
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <motion.div key={link.href} variants={reducedMotion ? undefined : row}>
              <NavLink
                to={link.href}
                end={link.href === '/'}
                onClick={onLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#0B2E20] text-white'
                      : 'text-[#4E6256] hover:bg-[#FFF8EE] hover:text-[#0B2E20]'
                  }`
                }
              >
                {Icon ? <Icon size={16} className="shrink-0" /> : null}
                <span>{link.label}</span>
              </NavLink>
            </motion.div>
          );
        })}

        <motion.div variants={reducedMotion ? undefined : row}>
          <NavLink
            to="/recipes"
            onClick={onLinkClick}
            className="mt-2 block rounded-full bg-[#0F6B4F] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-[0_8px_18px_rgba(15,107,79,0.28)] transition-colors hover:bg-[#0B2E20]"
          >
            Get Started
          </NavLink>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default MobileMenu;