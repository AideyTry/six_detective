var AppInbox=function(){function n(n,t){var o=n.attr("data-title");c=t,App.blockUI({target:a,overlayColor:"none",animate:!0}),s(n),$.ajax({type:"GET",cache:!1,url:"app_inbox_inbox.html",dataType:"html",success:function(t){s(n),App.unblockUI(".inbox-content"),$(".inbox-nav > li.active").removeClass("active"),n.closest("li").addClass("active"),$(".inbox-header > h1").text(o),a.html(t),Layout.fixContentHeight&&Layout.fixContentHeight(),App.initUniform()},error:function(){s(n)},async:!1}),jQuery("body").on("change",".mail-group-checkbox",function(){var t=jQuery(".mail-checkbox"),n=jQuery(this).is(":checked");jQuery(t).each(function(){$(this).attr("checked",n)}),jQuery.uniform.update(t)})}function t(n,t,o){App.blockUI({target:a,overlayColor:"none",animate:!0}),s(n);var e=n.parent("tr").attr("data-messageid");$.ajax({type:"GET",cache:!1,url:"app_inbox_view.html",dataType:"html",data:{message_id:e},success:function(t){App.unblockUI(a),s(n),o&&$(".inbox-nav > li.active").removeClass("active"),$(".inbox-header > h1").text("View Message"),a.html(t),Layout.fixContentHeight(),App.initUniform()},error:function(){s(n)},async:!1})}function o(){$(".inbox-wysihtml5").wysihtml5({stylesheets:["../assets/global/plugins/bootstrap-wysihtml5/wysiwyg-color.css"]})}function e(){$("#fileupload").fileupload({url:"../assets/global/plugins/jquery-file-upload/server/php/",autoUpload:!0}),$.support.cors&&$.ajax({url:"../assets/global/plugins/jquery-file-upload/server/php/",type:"HEAD"}).fail(function(){$('<span class="alert alert-error"/>').text("Upload server currently unavailable - "+new Date).appendTo("#fileupload")})}function i(n){App.blockUI({target:a,overlayColor:"none",animate:!0}),s(n),$.ajax({type:"GET",cache:!1,url:"app_inbox_compose.html",dataType:"html",success:function(t){App.unblockUI(a),s(n),$(".inbox-nav > li.active").removeClass("active"),$(".inbox-header > h1").text("Compose"),a.html(t),e(),o(),$(".inbox-wysihtml5").focus(),Layout.fixContentHeight(),App.initUniform()},error:function(){s(n)},async:!1})}var a=$(".inbox-content"),c="",l=function(){var t=$(".inbox-compose .mail-to .inbox-cc"),n=$(".inbox-compose .input-cc");t.hide(),n.show(),$(".close",n).click(function(){n.hide(),t.show()})},s=function(t){void 0!==t&&(t.attr("disabled")?t.attr("disabled",!1):t.attr("disabled",!0))};return{init:function(){$(".inbox").on("click",".compose-btn",function(){i($(this))}),$(".inbox").on("click",".inbox-discard-btn",function(t){t.preventDefault(),n($(this),c)}),$(".inbox").on("click",".reply-btn",function(){!function(n){$(n).attr("data-messageid");App.blockUI({target:a,overlayColor:"none",animate:!0}),s(n),$.ajax({type:"GET",cache:!1,url:"app_inbox_reply.html",dataType:"html",success:function(t){App.unblockUI(a),s(n),$(".inbox-nav > li.active").removeClass("active"),$(".inbox-header > h1").text("Reply"),a.html(t),$('[name="message"]').val($("#reply_email_content_body").html()),l(),e(),o(),Layout.fixContentHeight(),App.initUniform()},error:function(){s(n)},async:!1})}($(this))}),$(".inbox").on("click",".view-message",function(){t($(this))}),$(".inbox-nav > li > a").click(function(){n($(this),"inbox")}),$(".inbox-content").on("click",".mail-to .inbox-cc",function(){l()}),$(".inbox-content").on("click",".mail-to .inbox-bcc",function(){!function(){var t=$(".inbox-compose .mail-to .inbox-bcc"),n=$(".inbox-compose .input-bcc");t.hide(),n.show(),$(".close",n).click(function(){n.hide(),t.show()})}()}),"view"===App.getURLParameter("a")?t():"compose"===App.getURLParameter("a")?i():$(".inbox-nav > li:first > a").click()}}}();jQuery(document).ready(function(){AppInbox.init()});