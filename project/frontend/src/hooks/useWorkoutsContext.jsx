import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";


export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutsContext)
        if(!context){
            throw Error("error buang dapat naa sa sulod sa contextprider para naay value ang value sa imong context provider")
        }
    return context
}