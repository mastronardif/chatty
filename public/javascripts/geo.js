function myalert(str) {alert(str);return str;}


var vlat = "";
var vlon = "";
var myGeo = {
     lat: "12"
    ,lon: ""
    ,address: ""
}

function geo_init00()
{
    var startPos;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
        startPos = position;
        //document.forms[0].elements.lat.value = startPos.coords.latitude;
        //document.forms[0].elements.lon.value = startPos.coords.longitude;
        document.getElementById('x_lat').value = startPos.coords.latitude;
        document.getElementById('x_lon').value = startPos.coords.longitude;
        myGeo.lat = startPos.coords.latitude;
        myGeo.lon = startPos.coords.longitude;

        }, function (error) {

            alert("Error occurred. Error code: " + error.code);
            // error.code can be:
            //   0: unknown error
            //   1: permission denied
            //   2: position unavailable (error response from locaton provider)
            //   3: timed out
            }
,{ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true } 
            );

        // navigator.geolocation.watchPosition(function (position) {
        //     document.forms[0].elements.lon.value = position.coords.longitude;
        //     document.getElementById("currentLat").innerHTML = position.coords.latitude;
        //     document.getElementById("currentLon").innerHTML = position.coords.longitude;
        // });
    }
    //'"' + document.getElementById('x_to').value + '"'
    //'"lat": "'+ myGeo.lon +'"' 
    //alert(JSON.stringify(myGeo));
    //return JSON.stringify(myGeo);

    //var json = 
    //return json;
};


function init00()
{
    var startPos;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
        startPos = position;
        document.forms[0].elements.lat.value = startPos.coords.latitude;
        document.forms[0].elements.lon.value = startPos.coords.longitude;
        myGeo.lat = startPos.coords.latitude;
        myGeo.lon = startPos.coords.longitude;

        }, function (error) {

            alert("Error occurred. Error code: " + error.code);
            // error.code can be:
            //   0: unknown error
            //   1: permission denied
            //   2: position unavailable (error response from locaton provider)
            //   3: timed out
            });

        // navigator.geolocation.watchPosition(function (position) {
        //     document.forms[0].elements.lon.value = position.coords.longitude;
        //     document.getElementById("currentLat").innerHTML = position.coords.latitude;
        //     document.getElementById("currentLon").innerHTML = position.coords.longitude;
        // });
    }
    //'"' + document.getElementById('x_to').value + '"'
    //'"lat": "'+ myGeo.lon +'"' 
    //alert(JSON.stringify(myGeo));
    //return JSON.stringify(myGeo);

    //var json = 
    //return json;
};

geocoder = new google.maps.Geocoder();
function codeLatLng(lat, lng)
    {
        var info = "";
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results)
                if (results[1]) {
                    //formatted address
                    
                    //alert(results[0].formatted_address)
                    //info = results[0].formatted_address + "df";
                    //document.forms[0].elements.gisaddress.value = results[0].formatted_address;
                    document.getElementById('x_address').value = results[0].formatted_address;

                    //alert(results[0].formatted_address);
                    info = results[0].formatted_address; 
                    //alert('aaaa'+results[0].formatted_address);

                    //find country name
                    for (var i = 0; i < results[0].address_components.length; i++) {
                        for (var b = 0; b < results[0].address_components[i].types.length; b++) {

                            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                            if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                                //this is the object you are looking for
                                city = results[0].address_components[i];
                                break;
                            }
                        }
                    }
                    //city data
                    //alert(city.short_name + " " + city.long_name)


                } else {
                    alert("No results found");
                }
            } else {
                alert("Geocoder failed due to: " + status);
            }
        });

        return info;
    }

    function TestShit()
    {
        var lat  = myGeo.lat; //document.forms[0].elements.lat.value;
        var lng  = myGeo.lon; //document.forms[0].elements.lon.value;

//alert(JSON.stringify(myGeo));

        var info = codeLatLng(lat, lng);
        //myGeo.address = info;
        myGeo.address = document.getElementById('x_address').value;
        return JSON.stringify(myGeo);
        //document.forms[0].elements.lon.value = "clear the shit";
        //can not do this codeLatLng is async! alert('test shit'+info);
    }


function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
    }