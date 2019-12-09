/*
 * @Last Modified by: lanjianyan
 * @Last Modified time: 2019-04-08 10:46:25
 */
define(function (require, exports, module) {
    var showContent = require("./report-table-info-manageShow");
    const PAGE = location.hash.split("?")[0].replace("#", ".page-");
    var init = {
        load: function () {
            showContent.load(); //加载页面数据
             //初始化拖动
          var oBar = document.getElementById("J_drag_bar2");
          var oTarget = document.getElementById("J_drag_bar2");
          startDrag(oBar, oTarget, ".J_drag_bar2_left-side", ".J_drag_bar2_right-content", function () {
            //   LFWIDTH = $('.left-side').width();
             
          });
        } 
    };
    $(function () { //在进行dom操作的时候，务必指定dom的唯一class标识 
        // 树名称超出隐藏
        $("body").on("click", `${PAGE} #J_flow_tree .jstree-ocl`, function(){
            App.treeEllipsis("#J_flow_tree");
        })

        // 弹出新窗口
        $("body").on("click", `${PAGE} #J_process_add`, function() {
            window.open(`/ETL/retl-process/design.html`);
        });

        // 高级查询 
        $("body").on("click", `${PAGE} #J_work_search`, function() {
            showContent.getWorkList();
        });

        // 编辑操作
        $("body").on("click", `${PAGE} #J_process_edit`, function() {
            let checked = $("#J_work_table tbody input[type=checkbox]:checked");
            if (checked.length !== 1) {
                toastr.info("Please select a job");
                return;
            }
            if (checked.length > 1) {
                toastr.info("Please select one job only");
                return;
            }
            let jobId = checked.attr("jobId");
            let jobName = checked.attr("jobName");
            let folderId = checked.attr("folderId");
            if(jobId) window.open(`/ETL/retl-process/design.html?jobId=${jobId}&jobName=${jobName}&folderId=${folderId}`);
        });

        // 复制操作
        $("body").on("click", `${PAGE} #copy_work`, function() {
            let checked = $("#J_work_table tbody input[type=checkbox]:checked");
            if (checked.length !== 1) {
                toastr.info("Please select a job");
                return;
            }
            // if (checked.length > 1) {
            //     toastr.info("编辑只能请择一条作业");
            //     return;
            // }
            let jobId = checked.attr("jobId");
            showContent.copyWorkList({"jobId":jobId});
        });

        // 点击移动
        $("body").on("click", `${PAGE} #J_work_move`, function() {
            let dom = $("#J_work_table tbody input:checked");
            let arr = [];
            if (dom.length ===0) {
                toastr.info("Please select one job at least");
                return;
            }
            $.each(dom, function() {
                let jobId = $(this).attr("jobid");
                arr.push(jobId);
            })
            let folderId = $(dom[0]).attr("folderid");
            $(`${PAGE} #J_work_move_modal [data-type=confirm]`).data("jobId", arr.join(","));
            // 选中modal里的树
            $(`#J_work_move_modal [type=jstree]`).jstree(true).open_all();
            $(`#J_work_move_modal [type=jstree] [folderid=${folderId}]>.jstree-anchor`).click();
            $("#J_work_move_modal").modal("show");
        });

        // 点击移动确认
        $("body").on("click", `${PAGE} #J_work_move_modal [data-type=confirm]`, function() {
            let folderId = $("#J_work_move_modal [name=folderId]").val();
            if (!folderId) {
                toastr.info("Please select the target file");
                return;
            }
            // let soureFolderId = $(this).data("folderId");
            let jobId = $(this).data("jobId");
            $("#J_work_move_modal").modal("show");
            showContent.moveWorkInfo({ 
                folderId,
                jobId
            });
        });
           // 点击作业名称跳转至编辑页面
           $("body").on("click", `${PAGE} #J_relate_plan_list a`, function() {
            let jobId = $(this).data("obj").jobId;
            let jobName = $(this).data("obj").jobName;
            let folderId = $(this).data("obj").folderId;
            if(jobId) window.open(`/ETL/retl-process/design.html?jobId=${jobId}&jobName=${jobName}&folderId=${folderId}`);
        });
        // 删除任务
        $("body").on("click", `${PAGE} #J_process_del`, function() {
            let dom = $("#J_work_table tbody input:checked");
            if (dom.length === 0) {
                toastr.info("Please select one job at least");
                return;
            }
            let arr = [];
            $.each(dom, function() {
                let jobId = $(this).attr("jobid");
                arr.push(jobId);
            })
            bootbox.confirm("Please confirm that you want to delete this task.", function(result) {
                if (result) {
                    showContent.delyWorkList({
                        job_id: arr.join(","),
                        operType: "DEL"
                    });
                }
            });
        });

        // 点击树
        $("body").on("click", `${PAGE} #J_flow_tree .jstree-anchor`, function() {
            showContent.getWorkList();
        });

        // 点击查看
        $("body").on("click", `${PAGE} #J_work_table a[name=check]`, function() {
            let jobId = $(this).attr("jobId");
            sessionStorage.setItem("jobId", jobId);
            showContent.getTaskList();
            $("#J_check_task_modal").modal("show");
        });
        window.onhashchange =  function() {
            console.log('sss')
        };
    });
    module.exports = init;
});