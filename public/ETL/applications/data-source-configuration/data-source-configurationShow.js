var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};define(function(require,exports,module){var showContent={};require("plugins/jstree/dist/jstree"),require("plugins/drag/kd_drag.js"),require("plugins/jstree/dist/themes/default/style.css"),require("plugins/select2/js/select2.js"),require("plugins/select2/css/select2.css"),require("plugins/bootstrap-fileinput/bootstrap-fileinput.js"),require("plugins/bootstrap-fileinput/bootstrap-fileinput.css"),showContent.load=function(){App.initCheckableTable($("#connect-data-result")),showContent.initForm(),showContent.get_source_connect_List(),showContent.getCurrentTreeData=[],showContent.getConnectTypeData=[],showContent.targetTable=null,$.kingdom.getDict("ROLLBACK_FLAG","[name=rollbackFlag]"),$.kingdom.getDict("BEFORE_RULE","[name=beforeRule]")},showContent.get_source_connect_List=function(t){var e=t?{connectionName:t}:{};$.kingdom.doKoauthAdminAPI("kingdom.retl.get_data_source_config","v4.0",e,function(t){var o=t.bcjson.items||t.bcjson;"1"==t.bcjson.flag&&o&&require.async("./template/data-source-configuration-list.handlebars",function(t){if($(".data-source-configuration-list").html(t(o)),!o[0])return!1;var e=o[0].connectionName,n=o[0].connectionType;$(".data-source-r-header").find("strong").html(e),$(".data-source-r-header").find("span").html(n),$(".data-source-configuration-list li:first-child").click()})})},showContent.getUser=function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_schemas_from_tables_info","v4.0",t,function(t){var e=t.bcjson.items||t.bcjson;"1"==t.bcjson.flag&&e&&require.async("./template/data-source-configuration-option.handlebars",function(t){$("#J_dsc_list_detail #schemName").html("<option value=''>请选择</option>"+t(e))})})},showContent.getConnectType=function(n){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_data_driver_info","v4.0",{},function(t){var e=t.bcjson.items||t.bcjson;showContent.list=e,"1"==t.bcjson.flag&&e&&(showContent.getConnectTypeData=e,require.async("./template/connect-type-list.handlebars",function(t){$("#connection_type").html(t(e)),App.clearForm("data-connect-add-form"),$("#data-connect-add-form input[name='principal']").closest(".form-group").addClass("hide"),$("#J_dsc_commonType_add input[name=jdbc_string]").val(e[0]&&e[0].urlInfo),showContent.currentUrlInfo=e[0]&&e[0].urlInfo,"MySQL"===n?n="Mysql":"Excel"===n?n="XLS文件":"CSV"===n?n="TXT/CSV文件":"星环INCEPTOR"===n?n="星环Inceptor":"CDH"===n&&$("#data-connect-add-form input[name='principal']").closest(".form-group").removeClass("hide"),$.each(e,function(t,e){e.driverName.toUpperCase()===n.toUpperCase()&&$("#data-connect-add-form input[name='db_port']").val(e.dbPort)}),$($("#connection_type").find("option[driverName='"+n+"']")[0]).attr("selected","true").change()}))})},showContent.getConnectType_edit=function(n){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_data_driver_info","v4.0",{},function(t){var e=t.bcjson.items||t.bcjson;showContent.list=e,showContent.data=e,"1"==t.bcjson.flag&&e&&(showContent.getConnectTypeData=e,require.async("./template/connect-type-list.handlebars",function(t){$("#connection_type_edit").html(t(e)),$($("#connection_type_edit").find("option[driverName='"+n+"']")[0]).attr("selected","true")}))})},showContent.qry_connect_data=function(t){var e={connection_id:$(".data-source-configuration-list .click-add-background").attr("connection_id")};e=_extends(e,t),$.kingdom.getList({apiName:"kingdom.retl.get_metadata_table_info",apiVision:"v4.0",params:e,tableId:"connect-data-result",formName:"data-source-configuration-form",pageId:"dsc-pages",template:"data-source-configuration/template/data-source-configuration-datasourcedetail.handlebars",cb:showContent.qry_connect_data})},showContent.testDataConnectList=function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_data_source_connect_test","v4.0",t,function(t){App.unblockUI();var e=t.bcjson;"0"==e.flag?toastr.error(e.msg):toastr.success(e.msg)})},showContent.addDataConnectList=function(t){var e=$.extend({opType:"ADD"},t);$.kingdom.doKoauthAdminAPI("kingdom.retl.set_data_source_config","v4.0",e,function(t){App.unblockUI();var e=t.bcjson;"0"==e.flag?toastr.error(e.msg):(toastr.success(e.msg),App.clearForm("data-connect-add-form"),showContent.get_source_connect_List())})},showContent.editDataConnectList=function(t){var e=$.extend({opType:"UPD"},t);$.kingdom.doKoauthAdminAPI("kingdom.retl.set_data_source_config","v4.0",e,function(t){App.unblockUI();var e=t.bcjson;"0"==e.flag?toastr.error(e.msg):(toastr.success(e.msg),showContent.get_source_connect_List())})},showContent.deleteDataConnect=function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.set_data_source_config","v4.0",t,function(t){App.unblockUI();var e=t.bcjson;"0"==e.flag?toastr.error(e.msg):(toastr.success(e.msg),showContent.get_source_connect_List())})},showContent.getImportDataSource=function(t){var e={connection_id:t};$("#J_tree_import").jstree("destroy"),$.kingdom.doKoauthAdminAPI("kingdom.retl.get_db_metadata_schemas","v4.0",e,function(t){App.unblockUI();var e=t.bcjson.items;showContent.getCurrentTreeData=e,showContent.generateTree(e)})},showContent.listImport=function(n){return new Promise(function(e,t){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_metadata_table_export_info","v4.0",n,function(t){"1"==t.bcjson.flag?e(t):(App.unblockUI(),toastr.error(t.bcjson.msg))})})},showContent.listImport2=function(n,t){return new Promise(function(e,t){$.kingdom.doKoauthAdminAPI("kingdom.retl.file_info","v4.0",n,function(t){"1"==t.bcjson.flag?e(t):(App.unblockUI(),toastr.error(t.bcjson.msg))})})},showContent.listImport3=function(t,e){var n="/retl/rest/admin/v4.0/kingdom.retl.file_download.json?p="+encodeURI(JSON.stringify(t));try{var o=document.createElement("a");o.href=n,o.download=n,o.click(),App.unblockUI()}catch(t){console.error(t)}},showContent.generateTree=function(t,e){var n=[];if(!t)return!1;$.each(t,function(t,o){var a=[];$.each(o.tableList,function(t,e){var n={};"TABLE"===e.tableType?n.text=e.tableName+"<span style='font-size:12px;font-weight:100;'>（表）</span>":n.text=e.tableName+"<span style='font-size:12px;font-weight:100;'>（视图）</span>",n.id="child-"+o.schemaName+"-"+t,n.children=!1,"TABLE"===e.tableType?n.icon="glyphicon glyphicon-list-alt":n.icon="glyphicon glyphicon-modal-window","Y"===e.isExist&&(n.a_attr={class:"is-exit-table"}),a.push(n)});var e={text:o.schemaName+"<span style='font-size:12px;font-weight:100;'>（"+o.tableCounts+"）</span>",id:"parent"+t,children:a};n.push(e)}),$("#J_tree_import").jstree("destroy"),$("#J_tree_import").jstree({ui:{theme_name:"checkbox"},core:{themes:{responsive:!1},check_callback:!0,data:n,multiple:!1,dblclick_toggle:!1},types:{default:{icon:"glyphicon glyphicon-user"}},plugins:["types","checkbox","themes","html_data"],checkbox:{keep_selected_style:!1,three_state:!0,tie_selection:!1}}).on("loaded.jstree",function(){e&&$("#J_tree_import").jstree("open_all")})},showContent.saveTableList=function(){var t=$(".data-source-configuration-list .click-add-background").attr("connection_id"),e=$.kingdom.uniqueArray($("#J_tree_import").jstree("get_checked")),a=[];$.each(e,function(t,e){if(-1<e.indexOf("child")){var n=$("#"+e+" a").text().split("（")[0],o=$("#"+e).closest(".jstree-children").parent("li").find("a:eq(0)").text().split("（")[0];a.push(o+"."+n)}});var n={connection_id:t,tables_info:a.join(",")};App.blockUI({boxed:!0,message:"正在保存"}),$(".blockPage").css("z-index","9999999999999"),$.kingdom.doKoauthAdminAPI("kingdom.retl.set_db_metadata","v4.0",n,function(t){if(App.unblockUI(),"1"===t.bcjson.flag){toastr.success("保存成功"),$(".modal-header button.close").click();var e={pageNumber:"1"};showContent.qry_connect_data(e),showContent.getUser({connection_id:showContent.connect_id})}else toastr.error(t.bcjson.msg)})},showContent.getCheckBoxTableid=function(){var t=$(".data-source-configuration-list .click-add-background").attr("connection_id"),e=$("#connect-data-result .checked"),o=[];return $.each(e,function(t,e){if(0<$(e).find("group-checkable").length)return!1;var n=$(e).closest("td").data("tableid");o.push(n)}),{connection_id:t,tables_id:o.join(",")}},showContent.deleteTableList=function(t,e){var n={};if(t){var o=$(".data-source-configuration-list .click-add-background").attr("connection_id");n.connection_id=o,n.tables_id=e}else if(!(n=showContent.getCheckBoxTableid()))return App.unblockUI(),!1;$.kingdom.doKoauthAdminAPI("kingdom.retl.set_metadata_tables_del","v4.0",n,function(t){if(App.unblockUI(),"1"===t.bcjson.flag){toastr.success("删除成功");var e={pageNumber:"1"};showContent.qry_connect_data(e),showContent.getUser({connection_id:showContent.connect_id})}else toastr.error(t.bcjson.msg)})},showContent.metadataTablesUpd=function(){var t=showContent.getCheckBoxTableid();if(!t)return App.unblockUI(),!1;$.kingdom.doKoauthAdminAPI("kingdom.retl.set_metadata_tables_upd","v4.0",t,function(t){if(App.unblockUI(),"1"===t.bcjson.flag){toastr.success("同步成功");var e={pageNumber:"1"};showContent.qry_connect_data(e),showContent.getUser({connection_id:showContent.connect_id})}else toastr.error(t.bcjson.msg)})},showContent.tableRecordcountUpd=function(){var t=showContent.getCheckBoxTableid();if(!t)return App.unblockUI(),!1;$.kingdom.doKoauthAdminAPI("kingdom.retl.set_table_recordcount_upd","v4.0",t,function(t){if(App.unblockUI(),"1"===t.bcjson.flag){toastr.success("更新成功");var e={pageNumber:"1"};showContent.qry_connect_data(e),showContent.getUser({connection_id:showContent.connect_id})}else toastr.error(t.bcjson.msg)})},showContent.metadataTablesUpdBatch=function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.set_metadata_tables_upd","v4.0",t,function(t){App.unblockUI(),"1"===t.bcjson.flag?(toastr.success("批量同步成功"),showContent.qry_connect_data(),showContent.getUser({connection_id:showContent.connect_id})):toastr.error(t.bcjson.msg)})},showContent.tableRecordcountUpdBatch=function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.set_table_recordcount_upd","v4.0",t,function(t){App.unblockUI(),"1"===t.bcjson.flag?(toastr.success("批量同步成功"),showContent.qry_connect_data(),showContent.getUser({connection_id:showContent.connect_id})):toastr.error(t.bcjson.msg)})},showContent.getTabColumnInfo=function(t){var e={};e.table_id=t,$.kingdom.doKoauthAdminAPI("kingdom.retl.get_metadata_column_info","v4.0",e,function(t){var e=t.bcjson.items||t.bcjson;"1"==t.bcjson.flag&&e&&require.async("./template/tab-column-info-list.handlebars",function(t){$("#des-showtable-info-2-table-body").html(t(e))})})},showContent.previewAction=function(t,e){var n={};n.connection_id=$(".data-source-configuration-list .click-add-background").attr("connection_id"),n.schema=t,n.table_name=e,$.kingdom.doKoauthAdminAPI("kingdom.retl.get_metadata_table_perform","v4.0",n,function(t){var e="<th></th>",n="",o=t.bcjson.items||t.bcjson;if("1"==t.bcjson.flag&&o[0]){for(var a in o[0])e=e+"<th> "+a+"</th>";$("#des-showtable-info-3-thead-tr").html(o[0]?e:"");var i=1,r=!0,c=!1,s=void 0;try{for(var l,d=o[Symbol.iterator]();!(r=(l=d.next()).done);r=!0){var u=l.value,f="";for(var m in f=f+"<td class='t-c'> "+i+"</td>",i++,u)f=f+"<td> "+u[m]+"</td>";n=n+"<tr>"+f+"</tr>"}}catch(t){c=!0,s=t}finally{try{!r&&d.return&&d.return()}finally{if(c)throw s}}$("#des-showtable-info-3-table-body").html(n),$("#des-showtable-info-3-table").removeAttr("style")}else $("#des-showtable-info-3-table").css("display","none"),$("#des-showtable-info-3-table").closest("div").append("<img src='assets/img/nonedata.png' style='margin-left:340px'>")})},showContent.initForm=function(){$("#data-connect-add-form").validate({debug:!0,errorElement:"span",errorClass:"help-block",focusInvalid:!1,rules:{connection_type:{required:!0},connection_name:{required:!0,maxlength:64},server:{required:!0},db_port:{required:!0},db_user:{required:!0},db_database:{required:!0},db_password:{required:!0},jdbc_string:{required:!0},max_connect_count:{numCheck:!0}},invalidHandler:function(){},highlight:function(t){$(t).closest(".form-group").addClass("has-error")},success:function(t){t.closest(".form-group").removeClass("has-error"),t.remove()},errorPlacement:function(t,e){t.insertAfter(e)},submitHandler:function(){}}),$("#data-connect-edit-form").validate({debug:!0,errorElement:"span",errorClass:"help-block",focusInvalid:!1,rules:{connection_type_edit:{required:!0},connection_name_edit:{required:!0},server:{required:!0},db_port:{required:!0},db_user:{required:!0},db_database:{required:!0},db_password:{required:!0},jdbc_string:{required:!0},max_connect_count:{numCheck:!0}},invalidHandler:function(){},highlight:function(t){$(t).closest(".form-group").addClass("has-error")},success:function(t){t.closest(".form-group").removeClass("has-error"),t.remove()},errorPlacement:function(t,e){t.insertAfter(e)},submitHandler:function(){}})},showContent.shouldUpdateCheck=function(){var n=0;return $.each(showContent.filterMainTree,function(t,e){e&&n++}),showContent.filterMainTreeAmount++,showContent.filterMainTreeAmount<=n},showContent.upLoad=function(fileName,fileType){var options={url:window.location.origin+"/superlop/restv2/admin/v2.0/bayconnect.superlop.file_upload.json",type:"POST",dataType:"json",success:function success(data){App.unblockUI(),"string"==typeof data&&(data=eval("("+data+")")),$("#J_mock_form_collection_form input[name='fileName']").val(fileName),$("#J_mock_form_collection_form input[name='fileUrl']").val(data.bcjson.msg);var html='<li><div><i style="padding-right: 10px" class="glyphicon glyphicon-file"></i><span type='+fileType+" fileurl="+data.bcjson.msg+">"+fileName+'</span><i style="float: right" class="glyphicon glyphicon-trash"></i></div></li>';$("#data-source-configuration .excel-choose-block-inside ul").append(html),$("#data-source-configuration .excel-bottom span span").html($("#data-source-configuration .excel-choose-block-inside ul li").length),1===$("#data-source-configuration .excel-choose-block-inside ul li").length&&showContent.getExcelContentList()},error:function(){toastr.info("上传失败"),App.unblockUI()}};$("#J_mock_form_collection_form").ajaxSubmit(options)},showContent.getExcelContentList=function(){if(0===$("#data-source-configuration .excel-choose-block-inside ul li span").length)return!1;var t={fileUrl:$("#data-source-configuration .excel-choose-block-inside ul li span:eq(0)").attr("fileurl"),fileType:$("#data-source-configuration .excel-choose-block-inside ul li span:eq(0)").attr("type")};$.kingdom.doKoauthAdminAPI("kingdom.retl.get_file_content_info","v4.0",t,function(t){if("1"===t.bcjson.flag){showContent.tableHead=[];var e=t.bcjson.items[0],n='<th class="t-c">序号</th>',o='<th style="width:80px;">指定表头</th><th class="t-c">序号</th>',a=0;for(var i in e)n=n+"<th>"+e[i]+"</th>",o=o+"<th>F"+a+"</th>",a++,showContent.tableHead.push(e[i]);n="<tr>"+n+"</tr>",o="<tr>"+o+"</tr>";var r=[].concat(t.bcjson.items);t.bcjson.items.shift();var c=t.bcjson.items,s="",l=0,d=!0,u=!1,f=void 0;try{for(var m,h=c[Symbol.iterator]();!(d=(m=h.next()).done);d=!0){var _=m.value,p=0,g='<td class="t-c">'+ ++l+"</td>";for(var b in _)g=g+"<td> "+_[b]+"</td>",p++;p===a&&(s=s+"<tr>"+g+"</tr>")}}catch(t){u=!0,f=t}finally{try{!d&&h.return&&h.return()}finally{if(u)throw f}}var v="",y=0,C=!0,k=!1,w=void 0;try{for(var A,j=r[Symbol.iterator]();!(C=(A=j.next()).done);C=!0){var x=A.value,I=0,J='<td class="t-c" class="t-c"><input type="checkbox"></td><td class="t-c">'+ ++y+"</td>";for(var T in x)J=J+"<td> "+x[T]+"</td>",I++;I===a&&(v=v+"<tr>"+J+"</tr>")}}catch(t){k=!0,w=t}finally{try{!C&&j.return&&j.return()}finally{if(k)throw w}}$("#J_dsc_produce_head").html(n),$("#J_dsc_produce_body").html(s),$("#J_dsc_produce_head_option").html(o),$("#J_dsc_produce_body_option").html(v),$("#J_dsc_produce_head").closest(".table-scrollable").removeClass("hide"),App.initCheckableTable($("#J_dsc_produce_table"))}else toastr.info("生成表失败")})},showContent.getExcelFileTypeData=function(t){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_file_data_source_info","v4.0",t,function(t){var e=t.bcjson.items||t.bcjson;if("1"==t.bcjson.flag&&e[0]){$("#J_excel_add_tab1 input[name=connectionName]").val(e[0].connectionName);var n='<li><div><i style="padding-right: 10px" class="glyphicon glyphicon-file"></i><span type='+e[0].fileType+" fileurl="+e[0].fileUrl+">"+e[0].fileName+'</span><i style="float: right" class="glyphicon glyphicon-trash"></i></div></li>';$("#data-source-configuration .excel-choose-block-inside ul").append(n),$("#data-source-configuration .excel-bottom span span").html($("#data-source-configuration .excel-choose-block-inside ul li").length),showContent.getExcelContentList(),App.setFormData("J_excel_add_tab2_form",e[0]),showContent.getDataSourceList(function(){showContent.targetTable=e[0].targetTable,$("#J_select2_dcs_target_data_connect").val(e[0].targetConnectionId).change()});var o=JSON.parse(e[0].mappingInfo).mappingColumn;if(0<(showContent.dataFildItems=o).length){var a=!0,i=!1,r=void 0;try{for(var c,s=o[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var l=c.value;l.rowsCount=o.length,l.columnName=l.targetColumn}}catch(t){i=!0,r=t}finally{try{!a&&s.return&&s.return()}finally{if(i)throw r}}require.async("./template/data-field-list-2.handlebars",function(t){$("#J_dsc_field_map_body").html(t(o)),showContent.haddleDataField_2.edit(o),App.initCheckableTable($("#J_dsc_field_map_table"))})}}else toastr.info("数据异常，暂时无法修改")})},showContent.getExcelFileDetail=function(t){$.kingdom.getList({apiName:"kingdom.retl.get_file_data_source_info",apiVision:"v4.0",params:t,tableId:"J_file_data_result",pageId:"J_file_data_result_page",formName:"data-source-configuration-form",template:"data-source-configuration/template/data-source-configuration-datasourcedetail-file.handlebars"})},showContent.getExcelSingleFileDetail=function(i){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_target_table_data_info","v4.0",i,function(t){var e=t.bcjson.items||t.bcjson;if("1"==t.bcjson.flag&&e){var r=0;$.each(e,function(t,e){var n=0;for(var o in e)e[o]&&r<++n&&(r=n)});var o="<tr currentpreparams="+JSON.stringify(i)+">";$.each(e[0],function(t,e){if(e){var n=e.match(/head:\{(.*)\}/);n=n?n[1]:e,o+="<th>"+n+"</th>"}});for(var n=r-(o.split("<th>").length-1),a=0;a<n;a++)o+="<th></th>";o+="<th class='t-c'>操作</th>",o+="</tr>";var c="";e.shift(),$.each(e,function(t,e){var n="<tr currentdata="+JSON.stringify(e)+">",o="";$.each(e,function(t,e){e&&(o+="<td currentkey="+t+">"+e+"</td>")});var a=r-(o.split("</td>").length-1);if(a!==r){for(var i=0;i<a;i++)o+="<td></td>";o+="<td class='t-c'><a href='javascript:;'>编辑</a></td>"}c+=n+=o+"</tr>"}),$("#J_single_file_data_result_head").html(o),$("#J_single_file_data_result_body").html(c)}else toastr.info("数据异常,无法查看")})},showContent.editExcelSingleFileDetail=function(n){$.kingdom.doKoauthAdminAPI("kingdom.retl.set_target_table_data","v4.0",n,function(t){App.unblockUI();var e=t.bcjson.items||t.bcjson;"1"==t.bcjson.flag&&e?(delete n.dataInfo,showContent.getExcelSingleFileDetail(n)):toastr.info("保存失败")})},showContent.getDataSourceList=function(l){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_data_source_config","v4.0",{},function(t){if("1"==t.bcjson.flag){var e=t.bcjson.items,n=[{id:"",text:""}];if(e&&0<e.length){var o=!0,a=!1,i=void 0;try{for(var r,c=e[Symbol.iterator]();!(o=(r=c.next()).done);o=!0){var s=r.value;'<option value="'+s.connectionId+'"">'+s.connectionName+"</option>",n.push({id:s.connectionId,text:s.connectionName})}}catch(t){a=!0,i=t}finally{try{!o&&c.return&&c.return()}finally{if(a)throw i}}}$("#J_select2_dcs_target_data_connect").select2({data:n,placeholder:"- 请选择 -"}),"function"==typeof l&&l()}})},showContent.getTableList=function(t,d,u,f){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_metadata_table_info","v4.0",t,function(t){if("1"==t.bcjson.flag){var e=t.bcjson.items,n=[{id:"",text:""}],o=[];if(e){var a=!0,i=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var l=c.value;n.push({id:l.tableId,text:l.schemName+"."+l.tableName+"("+l.mdType+")"}),o.push({id:l.tableId,text:l.schemName+"."+l.tableName})}}catch(t){i=!0,r=t}finally{try{!a&&s.return&&s.return()}finally{if(i)throw r}}}$(d).empty().clearInputs(),$(d).select2({data:n,placeholder:"- 请选择 -",tags:u}),$(d).data("origin",o),"function"==typeof f&&f()}})},showContent.getDataField_2=function(t,l){$.kingdom.doKoauthAdminAPI("kingdom.retl.get_metadata_column_info","v4.0",t,function(t){if("1"==t.bcjson.flag){var e=t.bcjson.items;if(0===e.length)return void toastr.info("没有查询到映射字段");var n=0,o=!0,a=!1,i=void 0;try{for(var r,c=e[Symbol.iterator]();!(o=(r=c.next()).done);o=!0){var s=r.value;s.rowsCount=e.length,s.tableHeader=showContent.tableHead[n],n++}}catch(t){a=!0,i=t}finally{try{!o&&c.return&&c.return()}finally{if(a)throw i}}require.async("./template/data-field-list-2.handlebars",function(t){$("#J_dsc_field_map_body").html(t(e)),showContent.haddleDataField_2.init(e),App.initCheckableTable($("#J_dsc_field_map_table")),"function"==typeof l&&l()})}})},showContent.haddleDataField_2={init:function(t){var e='<select class="form-control input-sm">';e+='<option value="">--请选择--</option>';var n=!0,o=!1,a=void 0;try{for(var i,r=t[Symbol.iterator]();!(n=(i=r.next()).done);n=!0){var c=i.value;e+='<option value="'+c.columnName+'">'+c.columnName+"</option>"}}catch(t){o=!0,a=t}finally{try{!n&&r.return&&r.return()}finally{if(o)throw a}}e+="</select>",$.each($("#J_dsc_field_map_body [data-type=target]"),function(){var t=$.trim($(this).html());t&&$(this).html(e).attr("inited","inited").children().val(t)})},edit:function(t){var e='<select class="form-control input-sm">';e+='<option value="">--请选择--</option>';var n=!0,o=!1,a=void 0;try{for(var i,r=t[Symbol.iterator]();!(n=(i=r.next()).done);n=!0){var c=i.value;e+='<option value="'+c.columnName+'">'+c.columnName+"</option>"}}catch(t){o=!0,a=t}finally{try{!n&&r.return&&r.return()}finally{if(o)throw a}}e+="</select>",$.each($("#J_dsc_field_map_body [data-type=target]:not([inited])"),function(){var t=$.trim($(this).html());t&&$(this).html(e).attr("inited","inited").children().val(t)})},refresh:function(){$.each($("#J_dsc_field_map_body tr td[data-type]"),function(){var t=$(this).data("origin");$(this).children().val(t)})},getRow:function(){return $("#J_dsc_field_map_body tr").length},delCheckedRow:function(){$.each($("#J_dsc_field_map_body input[type=checkbox]:checked"),function(t){$(this).closest("tr").remove()}),showContent.haddleDataField_2.reorder()},reorder:function(){$.each($("#J_dsc_field_map_body tr"),function(t){$(this).find("td:first").text(t+1),$(this).find("td[data-type=import]").html(" 第 "+(t+1)+" 列 ")})},getData:function(){var a=new Array;return $.each($("#J_dsc_field_map_body tr"),function(t){var e,n=$(this).find("[data-type=target] select").val(),o={no:e=(t+1).toString(),sourceColumn:e,targetColumn:n};n&&a.push(o)}),JSON.stringify({mappingColumn:a})}},showContent.hideShowBlock=function(t){$("#data-source-configuration #J_dsc_back_to_list").addClass("hide"),$("#data-source-configuration #J_dsc_list_detail,#data-source-configuration #J_dsc_commonType_add,#data-source-configuration #J_dsc_fileType_add,#data-source-configuration #J_dsc_file_list_detail,#data-source-configuration #J_dsc_file_list_single_detail,#data-source-configuration #J_dsc_commonType_edit").addClass("hide"),$("#data-source-configuration "+t).removeClass("hide")},showContent.clearFileBlock=function(){$("#J_excel_add_tab1 input[name='connectionName']").val(""),$("#J_dsc_clear_file").click(),App.clearForm("J_excel_add_tab2_form"),$(".select2-hidden-accessible").empty().clearInputs(),$("#J_dsc_field_map_body").html(""),$("#data-source-configuration #J_dsc_pre_step").click(),$("#data-source-configuration #J_dsc_pre_step").click()},module.exports=showContent});