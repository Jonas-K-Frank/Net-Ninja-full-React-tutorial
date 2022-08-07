import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page can not be found</p>
            <Link to="/">To back to the fromtime</Link>
        </div>
     );
}
 
export default PageNotFound;