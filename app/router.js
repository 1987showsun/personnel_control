import React            from 'react';
import { Switch,Route } from 'react-router-dom';

//Components
import Home             from './components/home';
import Chart            from './components/chart';
import Header           from './components/common/header';
import Footer           from './components/common/footer';
import Nav              from './components/common/nav';

export default class Routers extends React.Component{
    render(){
        return(
            <div id="wrapper">
                <Route component={Header} />
                <div className="container">
                    <Route component={Nav} />
                    <div className="content">
                        <Route exact={true} path="/" component={Home} />
                        <Route exact={true} path="/chart" component={Chart} />
                        <Route path="/chart/:type" component={Chart} />
                    </div>
                </div>
                <Route component={Footer} />
            </div>
        );
    }
}