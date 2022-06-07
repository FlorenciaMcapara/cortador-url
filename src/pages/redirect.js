import { useEffect } from "react";
export default function Redirect() {
    useEffect(() => {
        const data = localStorage.getItem('urls');
        if(data){

        } 
    }, []);
    return <div>Redirect</div>
}