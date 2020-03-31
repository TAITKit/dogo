//var data = require('https://taitk.org/api/algorithms')
//console.log(data)
var GlobalKeywordObj = {}, GlobalSelectObj = {}, GlobalID = {};

function parseID() {
    $.getJSON('https://taitk.org/api/algorithms', function(algorithms) {
        //console.log("parseID:", algorithms);
        //console.log(data);
        GlobalID = algorithms;
        parseKeywordandContent();
    });
}

function parseKeywordandContent () {
    for(var i = 0; i < GlobalID.length; i++) {
        $.getJSON('https://taitk.org/api/algorithms/' + GlobalID[i].id, function(subdata) {
            console.log(subdata.data)
            
            var content = subdata.data;
            createCard(content.title, content.authors, content.unit, content.description, content.links, content.datasets, 1);

            //One ID one tag
            rawkeywords = subdata.data.tags;
            for(var x = 0; x < rawkeywords.length; x++) {
                temp = rawkeywords[x].tag
                temp = keywordAlias(temp)
                if(!GlobalKeywordObj.hasOwnProperty(temp)) {
                    createKeyword(temp, 1);
                    GlobalKeywordObj[temp] = 1;
                } 
            }
            
            //One ID multiple category
            //TODO: split the category by comma, also, the 32th category is blank (remove ID: 18)
            rawkeywords = subdata.data.category
            rawkeywords = rawkeywords.split(', ');
            //console.log(temp)
            for(var x = 0; x < rawkeywords.length; x++) {
                temp = rawkeywords[x]
                temp = keywordAlias(temp)
                if(!GlobalKeywordObj.hasOwnProperty(temp)) {
                    createKeyword(temp, 1);
                    GlobalKeywordObj[temp] = 1;
                } 
            }
        });
    }
}

function keywordAlias(keyword) {
    if(keyword == "CNN"){
        return "Convolutional Neural Network"
    }
    else if(keyword == "" || keyword == "機器學習與深度學習 Machine Learning & Deep Learning"){
        return "Machine Learning & Deep Learning"
    }
    else if(keyword == "自然語言處理 Natural Language Processing"){
        return "Natural Language Processing"
    }
    else if(keyword == "NLP" || keyword == "NLP "){
        return "Natural Language Processing"
    }
    else if(keyword == "RNN" || keyword == "遞迴類神經網路"){
        return "Recurrent Neural Network"
    }
    else if(keyword == "晶片與硬體設計 Chip & Hardware Design"){
        return "Chip & Hardware Design"
    }
    else if(keyword == "知覺與情緒 Perception & Emotion"){
        return "Perception & Emotion"
    }
    else if(keyword == "資料探勘與巨量資料分析 Data Mining & Big Data Analytics"){
        return "Data Mining & Big Data Analytics"
    }
    else if(keyword == "Pytorch" || keyword == "pytorch"){
        return "PyTorch"
    }
    else if(keyword == "GAN"){
        return "GANs"
    }
    else if(keyword == "tensorflow"){
        return "Tensorflow"
    }
    else if(keyword == "中文語篇剖析器"){
        return "Chinese discourse parser"
    }
    else if(keyword == "語意理解"){
        return "語意分析"
    }
    else {
        return keyword
    }
}

function createKeyword(key_string, id) {
    //console.log(key_string)
    var keyword = document.createElement("button");
    keyword.className = "btn mt-1 mr-1 keyword-button";
    keyword.setAttribute("type", "button");
    keyword.setAttribute("data-toggle", "button");
    keyword.style = "border-radius: 50rem; padding: .4rem;";

    var badge = document.createElement("span");
    badge.className = "btn-badge";

    var badge_text = document.createElement("span");
    badge_text.className = "badge-text";
    badge_text.textContent = "#"
    badge.appendChild(badge_text);

    var button_text = document.createElement("span");
    button_text.className = "btn-text ml-1";
    button_text.style = "position : relative; top: .07rem;";
    button_text.textContent = key_string;

    keyword.appendChild(badge);
    keyword.appendChild(button_text);

    var keywords = document.getElementById("keywords");
    keywords.appendChild(keyword);

    // <button type="button" class="btn mt-1 mr-1 keyword-button" data-toggle="button" style="border-radius: 50rem; padding: .4rem;"> 
    //     <span class="btn-badge">
    //         <span class="badge-text" style="">#</span>
    //     </span>
    //     <span class="btn-text" style="position : relative; top: .07rem;">Machine Learning & Deep Learning</span>
    // </button>
}

function createCard(title, authors, facility, text, links, datasets, id){
    var card = document.createElement("div"); 
    card.className = "card mt-1";

    var card_body = document.createElement("div"); 
    card_body.className = "card-body";

    var card_title = document.createElement("h5"); 
    card_title.className = "card-title";
    card_title.textContent = title;
    card_body.appendChild(card_title);
    
    var card_author = document.createElement("h6"); 
    card_author.className = "card-subtitle mb-2 text-muted";
    card_author.textContent = "";
    for(var i = 0; i < authors.length; i++){
        card_author.textContent = card_author.textContent + authors[i].name
    }
    card_body.appendChild(card_author);

    var card_facility = document.createElement("h6"); 
    card_facility.className = "card-subtitle text-muted";
    card_facility.textContent = facility;
    card_body.appendChild(card_facility);

    var card_text = document.createElement("p");
    card_text.className = "card-text";
    card_text.textContent = text;
    card_body.appendChild(card_text);

    for(var i = 0; i < links.length; i++){
        var link = document.createElement("a");
        link.className = "card-link";
        link.href = links[i].link;
        link.textContent = "link" + (i + 1);
        card_body.appendChild(link);
    }
    console.log(datasets)
    for(var i = 0; i < datasets.length; i++){
        var dataset = document.createElement("a");
        dataset.className = "card-link";
        dataset.href = datasets[i].link;
        dataset.textContent = datasets[i].name;
        card_body.appendChild(dataset);
    }

    card.appendChild(card_body);

    var cardLists = document.getElementById("cardLists");
    cardLists.appendChild(card); 

    // <div class="card mt-1" id="list-item-1" >
    //     <div class="card-body">
    //         <h5 class="card-title">Sound20 Dataset</h5>
    //         <h6 class="card-subtitle mb-2 text-muted">Cheng-Hao Tu Yi-Ming Chan Chu-Song Chen</h6>
    //         <h6 class="card-subtitle mb-2 text-muted">中央研究院資訊所</h6>
    //         <p class="card-text">Dataset of 20 different sound for classification。 含20種不同聲音之聲音資料庫</p>
    //         <a href="./handouts/lecture7.html" class="card-link">Links</a>
    //         <a href="#" class="card-link">Info</a>
    //     </div>
    // </div>
}