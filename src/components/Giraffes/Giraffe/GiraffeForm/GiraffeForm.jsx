import React from "react";
import {Field, Form, reduxForm} from "redux-form";
import photoNew from "../../../../image/users/newgiraffe.png"


const GiraffeForm = (props) => {
    return(
        <div>
            <Form onSubmit={ props.handleSubmit }>

                <div><img src={ photoNew }/></div>
            {
                !props.editModeName &&
                <div><span onDoubleClick={ props.activateEditModeName }>{ props.name }</span></div>
            }
            {
                props.editModeName &&
                <div><Field component={ "input" } name={ "newName" } placeholder={ "Введите имя" } autoFocus={ true } onBlur={ props.deactivateEditModeName }/></div>
            }

           {
                !props.editModeSex &&
                <div><span>Пол: </span><span onDoubleClick={ props.activateEditModeSex }> - </span></div>
            }
            {
                props.editModeSex &&
                <div><span>Пол: </span><Field component={ "input" } name={ "sex" } placeholder={ "Укажите пол" } autoFocus={ true } onBlur={ props.deactivateEditModeSex }/></div>
            }
            {
                !props.editModeWeight &&
                <div><span>Вес: </span><span onDoubleClick={props.activateEditModeWeight}> - </span></div>
            }
            {
                props.editModeWeight &&
                <div><span>Вес: </span><Field component={ "input" } name={ "weight" } placeholder={ "Укажите вес" } autoFocus={ true } onBlur={ props.deactivateEditModeWeight }/></div>
            }
            {
                !props.editModeGrowth &&
                <div><span>Рост: </span><span onDoubleClick={ props.activateEditModeGrowth }> - </span></div>
            }
            {
                props.editModeGrowth &&
                <div><span>Рост: </span><Field component={ "input" } name={ "growth" } placeholder={ "Укажите рост" } autoFocus={ true } onBlur={ props.deactivateEditModeGrowth }/></div>
            }
            {
                !props.editModeColor &&
                <div><span>Цвет: </span><span onDoubleClick={props.activateEditModeColor}> - </span></div>
            }
            {
                props.editModeColor &&
                <div><span>Цвет: </span><Field component={ "input" } name={ "color" } placeholder={ "Укажите цвет" } autoFocus={ true } onBlur={ props.deactivateEditModeColor }/></div>
            }
            {
                !props.editModeDiet &&
                <div><span>Диета: </span><span onDoubleClick= {props.activateEditModeDiet }> - </span></div>
            }
            {
                props.editModeDiet &&
                <div><span>Диета: </span><Field component={ "input" } name={ "diet" } placeholder={ "Укажите диету" } autoFocus={ true } onBlur={ props.deactivateEditModeDiet }/></div>
            }
            {
                !props.editModeCharacter &&
                <div><span>Характер: </span><span onDoubleClick={props.activateEditModeCharacter}> - </span></div>
            }
            {
                props.editModeCharacter &&
                <div><span>Характер: </span><Field component={ "input" } name={ "character" } placeholder={ "Укажите характер" } autoFocus={ true } onBlur={ props.deactivateEditModeCharacter }/></div>
            }
            </Form>
        </div>
    )
};

export const GiraffeReduxForm = reduxForm ({ form: "newgiraffe" })(GiraffeForm);

