
// 封装选项卡
function tab(wrap,navul,event){
    //tab效果封装，目前只有两种变换方式，一种为点击事件click（也是默认事件），另外一种为鼠标移过事件mouseover
    var odiv = document.querySelector(wrap).querySelectorAll("div");
    console.log(odiv.innerText)
    var oli = document.querySelector(navul).querySelectorAll("li");
         for(var i = 0;i<oli.length;i++){
               oli[i].indx = i;
            if(event == "click" || event == null){
                oli[i].onclick = function(){
                for(i = 0;i<oli.length;i++){            
                oli[i].className = "";          
                this.className = "on";
                odiv[i].style.display = "none"   
                odiv[this.indx].style.display = "block";
              }
            }
            }else if(event == "mouseover"){
            oli[i].onmouseover = function(){
                for(i = 0;i<oli.length;i++){
                oli[i].className = "";    
                this.className = "on";
                odiv[i].style.display = "none"   
                odiv[this.indx].style.display = "block";
                 }
                }
            }
            }
        }
    tab("#wrap","#diya","mouseover")

    

