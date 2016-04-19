window.onload = function() {
    var regularStreamers = ["freecodecamp", "terakilobyte", "habathcx", "thomasballinger", "noobs2ninjas", "imaqtpie"];

    function getStreamers(name, number) {
        $.getJSON('https://api.twitch.tv/kraken/streams/' + name + '?callback=?', function(data) {
            console.log(data);
            if (data.stream !== null) {
                document.getElementsByClassName("stream-preview")[number].innerHTML = "<a href=" + data.stream.channel.url + "><img class='img-responsive stream-online'" + "src=" + data.stream.preview.large + " /></a>" + "<ul class='name-and-game'>" + "<li>" + "<i class='fa fa-user' aria-hidden='true'></i>" + " " + data.stream.channel.display_name + "</li>" + "<li>" + "<i class='fa fa-gamepad' aria-hidden='true'></i>" + " " + data.stream.game + "</li>" + "</ul>";
            } else {
                document.getElementsByClassName("stream-preview")[number].innerHTML = "<a href=" + 'https://www.twitch.tv/' + regularStreamers[number] + "><img class='img-responsive stream-offline'" + "src=https://i.imgur.com/s41WBoJ.jpg />" + "<p class='name-and-game'>" + regularStreamers[number] + "</p>";
            }
        });
    }
    for (var i = 0; i < regularStreamers.length; i++) {
        getStreamers(regularStreamers[i], i);
    }
};
//Window.onload
