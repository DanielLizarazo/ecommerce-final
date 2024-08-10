import React from 'react';

const Item = ({id, imagen, nombre, precio, categoria}) => {
    return (
        <article>
        <h1>{nombre}</h1>
        <img src={imagen} alt={nombre} style={{width: 100}} />
        <p>categoria: {categoria}</p>
        <h2>{precio}</h2>
        <Link to={`/detail/${id}`}>Ver detalle</Link>
    </article>
    );
}

export default Item;
