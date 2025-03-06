import AboutMeBio from '../components/about/AboutMeBio';
import AboutLanguages from '../components/about/AboutLanguages';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="shadow-md"
			>
				<AboutLanguages />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
