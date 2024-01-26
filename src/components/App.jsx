import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Header";
import Footing from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";





function App() {
    return (<div>
        <Heading />
        <CreateArea/>
        <Note key={1} title="Note title" content="Note content" />
        <Footing />
    </div>
    )
}

export default App;