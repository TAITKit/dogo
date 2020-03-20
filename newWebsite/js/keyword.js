//var data = require('https://taitk.org/api/algorithms')
//console.log(data)
var GlobalKeywordObj = {}, GlobalSelectObj = {}, GlobalID = {};



async function parseID() {
    $.getJSON('https://taitk.org/api/algorithms', function(algorithms) {
        //console.log("parseID:", algorithms);
        //console.log(data);
        GlobalID = algorithms;
        parseKeyword();
    });
}

function parseKeyword () {
    for(var i = 0; i < GlobalID.length; i++) {
        $.getJSON('https://taitk.org/api/algorithms/' + GlobalID[i].id, function(subdata) {
            console.log(subdata.data)
            rawkeywords = subdata.data.tags;
            for(var x = 0; x < rawkeywords.length; x++) {
                temp = rawkeywords[x].tag
                if(!GlobalKeywordObj.hasOwnProperty(temp)) {
                    createKeyword(temp, 1);
                    GlobalKeywordObj[temp] = 1;
                } 
            }
            //TODO: split the category by comma, also, the 32th category is blank
            temp = subdata.data.category
            console.log(temp)
            if(!GlobalKeywordObj.hasOwnProperty(temp)) {
                createKeyword(temp, 1);
                GlobalKeywordObj[temp] = 1;
            } 
        });
    }
}


function createKeyword(key_string, id) {
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