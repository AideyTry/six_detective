!function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : a(jQuery, moment);
}(function (a, b) {
  var c = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
      d = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
      e = function e(a) {
    return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && 10 >= a % 100 ? 3 : a % 100 >= 11 ? 4 : 5;
  },
      f = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
      g = function g(a) {
    return function (b, c, d, g) {
      var h = e(b),
          i = f[a][e(b)];return 2 === h && (i = i[c ? 0 : 1]), i.replace(/%d/i, b);
    };
  },
      h = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];(b.defineLocale || b.lang).call(b, "ar", { months: h, monthsShort: h, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, meridiemParse: /ص|م/, isPM: function isPM(a) {
      return "م" === a;
    }, meridiem: function meridiem(a, b, c) {
      return 12 > a ? "ص" : "م";
    }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: g("s"), m: g("m"), mm: g("m"), h: g("h"), hh: g("h"), d: g("d"), dd: g("d"), M: g("M"), MM: g("M"), y: g("y"), yy: g("y") }, preparse: function preparse(a) {
      return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
        return d[a];
      }).replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return c[a];
      }).replace(/,/g, "،");
    }, week: { dow: 6, doy: 12 } }), a.fullCalendar.datepickerLang("ar", "ar", { closeText: "إغلاق", prevText: "&#x3C;السابق", nextText: "التالي&#x3E;", currentText: "اليوم", monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"], monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], dayNamesShort: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"], weekHeader: "أسبوع", dateFormat: "dd/mm/yy", firstDay: 6, isRTL: !0, showMonthAfterYear: !1, yearSuffix: "" }), a.fullCalendar.lang("ar", { buttonText: { month: "شهر", week: "أسبوع", day: "يوم", list: "أجندة" }, allDayText: "اليوم كله", eventLimitText: "أخرى" });
});