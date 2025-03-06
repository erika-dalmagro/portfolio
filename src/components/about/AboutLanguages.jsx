import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutLanguagesSingle from './AboutLanguagesSingle';
import { Carousel } from 'primereact/carousel';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next'

const AboutLanguages = () => {
	const { languagesData, languagesHeading, languagesResponsiveOptions } = useContext(AboutMeContext);
	const { t } = useTranslation()

	const productTemplate = (language) => {
        return (
			<AboutLanguagesSingle
				title={language.title}
				image={language.img}
				key={language.id}
			/>
        );
    };
	
	return (
		<div className="bg-primary-light dark:bg-ternary-dark mt-10 sm:mt-28 relative z-10">
			<div className="container mx-auto py-10">
				<p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-4">
					{ t(languagesHeading) }
				</p>
				<div className="mx-24 gap-2">
					<Carousel 
						pt={{
							previousbuttonicon: {
								className: classNames('sm:w-12 sm:h-12 text-primary-dark dark:text-primary-light')
							},
							nextbuttonicon: {
								className: classNames('sm:w-12 sm:h-12 text-primary-dark dark:text-primary-light')
							},
							
						}}
					responsiveOptions={languagesResponsiveOptions} value={languagesData} numVisible={4} numScroll={1} itemTemplate={productTemplate} circular />
				</div>
			</div>
		</div>
	);
};

export default AboutLanguages;
