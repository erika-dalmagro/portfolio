import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { languagesHeading as languagesPageHeading } from '../data/languagesData';
import { languagesData as languagesDataJson } from '../data/languagesData';
import { languagesResponsiveOptions as responsiveOptions } from '../data/languagesData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const languagesHeading = languagesPageHeading;

	const languagesResponsiveOptions = responsiveOptions;

	const [languagesData, setLanguagesData] = useState(languagesDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				languagesHeading,
				languagesData,
				setLanguagesData,
				languagesResponsiveOptions,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
