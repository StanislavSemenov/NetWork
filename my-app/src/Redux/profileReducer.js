import { profileAPI, usersAPI } from "../components/api/api"
import { outMessagesServer } from "./authReducer"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS'

let initialState = {

    posts: [
        { id: 1, message: 'Hi, Stanislav', likesCount: '10' }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 3, message: action.newPost, likesCount: 0 }]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        case SAVE_PROFILE_SUCCESS:
            debugger
            return {
                ...state,
                profile: { ...state.profile, profile: action.profile }
            }

        default:
            return state;
    }
}
export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const setPhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const setProfileSuccess = (profile) => ({ type: SAVE_PROFILE_SUCCESS, profile })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))

}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}
export const setProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    debugger
    let response = await profileAPI.saveProfile(profile)
    debugger
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
        dispatch(outMessagesServer(null))
    }
    else {
        dispatch(outMessagesServer(response.data.messages))
    }

}
export default profileReducer;