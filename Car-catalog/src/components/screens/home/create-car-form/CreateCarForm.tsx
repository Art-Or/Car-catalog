import styles from "./CreateCarForm.module.css"
import { useState } from "react"
import {useForm} from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CarService } from "../../../../services/car.service"
import ErrorMessage from "./ErrorMessage"
import { useCreateCar } from "./useCreateCar"
import { ICarData } from "../../../../types/car.interface"

const clearData = {
    name: "",
    price: "",
    image: "",
}


const CreateCarForm = () => {
    const [data, setData] = useState(clearData)

    const {register, reset, handleSubmit, formState: {errors}} = useForm<ICarData>({
        mode: "onChange"
    })
    
    const {createCar} = useCreateCar(reset)

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input 
                {...register("name", {required: "Name is required!"})}
                placeholder="Name" 
            />

            <ErrorMessage error={errors?.name?.message}/>
            
            <input 
                {...register("price", {required: true})}
                placeholder="Price"
            />

            <input 
                {...register("image", {required: true})}
                placeholder="Image"
            />

            <button className="btn">Create</button>
        </form>
    )
}

export default CreateCarForm