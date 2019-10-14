function getStone(){
    var first=document.getElementById("FirstName").value;
    var last=document.getElementById("LastName").value;
    var welcomeF= first+" "+last+"'s magic stone is: ";
    var x =document.getElementById("BirthdayMonth").value;
    var y;
    switch(x){
        case "Jan":
           y="Garnet";
           break;
           case "Feb":
           y="Amethyst";
           break;
           case "Mar":
           y="Aquamarine";
           break;
           case "Apr":
           y="Diamond";
           break;
           case "May":
                y="Emerald";
                break;
                case "Jun":
                y="Pearl";
                break;
                case "Jul":
                y="Ruby";
                break;
                case "Aug":
                y="Peridot";
                break;
                case "Sep":
                        y="Sapphire";
                        break;
                        case "Oct":
                        y="Tourmaline";
                        break;
                        case "Nov":
                        y="Topaz";
                        break;
                        case "Dec":
                        y="Topaz";
                        break;
    }
if(first=="" || last==""){
alert("Please tell me your fullname first.")
return false
}
else{
     document.getElementById("glynn").innerHTML=welcomeF;
     document.getElementById("glynn2").innerHTML=y;
    }
}



