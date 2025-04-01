import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
import AppFooterCopyright from './AppFooterCopyright';
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
		<section>
			<div className="footer z-10 container mx-auto">
				<div className="pb-4 mt-10 sm:mt-20">
					<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
						<p className="text-3xl sm:text-4xl text-ternary-dark dark:text-white mb-10">
							{t('footer.contactMe')}
						</p>
						<ul className="flex gap-4 sm:gap-8">
							{socialLinks.map((link) => (
								<a
									href={link.url}
									target="__blank"
									key={link.id}
									className="text-opacity-50 text-ternary-dark hover:opacity-10 dark:text-gray-200 cursor-pointer rounded-lg bg-primary-light dark:bg-ternary-dark hover:dark:bg-gray-100 shadow-sm p-4"
								>
									<i className="text-xl sm:text-2xl hover:opacity-10">
										{link.icon}
									</i>
								</a>
							))}
						</ul>
					</div>

					<AppFooterCopyright />
				</div>
			</div>
		</section>
	);
};

export default AppFooter;
