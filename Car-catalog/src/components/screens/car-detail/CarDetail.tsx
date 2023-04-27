import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import CarItem from "../home/car-item/CarItem";
import { CarService } from "../../../services/car.service";
import { ICar } from "../../../types/car.interface";

const CarDetail = () => {
    const {id} = useParams()
    const [car, setCar] = useState<ICar>({} as ICar);

    useEffect(() => {
        if (!id) return

        const fetchData = async () => {
          const data = await CarService.getById(id)
        
          setCar(data)
        }
    
        fetchData()
    }, [id])

// enabled

    if (!car?.name) return <p>Loading...</p>

    return (
      <div>
        <Link to="/">Back</Link>
        <CarItem car={car}/>
      </div>
    )
}

export default CarDetail