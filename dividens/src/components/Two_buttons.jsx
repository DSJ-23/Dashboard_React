import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import {CountContext} from './CountContext';

const Two = () => {

    const {value, setValue} = useContext(CountContext);

    return (
        <div>
            <Button onClick={() => setValue(0)}>Reset</Button>
            <Button style={{marginLeft: 4}} onClick={() => setValue(count => count + 1)} variant="warning">Add</Button>
            <p>{value}</p>
        </div>
    )
}

export default Two;
