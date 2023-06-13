import Image from "next/image"
import { memo } from 'react'
import { Star } from "react-feather"

export default memo(function Product({ productInfo, addToCart }) {
  return (
    <div className="product">
      <Image
        src={productInfo.imageUrl}
        alt={productInfo.title}
        width={600}
        height={400}
        className="rounded-md"
        priority={false}
      />
      <h3>{productInfo.title}</h3>
      <div className="flex items-center gap-1"><span>{productInfo.rating}</span> <Star size={16} fill="#ffad17" color="none" /></div>
      <p className="font-bold">${productInfo.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
})
