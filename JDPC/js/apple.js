
window.onload = function(){
    select_address();
    
}

    function select_address(){  
     var address = document.getElementsByClassName('address_list')[0];
     var a = address.getElementsByTagName('a');
     var location = document.getElementsByClassName('location')[0];   
     

       console.log(a)
     for (var i = 0; i < a.length; i++) {
        a[i].onclick = function(){
             alert(2)
            for (var i = 0; i < a.length; i++) {
                a[i].className = ''; 
                this.className = 'now';  
                location.innerHTML = this.innerHTML;
                // window.localStorage.setItem('address',this.innerHTML);
                // location.innerHTML = window.localStorage.getItem('address');
              
            }                 
        }
     }
     
}

       // 显示隐藏简单封装
     //    Es6写法
    function show(...arg){
        
        var sit = document.querySelector(arg[0])
        var n_address = document.querySelector(arg[1]);
        var timer;
        clearInterval(timer);

        n_address[arg[2]] = sit[arg[2]] = () => {
             n_address.style.display='block';
             clearInterval(timer);
        }
        
        n_address[arg[3]] = sit[arg[3]] = () => {
            timer = setInterval( () => {
                n_address.style.display='none';
            },1000)
        } 
     
    };
  show('#sit','.new_address','onmousemove','onmouseout')

// 点击事件简单封装
function dialog(...arg){
    var love = document.querySelector(arg[0]);
    var dialog = document.querySelector(arg[1]);
    var close = document.querySelector(arg[2]);
    love.addEventListener('click',function(){
        dialog.style.display = 'block';
    })
    close.addEventListener('click',function(){
        dialog.style.display = 'none';
    })
}
 dialog('.love','.bomb_box','.close')


