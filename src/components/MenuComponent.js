import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDishes(props) {
  return (
    <Link to={`/menu/${props.dish.id}`}>
      <Card onClick={props.onClick}>
        <CardImg width='100%' src={props.dish.image} />
        <CardImgOverlay>
          <CardTitle>{props.dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
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

  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  )
}

export default Menu;