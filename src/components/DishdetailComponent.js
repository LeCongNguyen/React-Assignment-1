import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { COMMENTS } from "../shared/comments";
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div>
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
        return (
            <div></div>
        )
    }
}

function RenderComments({ comments }) {
    if (comments != null) {
        const commentOfDish = comments;
        return (
            <div>
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

function DishDetail(props) {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );
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