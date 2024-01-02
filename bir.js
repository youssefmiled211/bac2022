function alpha(ch)
{
    ch=ch.toUpperCase()
    i=0;
    tst=true
    while ((tst==true )&& (i<ch.length)){
        if((ch.charAt(i)<"A")||(ch.charAt(i)>"Z")){
            tst=false
        }
        i++;

    }
    return tst;
}
function chiff(ch){
    i=0
    tst=true
    while ((tst==true )&& (i<ch.length)){
        if((ch.charAt(i)<"0")||(ch.charAt(i)>"9")){
            tst=false
        }
        i++;

    }
    return tst;

}
function mot(ch){
    i=0
    tst=true
    while((tst==true )&& (i<ch.length)){
        if(ch.charAt(i)==" "){
            tst=false
        }
        i++

    }
    return tst;
}
function verif1()
{
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    tel=document.getElementById("tel").value;
    mopass=document.getElementById("mopass").value;
    cmopass=document.getElementById("cmopass").value;
    adresse=document.getElementById("adresse").value;
    if((alpha(nom)==false)||(nom.langth<3)|| (alpha(prenom)==false)||(prenom.langth<3)) {
        alert("saisir votre nom et prenom")
    }
    if((chiff(tel)==false)||(tel.length!=8)||(tel.charAt(0)<=1)){
        alert("redige votre tel")
    }
    if((adresse.length)<10){
        alert("verifier votre adresse")
    }
    if((mopass.length!=6)|| (mot(mopass)==false)){
        alert("red votre mot de passe")
    }
    if((cmopass!=mopass) ){
        alert("red votre confirmation mot de passe")
    }


} 
function abc(ch1,ch2,ch3){
    test=true
    ch1=ch1.toUpperCase()
    ch2=ch2.toUpperCase()
    ch3=ch3.toUpperCase()
    i=0
    while(test==true && i<ch1.length){
        if ((ch1.charAt(i)<"0")||(ch1.charAt(i)>"9")||(ch1.charAt(i)<"A")||(ch1.charAt(i)>"Z")){
            test=false
        }
        i++;
    }
    while(test==true && i<ch2.length){
        if ((ch2.charAt(i)<"0")||(ch2.charAt(i)>"9")||(ch2.charAt(i)<"A")||(ch2.charAt(i)>"Z")){
            test=false
        }
        i++;
    }
    while(test==true && i<ch3.length){
        if ((ch1.charAt(i)<"A")||(ch1.charAt(i)>"Z") ||ch3.length<2||ch3.length>4){
            test=false
        }
        i++;
    }
    return test
}
function testmail(ch){
    test=true
    pospt=ch.indexOff(".")
    posat=ch.indexOff("@")
    ch1=ch.substring(0, posat)
    ch2=ch.substring(posat+1,pospt)
    ch3=ch.substring(pospt+1,ch.length)
    if(abc(ch1,ch2,ch3)==false){
        test=false
    }else if(!(ch1+"@"+ch2+"."+ch3)){
        test=false
    }
    return test
    
}
function emailcheck(){
    alert("fff")
    email=document.getElementById("mail").value;
    if((email.length>50)|| (testmail(email)==false)){
        alert("verier votre email")
    }
}