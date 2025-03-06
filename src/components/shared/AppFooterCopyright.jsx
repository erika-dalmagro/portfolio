function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-md text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/erika-dalmagro"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline ml-1 duration-500"
				>
					Érika Dal Magro
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
