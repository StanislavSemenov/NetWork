const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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
    ],
    newMessageText: 'New Message'
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 4, message: text, likesCount: 0 }]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE }
}
export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export default dialogsReducer;