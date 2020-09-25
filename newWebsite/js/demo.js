function putImage()
{
  var canvas1 = document.getElementById("canvas");        
  if (canvas1.getContext) {
     var ctx = canvas1.getContext("2d");                
     var myImage = canvas1.toDataURL("image/png");      
  }
  //
  var imageElement = document.getElementById("MyPix");  
  //imageElement.src = myImage;                           
  alert("it's " + parseInt((Math.random() * Math.floor(9) % 10)));
}  
function clearCanvas()
{
  var canvas = document.getElementById("canvas");   
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}


function printCor()
{
  const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
  var input1 = document.getElementById("exampleInput1").value;
  var input2 = document.getElementById("exampleInput2").value;
  //console.log(input1, input2);
  var vec1, vec2, correlation;
  
  $.getJSON(cors + 'taitk.org:8050/vectorize?q=' + input1, function(raw) {
      //console.log("parseID:", algorithms);
      //console.log(data);
      //console.log(raw);
      vec1 = raw.embedding;
      $.getJSON(cors + 'taitk.org:8050/vectorize?q=' + input2, function(raw1) {
      //console.log("parseID:", algorithms);
      //console.log(data);
      //console.log(raw);
      vec2 = raw1.embedding;
      
      console.log(vec1, vec2);
      correlation = Math.round(cosineSimilarity(vec1[0], vec2[0]) * 100);
      alert("相似度 " + correlation + "%");
      //console.log(Math.round(cosineSimilarity(vec1[0], vec2[0]) * 100) / 100);
      //parseKeywordandContent();
  });  
      //parseKeywordandContent();
  });          
}

function cosineSimilarity(vec1, vec2) {
  const dotProduct = vec1.map((val, i) => val * vec2[i]).reduce((accum, curr) => accum + curr, 0);
  const selfmeanA = vec1.map((val, i) => val * val).reduce((accum, curr) => accum + curr, 0);
  const selfmeanB = vec2.map((val, i) => val * val).reduce((accum, curr) => accum + curr, 0);
  const vecSize = 1024;

  return dotProduct / (Math.sqrt(selfmeanA) * Math.sqrt(selfmeanB));
};

function calcVectorSize(vec) {
  return Math.sqrt(vec.reduce((accum, curr) => accum + Math.pow(curr, 2), 0));
};