import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') || 'dark';
		setTheme(storedTheme);

		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(storedTheme);
	}, []);

	const toggleTheme = () => {
		setTheme(prevTheme => {
			const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
			localStorage.setItem('theme', newTheme);
			document.documentElement.classList.remove('light', 'dark');
			document.documentElement.classList.add(newTheme);

			return newTheme;
		});
	};

	return [theme, toggleTheme];
};

export default useThemeSwitcher;
