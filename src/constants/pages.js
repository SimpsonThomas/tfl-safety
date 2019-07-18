import About from "../simplePages/about";
import Report from "../pages/report";
import Overview from "../pages/overview";

export const pageList = [
    {
        name: 'Report Issue',
        link: '/',
        nav: true,
        side: 'left',
        component: Report,
    },
    {
        name: 'Overview Issue',
        link: '/',
        nav: true,
        side: 'right',
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