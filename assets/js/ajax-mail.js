! function (e) {
  "use strict";
  var a = ".contact-form",
    s = "is-invalid",
    t = '[name="email"]',
    n = '[name="name"],[name="email"],[name="subject"],[name="message"]',
    r = e(".form-messages");

  function o() {
    var o, l = e(a).serialize();
    o = function () {
      var r, o = !0;

      function l(t) {
        t = t.split(",");
        for (var n = 0; n < t.length; n++) r = a + " " + t[n], e(r).val() ? (e(r).removeClass(s), o = !0) : (e(r).addClass(s), o = !1)
      }
      l(n), e(t).val() && e(t).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(t).removeClass(s), o = !0) : (e(t).addClass(s), o = !1);
      return o
    }(), o && jQuery.ajax({
      url: e(a).attr("action"),
      data: l,
      type: "POST"
    }).done((function (s) {
      r.removeClass("error"), r.addClass("success"), r.text(s), e(a + ' input:not([type="submit"]),' + a + " textarea").val("")
    })).fail((function (e) {
      r.removeClass("success"), r.addClass("error"), "" !== e.responseText ? r.text(e.responseText) : r.text("Oops! An error occured and your message could not be sent.")
    }))
  }
  e(a).on("submit", (function (e) {
    e.preventDefault(), o()
  }))
}(jQuery);
