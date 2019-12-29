import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import "../css/style.css";
import logo from "../logo1.png";
import HomeRender from "../components/HomeRender" 
import ArticleRender from "../components/ArticleRender" 
import Articles from "../containers/Articles" 
export default class Blog extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light static-top primary">
			   <a class="navbar-brand" href="#">
					 <img src={logo} class="logo"  alt=""/>
				   </a>
				   <ul class="navbar-nav ml-auto mr-sm-4">
                     <li class="nav-item"><a class="nav-link" href=""><NavLink to="/home">機器學習講義</NavLink> </a></li>
                     <li class="nav-item"><a class="nav-link" href=""><NavLink to="/articles">機器學習資料源</NavLink> </a></li>
				   </ul>
		   </nav>
                
                {/* <!-- END .header --> */}
                <Switch>
                    <Route exact path="/articles" component={Articles} />
                    <Route path="/articles/:id?" component={ArticleRender} />
                    <Route path="/home" component={HomeRender} />
                    <Redirect from="/" to="/home" />
                </Switch>

            </div>
        );
    }
}
