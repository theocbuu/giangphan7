$(document).ready(function(){
  $('#add-task-form-1').submit(function(e){
    e.preventDefault();
    if($("input[name='task-name']").val()==""||$("input[name='description']").val()==""){
      document.getElementById("msg1").innerHTML="<p"+
      "style='color:red'>***All fields are need to be filled!</p>"
      return false;
    }else{
      $.ajax({
        type:'post',
        url:'/add/task',
        data:{
          task_name:$("input[name='task-name']").val(),
          description:$("textarea[name='tsk-description']").val(),
          state:$( "#tsk-state option:selected" ).text(),
          prj_id:$("input[name='prj_id']").val()
        },
        success:function(prj_id){
          window.location.href='/project/'+prj_id;
          //console.log($("input[name='description']").val());
        },
        error:function(){
          document.getElementById("msg1").innerHTML="<p"+
          "style='color:red'>***Error posting this project!</p>"
        }
      });
    }
  });
})
