import Champions from 'views/Champions';
import Champion from 'views/Champion';
import Items from 'views/Items';
import Home from 'views/Home';

const routes = [
    {
        path: '/champions/:champ',
        component: Champion
    },
    {
        path: "/champions",
        component: Champions
    },
    {
        path: "/items",
        component: Items
    },
    {
        path: "/",
        component: Home
    }
]

export default routes;