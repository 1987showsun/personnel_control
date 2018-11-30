import React            from 'react';
import { connect }      from 'react-redux';

//Actions
import { location }     from '../../actions/location';

@connect((state,props)=>{
    return{
    }
})

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            location : props.location
        }
    }

    componentDidMount() {
        this.props.dispatch( location( this.props.location ) );
    }

    render(){
        return(
            <div>
                home
            </div>
        );
    }
}