var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.5551399,126.9347011), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();


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
                   // 주소로 좌표를 검색합니다
            geocoder.addressSearch(writeAddress, function(result, status) {

                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {

                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: '<div style="width:150px;text-align:center;padding:6px 0;">출발지</div>'
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                } 
            });    
              });
            }
            $('#address-search').mouseup(function() {
                $('#address-list').hide();
                $('#address-list').empty();
            })

         
    };
    places.keywordSearch(addressVal,callback,{size:10});
}
   

function keyEvent2(el){
    var places = new kakao.maps.services.Places();
    var addressVal=el.value;
    console.log(addressVal);
    
    var callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            console.log(result);
            $('#address-depature-list').show();
            $('#address-depature-list').empty();
            result.forEach(el => {
                if (el.category_group_code=="HP8") {
                    $('#address-depature-list').append(`
                    <li>
                        ${el.road_address_name} ${el.place_name}
                    </li>
                    `)
                }
            });
            $('#address-depature-list li').click(function(e){
                e.preventDefault();
                var selectAddress=$(this).text();
                var writeAddress=$.trim(selectAddress)
                $('#address-depature-search').val(writeAddress);
                $('#address-depature-list').hide();
                   // 주소로 좌표를 검색합니다
            geocoder.addressSearch(writeAddress, function(result, status) {

                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {

                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: '<div style="width:150px;text-align:center;padding:6px 0;">도착지</div>'
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                } 
            });    
              });
            }
            $('#address-depature-search').mouseup(function() {
                $('#address-depature-list').hide();
                $('#address-depature-list').empty();
            })

         
    };
    places.keywordSearch(addressVal,callback,{size:10});
}
