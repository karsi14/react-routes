import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`,
            { headers: { Authorization: '6c992ea780e3c3150a7eb3e15fe6030c' } }
        );

        const {data} = await fetchItem.json();
        setItem(data.item);
        console.log('ITEM',item);
    };

    console.log('ITEM OUT',item);

    /**
     * 
     * 
     */

    
    return(
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.icon} alt="" />
        </div>
    );
}

export default ItemDetail;