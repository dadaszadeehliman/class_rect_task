import axios from 'axios'
import { useState, useEffect } from 'react'
import Form from './form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export const Add = () => {
    const [dataget, setdataget] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/users")
            .then(res => res.json())
            .then(dataget => setdataget(dataget))
    }, [dataget])

    const elementDelete = function (id) {
        axios.delete('http://localhost:8000/users/' + id)
    }
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Add />} path='/Add' />
                </Routes>
            </BrowserRouter>
            <button className='btn btn-primary'>Add</button>
            <Form />
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>Name</th>
                        <th>About</th>
                        <th>Money</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {dataget.map(element => {
                        return (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td><img src={element.img} alt="" className='data_get_img' /></td>
                                <td>{element.Name}</td>
                                <td>{element.About}</td>
                                <td>{element.Money}</td>
                                <td><button className='btn btn-primary m-2'>Edit</button></td>
                                <td><button className='btn btn-primary m-3' onClick={() => { elementDelete(element.id) }}>Delete</button></td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>

        </div>
    )
}
