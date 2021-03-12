const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {

    posts: [
        { id: 1, message: 'Hi, Stanislav', likesCount: '10' },
        { id: 2, message: 'Hello, Bro   ', likesCount: '15' },
    ],
    newPostText: 'New Post',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    debugger
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
        case SET_USER_PROFILE:
            debugger
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })



export default profileReducer;