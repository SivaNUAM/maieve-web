import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import Container from '../components/ui/Container';

const NotFoundPage: React.FC = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#FFF8EE] py-16">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="text-8xl font-bold text-[#D4AF37]">
            404
          </p>

          <h1 className="mt-6 text-3xl font-bold text-[#0B2E20]">
            Page Not Found
          </h1>

          <p className="mt-4 leading-7 text-[#3E3A1D]">
            The page you are looking for does not exist or may have been
            moved to another location.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B2E20] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0B2E20]"
            >
              <Home size={17} />
              Go Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-full border border-[#0B2E20] px-6 py-3 text-sm font-semibold text-[#0B2E20] transition-colors hover:bg-[#0B2E20] hover:text-white"
            >
              <ArrowLeft size={17} />
              Go Back
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default NotFoundPage;
