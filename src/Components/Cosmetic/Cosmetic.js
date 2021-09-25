import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    console.log(props);
    const { name, about, address, _id } = props.cosmetic;
    const handlePurchase = id => {
        // set local storage
        console.log(id);
        addToDb(id)
    }
    const handleRemove = id => {
        deleteFromDb(id)
    }
    return (
        <div style={{ backgroundColor: 'skyblue', padding: '20px', margin: '10px', borderRadius: '10px' }}>
            <h2>Name: {name}</h2>
            <p>Id: {_id}</p>
            <p>About: {about}</p>
            <h4>Address: {address}</h4>
            <button style={{ cursor: 'pointer', color: 'white', fontWeight: 'bold', fontSize: '20px', backgroundColor: 'skyblue', padding: '10px', margin: '10px', borderRadius: '10px' }} onClick={() => handlePurchase(_id)}>Purchase</button>
            <button style={{ cursor: 'pointer', color: 'white', fontWeight: 'bold', fontSize: '20px', backgroundColor: 'skyblue', padding: '10px', margin: '10px', borderRadius: '10px' }} onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;