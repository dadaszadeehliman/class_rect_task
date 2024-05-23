import axios from "axios"
import { useForm } from "react-hook-form"
import { useState } from "react"

export default function Form() {
  const [dataimg, setdataimg] = useState(null)
  const hanleimmageChange=(event)=>{
    if(event.target.files && event.target.files[0]){
      const reader=new FileReader();
      reader.onload=(e)=>setdataimg(e.target.files[0])
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    const formData=new FormData();
    formData.append("id", data.id)
    formData.append("Name", data.Name)
    formData.append("About", data.About)
    formData.append("Money", data.Money)

    if(dataimg){
      formData.append('img', previewImage)
    }


    axios.post("http://localhost:8000/users", formData, {
      headers:{
        "Content-Type":"application/json",
      },
    });
    reset()
  };
  return (

    <form onSubmit={handleSubmit(onSubmit)}>    
      <input type="file" name="image" id={image} onChange={hanleimmageChange} />
      <input {...register("id")} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input {...register("Name")} />
      <input {...register("About")} />
      <input {...register("Money", { required: true })} />
      <input type="submit" />
    </form>
  )
}