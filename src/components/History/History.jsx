
import { useState } from 'react'

export default function History() {
    const [activeBG, setActiveBG] = useState('noneBG')
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);

        if (event.target.value.trim().length > 0) {
            setActiveBG('activeBG hoverBtn')
        } else {
            setActiveBG('noneBG')
        }
    }
    const handleClick = event => {
        event.preventDefault();
        if (message.trim().length !== 0) {
            console.log(message);
        } else {
            console.log('input value is empty');
        }
    };
    const complete = 'Сделано: '
    return (
        <div className='content__main'>
   
            <div className="main__input-tasks gray">
                <li><p>
                    <strong>{complete}</strong>
                    go to train
                </p>
                
                    <div className="btnChoice">
                        <button className='doneTask hoverBtn'></button>
                    </div>
                </li>
                <li><p>
                    <strong>{complete}</strong>
                    buy the milk
                </p>
                
                    <div className="btnChoice">
                        <button className='doneTask hoverBtn'></button>
                    </div>
                </li>
                <li><p>
                    <strong>{complete}</strong>
                   create new app
                </p>
                
                    <div className="btnChoice">
                        <button className='doneTask hoverBtn'></button>
                    </div>
                </li>
            </div>
        </div>
    )
}