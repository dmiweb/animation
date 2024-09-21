import "./liker.css";
import getRandomNumber from "../getRandomNumber";

export default class Liker {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.likerBtn = document.querySelector(".liker-btn");

    this.animations = ["flight1", "flight2", "flight3", "flight4"];

    this.renderImage = this.renderImage.bind(this);

    this.likerBtn.addEventListener("click", this.renderImage);
  }

  createImage() {
    const { left, top } = this.likerBtn.getBoundingClientRect();
    const index = getRandomNumber(this.animations.length);

    const image = document.createElement("img");
    image.classList.add("image-heart");
    image.classList.add(this.animations[index]);
    image.style.top = top + "px";
    image.style.left = left + this.likerBtn.offsetWidth / 2 - 16 + "px";
    image.src =
      "https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/anim/pic/heart.png";

    return image;
  }

  renderImage() {
    const image = this.createImage();

    this.parentEl.appendChild(image);

    image.addEventListener("animationend", this.removeImage);
  }

  removeImage({ currentTarget }) {
    currentTarget.remove();
  }
}
