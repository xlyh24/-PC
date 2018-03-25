
window.onload=function(){

     show();
  
     hide();

     search();
       // 轮播图
     carousel();
     seckill();
     console.log('6666')
}

    function show(){

    let Cate=document.getElementById('cate');
    let ocate=document.getElementsByClassName('cate_part')[0];
    let timer;

     clearInterval(timer);
    
     ocate.onmouseover = Cate.onmouseover = function(){
        ocate.style.display='block';
        clearInterval(timer);
     }
  
    ocate.onmouseout = Cate.onmouseout = function(){
        timer=setInterval(function () {
            ocate.style.display='none';
        },500)
    }

 };
     // 选项卡切换
      function tab() {
            let Tab=document.getElementsByClassName('bottom')[0];         
            let oli=Tab.getElementsByTagName('li');
            let odiv=Tab.getElementsByTagName('div');

            for (let i = 0; i < oli.length; i++) {
          	
          	    oli[i].index=i;
          	oli[i].onmousemove=function(){
                     
          		for (let i = 0; i < oli.length; i++) {
          			oli[i].className='';
                    odiv[i].className='';     
                    this.className='show';
          		odiv[this.index].className='promotion';     			
          		}
          	
          	}
          }
        }

        //动画隐藏顶栏
   var hide=function(){
    
      let close=document.querySelector('.close-banner');
      let top_nav=document.querySelector('.top-nav');
      let timer;

    //   动画实现
     close.onclick = function(){  
           var opacity = 1;
        timer = setInterval( function() {
        
        if(opacity <= 0){
          top_nav.style.display = 'none';
          clearInterval(timer)
            
           }
        top_nav.style.opacity = opacity;
        opacity -= 0.2;
           
        },150)
     
      
   }
}
  //搜索框
  function search(){

    let search=document.getElementById('sea');
    let btn=document.getElementById('form');
   
    let str = ['京东','华为手机','苹果','葡萄','曲面电视','超薄电视','HDR电视'];
    let index = 0;
    let timer;
   function timeout(){       
       search.placeholder = str[index];

       index++;

       if(index > str.length-1){
         index = 0;
       } 

   }
   timeout();    
   //赋值
   timer=setInterval(timeout,3000);
    
   form.onmousemove=function(){
      clearInterval(timer);
   }
  //   //再次开启
    form.onmouseout=function(){
       timer=setInterval(timeout,3000);
    }
  }


 // 轮播图
 var carousel = function(){ 

      let banner=document.querySelector('.carousel');
      let imageBox=banner.getElementsByClassName('image-box')[0];
      let pointBox=banner.getElementsByClassName('point-box')[0];
      let oli=pointBox.getElementsByTagName('a');
      let prev=banner.getElementsByClassName('prev')[0];
      let next=banner.getElementsByClassName('next')[0];
      let width=banner.offsetWidth;   
      let timer=null;
      let index=1;
              
   //添加过渡
    let addTransition = function () {
        imageBox.style.webkitTransition = "all .5s";
        imageBox.style.mozTransition = "all .5s";
        imageBox.style.transition = "all .5s";
    };
    // 删除过渡
    let removeTransition = function () {
        imageBox.style.webkitTransition = "none";
        imageBox.style.mozkitTransition = "none";
        imageBox.style.transition = "none";
    };
    // 改变位置
    let setTranslateX = function(translateX){

        imageBox.style.webkitTransform = "translateX("+translateX+"px)";
        imageBox.style.mozkitTransform = "translateX("+translateX+"px)";
        imageBox.style.transform = "translateX("+translateX+"px)";
    };

       clearInterval(timer)

   // 设置向右自然滚动 
   function time(){

    timer = setInterval( function(){
        index++;
        // 过渡      
        addTransition();        
        // 改变位移   
        setTranslateX(-index*width); 
        setPoint();    
       }, 4000);
    }
  
   time();
     //绑定过渡结束事件   设置无缝滚动和无缝滑动
   banner.addEventListener('transitionend', function(){    
         //无缝滚动            
          if(index>=5){                        
             index=1;                                  
        // 清除过渡    
         removeTransition();     
          //定位                
         setTranslateX(-index*width);          
          }
          //无缝滑动
          else if(index<=0){         
             index=4;            
            removeTransition();
            setTranslateX(-index*width);    
          }  
         setPoint();      
   });
    
     // 点移动
     function setPoint(){    
      for (let i = 0; i < oli.length; i++) {   	   
      	//  	 oli[i].className='';
          //  oli[index-1].className="now";
          oli[i].classList.remove('now');
          oli[index-1].classList.add('now');
      }
    };

   banner.onmouseover=function(){
   	   clearInterval(timer);
   }

   banner.onmouseout=function(){
       time();   
   }   
   
    //向左滚动事件
    prev.onclick=function(){   
      setPoint();
      index--;        	    	
    // imageBox.style.left = -index*width+'px';
    imageBox.style.transition = 'all 0.5s';
    imageBox.style.transform ='translateX('+(-index*width)+'px)';
      
      // 添加过渡结束事件
       clearInterval(timer);  
      banner.addEventListener('transitionend', function(){
             if(index<=0){
               index=4;  
             }
           removeTransition();                  
           setTranslateX(-index*width);          
       },false);
      
    }   

  // 向右滚动
    next.onclick = function(){  
       setPoint();
    	index++;     
    imageBox.style.transition = 'all 0.5s';
    imageBox.style.transform ='translateX('+(-index*width)+'px)';
     // 添加过渡结束事件
     clearInterval(timer);
      banner.addEventListener('transitionend', function(){
           if(index >= 5 ){
            index = 1;                     
          }
       });            	
    }
  
 // 获取当前索引值
     for (let i = 0; i < oli.length; i++) {         
            oli[i].index = i
     	oli[i].onmousemove=function(){
     		   for (let i = 0; i < oli.length; i++) {
     		    
                      oli[i].classList.remove('now');
                    oli[this.index].classList.add('now'); 
     		     }   
          imageBox.style.transition = 'all 0.5s';
          imageBox.style.transform = 'translateX('+(-[this.index+1]*width)+'px)';                   
          index = [this.index+1];
     	}
     }
  }  
 
 
var seckill = function() {

  /*需要倒计时的时间*/  
  let time = 24 * 60 * 60 ;     
  let skTime = document.getElementsByClassName('SecKill-left')[0];
  let spans = skTime.getElementsByTagName('span'); 
  //初始化
  setInterval(timer,1000);   
  function timer(){     
        if(time <= 0){
          clearInterval(timer);
          return false;
      }
          time -- ;
          
      /*格式化*/
      let h = Math.floor(time/3600);
      let m = Math.floor(time%3600/60);
      let s = time%60;

      spans[0].innerHTML = Math.floor(h/10);   // 2.4  Math.floor(2.4)==2
      spans[1].innerHTML = h%10;               // 4

      spans[3].innerHTML = Math.floor(m/10);
      spans[4].innerHTML = m%10;

      spans[6].innerHTML = Math.floor(s/10);
      spans[7].innerHTML = s%10;   
  }
  timer();
}


  






