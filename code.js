let infoBtn;
let aboutBox;
let videos;
let nextBtn;
let prevBtn;
let flagContainer;
let videoStart;

let isFirstTime;
let currentIndex = 0;

const flagImages = ["6", "7", "10", "11", "13", "20", "-hinuch"]

window.addEventListener("load", () => {
  infoBtn = document.getElementById("info-btn");
  aboutBox = document.getElementById("about-text");
  nextBtn = document.getElementById("nextBtn");
  prevBtn = document.getElementById("prevBtn");
  videos = document.querySelectorAll(".video-slide");

  infoBtn.addEventListener("click", showAbout);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", next);

  if (videos.length > 0) {
    showVideo(currentIndex);
  }
  startVideo();
  bahadFlags();
});

const showAbout = () => {
  if (aboutBox.classList.contains("fade-in")) {
    aboutBox.classList.remove("fade-in");
    aboutBox.classList.add("fade-out");
  } else {
    aboutBox.classList.remove("fade-out");
    aboutBox.classList.add("fade-in");
  }
};

const showVideo = (index) => {
  videos.forEach((video) => {
    video.pause();
    video.classList.remove("active");
  });

  const currentVideo = videos[index];
  currentVideo.classList.add("active");
  currentVideo.currentTime = 0;
  currentVideo.play();
};

const next = () => {
    currentIndex = (currentIndex === 0) ? 1 : 0;
    showVideo(currentIndex);
}

const bahadFlags = () => {
    flagContainer = document.getElementById("flag-container");
    flagContainer.addEventListener("click", toBahadPage);
    for (let index = 0; index < flagImages.length; index++) {
      const img = document.createElement("img");
      img.src = `assets/images/flag${flagImages[index]}.png`;
      img.alt = `flag${flagImages[index]}`;
      img.id = `bahad${flagImages[index]}`;
      img.classList = "flag-bahad";
      flagContainer.appendChild(img)
    }
    
}

const toBahadPage = (event) => {
  sessionStorage.setItem("currBahad", event.target.id);
  sessionStorage.setItem("movedOnce", false);
  window.location.href="bahad.html";
}

const startVideo = () => {
  isFirstTime = sessionStorage.getItem("movedOnce");
  videoStart = document.getElementById("startVideo");

  if (isFirstTime == "false") {
    videoStart.style.display = "none";
  } else {
    videoStart.style.display = "block";
    setTimeout(() => {
      videoStart.style.display = "none";
    }, 15000);
  }
}
