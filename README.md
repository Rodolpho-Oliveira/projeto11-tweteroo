# TWETEROO
<img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f424.svg" alt="eae" width=200px/>

 The Tweteroo project is an API to create posts in a simple social media
 
 ## INSTALLATION
 
 ```
# Clone this repository
$ git clone [git@github.com:Rodolpho-Oliveira/projeto11-tweteroo.git](https://github.com/Rodolpho-Oliveira/projeto11-tweteroo.git)

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
 
