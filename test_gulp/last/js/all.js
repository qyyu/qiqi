var tit = ["诚邀全球英才参加西安电子科技大学“华山青年学者国际论坛”",
"天宫二号伴星释放 星载图像压缩系统由西电研制",
"我校图书馆被中图学会命名为全民阅读示范基地",
"我校研究生在中国研究生电子设计竞赛中获佳绩",
"西电荣膺2016年全国学生啦啦操锦标赛冠军",
"“互联网+”大赛西电再获金奖 下届将在西电举办"
];
var imgchange = [
["images/banner-xin1.jpg"],
["images/banner-xin2.jpg"],
["images/banner-xin3.jpg"],
["images/banner-xin4.jpg"],
["images/banner-xin5.jpg"],
["images/banner-xin6.jpg"],
];
/*图片显示*/
var num = 1;
var time=setInterval("clock()",3*1000);
function clock(){
	num=num+1;
	if(num==7){
		num=1;
	}
	show(num);
}
function show(num){
	//alert(num);
	var titletxt = document.getElementById("titletxt");
	titletxt.innerHTML=tit[num-1];
	var pic = document.getElementById("pic");		
	pic.src = imgchange[num-1];	
	for(var i = 1;i<=6;i++){
		var col = "img"+i;
		var acolor = document.getElementById(col);
		if(i==num){	
		    acolor.style.backgroundColor = "#f00";
		}else{
			acolor.style.backgroundColor = "#666";
		}		
	}	
}
// window.onload = function(){
// }


/*实现二级菜单*/
var litext = [
["学校简介","学校章程","现任领导","历任领导","辉煌校史","学校校历","校园导游"],
[],
["学校部门","委员会"],
["西电英才","本科生教育","研究生教育","留学生教育","网络教育","实践教学","精品课堂","教学改革与研究","实践教学中心"],
["科学研究院","国家重点实验室","教育部重点实验室","省部级重点实验室","省部级基地","博士后科研流动站","其他科学研究部门","物联网实验中心","期刊中心"],
["国家级重点学科","省部级重点学科","博士学位授权学科","硕士学位授权学科","本科专业设置"],
["扩展空间","友好学校","国际合作交流处"],
[],
["本科生招生信息网","研究生招生信息网","留学生招生信息","MBA招生信息","国防生招生信息","网络与继续教育招生信息","毕业生就业信息网"],
["办学资源概况","科研资源","学科资源","师资资源","实验资源"],
[]
];
var imglist = [ ["images/0xxgk.jpg"],
["images/ybsz.jpg"],
["images/zzjg.jpg"],
["images/jyjx.jpg"],
["images/kxyj.png"],
["images/XKJS.jpg"],
["images/hzjl.jpg"],
["images/zsjy.jpg"],
[],
["images/hzjl2.jpg"],
[],

];
window.onload = function()
{
function contains(parentNode, childNode) {
    if (parentNode.contains) {return parentNode != childNode && parentNode.contains(childNode);} else {return !!(parentNode.compareDocumentPosition(childNode) & 16); }
}
function checkHover(e, target) {
	if (getEvent(e).type == "mouseover") { return !contains(target, getEvent(e).relatedTarget || getEvent(e).fromElement) && !((getEvent(e).relatedTarget || getEvent(e).fromElement) === target); } else { return !contains(target, getEvent(e).relatedTarget || getEvent(e).toElement) && !((getEvent(e).relatedTarget || getEvent(e).toElement) === target); }
}
function getEvent(e) {
    return e || window.event;
}
	function enter(e,obj,li,num){
		//alert(num);
		if(checkHover(e,obj)&&num!=8&&num!=10){
		var newul = document.createElement("ul");		
		newul.id = "newul";
		var le = (-104.5)*num;
		newul.style.left = (le);
		var divleft = document.createElement("div");
		 divleft.className = "nav-left-list";	
		var divright = document.createElement("div");
		 divright.className = "nav-right";
		var img = document.createElement("img");
		img.src = imglist[num][0];
		divright.appendChild(img);
		newul.appendChild(divright);
		newul.appendChild(divleft);
		for(var j = 0; j < litext[num].length;j++){
			var divleftdiv = document.createElement("div");
			divleftdiv.className = "nav-li nav-inline";
			var divlefta = document.createElement("a");
			divlefta.innerHTML = litext[num][j];
			divleftdiv.appendChild(divlefta);
			divleft.appendChild(divleftdiv);
		}
		li.appendChild(newul);
	}
	}
	function remove(e,obj){
		if(checkHover(e,obj)){
			var tmp = document.getElementById("newul");
			if(tmp!=null){
				tmp.parentNode.removeChild(tmp);
			}			
		}		
	}
	var nav = document.getElementById("nav");
	var lilist = nav.getElementsByTagName("li");
	for(var i = 0; i < lilist.length;i++){
		attach(lilist[i],i);
	}
	//鼠标显示颜色
	function attach(list,num){
		list.onmouseover = function(){			
			enter(event,this,list,num);			
		}
		list.onmouseout = function(){
			remove(event,this);
		}
	}
}
	
