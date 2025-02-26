import {
  webDesign,
  webDevelopment,
  it,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  bootstrap,
  typescript,
  shopping,
  cinpaa,
  macc,
  threejs,
  e_commerce,
  oft,
  masterCoders,
  dashboard,
  cinpaa_dashboard,
  gym,
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

export const services = [
  { title: "Web Design ", icon: webDesign },
  { title: "Frontend Development", icon: webDevelopment },
  { title: "Technical Support", icon: it },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Frontend Development Intern",
    company_name: "Master Coders",
    icon: masterCoders,
    iconBg: "#161329",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Utilized HTML, CSS, and JavaScript to develop responsive web pages that adapt seamlessly to various devices and screen sizes.",
      "Worked closely with UX/UI designers to implement visually appealing and user-centric interfaces.",
      "Applied performance optimization techniques to enhance website loading speed and overall user interaction.",
    ],
  },
  {
    title: "Frontend Developer / Web Technical Support",
    company_name: "OFT",
    icon: oft,
    iconBg: "#161329",
    date: "oct 2024 - Present",
    points: [
      "As a Frontend Developer, I specialized in creating engaging and responsive web applications. I utilized my skills in modern web technologies to design and implement user-friendly interfaces, ensuring a seamless and intuitive user experience across various devices and browsers.",
      "Provide technical support for web-based products, diagnosing and resolving issues related to website functionality, browser compatibility, and server performance. Monitor and maintain web servers, ensuring high availability and security. Assist users with troubleshooting internet connectivity and web application issues. Collaborate with developers and designers to implement solutions for recurring technical problems.",
    ],
  },
];

export const projects = [
  {
    name: "Cinpaa Training",
    description:
      "Developed an intuitive and responsive training website using React.js. The platform was designed to deliver a seamless learning experience, facilitate easy course enrollment, and provide comprehensive course management features.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "react-router-dom", color: "green-text-gradient" },
      { name: "TailwindCss", color: "green-text-gradient" },
      { name: "React i18 next", color: "blue-text-gradient" },
      { name: "Axios", color: "green-text-gradient" },
      { name: "React-Datepicker", color: "pink-text-gradient" },
      { name: "Swiper.js", color: "blue-text-gradient" },
      { name: "React-Toastify", color: "green-text-gradient" },
    ],
    image: cinpaa,
    link: "http://front-end.cinpaa.org",
  },
  {
    name: "Cinpaa-Dashboard",
    description:
      "Admin dashboard for Cinpaa Website for , create, reade, update, delete data like courses, categories, and show people information who registered in the programs.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "react-router-dom", color: "pink-text-gradient" },
      { name: "Axios", color: "green-text-gradient" },
      { name: "React-Datepicker", color: "blue-text-gradient" },
      { name: "React-Modal", color: "pink-text-gradient" },
      { name: "React-Select", color: "blue-text-gradient" },
      { name: "React-Toastify", color: "green-text-gradient" },
    ],
    image: cinpaa_dashboard,
    link: "http://dashboard.cinpaa.org/",
  },
  {
    name: "Evogym",
    description:
      "dynamic and engaging fitness website designed to help users achieve their health and wellness goals. Built with React and TypeScript, FitLife offers a seamless and interactive user experience, ensuring that users can easily navigate through various features and resources.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "typeScript", color: "pink-text-gradient" },
      { name: "TailwindCss", color: "green-text-gradient" },
      { name: "Framer-Motion", color: "blue-text-gradient" },
      { name: "React-anchor-link-smooth-scroll", color: "pink-text-gradient" },
      { name: "React-hook-form", color: "blue-text-gradient" },
      { name: "Heroicons", color: "green-text-gradient" },
    ],
    image: gym,
    link: "https://rashiedgyme.netlify.app/",
  },
  {
    name: "Shopping Cart",
    description:
      "Shopping Cart Web Application is an interactive web-based application designed to provide users with a seamless and intuitive shopping experience. The application allows users to browse products, add them to a cart, and review their selections before proceeding to checkout.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: shopping,
    link: "https://rasheedaldeb.github.io/shoping-cart/",
  },
  {
    name: "Macc-Essential",
    description:
      "E-commerce Web Application, modern, user-friendly platform designed to provide a seamless shopping experience. Built with React.js, the application offers features such as product browsing, shopping cart management, and secure checkout. ",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "react-router-dom", color: "green-text-gradient" },
      { name: "TailwindCss", color: "pink-text-gradient" },
    ],
    image: macc,
    link: "https://macc-essenital.netlify.app/",
  },
  {
    name: "Admin Dashboard",
    description:
      "admin dashboard project demonstrates my ability to create a dynamic and intuitive user interface for managing various business functions. It features secure authentication, role-based access, comprehensive user activity tracking, interactive data visualizations.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "react-router-dom", color: "green-text-gradient" },
      { name: "Material Ui", color: "pink-text-gradient" },
      { name: "Recharts", color: "blue-text-gradient" },
      { name: "Sass", color: "green-text-gradient" },
    ],
    image: dashboard,
    link: "https://admin-dashboard-kappa-ivory.vercel.app/",
  },
  {
    name: "E-Commerce",
    description:
      "Crafted with the power of React and the elegance of Bootstrap, this e-commerce platform offers a seamless and engaging shopping experience. Designed to showcase a wide range of products, the website is fully responsive and optimized for performance",
    tags: [
      { name: "Bootstrap", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "Swiper.js", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: e_commerce,
    link: "https://e-commerce-react-beta-ecru.vercel.app/",
  },
];
