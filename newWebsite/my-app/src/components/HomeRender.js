import React, { Component } from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, CardLink
  } from 'reactstrap';
import '../css/style.css';
import '../css/bootstrap.css';
function handoutObj(title, subtitle, content, url_list) {
	this.title = title;
	this.subtitle = subtitle;
	this.content = content;
	this.url_list = url_list;
 }
function urlObj(url_type, url) {
	this.url_type = url_type;
	this.url = url;
}
  const template_content  = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."; 
  
  var handout_list = [
	new handoutObj("Lecture 7: Backpropagation", "李宏毅", "", [new urlObj("Handout", "./handouts/lecture7.html"), new urlObj("Video", "")]),
	new handoutObj("Lecture 8: Backpropagation", "李宏毅", "", [new urlObj("Handout", "./handouts/lecture7.html"), new urlObj("Video", "")]),
	new handoutObj("Lecture 7: Backpropagation", "李宏毅", "", [new urlObj("Handout", "./handouts/lecture7.html"), new urlObj("Video", "")]),
	new handoutObj("Lecture 7: Backpropagation", "李宏毅", "", [new urlObj("Handout", "./handouts/lecture7.html"), new urlObj("Video", "")]),
	new handoutObj("Lecture 7: Backpropagation", "李宏毅", "", [new urlObj("Handout", "./handouts/lecture7.html"), new urlObj("Video", "")])
  ];

class HomeRender extends Component {
  render() {
    return (
		<div class="container">
		{/*<!-- Navigation -->*/}
	
	   
		   <p className="mt-4">- 版權屬於講師所有 勿任意轉載、散佈、更改 引用請知會版權擁有權人 -</p>
  
	   <div class="row">
		  
		  <div class="col-7 ml-4 mt-1">
			 <div data-spy="scroll" data-target="#myScrollspy" data-offset="0"
				   style={{height: 40 + 'rem', overflowY: 'scroll', padding: '5px'}}>

				
				{handout_list.map(e => 
				<Card className = "mt-3" style={{ width: '30rem' }}>
					<CardBody>
						<CardTitle style={{fontSize: "20px"}}><b>{e.title}</b></CardTitle>
						<CardSubtitle className="mb-2 text-muted"><b>{e.subtitle}</b></CardSubtitle>
						<CardText> </CardText>
						{e.url_list.map(u => <CardLink href={u.url}>{u.url_type}</CardLink>)}
					</CardBody>
				</Card>  
				  )}
			 </div>
		  </div>
		  <div class="col mr-4 mt-4">
			 <nav id="myScrollspy">
				<div class="list-group">
					<a class="list-group-item list-group-item-action" href="#list-item-1">Lecture 7: Backpropagation</a>
					<a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
					<a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
					<a class="list-group-item list-group-item-action" href="#list-item-4">Item 3</a>
					<a class="list-group-item list-group-item-action" href="#list-item-5">Item 3</a>
				</div>
			 </nav>
		   </div>
		</div>
	   </div>
  
     );
  }
}

export default HomeRender;