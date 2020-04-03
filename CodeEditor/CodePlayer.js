function updateOutput(){
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>"
  + $("#htmlPanel").val() + "</body></html>");

  document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());

}

$(".toggleBtn").hover(function(){
  $(this).addClass("highlightedBtn");
}, function(){
  $(this).removeClass("highlightedBtn");
});

$(".toggleBtn").click(function(){
  $(this).toggleClass("active");

  $(this).removeClass("highlightedBtn");

  var panelId = $(this).attr("id") + "Panel";

  $("#" + panelId).toggleClass("hidden");

  var numOfActivePanels = 4 - $('.hidden').length;

  $(".panel").width(($(window).width() / numOfActivePanels) - 10);

});

$(".panel").width(($(window).width() / 2) - 10);

$(".panel").height($(window).height() - $(".header").height() - 20);


updateOutput();

$("textarea").on('change keyup paste', function(){

  updateOutput();
});
