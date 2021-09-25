# sockz.exchange

## Intro

Our first project as sockz.exchange... wgmi

QUICK LINKS: [frontend/creative improvements to be made](#frontend-improvements) | [bugs in the backend to fix](#backend-improvements) | [general questions for everyone](#general-questions)

## Smart Contract

The smart contract written by [UXT](https://twitter.com/uxt_exe) lives in [/contracts](contracts/toadSockz.sol)
The important thing to note is the Sockz contract starting at line 1953. We want to make sure that we have the correct contract address for CrypToadz (line 1965), and
that we have the right CID on IPFS for our erc721 token (line 1970). In the Sockz contract, we can see all of the functions that we have access to.

## Front End

The front end by [papaya](https://twitter.com/papaya3559) with assets from [Mackody](https://twitter.com/_mackody) is a html/css/javascript project.
[index.html](./index.html) is where you can find all the text on the website. The css, javascript, and art assets can be found in [/assets/](assets/). 
The [javascript file](/assets/js/main.js) is imported in as a module, and interactions are all handled by event listeners.
If we want to change the flow of things, this is where we need to look.

## Backend

The backend uses Ether JS and Hardhat to manage interact with the smart contract. One key thing to note is that the contract ABI lives in [/src/util/sockzAbi.json](/src/util/sockzAbi.json). If we change the contract, we will have to recompile using hardhat and replace this file with the new ABI.

## Frontend Improvements

- Whenever people are inputting their toadIds to mint their sock, it is a very plain/boring prompt that pops up. could be fun to have something that is more in line with the website.

## Backend Improvements

- BUG: can only connect with MM
- When OS is fully set up and running, replace "current price" with the floor

## General Questions

- Let's all do one more passthrough of all the text and buttons to make sure they all make sense (i think that we have some unneccesary buttons like "sell") (also the supply/redeemed count that looks like a button in the top row)

## Credits

Front end by [papaya](https://twitter.com/papaya3359) and [Mackody](https://twitter.com/_mackody)

Contract by UXT: [twitter](https://twitter.com/uxt_exe) [github](https://github.com/uxt-exe)

Ideation and Marketing by [12yr Old w/ Credit Card](https://twitter.com/12yrold_with_cc)

Product and 3D Models: [Mackody](https://twitter.com/_mackody), [chase](https://twitter.com/slurpee85) and [sleepingmonkey](https://twitter.com/sleepingm0nkey)
