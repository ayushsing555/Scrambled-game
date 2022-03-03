const Mins=document.getElementById("Mins");
const Secs=document.getElementById("Secs");
const btn=document.getElementById("btn");
let Minutes=4;
let Seconds=59;
let sum=0;
let Easy0=["each","face","fail","hack","lack","safe","card","frog","math","jump","fish","car","dog","php",
  "box","dear","neck","four","cow","word","list","blog","eye","yes","save","pen"];
let Easy1=["queen","about","enjoy","allow","alive","great","human","lucky","laugh","spark","touch","whole","water",
  "unity","trust","teach","smart","ready","power","magic","heart","guide","extra","clean","alert","letter","sugar","basic","beach",
   "bitch","black","blind","break","chess","dance","drink"];
   let Easy2=["advice","annual","better","border","bright","camera","centre","credit","either","factor","family","female","finger","groud","income","manage",
   "master","minute","second","mirror","palace","player","prison","relate","should","single","street","trying","wholly","certain","college","compact","concept","current","despite","discuss","driving",
   "essence","example","explain","fashion","fifteen","general","history","justify","kitchen","logical","offense","optical","plastic","poverty","profile"];
btn.addEventListener("click",()=>{
    var getSelectedValue = document.querySelector(   
        'input[name="label"]:checked');
        if(getSelectedValue != null) {     
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
 function timefunction(sum)
{
    console.log(Minutes+" "+Seconds);
   Seconds--;
   if(Seconds<1&& Minutes>0)
   {
       Seconds=59;
       Minutes--
   }
   else if(Seconds<1&&Minutes==0&&sum<10)
         {
             alert("😔 You lose! let's try again😔")
             location.reload();
         }
}