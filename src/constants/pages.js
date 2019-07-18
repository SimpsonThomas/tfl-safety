import About from "../simplePages/about";
import Report from "../pages/report";
import Overview from "../pages/overview";

export const pageList = [
    {
        name: 'Report Issue',
        link: '/report',
        nav: true,
        side: 'left',
        component: Report,
    },
    {
        name: 'Overview Issues',
        link: '/overview',
        nav: true,
        side: 'right',
        component: Overview,
    },
    {
        name: 'Overview Issues',
        link: '/',
        nav: false,
        side: 'none',
        component: Overview,
    },
    {
        name: 'Overview Issues',
        link: '/tfl-safety',
        nav: false,
        side: 'none',
        component: Overview,
    },
    {
        name: 'About',
        link: '/about',
        nav: false,
        side: 'none',
        component: About,
    },
]

export default pageList