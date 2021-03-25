const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Stas' },
        { id: 2, name: 'Slava' },
        { id: 3, name: 'Stason' }
    ],

    messages: [
        { id: 1, message: 'Hi', likesCount: '10' },
        { id: 2, message: 'Yo', likesCount: '15' },
        { id: 3, message: 'Yo', likesCount: '15' },
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.message
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: text, likesCount: 0 }]
            }

        default:
            return state;
    }
}

export const addMessageActionCreator = (message) => {
    return { type: ADD_MESSAGE, message }
}


export default dialogsReducer;