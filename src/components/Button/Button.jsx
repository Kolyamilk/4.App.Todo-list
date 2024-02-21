import "./Button.css"

export default function Button({ children, onClick, isActive }) {

    return (
        <button className={isActive ? 'active button styleHover' : 'button styleHover'} onClick={onClick} >
            {children}
        </button >

    );
} 
