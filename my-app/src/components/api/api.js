import *as axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:
        { "API-KEY": "b66f1fd0-6e24-4c50-b053-3202480e787e" }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
            .then(response => {

                return response.data
            })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    getProfile(userId) {
        console.warn("API.Obsolete method. Please profileAPI object")
        return profileAPI.getProfile(userId)

    }

}
export const profileAPI = {

    getProfile(userId) {
        return instance.get(`Profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }

}
