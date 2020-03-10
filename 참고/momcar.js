$(function(){
   $('button').click(function (e) { 
      e.preventDefault();
      var name=$('#name').val();
      var age=$('#age').val();
      var myInfo={
         name:name,
         age:age
      }
      console.log(myInfo);
      var jsonMyInfo=JSON.stringify(myInfo);
      console.log(jsonMyInfo);
      localStorage.setItem('myInfo',jsonMyInfo);
   });
})

