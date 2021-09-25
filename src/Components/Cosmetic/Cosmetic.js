import React from 'react';
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    console.log(props);
    const { name, about, address, _id } = props.cosmetic;
    const handlePurchase = id => {
        // set local storage
        console.log(id);
        addToDb(id)
    }
    return (
        <div style={{ backgroundColor: 'skyblue', padding: '20px', margin: '10px', borderRadius: '10px' }}>
            <h2>Name: {name}</h2>
            <p>Id: {_id}</p>
            <p>About: {about}</p>
            <h4>Address: {address}</h4>
            <button style={{ cursor: 'pointer', color: 'white', fontWeight: 'bold', fontSize: '20px', backgroundColor: 'skyblue', padding: '10px', margin: '10px', borderRadius: '10px' }} onClick={() => handlePurchase(_id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;