# ![Logo](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcI8p4U%2FbtqF5AHOUK1%2F8kBGabwrPrNnWruogRVPJ1%2Fimg.png) 
# Momcar(맘카) 어플리케이션

### 1) 프로젝트 정보
* 아픈 아이 부모를 위한 호출 서비스
* &아이 건강 기록을 할 수 있는 헬스 케어 서비스(가상)

### 2)URL
* WebPage: https://yul-i.github.io/momcar/
* InfoPage : https://yul-i.github.io/portfolio4.html
---
### 3)제작 과정 및 포트폴리오
* [앱_프로젝트_기획서.pdf](https://drive.google.com/file/d/1DUAR_wdPewBaR2HMg-ngR0_FzZfgq5xg/view?usp=sharing "맘카프로젝트기획서")
* [화면설계서.pdf](https://drive.google.com/file/d/1nH70tYnk5Kowg_FvHMNoxPVsHc3rC_pC/view "맘카화면설계서")
* [네비게이션_IA.pdf](https://drive.google.com/file/d/1ENaKGwUWfsJom7v5mfKCwocG2iK6-0lb/view "네비게이션IA")
* 스타일가이드 : 하단 7)StyleGuide 참조
---
### 4)사용된 기술
* 모바일 웹 어플리케이션(Mobile Web application)
* ![Html5](https://img.shields.io/badge/HTML5-red) ![CSS3](https://img.shields.io/badge/CSS3-blue) ![javascript](https://img.shields.io/badge/JavaScript-yellow) ![jquery](https://img.shields.io/badge/jQuery-orange) ![Photoshop](https://img.shields.io/badge/Photoshop-blue) ![illustrator](https://img.shields.io/badge/illustrator-orange) ![Figma](https://img.shields.io/badge/Figma-blueviolet)

### 5)페이지 설명(+주요 기능, 세부내용은 네비게이션 IA 참조)
#### 1. MC-0000 
    * Intro Page  
    * 360도 회전 Animation CSS 효과
    * 3초 뒤 다음 페이지로 이동
#### 2. MC-0100~0120
    * Login&회원정보 페이지
    * 로그인/회원가입/ID&PW 찾기
    * 입력사항 작성하지 않으면 조건 충족할때까지 메시지 팝업 뜸.
#### 3. MC-0200
    * Guide Page
    * SwiperSlide Plug-in 사용한 슬라이드 효과
#### 4. MC-0300
    * Main Page&네비게이션 페이지
    * 마이페이지 버튼 클릭시 아이관리 레이어팝업 스와이프 효과로 나타나고 사라짐
#### 5. MC-0400~MC-0493
    * 호출서비스(진행형)
    * 선택한 호출 방식에 따라 날짜 지정 페이지 유무 다름
    * DatePicker, RollingSelect Plug-in 사용하여 날짜 및 숫자 선택시 롤링효과로 재미 부여함.
    * 각 페이지에서 저장된 데이터는 JSON 형태로 LocalStorige에 저장 및 출력됨. 과정을 중도포기시 해당 Object는 자동 삭제됨.
    * 지도 및 주소 검색 기능은 카카오 map API를 사용하였음.
#### 6. MC-0500
    * 응급의료시설정보(FullPage)
    * (예정) 현재 GPS 권한을 받아 인근에 있는 병원 정보가 출력되게 함.
#### 7. MC-0600~0611
    * 아이 건강정보(카드뉴스형)
    * 각 페이지에서 저장된 데이터는 JSON 형태로 LocalStorige에 저장 및 출력됨. 과정을 중도포기시 해당 Object는 자동 삭제됨.
    * 저장한 데이터 날짜별로 리스트 출력되게 함
    * 히스토리의 카테고리별 버튼 누르면 해당 카테고리 글들만 나오는 필터 기능
#### 8. MC-0800~0840
    * 기타 화면(공지사항, 문의하기, 설정 등)
    * 컴포넌트 효과로 아코디언 사용
    * 설정은 CSS로 스위치 모양 사용
#### 9. MC-0900~0920
    * 레이어 팝업
    * Swipe 효과로 나타나고 사라지는 효과
#### 10. MC-1000~1012 
    * 메시지 팝업
    * 경고 메시지 출력 후 2초 뒤 사라짐
    * 경고 메시지 출력 후 확인/취소 버튼 누르면 각 페이지로 이동 기능

### 6)View
![Momcar목업](https://yul-i.github.io/images/momcar-mockup.PNG)

### 7)StyleGuide
![Momcar_스타일가이드](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVlOQQ%2FbtqF6DYDPhI%2F8k5CjrkYy3xskylfK5jlo1%2Fimg.jpg)
