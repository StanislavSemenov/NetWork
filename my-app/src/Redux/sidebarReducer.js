
let initialState = {
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

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer;