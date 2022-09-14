import {Route} from "react-router-dom";
import {MenuIcon, XBarIcon} from "../../assets/icons/HeroIcon";

const HomeView =()=>{
    return (
        <>
            <h2 className="text-center">Home page</h2>
            <MenuIcon className="text-red-600 text-center w-icon-sm" onClick={()=> alert("hello world")} />
            <XBarIcon className="text-red-600 text-center w-icon-sm" />
        </>
    )
}

export default HomeView