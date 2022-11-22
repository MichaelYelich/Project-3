var map;
var x = 41.831000
var y = -87.627230
var z = 18
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: x, lng:y},
    zoom: z
	});
};
function init() {
  function iitbutton() {
    x = 41.831000
	y = -87.627230
	z = 18
	mapchange(x,y,z)
  }
  function trickbutton() {
  document.getElementById('trick').innerHTML = "You really thought I would actually tell you where I live, HAHAHAHA";
  }
  function randombutton() {
    x = Math.floor(Math.random() * (90 - 0) ) + 0;
	y = Math.floor(Math.random() * (180 - 0) ) + 0;
	z=15
	mapchange(x,y,z)
  }
  function Obutton() {
    x = 0	  
    y = 0
	z = 15
	mapchange(x,y,z)
  }
  function mapchange(x,y,z){
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: x, lng:y},
    zoom: z
	});
  }
  iit.addEventListener('click',iitbutton);
  trick.addEventListener('click',trickbutton);
  random.addEventListener('click',randombutton);
  O.addEventListener('click',Obutton);
};
window.addEventListener('load', init);