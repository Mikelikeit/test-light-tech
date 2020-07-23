import React, { useState } from "react";
import styles from "./Giraffes.module.css"
import Giraffe from "./Giraffe/Giraffe";
import plusImg from "../../image/buttons/plus.png"
// import NewGiraffe from "./Giraffe/NewGiraffe";
import GiraffeForm from "../GiraffeForm/GiraffeForm";


const Giraffes = (props) => {
    const [isFormVisible, setFormVisible] = useState(false);
    let GiraffesElements = props.giraffes.map((giraffe, g) => {
        return (
            <div className={styles.gElement}>
                <Giraffe deleteGiraffe={props.deleteGiraffe} key={g} id={giraffe.id} photo={giraffe.photo} name={giraffe.name} sex={giraffe.sex} weight={giraffe.weight}
                    growth={giraffe.growth} color={giraffe.color} diet={giraffe.diet}
                    character={giraffe.character} />
            </div>
        )
    });

    const handleAddClick = () => {
        setFormVisible(true);
    }

    const onSubmit = (entity) => {
        props.addNewGiraffe(entity);
        setFormVisible(false);
    }

    return (
        <div className={styles.giraffes}>
            <div>
                <span className={styles.plusText}>Жирафы  </span>
                <button className={styles.plus} onClick={handleAddClick}>
                    <img src={plusImg} />
                </button>
            </div>
            <div className={styles.giraffesElements}>
                {isFormVisible && (
                    <div className={styles.gElement}>
                        <GiraffeForm onSubmit={onSubmit} onCancel={() => setFormVisible(false)}/>
                    </div>
                )}
                {GiraffesElements}
            </div>
        </div>
    )
};

export default Giraffes
