import { productConstants } from '../_Constants'

const initialState = {
    productfullData: [],
    categorydata: [],
    singleProduct: {},
    isListing: false,
    isSingle: false
}

export const productReducer = (state = initialState, action) => {

    switch (action.type) {
        //listing
        case productConstants.PRODUCTLIST_REQUEST:
            state = {
                ...state,
                isListing: true,
                productfullData: [],
            }
            break;
        case productConstants.PRODUCTLIST_SUCCESS:
            state = {
                ...state,
                isListing: false,
                productfullData: action.payload,
            }
            break;
        case productConstants.PRODUCTLIST_FAILURE:
            state = {
                ...state,
                isListing: false,
                productfullData: [],
            }
            break;

        // single product
        case productConstants.PRODUCTSINGLE_REQUEST:
            state = {
                ...state,
                isSingle: true,
                singleProduct: {},
            }
            break;
        case productConstants.PRODUCTSINGLE_SUCCESS:
            state = {
                ...state,
                isSingle: false,
                singleProduct: action.payload,
            }
            break;
        case productConstants.PRODUCTSINGLE_FAILURE:
            state = {
                ...state,
                isSingle: false,
                singleProduct: {},
            }
            break;


        // CATEGORY LIST
        case productConstants.CATEGORYALL_REQUEST:
            state = {
                ...state,
                categorydata: [],
            }
            break;
        case productConstants.CATEGORYALL_SUCCESS:
            state = {
                ...state,
                categorydata: action.payload,
            }
            break;
        case productConstants.CATEGORYALL_FAILURE:
            state = {
                ...state,
                categorydata: [],
            }
            break;
    }
    return state;
}