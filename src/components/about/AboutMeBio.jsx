import profileImage from '../../images/developer.jpg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import { useTranslation } from 'react-i18next'

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);
	const { t } = useTranslation()

	return (
		<div className="mx-10 block md:flex md:gap-10 md:mt-20 mt-16">
			<div className="flex justify-center items-center w-full md:w-2/6 mb-7 md:mb-0">
				<img src={profileImage.src} className="max-w-64 md:max-w-3xs rounded-lg mb-2" alt="" />
			</div>

			<div className="flex justify-center items-center font-general-regular w-full md:w-4/6 text-left">
				<div>
					{aboutMe.map((bio) => (
					<p
						className="mb-4 text-justify text-ternary-dark dark:text-ternary-light md:text-xl text-lg"
						key={bio.id}
					>
						{t(bio.description)}
					</p>
				))}
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;
