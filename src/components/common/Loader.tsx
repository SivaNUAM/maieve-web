import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import maeiveLogo from '../../assets/images/maeive-logo.png';

const ease = [0.22, 1, 0.36, 1] as const;
const ringLength = 2 * Math.PI * 46;
const beats = ['Grow', 'Cook', 'Enjoy', 'Repeat'] as const;

type LoaderProps = {
  onDone?: () => void;
};

const Loader: React.FC<LoaderProps> = ({ onDone }) => {
  const reducedMotion = useReducedMotion();
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const hold = reducedMotion ? 700 : 2300;
    const timer = window.setTimeout(() => onDoneRef.current?.(), hold);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
    };
  }, [reducedMotion]);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Maeive is opening"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0B2E20]"
      initial={{ clipPath: 'circle(150% at 50% 44%)' }}
      animate={{ clipPath: 'circle(150% at 50% 44%)' }}
      exit={
        reducedMotion
          ? { opacity: 0, transition: { duration: 0.2 } }
          : {
              clipPath: 'circle(0% at 50% 44%)',
              transition: { duration: 0.72, ease },
            }
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 42%, rgba(212,175,55,0.16) 0%, rgba(11,46,32,0) 46%)',
        }}
      />

      <div className="relative flex flex-col items-center px-5">
        <div className="relative h-44 w-44 sm:h-[340px] sm:w-[340px]">
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFF8EE] shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
            initial={reducedMotion ? false : { scale: 0.72, opacity: 0 }}
            animate={{ scale: [0.72, 1, 1, 1.03, 1], opacity: 1 }}
            transition={
              reducedMotion
                ? { duration: 0.2 }
                : { duration: 2.05, times: [0, 0.28, 0.72, 0.86, 1], ease }
            }
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full -rotate-90"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="rgba(212,175,55,0.28)"
              strokeWidth="0.7"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.15"
              strokeLinecap="round"
              strokeDasharray={ringLength}
              initial={{ strokeDashoffset: reducedMotion ? 0 : ringLength }}
              animate={{ strokeDashoffset: 0 }}
              transition={
                reducedMotion
                  ? { duration: 0.2 }
                  : { duration: 1.7, delay: 0.28, ease }
              }
            />
          </svg>

          {!reducedMotion && (
            <motion.div
              aria-hidden="true"
              className="absolute inset-0"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.7, delay: 0.28, ease }}
            >
              <span className="absolute left-1/2 top-[4%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.9)]" />
            </motion.div>
          )}

          <motion.div
            className="absolute left-1/2 top-1/2 z-10 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reducedMotion ? 0.2 : 0.7, ease }}
          >
            <img src={maeiveLogo} alt="" className="h-full w-full object-contain" />
          </motion.div>
        </div>

        <div className="mt-5 flex items-center gap-1.5 sm:mt-7 sm:gap-3">
          {beats.map((word, index) => (
            <React.Fragment key={word}>
              {index > 0 && (
                <span aria-hidden="true" className="text-[10px] text-[#D4AF37]">
                  ·
                </span>
              )}
              <motion.span
                className="font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-[#FFF8EE] sm:text-xs sm:tracking-[0.22em]"
                initial={{ opacity: reducedMotion ? 1 : 0.28 }}
                animate={
                  reducedMotion
                    ? { opacity: 1 }
                    : { opacity: [0.28, 1, 0.55] }
                }
                transition={{
                  duration: 0.7,
                  delay: 0.4 + index * 0.32,
                  ease,
                }}
              >
                {word}
              </motion.span>
            </React.Fragment>
          ))}
        </div>

        <motion.p
          className="mt-3 font-serif text-sm italic text-[#FFF8EE]/80 sm:mt-4 sm:text-lg"
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.2 : 0.6, delay: reducedMotion ? 0 : 0.55, ease }}
        >
          A neighbourhood, opening
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
