import { FiArrowDownCircle } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'

const AppBanner = () => {
	const { t, i18n } = useTranslation()

	return (
    <AnimatePresence>
      <div className="border-b-2 border-primary-light dark:border-secondary-dark container mx-auto py-8 sm:pt-16 sm:pb-20 transition duration-300">
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
          className="flex flex-col gap-10 sm:justify-between items-center sm:flex-row mt-14 md:mt-2"
        >
          <div className="w-full flex flex-col justify-center items-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.1,
              }}
              className="font-general-semibold text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
            >
              { t('home.title')} 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.2,
              }}
              className="font-general-medium mt-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left leading-normal text-[#6A8D17] dark:text-[#C4EF00]"
            >
              { t('home.subtitle')} 
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.2,
              }}
              className="font-general-medium mt-12 text-lg md:text-xl text-center leading-normal text-ternary-dark dark:text-primary-light w-2/3"
            >
              { t('home.text')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.3,
              }}
              className="flex gap-4"
            >
              <a
                download="erika.pdf"
                href={`/files/erika_${i18n.language}.pdf`}
                className="font-general-medium flex justify-center items-center w-48 mt-14 mb-8 sm:mb-0 text-lg border border-[#6A8D17] dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-white hover:bg-primary-light dark:hover:bg-white text-[#6A8D17] hover:text-ternary-dark duration-500"
                aria-label="Download Resume"
              >
                <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"/>
                <span className="sm:text-lg font-general-medium duration-100">
                  { t('home.downloadCV') }
                </span>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </AnimatePresence>
	);
};

export default AppBanner;
