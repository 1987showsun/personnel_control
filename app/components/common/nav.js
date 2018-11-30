import React       from 'react';
import { Link }    from 'react-router-dom';

import './stylesheets/nav.scss';

export default class Layout extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            location : props.location
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            location : nextProps.location
        })
    }

    render(){
        const location = this.state.location['pathname'].split('/');

        return(
            <nav>
                <ul className="main_nav_nl">
                    <li className={ location[2]==undefined ? 'active' : '' }><Link to="/">Home</Link></li>
                    <li className={ location[2]=='building'? 'active' : '' }><Link to="/chart/building">Building</Link></li>
                    <li className={ location[2]=='company' ? 'active' : '' }><Link to="/chart/company">Company</Link></li>
                </ul>
            </nav>
        );
    }
}