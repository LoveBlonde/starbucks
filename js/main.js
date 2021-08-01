const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function () {

  searchInputEl.focus();
});

// 위 함수는  클릭을 받으면 함수를 실행하는데 그 함수가 바로 
// searchInputEl을 focus한다는 함수다. 
// 이로써 Input 요소 자체를 선택하지 않아도  인풋요소가 소속되어있는 search 라는 클래스 div 소속 아무곳이나 클릭해도 
// Input이 포커스가 되도록하게 해준다. 

searchInputEl.addEventListener('focus', function(){

  searchEl.classList.add('focused'); // search 클래스에 focused를 추가함 
  searchInputEl.setAttribute('placeholder', '통합검색'); // input요소에 placeholder 요소를 추가함.
});

// blur는 포커스가 해제 되었을때를 의미  => input 요소의 포커스가 해제 됬을때 다음 함수들을 실행시킨다.
searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused'); // search 클래스에 focused를 삭제함
  searchInputEl.setAttribute('placeholder', '');
});