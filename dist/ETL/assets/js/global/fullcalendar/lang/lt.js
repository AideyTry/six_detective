!function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):e(jQuery,moment)}(function(e,i){function s(e,i,a,n){return i?r(a)[0]:n?r(a)[1]:r(a)[2]}function d(e){return e%10==0||10<e&&e<20}function r(e){return n[e].split("_")}function a(e,i,a,n){var t=e+" ";return 1===e?t+s(0,i,a[0],n):i?t+(d(e)?r(a)[1]:r(a)[0]):n?t+r(a)[1]:t+(d(e)?r(a)[1]:r(a)[2])}var n={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"},t="sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");(i.defineLocale||i.lang).call(i,"lt",{months:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:function(e,i){var a=-1===i.indexOf("dddd HH:mm"),n=t[e.day()];return a?n:n.substring(0,n.length-2)+"į"},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], LT [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, LT [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], LT [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:function(e,i,a,n){return i?"kelios sekundės":n?"kelių sekundžių":"kelias sekundes"},m:s,mm:a,h:s,hh:a,d:s,dd:a,M:s,MM:a,y:s,yy:a},ordinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}}),e.fullCalendar.datepickerLang("lt","lt",{closeText:"Uždaryti",prevText:"&#x3C;Atgal",nextText:"Pirmyn&#x3E;",currentText:"Šiandien",monthNames:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],monthNamesShort:["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rugp","Rugs","Spa","Lap","Gru"],dayNames:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],dayNamesShort:["sek","pir","ant","tre","ket","pen","šeš"],dayNamesMin:["Se","Pr","An","Tr","Ke","Pe","Še"],weekHeader:"SAV",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:""}),e.fullCalendar.lang("lt",{buttonText:{month:"Mėnuo",week:"Savaitė",day:"Diena",list:"Darbotvarkė"},allDayText:"Visą dieną",eventLimitText:"daugiau"})});