var theURL = "http://www.eduweb.com/cgi-bin/surveys/beauty.pl?LastPage=" + document.URL; 
function openFirst() {
   window.open('survey_welcome.html', 'Survey', 'scrollbars,resizable,width=520,height=300').focus();
}
function openSurvey() {
	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.indexOf("Mac") > -1) {
	  // no popup
	} else if (navigator.appName == "Netscape" && navigator.appVersion.indexOf("5.0") > -1) {
	  // no popup
	} else {
   	  window.open(theURL, 'Survey', 'scrollbars,resizable,width=520,height=300').blur();
   	  //window.blur();
    }
}
function openLast() {
   window.open(theURL, 'Survey', 'scrollbars,resizable,width=520,height=300').focus();
}
function openAndGo(where) {
   window.open(theURL, 'Survey', 'scrollbars,resizable,width=520,height=300').focus();
   location = where;
}

