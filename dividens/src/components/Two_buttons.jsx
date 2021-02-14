import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

const Two = () => {

    const[count, setCount] = useState(0);

    let reset = () => {
        setCount(0);
    }


    return (
        <div>
            <Button onClick={() => reset()}>Reset</Button>
            <Button style={{marginLeft: 4}} onClick={() => setCount(count => count + 1)} variant="warning">Add</Button>
            <p>{count}</p>
        </div>
    )
}

export default Two;
