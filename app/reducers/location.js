export default function location(
    state = {
        _location : {}
    },
    action
){
    switch (action.type) {
        case "LOCATION":
            state = { ...state, _location: action.payload }
            break;
    }
}