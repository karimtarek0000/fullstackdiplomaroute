// 1 - Accordion
$(".accordion__items__item").on("click", "button", function () {
  $(this).parent().siblings().find("p").slideUp();
  $(this).next().slideToggle();
});

// 2 - Times
function timeCounter() {
  const getDateLine = $("#time").data("time");
  const currentTime = Date.parse(getDateLine) - Date.parse(new Date());

  // Dates
  const seconds = Math.floor((currentTime / 1000) % 60);
  const minutes = Math.floor((currentTime / 1000 / 60) % 60);
  const hours = Math.floor((currentTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(currentTime / (1000 * 60 * 60 * 24));

  // Ui
  $("#days").text(days < 10 ? `0${days}` : days);
  $("#hours").text(hours < 10 ? `0${hours}` : hours);
  $("#minutes").text(minutes < 10 ? `0${minutes}` : minutes);
  $("#seconds").text(seconds < 10 ? `0${seconds}` : seconds);

  setTimeout(() => timeCounter(), 1000);
}
timeCounter();

// 3 - Message
$("#message").on("input", function () {
  const value = $(this).val();
  const reaminingText = Math.abs(value.length - 100);
  const span = $(this).parent().find("span");
  reaminingText <= 100
    ? span.text(reaminingText)
    : span.text("You exceeded limit");
});
