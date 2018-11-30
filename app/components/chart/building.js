import React            from 'react';
import { connect }      from 'react-redux';
import { Bar }          from 'react-chartjs-2';

//Actions
import { chart }        from '../../actions/chart';

@connect((state,props)=>{
    return{
        data : state.chart.data
    }
})

export default class Building extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            type : props.type,
            data : {
                labels : [],
                datasets : [
                    {
                        label           : "",
                        backgroundColor : '',
                        data            : []
                    }
                ]
            }
        }
    }

    componentDidMount() {
        this.props.dispatch( chart(this.state.type) );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            type  : nextProps.type,
            data  : nextProps.data
        })
    }

    render(){
        return(
            <div className="content_block">
                <div className="block_title">
                    <h3>Building</h3>
                </div>
                <div className="block max_height">
                    <div className="block_title">
                        <h3>Number of guest logins</h3>
                    </div>
                    <Bar 
                        lavel="HTML"
                        data    = { this.state.data }
                        options = {{ 
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            </div>
        );
    }
}