var _extends=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e};define(function(require,exports,module){require("js/kingdom/ajaxdata"),require("js/kingdom/api_name"),require("plugins/jstree/dist/jstree"),require("plugins/jstree/dist/themes/default/style.css"),require("plugins/select2/js/select2.js"),require("plugins/select2/css/select2.css"),require("plugins/drag/kd_drag.js");var e=location.hash.split("?")[0].replace("#",".page-"),t=new(require("assets/js/global/treeCommon"))(e,"#J_flow_tree","#J_jobname_query_btn","#J_jobname_query","1"),s={load:function(){App.initUniform(),new Promise(function(e,o){t.getTask("",!0,!0,"",e)}).then(function(){var e=location.search.substring(1).split("=")[1];$("#J_flow_tree [folderId="+e+"]>a").click()})},getWorkList:function(e){var o={folderId:$("#J_flow_tree li[aria-selected=true]").attr("folderId")||$.kingdom.getUrlParameter("folderId")};o=_extends(o,e),$.kingdom.getList({apiName:"bayconnect.superlop.get_jobs_list",apiVision:"v4.0",params:o,tableId:"J_work_table",pageId:"J_work_page",template:"report-table-info-manage/template/work-list.handlebars",formName:"J_work_form",cb:s.getWorkList})},copyWorkList:function(e){App.blockUI({boxed:!0,message:"Processing..."}),$.kingdom.doKoauthAdminAPI("bayconnect.superlop.set_job_info_copy","v4.0",e,function(e){"1"==e.bcjson.flag?(s.getWorkList(),toastr.success(e.bcjson.msg)):toastr.error(e.bcjson.msg),App.unblockUI()})},moveWorkInfo:function(o){App.blockUI({boxed:!0,message:"Processing..."}),$.kingdom.doKoauthAdminAPI("bayconnect.superlop.set_job_info_change_folder","v4.0",o,function(e){"1"==e.bcjson.flag?(toastr.success(e.bcjson.msg),$("#J_flow_tree li[folderId="+o.targetFolderId+"]>a").click(),s.getWorkList(),$("#J_work_move_modal").modal("hide")):toastr.error(e.bcjson.msg),App.unblockUI()})},delyWorkList:function(e){App.blockUI({boxed:!0,message:"删除中..."}),$.kingdom.doKoauthAdminAPI("bayconnect.superlop.set_job_info","v4.0",e,function(e){"1"==e.bcjson.flag?(toastr.success(e.bcjson.msg),s.getWorkList()):toastr.error(e.bcjson.msg),App.unblockUI()})},getTaskList:function(e){var o={jobId:sessionStorage.getItem("jobId"),pageSize:"999"};o=_extends(o,e),$.kingdom.getList({apiName:"bayconnect.superlop.get_job_child_tasks_info",apiVision:"v4.0",params:o,tableId:"J_check_task_table",template:"report-table-info-manage/template/task-list.handlebars",cb:s.getTaskList})}};module.exports=s});