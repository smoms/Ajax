var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var xmlHttp;

	try{
		xmlHttp = new XMLHttpRequest();
	}catch(e){
		xmlHttp = false;
	}
	if(!xmlHttp)
		alert("can't create object!");
	else
		return xmlHttp;
}

function process(){
	if(xmlHttp.readyState == 0 ||  xmlHttp.readyState == 4){
		food = encodeURIComponent(document.getElementById("userInput").value);
		//xmlHttp.open("GET", "foodstore.php?food="+food, true);
		xmlHttp.open("GET", "food="+food, true);
		xmlHttp.onreadystatechange = handleServerResponse;
		xmlHttp.send(null);
	}else{
		setTimeout('process()',1000);
	}
}

function handleServerResponse(){
	if(xmlHttp.readyState == 4){
		if(xmlHttp.status == 200){
			console.log('run..');
			xmlResponse = xmlHttp.responseXML;
			xmlDocumentElement = xmlResponse.documentElement;
			message = xmlDocumentElement.firstChild.data;
			//message = xmlHttp.responseXML.documentElement.firstChild.data;
			//console.log(message);
			document.getElementById("underInput").innerHTML = '<span style = "color:blue">' + message + '</span>';
			setTimeout('process()',1000);
		}else{
			alert('Something went wrong!');
		}
	}
}