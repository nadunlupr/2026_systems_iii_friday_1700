import { useEffect, useState } from "react"

export default function ProductList(props) {

    const initialState = {
        products: []
    }

    const [state, setState] = useState(initialState);

    useEffect(() => {

        const loadProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=5');
                const { products } = await response.json();
                console.log('products: ', products);
                setState({
                    ...state,
                    products
                })
            } catch (err) {
                console.log('error: ', err);
            }

        }

        loadProducts();

    }, [])

    return (
        <div>
            <h1>Loading Products...</h1>
            {
                state.products.map(({id, title, description}) => {
                    return (<div key={id}>{title}</div>)
                })
            }
        </div>
    )
}