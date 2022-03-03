const Mins=document.getElementById("Mins");
const Secs=document.getElementById("Secs");
const btn=document.getElementById("btn");
let Easy0=["each","face","fail","hack","lack","safe","card","frog","math","jump","fish","car","dog","php",
  "box","dear","neck","four","cow","word","list","blog","eye","yes","save","pen"];
let Easy1=["queen","about","enjoy","allow","alive","great","human","lucky","laugh","spark","touch","whole","water",
  "unity","trust","teach","smart","ready","power","magic","heart","guide","extra","clean","alert","letter","sugar","basic","beach",
   "bitch","black","blind","break","chess","dance","drink"];
   let Easy2=["advice","annual","better","border","bright","camera","centre","credit","either","factor","family","female","finger","groud","income","manage",
   "master","minute","second","mirror","palace","player","prison","relate","should","single","street","trying","wholly","certain","college","compact","concept","current","despite","discuss","driving",
   "essence","example","explain","fashion","fifteen","general","history","justify","kitchen","logical","offense","optical","plastic","poverty","profile"];
   let Minutes=1;
let Seconds=59;
let flag=false;
let sum=0;
btn.addEventListener("click",()=>{
    var getSelectedValue = document.querySelector(   
        'input[name="label"]:checked');
        if(getSelectedValue != null) { 
            flag=true;    
            let lavel=getSelectedValue.value;
               GameStart(lavel);
        }
        else 
         {
             alert("🙄please select a lavel🙄")
         }
});
 function GameStart(a)
{       
    let b=[Easy0,Easy1,Easy2];
    let selectarray=b[a];
    let i;
    let number=Math.floor(Math.random()*selectarray.length);
    let actualword=selectarray[number];
    let arrayword=actualword.split("");
     let Newword="";
     let arrlength=arrayword.length;
     for(i=0;i<arrlength;i++)
        {

            var index=Math.floor(Math.random()*arrayword.length);
            Newword+=arrayword[index];
            arrayword.splice(index,1);
        }
    document.getElementById("ans-word").style.display="block";
    document.getElementById("ques-word").innerHTML=Newword;
    document.getElementById("btn").style.display="none";
    document.getElementById("lavel").style.display="none";
    document.getElementById("btn1").style.display="block";
    let input=document.getElementById("ans-word");
    input.addEventListener("keyup",()=>{
        let ans=document.getElementById("ans-word").value.trim();
        if(ans==actualword){
              sum++;
              GameStart(a);
             input.value="";
             document.getElementById("score").innerHTML=sum;
        } 
        else
              input.style.color="red";
    });
}
btn1.addEventListener("click",()=>{
    location.reload();
})
const time=setInterval(() => {
    if(Seconds<=59&&Seconds>0&&Minutes>=0&&sum<10&&flag){
          Seconds--;
        document.getElementById("Mins").innerHTML=Minutes+" M";
        document.getElementById("Secs").innerHTML=Seconds+" S";
    }
    else if(Seconds==0&&Minutes>0&&sum<10&&flag)
      {
          Minutes--;
          Seconds=59;
          document.getElementById("Mins").innerHTML=Minutes+"M";
          document.getElementById("Secs").innerHTML=Seconds+"S";
      }
    else if(Minutes==0&&Seconds==0&&sum<10&&flag)
    {
         alert("😔AHH! YOU LOSE,LET'S TRY AGAIN 👉😊");
         clearInterval(time);
         location.reload();
    }
    else if((Minutes!=0||Seconds!=0||sum==10)&&flag)
      {
          alert("🙌HEY CONGRATS! YOU WON, LET'S DO AGAIN👉😊");
          clearInterval(time);
          location.reload();
      }
}, 1000);