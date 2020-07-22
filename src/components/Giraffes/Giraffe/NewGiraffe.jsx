import React from "react";
import styles from "./Giraffe.module.css"
import {GiraffeReduxForm} from "./GiraffeForm/GiraffeForm";
import {connect} from "react-redux";
import {addName} from "../../../redux/giraffesReducer";
import cust from "../../../image/buttons/Сustomization.png";



class NewGiraffe extends React.Component {

    state = {
        editModeName: false,
        editModeSex: false,
        editModeWeight: false,
        editModeGrowth: false,
        editModeColor: false,
        editModeDiet: false,
        editModeCharacter: false,
    };

    activateEditModeName = () => {
        this.setState({
            editModeName: true
        })
    };
    deactivateEditModeName = () => {
        this.setState({
            editModeName: false
        })
    };
    activateEditModeSex = () => {
        this.setState({
            editModeSex: true
        })
    };
    deactivateEditModeSex = () => {
        this.setState({
            editModeSex: false
        })
    };
    activateEditModeWeight = () => {
        this.setState({
            editModeWeight: true
        })
    };
    deactivateEditModeWeight = () => {
        this.setState({
            editModeWeight: false
        })
    };
    activateEditModeGrowth = () => {
        this.setState({
            editModeGrowth: true
        })
    };
    deactivateEditModeGrowth = () => {
        this.setState({
            editModeGrowth: false
        })
    };
    activateEditModeColor = () => {
        this.setState({
            editModeColor: true
        })
    };
    deactivateEditModeColor = () => {
        this.setState({
            editModeColor: false
        })
    };
    activateEditModeDiet = () => {
        this.setState({
            editModeDiet: true
        })
    };
    deactivateEditModeDiet = () => {
        this.setState({
            editModeDiet: false
        })
    };
    activateEditModeCharacter = () => {
        this.setState({
            editModeCharacter: true
        })
    };
    deactivateEditModeCharacter = () => {
        this.setState({
            editModeCharacter: false
        })
    };

    render() {

        let addNewName = (values) => {
            this.props.addName(values.newName)
        };

        return (
            <div className={ styles.girItem }>
                <div className={ styles.girButton }>
                    <button className={ styles.customizationButton } onClick={()=> { alert("ничего не происходит) жмите у других жирафов") }}><img src={ cust }/></button>
                </div>

                <GiraffeReduxForm
                    { ...this.props }
                    onSubmit={ addNewName }
                    { ...this.state }
                    activateEditModeName={ this.activateEditModeName }
                    deactivateEditModeName={ this.deactivateEditModeName }
                    activateEditModeSex={ this.activateEditModeSex }
                    deactivateEditModeSex={ this.deactivateEditModeSex }
                    activateEditModeWeight={ this.activateEditModeWeight }
                    deactivateEditModeWeight={ this.deactivateEditModeWeight }
                    activateEditModeGrowth={ this.activateEditModeGrowth }
                    deactivateEditModeGrowth={ this.deactivateEditModeGrowth }
                    activateEditModeColor={ this.activateEditModeColor }
                    deactivateEditModeColor={ this.deactivateEditModeColor }
                    activateEditModeDiet={ this.activateEditModeDiet }
                    deactivateEditModeDiet={ this.deactivateEditModeDiet }
                    activateEditModeCharacter={ this.activateEditModeCharacter }
                    deactivateEditModeCharacter={ this.deactivateEditModeCharacter }
                />
            </div>
        )


    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addName: (newName) => {
            dispatch(addName(newName))
        }
    }
};

let mapStateToProps = (state) =>{
    return{
        newgiraffes: state.giraffes.newgiraffes
    }
};


export default connect (mapStateToProps, mapDispatchToProps)(NewGiraffe)
