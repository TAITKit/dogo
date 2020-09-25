import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route } from 'react-router-dom'
import '../css/style.css';
//import Page from '../handouts/lecture7.html';
//var htmlDoc = {__html: Page};
function createMarkup() { return {__html: '<p>asdf</p>'}; };
class ArticleRender extends Component {
  render() {
		const { id } = this.props.match.params;
    return (
		
		<div dangerouslySetInnerHTML={createMarkup()} />
     );
  }
}

export default ArticleRender;
