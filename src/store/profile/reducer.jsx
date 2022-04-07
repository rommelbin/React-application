const initialState = {
    showName: false,
    name: 'Default'
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case action.type:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}
export default profileReducer