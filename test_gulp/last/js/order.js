var litext=[["学校简介","学校章程","现任领导","历任领导","辉煌校史","学校校历","校园导游"],[],["学校部门","委员会"],["西电英才","本科生教育","研究生教育","留学生教育","网络教育","实践教学","精品课堂","教学改革与研究","实践教学中心"],["科学研究院","国家重点实验室","教育部重点实验室","省部级重点实验室","省部级基地","博士后科研流动站","其他科学研究部门","物联网实验中心","期刊中心"],["国家级重点学科","省部级重点学科","博士学位授权学科","硕士学位授权学科","本科专业设置"],["扩展空间","友好学校","国际合作交流处"],[],["本科生招生信息网","研究生招生信息网","留学生招生信息","MBA招生信息","国防生招生信息","网络与继续教育招生信息","毕业生就业信息网"],["办学资源概况","科研资源","学科资源","师资资源","实验资源"],[]],imglist=[["images/0xxgk.jpg"],["images/ybsz.jpg"],["images/zzjg.jpg"],["images/jyjx.jpg"],["images/kxyj.png"],["images/XKJS.jpg"],["images/hzjl.jpg"],["images/zsjy.jpg"],[],["images/hzjl2.jpg"],[]];window.onload=function(){function e(e,t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}function t(t,a){return"mouseover"==n(t).type?!(e(a,n(t).relatedTarget||n(t).fromElement)||(n(t).relatedTarget||n(t).fromElement)===a):!(e(a,n(t).relatedTarget||n(t).toElement)||(n(t).relatedTarget||n(t).toElement)===a)}function n(e){return e||window.event}function a(e,n,a,i){if(t(e,n)&&8!=i&&10!=i){var l=document.createElement("ul");l.id="newul";var m=-104.5*i;l.style.left=m;var o=document.createElement("div");o.className="nav-left-list";var r=document.createElement("div");r.className="nav-right";var d=document.createElement("img");d.src=imglist[i][0],r.appendChild(d),l.appendChild(r),l.appendChild(o);for(var g=0;g<litext[i].length;g++){var c=document.createElement("div");c.className="nav-li nav-inline";var s=document.createElement("a");s.innerHTML=litext[i][g],c.appendChild(s),o.appendChild(c)}a.appendChild(l)}}function i(e,n){if(t(e,n)){var a=document.getElementById("newul");null!=a&&a.parentNode.removeChild(a)}}function l(e,t){e.onmouseover=function(){a(event,this,e,t)},e.onmouseout=function(){i(event,this)}}for(var m=document.getElementById("nav"),o=m.getElementsByTagName("li"),r=0;r<o.length;r++)l(o[r],r)};