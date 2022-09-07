import { useState } from "react"

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue(target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length<=1) return;
        onNewValue(newInputValue);
        setInputValue('');
    };
    return (
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
