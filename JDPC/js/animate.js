


function animation(ele,json,fn){
             
    clearInterval(ele.timer)
    ele.timer = setInterval(function(){
         
         var bool = true;
         for(k in json){
           var current;
           if(k==="opacity"){
               current = getStyle(ele,k)*100 || 1
           }else{
               current = parseInt(getStyle(ele,k)) || 0
           }
           speed = (json[k]-current)/10
           speed = speed>0?Math.ceil(speed):Math.floor(speed)
           
           current = current+speed
           if(k==="opacity"){

               ele.style[k] = current/100;

           }else if(k==="zIndex"){

               ele.style[k] = current
           }else{
               ele.style[k] = current+"px";
           }

           if(json[k]!==current){
               bool = false
           }
         }
         if(bool){
           clearInterval(ele.timer);
           if(fn){
               fn()
           }
         }

    },25)
 }

function getStyle(ele,attr){
   if(window.getComputedStyle){
       return window.getComputedStyle(ele,null)[attr]
   }
   return ele.currentStyle[attr]
}