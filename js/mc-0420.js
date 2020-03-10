$(function() {
  $('#handleCounter1').handleCounter({
      minimum: 1,
      maximize: 5,
    })
  $('#handleCounter2').handleCounter({
  minimum: 0,
  maximize: 2,
  })
  $('#handleCounter3').handleCounter({
  minimum: 0,
  maximize: 3,
  })
  // 돌아가기
  $('#header-btn').click(function(e) {
    e.preventDefault();
    $('.alert-page').show();
  })
  $('#btn-yes').click(function(e) {
    e.preventDefault();
    var reserve=getReserve()
    reserve.pop()
    location.href="mc-0300.html";
  })
  $('#btn-no').click(function(e) {
    e.preventDefault();
    $('.alert-page').hide();
  })
  $('#btn-next').click(function (e) { 
    e.preventDefault();
    var child=$('#usechild').val();
    var adult=$('#useadult').val();
    var safeSeat=$('#usesafeseat').val();
    var reserve=getReserve()

    // reserve.forEach((obj, i) => {
    //   if(id==obj.callDate){
    //     reserve.splice(i,1)
    //   }
    // });
    for(var i=0; i<reserve.length; i++){
        if(i==reserve.length-1){
            reserve[i].useChild=child;
            reserve[i].useAdult=adult;
            reserve[i].useSafeSeat=safeSeat;
        }
    }
    setReserve(reserve);
    location.href="mc-0430.html"
  });
})  



