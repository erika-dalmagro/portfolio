import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
import AppFooterCopyright from './AppFooterCopyright';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'

const socialLinks = [
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/erika-dalmagro',
	},
	{
		id: 3,
		icon: <BsTwitterX />,
		url: 'https://x.com/papewpow',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/erika-dal-magro',
	},
	{
		id: 5,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/erikadalmagro/',
	},
];

const AppFooter = () => {
	const { t } = useTranslation()

	return (
		<AnimatePresence>
			<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			>
				<div className="container mx-auto">
					<div className="pb-4 mt-10 sm:mt-24">
						<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									ease: 'easeInOut',
									duration: 0.9,
									delay: 0.1,
								}}
								className="text-3xl sm:text-4xl text-ternary-dark dark:text-primary-light mb-10"
							>
								{ t('footer.contactMe') }
							</motion.p>
							<ul className="flex gap-4 sm:gap-8">
								{socialLinks.map((link) => (
									<a
										href={link.url}
										target="__blank"
										key={link.id}
										className="text-opacity-50 text-ternary-dark dark:text-gray-400 hover:text-[#6A8D17] cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 hover:dark:bg-gray-100 shadow-sm p-4 duration-300"
									>
										<i className="text-xl sm:text-2xl">
											{link.icon}
										</i>
									</a>
								))}
							</ul>
						</div>

						<AppFooterCopyright />
					</div>
				</div>
			</motion.section>
		</AnimatePresence>
	);
};

export default AppFooter;
