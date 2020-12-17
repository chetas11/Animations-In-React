import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Spring} from 'react-spring/renderprops'



const App = () => {
    return(
    <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1 , marginTop:50 }}>
        {props => <div style={props}>
            <div style={c1Style}>
                <h1>Component1</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 1</p>
            </div>  
        </div>}
    </Spring>
    )
}


const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}


ReactDOM.render(<App />, document.querySelector('#react-root'))