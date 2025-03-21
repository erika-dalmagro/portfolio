
import { motion, AnimatePresence } from 'framer-motion';
import AppHeader from '../components/shared/AppHeader';
import AppFooter from '../components/shared/AppFooter';
import UseScrollToTop from '../hooks/useScrollToTop';
import { GlowCapture, Glow } from '@codaworks/react-glow';

import '../i18n/index'
import '../css/App.css';
import '../css/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <GlowCapture>
      <AnimatePresence>
        <Glow>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.2 }}
          >
            <div className="glow:bg-[#eefadc] dark:glow:bg-[#214a47] bg-secondary-light dark:bg-primary-dark transition duration-300">
              <div className="relative z-10">
                <AppHeader />
                <Component {...pageProps} />
                <AppFooter />
                <UseScrollToTop />
              </div>
            </div>
          </motion.div>
        </Glow>
      </AnimatePresence>
    </GlowCapture>
  );
}

export default MyApp;
