


function Calculate(){
    var first_e = document.getElementById("cash").value;
    var second_e = document.getElementById("gold").value;
    var therd_e = document.getElementById("silver").value;
    console.log(first_e)
    console.log(second_e)
    console.log(therd_e)
    for(var i = 0; i < Number (second_e.length); i++){
       if(second_e[i] <= Number (second_e)){
        second_e = 300000 * Number (second_e);
       }
    }
    for(var i = 0; i < Number (therd_e.length); i++){
        if(therd_e[i] <= Number (therd_e)){
          therd_e = 150000 * Number (therd_e); 
       }
       }
    var final = Number(first_e) + Number (second_e) + Number (therd_e);
     document.getElementById("result").innerHTML = " ZAKAT PAYABLE = " + Math.floor(final / 40) + ";";
    }
    
    
    
    