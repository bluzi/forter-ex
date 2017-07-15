# Forter Exercise by Eliran Pe'er
A login page, with some client-side bot detection tricks.

## Instructions
1. Clone the project, and run `npm install`
2. Run the project using `npm start`
3. Navigate to `http://localhost:3000/user/login`

# Tech
## Client 
* Vanilla JavaScript
* Bulma, just for fun

## Server
* JavaScript
* ExpressJS
* ElasticSearch

# What's in there?
## Bot detection
* Two bot traps - A semi-invisible anchor and an invisible password input. Using these elements will fire the `onBotDetected` event
* Required mouse movement
* Fast input prevention - Type too fast and you're considered a bot
* Fast submit - Submit the form too fast and you're considered a bot
* Login attempts spam - Spam the form submittion while changing the input fields will fire the `onBotDetected` event

## onBotDetected
The event itself isn't implemented, but you can think about it as if it bans the IP address or present a CAPTCHA (Same as Google CAPTCHA)

## Server security
* I implemented access tokens middleware (Could have used JWT, but I thought it will be more fun)
* All of the passwords are hashed using a NPM package called `credential` (https://www.npmjs.com/package/credential). It uses pbkdf2.

## ElasticSearch
The ElasticSearch is hosted on AWS. It's a trial, so it'll be available until 29.07.2017

## Things I could have done
* HTTPS
* Serverside generation of bot traps - Generation of random bot traps in random places in the HTML, will make them less predictable
* JWT
* Detect bots by clicks
* RDP detections using mouse tracking
* Much more... :) 