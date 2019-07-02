import {ADD_PLACE, SELECT_PLACE, DELETE_PLACE, UNSELECT_PLACE} from "../acrions/actionType";

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri: "https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg"
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place=>{
                    return place.key === action.key;
                })
            };
        case UNSELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        default:
            return state;
    }
};
export default reducer;