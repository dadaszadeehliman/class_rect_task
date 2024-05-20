import React from 'react'

export const Section = () => {
    return (
        <div  className='cotainer section_esas'>
            <div className='button'>
                <button className='btn  btn-primary'>Book a table</button>
            </div>
            <div className='container form'>
                <form>
                    <input type="text" placeholder='Name' />
                    <input type="tel" placeholder='Phone' />
                    <input type="date" />
                    <input type="time" />
                    <select>
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
