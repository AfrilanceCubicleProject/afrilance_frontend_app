import {ActionUtil} from "../../utils/baseUtil/ActionUtil.jsx";
import HomeView from "../../views/open/HomeView.jsx";

const HomeRoutes = [
    {
        path: "/",
        name: ActionUtil.routes.page.home,
        component: <HomeView />
    }
]
console.log(...HomeRoutes)
export default HomeRoutes



