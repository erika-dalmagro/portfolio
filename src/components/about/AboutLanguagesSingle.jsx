//border dark:bg-primary-light bg-ternary-dark border-ternary-light shadow-sm dark:border-ternary-dark

const AboutLanguagesSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-14 sm:w-40 sm:h-40 flex items-center pt-8 sm:pt-0 py-5 sm:px-10 rounded-lg cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutLanguagesSingle;
