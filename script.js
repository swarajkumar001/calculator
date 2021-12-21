const mytext=document.getElementById("mytext")
function abc(obj){
/*if(obj.innerHTML=='='){
        mytext.innerHTML=eval(mytext.innerHTML)

    }
    else if(obj.innerHTML== "AC")
    {
         mytext.innerHTML=" "
    }
   else{
       mytext.innerHTML=mytext.innerHTML+obj.innerHTML
   }
    
    
    
}*/

    

switch (obj.innerHTML) {
    case '=':
        mytext.innerHTML=eval(mytext.innerHTML)
        break;
    case "AC" :
            mytext.innerHTML=" "
            break;

    default:
        mytext.innerHTML=mytext.innerHTML+obj.innerHTML
        break;
}
}