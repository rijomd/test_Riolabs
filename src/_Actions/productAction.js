import { productConstants } from '../_Constants'
import axios from 'axios';



export const productSearch = (products) => {
    console.log(products, "products");
    return async (dispatch) => {
        await dispatch({
            type: productConstants.PRODUCTLIST_SUCCESS,
            payload: products
        });
    }
}
export const productsList = (category) => {

    return async function saveNewTodoThunk(dispatch, getState) {

        await dispatch({ type: productConstants.PRODUCTLIST_REQUEST });

        if (category) {
            let response = await axios({
                url: "https://fakestoreapi.com/products/category/" + category
            })
            if (response.status === 200) {
                let payload = response.data;
                await dispatch({
                    type: productConstants.PRODUCTLIST_SUCCESS,
                    payload: payload
                });
            }
            else {
                await dispatch({
                    type: productConstants.PRODUCTLIST_FAILURE,
                    payload: "Error"
                });
            }
            return response;
        }
        else {
            let response = await axios({
                url: "https://fakestoreapi.com/products",
            })
            if (response.status === 200) {
                let payload = response.data;
                await dispatch({
                    type: productConstants.PRODUCTLIST_SUCCESS,
                    payload: payload
                });
            }
            else {
                await dispatch({
                    type: productConstants.PRODUCTLIST_FAILURE,
                    payload: "Error"
                });
            }
            return response;
        }
    }

}



// export const productsList = (category) => {
//     return async (dispatch) => {

//         await dispatch({ type: productConstants.PRODUCTLIST_REQUEST });

//         if (category) {
//             let response = await axios({
//                 url: "https://fakestoreapi.com/products/category/" + category
//             })
//             if (response.status === 200) {
//                 let payload = response.data;
//                 await dispatch({
//                     type: productConstants.PRODUCTLIST_SUCCESS,
//                     payload: payload
//                 });
//             }
//             else {
//                 await dispatch({
//                     type: productConstants.PRODUCTLIST_FAILURE,
//                     payload: "Error"
//                 });
//             }
//         }
//         else {
//             let response = await axios({
//                 url: "https://fakestoreapi.com/products",
//             })
//             if (response.status === 200) {
//                 let payload = response.data;
//                 await dispatch({
//                     type: productConstants.PRODUCTLIST_SUCCESS,
//                     payload: payload
//                 });
//             }
//             else {
//                 await dispatch({
//                     type: productConstants.PRODUCTLIST_FAILURE,
//                     payload: "Error"
//                 });
//             }
//         }




//     }
// }


export const productsSingle = (productid) => {
    return async (dispatch) => {

        await dispatch({ type: productConstants.PRODUCTSINGLE_REQUEST });

        let response = await axios({
            url: "https://fakestoreapi.com/products/" + productid,
        })

        console.log(response.data, "data");

        if (response.status === 200) {
            let payload = response.data;
            await dispatch({
                type: productConstants.PRODUCTSINGLE_SUCCESS,
                payload: payload
            });
        }
        else {
            await dispatch({
                type: productConstants.PRODUCTSINGLE_FAILURE,
                payload: "Error"
            });
        }



    }
}


export const categoryAll = () => {
    return async (dispatch) => {

        await dispatch({ type: productConstants.CATEGORYALL_REQUEST });

        let response = await axios({
            url: "https://fakestoreapi.com/products/categories",
        })

        console.log(response.data, "data");

        if (response.status === 200) {
            let payload = response.data;
            await dispatch({
                type: productConstants.CATEGORYALL_SUCCESS,
                payload: payload
            });
        }
        else {
            await dispatch({
                type: productConstants.CATEGORYALL_FAILURE,
                payload: "Error"
            });
        }



    }
}


