define(function(require,exports,module){require("plugins/bootstrap-switch/js/bootstrap-switch.min.js"),require("plugins/bootstrap-switch/css/bootstrap-switch.min.css"),require("plugins/bootstrap-touchspin/bootstrap.touchspin.min.css"),require("plugins/bootstrap-touchspin/bootstrap.touchspin.min.js");var o={_load:function(){$.kingdom.getDict("FREQUENCY","#J_task_set"),$.kingdom.getDict("FREQUENCY","#J_task_set2"),$.kingdom.getDict("BATCH_FORMAT","#batchFormat"),$.kingdom.getDict("LAST_EXEC_STATE","[name=lastExecState]");var e=sessionStorage.getItem("type");e&&($("[name=lastExecState]").val(e),$(".page-task-plan-setting .collapse-control").click()),sessionStorage.setItem("type",""),App.initUniform(),App.handleDatePickers(),App.handleDateTimePickers(),o.getTaskSetList(),o.getNewTree(),o.setInitValue(),o.initForm()},setInitValue:function(){$("#tab_s .line:eq(1) input:eq(1)").TouchSpin({min:1,max:58,step:1}).val("1"),$("#tab_s .line:eq(1) input:eq(2)").TouchSpin({min:2,max:59,step:1}).val("2"),$("#tab_s .line:eq(2) input:eq(1)").TouchSpin({min:0,max:59,step:1}).val("0"),$("#tab_s .line:eq(2) input:eq(2)").TouchSpin({min:1,max:59,step:1}).val("1"),$("#tab_m .line:eq(1) input:eq(1)").TouchSpin({min:1,max:58,step:1}).val("1"),$("#tab_m .line:eq(1) input:eq(2)").TouchSpin({min:2,max:59,step:1}).val("2"),$("#tab_m .line:eq(2) input:eq(1)").TouchSpin({min:0,max:59,step:1}).val("0"),$("#tab_m .line:eq(2) input:eq(2)").TouchSpin({min:1,max:59,step:1}).val("1"),$("#tab_h .line:eq(1) input:eq(1)").TouchSpin({min:0,max:23,step:1}).val("0"),$("#tab_h .line:eq(1) input:eq(2)").TouchSpin({min:2,max:23,step:1}).val("2"),$("#tab_h .line:eq(2) input:eq(1)").TouchSpin({min:0,max:23,step:1}).val("0"),$("#tab_h .line:eq(2) input:eq(2)").TouchSpin({min:1,max:23,step:1}).val("1"),$("#tab_d .line:eq(1) input:eq(1)").TouchSpin({min:1,max:31,step:1}).val("1"),$("#tab_d .line:eq(1) input:eq(2)").TouchSpin({min:2,max:31,step:1}).val("2"),$("#tab_d .line:eq(2) input:eq(1)").TouchSpin({min:1,max:31,step:1}).val("1"),$("#tab_d .line:eq(2) input:eq(2)").TouchSpin({min:1,max:31,step:1}).val("1"),$("#tab_d .line:eq(3) input:eq(1)").TouchSpin({min:1,max:31,step:1}).val("1"),$("#tab_o .line:eq(1) input:eq(1)").TouchSpin({min:1,max:12,step:1}).val("1"),$("#tab_o .line:eq(1) input:eq(2)").TouchSpin({min:2,max:12,step:1}).val("2"),$("#tab_o .line:eq(2) input:eq(1)").TouchSpin({min:1,max:12,step:1}).val("1"),$("#tab_o .line:eq(2) input:eq(2)").TouchSpin({min:1,max:12,step:1}).val("1"),$("#tab_w .line:eq(1) input:eq(1)").TouchSpin({min:1,max:7,step:1}).val("1"),$("#tab_w .line:eq(1) input:eq(2)").TouchSpin({min:2,max:7,step:1}).val("2"),$("#tab_w .line:eq(2) input:eq(1)").TouchSpin({min:1,max:4,step:1}).val("1"),$("#tab_w .line:eq(2) input:eq(2)").TouchSpin({min:1,max:7,step:1}).val("1"),$("#tab_w .line:eq(3) input:eq(1)").TouchSpin({min:1,max:7,step:1}).val("1"),$("#tab_y .line:eq(2) input:eq(1)").TouchSpin({min:(new Date).getFullYear(),max:3e3,step:1}).val((new Date).getFullYear().toString()),$("#tab_y .line:eq(2) input:eq(2)").TouchSpin({min:(new Date).getFullYear()+1,max:3e3,step:1}).val(((new Date).getFullYear()+1).toString());var e=$("#J_crons_modal .tab-pane");$.each(e,function(e,t){3===e?$(t).find(".line:eq(5) input[type=radio]").click():$(t).find(".line:eq(0) input[type=radio]").click()})},getNewTree:function(){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_jobs_list","v4.0",{pageSize:"999",pageNumber:"1"},function(e){if("1"==e.bcjson.flag&&e.bcjson.len&&0<e.bcjson.len){var t=e.bcjson.items,n=[],a=!0,i=!1,o=void 0;try{for(var s,l=t[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var r=s.value,c=r.folderName,p=r.jobName,m=r.jobId,u=c.split("/"),d=n;$.each(u,function(e,t){var n=!1;e===u.length-1&&(n=!0);var a=!1,i=!0,o=!1,s=void 0;try{for(var l,r=d[Symbol.iterator]();!(i=(l=r.next()).done);i=!0){var c=l.value;if(t===c.text){n?c.children.push({text:p,id:"tbs-tree-"+m}):d=c.children,a=!0;break}}}catch(e){o=!0,s=e}finally{try{!i&&r.return&&r.return()}finally{if(o)throw s}}a||(n?d.push({text:t,children:[{text:p,id:"tbs-tree-"+m}]}):(d.push({text:t,children:[]}),d=d[d.length-1].children))})}}catch(e){i=!0,o=e}finally{try{!a&&l.return&&l.return()}finally{if(i)throw o}}$(".J_tree_work").jstree({types:{default:{icon:!1}},core:{data:n,themes:{responsive:!1},check_callback:!0},plugins:["types","themes","html_data","contextmenu","state"]})}})},getNowTime:function(){var e=new Date,t=e.getMonth()+1,n=e.getDate();1<=t&&t<=9&&(t="0"+t),0<=n&&n<=9&&(n="0"+n);var a=e.getFullYear()+"-"+t+"-"+n+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();$(".prev_time").html(a),$(".next_time").html(a)},getTaskSetList:function(e){$.kingdom.getList({apiName:"kingdom.retl.get_schedule_info",apiVision:"v4.0",params:e,tableId:"task_set_table",pageId:"task_set_pages",template:"task-plan-setting/template/task-set-list.handlebars",formName:"J_tps_search_form",cb:o.getTaskSetList},function(e){var i=e.bcjson.items;$(".make-switch").bootstrapSwitch({onText:"ON",offText:"OFF",onColor:"success",offColor:"default",size:"mini",onSwitchChange:function(e,t){var n=$(".make-switch").index($(this)),a=i[n];App.blockUI({boxed:!0,message:t?"开启中":"关闭中"}),o.setSwitchAction(t,a)}}),$("#task_set_table tbody tr .bootstrap-switch").click(function(e){e.stopPropagation()})})},addPlanSet:function(e){var t=$.extend({operType:"ADD"},e);$.kingdom.doKoauthAdminAPI("kingdom.retl.set_schedule_info_modify","v4.0",t,function(e){App.unblockUI(),"1"==e.bcjson.flag?(toastr.success(e.bcjson.msg),$("#J_add_plan_modal").modal("hide"),App.clearForm("J_form_basc"),o.getTaskSetList()):toastr.error(e.bcjson.msg)})},editPlanSet:function(e){var t=$("#taskSetList .checker input:checked ").data("obj"),n=$.extend(t,e);n=$.extend({operType:"UPD"},n),$.kingdom.doKoauthAdminAPI("kingdom.retl.set_schedule_info_modify","v4.0",n,function(e){App.unblockUI(),"1"==e.bcjson.flag?(toastr.success(e.bcjson.msg),$("#J_add_plan_modal").modal("hide"),App.clearForm("J_form_basc"),o.getTaskSetList()):toastr.error(e.bcjson.msg)})},deletePlanSet:function(e){var t=$.extend({operType:"DEL"},e);$.kingdom.doKoauthAdminAPI("kingdom.retl.set_schedule_info_modify","v4.0",t,function(e){"1"==e.bcjson.flag?($("#J_add_plan_modal").modal("hide"),toastr.success(e.bcjson.msg)):toastr.error(e.bcjson.msg),App.unblockUI(),o.getTaskSetList()})},setSwitchAction:function(e,t){var n=$.extend({operType:"UPD"},t);n.startFlag=e?"2":"3",$.kingdom.doKoauthAdminAPI("kingdom.retl.set_schedule_info_modify","v4.0",n,function(e){App.unblockUI(),"1"==e.bcjson.flag?toastr.success(e.bcjson.msg):(o.getTaskSetList(),toastr.error(e.bcjson.msg))})},initForm:function(){$("#J_form_basc").validate({debug:!0,errorElement:"span",errorClass:"help-block",focusInvalid:!1,rules:{scheduleName:{required:!0},jobName:{required:!0},validStartDate:{conditionRequired:!0},validEndDate:{conditionRequired:!0},executeTime:{required:!0}},invalidHandler:function(){},highlight:function(e){$(e).closest(".form-group").addClass("has-error")},success:function(e){e.closest(".form-group").removeClass("has-error"),e.remove()},errorPlacement:function(e,t){e.insertAfter(t)},submitHandler:function(){}}),$.validator.addMethod("conditionRequired",function(e,t){return 0!==$("[fakename=forever]:checked").length||!!e},"这是必填字段"),$.validator.addMethod("executeRequired",function(e,t){return""!==$("#J_form_basc textarea[name=cronExpression]").val().replace(/ /g,"")},"这是必填字段")},handleFrequency:function(){var e=$("#J_form_basc input[name='scheduleInterval']"),t=e.val(),n=parseInt(t);if(!/^[1-9]\d*$/.test(t))return e.val(""),$("#J_form_basc textarea[name='cronExpression']").val(""),!1;var a=-1/0,i=1/0,o=$("#J_task_set").val();"H"===o?(a=0,i=11):"I"===o?(a=0,i=59):"D"===o&&(a=0,i=30),i<n&&e.val(i),n<a&&e.val(a);var s=$("#J_form_basc select[name='frequency']").val(),l=e.val(),r="";"I"===s?r="0 */"+l+" * * * ?":"H"===s?r="0 0 */"+l+" * * ?":"D"===s&&(r="0 0 0 */"+l+" * ?"),$("#J_form_basc textarea[name='cronExpression']").val(r)}};module.exports=o});