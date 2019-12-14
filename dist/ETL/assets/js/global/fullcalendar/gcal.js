var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=e(require("jquery")):e(jQuery)}(function($){var u=$.fullCalendar,p=u.applyAll;u.sourceNormalizers.push(function(e){var o,a=e.googleCalendarId,r=e.url;!a&&r&&(/^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(r)?a=r:((o=/^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(r))||(o=/^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(r)))&&(a=decodeURIComponent(o[1])),a&&(e.googleCalendarId=a)),a&&(null==e.editable&&(e.editable=!1),e.url=a)}),u.sourceFetchers.push(function(e,o,a,r){if(e.googleCalendarId)return function(r,e,o,a,t){var n,l,i="https://www.googleapis.com/calendar/v3/calendars/"+encodeURIComponent(r.googleCalendarId)+"/events?callback=?",c=r.googleCalendarApiKey||t.options.googleCalendarApiKey,d=r.success;function s(e,o){var a=o||[{message:e}];(r.googleCalendarError||$.noop).apply(t,a),(t.options.googleCalendarError||$.noop).apply(t,a),u.warn.apply(null,[e].concat(o||[]))}if(!c)return s("Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"),{};e.hasZone()||(e=e.clone().utc().add(-1,"day"));o.hasZone()||(o=o.clone().utc().add(1,"day"));a&&"local"!=a&&(l=a.replace(" ","_"));return n=$.extend({},r.data||{},{key:c,timeMin:e.format(),timeMax:o.format(),timeZone:l,singleEvents:!0,maxResults:9999}),$.extend({},r,{googleCalendarId:null,url:i,data:n,startParam:!1,endParam:!1,timezoneParam:!1,success:function(e){var o,a,r=[];if(e.error)s("Google Calendar API: "+e.error.message,e.error.errors);else if(e.items&&($.each(e.items,function(e,o){var a=o.htmlLink;l&&(a=function(e,r){return e.replace(/(\?.*?)?(#|$)/,function(e,o,a){return(o?o+"&":"?")+r+a})}(a,"ctz="+l)),r.push({id:o.id,title:o.summary,start:o.start.dateTime||o.start.date,end:o.end.dateTime||o.end.date,url:a,location:o.location,description:o.description})}),o=[r].concat(Array.prototype.slice.call(arguments,1)),a=p(d,this,o),$.isArray(a)))return a;return r}})}(e,o,a,r,this)})});