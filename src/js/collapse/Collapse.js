import "./collapse.css"

export default class Collapse {
  constructor(element, text) {
    this.element = element;
    this.text = text;

    this.render = this.render.bind(this)
    this.remove = this.remove.bind(this)

    this.element.addEventListener("click", this.render);
  }

  createWidget(id, text) {
    const widget = document.createElement('div');
    widget.id = id;
    widget.classList.add('widget-collapsible');
    widget.textContent = text;

    return widget;
  }

  bindWidget(widget) {
    const { top, left } = this.element.getBoundingClientRect();

    widget.style.left = left + "px";
    widget.style.top = top + this.element.offsetHeight + "px";
  }

  render() {
    if (this.element.getAttribute("aria-describedby")) return;

    this.element.setAttribute("aria-describedby", performance.now());

    const id = this.element.getAttribute("aria-describedby");

    const widget = this.createWidget(id, this.text);

    this.bindWidget(widget);

    this.element.insertAdjacentElement('afterEnd', widget);

    setTimeout(() => {
      document.querySelector(`[id='${id}']`).classList.add('widget-collapsible_animation');
    }, 0);

    this.element.removeEventListener("click", this.render);
    this.element.addEventListener("click", this.remove);
  }

  remove() {
    const id = this.element.getAttribute("aria-describedby");
    const widget = document.querySelector(`[id='${id}']`);

    widget.classList.remove('widget-collapsible_animation');

    setTimeout(() => {
      widget.remove();
    }, 1000);

    this.element.removeAttribute("aria-describedby");

    this.element.addEventListener("click", this.render);
    this.element.removeEventListener("click", this.remove);
  }
}
