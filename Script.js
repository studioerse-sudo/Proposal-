const yes = document.getElementById("yes");

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

<img src="bear.gif" width="220">

</div>
`;

};
const no = document.getElementById("no");


no.onmouseover = function () {
    no.style.position = "absolute";
    no.style.left = Math.random() * 80 + "%";
    no.style.top = Math.random() * 80 + "%";
};

yes.onclick = function () {

    document.body.innerHTML = `
    <div style="text-align:center;margin-top:100px;font-family:Arial;">
        <h1>❤️ Thank You ❤️</h1>

        <h2>You Made Me So Happy 🥰</h2>

        <img src="bear.gif" width="200">

    </div>
    `;

}

no.onclick = function () {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 250 - 125;

    no.style.transform = `translate(${x}px, ${y}px)`;
};setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 300);
const create = document.getElementById("create");

create.onclick = function () {

    const name = document.getElementById("name").value;
    const msg = document.getElementById("message").value;

    const data = btoa(name + "|" + msg);

    const link = location.origin + location.pathname + "#p=" + data;

    prompt("Copy this link", link);

};

if(location.hash.startsWith("#p=")){

    const data = atob(location.hash.replace("#p=",""));

    const arr = data.split("|");

    document.querySelector("h1").innerHTML = "❤️ " + arr[0];

    document.getElementById("showMessage").innerHTML = arr[1];

}
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function(){
    music.play();
    musicBtn.innerHTML = "🎵 Playing...";
};
