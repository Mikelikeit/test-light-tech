import photo1 from "../image/users/motilda.png"
import photo2 from "../image/users/goga.png"
import photo3 from "../image/users/shnur.png"
import photo4 from "../image/users/leonid.png"


const ADD_NEW_GIRAFFE = "ADD_NEW_GIRAFFE";
const ADD_NAME = "ADD_NAME";
const DELETE_GIRAFFE = "DELETE_GIRAFFE";

const initialState = {
    giraffes: [
        {
            id: 1, photo: photo1, name: "Мотильда", sex: "Ж", weight: "800",
            growth: "4", color: "Стандарт", diet: "Раститльная",
            character: "Кокетка"
        },
        {
            id: 2, photo: photo2, name: "Гога", sex: "М", weight: "900",
            growth: "4,9", color: "Жирафовый", diet: "Шашлычная",
            character: "Вспыльчивый"
        },
        {
            id: 3, photo: photo3, name: "Шнур", sex: "М", weight: "800",
            growth: "5,7", color: "Нездоровый", diet: "Жвачная",
            character: "Хулиган"
        },
        {
            id: 4, photo: photo4, name: "Леонид", sex: "М", weight: "1000",
            growth: "6", color: "Леонидовый", diet: "Ест детей",
            character: "Нарцисс"
        },
    ]
}


const giraffesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_GIRAFFE:
            return {
                ...state,
                giraffes: [action.payload, ...state.giraffes]
            };
        //addName не работает, буду решать вопрос
        case ADD_NAME:
            let newName = action.newName
            return {
                ...state,
                newgiraffes: { ...state.newgiraffes, name: newName }

            };
        case DELETE_GIRAFFE:
            return {
                ...state,
                giraffes: state.giraffes.filter(({ id }) => id !== action.userId)
            };


        default:
            return state
    }

}

export const addNewGiraffe = (entity, getState) => {
    // нужно добавить в entity поле id
    return {
        type: ADD_NEW_GIRAFFE,
        payload: entity
    };
};
export const addName = (newName) => ({ type: "ADD_NAME", newName });
export const deleteGiraffe = (userId) => ({ type: "DELETE_GIRAFFE", userId });


export default giraffesReducer