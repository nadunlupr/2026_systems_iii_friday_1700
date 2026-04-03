import { useEffect } from "react"

export default function ProductList(props) {

    useEffect(() => {

        const loadProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=5');
                const { products } = await response.json();
                console.log('products: ', products);
            } catch (err) {
                console.log('error: ', err);
            }

        }

        loadProducts();

    }, [])

    return (
        <div>
            <h1>Loading Products...</h1>
        </div>
    )
}