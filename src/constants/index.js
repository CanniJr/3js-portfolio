import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	ctsh,
	starbucks,
	amazon,
	sog,
	flatiron,
	pickmealup,
	trackit,
	gameshack,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Front End Developer",
		icon: web,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	// {
	// 	name: "MongoDB",
	// 	icon: mongodb,
	// },
	// {
	// 	name: "Three JS",
	// 	icon: threejs,
	// },
	{
		name: "git",
		icon: git,
	},
	// {
	// 	name: "figma",
	// 	icon: figma,
	// },
	// {
	// 	name: "docker",
	// 	icon: docker,
	// },
];

const experiences = [
	{
		title: "Full Stack (Front End Focused) Developer",
		company_name: "Cognizant",
		icon: ctsh,
		iconBg: "#E6DEDD",
		date: "Mar 2022 - Jan 2023",
		points: [
			"Partnered with the client team at Apple as a Front-End Engineer in a collaborative environment with the product team focusing on data visualization.",
			"Participated in the technical design process with the Front-End development team and stakeholders to develop features on the customer-facing web applications that help teams manage and reorganize work priorities. This helped reduce the number of overdue tasks by up to 15% from the previous months.",
			"Taken part and contributed to code reviews to strengthen the knowledge of code owners and improve production quality.",
		],
	},
	{
		title: "Outbound Problem Solver",
		company_name: "Amazon",
		icon: amazon,
		iconBg: "#E6DEDD",
		date: "Nov 2017 - Oct 2020",
		points: [
			"Streamlined communication of operational priorities across departments, minimizing errors from automated workflows and resulting in a 10% boost in overall productivity. Promoted to a Problem-Solving position within 6 months.",
			"Analyzed data and performed in-depth investigations of customer order discrepancies in Excel spreadsheets. Developed effective solutions to meet business requirements, resulting in a reduction of missing and late shipments to 5% weekly.",
			"Conducted hands-on training for over 100 onboarding associates, emphasizing industry best practices. Recognized multiple times as Employee of the Month for exceptional training and mentorship skills.",
		],
	},
	{
		title: "Busser/Server",
		company_name: "Sushi of Gari",
		icon: sog,
		iconBg: "#E6DEDD",
		date: "Aug 2014 - June 2017",
		points: [
			"Helped maintain the flow of work and communication between the Back and Front of the Restaurant.",
			"Leveraged my knowledge in food and beverages to make recommendations to diners.",
			"Ensure the cleanliness of the dining area and kitchen throughout opening and closing.",
			"Served guests in a fast-paced environment and manage to communicate with diners in taking orders, remove/add silverware for an optimal experience.",
			"Trained 10+ servers and familiarize new staff with the restaurant culture.",
		],
	},

	{
		title: "Barista",
		company_name: "Starbucks",
		icon: starbucks,
		iconBg: "#383E56",
		date: "2012 - 2013",
		points: [],
	},
];

const projects = [
	{
		name: "Game Shack",
		description:
			"A user-friendly website for game exploration, offering search, sorting, and immersive browsing experience.",

		tags: [
			{
				name: "react/typescript,",
				color: "blue-text-gradient",
			},
			{
				name: "chakra-ui",
				color: "green-text-gradient",
			},
			{
				name: "react-router",
				color: "pink-text-gradient",
			},
		],
		image: gameshack,
		source_code: "https://github.com/CanniJr/game-shack",
	},
	{
		name: "Trackit-19",
		description:
			"React app to track coronavirus cases, recovery and deaths using Leaflet.js for map functionality.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "text-yellow-200",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: trackit,
		source_code: "https://github.com/CanniJr/Trackit-19",
	},
	{
		name: "PickMealUp",
		description:
			"This mobile app finds restaurants that serves take away orders in the local area.",
		tags: [
			{
				name: "react-native",
				color: "blue-text-gradient",
			},
			{
				name: "context",
				color: "green-text-gradient",
			},
			{
				name: "styled-components",
				color: "pink-text-gradient",
			},
		],
		image: pickmealup,
		source_code: "https://github.com/CanniJr/PickMealUp",
	},
];

export { services, technologies, experiences, projects };
