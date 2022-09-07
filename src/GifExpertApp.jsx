import { useState } from "react";
import { AddCategory,GifGrid } from "./components";
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategorie) => {
        if (categories.includes(newCategorie)) return;
        // console.log(newCategorie);
        setCategories([newCategorie, ...categories]);
        // setCategories(cat => [...cat,'Dr. Stone']);
    };
    // console.log(categories);
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewValue={(value) => onAddCategory(value)}
            />
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {/* Listado de Gifs (GifGrid) */}
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
            {/* <li></li> */}
            {/* Gif item */}
        </>
    )
}
