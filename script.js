const yes = document.getElementById("yes");
const no = document.getElementById("no");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");


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

<h1 style="color:#ff0066;">
❤️ Thank You ❤️
</h1>

<h2>
You made me happy 🥰
</h2>

<div style="font-size:60px;">
🎉💖🎊
</div>

<img src="cutecat.gif" width="220">

</div>
`;

};


no.onmouseover = function(){

no.style.position="absolute";
no.style.left=Math.random()*80+"%";
no.style.top=Math.random()*80+"%";

};


no.onclick = function(){

no.style.position="absolute";
no.style.left=Math.random()*80+"%";
no.style.top=Math.random()*80+"%";

};



musicBtn.onclick=function(){

music.play();
musicBtn.innerHTML="🎵 Playing...";

};



let text="Hey ❤️ I have a tiny question for you... 💌";
let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML += text.charAt(i);
i++;

setTimeout(typing,80);

}

}

typing();
