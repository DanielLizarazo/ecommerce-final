import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemLists';

const ItemListContainer = () => {

    const[products, setProducts] = useState ([])
    const {category} = useParams()

    useEffect(() => {

            if (!category) {
                getProducts()
                .then((res) =>{
                    setProducts(res)
                })
                .catch((err) => console.log(err))
                
            } else{
                getProductsByCategory(category)
                .then((res) => {
                    setProducts(res)
                })
                .catch((err) => console.log(err))
            }
            console.log(products)
    },[category])

    return (
          <div>
            <h1>hola hla</h1>
          <div>
            <ItemList products={products}/>
          </div>
          </div>
    );
}

export default ItemListContainer;
