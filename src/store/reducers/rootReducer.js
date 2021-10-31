const intState = {
    users: [
        { id: 1, name: 'ABC' },
        { id: 2, name: 'ABC23' },
    ],
    post: []
}

const rootReducer = (state = intState, action) => {  // state: trang thai cua Redux chu khong phai trang thai cua React

    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000);
            let user = { id: id, name: `random ${id}` }
            return {
                ...state, users: [...state.users, user]
            };
        default:
            return state;
    }


}

export default rootReducer;