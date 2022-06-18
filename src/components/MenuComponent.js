import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDishes(props) {
  return (
    <Card onClick={props.onClick}>
      <CardImg width='100%' src={props.dish.image} />
      <CardImgOverlay>
        <CardTitle>{props.dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  )
}

function Menu(props) {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className='col-12 col-md-5 m-1'>
        <RenderDishes dish={dish} onClick={() => props.onClick(dish.id)} />
      </div>
    )
  })

  return(
    <div className='container'>
      <div className='row'>
        {menu}
      </div>
    </div>
  )
}

export default Menu;