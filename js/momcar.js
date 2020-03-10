// 버튼 공통
$(function() {
    // 경고창 버튼 닫기
    $('#btn-confirm').click(function (e) { 
        e.preventDefault();
        $(this).parents('aside').hide();
    });
    // 경고창 확인 버튼
    $('#btn-yes').click(function (e) { 
        e.preventDefault();
        // 저장소 지우기
        // location.href='mc-0300.html';
    });
    // 경고창 취소 버튼
    $('#btn-no').click(function (e) { 
        e.preventDefault();
        $(this).parents('aside').hide();
    });
})


// input[type=text]에 주소 자동완성

function keyEvent(el){
    var places = new kakao.maps.services.Places();
    var addressVal=el.value;
    console.log(addressVal);
    
    var callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            console.log(result);
            $('#address-list').show();
            $('#address-list').empty();
            result.forEach(el => {
                $('#address-list').append(`
                    <li>
                        ${el.road_address_name} ${el.place_name}
                    </li>
                `)
            });
            $('#address-list li').click(function(e){
                e.preventDefault();
                var selectAddress=$(this).text();
                var writeAddress=$.trim(selectAddress)
                $('#address-search').val(writeAddress);
                $('#address-list').hide();
              });
            }
            $('#address-search').mouseup(function() {
                $('#address-list').hide();
                $('#address-list').empty();
            })
    };
    places.keywordSearch(addressVal,callback,{size:10});
}


    // 입력값 json저장하기
    // 저장소에 예약 저장하기
    function setReserve(reserve){
        var reserveJSON=JSON.stringify(reserve);
        localStorage.setItem('reserve',reserveJSON);
    }

    // 저장소에 예약 가져오기

    function getReserve(){
        var reserveJSON=localStorage.getItem('reserve');
        return JSON.parse(reserveJSON);
    }

    //현재 날짜와 시간 구하기 
    function date() {
        var date=new Date().toLocaleDateString();
        date=date.slice(0, -1);
        var time=new Date().toLocaleTimeString();
        return date+' '+time;
    }

    // 데모 데이터 \

    var reserve=getReserve();
    if (reserve==null) {
        $.ajax({
            url:'js/data.json',
            type:'get',
            success:function(reserve) {
                console.log('어플리케이션 최초 실행');
                setReserve(reserve);
                // 아래 추가 되는 양식 정하기
                reserveList(reserve);
            }
        })
    }