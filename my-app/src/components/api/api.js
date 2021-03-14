import *as axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:
        { "API-KEY": "b66f1fd0-6e24-4c50-b053-3202480e787e" }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                return response.data
            })
    },

    unfollowPromise(userId) {

        return instance.delete(`follow/${userId}`,
            {
                withCredentials: true
            })
            .then(response => {
                return response.data
            })

    },

    followPromise(userId) {

        return instance.post(`follow/${userId}`, {},
            {
                withCredentials: true
            })
            .then(response => {

                return response.data
            })

    }
}