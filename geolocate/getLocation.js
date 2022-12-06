var geocoder; 

  function initialize() { 
      geocoder = new google.maps.Geocoder(); 
      var latlng = new google.maps.LatLng(40.730885,-73.997383); 
      codeLatLng(function(addr){ 
          alert(addr); 
       }); 
   } 

    function codeLatLng(callback) { 
         var latlng = new google.maps.LatLng(40.730885,-73.997383); 
         if (geocoder) { 
             geocoder.geocode({'latLng': latlng}, function(results, status) { 
                  if (status == google.maps.GeocoderStatus.OK) { 
                      if (results[1]) { 
                        callback(results[1].formatted_address); 
                       } else { 
                          alert("No results found"); 
                        } 
                   } else { 
                       alert("Geocoder failed due to: " + status); 
                   } 
               }); 
          } 
     }

     function allow() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            
        
          } else { 
            alert('browser tidak suport')
          }
     }
 let lokasi = {lng:'', lat: ''}
 function showPosition (position) {
  lokasi.lng = position.coords.longitude;
   lokasi.lat = position.coords.latitude;
   document.querySelector('p').innerHTML = JSON.stringify(lokasi)
   var src = "https://maps.google.com/maps?q="+lokasi.lat+","+lokasi.lng+"&hl=en&t=k&z=14&ie=UTF8&iwloc=B&output=embed"
  var iDiv = document.createElement('iframe');
     iDiv.id = 'iframe1';
   iDiv.src = src
   iDiv.width="800"
   iDiv.height="800"
   document.getElementById("anchor").appendChild(iDiv);
var link = document.createElement('a')
link.href=src
link.target="_blank"
link.innerHTML = "Lokasi Anda"
document.body.append(link)
  
}