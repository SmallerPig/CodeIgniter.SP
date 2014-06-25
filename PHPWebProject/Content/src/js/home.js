window.addEventListener("load",initilaBannerPicsF);

function initilaBannerPicsF(e){
	var infoTipsWrapper=document.getElementById("slidePicInfoArea");
	var bannerPics=document.getElementsByClassName("slidePicItem");
	var infoTips=[];
	var currentIndex;
	
	for(var i=0;i<bannerPics.length;i++){
		processPicItem(bannerPics[i]);
	}
	
	goto(0);
	
	function processPicItem(picItem){
		var picItemInfoTip=document.createElement("div");
		picItemInfoTip.setAttribute("class","slidePicItemMark");
		var thisIndex=infoTips.length;
		infoTipsWrapper.appendChild(picItemInfoTip);
		infoTips.push(picItemInfoTip);
		picItemInfoTip.addEventListener("click",function(e){
			clearCurrent();
			goto(thisIndex);
		});
	}
	
	function clearCurrent(){
		bannerPics[currentIndex].removeAttribute("current");
		infoTips[currentIndex].removeAttribute("current");
	}
	function goto(toIndex){
		currentIndex=toIndex;
		bannerPics[currentIndex].setAttribute("current","");
		infoTips[currentIndex].setAttribute("current","");
		clearInterval(intervalHandler);
		startAutoRoll();
	}
	
	var intervalHandler;
	function startAutoRoll(){
		intervalHandler=setInterval(function(){
			clearCurrent();
			if(currentIndex>=bannerPics.length-1){
				currentIndex=0;
			}else{
				currentIndex++;
			}
			goto(currentIndex);
		},4000);
	}
}