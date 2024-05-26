$(document).ready(function(e) {
	var rr = getStrRef();
	var self = getStrRefSelf();
	$("#hdnStrRef").val(rr);
	$("#hdnStrRef_self").val(self);
});


function getClientDateTime()
{
	strFullDate = new Date();
	strDate = strFullDate.getDate();
	strDay = strFullDate.getDay();
	strMonth = strFullDate.getMonth();
	strYear = strFullDate.getFullYear();
	strHours = strFullDate.getHours();
	strMinutes = strFullDate.getMinutes();

	if(strHours<12)	{
		strTimeSymbol = "AM";
	}	else if(strHours>12) {
		strHours = strHours - 12;
		strTimeSymbol = "PM";
	} else {
		strTimeSymbol = "PM";
	}
	if(strHours<10)
	{
		strHours = "0"+strHours;
	}

	if(strMinutes<10)
	{
		strMinutes = "0"+strMinutes;
	}
	strClientDateTime = arrDays[strDay] + ", " + arrMonth[strMonth] + " " + strDate + " " + strYear + ", " + strHours + ":" + strMinutes + " " + strTimeSymbol;
	return strClientDateTime;
}

function getStrRef()
{
	StrRef = document.referrer;
	return StrRef;
}
function getStrRefSelf()
{
	StrRef = window.location.href;
	return StrRef;
}


var arrMonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var arrDays = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var arrCountry = new Array("Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Cote d'ivoire (Ivory Coast)","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadaloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldava","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Phillipines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste (East Timor)","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands, British","Virgin Islands, US","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe");

function FillCountry()
{
	for(i=0; i<arrCountry.length; i++)
	{
		document.getElementById("Country").options[i+1] = new Option(arrCountry[i],arrCountry[i]);
	}
	document.getElementById("Country").options[0] = new Option("Select Country","-1",true);
	document.getElementById("Country").selectedIndex = 0;
}

function FillDropDown(start,end,objectId,strFirstElement)
{
	for(i=1; start<=end; start++)
	{
		document.getElementById(objectId).options[i++] = new Option(start,start);
	}
	document.getElementById(objectId).options[0] = new Option(strFirstElement,strFirstElement,true);
	document.getElementById(objectId).selectedIndex = 0;
}

function FillMonth(objectId)
{
	for(i=0; i<12; i++)
	{
		document.getElementById(objectId).options[i+1] = new Option(arrMonth[i],arrMonth[i]);
	}
	document.getElementById(objectId).options[0] = new Option("Month","Month",true);
	document.getElementById(objectId).selectedIndex = 0;
}
function CheckEmail(src)
{
	var emailReg = "^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$";
	var regex = new RegExp(emailReg);
	return regex.test(src);
}

function CheckPhone(src)
{
	var phoneReg = "^([0-9-\+]+){1,25}$";
	var regex = new RegExp(phoneReg);
	return regex.test(src);
}

function CheckHomeForm()
{
	frm = document.homeForm;
	var dd = frm.Date_of_travel.value;
	var mm = frm.Month_of_travel.value;
	var yy = frm.Year_of_travel.value;
	var date1 = new Date(mm + " "+ dd + ", "+yy);
	var date2 = new Date();
	if(frm.txtName.value.length==0)	{
		alert("Please enter your name.");
		frm.txtName.focus();
		return false;
	} else if(!isNaN(frm.txtName.value))	{
		alert("Please enter only alphabets in your name.");
		frm.txtName.focus();
		frm.txtName.select();
		return false;
	} else if(frm.txtEmail.value.length==0)	{
		alert("Please enter your email.");
		frm.txtEmail.focus();
		return false;
	} else if(!CheckEmail(frm.txtEmail.value))	{
		alert("Please enter valid email.");
		frm.txtEmail.focus();
		frm.txtEmail.select();
		return false;
	} else if(frm.Country.options[frm.Country.selectedIndex].value==-1)	{
		alert("Please select your country.");
		frm.Country.focus();
		return false;
	} else if(frm.txtPhone.value.length==0 )	{
		alert("Please enter a valid contact number.");
		frm.txtPhone.focus();
		return false;
	} else if(checkInternationalPhone(frm.txtPhone.value)==false){
		alert("Please enter a valid contact number.");
		frm.txtPhone.focus();
		return false;
	} else if(frm.Date_of_travel.selectedIndex==0) {
		alert("Please select Date of Travel.");
		frm.Date_of_travel.focus();
		return false;
	} else if(frm.Month_of_travel.selectedIndex==0) {
		alert("Please select Month of Travel.");
		frm.Month_of_travel.focus();
		return false;
	} else if(frm.Year_of_travel.selectedIndex==0)	{
		alert("Please select Year of Travel.");
		frm.Year_of_travel.focus();
		return false;
	} else if(date1<date2) {
		alert("Please select a valid arrival date.");
		frm.Date_of_travel.focus();
		return false;
	} else if(frm.no_of_nights.selectedIndex==0)	{
		alert("Please select Duration of the Tour.");
		frm.no_of_nights.focus();
		return false;
	} else if(frm.Person_Adults.selectedIndex==0)	{
		alert("Please select how many adults will travel.");
		frm.Person_Adults.focus();
		return false;
	} /*else if(frm.Person_Children.selectedIndex==0)	{
		alert("Please select how many childrens will travel.");
		frm.Person_Children.focus();
		return false;
	}*/ else if(frm.destinations.selectedIndex==0)	{
		alert("Please select destination.");
		frm.destinations.focus();
		return false;
	} else if(frm.txtOther_requirements.value.length==0)	{
		alert("Please enter your other requirements and details.");
		frm.txtOther_requirements.focus();
		return false;
	} else{
        frm.hdnDateTime_Client.value = getClientDateTime();
		return true;
	}
}
function trim(s)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not a whitespace, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (c != " ") returnString += c;
    }
    return returnString;
}
function checkInternationalPhone(strPhone){
	strPhone=trim(strPhone)
	var re = /^((\+\d{1,3}([-\(]| |.)?\(?\d\)?([-\(]| |.)?\d{1,5})|(\(?\d{1,6}\)?))(-| |.)?(\d{2,4})(-| )?(\d{4})$/
	var OK = re.exec(strPhone);
	if (!OK) return false
}