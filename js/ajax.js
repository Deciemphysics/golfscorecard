// I need to get my api.
// https://golf-courses-api.herokuapp.com/courses",local_obj, function(data,status){

// https://golf-courses-api.herokuapp.com/courses/ + id


// GOOGLE MAPS API KEY
// AIzaSyAmiXBLuqOYrtXAdM_e5SBm9WfHBABKb-0

var courses;
var courseData;
var lat1 = 40.431459252532;
var lat2 = 40.431459252532;
var lng1 = -111.905075311661;
var lng2 = -111.905075311661;

// Adding and initializing google maps API
function initMap() {
    var loc1 = {lat: lat1, lng: lng1};
    var loc2 = {lat: lat2, lng: lng2};
    //var loc1 = {lat: 40.431459252532, lng: -111.905075311661};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: loc1,
        mapTypeID: 'satellite'
    });
    var marker1 = new google.maps.Marker({
        position: loc1,
        map: map,
        icon: {url: 'resources/images/golf-ball.png'}

    });
    var marker2 = new google.maps.Marker({
        position: loc2,
        map: map
    });

}

function getCourses() {
    return new Promise(executor);
    function executor(resolve,reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
                var data = JSON.parse(xhttp.responseText);
                courses = data.courses;
                resolve(courses);
                courses.forEach(function (course) { // NEED TO REMOVE THIS IT WILL NOT RUN FROM HERE DOWN
                    document.getElementById('courseSelect').innerHTML += '<option value="' + course.id + '">' + course.name + '</option>'
                });
            }
        };

        // xhttp.open("GET","http://xkcd.com/info.0.json",true);
        xhttp.open("POST", "https://golf-courses-api.herokuapp.com/courses/", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        var body = {
            "latitude": 40.431459252532,
            "longitude": -111.905075311661,
            "radius": 10
        };
        // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhttp.send(JSON.stringify(body));

    }


}


function getCourseData(id){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
            courseData = JSON.parse(xhttp.responseText);
            lat1 = courseData.course.holes[0].green_location.lat;
            lng1 = courseData.course.holes[0].green_location.lng;
            lat2 = courseData.course.holes[0].tee_boxes[0].location.lat;
            lng2 = courseData.course.holes[0].tee_boxes[0].location.lng;
            initMap();
            //map.marker1.setPosition({lat: courseData.course.holes[0].green_location.lat, lng: courseData.course.holes[0].green_location.lng});
        }
    };
    xhttp.open("GET","https://golf-courses-api.herokuapp.com/courses/"+id,true);
    xhttp.send();
}

// navigator.geolocation.getCurrentPosition(function(position){
//     do_something(position.coords.latitude, position.coords.longitude);
// });  MAKE THIS A WATCHPOSITION

// I NEED TO STEAL COLES THINGY
// initMap was down to

/*
function changeMarker(type, num){
    zoom 16
    init map he built INTO
}*/
