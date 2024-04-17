function fun2(x,y){

    var r = document.getElementsByClassName('tb2');


    var divs = document.getElementsByClassName('tb');

    for(var j = 0; j<divs.length; j++){
        divs[j].style.display = "none";

    }

    document.getElementById(x).style.display = "block";

    for(var k = 0; k<r.length; k++){
        r[k].style.backgroundColor = "white";
        r[k].style.color = "#a5a5ab";

    }

    document.getElementById(y).style.backgroundColor = "#ff6138";

    document.getElementById(y).style.color = "#fff";


}