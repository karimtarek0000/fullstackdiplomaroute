// 1 - Accordion
$(".accordion__items__item").on("click", "button", function () {
  $(this).parent().siblings().find("p").slideUp();
  $(this).next().slideToggle();
});
// 2 - Times

// 3 - Message
$("#message").on("input", function () {
  const value = $(this).val();
  const reaminingText = Math.abs(value.length - 100);
  const span = $(this).parent().find("span");
  reaminingText <= 100
    ? span.text(reaminingText)
    : span.text("You exceeded limit");
});
