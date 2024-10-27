let prevButton=document.getElementById('prev');
let nextButton=document.getElementById('next');
let container=document.querySelector('.container');
let items=container.querySelectorAll('.item');
let indicators=document.querySelector('.indicators');
let dots=indicators.querySelectorAll('ul li');
let list=container.querySelector('.list');
let description=document.querySelector(".description");
let carInfo=document.querySelector('.car-information');
let h2=document.querySelector('h2');
let active = 0;
let firstposition = 0;
let lastPosition = items.length - 1;
prevButton.onclick=()=>{
  //alert("test")
  list.style.setProperty('--calculation', active===0? '-1':'-1');
  active=active-1<firstposition.active -1;
  setSlider()
  item[active].classList.add('active');
}
nextButton.onclick=()=>{
  list.style.setProperty('--calculation',active===lastPosition?'1':'1')
  active=active +1>lastPosition?0:active+1;
  setSlider()
  item[active].classList.add('active')
}

function setSlider() {
  let itemOld=container.querySelector('.list..item.active');
  itemOld.classList.remove('active');
  let dotsOld=indicators.querySelector('ul li.active');
  dotsOld.classList.add('active');
  indicators.querySelector('.number').innerHTML='0'+(active+1);
  let cor1= '#00ff00';
  let cor2= '#ffd700';
  let cor3= '#ffffff';
  let activeItem=item[active];
  let activeDescription=activeItem.querySelector('.description');
  let activeCarInfo=activeItem.querySelector('.car-information');
  let activeh2=activeItem.querySelector('h2');
  let activeLi=indicator.querySelectorAll('ul li') [active];
  indicator.querySelectorAll('ul li').forEach(li => {
    li.style.backgroundColor='';
  });
  items[active].classList.add('active');
  setSlider();
}
