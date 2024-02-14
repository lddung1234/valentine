let btnNo = $("#btn-no");
let btnYes = $("#btn-yes");
function toast(content, type, location) {
  $.iaoAlert({
    msg: content,
    type: type,
    mode: "dark",
    position: location,
    autoHide: true,
    alertTime: "3000",
  });
}
btnNo.click(function () {
  toast("Cảm ơn em đã không cần quà ❤️", "success", "bottom-right");
});
btnYes.click(function () {
  // random vị trí cho btn
  var chieuDaiManHinh = window.innerWidth - 100;
  var chieuCaoManHinh = window.innerHeight - 100;
  let top = Math.floor(Math.random() * chieuCaoManHinh) + 1;
  let left = Math.floor(Math.random() * chieuDaiManHinh) + 1;
  $("#box-btn").css("top", top + "px");

  $("#box-btn").css("left", left + "px");

  $.iaoAlert({
    msg: "Đố em nhận quà được🤣",
    type: "error",
    mode: "dark",
    position: "bottom-right",
    autoHide: true,
    alertTime: "3000",
  });
});
