export default function chart(
    state={
        data : {}
    },action){
    switch (action.type) {
        case "CHART_SET":
            state = { ...state , data : action.payload }
            break;
    }

    return state;
}