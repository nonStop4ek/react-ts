import React, {FC, useEffect, useState} from 'react';
import  {IProductProps} from "../Product/Product";
import Product from "../Product/Product";





const Products:FC = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => setProducts(products))

    }, []);





    return (
        <div>
            {
                products.map((product:IProductProps)=>(<Product key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} stock={product.stock} brand={product.brand} category={product.category} thumbnail={product.thumbnail} images={product.images}/>))
            }

            </div>
    );
};

export default Products;