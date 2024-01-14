import { useRef } from "react"


export default function AddForm({add}){
    const inputRef = useRef();

    return (

        <form onSubmit={e => {
            e.preventDefault();
            const subject = inputRef.current.value;
            add(subject);
    
            inputRef.current.value = "";
            inputRef.current.focus();
    
        }}>
            <input type="text" ref={inputRef} />
            <button type="submit">
                Add
            </button>
        </form>

    )
    
}