import './Cosmetics.css';
import React, { useEffect, useState } from 'react';
import { add, multi, sub } from '../../utilities/storage';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    /* const first = 50;
    const second = 70;
    const sum = add(first, second);
    const multi = multi(first, second)
    const sub = sub(first, secondgi) */

    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h3>Shop my cosmetics</h3>
            <div className='cosmetics'>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        key={cosmetic._id}
                        cosmetic={cosmetic}></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;