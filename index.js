var vw=document.body.clientWidth/100;
var vh=document.getElementById('sadak_div').clientHeight/100;
var cid=null;
var carbtm=100*vh;
var m_h=4*vw*parseInt(document.getElementById('car_img').height)/parseInt(document.getElementById('car_img').height)
var xmove=0,ymove=0,score=0,carno=0;flag=true,flag2=true;
document.getElementById('car_img').style.left=48*vw+'px';
document.getElementById('car_img').style.top=80*vh+'px';
//console.log(vh);
document.addEventListener('keydown',chalMeriGadi);



function hallabol(){
    if (flag2){
        carno =1+Math.round(Math.random()*1000)%10;
        carbtm=100*vh;
        var l = ( 39.3 + Math.round(Math.random()*17.4))*vw;
        var speed = 4+Math.random()*5;
        console.log(carno);
        document.getElementById('c'+carno).style.bottom=carbtm  +'px';
        document.getElementById('c'+carno).style.left=l+"px";
        document.getElementById('c'+carno).style.display="initial";
        cid=setInterval(gadiPel,speed);
        return carno;
    }
}

function gadiPel(){
    if (flag2){
        var y=parseInt(document.getElementById('c'+carno).style.bottom);
        carbtm-=2;
        document.getElementById('c'+carno).style.bottom=carbtm+'px';
        if (y<(-20*vh)){
            clearInterval(cid);
            score++;
            
            document.getElementById('c'+carno).style.display='none';
            cid=1;
        }
        if (cid==1){
            cid=0;
            hallabol();
        }
        checkTakkar();
    }
    
    //console.log(carbtm,y,document.getElementById('c'+carno).style.display);
}
function checkTakkar (){
    var y=parseInt(document.getElementById('c'+carno).style.bottom);
    var x=100*vh - parseInt(document.getElementById('car_img').style.top);
    var m_l=parseInt(document.getElementById('car_img').style.left);
    var c_l=parseInt(document.getElementById('c'+carno).style.left);
    var c_h=4*vw*parseInt(document.getElementById('c'+carno).height)/parseInt(document.getElementById('c'+carno).height)
    if (x>=y & x-y<=m_h+c_h & Math.abs(m_l-c_l)<=4*vw  ){
        document.getElementById('sadak_img').style.animationPlayState='paused';
        clearInterval(cid);
        flag2=false;
        cid=2;
    }
}
function chalMeriGadi(event){
    var k=event.key;
    var j=event.keyCode;
    //console.log(j);
    cy=document.getElementById('car_img').style.top;
    cx=document.getElementById('car_img').style.left;
    if (ymove>-2){
        if (k=='S'|k=='s' | j==40 ){
            ymove--;
            document.getElementById('car_img').style.top=(parseInt(cy)+Math.round(1*vh))+'px';
        }
    }
    if (ymove<50){
        if (k=='w'|k=='W' | j==38){
            ymove++;
            document.getElementById('car_img').style.top=(parseInt(cy)-Math.round(1*vh))+'px';
        }
    }
    if (xmove<12){
        if (k=='A'|k=='a' | j==37){
            xmove++;
            document.getElementById('car_img').style.left=(parseInt(cx)-Math.round(0.7*vw))+'px';
        }
    }
    if (xmove>-12){
        if (k=='D'|k=='d'  | j==39){
            xmove--;
            document.getElementById('car_img').style.left=(parseInt(cx)+Math.round(0.7*vw))+'px';
        }
    }
    //console.log(document.getElementById('car_img').style.bottom);
    //console.log(k);
    if (flag){
        hallabol();
        flag=false;
    }
}
