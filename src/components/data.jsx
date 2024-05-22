import axios from 'axios'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Data = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(res => res.json())
            .then(data => setData(data))
    }, [data])


    return (
        <div className='data_esas'>
            <span>Our Menu</span>
            <h3>Discover Our Exclusive Menu</h3>
            <div className='container data_esas_esas'>
                {data.map(element => {
                    return (
                        <div className='row mt-4 data_esas_qutu'>
                            <div className='col-3'><img src={element.img} alt="" className='data_esas_img' /></div>
                            <div className='col-6'>
                                <h4>{element.Name}</h4>
                                <p>{element.About}</p>
                            </div>
                            <div className='col-3'><p>{element.Money}</p></div>
                        </div>
                    )
                })}
            </div>
            <p className='mt-5'>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
            <button className='btn mb-5'>Make areservation</button>
        </div>

    )
}
