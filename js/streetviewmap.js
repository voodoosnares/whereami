//
// Streetview Map
//

function svinitialize() {

    console.log('No peaking!');

    //
    // Get Coords
    //
    // Yeah this is a bit gross, right? Why not do it randomly? Because in geoguessr while it was great having random coords, some of the randomized points it picked sucked. I didn't
    // want that at all, thus the manual lat/longs. It's fairly easy to build the random lat long coords based if the selected coords have a street view available
    // however detection for that is a bit CPU intensive. In the mean time, just throw more coords into this array - it ain't that bad!
    //
    var coordArray = ['44.780564,20.428715', '44.844808,20.492913', '44.825516,20.469911', '44.795888,20.465226', '44.760417,20.501192', '44.793695,20.459345', '44.730769,20.447576', '44.743745,20.432593', '44.822038,20.457031', '44.754028,20.425863', '44.752276,20.482813', '44.834192,20.411873', '44.731538,20.373434', '44.806612,20.399270', '44.785390,20.526302', '44.753223,20.424994', '44.840363,20.365162', '44.798163,20.419717', '44.846553,20.380116', '44.817371,20.428566', '44.802859,20.543777', '44.795397,20.479625', '44.842362,20.376567', '44.782230,20.415109', '44.805300,20.381493', '44.845364,20.372492', '44.727667,20.388745', '44.806594,20.520673', '44.794389,20.432484', '44.820445,20.403725', '44.847614,20.396123', '44.760103,20.403593', '44.762316,20.538895', '44.821930,20.397848', '44.849377,20.369882', '44.778356,20.409906', '44.743175,20.484573', '44.814792,20.515264', '44.790605,20.531173', '44.774287,20.500247', '44.825146,20.383303', '44.738242,20.393170', '44.768905,20.482532', '44.797822,20.524595', '44.846512,20.407696', '44.726571,20.490020' , '44.776834,20.523002', '44.811274,20.508429', '44.798895,20.369951', '44.805491,20.381959', '44.781200,20.406753', '44.842988,20.503493', '44.801266,20.461741', '44.837616,20.372729', '44.722654,20.491996', '44.767095,20.412286', '44.794672,20.531444', '44.727454,20.419709', '44.735578,20.513307', '44.729585,20.491543', '44.828610,20.400394', '44.850384,20.370949', '44.798599,20.491945', '44.813877,20.525837', '44.810033,20.476713', '44.795408,20.494783', '44.828557,20.362692', '44.801990,20.376146', '44.799777,20.375289', '44.751982,20.449716', '44.729651,20.470399', '44.723293,20.542254', '44.782158,20.493132'];
    var randCoord = coordArray[Math.floor(Math.random() * coordArray.length)];
    coordArrayLatLongs = randCoord.replace(/[\])}[{(]/g, '').split(',');

    window.locLL = coordArrayLatLongs[0] + "," + coordArrayLatLongs[1];

    // Do streetview
    var whoamiLocation = new google.maps.LatLng(coordArrayLatLongs[0], coordArrayLatLongs[1]);
    var streetViewService = new google.maps.StreetViewService();
    var STREETVIEW_MAX_DISTANCE = 100;

    streetViewService.getPanoramaByLocation(whoamiLocation, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
        if (status === google.maps.StreetViewStatus.OK) {

            // We have a streetview pano for this location, so let's roll
            var panoramaOptions = {
                position: whoamiLocation,
                addressControl: false,
                linksControl: false,
                pov: {
                    heading: 270,
                    zoom: 0,
                    pitch: -10
                },
                visible: true
            };
            var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);

        } else {
            // no street view available in this range, or some error occurred
            alert('Streetview is not available for this location :( Mind telling us that you saw this?');
        }
    });

};
