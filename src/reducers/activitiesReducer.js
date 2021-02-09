import uuid from 'uuid/v4';

const initalState = [
    {
        id:1,
        name:"shivam vora",
        duration: "5 hours coding daily"
    }
];

const activitiesReducer = (state = initalState, action) => {
    const {type,payload} = action;

    switch(type) {
        case "CREATE_ACTIVITY":
            return [...state,{
                id: uuid(),
                name: payload.name,
                duration: payload.duration
            }]
            default:
                return state;
    }

    return state;

};

export default activitiesReducer;