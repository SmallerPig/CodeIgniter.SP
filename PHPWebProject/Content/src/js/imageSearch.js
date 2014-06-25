window.addEventListener("load",initialSearchOptionItemOpenCloseF);
window.addEventListener("load",initialSearchGroupCheckLimitF);
window.addEventListener("load",initialsearchGroupSynchronizingF);

function initialSearchOptionItemOpenCloseF(e){
	var searchOptionItemTitles=document.getElementsByClassName("searchOptionItemTitle");
	for(var i=0;i<searchOptionItemTitles.length;i++){
		searchOptionItemTitles[i].addEventListener("click",searchOptionItemTitlesProcessF);
	}
	
	function searchOptionItemTitlesProcessF(e){
		if(e.currentTarget.parentNode.getAttribute("opened")==""){
			e.currentTarget.parentNode.removeAttribute("opened");
		}else{
			e.currentTarget.parentNode.setAttribute("opened","");
		}
	}
}

function initialSearchGroupCheckLimitF(e){
	var searchGroups=[];
	for(var i=0;i<100;i++){
		searchGroups[i]=[];
	}
	var searchCheckGroups=[];
	var inputCheckBoxes=document.getElementsByClassName("inputCheckBox");
	//
	var thisIndex;
	var thisE;
	var thisCheckIndex;
	for(var i=0;i<inputCheckBoxes.length;i++){
		thisE=inputCheckBoxes[i];
		thisIndex=thisE.getAttribute("group");
		thisCheckIndex=thisE.getAttribute("checkGroup");
		if(typeof(thisIndex)=="string"){
			thisIndex=parseInt(thisIndex);
			searchGroups[thisIndex].push(thisE);
			processGroupUnit(thisE,thisIndex);
		}
		if(typeof(thisCheckIndex)=="string"){
			thisCheckIndex=parseInt(thisCheckIndex);
			searchCheckGroups[thisCheckIndex]=thisE;
			processCheckGroupUnit(thisE,thisCheckIndex);
		}
	}
	
	function processGroupUnit(groupUnit,groupUnitIndex){
		groupUnit.addEventListener("change",groupUnitEventF);
		function groupUnitEventF(e){
			setTimeout(function(){
				var hasChecked=false;
				for(var i=0;i<searchGroups[groupUnitIndex].length;i++){
					if(searchGroups[groupUnitIndex][i].checked==true){
						hasChecked=true;
					}
				}
				if(hasChecked==false){
					searchCheckGroups[groupUnitIndex].checked=true;
				}else{
					searchCheckGroups[groupUnitIndex].checked=false;
				}
			},1);
		}
	}	
	
	function processCheckGroupUnit(checkGroupUnit,checkGroupUnitIndex){
		checkGroupUnit.addEventListener("change",checkGroupUnitEventF);
		function checkGroupUnitEventF(e){
			setTimeout(function(){
				if(checkGroupUnit.checked==false){
					var hasChecked=false;
					for(var i=0;i<searchGroups[checkGroupUnitIndex].length;i++){
						if(searchGroups[checkGroupUnitIndex][i].checked==true){
							hasChecked=true;
						}
					}
					if(hasChecked==false){
						checkGroupUnit.checked=true;
					}
				}else{
					for(var i=0;i<searchGroups[checkGroupUnitIndex].length;i++){
						setCheckBoxValue(searchGroups[checkGroupUnitIndex][i],false);
					}
				}
			},1);
		}
	}
	
	function setCheckBoxValue(checkBox,value){
		if(checkBox.checked!=value){
			checkBox.click();
		}
	}
	
}

function initialsearchGroupSynchronizingF(e){
	var searchSynGroups=[];
	for(var i=0;i<100;i++){
		searchSynGroups[i]=[];
	}
	var searchSynCheckGroups=[];
	var inputCheckBoxes=document.getElementsByClassName("inputCheckBox");
	//
	var thisIndex;
	var thisE;
	var thisCheckIndex;
	for(var i=0;i<inputCheckBoxes.length;i++){
		thisE=inputCheckBoxes[i];
		thisIndex=thisE.getAttribute("synMark");
		thisCheckIndex=thisE.getAttribute("checkSynMark");
		if(typeof(thisIndex)=="string"){
			thisIndex=parseInt(thisIndex);
			searchSynGroups[thisIndex].push(thisE);
			processSynGroupUnit(thisE,thisIndex);
		}
		if(typeof(thisCheckIndex)=="string"){
			thisCheckIndex=parseInt(thisCheckIndex);
			searchSynCheckGroups[thisCheckIndex]=thisE;
			processCheckSynGroupUnit(thisE,thisCheckIndex);
		}
	}
	
	function processSynGroupUnit(synGroupUnit,synGroupUnitIndex){
		synGroupUnit.addEventListener("change",synGroupUnitEventF);
		function synGroupUnitEventF(e){
			setTimeout(function(){
				var allChecked=true;
				for(var i=0;i<searchSynGroups[synGroupUnitIndex].length;i++){
					if(searchSynGroups[synGroupUnitIndex][i].checked==false){
						allChecked=false;
					}
				}
				if(allChecked==true){
					searchSynCheckGroups[synGroupUnitIndex].checked=true;
				}else{
					searchSynCheckGroups[synGroupUnitIndex].checked=false;
				}
			},1);
		}
	}
	
	function processCheckSynGroupUnit(checkSynGroupUnit,checkSynGroupUnitIndex){
		checkSynGroupUnit.addEventListener("change",checkSynGroupUnitEventF);
		function checkSynGroupUnitEventF(e){
			setTimeout(function(){
				for(var i=0;i<searchSynGroups[checkSynGroupUnitIndex].length;i++){
					setCheckBoxValue(searchSynGroups[checkSynGroupUnitIndex][i],checkSynGroupUnit.checked);
				}
			},1);
		}
	}
	
	function setCheckBoxValue(checkBox,value){
		if(checkBox.checked!=value){
			checkBox.click();
		}
	}
	
}