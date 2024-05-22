import axios from "axios"
import { useForm } from "react-hook-form"

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    axios.post("http://localhost:8000/users",data)
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Money")} />
      <input {...register("img")} />
      <input {...register("Name")} />
      <input {...register("About")} />
      <input {...register("id", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}