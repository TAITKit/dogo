//document.getElementById("myFrame").onload = function() {myFunction()};


//handout_list = JSON.parse(data);
//handout_list = [{"title":"CNN","subtitle":"","content":"","url_list":[{"url_type":"example code","url":"https://https://github.com/keras-team/keras/blob/master/examples/mnist_cnn.py"}]},
//{"title":"autoencoder","subtitle":"","content":"","url_list":[{"url_type":"example code","url":"https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1"}]}]
handout_list = [{"title":"Tensorflow 30天學習筆記","subtitle":"外部參考資料","content":"","url_list":[{"url_type":"英文連結","url":"https://ithelp.ithome.com.tw/users/20103494/ironman/1231?page=1"}]},
{"title":"100-Days-of-ML-Code","subtitle":"外部參考資料","content":"","url_list":[{"url_type":"英文連結","url":"https://github.com/Avik-Jain/100-Days-Of-ML-Code"}]},
{"title":"Machine Learning is Fun!","subtitle":"外部參考資料","content":"","url_list":[{"url_type":"英文連結","url":"https://medium.com/@ageitgey/machine-learning-is-fun-80ea3ec3c471"}]},
{"title":"PaddlePaddle","subtitle":"外部參考資料","content":"","url_list":[{"url_type":"PaddleGAN","url":"https://github.com/PaddlePaddle/PaddleGAN"}, {"url_type":"詞法分析", "url":"https://nlp.baidu.com/homepage/nlptools/document?f=词法分析"}, {"url_type":"文本情感分類","url":"https://nlp.baidu.com/homepage/nlptools/document?f=文本情感分类"}]},
{"title":"Github 教學","subtitle":"外部參考資料","content":"","url_list":[{"url_type":"英文連結","url":"https://github.com/wepe/MachineLearning"}]},
{"title":"數字辨識Demo","subtitle":"","content":"","url_list":[{"url_type":"示範頁面","url":"demo.html"}, {"url_type":"示範程式碼","url":"https://github.com/keras-team/keras/blob/master/examples/mnist_cnn.py"}]},
{"title":"句子相似度計算","subtitle":"","content":"","url_list":[{"url_type":"示範頁面","url":"demo1.html"}, {"url_type":"示範程式碼","url":"https://engineering.fb.com/ai-research/laser-multilingual-sentence-embeddings/"}]},
{"title":"語音風格轉換Demo","subtitle":"","content":"","url_list":[{"url_type":"示範頁面","url":"voice.html"}]}]


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
    card.style = "";
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
