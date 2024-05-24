import axios from "axios"
import { useForm } from "react-hook-form"
import { useState } from "react"

export default function Form() {
  const [dataimg, setdataimg] = useState(null)
  const hanleimmageChange=(file)=>{

    if(!file) return;
      const reader=new FileReader();
      reader.readAsDataURL(file) ;
      reader.onload=(e)=>setdataimg(reader.result)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    axios.post("http://localhost:8000/users", {...data, img : dataimg});
    reset()
  };
  return (

    <form onSubmit={handleSubmit(onSubmit)}>    
      <input type="file" name="image"  onChange={(e)=>hanleimmageChange(e.target.files[0])} />
      <input {...register("id")} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input {...register("Name")} />
      <input {...register("About")} />
      <input {...register("Money", { required: true })} />
      <input type="submit" />
    </form>
  )
}