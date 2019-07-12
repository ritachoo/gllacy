  var link = document.querySelector(".button-feedback");
  var popup = document.querySelector(".modal-feedback");
  var feedback = document.querySelector(".feedback-window");

  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector("form");
  var name = popup.querySelector("[name=feedback-name]");
  var email = popup.querySelector("[name=feedback-email]");
  var text = popup.querySelector("[name=feedback-text]");

  var storageName = localStorage.getItem("name");
  var storageEmail = localStorage.getItem("email");


  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    feedback.classList.add("displayed");

    if (storageName && storageEmail) {
      name.value = storageName;
      email.value = storageEmail;
    }
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    feedback.classList.remove("displayed");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(evt) {
    if (!name.value || !email.value || !text.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя, адрес элоектронной почты и ваше сообщение");
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      evt.preventDefault();
    } else {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        feedback.classList.remove("dispalyed");
      }
    }
  });
