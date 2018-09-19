!function(){
  var duration = 50
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 1
        break
    }
  })
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run(){
      n+=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }
  let code = `/*
 * 首先，需要准备一个哆啦A梦
 */

.doraemon {
  height: 350px;
  width: 350px;
  float: left;
}

/*哆啦A梦的头*/
.head {
  height: 150px;
  overflow: hidden;
  width: 165px;
  z-index: 2;
  border: 1px solid black;
  background-color: rgb(2, 159, 227);
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
   position: relative;
}

/*他的眼睛*/
.eyes {
  height: 40px;
  margin: -5px auto 0;
  padding-top: 5px;
  width: 60px;
}

.eye-left {
  float: left;
  margin-left: 1px;
  border: 2px solid #000;
  box-sizing: border-box;
  height: 40px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
}

.eye-right {
  float: right;
  margin-left: 29px;
  border: 2px solid #000;
  box-sizing: border-box;
  height: 40px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
}

.eye-pupil-left {
  left: 16px;
  background-color: black;
  height: 9px;
  width: 9px;
  border-radius: 50%;
  top: 15px;
  position: relative;
}

.eye-pupil-right {
  left: 5px;
  background-color: black;
  height: 9px;
  width: 9px;
  border-radius: 50%;
  top: 15px;
  position: relative;
}
/*哆啦A梦的脸*/
.face {
  border-top-left-radius: 45% 60%;
  border-top-right-radius: 45% 60%;
  border-bottom-left-radius: 60% 85%;
  border-bottom-right-radius: 60% 85%;
  height: 115px;
  margin: -15px auto;
  width: 135px;
  z-index: 5;
  border: 2px solid black;
  background-color: white;
}

/* 他的鼻子 */
.nose {
  height: 19px;
  margin: 8px auto 0;
  width: 19px;
  border: 2px solid black;
  position: relative;
  border-radius: 50%;
}
.nose-light {
  height: 5px;
  right: 5px;
  top: 4px;
  width: 5px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
}
/* 胡须来了 */
.nasal-groove {
  height: 23px;
  width: 2px;
  z-index: 12;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
}

.bread-field {
  height: 22px;
  width: 120px;
  z-index: 10;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.bread-left-1 {
  top: -3px;
  left: 5px;
  -webkit-transform-origin: right top;
  height: 1px;
  width: 40px;
  -webkit-transform: rotate(20deg);
  background-color: black;
  position: absolute;
}

.bread-left-2 {
  top: 5px;
  -webkit-transform: rotate(5deg);
  left: 5px;
  -webkit-transform-origin: right top;
  height: 1px;
  width: 40px;
  background-color: black;
  position: absolute;
}

.bread-left-3 {
  top: 10px;
  -webkit-transform: rotate(-15deg);
  left: 5px;
  -webkit-transform-origin: right top;
  height: 1px;
  width: 40px;
  background-color: black;
  position: absolute;
}

.bread-right-1 {
  top: -3px;
  -webkit-transform: rotate(-20deg);
  height: 1px;
  width: 40px;
  right: 5px;
  -webkit-transform-origin: left top;
  position: absolute;
  background-color: black;
}
.bread-right-2 {
  top: 5px;
  -webkit-transform: rotate(-5deg);
  height: 1px;
  width: 40px;
  right: 5px;
  -webkit-transform-origin: left top;
  position: absolute;
  background-color: black;
}

.bread-right-3 {
  top: 10px;
  -webkit-transform: rotate(15deg);
  height: 1px;
  width: 40px;
  right: 5px;
  -webkit-transform-origin: left top;
  position: absolute;
  background-color: black;
}

/* 上嘴唇来了 */
.lips {
  height: 5px;
  width: 125px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.lips-center-left {
  height: 20px;
  margin-left: 5px;
  overflow: hidden;
  width: 20px;
  float: left;
}
.lips-center {
  height: 28px;
  overflow: hidden;
  width: 73px;
  float: left;
  background-color: white;
}

.lips-center-inside {
  border-top-left-radius: 65%;
  border-top-right-radius: 65%;
  border-style: none;
  border-top-style: solid;
  height: 38px;
  margin-left: -25px;
  width: 125px;
  border: 2px solid black;
  background-color: #E80115;
 
  margin-right: auto;
  position: relative;
}


.lips-center-left-inside {
  border-bottom-left-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border: 2px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  content: " ";
  display: block;
  height: 23px;
  margin-left: -18px;
  margin-top: -19px;
  width: 65px;
  
  background-color: white;
  border-radius: 50%;
}

.lips-center-right {
  height: 19px;
  overflow: hidden;
  width: 20px;
  float: left;
}

.lips-center-right-inside {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 2px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  content: " ";
  display: block;
  height: 23px;
  margin-left: -17px;
  margin-top: -18px;
  width: 50px;
  
  background-color: white;
}

.lips-left {
  border-top-left-radius: 60% 50%;
  border-top-right-radius: 0%;
  border-bottom-left-radius: 75% 50%;
  border-bottom-right-radius: 0%;
  
  border: 2px solid black;
  border-right: none;
  height: 30px;
  left: -11px;
  top: -27px;
  width: 20px;
  background-color: white;
  position: absolute;
  -webkit-transform: rotate(-9deg);
}
.lips-right {
  border-top-right-radius: 55% 50%;
  border-top-left-radius: 0%;
  border-bottom-right-radius: 80% 50%;
  border-bottom-left-radius: 0%;
  border: 2px solid black;
  border-left: none;
  height: 30px;
  right: -11px;
  top: -30px;
  width: 20px;
  -webkit-transform: rotate(-9deg);
  
  background-color: white;
  position: absolute;
}




/* 嘴巴来了*/
.mouth {
  border-bottom-left-radius: 50% 100%;
  border-bottom-right-radius: 50% 100%;
  border-top: none;
  height: 75px;
  margin-top: -25px;
  width: 120px;
  border: 2px solid black;
  margin-left: auto;
  margin-right: auto;
  background-color: #E80115;
}

.tongue {
  border-bottom-left-radius: 50% 100%;
  border-bottom-right-radius: 50% 100%;
  border-top: none;
  height: 33px;
  margin-left: 18px;
  top: -5px;
  overflow: hidden;
  width: 85px;
  margin-left: auto;
  margin-right: auto;
  background-color: #E80115;
  position: relative;
}

.tongue-left {
  height: 33px;
  margin-top: 10px;
  margin-left: 8px;
  overflow: hidden;
  width: 40px;
  z-index: 2;
  position: relative;
  float: left;
}

.tongue-left-inside {
  border-top-left-radius: 50% 80%;
  border-top-right-radius: 50% 80%;
  border-bottom: none;
  height: 33px;
  width: 40px;
  z-index: 2;
  -webkit-transform: rotate(-45deg);
  background-color: #EF6C1C;
  border: 2px solid black;
}

.tongue-right {
  height: 30px;
  margin-top: -33px;
  margin-left: 42px;
  overflow: hidden;
  width: 40px;
  z-index: 3;
  position: relative;
  float: left;
}

.tongue-right-inside {
  border-top-left-radius: 50% 80%;
  border-top-right-radius: 50% 80%;
  border-bottom: none;
  margin-top: 2px;
  margin-left: -6px;
  height: 30px;
  width: 40px;
  z-index: 3;
  -webkit-transform: rotate(45deg);
  background-color: #EF6C1C;
  border: 2px solid black;
}

/* 领带来了 */
.collar {
  margin-top: -20px;
  height: 20px;
  width: 110px;
  z-index: 3;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.collor-border-top {
  height: 28px;
  margin-top: -19px;
  margin-left: 0px;
  width: 110px;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black;

}
.collar-inside {
  border: 10px solid rgb(216, 5, 23);
  height: 25px;
  margin-top: -25px;
  margin-left: -10px;
  width: 110px;
  
  border-radius: 50%;
}
.collor-border-bottom {
  height: 37px;
  margin-top: -40px;
  margin-left: -9px;
  width: 125px;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black;
}

/* 铃铛 */
.bell {
  height: 27px;
  margin-top: -8px;
  width: 27px;
  z-index: 5;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid black;
  background-color: #F5D600;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.bell-middle-curve-1 {
  margin-top: 6px;
  margin-left: -14px;
  height: 25px;
  width: 50px;
  border: 2px solid black;
  border-radius: 50%;
}

.bell-middle-curve-2 {
  margin-top: -24px;
  margin-left: -14px;
  height: 25px;
  width: 50px;
  border: 2px solid black;
  border-radius: 50%;
}

.bell-hole {
  height: 4px;
  margin-top: -23px;
  margin-left: 10px;
  width: 4px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: white;
}

.bell-gap {
  height: 8px;
  margin-left: 13px;
  width: 0px;
  background-color: black;

  margin-right: auto;
}

/* 身体 */
.body {
  height: 81px;
  top: -33px;
  width: 215px;
  z-index: 1;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.body-inside {
  border-top-left-radius: 15% 75%;
  border-top-right-radius: 12% 75%;
  border-bottom-left-radius: 15% 50%;
  border-bottom-right-radius: 25% 50%;
  height: 90px;
  margin-top: -3px;
  width: 110px;
  z-index: 2;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(2, 159, 227);
}

.belly {
  border-top-left-radius: 37% 50%;
  border-top-right-radius: 37% 50%;
  border-bottom-left-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  height: 74px;
  margin-top: -83px;
  width: 68px;
  z-index: 10;
  border: 2px solid black;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.bag {
  height: 38px;
  margin-top: 25px;
  padding-top: 3px;
  width: 70px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
   overflow: hidden;
}

.bag-top {
  border-radius: 40%;
  height: 20px;
  margin-top: -16px;
  margin-left: -10px;
  width: 95px;
  position: absolute;
  border: 2px solid black;
}

.bag-bottom {
  border-bottom-left-radius: 50% 32%;
  border-bottom-right-radius: 50% 32%;
  
  margin-top: -42px;
  margin-left: 0px;
  width: 71px;
  border: 2px solid black;
  position: relative;
}

.left-hand {
  height: 40px;
  margin-top: -70px;
  margin-left: 13px;
  width: 40px;
  z-index: 0;
  position: relative;
}

.left-arm {
  border-top-left-radius: 45% 40%;
  border-bottom-left-radius: 45% 30%;
  height: 30px;
  margin-left: 19px;
  width: 48px;
  -webkit-transform: rotate(-30deg);
  -webkit-transform-origin: left bottom;
  background-color: rgb(2, 159, 227);
  position: relative;
  border: 2px solid black;
}

.left-palm {
  height: 28px;
  margin-top: -25px;
  margin-left: 5px;
  width: 28px;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black
}

.right-hand {
  height: 40px;
  margin-top: -58px;
  margin-left: 113px;
  width: 40px;
  z-index: 0;
  position: relative;
}

.right-arm {
  border-top-right-radius: 45% 40%;
  border-bottom-right-radius: 45% 30%;
  height: 30px;
  margin-top: 19px;
  margin-left: 20px;
  width: 46px;
  -webkit-transform: rotate(30deg);
  -webkit-transform-origin: right bottom;
  background-color: rgb(2, 159, 227);
  position: relative;
  border: 2px solid black;
}

.right-palm {
  height: 28px;
  margin-top: -26px;
  margin-left: 60px;
  width: 28px;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black
}


.left-leg {
  height: 32px;
  margin-top: 13px;
  margin-left: 51px;
  width: 60px;
  z-index: 3;
  position: relative;
  overflow: hidden;
}

.left-leg-inside {
  border-top-left-radius: 35% 100%;
  border-bottom-left-radius: 25% 55%;
  border-bottom-right-radius: 100% 20%;
  border-right: none;
  height: 28px;
  margin-top: -8px;
  width: 60px;
  border: 2px solid black;
  background-color: rgb(2, 159, 227);
  position: relative;
}

.crotch {
  height: 8px;
  margin-top: -16px;
  margin-left: 95px;
  width: 20px;
  z-index: 5;
  overflow: hidden;
  margin-right: auto;
  position: absolute;
}

.crotch-inside {
  border-top-left-radius: 50% 60%;
  border-top-right-radius: 50% 60%;
  border-bottom: none;
  height: 40px;
  width: 20px;
  border: 2px solid black;
  background-color: white;
}

.right-leg {
  height: 32px;
  margin-top: -31px;
  margin-left: 105px;
  width: 60px;
  z-index: 3;
  position: relative;
  overflow: hidden;
}

.right-leg-inside {
  border-top-right-radius: 35% 100%;
  border-bottom-right-radius: 25% 55%;
  border-bottom-left-radius: 100% 20%;
  border-left: none;
  height: 29px;
  margin-top: -10px;
  margin-left: -4px;
  width: 60px;
  border: 2px solid black;
  background-color: rgb(2, 159, 227);
  position: relative;
}

.left-foot {
  border-top-left-radius: 60% 60%;
  border-top-right-radius: 50% 85%;
  border-bottom-left-radius: 43% 75%;
  border-bottom-right-radius: 50% 55%;
  height: 25px;
  margin-top: -16px;
  margin-left: 36px;
  width: 62px;
  -webkit-transform: rotate(-5deg);
  border: 2px solid black;
  background-color: white;
  position: absolute;
}

.right-foot {
  border-top-left-radius: 50% 85%;
  border-top-right-radius: 60% 60%;
  border-bottom-left-radius: 50% 55%;
  border-bottom-right-radius: 43% 75%;
  height: 25px;
  margin-top: -15px;
  margin-left: 109px;
  width: 67px;
  -webkit-transform: rotate(5deg);
  border: 2px solid black;
  background-color: white;
  position: absolute;
}

/*
 * 好了，这只哆啦A梦送给你
 */
`
  writeCode('',code)

}.call()