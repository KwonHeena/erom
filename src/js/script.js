// 헤더 서브메뉴
let navi = document.querySelectorAll('nav .nav_inner > .depth01_wrap > li');

navi.forEach((item) => {
  let subMenu = item.querySelector('.depth02_wrap');
  let h = subMenu.scrollHeight + 40;
  item.addEventListener("mouseenter", () => {
    item.classList.add("on");
    subMenu.style.height = h + "px";
    subMenu.style.padding = "20px 0";
    subMenu.style.marginTop = "0";
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("on");
    subMenu.style.height = "0";
    subMenu.style.padding = "0";
    subMenu.style.marginTop = "2em";
  });
});

// 언어 선택
let he = document.querySelector('.lang_list');
function langBtn(e){
  e.classList.toggle('toggle');

  if(e.classList.contains('toggle')){
    he.style.height = he.scrollHeight + 'px';
  }else{
    he.style.height = '0';
  }
}
let lang = document.querySelector('.lang_ko');
document.addEventListener('click', (e) => {
  if(!lang.contains(e.target)){
    lang.classList.remove('toggle');
    he.style.height = '0';
  }
});

// 사이트맵
function hamberger(e){
  let fix = document.querySelector('body');
  let allMenu = document.querySelector('.all_menu_inner');
  e.classList.toggle('on');

  if(e.classList.contains('on')){
    fix.classList.add('fix');
    allMenu.classList.add('on');
  }else{
    fix.classList.remove('fix');
    allMenu.classList.remove('on');
  }
}

// 패밀리사이트
function siteOpen(e) {
  e.classList.toggle("active");
}
let siteBtn = document.querySelector('#siteBtn');
document.addEventListener('click', function(e){
  if(!siteBtn.contains(e.target)){
    siteBtn.classList.remove('active');
  }
}); 

// 섹션 on 추가
function scrollSet(){
  let scrollY = window.scrollY;
  let sections = document.querySelectorAll('section');

  sections.forEach((sec, idx) => {
    let secT = sec.offsetTop;
    let secH = sec.offsetHeight;

    // 섹션시작위치 - (섹션 높이의 70%)
    let start = secT - (secH * 0.7);
    let end = secT + secH;

    if(idx === 2){
      start = (secT - 300) - (secH * 0.7);
      if(scrollY >= start && scrollY < end){
        sec.classList.add('on');
      }
    }

    if(idx === 4){
      start = secT - (secH * 0.4);
      if(scrollY >= start && scrollY < end){
        sec.classList.add('on');
      }
    }

    if(scrollY >= start && scrollY < end){
      sec.classList.add('on');
    }
    else{
      sec.classList.remove('on');
    }
  });
}

scrollSet()
window.addEventListener('scroll', scrollSet);


// 슬라이드
let slideBox = document.querySelector('.section01_slide ul');
let slideTotal = document.querySelectorAll('.section01_slide ul li');
let totalCount = slideTotal.length - 2; // 실제 슬라이드 수
let current = document.querySelector('.current');
let total = document.querySelector('.total');
let progress = document.querySelector('.bar span');
let page = 1;

let count = 1; // 첫번째 실제 슬라이드부터
let moveStep = 100 / slideTotal.length;

total.innerText = totalCount;
setSlide();

// 자동 슬라이드
slideBox.style.transition = 'none';
let slideStart = setInterval(nextBtn, 3000);

function setSlide() {
  slideBox.style.transform = `translateX(${-moveStep * count}%)`;
  slideBox.style.transition = '0.5s';
  current.innerText = count;
  progress.style.width = (count / totalCount) * 100 + '%';
}

function nextBtn() {
  count++;
  setSlide();
  current.innerText = `${count === 6 ? 1 : count}`;
}

function prevBtn() {
  count--;
  setSlide();
  current.innerText = `${count === 0 ? 5 : count}`;
}

// 무한루프
slideBox.addEventListener('transitionend', () => {
  if(count >= slideTotal.length - 1){
    slideBox.style.transition = 'none';
    count = 1;
    current.innerText = `${count === 6 ? 1 : count}`;
    progress.style.width = (count / totalCount) * 100 + '%';
    slideBox.style.transform = `translateX(${-moveStep * count}%)`;
    slideBox.offsetWidth; 
    slideBox.style.transition = '0.5s';
    
  }
  else if(count <= 0){
    slideBox.style.transition = 'none';
    count = slideTotal.length - 2; 
    current.innerText = `${count === 6 ? 1 : count}`;
    progress.style.width = (count / totalCount) * 100 + '%';
    slideBox.style.transform = `translateX(${-moveStep * count}%)`;
    slideBox.offsetWidth;
    slideBox.style.transition = '0.5s';
  }
});

// 탑버튼
function topFun(){
  window.scrollTo({top: 0, behavior: "smooth"})
}