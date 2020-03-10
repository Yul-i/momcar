$(function() {
    
  // 이미지 업로드
  var upload = document.getElementsByTagName('input')[0],
      holder = document.getElementById('holder'),
      state = document.getElementById('status');

  if (typeof window.FileReader === 'undefined') {
    state.className = 'fail';
  } else {
    state.className = 'success';
    state.innerHTML = '아이 프로필 사진을 등록할 수 있습니다.';
  }
  
  upload.onchange = function (e) {
    e.preventDefault();

    var file = upload.files[0],
        reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.src = event.target.result;
      // note: no onload required since we've got the dataurl...I think! :)
      if (img.width > 560) { // holder width
        img.width = 560;
      }
      holder.innerHTML = '';
      holder.appendChild(img);
    };
    reader.readAsDataURL(file);

    return false;
    };


  // 룰렛 번호 입력

  $('.year-drum').drum({
      min: 10,
      max: 20,
      value: 20
    });
    $('.month-drum').drum({
      min: 1,
      max: 12,
      value: 1
    });
    $('.day-drum').drum({
      min: 1,
      max: 31,
      value: 1
    });
    $('.time-drum').drum({
      classes: {
          'drum-viewport': 'drum-1'
        }
    });
    $('#footer-btn').click(function (e) { 
      e.preventDefault();
      var year=$('.year-drum').find('.drum-item-current').data('value');
      var month=$('.month-drum').find('.drum-item-current').data('value');
      var day=$('.day-drum').find('.drum-item-current').data('value');
      var time=$('.month-drum').find('.drum-item-current').data('value');
    });
})

