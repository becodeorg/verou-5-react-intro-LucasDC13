import React, { useRef } from "react";

const TodoForm = () => {
    const inputRef = useRef();
    ;

    function submitForm() {
        const inputElement = inputRef.current;
        console.log( inputElement.value );
    }

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            submitForm();
        }
    }

    return ( 
        <section className="TodoForm">  
        {/* Maybe no form ele */}
            <input 
                type="text" 
                className="TodoInput" 
                placeholder="Add new todos here"
                ref={ inputRef }
                onKeyUp={ handleKeyUp }>
            </input>
            <input 
                type="submit" 
                value="Submit" 
                className="TodoInput"
                onClick={ submitForm }>
            </input>
        </section>
    );
 };

 export default TodoForm;