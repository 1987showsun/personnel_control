export function location( _location ){
    return(dispatch)=>{
        dispatch({
            type    : "LOCATION",
            payload : _location
        })
    }
}