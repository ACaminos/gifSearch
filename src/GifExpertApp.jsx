import { useState } from "react";

export const GifExpertApp = () => {
  const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

  const aditional = () => {
    setCategories( ['Valorant', ...categories ] ) // ---> Primera solucion
    // setCategories( cat => [ ...cat, 'Valorant'] ) ---> Segunda solucion
   }

  return (
    <>
        <h1>GifExpertApp</h1>


        <ol>
          { categories.map( category => (
            <li key={ category }>{ category }</li>
            ))}
        </ol>

        <button onClick={ aditional }>Agregar</button>
    </>
  )
}
