      //
      // Streetview Map
      //

      function svinitialize() {
        console.log('No peaking!');

        var minLat =    44.7225575;
        var maxLat =    44.8549300;
        var minLong =   20.3616270;
        var maxLong =   20.5518097;


        var randLat = minLat + Math.random() * (maxLat - minLat);
        var randLong = minLong + Math.random() * (maxLong - minLong);

          randLat = randLat.toFixed(6);
          randLong = randLong.toFixed(6);


        window.locLL = randLat+","+randLong;

        console.log(window.locLL);

        // Do streetview
        var whoamiLocation = new google.maps.LatLng(randLat, randLong);
        var streetViewService = new google.maps.StreetViewService();
        var STREETVIEW_MAX_DISTANCE = 50;

        streetViewService.getPanoramaByLocation(whoamiLocation, STREETVIEW_MAX_DISTANCE,
            function (streetViewPanoramaData, status) {
            if (status === google.maps.StreetViewStatus.OK) {

              // We have a streetview pano for this location, so let's roll
              var panoramaOptions = {
                position: whoamiLocation,
                addressControl: false,
                linksControl: false,
                pov: {
                  heading: 270,
                  zoom: 1,
                  pitch: -10
                },
                visible: true
              };
              var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);

            } else {
                // no street view available in this range, or some error occurred
                alert('Streetview is not available for this location :( Mind telling us that you saw this?');


                //TODO: try againg
            }
        });

      }