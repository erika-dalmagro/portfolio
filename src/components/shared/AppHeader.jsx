import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { PiTranslate} from 'react-icons/pi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import useLanguageSwitcher from '../../hooks/useLanguageSwitcher';
import logoLight from '../../images/logo-light.svg';
import logoDark from '../../images/logo-dark.svg';
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();
	const [activeLanguage, setLanguage] = useLanguageSwitcher();
	const { t } = useTranslation()

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	return (
		<nav id="nav" className="sm:container sm:mx-auto">
			<div className="header z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link href="/">
							{activeTheme === 'dark' ? (
								<img
									src={logoDark.src}
									className="w-36"
									alt="Light Logo"
								/>
							) : (
								<img
									src={logoLight.src}
									className="w-36"
									alt="Dark Logo"
								/>
							)}
						</Link>
					</div>

					{/* Theme and language switcher small screen */}
					<div className="flex gap-4 ml-6">
						<div
							onClick={() => setLanguage(activeLanguage)}
							aria-label="Language Switcher"
							className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
						>
							{activeTheme === 'light' ? (
								<PiTranslate className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
							) : (
								<PiTranslate className="text-gray-200 hover:text-gray-50 text-xl" />
							)}
						</div>
					
						<div
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
						>
							{activeTheme === 'light' ? (
								<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
							) : (
								<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
							)}
						</div>
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						href="/about"
						className="block text-left text-lg text-ternary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label={ t('header.aboutMe') }
					>
						{ t('header.aboutMe') }
					</Link>
					{/*					
					<Link
						href="/contact"
						className="block text-left text-lg text-ternary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						{ t('header.contact') }
					</Link>
					*/}
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex flex-row justify-between items-center md:flex-row">

					{/* Header links large screen */}
					<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
						<Link
							href="/about"
							className="block text-left text-lg text-ternary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
							aria-label={ t('header.aboutMe') }
						>
							{ t('header.aboutMe') }
						</Link>
						{/*
						<Link
							href="/contact"
							className="block text-left text-lg text-ternary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
							aria-label="Contact"
						>
							{ t('header.contact') }
						</Link>
						*/}
					</div>

					{/* Theme and language switcher large screen */}
					<div
						onClick={() => setLanguage(activeLanguage)}
						aria-label="Language Switcher"
						className="mx-4 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'light' ? (
							<PiTranslate className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<PiTranslate className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
					
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="mx-4 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'light' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default AppHeader;
