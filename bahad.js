let currBahad;
let video;
let flagRight;
let flagLeft;
let title;
let backBtn;

const data = {
    "bahad6": {
     text: "בה\"ד 6",
     video: "bahad6",   
     flag: "flag6"   
    },
    "bahad7": {
     text: "בה\"ד 7",
     video: "bahad7",   
     flag: "flag7"   
    },
    "bahad10": {
     text: "בה\"ד 10",
     video: "bahad10",   
     flag: "flag10"   
    },
    "bahad11": {
     text: "בה\"ד 11",
     video: "bahad11",   
     flag: "flag11"   
    },
    "bahad13": {
     text: "בה\"ד 13",
     video: "bahad13",   
     flag: "flag13"   
    },
    "bahad20": {
     text: "בה\"ד 20",
     video: "bahad20",   
     flag: "flag20"   
    },
    "bahad-hinuch": {
     text: "בה\"ד חינוך",
     video: "bahad-hinuch",   
     flag: "flag-hinuch"   
    },
};

window.addEventListener("load", () => {
  currBahad = sessionStorage.getItem("currBahad");
  video = document.getElementById("video");
  backBtn = document.getElementById("backBtn");
  title = document.getElementById("title");
  flagRight = document.getElementById("flagRight");
  flagLeft = document.getElementById("flagLeft");

  backBtn.addEventListener("click", backToHome);

  setPage();
});

const setPage = () => {
    title.innerText = data[currBahad].text;
    video.src = `assets/videos/${data[currBahad].video}-video.mp4`;
    flagRight.src = `assets/flags/${data[currBahad].flag}.gif`;
    flagLeft.src = `assets/flags/${data[currBahad].flag}.gif`;
}

const backToHome = () => {
  window.location.href="main.html";
}
