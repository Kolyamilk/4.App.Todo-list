export default function TaskList({ taskName }) {
    return (
        
        <div className="main__input-tasks gray styleHover">
            <ul>
                <li>
                  
                    <p>{taskName}</p>
                    <div className="btnChoice">
                        <button className='doneTask hoverBtn'></button>
                        <button className=' deleteTask hoverBtn'></button>
                    </div>
                </li>
            </ul>
        </div>


    )
}