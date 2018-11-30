import React            from 'react';
import { connect }      from 'react-redux';
import { Bar }          from 'react-chartjs-2';

//Components
import Building         from './building';
import Company          from './company';

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
            location : props.location,
            match    : props.match
        }
    }

    componentDidMount() {
        this.props.dispatch( location(this.state.location) );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            location : nextProps.location,
            match    : nextProps.match
        },()=>{
            this.props.dispatch( location(this.state.location) );
        })
    }

    render(){        
        const type         = this.state.match['params']['type'] || "building";
        let   SelectedView;
        switch ( type ) {
            case 'building':
                SelectedView  = Building;
                break;
            
            case 'company':
                SelectedView  = Company;
                break;
        
            default:
                SelectedView  = Building;
                break;
        }

        return(<SelectedView type={type} />);
    }
}