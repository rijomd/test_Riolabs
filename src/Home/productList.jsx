import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { productsList, categoryAll, productSearch } from "../_Actions/productAction";
import { SearchBar } from './searchBar';

import { Container, Row, Col, Table, } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'
import Spinner from 'react-bootstrap/Spinner';
import { FaEye } from 'react-icons/fa';

import "./product.css";
import _ from "lodash";

export const ProductList = () => {

    const product = useSelector(state => state.product);
    const dispatch = useDispatch();
    const [allproducts, setAllproducts] = useState([]);
    const [currentpage, setCurrentPage] = useState(1);
    let pageSize = 5;

    useEffect(() => {
        dispatch(productsList()).then((res) => {
            if (res.data) {
                setAllproducts(res.data);
                let newData = _(res.data).slice(0).take(pageSize).value();
                dispatch({
                    type: "PRODUCTLIST_SUCCESS",
                    payload: newData
                });
            }
        })
        dispatch(categoryAll());
    }, []);

    let pageCount = allproducts ? Math.ceil(allproducts.length / pageSize) : 0;
    let pages = _.range(1, pageCount + 1);

    const paginateItems = (page) => {
        setCurrentPage(page);
        let start = (page - 1) * pageSize;
        let newData = _(allproducts).slice(start).take(pageSize).value();
        dispatch({
            type: "PRODUCTLIST_SUCCESS",
            payload: newData
        });
    }
    const filterByCategory = (category) => {
        dispatch(productsList(category)).then((res) => {
            if (res.data) {
                setAllproducts(res.data);
                let newData = _(res.data).slice(0).take(pageSize).value();
                dispatch({
                    type: "PRODUCTLIST_SUCCESS",
                    payload: newData
                });
            }
        });
    }
    const clearAll = () => {
        dispatch(productsList()).then((res) => {
            if (res.data) {
                setAllproducts(res.data);
                let newData = _(res.data).slice(0).take(pageSize).value();
                dispatch({
                    type: "PRODUCTLIST_SUCCESS",
                    payload: newData
                });
            }
        })
    }
    const handleSearch = (value) => {
        let newArray = [];
        if (value) {
            for (let item of allproducts) {
                if (item.title.includes(value)) {
                    newArray.push(item);
                }
            }
        }
        else {
            newArray = _(allproducts).slice(0).take(pageSize).value();
        }
        dispatch(productSearch(newArray));
    }

    const renderProducts = (products) => {
        let productArray = [];
        for (let product of products) {
            productArray.push(
                <tr>
                    <td><img className="productlist-image" src={product.image} alt="demmo"></img></td>
                    <td >
                        <p className="productlist-titile">{product.title}</p></td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                        <Link to={"/product/" + product.id}>
                            <FaEye />
                        </Link>
                    </td>
                </tr>
            )
        }
        return productArray;
    };

    return (
        <div>
            <Container className=" mt-3 mb-4">
                <Row >
                    <Col md={12} >
                        <Container className="product-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                            {product.isListing && <Spinner animation="grow" variant="primary" />}
                            {!product.isListing && product.categorydata && <SearchBar category={product.categorydata}
                                filterByCategory={(category) => filterByCategory(category)} clearAll={clearAll}
                                handleSearch={(value) => handleSearch(value)} />}
                            {!product.isListing && product.productfullData && product.productfullData.length > 0 &&
                                <Table className="table manage-candidates-top mb-0">
                                    <thead>
                                        <tr>
                                            <th >Image</th>
                                            <th >Name</th>
                                            <th >Category</th>
                                            <th >Price</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderProducts(product.productfullData)}
                                    </tbody>
                                </Table>}

                            {!product.isListing && product.productfullData && product.productfullData.length == 0 && <p> No Products Found</p>}

                            {!product.isListing && product.productfullData && product.productfullData.length > 0 && <Row>
                                {pages.length > 1 && <Pagination style={{ justifyContent: "center" }}>
                                    {
                                        pages.map((page) => {
                                            return <Pagination.Item key={page} active={page === currentpage} onClick={() => paginateItems(page)}>
                                                {page}
                                            </Pagination.Item>
                                        })
                                    }
                                </Pagination>}
                            </Row>}
                        </Container>
                    </Col>
                </Row>
            </Container>



        </div>
    )
}

