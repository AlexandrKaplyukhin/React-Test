const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts: [{id: 0, message: 'Hello', like: '15'},
        {id: 1, message: 'Alex team', like: '20'},
        {id: 0, message: 'Hello', like: '15'},
        {id: 1, message: 'Alex team', like: '20'},
        {id: 0, message: 'Hello', like: '15'}, {id: 1,
            message: 'Alex team',
            like: '20'
        }, {id: 0, message: 'Hello', like: '15'}, {id: 1, message: 'Alex team', like: '20'},],
        newPostText: 'Alex the best',
};
const profileReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, message: state.newPostText, like: 0
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;

        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

    export default profileReducer;