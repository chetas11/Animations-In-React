import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Spring} from 'react-spring/renderprops'


const App = () => {
    return(
        <div>
        <Component1 />
        <Component2 />
        </div>
    )
}

const Component1 = () => {
    return(
    <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1 , marginTop:50 }}>
        {props => <div style={props}>
            <div style={c1Style}>
                <h1>Component1</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 1</p>
                <Spring
                    from={{ number:0 }}
                    to={{ number: 10 }}
                    config = {{ duration:10000 }}
                >
                    {props => 
                    <div style={props}>
                        <h1 style={counter}>
                            {props.number.toFixed()}
                        </h1>
                    </div>}
                </Spring>
            </div>  
        </div>}
    </Spring>
    )
}

const Component2 = () => {
    return(
    <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config = {{ delay:1000, duration:1000 }}
        >
        {props => <div style={props}>
            <div style={c2Style}>
                <h1>Component1</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 1</p>
                <button style={btn} >Toggle Component3</button>                
            </div>  
        </div>} 
    </Spring>
    )

}

// const Component3 = () => {
//     return(
//     <Spring
//         from={{ opacity: 0 }}
//         to={{ opacity: 1 }}
//         config = {{ delay:1000, duration:1000 }}
//         >
//         {props => <div style={props}>
//             <div style={c3Style}>
//                 <h1>Component1</h1>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 1</p>
//             </div>  
//         </div>}
//     </Spring>
//     )

// }


const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

// const c3Style = {
//     background: 'skyblue',
//     color: 'white',
//     padding: '1.5rem'
// }

const btn = {
    background: '#333',
    color:'#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin:'15px 0'
}

const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
};


ReactDOM.render(<App />, document.querySelector('#react-root'))