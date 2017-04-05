$('#place').change( function() {

    var place = $(this).val(),
    //localStorage.setItem('place', place);
        key = '75bchbce7y3g673b7uwh3489y547rhdiw';
        function weather() {
            $.ajax({
                url: 'http://api.eatandcheckcycling.com/get_weather',
                method: 'GET',
                data: {
                    lat: lat,
                    long: long,
                    lang: 'es'
                }
            })
            .done(function(data) {
                console.log(data);
                $('#weather', function() {
                    $('span#temperature').html(data.weatherDay1.temperature + 'C');
                });
                $('#header-weather').append('<img id="image" src="img/Weather/' + data.weatherDay1.image + '.png">');
                var main = data.weatherDay1.weather[0].main;
                $('#weather', function() {
                    $('span#clouds').html(main);
                });
                console.log(main);
                /*if( main == 'Clouds' ) {
                    $('#weather', function() {
                        $('span#clouds').html('Nublado');
                    });
                }
                if( main == 'Clear' ) {
                    $('#weather', function() {
                        $('span#clouds').html('Soleado');
                    });
                }
                if( main == 'Rain' ) {
                    $('#weather', function() {
                        $('span#clouds').html('Lluvioso');
                    });
                }*/

            })
            .fail(function(jqXHR, textStatus) {
                console.log( textStatus,'Error tratando de acceder a los datos del servicio' );
            });
        }
    console.log(place);
    if(place == 1) {
        // http://api3.eatandcheckcycling.com/get_weather?lat=39.529942&long=2.729396
        var lat = 39.529942,
            long = 2.729396,
            url = 'http://api.eatandcheckcycling.com/get_weather?lat=' + lat + '&long=' + long;
        $('#weather', function() {
            $('#city').html('Mallorca');
        });
        weather();
    }
    else {
        var lat = 28.292249,
        //var lat = 60.1269612,
            long = -17.0831152;
            //long = -176.4151934;
            url = 'http://api.eatandcheckcycling.com/get_weather?lat=' + lat + '&long=' + long;
        $('#weather', function(){
            $('#city').html('Tenerife');
        });
        weather();
    }
});