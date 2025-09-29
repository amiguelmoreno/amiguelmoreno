export const projectsInfo = [
	{
		id: 1,
		title: 'Magic Home',
		topProjects: false,
		description:
			'The main goal of this project is to use almost everything I have learnt about HTML5, CSS3 and Sass. Achiving a proffesional looking website and a clean design.',
		technologies: ['html', 'css', 'sass', 'javascript'],
		skills: [
			'Best Practices: BEM method to name classes in CSS and HTML, Keep It Organized ,Make It Understandable',
			'Sass as a CSS pre-processor, that offers: Efficient syntax, Readable styles files, Reusable components (@mixins and @extends)',
			'CSS3 features: Flexbox, Grid, Animations, Variables, Pseudo-elements, Pseudo-classes, Media Queries',
			'JavaScript most used methods: querySelector(), querySelectorAll(), toggle(), forEach(), addEventListener(), insertAdjacentHTML(), contains()'
		],
		improvements: [
			'Compress the size of the images reducing them to the maximum size used on the page.',
			'Use different size images for each media query to improve performance.'
		],
		interest: [
			'PRO Navigation Bar, that converts itself into a floating menu on smaller devices.',
			'Testimonials Slider.',
			'Modal Window Form.'
		],
		shortDescription: 'Full Responsive Landing Page build with HTML, CSS using SASS and JS.',
		videoLink: 'https://youtu.be/jgZomdOy87U',
		repoLink: 'https://github.com/amiguelmoreno/MagicHome',
		deployLink: 'https://magichome.netlify.app/',
		cover: `${import.meta.env.BASE_URL}projects/webdev/magic-home-cover.png`
	},
	{
		id: 2,
		title: 'Social Vibe',
		topProjects: false,
		description:
			'The main goal of this project was to give visibility to all the services that I offered as a Community Manager, explaining them, answering common questions and give contact information with a form.',
		technologies: ['react', 'sass'],
		skills: [],
		improvements: [],
		interest: [],
		shortDescription: 'Web used to show my services as a Community Manager.',
		videoLink: 'https://youtu.be/Cm_410B9swk',
		repoLink: 'https://github.com/amiguelmoreno/SocialVibe',
		deployLink: 'https://socialvibeagency.netlify.app/',
		cover: `${import.meta.env.BASE_URL}projects/webdev/social-vibe-cover.png`
	},
	{
		id: 3,
		title: 'My Money',
		disable: true,
		topProjects: true,
		description:
			'The main goal of this project is to use almost everything I have learnt about React, using a lot of main functionalities of React, Supabase and more.',
		technologies: ['react', 'styled-components', 'react-query'],
		skills: [
			'React-router-dom',
			'React-Query',
			'Organized and clean code',
			'Reusable components (Modal, Buttons, Inputs...)',
			'Hooks',
			'React-hook-form',
			'ContextApi',
			'Framer-motion'
		],
		improvements: [
			'Notifications when a certain limit of expenses or incomes is reached.',
			"Login (I didn't do it to let people see the project without login).",
			'Functionality to download a PDF with the main info you want.',
			'Compress the size of the images reducing them to the maximum size used on the page.',
			'Use different size images for each media query to improve performance'
		],
		interest: [
			'Dashboard with visual graphics.',
			'List of transactions with a PRO Filter.',
			'Dark Mode.'
		],
		shortDescription: 'App to track your incomes and expenses easily',
		videoLink: 'https://youtu.be/Ta4egIYtJAE',
		repoLink: 'https://github.com/amiguelmoreno/MyMoney',
		deployLink: 'https://mymoneyio.netlify.app/',
		cover: `${import.meta.env.BASE_URL}projects/webdev/mymoney-cover.png`
	},
	{
		id: 4,
		title: 'Routine App',
		topProjects: false,
		description:
			'The main goal of this project was to do something I used on my daily basis and that is useful. This project have and habits page that allows you to create and manage all the tasks you have and a timer to track how productive you are while doing the tasks.',
		technologies: ['react', 'tailwind'],
		skills: [
			'Learn how to work with reusable components in React.',
			'Use contexts to manage states and data inside the app.',
			'Learn how to work with tricky functions like setTimeout to make the Timer working.'
		],
		improvements: [
			'Calendar page where all the habits are displayed.',
			'Login with some auth and account.',
			'Save the data in a database and not in localStorage.'
		],
		interest: [
			'PRO Timer, to keep track of the time while you work on the computer',
			'Habits page, where you can manage your own habits.'
		],
		shortDescription: 'App to check your habits and timer to focus on your activities',
		videoLink: 'https://youtu.be/YUBnJ0pE0_4',
		repoLink: 'https://github.com/amiguelmoreno/RoutineApp',
		deployLink: 'https://routinetimer.netlify.app/',
		cover: `${import.meta.env.BASE_URL}projects/webdev/routine-app-cover.png`
	},
	{
		id: 5,
		title: 'Forkify',
		topProjects: false,
		description:
			'The main goal of this project was to learn the basics of JavaScript, async data, Classes and all applied with the MVC pattern design. I did this project in the course of Jonas Schmedtmann.',
		technologies: ['javascript', 'css'],
		skills: [
			'How to work with async data.',
			'How an app with a MVC code pattern design works.',
			'Get better working with objects, logic, and general data flow in an app.',
			'How to do pagination and load the data partially from an API.'
		],
		improvements: [],
		interest: [],
		shortDescription: 'Vanilla JS app to search and create recipes.',
		videoLink: 'https://youtu.be/0vpL_0dXn24',
		repoLink: 'https://github.com/amiguelmoreno/forkify',
		deployLink: 'https://my-forkify-js.netlify.app/',
		cover: `${import.meta.env.BASE_URL}projects/webdev/forkify-cover.png`
	},
	{
		id: 6,
		title: 'NoteFlow',
		topProjects: false,
		description:
			'The main goal of this project was to learn the fundamentals of NextJS, folders routing system, reusable components, databases, api endpoints and more. I did this project in the course of Code with Antonio.',
		technologies: ['nextjs', 'prisma', 'typescript', 'tailwind', 'react', 'clerk'],
		skills: [
			'How to make an App with NextJS.',
			'How folder routing system works.',
			'How to create, connect and update a database using Prisma.',
			'Implement OAuth 2.0 with Clerk, allowing to sign in with GitHub, Google, etc.',
			'How to do a robust project code structure.',
			'Create dynamic routes with NextJS.',
			'Use Edgestore to upload files.',
			'Use Blocknote to create a text editor like Notion.',
			'How to create nested dynamic and editable pages in a sidebar.',
			'How to manage recovering deleted notes and filtering data.'
		],
		improvements: ['Faster charge between pages using a faster service.'],
		interest: [
			'Text Editor to add images, notes, and more.',
			'Sidebar with all notes pages organized and nested.'
		],
		shortDescription: 'Notes management App with NextJS.',
		videoLink: 'https://youtu.be/p60u36ITcdQ',
		repoLink: 'https://github.com/amiguelmoreno/NoteFlow',
		deployLink: 'https://note-flow-weld.vercel.app/',
		cover: `${import.meta.env.BASE_URL}projects/webdev/noteflow-cover.png`
	},
	{
		id: 7,
		title: 'Coursify',
		disable: true,
		topProjects: true,
		description:
			'The main goal of this project was to learn the fundamentals of NextJS, folders routing system, reusable components, databases, api endpoints, video storage and more. I did this project in the course of Code with Antonio.',
		technologies: ['nextjs', 'prisma', 'typescript', 'tailwind', 'react', 'clerk'],
		skills: [
			'How to make an App with NextJS.',
			'How folder routing system works.',
			'How to create, connect and update a database using Prisma.',
			'Implement OAuth 2.0 with Clerk, allowing to sign in with GitHub, Google, etc.',
			'How to do a robust project code structure.',
			'Create dynamic routes with NextJS.',
			'Use Mux as a video player.'
		],
		improvements: ['Faster charge between pages using a faster service.'],
		interest: [
			'Courses catalog page.',
			'Teacher MODE that allows you to create your own courses and watch statistics.',
			'Buy Courses with Stripe.',
			'Track progress of every course you have bought.'
		],
		shortDescription: 'Course Plattform Full Stack Application made with NextJS.',
		videoLink: 'https://youtu.be/9Ck_rVY7v7Y',
		repoLink: 'https://github.com/amiguelmoreno/Coursify',
		deployLink: 'https://coursify-kappa.vercel.app/',
		cover: `${import.meta.env.BASE_URL}projects/webdev/coursify-cover.png`
	},
	{
		id: 8,
		title: 'Discord Clone',
		disable: true,
		topProjects: true,
		description:
			'The main goal of this project was to learn the fundamentals of NextJS, folders routing system, reusable components, databases, api endpoints, SocketIO and more. I did this project in the course of Code with Antonio.',
		technologies: ['nextjs', 'prisma', 'typescript', 'socketio', 'react', 'tailwind'],
		skills: [
			'How to make an App with NextJS',
			'How folder routing system works',
			'How to create, connect and update a database using Prisma.',
			'Implement OAuth 2.0 with Clerk, allowing to sign in with GitHub, Google, etc.',
			'How to do a robust project code structure.',
			'Create dynamic routes with NextJS.',
			'Use Uploadthing to let users update their pics and upload images.',
			'Create a Real Time chat with Socket.IO.',
			'Implement Video and Audio streaming with Livekit.'
		],
		improvements: ['Faster charge between pages using a faster service'],
		interest: [
			'Text, Audio, and Video channels like in the real Discord app.',
			'Create and manage your own servers and channels.',
			'Private chat with your friend.'
		],
		shortDescription: 'Discord clone app made with NextJS',
		videoLink: 'https://youtu.be/xpojl-oRjLo',
		repoLink: 'https://github.com/amiguelmoreno/Discord',
		deployLink: 'https://discord-production-a577.up.railway.app/',
		cover: `${import.meta.env.BASE_URL}projects/webdev/discord-cover.png`
	},
	{
		id: 9,
		title: 'MyComponentsUI',
		topProjects: true,
		description:
			'This is a React components library which offers a wide variety of fully accessible components and a very minimalist design that allows you to customize every component.',
		technologies: ['react', 'tailwind', 'storybook', 'shadcnui', 'typescript'],
		skills: [
			'How to use Storybook to show and test isolated components.',
			'How to public an npm package.',
			'How to make reusable components.'
		],
		improvements: [],
		interest: [],
		shortDescription: 'React components library.',
		videoLink: 'https://youtu.be/r3J-OmB1Ozs',
		repoLink: 'https://github.com/amiguelmoreno/MyComponentsUI',
		deployLink: 'https://mycomponentsui.netlify.app/',
		cover: `${import.meta.env.BASE_URL}projects/webdev/mycomponentsui-cover.png`
	},
	{
		id: 10,
		title: 'Hakuna Matata',
		topProjects: false,
		description:
			'This a page a client whit a dog groomer shop in Malga requested. The requested sections where: Services for pets, Products, Clients Reviews form google, location display with google and a whatsapp button to book a date.',
		technologies: ['react', 'sass'],
		skills: [],
		improvements: [],
		interest: [],
		shortDescription: 'Website for a dog groomer shop in Malaga.',
		videoLink: 'https://youtu.be/C9EgAcX2DAc',
		repoLink: 'https://github.com/amiguelmoreno/hakuna-matata',
		deployLink: 'https://hakunamatataweb.netlify.app/',
		cover: `${import.meta.env.BASE_URL}projects/webdev/hakuna-cover.png`
	}
]
