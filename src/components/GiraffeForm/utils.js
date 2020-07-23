export const validateFields = fields => {
    return Object.entries(fields).reduce((errors, [name, value]) => {
        // валидация
        let error;
        // все поля обязательны
        if (!value) {
            error = 'Заполните обязательное поле';
        }
        switch (name) {
            case 'weight': {
                const weight = Number(value);
                if (weight <= 0 || weight >= 10000) {
                    error = 'Вес должен быть в диапазоне от 0 до 10000';
                }
                if (weight === 300) {
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
};

// при отправке формы трансформирует поля формы в нужный формат.
export const transformFieldsToGiraffe = fields => {
    return Object.entries(fields).reduce((errors, [fieldName, formValue]) => {
        let value;
        switch (fieldName) {
            case 'weight':
                value = Number(formValue);
                break;
            case 'sex':
                value = { male: 'М', female: 'Ж' }[formValue];
                break;
            default:
                value = formValue;
        }
        return {
            ...errors,
            [fieldName]: value
        }
    }, {});
};