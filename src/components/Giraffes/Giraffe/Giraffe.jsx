import React from "react";
import styles from "./Giraffe.module.css"
import cust from "../../../image/buttons/Сustomization.png"
import infoSexImg from "../../../image/info/sex.png"
import infoWeightImg from "../../../image/info/weight.png"
import infoGrowthImg from "../../../image/info/growth.png"

const Giraffe = (props) => {
    return (
        <div className={ styles.girItem }>
            <div className={ styles.girButton }>
                <button className={ styles.customizationButton } onClick={() => {
                    props.deleteGiraffe(props.id)
                }}><img src={ cust }/></button>
            </div>
            <div >
                <div className={ styles.girInfoItem }><img src={props.photo}/></div>
                <div className={ styles.nameGiraffe }>{ props.name }</div>
                <div><span className={ styles.infoSexImg }><img src={ infoSexImg }/></span>
                    <span className={ styles.infoWeightImg }><img src={ infoWeightImg }/></span>
                    <span><img src={ infoGrowthImg }/></span></div>
                <div className={ styles.infoStats }><span className={ styles.infoSex }>{ props.sex }</span>
                    <span className={ styles.infoWeight }>{ props.weight }</span><span>{ props.growth }</span></div>
                <div className={ styles.infoText }>
                    <div className={ styles.infoColor }><span className={ styles.color }>Цвет: </span><span>{ props.color }</span></div>
                    <div className={ styles.infoDiet }><span className={ styles.diet }>Диета: </span><span>{ props.diet }</span></div>
                    <div><span className={ styles.character }>Характер: </span><span>{ props.character }</span></div>
                </div>
            </div>
        </div>
    )

};


export default Giraffe
