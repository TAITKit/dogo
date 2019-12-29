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

handout_list = [
	new handoutObj("Lecture 0-1: Introduction of Machine Learning", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj("Lecture 0-2: Why we need to learn machine learning?", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj("Lecture 1: Regression - Case Study", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj("Lecture 1: Regression - Demo", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj("Lecture 2: Where does the error come from?", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj("Lecture 3-1: Gradient Descent", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 3-2: Gradient Descent (Demo by AOE)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 3-3: Gradient Descent (Minecraft)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 4: Classification", "李宏毅", "", [new urlObj("講義", "./handouts/ML4.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 5: Logistic Regression", "李宏毅", "", [new urlObj("講義", "./handouts/ML5.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 6: Brief Introduction of Deep Learning", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 7: Backpropagation", "李宏毅", "", [new urlObj("講義", "./handouts/ML7.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 8-1: “Hello world” of deep learning", "李宏毅", "", [new urlObj("講義", "./handouts/ML8-1.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 8-2: Keras 2.0", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 8-3: Keras Demo", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 9-1: Tips for Training DNN", "李宏毅", "", [new urlObj("講義", "./handouts/ML9-1.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 9-2: Keras Demo 2", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 9-3: Fizz Buzz in Tensorflow (sequel)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 10: Convolutional Neural Network", "李宏毅", "", [new urlObj("講義", "./handouts/ML10.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 11: Why Deep?", "李宏毅", "", [new urlObj("講義", "./handouts/ML11.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 12: Semi-supervised", "李宏毅", "", [new urlObj("講義", "./handouts/ML12.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 13: Unsupervised Learning - Linear Methods", "李宏毅", "", [new urlObj("講義", "./handouts/ML13.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
  new handoutObj( "Lecture 14: Unsupervised Learning - Word Embedding", "李宏毅", "", [new urlObj("講義", "./handouts/ML14.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 15: Unsupervised Learning - Neighbor Embedding", "李宏毅", "", [new urlObj("講義", "./handouts/ML15.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 16: Unsupervised Learning - Auto-encoder", "李宏毅", "", [new urlObj("講義", "./handouts/ML16.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 17: Unsupervised Learning - Deep Generative Model (Part I)", "李宏毅", "", [new urlObj("講義", "./handouts/ML17.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 18: Unsupervised Learning - Deep Generative Model (Part II)", "李宏毅", "", [new urlObj("講義", "./handouts/ML18.html"), new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 19: Transfer Learning", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 20: Support Vector Machine (SVM)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 21-1: Recurrent Neural Network (Part I)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 21-2: Recurrent Neural Network (Part II)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 22: Ensemble", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 23-1: Deep Reinforcement Learning", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 23-2: Policy Gradient", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 23-3: Reinforcement Learning", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=CXgbekl66jc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=1")]),
	new handoutObj( "Lecture 24: Matrix Factorization", "李宏毅", "", [new urlObj("講義", "./handouts/ML24.html"), new urlObj("影片", "https://youtu.be/iwh5o_M4BNU?t=4670")])
];
console.log(JSON.stringify(handout_list));