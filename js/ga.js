document.querySelector("#projects").addEventListener("click", function () {
  gtag("event", "click", {
    event_category: "button_click",
    event_label: "projects_button",
    value: 1,
  });
});
