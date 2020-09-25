# ML Lecture 6: Brief Introduction of Deep Learning 

> 臺灣大學人工智慧中心 科技部人工智慧技術暨全幅健康照護聯合研究中心 [http://ai.ntu.edu.tw](http://ai.ntu.edu.tw/)

### History of Deep Learning

<img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_2.jpg" width="70%">

---

### Three Steps of Deep Learning

- Deep Learning 的三個 step，和先前 Machine Learning 的三個 Step 是一樣的
- 如同將大象放進冰箱只需三步驟：「門打開、趕大象進去、門關起來」，就這麼簡單

<img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_3.jpg" width="70%">

#### Step 1: Define a Neural Network

- **Definition**

  > Neuron：一個 Logistic Regression，即為一個 neuron
  > Neural Network：將 Logistic Regression 前後連接在一起，即為一個 neural network，以下簡稱 NN
  > Structure：以不同方法連接這些 NN，就形成不同的 structure
  > Parameter (θ)：將每個 Logistic Regression 自己的 weight 跟 bias 集合起來，就是此 NN 的 parameter
  
  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_4.jpg" width="70%">
  
- **Fully Connected Feedforward Network**（最常見的連接方式）
  
  > 上面藍色 neuron 的 weight 是 (1, -2)、bias 是 -1 (綠正方形框框)
  > 下面藍色 neuron 的 weight 是 (-1, 1)、bias 是 0 (綠正方形框框)
  > **Input**: (1, -1) 
  > --> $1*1 + (-1)*(-2)$，再加 1(bias)，經過 sigmoid function 後，得到 0.98
  >
  > -->$1*(-1)+(-1)*1$，再加 0(bias)，經過 sigmoid function 後，得到 0.12
  
  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_5.jpg" width="70%">
  
  > 範例一（如下圖）
  > **Input: (1, -1)** --> **(0.98, 0.12)** --> **(0.86, 0.11)** --> **(0.62, 0.83)**
  
  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_6.jpg" width="70%">
  
  > 範例二（如下圖）
  > **Input: (0, 0)** --> **(0.73, 0.5)** --> **(0.72, 0.12)** --> **(0.51, 0.85)**
  
  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_7.jpg" width="70%">
  
  > Network 架構（推廣）
  > **<u>Fully Connected</u>**：將 neuron 分成一排一排，每排的 neuron 都<b><u>兩兩互相連接</u></b>
  > **<u>Feedforward Network</u>**：傳遞的方向為 input-->layer1-->layer2...-->Output，不斷**<u>單方向地往前傳遞</u>**
  > **<u>Hidden layer</u>**：input layer 及 output layer 以外的層皆為 hidden layer
  
  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_8.jpg" width="70%">
  
- **「Deep」**意即 Many hidden layers

<img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_9.jpg" width="70%">

- **Network 的運作**

  > 矩陣運算:  $\left[\begin{matrix}1 & -1 \\ -2 & 1\end{matrix}\right]*\left[\begin{matrix}1\\ -1 \end{matrix}\right]+\left[\begin{matrix}1 \\0\end{matrix}\right]=\left[\begin{matrix}4 \\ -2\end{matrix}\right]$
  >
  > 再通過 activation function, $\sigma$, (此處用 sigmoid function)，最後得output $\left[\begin{matrix}0.98\\ 0.12\end{matrix}\right]$

  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_11.jpg" width="70%">

  $\Rightarrow$ **Neural Network 的運作就是一連串的矩陣運算**, 如下圖所示

  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_13.jpg" width="70%">

- **Output layer 即為 Multi-Class Classifier**

  > 將 <u>hidden layer</u> 視為 <u>feature extractor</u>
  > 將 <u>output layer</u> 視為 <u>multi-class classifier</u>，最後一個 layer 會加上 <u>Softmax function</u>

  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_14.jpg" width="70%">

- **例子**：Input 一張手寫數字的 image，output 它對應到哪一個數字

  - **問題定義**

    > **Input**：解析度 16*16 的 Image，即一個 <u>256 維的 vector</u>
    >
    > **Output**：對應到 10 個數字的機率，即一個 <u>10 維的 vector</u>

    <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_16.jpg" width="70%">

  - **設計 network 架構**

    > 決定好 input, output 後，這個 network 就 define 了一個 function set
    > 這個 function set 中，每一個 function 都可以拿來做手寫數字辨識，只有結果好壞的差別而已

    $\Rightarrow$ 我們要設計**「中間有幾層 hidden layer，每個 hidden layer 有多少的 neuron」**

    $\Rightarrow$ 再用 **Geadient Descent** 找一組參數，挑出最適合做手寫數字的 function

    <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_17.jpg" width="70%">

- **常見問題**

  - 需要多少 hidden layer？每層 hidden layer 又需要多少 neuron？
    $\Rightarrow$ 需要多方的<u>嘗試</u>及<u>直覺</u>的猜測

  - 能不能夠自動學 network 的架構？
    $\Rightarrow$ 可以（細節可以請教余天立老師）

  - 我們能不能自己設計 network 的架構？

    $\Rightarrow$ 可以，一個特殊的接法就是 Convolutional Neural Network (CNN)

  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_18.jpg" width="70%">

---

#### Step 2: Goodness of function

- **決定參數的好壞**

  計算 output (y) 跟目標 ($\hat{y}$) 之間的 cross entropy 

  $\Rightarrow$ 調整 network 的參數，<u>**讓 cross entropy 越小越好**</u>

  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_20.jpg" width="70%">

---

#### Step 3: Pick the best function

- **Total loss (L)**

  將所有 data 的 cross entropy 全部加起來的總和，得到 total loss (L)

  $\Rightarrow$ 在 function set 中找一個 function，或是找一組 network 的 parameter ($\theta^*$)，**<u>讓 total loss 越小越好</u>**

  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_21.jpg" width="70%">

- **用 Gradient Descent 找 $\theta^*$ 最小化 $L$**

  (可複習 Linear Regression 中 Gradient Descent的做法)

  <img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_24.jpg" width="70%">

就做完 Deep Learning 了...

<img src="http://ai.ntu.edu.tw/aho/JPG/Introduction_of_Deep_Learning/Introduction_of_Deep_Learning_25.jpg" width="70%">