import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import maeiveLogo from '../assets/images/maeive-logo.png';
import MobileMenu from './MobileMenu';
import { navigationItems } from '../data/navigation';
import { ROUTES } from '../lib/constants';
import useScrollPosition from '../hooks/useScrollPosition';

const ease = [0.22, 1, 0.36, 1] as const;

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const { y } = useScrollPosition();
  const isScrolled = y > 12;

  const navigationLinks = navigationItems.map((item) => ({
    label: item.label,
    href: item.href,
    icon: item.icon,
  }));

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 px-3 pt-2 sm:px-5 lg:h-28 lg:px-6 lg:py-0 ${
        isMobileMenuOpen ? 'pb-3' : 'pb-2'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] lg:h-full lg:items-center">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: -12 }}
          animate={{
            opacity: 1,
            y: 0,
            boxShadow: isScrolled
              ? '0 16px 36px rgba(11,46,32,0.16)'
              : '0 10px 28px rgba(11,46,32,0.1)',
          }}
          transition={{ duration: reducedMotion ? 0 : 0.45, ease }}
          className="flex h-14 w-full items-center justify-between rounded-full border border-[#D4AF37]/80 bg-white/95 pl-3 pr-2 backdrop-blur-xl sm:pl-4 lg:h-[5.5rem] lg:pl-6 lg:pr-4"
        >
          <Link
            to={ROUTES.HOME}
            onClick={closeMenu}
            className="group flex min-w-0 items-center"
          >
            <img
              src={maeiveLogo}
              alt="Maeive. Grow, cook, enjoy, repeat."
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-11 lg:h-20"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
                end={item.href === ROUTES.HOME}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#4E6256] hover:bg-[#FFF8EE] hover:text-[#0B2E20]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <motion.span
                        layoutId="desktop-nav-pill"
                        initial={false}
                        transition={
                          reducedMotion
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 420, damping: 34 }
                        }
                        className="absolute inset-0 rounded-full bg-[#0B2E20]"
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to={ROUTES.COMMUNITY}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#0B2E20] transition-colors hover:bg-[#FFF8EE] hover:text-[#0F6B4F]"
            >
              Join
            </Link>
            <button
              type="button"
              onClick={() => navigate(ROUTES.RECIPES)}
              className="rounded-full bg-[#0F6B4F] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(15,107,79,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2E20]"
            >
              Get Started
            </button>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFF8EE] text-[#0B2E20] transition-colors hover:bg-[#0B2E20] hover:text-white lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={reducedMotion ? false : { opacity: 0, rotate: -80, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, rotate: 80, scale: 0.7 }}
                transition={{ duration: reducedMotion ? 0 : 0.18, ease }}
                className="flex"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen ? (
          <motion.div
            key="mobile-menu"
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.32, ease }}
            className="mx-auto w-full max-w-[1440px] overflow-hidden"
          >
            <div className="mt-2 overflow-hidden rounded-[1.35rem] border border-[#D4AF37]/80 bg-white shadow-[0_16px_40px_rgba(11,46,32,0.1)]">
              <MobileMenu links={navigationLinks} onLinkClick={closeMenu} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
