import { useEffect, useState } from "react";
import ProductList from "./product-list";

export default function UseEffectDemo(props) {

    const initState = {
        numberOfClicks: 0
    }

    const [state, setState] = useState(initState);

    useEffect(() => {
        console.log("inside useEffect");

        const callPizzaPromise = async () => {
            try {

                const response = await pizzaPromise;
                // handle the response
                // 10 lines of code
                console.log('result: ', response);

            } catch (err) {
                // handle the error
                console.log('error: ', err);
            }
        }

        // pizzaPromise
        //     .then((res) => {
        //         // handle the response
        //         // 10 lines of code
        //         console.log('result: ', res);
        //     })
        //     .catch(err => {
        //         // handle the error
        //         console.log('error: ', err);
        //     })

        callPizzaPromise();
        console.log('after calling the promise');

    }, [state.numberOfClicks]);

    const handleClick = () => {
        setState({
            ...state,
            numberOfClicks: state.numberOfClicks + 1
        });

        console.log('Count without prevState: ', state.numberOfClicks);

        setState((prevState) => {
            console.log('Count with prevState ', prevState.numberOfClicks);
            return {
                ...state,
                numberOfClicks: prevState.numberOfClicks
            }
        });
    }


    console.log('renderinggg...');
    return (
        <div>
            <h1>Welcome to promises</h1>
            <div>
                <hr />
                <h1>Dependency simulation in useEffect</h1>
                <button onClick={() => handleClick()} >ClickMe</button>
                {state.numberOfClicks}
                <hr />
            </div>
            <ProductList />
        </div>
    )
}

const isDoughAvailable = false;

const pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isDoughAvailable) {
            resolve("Here's your pizza, Enjoyyyy!");
        } else {
            reject("No dough no pizza Sorry! :D");
        }
    }, 5000);
})