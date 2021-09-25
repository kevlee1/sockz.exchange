//import { ethers } from 'ethers';
import Sockz from '../../src/util/sockzAbi.json' assert { type: "json" };
// Update with actual contract address
const contractAddress = "0x537B9AF55daDcaD9D22309e5b8CE35CFFD8c1925"
var errorMessageWrap = document.getElementById('errorMessage1');
// Is mobile?
function ismobile() {
  let isMobile = window.matchMedia("only screen and (max-width: 740px)").matches;

  if (isMobile) {
      console.log("is mobile");
      //showError();
  }
}

ismobile();

// IF is mobile
// make imgs
// max-height: 100%;
// max-width: 100%;

  // Connect wallet

  var connect = document.getElementsByClassName('connect')[0];
  var connected = document.getElementsByClassName('connected')[0];

  var sellredeem = document.getElementsByClassName('sellredeem')[0];
  var disableSellRedeem = document.getElementsByClassName('sellredeemDisabled')[0];

  var walletModalWrap = document.getElementsByClassName('walletModalWrap')[0];
  //var errorMessageWrap = document.getElementById('errorMessage1');
  var signer;
  var provider;
  var address;
  var isConnected = false;
  var mintCount = 0;
  var redeemCount = 0;

  async function fetchSupply() {
    if (typeof window.ethereum !== 'undefined'){
      const provider1 = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, Sockz, provider1);
      const data = await contract.totalSupply();
      mintCount = data;
      const total = "/7025";
      const num = mintCount.toString();
      const minted = num + total;
      document.getElementById("incrementCount").innerText = minted;
      document.getElementById("incrementCount2").innerText = minted;
    }
  }

  fetchSupply();

  async function requestMetaMask() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  function connectToWallet(){

    walletModalWrap.style.display = "block";

    // once connected these become available
    connect.style.display = "none";
    connected.style.display = "block";

    sellredeem.style.display = "flex";
    disableSellRedeem.style.display = "none";

  }

  document.getElementsByClassName("connect")[0].addEventListener('click', connectToWallet);

  async function connectMetaMask(){
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    walletModalWrap.style.display = "none";
    address = await signer.getAddress();
    document.getElementById("address").innerHTML = address;
    document.getElementById("mintingNow").innerHTML = "Mint Sockz";
    isConnected = true;
  }

  document.getElementById("metaMask").addEventListener('click', connectMetaMask);
  document.getElementById("browserWallet").addEventListener('click', connectMetaMask);

  async function connectWalletConnect(){
    const webProvider = new WalletConnectProvider({
      infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
    });
    await webProvider.enable();
    provider = new ethers.providers.Web3Provider(webProvider);
    signer = provider.getSigner();
    walletModalWrap.style.display = "none";
    address = await signer.getAddress();
    document.getElementById("address").innerHTML = address;
    document.getElementById("mintingNow").innerHTML = "Mint Sockz";
    isConnected = true;
  }

  document.getElementById("walletConnect").addEventListener('click', connectWalletConnect);

  // Disconnect wallet

  function disconnectWallet(){

    connected.style.display = "none";
    connect.style.display = "block";

    sellredeem.style.display = "none";
    disableSellRedeem.style.display = "flex";
    document.getElementById("mintingNow").innerHTML = "Connect Wallet";
    isConnected = false;
  }

  document.getElementsByClassName("connected")[0].addEventListener('click', disconnectWallet);

  // Close error messages

  function closeError(){
    errorMessageWrap.style.display = "none"
  }
  function showError(){
    console.log("error thing", errorMessageWrap);

    errorMessageWrap.style.display = "block"
    errorMessageWrap.style.marginLeft = "0px"

    /* setTimeout(function () {
      errorMessageWrap.style.marginLeft = "-490px"

      setTimeout(function () {
        errorMessageWrap.style.display = "none"
      }, 1000);

    }, 3000); */

  }

  // Show Buy modal

  var buymodalWrap = document.getElementsByClassName('buyModalWrap')[0];
  var regmodalWrap = document.getElementsByClassName('modalWrap')[0];
  var buymodal = document.getElementsByClassName('buyModal')[0];

  var bubbles = document.getElementsByClassName('bubbles')[0];
  var buybubbles = document.getElementsByClassName('buybubbles')[0];

  var infoModalWrap = document.getElementsByClassName('infoModalWrap')[0];

  function showBuyModal(){

    buymodalWrap.style.display = "flex";
    regmodalWrap.style.display = "none";

    bubbles.style.display = "none";
    buybubbles.style.display = "block";

    background.style.display = "none";

    setTimeout(function () {
      buymodal.style.marginTop = "45px";
    }, 30);

    // Close info modal if opened

    infoModalWrap.style.display = "none";
    infotransition.style.marginTop = "1560px"
    background.style.display = "block";

  }

  document.getElementsByClassName("buysockz")[0].addEventListener('click', showBuyModal);
  document.getElementById("infoBuy").addEventListener('click', showBuyModal);

  // Hide Buy modal

  window.onclick = function(event) {

  // Close Buy Modal if clicked outside of it
    // console.log(event.target);

   if (event.target == buymodalWrap || event.target.className == "bubble" || event.target.className == "thxtoad") {

     // buymodal.style.marginTop = "920px";

     setTimeout(function () {
       regmodalWrap.style.display = "flex";

     }, 400);
     setTimeout(function () {
       buymodalWrap.style.display = "none";
     }, 100);

     bubbles.style.display = "block";
     buybubbles.style.display = "none";

     buybutton.style.display = "flex";
     shillopensea.style.display = "none";

     buySockPanel.style.display = "flex";
     boughtSockPanel.style.display = "none";

     incrementWrap.style.display = "flex";
     buycurrentPrice.style.display = "block";

     boughtBackground.style.display = "none";
     background.style.display = "block";

     buyeditInfoWrap.style.display = "flex";
     boughteditInfoWrap.style.display = "none";

   } else if (event.target.className == "infoModalWrap" || event.target.className == "infobckbutton" ){

     infoModalWrap.style.display = "none";
     infotransition.style.marginTop = "1560px"
     background.style.display = "block";

   } else if (event.target.className == "walletModalWrap" || event.target.className == "walletBackButton"){

     walletModalWrap.style.display = "none";

   }

  }

  // Buying socks, view Bought modal (different background, Shill and Opensea link, frog compliment)

  var buybutton = document.getElementsByClassName('buyingsockz')[0];
  var shillopensea = document.getElementsByClassName('shillopensea')[0];

  var buySockPanel = document.getElementById('buySockPanel');
  var boughtSockPanel = document.getElementById('boughtSockPanel');

  var incrementWrap = document.getElementsByClassName('incrementWrap')[0];
  var buycurrentPrice = document.getElementsByClassName('buycurrentPrice')[0];

  var boughtBackground = document.getElementsByClassName('boughtBackground')[0];
  var background = document.getElementsByClassName('background')[0];

  var buyeditInfoWrap = document.getElementsByClassName('buyeditInfoWrap')[0];
  var boughteditInfoWrap = document.getElementsByClassName('boughteditInfoWrap')[0];

  // Talking skull

  const textList = ["aiyvn.svg", "butser.svg", "citadel.svg", "GM.svg", "GN.svg", "nicejpg.svg", "rare.svg", "SER.svg", "sweepfloor.svg", "time2ape.svg", "toadz.svg", "utility.svg"];

  var skulltxt = document.getElementsByClassName('skullytxt')[0];
  let i = 0;

  var cycleText = () => {

    skulltxt.src = `assets/images/bkgrd/skull/${textList[i]}`;

    i = ++i % textList.length;

  };

  cycleText();

  setInterval(cycleText, 2000);

  // Buy socks / Counter

  var incrementValue = document.getElementsByClassName('incrementValue')[0];

  function addone(){
    // console.log(incrementValue.innerText);
    // console.log("yo");
    var currentNum = incrementValue.innerText;

    currentNum++;
    incrementValue.innerText = currentNum;

  }

  document.getElementsByClassName("plus")[0].addEventListener('click', addone);

  function minusone(){
    var currentNum = incrementValue.innerText;

    if (currentNum != 1) {
      currentNum--;
      incrementValue.innerText = currentNum;
    }
  }

  document.getElementsByClassName("minus")[0].addEventListener('click', minusone);

  async function buyingSockz(){

    if (isConnected) {
      if (incrementValue.innerText > 1) {
        var lot = prompt("Please enter the list of toadIds you would like to mint from: ", "1,2,3,...");
        var toadIds = lot.split(',').map(Number);
        console.log(toadIds);
        const contract = new ethers.Contract(contractAddress, Sockz, signer);
        const transaction = await contract.multiMintWithToad(toadIds);
        await transaction.wait();
      }
      else if (incrementValue.innerText == 1) {
        var toadId = prompt("Please enter the toadId you would like to mint from: ", "toadId");
        var toadInt = Number(toadId);
        console.log(toadInt);
        const contract = new ethers.Contract(contractAddress, Sockz, signer);
        const transaction = await contract.mintWithToad(toadInt);
        await transaction.wait();
      }
      else {
        window.alert("please choose how many sockz you would like to mint");
      }
    }
    else {
      connectToWallet()
      return
    }

    buybutton.style.display = "none";
    shillopensea.style.display = "flex";

    buySockPanel.style.display = "none";
    boughtSockPanel.style.display = "block";

    incrementWrap.style.display = "none";
    buycurrentPrice.style.display = "none";

    buyeditInfoWrap.style.display = "none";
    boughteditInfoWrap.style.display = "flex";

    boughtBackground.style.display = "block";

  }

  document.getElementsByClassName("buyingsockz")[0].addEventListener('click', buyingSockz);

  // info modal
  var infotransition = document.getElementsByClassName('infotransition')[0];

  function moreinfo(){

    var infoModalWrap = document.getElementsByClassName('infoModalWrap')[0];
        infoModalWrap.style.display = "block";

        setTimeout(function () {
          infotransition.style.marginTop = "540px"
        }, 30);

        background.style.display = "none";

  }
  console.log( document.getElementsByClassName("questions")[0]);
  document.getElementsByClassName("questions")[0].addEventListener('click', moreinfo);
