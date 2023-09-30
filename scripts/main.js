function showSecao(e, nrSecao) {
  $(".secao").hide();
  $(`#div_secao${nrSecao}`).show();
  $("#botoesPrincipal > button.btn-success.bt-ma")
    .removeClass("btn-success")
    .addClass("btn-secondary");
  $("#botoesPrincipal > button.btn-success.bt-info")
    .removeClass("btn-success")
    .addClass("btn-info");
  $(e)
    .removeClass("btn-secondary")
    .removeClass("btn-info")
    .addClass("btn-success");
}

function showSubSecao(e, nrSecao, nrSubSecao) {
  $(`[id^='div_secao${nrSecao}_']`).hide();
  $(`#div_secao${nrSecao}_${nrSubSecao}`).show();
  $(`#div_secao${nrSecao} .btn-group > button.btn-success`)
    .removeClass("btn-success")
    .addClass("btn-secondary");
  $(e).removeClass("btn-secondary").addClass("btn-success");
}
