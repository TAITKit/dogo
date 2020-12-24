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
	new handoutObj("Lecture 0-2: Why we need to learn machine learning?", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=On1N8u1z2Ng&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=2")]),
	new handoutObj("Lecture 1: Regression - Case Study", "李宏毅", "", [new urlObj("講義", "./handouts/ML1.html"), new urlObj("影片", "https://www.youtube.com/watch?v=fegAeph9UaA&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=3")]),
	new handoutObj("Lecture 1: Regression - Demo", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=1UqCjFQiiy0&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=4")]),
	new handoutObj("Lecture 2: Where does the error come from?", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=D_S6y0Jm6dQ&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=5")]),
	new handoutObj("Lecture 3-1: Gradient Descent", "李宏毅", "", [new urlObj("講義", "./handouts/ML3-1.html"), new urlObj("影片", "https://www.youtube.com/watch?v=yKKNr-QKz2Q&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=6")]),
	new handoutObj( "Lecture 3-2: Gradient Descent (Demo by AOE)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=1_HBTJyWgNA&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=7")]),
	new handoutObj( "Lecture 3-3: Gradient Descent (Minecraft)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=wzPAInDF_gI&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=8")]),
	new handoutObj( "Lecture 4: Classification", "李宏毅", "", [new urlObj("講義", "./handouts/ML4.html"), new urlObj("影片", "https://www.youtube.com/watch?v=fZAZUYEeIMg&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=9")]),
	new handoutObj( "Lecture 5: Logistic Regression", "李宏毅", "", [new urlObj("講義", "./handouts/ML5.html"), new urlObj("影片", "https://www.youtube.com/watch?v=hSXFuypLukA&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=10")]),
	new handoutObj( "Lecture 6: Brief Introduction of Deep Learning", "李宏毅", "", [new urlObj("講義", "./handouts/ML6.html"), new urlObj("影片", "https://www.youtube.com/watch?v=Dr-WRlEFefw&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=11")]),
	new handoutObj( "Lecture 7: Backpropagation", "李宏毅", "", [new urlObj("講義", "./handouts/ML7.html"), new urlObj("影片", "https://www.youtube.com/watch?v=ibJpTrp5mcE&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=12")]),
	new handoutObj( "Lecture 8-1: “Hello world” of deep learning", "李宏毅", "", [new urlObj("講義", "./handouts/ML8-1.html"), new urlObj("影片", "https://www.youtube.com/watch?v=Lx3l4lOrquw&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=13")]),
	new handoutObj( "Lecture 8-2: Keras 2.0", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=5BJDJd-dzzg&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=14")]),
	new handoutObj( "Lecture 8-3: Keras Demo", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=L8unuZNpWw8&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=15")]),
	new handoutObj( "Lecture 9-1: Tips for Training DNN", "李宏毅", "", [new urlObj("講義", "./handouts/ML9-1.html"), new urlObj("影片", "https://www.youtube.com/watch?v=xki61j7z-30&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=16")]),
	new handoutObj( "Lecture 9-2: Keras Demo 2", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=Ky1ku1miDow&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=17")]),
	new handoutObj( "Lecture 9-3: Fizz Buzz in Tensorflow (sequel)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=F1vek6ULo9w&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=18")]),
	new handoutObj( "Lecture 10: Convolutional Neural Network", "李宏毅", "", [new urlObj("講義", "./handouts/ML10.html"), new urlObj("影片", "https://www.youtube.com/watch?v=FrKWiRv254g&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=19")]),
	new handoutObj( "Lecture 11: Why Deep?", "李宏毅", "", [new urlObj("講義", "./handouts/ML11.html"), new urlObj("影片", "https://www.youtube.com/watch?v=XsC9byQkUH8&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=20")]),
	new handoutObj( "Lecture 12: Semi-supervised", "李宏毅", "", [new urlObj("講義", "./handouts/ML12.html"), new urlObj("影片", "https://www.youtube.com/watch?v=fX_guE7JNnY&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=21")]),
	new handoutObj( "Lecture 13: Unsupervised Learning - Linear Methods", "李宏毅", "", [new urlObj("講義", "./handouts/ML13.html"), new urlObj("影片", "https://www.youtube.com/watch?v=iwh5o_M4BNU&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=22")]),
  	new handoutObj( "Lecture 14: Unsupervised Learning - Word Embedding", "李宏毅", "", [new urlObj("講義", "./handouts/ML14.html"), new urlObj("影片", "https://www.youtube.com/watch?v=X7PH3NuYW0Q&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=23")]),
	new handoutObj( "Lecture 15: Unsupervised Learning - Neighbor Embedding", "李宏毅", "", [new urlObj("講義", "./handouts/ML15.html"), new urlObj("影片", "https://www.youtube.com/watch?v=GBUEjkpoxXc&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=24")]),
	new handoutObj( "Lecture 16: Unsupervised Learning - Auto-encoder", "李宏毅", "", [new urlObj("講義", "./handouts/ML16.html"), new urlObj("影片", "https://www.youtube.com/watch?v=Tk5B4seA-AU&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=25")]),
	new handoutObj( "Lecture 17: Unsupervised Learning - Deep Generative Model (Part I)", "李宏毅", "", [new urlObj("講義", "./handouts/ML17.html"), new urlObj("影片", "https://www.youtube.com/watch?v=YNUek8ioAJk&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=26")]),
	new handoutObj( "Lecture 18: Unsupervised Learning - Deep Generative Model (Part II)", "李宏毅", "", [new urlObj("講義", "./handouts/ML18.html"), new urlObj("影片", "https://www.youtube.com/watch?v=8zomhgKrsmQ&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=27")]),
	new handoutObj( "Lecture 19: Transfer Learning", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=qD6iD4TFsdQ&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=28")]),
	new handoutObj( "Lecture 20: Support Vector Machine (SVM)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=QSEPStBgwRQ&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=29")]),
	new handoutObj( "Lecture 21-1: Recurrent Neural Network (Part I)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=xCGidAeyS4M&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=30")]),
	new handoutObj( "Lecture 21-2: Recurrent Neural Network (Part II)", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=rTqmWlnwz_0&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=31")]),
	new handoutObj( "Lecture 22: Ensemble", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=tH9FH1DH5n0&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=32")]),
	new handoutObj( "Lecture 23-1: Deep Reinforcement Learning", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=W8XF3ME8G2I&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=33")]),
	new handoutObj( "Lecture 23-2: Policy Gradient", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=y8UPGr36ccI&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=34")]),
	new handoutObj( "Lecture 23-3: Reinforcement Learning", "李宏毅", "", [new urlObj("影片", "https://www.youtube.com/watch?v=2-JNBzCq77c&list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49&index=35")]),
	new handoutObj( "Lecture 24: Matrix Factorization", "李宏毅", "", [new urlObj("講義", "./handouts/ML24.html"), new urlObj("影片", "https://youtu.be/iwh5o_M4BNU?t=4670")])
];
function createJSON(){
	console.log(JSON.stringify(handout_list));
}
