<template>
    

<!-- <body class="hold-transition login-page"> -->
<div class="login-box">
  <div class="login-logo">
    <a href="#"><b>nuk</b> 管理平台</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <!-- <p class="login-box-msg">Sign in to start your session</p> -->

      <form action="../../index3.html" method="post">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Manager ID" id="manager_id">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Manager Password" id="manager_pwd">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div> -->
          <!-- /.col -->
          <div class="col-4">
            <button type="button" class="btn btn-primary btn-block" id="sign_in">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->


</template>




<script>

// $(function(){
//     $("body").on('click','#sign_in',function(){
//         var api = './api/manager_login';
//         $.post(api,{
//             manager_id:$("#manager_id").val(),
//             manager_pwd:$("#manager_pwd").val()
//         },function(data){
//             console.log(data);
//             if(data.sys_code == '200'){
//                 location.href="./admin_nuk/index";
//             }else{
//                 Swal.fire('登入錯誤');
//             }
//         },'json')
//     })
// })
</script>

