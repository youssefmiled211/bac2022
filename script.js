function verif(permi){
    
    test=true
    i=0
    while((test==true) && (i<permi.length)){
        if (i==2){
            i++;
        }
        if(permi.charAt(i)<"0" ||permi.charAt(i)>"9" ){
            
                test=false;
                
            
        }
        i++;
        
        
    }
    return test
}
function verifalpha(ch){
    test=true
    if (ch.length<3|| ch.length>20){
        test=false
    }else
    {
        ch=ch.toUpperCase()
        i=0;
        while(test && i<ch.length){
            if(ch.charAt(i)<"A" || ch.charAt(i)>"Z"){
                test=false
            }
            i++
        }
    }
    return test

}
function verif1(){
    permi=document.getElementById("permi").value;
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    f=document.getElementById("f").checked;
    m=document.getElementById("m").checked;
    if (permi.charAt(2)!="/" || verif(permi)==false  ||permi.length!=8 ){
        alert("permi n'est pas correct")
    }
    if(verifalpha(nom)==false ||verifalpha(prenom)==false ){
        alert("votre nom et prenom incorrect")
    }
    if(f==false && m==false){
        alert("saisir votre genre")
    }

}
function verif2(){
    permi=document.getElementById("permi1").value;
    sc=document.getElementById("scurite").value;
    cd=document.getElementById("conduite").value;
    cf=document.getElementById("confort").value;
    liste=document.getElementById("liste").value;
    robot=document.getElementById("robot").checked;
    if (permi.charAt(2)!="/" ||  !verif(permi)   ||permi.length!=8 ){
        alert("permi n'est pas correct");
    }
    if(liste==0){
    alert("choix obligatoire");
    }
    if(sc<1||sc>5){
        alert("scurite entre 1 et 5");
    }
    if(cd<1||sc>5){
        alert("conduite entre 1 et 5");
    }
    if(cf<1||sc>5){
        alert("confort entre 1 et 5");
    }
    if(robot==false){
        alert("couche le button");
    }
}
