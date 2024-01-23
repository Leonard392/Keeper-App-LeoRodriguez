import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Header";
import Footing from "./Footer";
import Note from "./Note";
import notes from "../notes";





function App() {
    return (<div>
        <Heading />
        {notes.map((noteItem) => <Note
                key = {noteItem.key}
                title = {noteItem.title}
                content = {noteItem.content}
              />
         )}
        <Footing />
    </div>
    )
}

export default App;