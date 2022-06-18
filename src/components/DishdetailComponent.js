import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { COMMENTS } from "../shared/comments";

function RenderDish({dish}) {
    if(dish != null) {
        return(
            <div className="col-12 col-md-5 m-1 mt-3">
            <Card >
                <CardBody><h3>DETAIL OF DISH</h3></CardBody>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div> 
        )
    }
    else {
        return(
            <div></div>
        )
    }
}

function RenderComment({dish}) {
        if (dish != null) {
            const commentOfDish = COMMENTS.filter((comment) => comment.dishId == dish.id); //phải có if else vì khi mới vào, chưa click vào món nào thì dish chưa xác định nên không thể nhận ra dish.id
            return (
                <div className='col-12 col-md-5 m-1 mt-3'>
                    <h4>Comments</h4>
                    {
                        commentOfDish.map(comment => {
                            return (
                                <div key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>- - {comment.author}</p>
                                </div>

                            )
                        })
                    }
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

function DishDetail({dish}) {
    return(
        <div className='container'>
            <div className='row'>
            <RenderDish dish={dish} />
            <RenderComment dish={dish} />
            </div>
        </div>
    )
}

// class DishDetail extends Component {

//     renderDish(dish) {
//         if (dish != null) {
//             return (
//                 <div className="col-12 col-md-5 m-1 mt-3">
//                     <Card >
//                         <CardBody><h3>DETAIL OF DISH</h3></CardBody>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardBody>
//                             <CardTitle>{dish.name}</CardTitle>
//                             <CardText>{dish.description}</CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//             )
//         }
//         else {
//             return (
//                 <div></div>
//             )
//         }
//     }

//     renderComment(dish) {
//         if (dish != null) {
//             const commentOfDish = COMMENTS.filter((comment) => comment.dishId == dish.id); //phải có if else vì khi mới vào, chưa click vào món nào thì dish chưa xác định nên không thể nhận ra dish.id
//             return (
//                 <div className='col-12 col-md-5 m-1 mt-3'>
//                     <h4>Comments</h4>
//                     {
//                         commentOfDish.map(comment => {
//                             return (
//                                 <div key={comment.id}>
//                                     <p>{comment.comment}</p>
//                                     <p>- - {comment.author}</p>
//                                 </div>

//                             )
//                         })
//                     }
//                 </div>
//             )
//         }
//         else {
//             return (
//                 <div></div>
//             )
//         }
//     }

//     render() {

//         return (
//             <div className='container'>
//                 <div className='row'>
//                     {this.renderDish(this.props.dish)}
//                     {this.renderComment(this.props.dish)}
//                 </div>
//             </div>
//         )
//     }
// }

export default DishDetail;