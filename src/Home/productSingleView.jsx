import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

import { productsSingle } from "../_Actions/productAction";
import { useDispatch, useSelector } from 'react-redux';

import { Container, Row, Col, Table, } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import "./product.css";

export const ProductSingleView = () => {
    let { id } = useParams();
    const product = useSelector(state => state.product);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsSingle(id));
    }, []);

    return (
        <div>
            <Container className="mt-3 mb-4">
                {product.isSingle && <Spinner animation="grow" variant="primary" />}
                {!product.isSingle && <Row>
                    <Col md={6} className="singleview-image">
                        <img src={product.singleProduct.image} alt="demmo"></img>
                    </Col>
                    <Col md={6} className="singleview-detail">
                        <h6>{product.singleProduct.title}</h6>
                        <p className="sindleview-category">{product.singleProduct.category}</p>
                        <div className='rating'>
                            <span>₹{product.singleProduct.price}</span>
                            {product.singleProduct.rating && <p className='rate'>{product.singleProduct.rating.rate} ★ </p>}
                            {product.singleProduct.rating && <p>{product.singleProduct.rating.count} Customer Review</p>}
                        </div>
                        <p>{product.singleProduct.description}</p>
                    </Col>
                </Row>}
            </Container>
        </div>
    )
}
