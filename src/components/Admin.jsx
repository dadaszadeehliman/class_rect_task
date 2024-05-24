import { useEffect, useState } from 'react'
import Form from './form'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const Admin = () => {
    const [tabledata, settabledata] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(res => res.json())
            .then(tabledata => settabledata(tabledata))
    }, [])
     
    const getDelete=function(id){
        axios.delete('http://localhost:8000/users/'+id)
    }

    return (
        <div>
            <button>Add</button>
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
                    {tabledata.map(element => {
                        return (
                            <tr key={element.id}>
                                <th>{element.id}</th>
                                <th><img src={element.img} alt="" className='admin_img' /></th>
                                <th>{element.Name}</th>
                                <th>{element.About}</th>
                                <th>{element.Money}</th>
                                <th><Link to='/Edit'><button className='btn btn-primary m-3'>Edit</button></Link></th>
                                <th><button className='btn btn-primary m-3' onClick={()=>getDelete(element.id)}>Delete</button></th>
                            </tr>
                        ) })}
                </tbody>
            </table>
      
   

        </div>
    )
}
