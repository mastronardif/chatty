function myanytaxis_Post(aUrl, json)
{
    var http = new XMLHttpRequest();
    var url  = aUrl; //"http://localhost:3000/each";
    //var params = "lorem=ipsum&name=binny";
    var params = "data=" + json;
    
    http.open("POST", url, true);
    
    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            ;//alert(http.responseText);
        }
    }
    http.send(params);
}