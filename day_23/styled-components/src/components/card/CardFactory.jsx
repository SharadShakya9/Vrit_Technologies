import React from 'react'
import { AddToCartButton, CardDesc, CardTitle, CardWrapper, Image } from './cardFactoryStyle'

const CardFactory = ({imagePath, description, title, handleAddCart}) => {
  return (
    <div>
      <CardWrapper>
        <Image src={`${imagePath}`} />
        <CardTitle>{title}</CardTitle>
        <CardDesc>{description}</CardDesc>
        <AddToCartButton onClick={handleAddCart}>
            Add To Cart
        </AddToCartButton>
      </CardWrapper>
    </div>
  )
}

export default CardFactory
