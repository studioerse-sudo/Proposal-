const yes = document.getElementById("yes");
const no = document.getElementById("no");
const create = document.getElementById("create");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");


// ❤️ YES BUTTON
yes.onclick = function () {

document.body.innerHTML = `
<div style="
text-align:center;
margin-top:100px;
font-family:Arial;
background:#ffe6f0;
height:100vh;
padding-top:50px;
">

<h1 style="color:#ff0066;">❤️ Thank You ❤️</h1>

<h2>You made me happy 🥰</h2>

<div style="font-size:60px;">🎉💖🎊</div>

<img src="cutecat.gif" width="220">

</div>
`;

};


// 🙈 NO BUTTON
let noClickCount = 0;

function moveNo() {

noClickCount++;

if (noClickCount >= 3) {

    // Dusri baar Yes ke piche chhup jaaye
    no.style.position = "absolute";
    no.style.left = yes.offsetLeft + "px";
    no.style.top = yes.offsetTop + "px";

    no.style.zIndex = "0";

    yes.style.position = "relative";
    yes.style.zIndex = "2";

} else {

    // Pehli baar random bhaage
    no.style.position = "absolute";
    no.style.left = Math.random() * 70 + "%";
    no.style.top = Math.random() * 70 + "%";

}

}

no.onclick = moveNo;
no.onmouseover = moveNo;


// 🔗 CREATE LINK
create.onclick = function(){

let name = document.getElementById("name").value;
let msg = document.getElementById("message").value;

let data = btoa(name + "|" + msg);

let link = location.origin + location.pathname + "#p=" + data;

prompt("Copy this link", link);

};


// 📩 RECEIVER MODE
if(location.hash.startsWith("#p=")){

let data = atob(location.hash.replace("#p=",""));

let arr = data.split("|");

document.getElementById("name").style.display = "none";
document.getElementById("message").style.display = "none";
document.getElementById("create").style.display = "none";

document.getElementById("typing").innerHTML = "❤️ " + arr[0];
document.getElementById("showMessage").innerHTML = arr[1];

}


// 🎵 MUSIC
musicBtn.onclick = function(){

music.play();

musicBtn.innerHTML = "🎵 Playing...";

};


// ⌨️ TYPING EFFECT
let text = "Hey ❤️ I have a tiny question for you... 💌";
let i = 0;

document.getElementById("typing").innerHTML = "";

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

if(!location.hash.startsWith("#p=")){
typing();
}
