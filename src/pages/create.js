import CreateForm from "../components/createForm";
import MainContainer from "../components/mainContainer";
import { useEffect } from "react";

import  useReducerApp from "../store/store";

export default function Create() {
    const [state, dispatch] = useReducerApp();

    useEffect(() => {
        dispatch({type: "LOAD"});
    }, []);

    return ( 
    <MainContainer>
        <CreateForm dispatch={dispatch} />

        <div>
            {state.items.map((item) => (
            <div key={item.shortUrl}>
                {item.shortUrl}
                {item.url}
            </div>
            ))}
        </div>
    </MainContainer>
    );
}