import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/items/list', {
            headers: { Authorization: '6c992ea780e3c3150a7eb3e15fe6030c' }
        });

        const items = await data.json();
        console.log(items);
        setItems(items.data);
    };

    return(
        <div>
            {items.map(item => (
                <h1 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;