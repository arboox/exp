var head = document.getElementsByTagName("head")[0];
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://code.jquery.com/jquery-2.2.1.min.js";

script.onreadystatechange = handler;
script.onload = handler;

head.appendChild(script);

function handler() {
  console.log("jquery added :)");
}


if ($('.exp-1').attr('src') === 'https://exp.arboox.com/1/balustervase.html') {
  document.getElementById("o-a-exp-1").src =
    "https://arboox.com/experience?name=Baluster+vase&src=https://cdn.glitch.global/a9c4e687-7c99-4065-88c1-02e69edfd394/baluster_vase_from_a_five-piece_garniture.glb?v=1681489367969&scene=https://images.unsplash.com/photo-1524079314971-dbe1837f967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80&arp=&link=none&lt=&url=&cr=&ani=none&text=&ff=Plus+Jakarta+Sans&ta=center&fw=400&fs=none&fc=none";
  document.getElementById("a-exp-1").src =
    "https://arboox.com/experience?name=Baluster+vase&src=https://cdn.glitch.global/a9c4e687-7c99-4065-88c1-02e69edfd394/baluster_vase_from_a_five-piece_garniture.glb?v=1681489367969&scene=https://images.unsplash.com/photo-1524079314971-dbe1837f967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80&arp=&link=none&lt=&url=&cr=&ani=none&text=&ff=Plus+Jakarta+Sans&ta=center&fw=400&fs=none&fc=none";
  document.querySelector("#pp-t-1").addEventListener("click", function () {
    document.querySelector("#discover-t").style.color = "#ababab";
    document.querySelector("#pp-tb-i").style.display = "none";
    document.querySelector("#pp-tb-color").style.display = "block";
    document.querySelector("#pp-overlay").style.display = "block";
    document.querySelector("#pp-ins").style.display = "block";
    document.querySelector("#pp-frame").src = "@/art21";
    document.querySelector("#o-5").className = "m immerse";
    document.querySelector("#overlay-o").style.display = "none";
  });
}
