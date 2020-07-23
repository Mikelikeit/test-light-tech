import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { validateFields, transformFieldsToGiraffe } from "./utils";
import styles from './GiraffeForm.module.css';

const GiraffeForm = ({ onSubmit, onCancel }) => {
    const [fields, setFields] = useState({
        name: "",
        sex: "",
        weight: "",
    });

    const [errors, setErrors] = useState({});

    const handleFieldChange = ({ target }) => {
        const { value, dataset: { fieldName } = {} } = target;
        if (fieldName) {
            setFields({ ...fields, [fieldName]: value });
        }
        delete errors[fieldName];
    };

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validateFields(fields);
        if (validationErrors && Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            const entity = transformFieldsToGiraffe(fields);
            onSubmit(entity);
        }
    };

    const handleCancelClick = e => {
        e.preventDefault();
        if (window.confirm('Вы уверены, что хотите отменить?')) {
            onCancel();
        }

    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h3 className={styles.headerText}>Жираф</h3>
            </header>

            <form onSubmit={handleSubmit}>
                <div className={styles.fieldset}>
                    <label htmlFor='form-name'>Имя</label>
                    <input
                        className={cn(styles.field, styles.input)}
                        id='form-name'
                        name="name"
                        data-field-name='name'
                        type='text'
                        value={fields.name}
                        onChange={handleFieldChange} />
                    {errors.name && <span className={styles.fieldErrorMessage}>{errors.name}</span>}
                </div>

                <div className={styles.fieldset}>
                    <label htmlFor='form-sex'>Пол</label>
                    <select
                        className={cn(styles.field, styles.select)}
                        id='form-sex'
                        name='sex'
                        data-field-name='sex'
                        value={fields.sex}
                        onChange={handleFieldChange}>
                        <option value="" disabled hidden>Выберите пол</option>
                        <option value='male'>Муж</option>
                        <option value='female'>Жен</option>
                    </select>
                    {errors.sex && <span className={styles.fieldErrorMessage}>{errors.sex}</span>}
                </div>

                <div className={styles.fieldset}>
                    <label htmlFor='form-weight'>Вес</label>
                    <input
                        className={cn(styles.field, styles.input)}
                        id='form-weight'
                        name='weight'
                        data-field-name='weight'
                        type='number'
                        value={fields.weight}
                        onChange={handleFieldChange} />
                    {errors.weight && <span className={styles.fieldErrorMessage}>{errors.weight}</span>}
                </div>

                <div className={styles.submitButtonBlock}>
                    <button type='submit'>Создать</button>
                    <button onClick={handleCancelClick}>Отменить</button>
                </div>

            </form>
        </div>
    )
};

GiraffeForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}

export default GiraffeForm;