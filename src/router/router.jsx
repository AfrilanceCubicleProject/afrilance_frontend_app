import HomeRoutes from "./routes/Home-routes.jsx";
import {Route, Routes} from "react-router-dom";

const  baseRoutes = []
const routes = baseRoutes.concat(HomeRoutes)

  const Router = ()=>{
    return (
        <Routes>
            {
                routes.map(({path, component, name})=> {
                    return <>
                                <Route key={name} path={path} element={component} />
                            </>
                })
            }
        </Routes>
    )
  }

export default Router