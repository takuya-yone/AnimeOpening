var kasha = new Audio();
kasha.src = "./resource/kasha.mp3";

var bgm = new Audio();
bgm.src = "./resource/bgm.mp3";

function sleep(msec) {
   return new Promise(function(resolve) {
      setTimeout(function() {resolve()}, msec);
   })
}

function kashaPlay() {
  var audio = new Audio();
  audio.src = "./resource/kasha.mp3";
  audio.play();
}

function bgmPlay(){
  var audio = new Audio();
  audio.src = "./resource/bgm.mp3";
  audio.play();
}

async function StartAnimation(){
  var textArea = document.getElementById('textArea');
  var text = document.getElementById("inputText").value;
  var list = Array.from(text);
  for(var char in text){
    textArea.innerHTML = text[char];
    kashaPlay();
    await sleep(200);
  }
  bgmPlay(bgm);
  textArea.innerHTML = text;
}
