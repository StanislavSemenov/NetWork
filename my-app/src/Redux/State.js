const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, Stanislav', likesCount: '10' },
                { id: 2, message: 'Hello, Bro   ', likesCount: '15' },
            ],
            newPostText: 'New Post'
        },
        siteBar: {
            friends: [
                {
                    id: 1, nameFriend: 'Nastya', surnameFriends: 'Libackaya',
                    avaFriend: 'https://sun9-28.userapi.com/impf/c844617/v844617275/be4c4/st13HAH58Tk.jpg?size=906x1080&quality=96&sign=88e8e68b9ae5e3b49a8f9a09951b48bd&type=album'
                },
                {
                    id: 2, nameFriend: 'Ivan', surnameFriends: 'Grozny',
                    avaFriend: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/27657856_117083912442144_3005505329847811357_n.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=UW7gCMb9AUIAX80_AJr&_nc_ht=scontent-arn2-1.xx&oh=002e08715a8869fb1a66c4b606328978&oe=60570929'
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
                likesCount: 0
            };
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state)
        }


    }
}
export const addPostActionCreator = () => {
    return { type: ADD_POST }
}
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE }
}
export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export default store;