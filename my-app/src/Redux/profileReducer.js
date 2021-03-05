const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {

    posts: [
        { id: 1, message: 'Hi, Stanislav', likesCount: '10' },
        { id: 2, message: 'Hello, Bro   ', likesCount: '15' },
    ],
    newPostText: 'New Post'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 3, message: state.newPostText, likesCount: 0 }]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return { type: ADD_POST }
}
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}


export default profileReducer;