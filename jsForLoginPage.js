let ele = document.getElementById("login");
let ele2 = document.getElementById("form");
let ele3 = document.getElementById("pop_up");
ele.addEventListener('click',function(e){
    if(window.confirm("Do you want to continue and login successfully to our webiste?")){
        e.preventDefault();
        ele2.style.display = "none";
        ele3.style.display = "inline-block"

    }
})
let count = 0;
var side = document.getElementById("sideNavBar");
document.addEventListener ("click", function(e){
    count+=1;
    if (e.target.id != "nav_bars"){
        side.style.display = "none";
    }
    else{
        if (count%2 != 0){
            side.style.display = 'block';
        }
        else{
            side.style.display = 'none';
        }
    }
})

