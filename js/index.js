
var i=0, imgArr=[],textArr=[],j=0;  //宣告使用變數 i 及 陣列 imgArr
imgArr[0] = "image/video-overlay-example.jpg";
imgArr[1] = "image/video-overlay-example_2.jpg";
imgArr[2] = "https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg";

textArr[0] = "美麗咖啡廳";
textArr[1] = "好喝的咖啡";
textArr[2] = "可愛的貓咪";

function showImg(imgNum) {
  if (imgNum>=0) i=imgNum;
  document.getElementById('video-overlay-img').src = imgArr[i]; //指定 img 的 src
  document.getElementById('video-overlay-img-content-id').innerHTML = textArr[i];
  i = (i+1) % 3;  // 把 i加1 之後，除以3(因有三張圖輪播)，將餘數再放回變數 i 裡
} 

function show() { 
  if(j==0){
    j+=1;
    document.getElementById('video-overlay-img').src = imgArr[i]; //指定 img 的 src
    document.getElementById('video-overlay-img-content-id').innerHTML = textArr[i];
  }
  setInterval(showImg, 5000);  //每隔2秒呼叫一次showImg函數
} 

function back(){
  var back = document.getElementsByClassName("back-to-top");
  if(window.scrollY>100){
    document.getElementById("back-to-top-id").style.display = "block";
  }else{
    document.getElementById("back-to-top-id").style.display = "none";
  }
}

function showprevious(){
  if(i-1<0){i=3;}
  i=(i-1)%3;
  document.getElementById('video-overlay-img').src = imgArr[i];
  document.getElementById('video-overlay-img-content-id').innerHTML = textArr[i];
}

function shownext(){
  i=(i+1)%3;
  document.getElementById('video-overlay-img').src = imgArr[i];
  document.getElementById('video-overlay-img-content-id').innerHTML = textArr[i];
}

/*function changeBgc(){
  if(this.scrollY>this.innerHeight /1.5){
    document.body.classList.add("bg-active");
  }else{
    document.body.classList.remove("bg-active");
  }
}*/

function backfun(){
  window.scrollTo(0,0);
}

window.addEventListener('scroll',back);