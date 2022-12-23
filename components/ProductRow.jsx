import React from 'react'

const ProductRow = ({product}) => {

    const name = product.stocked ? product.name : <span className='text-red-400'>{product.name}</span>


  return (
    <tr>
        {name}
        {product.price}
    </tr>
  )
}

export default ProductRow