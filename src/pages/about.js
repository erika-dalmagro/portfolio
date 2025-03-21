import AboutMeBio from '../components/about/AboutMeBio';
import AboutLanguages from '../components/about/AboutLanguages';
import { AboutMeProvider } from '../context/AboutMeContext';

const About = () => {
	return (
		<AboutMeProvider>
			<div className="container mx-auto">
				<AboutMeBio />
			</div>

			<div className="shadow-md">
				<AboutLanguages />
			</div>
		</AboutMeProvider>
	);
};

export default About;
