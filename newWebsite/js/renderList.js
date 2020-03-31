//document.getElementById("myFrame").onload = function() {myFunction()};


handout_list = JSON.parse(data);



function createList() {

  var cardLists = document.getElementById("cardLists");
  var menu = document.getElementById("menu");
  //var child = document.getElementById("p1");
  //element.insertBefore(para, child);
  /*<div class="card mt-1" id="list-item-1" >
    <div class="card-body">
      <h5 class="card-title">Lecture 7: Backpropagation</h5>
      <h6 class="card-subtitle mb-2 text-muted">李宏毅</h6>
      <p class="card-text"></p>
      <a href="./handouts/lecture7.html" class="card-link">Handout</a>
      <a href="#" class="card-link">Video</a>
    </div>
  </div>*/

  console.log("--starting create cards element--");
  for(var i = 0; i < handout_list.length; i++){
    var card = document.createElement("div");
    if(i == 0)
      card.className = "card mt-1";
    else
      card.className = "card mt-3";
    card.style = "width: 33rem";
    card.id = "list-item-" + (i + 1);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = handout_list[i].title;
    cardBody.appendChild(cardTitle);

    var cardSubtitle = document.createElement("h6");
    cardSubtitle.className = "card-subtitle mb-2 text-muted";
    cardSubtitle.textContent = handout_list[i].subtitle;
    cardBody.appendChild(cardSubtitle);

    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = handout_list[i].content;
    cardBody.appendChild(cardText);

    for(var j = 0; j < handout_list[i].url_list.length; j++) {
      var a = document.createElement("a");
      a.className = "card-link";
      data_category = handout_list[i].url_list[j].url_type;
      a.textContent = data_category;
      a.setAttribute("data-category", data_category);
      a.setAttribute("data-label", handout_list[i].title);
      a.href = handout_list[i].url_list[j].url;
      cardBody.appendChild(a);
    }
    cardLists.appendChild(card);

    //<a class="list-group-item list-group-item-action" href="#list-item-1">Lecture 7: Backpropagation</a>
    var menu_a = document.createElement("a");
    menu_a.className = "list-group-item list-group-item-action";
    menu_a.href = "#list-item-" + (i + 1);
    menu_a.innerHTML = handout_list[i].title;
    menu.appendChild(menu_a);
  }
}