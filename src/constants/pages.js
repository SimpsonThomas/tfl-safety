import About from "../simplePages/about";

export const pageList = [
    {
        name: 'Home',
        link: '/',
        //component: Home,
    },
    {
        name: 'About',
        link: '/about',
        nav: true,
        side: 'right',
        component: About,
    },
]

export default pageList