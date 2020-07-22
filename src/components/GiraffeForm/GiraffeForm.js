import React, { useState } from "react";
import cn from "classnames";

import styles from './GiraffeForm.module.css';

const validateFields = fields => {
    return Object.entries(fields).reduce((errors, [name, value]) => {
        let error;
        // Дополнительная логика валидации
        switch (name) {
            case 'weight': {
                if (Number(value) === 300) {
                    error = 'Отсоси у 🚜';
                }
                break;
            }
            default:
        }
        if (error) {
            return {
                ...errors,
                [name]: error
            }
        }
        return errors;
    }, {});
}

const CreateGiraffeForm = ({ onSubmit }) => {
    const [fields, setFields] = useState({
        name: '',
        sex: '',
        weight: '',
    });

    const [errors, setErrors] = useState({});

    const handleFieldChange = ({ target }) => {
        const { value, dataset: { fieldName } = {} } = target;
        if (fieldName) {
            let preparedValue;
            switch (fieldName) {
                case 'weight':
                    preparedValue = Number(value);
                    break;
                case 'sex':
                    preparedValue = { male: 'М', female: 'Ж' }[value];
                    break;
                default:
                    preparedValue = value;
            }
            setFields({ ...fields, [fieldName]: preparedValue });
        }
        delete errors[fieldName];
    };

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validateFields(fields);
        if (validationErrors && Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            onSubmit(fields);
        }
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h3 className={styles.headerText}>Жираф</h3>
            </header>

            <form onSubmit={handleSubmit}>
                <fieldset className={styles.fieldset}>
                    <label htmlFor='name'>Имя</label>
                    <input
                        className={cn(styles.field, styles.input)}
                        id='name'
                        name="name"
                        data-field-name='name'
                        type='text'
                        required
                        value={fields.name}
                        onChange={handleFieldChange} />
                </fieldset>

                <fieldset className={styles.fieldset}>
                    <label htmlFor='sex'>Пол</label>
                    <select
                        className={cn(styles.field, styles.select)}
                        id='sex'
                        name='sex'
                        data-field-name='sex'
                        required
                        value={fields.sex}
                        onChange={handleFieldChange}>
                        <option value='' disabled hidden>Выберите пол</option>
                        <option value='male'>Муж</option>
                        <option value='female'>Жен</option>
                    </select>
                </fieldset>

                <fieldset className={styles.fieldset}>
                    <label htmlFor='weight'>Вес</label>
                    <input
                        className={cn(styles.field, styles.input)}
                        id='weight'
                        name='weight'
                        data-field-name='weight'
                        type='number'
                        min='10'
                        max='999999'
                        required
                        value={fields.weight}
                        onChange={handleFieldChange} />
                    {errors.weight && <span className={styles.fieldError}>{errors.weight}</span>}
                </fieldset>

                <div className={styles.submitButtonBlock}>
                    <button type='submit'>Создать</button>
                </div>

            </form>
        </div>
    )
};

export default CreateGiraffeForm;