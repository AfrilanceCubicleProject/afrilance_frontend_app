import {useDispatch, useSelector, useStore} from "react-redux";

export class StoreUtil {


    static dispatch(actionToDispatch){
        const dispatch =  useDispatch()
       dispatch(actionToDispatch)
    }
    static commit(state, payload){
        const store = useSelector((store)=> `${store}.${state}`)
    }
}