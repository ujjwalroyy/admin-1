import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/productSlice';
import '../css/custom.css'
import '../css/media.css'
import Sideer from '../sider/Sideer';
import Header from '../Header/Header';

const Product = () => {
    const dispatch = useDispatch()
    const { data, isLoading, isError } = useSelector((state) => state.products)
    const [isShowMore, setShowMore] = useState(false)


    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div className="main_container">
            <div className="limani_body">
                <Sideer />
                <div className="intersight_content">
                    <div className="body_content">
                        <Header />
                        <div className="contact-profile">
                            <div className='row pCard'>
                                {data && data.map(product => {
                                    return (
                                        <div key={product.id} className="card col-md-4">
                                            <img src={product.image} alt="Denim Jeans" style={{ width: "170px", height: "200px", marginLeft: '60px', marginTop: '10px' }} />
                                            <h6>{isShowMore ? product.title : product.title.slice(0, 20)}</h6>
                                            <p className="price">{product.price}</p>
                                            <p>{isShowMore ? product.description : product.description.slice(0, 50)}<span onClick={() => setShowMore(!isShowMore)} style={{ backgroundColor: '#2ecc71', cursor: 'pointer' }}>{isShowMore ? "Show less" : "...Show more"}</span></p>
                                            <button className='cart-btn'>Add to Cart</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product