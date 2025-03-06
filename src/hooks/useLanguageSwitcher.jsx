import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'

const useLanguageSwitcher = () => {
	const [language, setLanguage] = useState(null);
	const { i18n } = useTranslation();

	useEffect(() => {
		const storedLanguage = localStorage.getItem('language') || 'pt_BR';
		setLanguage(storedLanguage);
		
 		i18n.changeLanguage(storedLanguage)
	}, []);

	const toggleLanguage = () => {
		setLanguage(prevLanguage => {
			const newLanguage = prevLanguage === 'pt_BR' ? 'en_US' : 'pt_BR';
			localStorage.setItem('language', newLanguage);
			
			i18n.changeLanguage(newLanguage)
			return newLanguage;
		});
	};

	return [language, toggleLanguage];
};

export default useLanguageSwitcher;
