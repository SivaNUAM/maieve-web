import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../components/common/Loader";

const Layout = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <AnimatePresence mode="wait">
        {isInitialLoad && <Loader key="global-loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInitialLoad ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Layout;
