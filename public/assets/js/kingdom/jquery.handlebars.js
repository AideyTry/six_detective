!function($){var e={};$.fn.handlebars=function(n,a){n instanceof jQuery&&(n=$(n).html()),e[n]=Handlebars.compile(n),this.html(e[n](a))}}(jQuery);