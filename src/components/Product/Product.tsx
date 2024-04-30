import React, {FC} from 'react';

export   interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]

}

 type ITypeProductProps = IProductProps & { children?: React.ReactNode }


const Product:FC<ITypeProductProps> = ({id,images, category,rating,discountPercentage,description,price,stock,thumbnail,title,brand}) => {
    return (
        <div>
                <h2>ID: {id}</h2>
                <h2>Title: {title}</h2>
                <h2>description: {description}</h2>
                <h2>price:{price}</h2>
                <h2>discountPercentage:{discountPercentage}</h2>
                <h2>rating: {rating}</h2>
                <h2>stock: {stock}</h2>
                <h2>brand: {brand}</h2>
                <h2>category: {category}</h2>
                <h2>thumbnail: <img src={thumbnail} alt={title}/></h2>

                <hr/>
            {images.map((image,id)=> <img key={id} src={image} alt={title}/>)}



            <br/>
        </div>
    );
};

export default Product;