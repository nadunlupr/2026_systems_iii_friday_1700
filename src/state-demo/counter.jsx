import { useState } from "react"

export function Counter() {

    const initialState = {
        count: 0,
        input: undefined
    }

    const [state, setState] = useState(initialState);

    // const [count, setCount] = useState(0);
    // const [input, setInput] = useState('');

    console.log('rendering...');

    // const res = useState();
    // const count = res[0];
    // const setCount = res[1];

    const handleClick = () => {
        setState({
            ...state,
            count: state.count + 1
        });        
    }

    return (
        <div>
            <button onClick={() => handleClick()} >Click Me!</button>
            <p>You Clicked me {state.count}  times</p>
            <input type="text" onChange={({
                target: {
                    value: input,
                } = {} }) => setState({
                    ...state,
                    input
                })} />
            <p>{state.input}</p>
        </div>
    )
}

// const obj = {
//     uni: {
//         name: 'up',
//         students: {
//             name: "student name"
//         }
//     }
// }

// const {
//     uni: {
//         students: {
//             name: studentName
//         } = {}
//     } = {}
// } = obj