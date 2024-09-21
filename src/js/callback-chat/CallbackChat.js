import "./callback-chat.css"

export default class CallbackChat {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.openChatBtn = document.querySelector('.callback-chat__open-btn');

    this.render = this.render.bind(this);
    this.remove = this.remove.bind(this);
    this.hoverOpenChatBtn = this.hoverOpenChatBtn.bind(this);
    this.outOpenChatBtn = this.outOpenChatBtn.bind(this);

    this.openChatBtn.addEventListener('click', this.render);
    this.openChatBtn.addEventListener('mouseover', this.hoverOpenChatBtn);

    this.openChatBtn.addEventListener('mouseout', this.outOpenChatBtn);
  }

  static get markup() {
    return `
      <div class="callback-chat">
        <h2 class="callback-chat__title">Напишите нам</h2>
        <textarea class="callback-chat__text"></textarea>
        <button class="callback-chat__send-btn">Отправить</button>
        <button class="callback-chat__close-btn">X</button>
      </div>
    `;
  }

  hoverOpenChatBtn() {
    this.openChatBtn.classList.add('callback-chat__open-btn_hover');
  }

  outOpenChatBtn() {
    this.openChatBtn.classList.remove('callback-chat__open-btn_hover');
  }

  render() {
    this.parentEl.insertAdjacentHTML('beforeEnd', CallbackChat.markup);

    const chat = document.querySelector('.callback-chat');
    const closeChatBtn = document.querySelector('.callback-chat__close-btn');

    this.openChatBtn.classList.add('callback-chat__open-btn_hidden');

    setTimeout(() => {
      chat.classList.add('callback-chat_show');
    }, 0);

    closeChatBtn.addEventListener('click', this.remove);
  }

  remove({ currentTarget }) {
    currentTarget.closest('.callback-chat').classList.remove('callback-chat_show');

    setTimeout(() => {
      currentTarget.closest('.callback-chat').remove();
    }, 100);

    this.openChatBtn.classList.remove('callback-chat__open-btn_hidden');
  }
}
