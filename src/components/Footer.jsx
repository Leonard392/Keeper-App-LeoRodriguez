import React from "react";
import ReactDOM from "react-dom";




function Footing() {

    const currentYear = new Date().getFullYear();
    return (<footer>
        <p>Copyright ⓒ {currentYear}</p>
    </footer>)
}

export default Footing;