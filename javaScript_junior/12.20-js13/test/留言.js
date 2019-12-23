var oIpt1 = document.querySelector("#ipt1");
var oIpt2 = document.querySelector("#ipt2");
var oSp1 = document.querySelector("#sp1");
var oSp2 = document.querySelector("#sp2");
var oReduce1 = document.querySelector("#reduce1");
var oReduce2 = document.querySelector("#reduce2");
var oBox = document.querySelector(".box1");
var oFooter = document.querySelector("footer");
var oBtn = document.querySelector(".btn1");
var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, num1 = 20, num2 = 100;
oIpt1.oninput = function () {
	sum1 = oIpt1.value.length;
	oSp1.innerHTML = num1 - sum1;
	if (sum1 > 20) {
		sum2 = oIpt1.value.length;
		oSp1.style.color = "red";
		oReduce1.innerHTML = "您超出了：";
		oSp1.innerText = sum2 - 20;
		oIpt1.className = "red";
	} else {
		oSp1.style.color = "black";
		oReduce1.innerHTML = "您还剩余：";
		oSp1.innerText = num1 - sum1;
		oIpt1.className = "";
	}
}
oIpt2.oninput = function () {
	sum3 = oIpt2.value.length;
	oSp2.innerHTML = num2 - sum3;
	if (sum3 > 100) {
		sum4 = oIpt2.value.length;
		oSp2.style.color = "red";
		oReduce2.innerHTML = "您超出了：";
		oSp2.innerText = sum4 - 100;
		oIpt2.className = "red";
	} else {
		oSp2.style.color = "black";
		oReduce2.innerHTML = "您还剩余：";
		oSp2.innerText = num2 - sum3;
		oIpt2.className = "";
	}
}

oBox.onclick = function () {
	if (oIpt1.value == "") {
		alert("标题不能为空");
	} else if (oIpt1.value.length > 20) {
		alert("标题不能超出");
	} else if (oIpt2.value == "") {
		alert("文本不能为空");
	} else if (oIpt2.value.length > 100) {
		alert("文本不能超出");
	} else {
		alert("添加成功");
		oFooter.style.display = "none";
		var a = document.createElement("div");
		a.className = "btn"
		a.innerHTML = `
			 <img src="images/bz-33.jpg" alt="">
        	<div class="left">
            <div class="top">${oIpt1.value}</div>
            <div class="bom">${oIpt2.value}</div>
        	</div>
        	<span class="de">删除</span>
		`;
		prependChild(oBtn, a);
		oIpt1.value = "";
		oIpt2.value = "";
		var oDe = document.getElementsByClassName("de");
		var oBtn1 = document.getElementsByClassName("btn");
		for (var i = 0; i < oDe.length; i++) {
			oDe[i].onclick = function () {
				for (var j = 0; j < oDe.length; j++) {
					if (oDe[j] == this) {
						console.log(this.parentNode.parentNode.children.length);
						if (this.parentNode.parentNode.children.length > 1) {
							oFooter.style.display = "none";

						} else {
							oFooter.style.display = "block";
						}

						this.parentNode.parentNode.removeChild(this.parentNode)
						j--;
					}
				}
			}
		}
	}
}

//在元素的最前边插入节点方法封装
function prependChild(paren, ele) {
	if (paren.children.length) {
		paren.insertBefore(ele, paren.firstElementChild)
	} else {
		paren.appendChild(ele);
	}
	return ele;
}

