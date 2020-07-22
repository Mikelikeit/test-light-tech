import React from "react";
import styles from "./Giraffes.module.css"
import Giraffe from "./Giraffe/Giraffe";
import plusImg from "../../image/buttons/plus.png"
import NewGiraffe from "./Giraffe/NewGiraffe";


const Giraffes = (props) => {
    let GiraffesElements = props.giraffes.map((giraffe, g) => {
        return (
            <div className={ styles.gElement }>
                <Giraffe deleteGiraffe={ props.deleteGiraffe } key={ g } id={ giraffe.id } photo={ giraffe.photo } name={ giraffe.name } sex={ giraffe.sex } weight={ giraffe.weight }
                         growth={ giraffe.growth } color={ giraffe.color } diet={ giraffe.diet }
                         character={ giraffe.character }/></div>
        )
    });

    let NewGiraffesElements = props.newgiraffes.map((giraffe, g) => {
        return (
            <div className={ styles.gElement }>
                <NewGiraffe  key={ g } id={ giraffe.id } name={ giraffe.name } sex={ giraffe.sex } weight={ giraffe.weight }
                            growth={ giraffe.growth } color={ giraffe.color } diet={ giraffe.diet }
                            character={ giraffe.character }/></div>
        )
    });


    return (
        <div className={ styles.giraffes }>
            <div>
                <span className={ styles.plusText }>Жирафы  </span>
                <button className={ styles.plus } onClick={() => {
                    props.addNewGiraffe()
                }}><img src={ plusImg }/></button>
            </div>
            <div className={ styles.giraffesElements }>
                { NewGiraffesElements }
                { GiraffesElements }
            </div>
        </div>
    )
};

export default Giraffes
