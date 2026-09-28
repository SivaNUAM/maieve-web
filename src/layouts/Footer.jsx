import React from 'react';
import { ArrowUpRight, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

import maeiveLogo from '../assets/images/maeive-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Cook',
      links: [
        { label: 'Recipe AI', href: '/recipes' },
        { label: 'Ingredients & videos', href: '/recipes' },
        { label: 'Organic plants', href: '/plants' },
        { label: 'Seeds for home', href: '/plants' },
      ],
    },
    {
      title: 'Share',
      links: [
        { label: 'Sell homemade food', href: '/marketplace' },
        { label: 'Pickup nearby', href: '/marketplace' },
        { label: 'Free food sharing', href: '/community' },
        { label: 'FSSAI guidance', href: '/about' },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'About Nourish', href: '/about' },
        { label: 'Community', href: '/community' },
        { label: 'Privacy', href: '#privacy' },
        { label: 'Terms', href: '#terms' },
      ],
    },
  ];

  return (
    <footer className="bg-[#0B2E20] text-white">
      <div className="h-1 bg-[#0F6B4F]" />

      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-5 sm:py-14 lg:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex rounded-2xl bg-[#FFF8EE] px-3 py-2">
              <img
                src={maeiveLogo}
                alt="Maeive. Grow, cook, enjoy, repeat."
                className="h-16 w-auto object-contain sm:h-20"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#FFF8EE]!">
              Recipe AI, organic plants, and homemade food from families
              nearby. Pickup stays close. Sharing stays free.
            </p>

            <div className="mt-6 flex gap-2">
              {[
                { icon: Instagram, label: 'Instagram', href: '#instagram' },
                { icon: Facebook, label: 'Facebook', href: '#facebook' },
                { icon: Youtube, label: 'YouTube', href: '#youtube' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#FFF8EE] hover:text-[#0B2E20]"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-sans text-xs! font-semibold! uppercase leading-4! tracking-[0.14em]! text-[#D4AF37]! sm:tracking-[0.2em]!">
                {column.title}
              </h2>
              <ul className="mt-3 space-y-2.5 sm:mt-5 sm:space-y-3">
                {column.links.map((link) => {
                  const className =
                    'group inline-flex items-center gap-1 text-sm text-[#FFF8EE] transition-colors duration-200 hover:text-white';
                  const icon = (
                    <ArrowUpRight
                      size={13}
                      className="translate-y-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  );

                  return (
                    <li key={`${column.title}-${link.label}`}>
                      {link.href.startsWith('/') ? (
                        <Link to={link.href} className={className}>
                          {link.label}
                          {icon}
                        </Link>
                      ) : (
                        <a href={link.href} className={className}>
                          {link.label}
                          {icon}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-[#D4AF37] sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-6 sm:text-sm">
          <p className="text-[#D4AF37]!">
            © {currentYear} Nourish. All rights reserved.
          </p>
          <p className="text-[#D4AF37]!">
            Homemade food, within walking distance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
