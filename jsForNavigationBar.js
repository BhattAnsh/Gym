let count = 0;
var ele = document.getElementById("sideNavBar");
document.addEventListener ("click", function(e){
    count+=1;
    if (e.target.id != "nav_bars"){
        ele.style.display = "none";
    }
    else{
        if (count%2 != 0){
            ele.style.display = 'block';
        }
        else{
            ele.style.display = 'none';
        }
    }
})

