import React from 'react'

export const Section = () => {
    return (
        <div  className='cotainer section_esas'>
            <div className='button'>
                <button className='btn  btn-primary'>Book a table</button>
            </div>
            <div className='container form'>
                <form className='row'>
                    <input type="text" placeholder='Name' className='col-lg-2 mt-2 col-md-6' />
                    <input type="tel" placeholder='Phone' className='col-lg-2 mt-2 col-md-6' />
                    <input type="date"  className='col-lg-2 mt-2 col-md-6'/>
                    <input type="time" className='col-lg-2 mt-2 col-md-6' />
                    <select className='col-lg-2 mt-2 col-md-6'>
                        <option value="">Person</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </form>
            </div>
        </div>
    )
}
