# Tweet Project

Using express to get tweets api and post content, the following instruction will show you how to use and install the project.

## Features
- Allow you to search information from Twitter
- Allow you to post twitter using either POSTMAN or our frontend page

## Environment Setup
1. Node.js
2. Twitter Developer account
3. Postman

## Installing
Run the script on your terminal
```bash
git clone https://github.com/libterty/Tweet-Project.git
```

You will need a Twitter Developer account to pass the Keys and tokens to make process working,
you can sign up your Twitter Developer account through the link
```bash
https://developer.twitter.com
```

In order to post Twitters into Twitter, your will need postman to help you post. The following will take you to postman website where you can download postman.
```bash
https://www.getpostman.com
```
Or you can use our frontend website to post your comments or Images into your Twitter account.


## How to use
Run the script
```bash
npm start
```

You will see a Home page like this
![image](https://github.com/libterty/Tweet-Project/blob/master/public/assets/images/Homepage.png)

## Uploading Image
1. Put your uploading images into this folder `/public/assets/images`
2. Choose the image through the project image folder
3. Only jpg, jpeg and png are allowing to upload
4. Go to check your Twitter Homepage

## Testing and Debugging
The following command is a settup for eslint which aslo includs prettier inside. It allows you to fix bugs and formatting your code to look nicer.
```bash
npm run lint
```

## Change Log
Update new function for posting images and comments to Twitter
