import {useRouteError} from "react-router-dom"; 
function Error() {
    const err = useRouteError();
    return (
        <div style ={{backgroundColor: "#f0f0f0"}}>
            <h1>Error</h1>
            <p>Oops! Something went wrong. Please try again later.</p>
            <p>Error Details: {err.status} - {err.statusText}</p>   
        </div>
    )
    }
export default Error;