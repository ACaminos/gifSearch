import React from 'react'

export const GifGrid = ( { category } ) => {

  const getGifs = async() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UKDssLvF2UM3gWSFMDMI8gsEdXRX0cpP&q=${ category }`
    const resp = await fetch( url )

    console.log( resp )
  }
  return (
    <>
        <h3>{ category }</h3>
        <p>Que onda</p>
    </>
  )
}
