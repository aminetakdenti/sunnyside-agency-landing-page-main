//!Give Some Functionality To The Button
let btn = document.getElementById("btn");
let navList = document.querySelector("header nav .links");
btn.addEventListener("click", () => {
  if (navList.style.opacity === "0") {
    navList.style.opacity = "1";
  } else navList.style.opacity = "0";
});

//!Modifier Main Section Content
if (document.body.clientWidth <= 767) {
  //Fixe The Box1 Elements
  let box1 = document.querySelector(".box:first-child");
  box1.style = `display: flex;flex-direction: column-reverse;`;
  //Fixe The Box2 Elements
  let box2 = document.querySelector(".box:last-child");
  box2.style = `display: flex;flex-direction: column`;
  //First Box Content
  let img1 = document.querySelector(".box:first-child img");
  img1.src = changeImageURL(img1.src);
  //Second Box Conetnt
  let img2 = document.querySelector(".box:last-child img");
  img2.src = changeImageURL(img2.src);
}

//!Modifier Featers Section
if (document.body.clientWidth <= 767) {
  let featers = document.querySelector(".featers");
  featers.style = `display: flex;
    flex-direction: column;`;
  //Change Url Of First Image
  let img1 = document.querySelector(".feater:first-child img");
  img1.src = changeImageURL(img1.src);
  let img2 = document.querySelector(".feater:last-child img");
  img2.src = changeImageURL(img2.src);
}

//!Fixe Footer Images Section
if (document.body.clientWidth <= 767) {
  let imgs = document.querySelectorAll("footer .images img");
  for (let i = 0; i < 3; i++) {
    imgs[i].src = changeImageURL(imgs[i].src);
  }
  imgs[3].src = "../images/mobile/image-gallery-sugar-cubes.jpg";
}

/* --------------------- Function For Changing img url -------------------- */
function changeImageURL(url) {
  let src = url.split("/");
  let newUrl = [];
  for (let i = 0; i < src.length; i++) {
    if (src[i] == "desktop") newUrl.push("mobile");
    else newUrl.push(src[i]);
  }
  return newUrl.join("/");
}
