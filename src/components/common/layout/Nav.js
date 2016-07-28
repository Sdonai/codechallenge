import React from "react";
import { IndexLink, Link } from "react-router";

import SearchBox from "./Search";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/favorites/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    function isActive(path){
      return location.pathname.includes(path) ? "active" : "";
    }
    const navClass = collapsed ? "collapse" : "";
    return (


      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <Link class="navbar-brand" to="/">Code Challenge</Link>
            </div>
            
            <div class={"navbar-collapse " + navClass}>
                <ul class="nav navbar-nav">
                    <li class={isActive("about")}>
                        <Link to="about" onClick={this.toggleCollapse.bind(this)}>About</Link>
                    </li>
                </ul>
                <SearchBox inNav="true"/>
            </div>
            
        </div>
        
    </nav>
    );
  }
}
