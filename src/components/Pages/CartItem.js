import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItem } from '../features/cartSlice'


const CartItem = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.localStorageItems)

    useEffect(() => {
        dispatch(getCartItem())
    }, [dispatch])

    return (
        // <div>
        //     {items.map((it) => {
        //         console.log("Items", it);
        //     })}
        // </div>

        <>
        <div>
            {/* {items[1].title} */}

           {items.forEach((it) => {
                <div className="card-body">
                    {console.log("Items", it.price)}
                    <img src={it.image} alt='' />
                    <p>{it.category}</p>
                    <p>{it.description}</p>
                    <p>{it.price}</p>
                    <p>{it.title}</p>
                </div>
            }) }
            </div>
            
        </>
    )
}

export default CartItem