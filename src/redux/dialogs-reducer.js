const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [{id: 1, name: 'Alex'}, {id: 2, name: 'Eva'}, {id: 3, name: 'Kirill'}, {
        id: 4, name: 'Danil'
    }, {id: 5, name: 'Ivan'}, {id: 6, name: 'fedor'}],

        messagesData: [{id: 1, message: "Hello"}, {id: 2, message: "I'am Alex"}, {
        id: 3, message: "It developer"
    }, {id: 4, message: 'Danil'}, {id: 5, message: 'Ivan'}, {id: 6, message: 'fedor'}, {
        id: 2, message: "I'am Alex"
    }, {id: 3, message: "It developer"}, {id: 4, message: 'Danil'}, {id: 5, message: 'Ivan'}, {
        id: 6, message: 'fedor'
    }],

        newMessageText: ''

};
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 1, message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})


export default dialogsReducer;