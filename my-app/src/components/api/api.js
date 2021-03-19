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
        return instance.get(`Profile/${userId}`)

    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }

}
