var version = "0.10";

$(function () {
  console.log("test");
  $("#info").load("src/sections/info/info.html");
  $("#media").load("src/sections/media/media.html");
  $("#whatsapp").load("src/sections/whatsapp/whatsapp.html");
  $("#footer").load("src/sections/footer/footer.html");
});

function loadWebVersion() {
  $("#version").empty().html(`v${version}`);
}

window.setTimeout(loadWebVersion, 500);

// TODO:
// Adicionar uma animação para os textos aparecerem conforme o scroll
// Trocar a scrollbar
