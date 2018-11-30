import axios from 'axios';
import api   from './api';

export function chart(type){
    return(dispatch)=>{
        const url = api().apiUri[type];
        getData(url).then(res=>{
            dispatch({
                type    : "CHART_SET",
                payload : res['data'][type]
            })
        });
    }
}

const getData = ( url,query ) => {
    return axios.get(url)
}