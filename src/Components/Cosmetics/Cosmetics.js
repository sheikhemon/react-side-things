import React from 'react';
import { add, multi, sub } from '../../utilities/storage';

const Cosmetics = () => {
    const first = 50;
    const second = 70;
    const sum = add(first, second);
    const multi = multi(first, second)
    const sub = sub(first, second)
    return (
        <div>

        </div>
    );
};

export default Cosmetics;