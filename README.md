<div align="center">
<h1> TWETEROO</h1>
<p>
<img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f424.svg" alt="eae" width=200px/>
</p>
<br>
<p > <b>The Tweteroo project is an API to create posts in a simple social media<b> </p>
 
 ![NODE.JS](https://camo.githubusercontent.com/2e5a624f533563052290ad30aed4ecc1092945a458c80cd753d108807e0293b5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f6465206a732532302d2532333230323332612e7376673f267374796c653d666f722d7468652d626164676526636f6c6f723d333339393333266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d666666666666)    ![EXPRESS](https://camo.githubusercontent.com/56960eb8a4e655c887ee533f3d6b29ad57255c69a3e07b0455f29af3ad4947fd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732532302d2532333230323332612e7376673f267374796c653d666f722d7468652d626164676526636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d666666666666)

 </div>
 
 ## INSTALLATION
 
 ```
# Clone this repository
$ git clone https://github.com/Rodolpho-Oliveira/projeto11-tweteroo.git

# Go into the repository
$ cd projeto11-tweteroo

# Install dependencies
$ npm install

 ```
 
 ## USAGE
 
 POST ```/sign-up```<br>
 
 Need to receive through the body a parameter ```username``` and an ```avatar```
 ```
 {
    username: "randomName",
    avatar: "https://www...."
 }
 ```
 
 POST ```/tweets```<br>
 
 Need to receive through the body a parameter ```username``` and ```tweet```
 ```
 {
    username: "randomName",
    tweet: "I want to hire this dev!"
 }
 ```
 
 GET ```/tweets```<br>
 
 Return the last 10 tweets
 ```
 [
   {
      username: "randomName",
      avatar: "https://www...",
      tweet: "I want to hire this dev!"
   }
 ]
 ```
 
 
