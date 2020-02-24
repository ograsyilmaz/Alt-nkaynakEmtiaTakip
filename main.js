var url = "";
var t_tablo = document.getElementById('t-tablo');
var t_button = document.getElementById('button');
var username = "AltinkaynakWebServis";
var password = "AltinkaynakWebServis";
var requesDataMethod = "POST";
var Url = "https://data.altinkaynak.com/DataService.asmx";
var soapActionHeader = "http://data.altinkaynak.com/GetGold";
var soap = '<?xml version="1.0" encoding="utf-8"?>' +
    '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
    ' <soap12:Header>' +
    '<AuthHeader xmlns="http://data.altinkaynak.com/">' +
    '<Username>' + username + '</Username>' +
    '<Password>' + password + '</Password>' +
    '</AuthHeader>' +
    '</soap12:Header>' +
    ' <soap12:Body>' +
    '<GetGold xmlns="https://data.altinkaynak.com/" />' +
    '</soap12:Body>' +
    '</soap12:Envelope>';
var xhttp = new XMLHttpRequest();

var xhttpsoap = function (reqestMethod, Url, soapAction) {
    xhttp.open(reqestMethod, Url, true);
    var data = "";
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                alert(xmlhttp.responseText);
                data = xmlhttp.responseText;
            }
        }

    }

    xhttp.setRequestHeader('Content-Type', 'text/xml');
  xhttp.setRequestHeader('SOAPAction', soapAction);
//xhttp.setRequestHeader('Host', 'data.altinkaynak.com');
//    xhttp.setRequestHeader('Accept', '*/*');

     //xhttp.setRequestHeader('Connection', 'keep-alive')
//xhttp.setRequestHeader('User-Agent', 'PostmanRuntime/7.22.0');
    // xhttp.setRequestHeader('Access-Control-Allow-Credentials', 'true');
    xhttp.send(soap);

    return data;
}
var data = "";
data = xhttpsoap(requesDataMethod, Url, soapActionHeader);

console.log(data);