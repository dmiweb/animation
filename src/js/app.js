import Collapse from "./collapse/Collapse";
import CallbackChat from "./callback-chat/CallbackChat";
import Liker from "./liker/Liker";

document.addEventListener("DOMContentLoaded", () => {
  const text = 'С другой стороны, курс на социально-ориентированный национальный проект обеспечивает актуальность как самодостаточных, так и внешне зависимых концептуальных решений. Задача организации, в особенности же убеждённость некоторых оппонентов напрямую зависит от поставленных обществом задач.';

  const button = document.querySelector('.collapse-btn');

  new Collapse(button, text)

  new CallbackChat(document.body);

  new Liker(document.body);
});
