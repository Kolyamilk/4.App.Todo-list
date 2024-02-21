import './Content.css'
import { useState } from 'react'
// import TaskList from './TaskList/TaskList'
// import History from '../History/History'
// import { tasks } from "..//../data"

export default function Content() {

    const [newItem, setNewItem] = useState(null)
    const [items, setItems] = useState([])

    function addItem() {

        if (!newItem) {
            alert('Enter a new Task');
            return;
        }
        const item = {
            id: Math.floor(Math.random() * 1000),
            key: Math.floor(Math.random() * 5000),
            value: newItem
        }
        setItems(oldList => [...oldList, item]);
   



    }
    function deleteItem(id) {
        const newArray = items.filter(item => item.id !== id)
        setItems(newArray)
    }

    // const [activeBG, setActiveBG] = useState('noneBG')

    const handleChange = event => {
        setNewItem(event.target.value)

        // if (event.target.value.trim().length > 0) {
        //     setActiveBG('activeBG hoverBtn')
        // } else {
        //     setActiveBG('noneBG')
        // }
    }
    // const handleClick = event => {
    //     if (items <= 0) {
    //         console.log('Нет задач ');
    //     } else {
    //         console.log('на данный момент задач: ' + items.length);
    //     }


    // };
    return (
        <>
            <div className='content__main'>
                <div className="main__input-task">
                    <input
                        className='styleHover'
                        type="text"
                        placeholder="Enter your Task"

                        onChange={handleChange}
                    />
                    <button onClick={addItem} className='activeBG styleHover'></button>

                </div>

                {items.map(item => {
                    return (
                        <div key={item.id} className="main__input-tasks gray styleHover">
                            <ul>
                                <li >
                                    <p>
                                        {item.value}
                                    </p>
                                    <div className="btnChoice">
                                        <button className='deleteTask hoverBtn' onClick={() => { deleteItem(item.id) }}></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                })}

            </div>
        </>
    )
}