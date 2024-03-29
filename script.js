(function () {
  const listItems = document.querySelectorAll(".list_item");
  const markAll = document.querySelector(".mark_all");
  const notificationTotal = document.querySelector(".notification_number");
  let newArr = [];

  listItems.forEach((item) => {
    item.classList.contains("unread") ? newArr.push(item) : null;
  });
  notificationTotal.innerHTML = newArr.length;

  listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("unread")) {
        e.currentTarget.classList.remove("unread");
        notificationTotal.innerHTML = --newArr.length;
      }
    });
  });

  function removeUnreadAll() {
    listItems.forEach((item) => {
      if (item.classList.contains("unread")) {
        item.classList.remove("unread");
        notificationTotal.classList.add("visible");
        markAll.classList.add("empty_notifications");
      }
    });
  }
  markAll.addEventListener("click", removeUnreadAll);
})();
