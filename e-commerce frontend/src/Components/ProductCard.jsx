import {FaPlus} from 'react-icons/fa'
const server="nalksvnhievn"
function ProductCard({productId,photo,name,price,stock,handler}) {
  return (
    <div className="productcard">
      <img src={photo} alt={name}/>
      <p>{name}</p>
      <span>${price}</span>
      <div >
        <button onClick={()=>handler()}>
          <FaPlus/>
        <button/>
      </div>
    </div>
  )
}

export default ProductCard
