// Product
export const GETPRODUCTS = async (dispatch) => {
    const data = await (await fetch('https://62e09d8bfa8ed271c4855b07.mockapi.io/product')).json()
    dispatch({
        type: "product/get",
        payload: data
    })
}