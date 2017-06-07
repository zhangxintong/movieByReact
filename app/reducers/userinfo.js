const initialState = {}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
		case "USERINFO_UPDATE":
            return action.data
        default:
            return state
    }
}