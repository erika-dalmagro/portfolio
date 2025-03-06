// Import images
import JavascriptImage from '../images/languages/javascript.svg';
import PHPImage from '../images/languages/php.svg';
import TypescriptImage from '../images/languages/typescript.svg';
import HTMLImage from '../images/languages/html.svg';
import CSSImage from '../images/languages/css3.svg';
import GitImage from '../images/languages/git.svg';
import VueImage from '../images/languages/vue.svg';
import ReactImage from '../images/languages/react.svg';
import LaravelImage from '../images/languages/laravel.svg';
import MySQLImage from '../images/languages/mysql.svg';
import PostgreSQLImage from '../images/languages/postgres.svg';

export const languagesHeading = 'about.languagesAndFrameworks';

export const languagesData = [
	{
		id: 1,
		title: 'Javascript',
		img: JavascriptImage.src,
	},
	{
		id: 2,
		title: 'PHP',
		img: PHPImage.src,
	},
	{
		id: 3,
		title: 'Typescript',
		img: TypescriptImage.src,
	},
	{
		id: 4,
		title: 'HTML',
		img: HTMLImage.src,
	},
	{
		id: 5,
		title: 'CSS',
		img: CSSImage.src,
	},
	{
		id: 6,
		title: 'Git',
		img: GitImage.src,
	},
	{
		id: 7,
		title: 'Vue',
		img: VueImage.src,
	},
	{
		id: 8,
		title: 'React',
		img: ReactImage.src,
	},
	{
		id: 8,
		title: 'Laravel',
		img: LaravelImage.src,
	},
	{
		id: 8,
		title: 'MySQL',
		img: MySQLImage.src,
	},
	{
		id: 8,
		title: 'PostgreSQL',
		img: PostgreSQLImage.src,
	},
];

export const languagesResponsiveOptions = [
	{
		breakpoint: '1400px',
		numVisible: 2,
		numScroll: 1
	},
	{
		breakpoint: '1199px',
		numVisible: 3,
		numScroll: 1
	},
	{
		breakpoint: '767px',
		numVisible: 2,
		numScroll: 1
	},
	{
		breakpoint: '575px',
		numVisible: 1,
		numScroll: 1
	}
];