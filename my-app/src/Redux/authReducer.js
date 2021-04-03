import { authAPI } from "../components/api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const OUT_MESSAGES_SERVER = 'OUT_MESSAGES_SERVER'

let initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
    messagesServer: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data
            }


        case OUT_MESSAGES_SERVER:
            return {
                ...state,
                messagesServer: action.messagesServer
            }
        default:
            return state;
    }
}

export const outMessagesServer = (messagesServer) => ({ type: OUT_MESSAGES_SERVER, messagesServer })
export const setAuthUserData = (email, userId, login, isAuth) =>
    ({ type: SET_USER_DATA, data: { email, userId, login, isAuth } })




export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data
        dispatch(setAuthUserData(email, id, login, true))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
        dispatch(outMessagesServer(null))
    }
    else {
        dispatch(outMessagesServer(response.data.messages))
    }

}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;