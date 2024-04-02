import propTypes from "prop-types"

export const GifItem = ( { title, url, id } ) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  url : propTypes.string.isRequired,
  title : propTypes.string.isRequired,
  id : propTypes.string
}