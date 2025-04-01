import AboutMeBio from '../components/about/AboutMeBio';
import AboutLanguages from '../components/about/AboutLanguages';
import { AboutMeProvider } from '../context/AboutMeContext';
import { useEffect } from "react";
import anime from "animejs";

const About = () => {
	useEffect(() => {
		anime
		.timeline({ loop: false })
		.add({
			targets: ['.bio', '.languages'],
			translateY: ['1.3em', 0],
			translateZ: 0,
			opacity: [0, 1],
			duration: 1000,
			delay: (el, i) => 200 + 200 * i,
		})
	});

	return (
		<AboutMeProvider>
			<div className="bio container mx-auto">
				<AboutMeBio />
			</div>

			<div className="languages shadow-md">
				<AboutLanguages />
			</div>
		</AboutMeProvider>
	);
};

export default About;
