import React from "react";
import styles from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import homeImg from "../../image/buttons/Home.png"
import tasksImg from "../../image/buttons/Tasks.png"
import giraffesImg from "../../image/buttons/Giraffes.png"
import staffImg from "../../image/buttons/Staff.png"
import cogImg from "../../image/buttons/Cog.png"
import supportImg from "../../image/buttons/Support.png"
import logoImg from "../../image/buttons/Giraffe-logo.png"


const NavBar = (props) => {


    return (
        <div className={ styles.navbarItems }>
            <div>
                <div className={ styles.logotext }>
                    <span>Ферма заслуженных животных России и СНГ</span>
                </div>
                <div className={ styles.logo }>
                    <NavLink to={ "/home" }>
                        <img src={ logoImg }/>
                    </NavLink>
                </div>

            </div>
            <div className={ styles.menu }>

                <NavLink to={ "/home" } activeClassName={ styles.active }>
                    <div><span><img src={ homeImg }/></span>Главная</div>
                </NavLink>


                <NavLink to={ "/tasks" } activeClassName={styles.active}>
                    <div><span><img src={ tasksImg }/></span>Управление</div>
                </NavLink>


                <NavLink to={ "/giraffes" } activeClassName={ styles.active }>
                    <div><span><img src={ giraffesImg }/></span>Жирафы</div>
                </NavLink>


                <NavLink to={ "/staff" } activeClassName={ styles.active }>
                    <div><span><img src={ staffImg }/></span>Сотрудники</div>
                </NavLink>


                <NavLink to={ "/cog" } activeClassName={ styles.active }>
                    <div><span><img src={ cogImg }/></span>Настройки</div>
                </NavLink>


                <NavLink to={"/support"} activeClassName={ styles.active }>
                    <div><span><img src={ supportImg }/></span>Поддержка</div>
                </NavLink>

            </div>

        </div>
    )

};


export default NavBar
