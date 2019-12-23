var oBtn = document.getElementById('btn');
var oLis = document.getElementsByTagName('li');
var oPrompt = document.getElementById('prompt');
var oOk = document.getElementById('ok');
var oContent = document.getElementById('content');
var oImg = document.getElementById('img');
var nowIndex = 0;//定义滚动指定的li
oBtn.onclick = function(){
    // var number = getRandom(10,28);//获取中奖随机号码
    
    var ran = Math.ceil(Math.random() * 100);
    //抽奖背景切换
    var	scrollLi = setInterval(function(){
        //先滚动起来
        colorChange(oLis,nowIndex);
        nowIndex++;
        //中奖or为中奖内容设置
        var number;
        if (ran < 10) {
            number = Math.ceil(Math.random()*10)
        } else if (ran > 10 && ran <20){
            number = Math.ceil(Math.random()*5)
        }



        if(nowIndex==number)
        {
            clearInterval(scrollLi);
            oPrompt.style.display = "block";

            if(oLis[nowIndex%9].innerHTML=="很遗憾"){
                oContent.innerHTML ='sorry~ 大华&nbsp;' + oLis[nowIndex%9].innerHTML;
                oImg.src="fool.png"
                nowIndex = 0;
            }else{
                oContent.innerHTML ='恭喜~ 大华 获得了' + oLis[nowIndex%9].innerHTML;
                oImg.src="love.png"
                nowIndex = 0;
            }
        }

    },100)

}

//改变颜色
function colorChange(aLi,nowIndex){
    //把所有li背景设置为白色
    for (var i= 0;i<aLi.length;i++) {
        aLi[i].style.backgroundColor = "white"
    }
    //背景
    aLi[(nowIndex+1)%9].style.backgroundColor = "red";
}

//点击确认后消失
oOk.onclick = function(){
    oPrompt.style.display = "none";
}
//获取随机获奖数字
function getRandom(a,b){
    return Math.floor(Math.random()*(b-a+1) + a)
}