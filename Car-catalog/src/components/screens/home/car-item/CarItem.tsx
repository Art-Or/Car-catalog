import { Link } from "react-router-dom"
import styles from "../Home.module.css"
import { ICar } from "../../../../types/car.interface"

function CarItem ({car}: {car: ICar}) {
    return (
        <div className={styles.item}>
                <div
                  className={styles.image}
                  style={{
                      backgroundImage: `url(${car.image})`,
                  }}
                >
                </div>
                <div className={styles.info}>
                  <h2>{car.name}</h2>
                  <p>{new Intl.NumberFormat('en-Us', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(+car.price)}</p>
                  <Link className="btn" to={`/car/${car.id}`}>Read More</Link>
                </div>  
            </div>
    )
}

export default CarItem