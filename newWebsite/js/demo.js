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

async function showSingleExample(imageData) {
  // Create a container in the visor
  const surface =
    tfvis.visor().surface({ name: 'User Input Log', tab: 'Input Data'});  
    //console.log(surface)
  
  // Create a canvas element to render each example
  // const imageTensor = tf.tidy(() => {
  //   // Reshape the image to 28x28 px
  //   return examples.xs
  //     .slice([i, 0], [1, examples.xs.shape[1]])
  //     .reshape([28, 28, 1]);
  // });
    
  const canvas = document.createElement('canvas');
  canvas.width = 28;
  canvas.height = 28;
  canvas.style = 'margin: 4px;';
  await tf.browser.toPixels(imageData, canvas);
  surface.drawArea.appendChild(canvas);

  imageData.dispose();
}

function resize(imageData){
  var tfImage = tf.browser.fromPixels(imageData, 1);
  console.log("origin", tfImage.dataSync());

  //Resize to 28X28
  var tfResizedImage = tf.image.resizeBilinear(tfImage, [28,28]);
  console.log("bilinear", tfResizedImage.dataSync());
  showSingleExample(tfResizedImage)

  //Since white is 255 black is 0 so need to revert the values
  //so that white is 0 and black is 255
  // tfResizedImage = tf.cast(tfResizedImage, 'float32');
  // console.log("cast", tfResizedImage.dataSync());
  // showSingleExample(tfResizedImage.reshape([28, 28]))

  // tfResizedImage = tf.abs(tfResizedImage.sub(tf.scalar(255)))
  //     .div(tf.scalar(255)).flatten();
  // showSingleExample(tfResizedImage.reshape([28, 28]))

  // console.log("abs", tfResizedImage.dataSync());
  tfResizedImage = tfResizedImage.reshape([1, 784]);
  return tfResizedImage;
}

async function predict(){
  const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
  //const model = await tf.loadLayersModel(cors + 'ai.ntu.edu.tw/resource/model/my-model-1.json');
  const model = await tf.loadLayersModel('https://s3-ap-southeast-2.amazonaws.com/mystaticdemo/model.json');
  //var canvas = document.getElementById('myCanvas');
  var ctx = document.getElementById('myCanvas').getContext('2d');
  //await model.save('downloads://my-model-1');
  // console.log(ctx.getImageData(0,0, 100, 100));
  console.log(ctx);
  var imageData = document.getElementById('myCanvas').getContext('2d').getImageData(0, 0, 600, 400);
  //ctx.putImageData(imageData, 10, 70);
  
  console.log(imageData);

  
  let tfResizedImage = resize(imageData);
  //Make another dimention as the model expects
  console.log(tfResizedImage.dataSync());

  var output = model.predict(tfResizedImage); //[1, 28, 28, 1]
  var result = Array.from(output.dataSync());
  console.log('Output is : ', Array.from(output.dataSync()));
  var maxPossibility = result.reduce(function(a,b){return Math.max(a,b)});
  console.log(maxPossibility);
  alert(result.indexOf(maxPossibility) );

  //let response = await fetch('http://ai.ntu.edu.tw/resource/model/my-model-1.json');
  //let response = await fetch(cors + 'ai.ntu.edu.tw/resource/model/my-model-1.json'); 
  // if (response.ok) { // if HTTP-status is 200-299
  //   // get the response body (the method explained below)
  //   console.log("Model loaded!");
  //   let json = await response.json();
  // } else {
  //   alert("HTTP-Error: " + response.status);
  // }

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


// const recorder = document.getElementById('recorder');
// const player = document.getElementById('player');

// recorder.addEventListener('change', function(e) {
//   const file = e.target.files[0];
//   const url = URL.createObjectURL(file);
//   // Do something with the audio file.
//   player.src = url;
// });

// const handleSuccess = function(stream) {
//   if (window.URL) {
//     player.srcObject = stream;
//   } else {
//     player.src = stream;
//   }
// };

// navigator.mediaDevices.getUserMedia({ audio: true, video: false })
//     .then(handleSuccess);