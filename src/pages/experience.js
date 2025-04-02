import ExperienceCard from '../components/experience/ExperienceCard';
import { experiencesData } from '../data/experiencesData';
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import anime from "animejs";

const Experience = () => {
	const { t } = useTranslation()

	useEffect(() => {
		anime
		.timeline({ loop: false })
		.add({
			targets: ['.title', '.card'],
			translateY: ['1.3em', 0],
			translateZ: 0,
			opacity: [0, 1],
			duration: 1200,
			delay: (el, i) => 200 + 200 * i,
		})
	});

	return (
		<div className="container mx-auto">
			<div className="title mx-10 block md:flex md:gap-10 md:mt-20 mt-16">
				<div className="text-ternary-dark dark:text-ternary-light w-full">
					<div className="flex flex-col md:gap-2 lg:gap-20 lg:flex-row">
						<div className="flex flex-col gap-4 text-center sm:text-start">
							<p className="text-sm tracking-[4px] text-[#6A8D17] dark:text-[#C4EF00]">{t("experience.time")}</p>
							<h2 className="text-4xl font-bold">{t("experience.title")}</h2>
						</div>
						<ul className="font-general-regular">
						<div className="mt-14 w-full sm:border-l-[6px] sm:border-l-primary-light dark:border-l-ternary-dark border-opacity-30 flex flex-col gap-10">
								{experiencesData.map((experience) => (
									<ExperienceCard
										company={t(experience.company)}
										role={t(experience.role)}
										date={t(experience.date)}
										description={t(experience.description)}
									/>
								))}
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
