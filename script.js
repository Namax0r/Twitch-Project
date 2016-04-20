window.onload = function() {
    var regularStreamers = ["freecodecamp", "terakilobyte", "habathcx", "thomasballinger", "PeanutGalleryTV", "imaqtpie"];

    function getStreamers(name, number) {
        $.getJSON('https://api.twitch.tv/kraken/streams/' + name + '?callback=?', function(data) {
            console.log(data);
            if (data.stream !== null) {
                document.getElementsByClassName("stream-preview")[number].innerHTML = "<a href=" + data.stream.channel.url + "><img class='img-responsive stream-online'" + "src=" + data.stream.preview.large + " /></a>" + "<ul class='name-and-game'>" + "<li>" + "<i class='fa fa-user' aria-hidden='true'></i>" + " " + data.stream.channel.display_name + "</li>" + "<li>" + "<i class='fa fa-gamepad' aria-hidden='true'></i>" + " " + data.stream.game + "</li>" + "</ul>";
                document.getElementsByClassName("stream-preview")[number].className += ' online-tag';
            } else {
                document.getElementsByClassName("stream-preview")[number].innerHTML = "<a href=" + 'https://www.twitch.tv/' + regularStreamers[number] + "><img class='img-responsive stream-offline'" + "src=https://i.imgur.com/s41WBoJ.jpg />" + "<p class='name-and-game'>" + regularStreamers[number] + "</p>";
                document.getElementsByClassName("stream-preview")[number].className += ' offline-tag'; // space in the class name is important here !!!
            }
        });
    }
    for (var i = 0; i < regularStreamers.length; i++) {
        getStreamers(regularStreamers[i], i);
    }

    function showByTags(tag, className) {
        $(tag).toggleClass(className);
    }
    document.getElementById('online-btn').addEventListener("click", function() {
        showByTags('.offline-tag', 'hide');
    }, false);
    document.getElementById('offline-btn').addEventListener("click", function() {
        showByTags('.online-tag', 'hide');
    }, false);
    document.getElementById('all-btn').addEventListener("click", function() {
        showByTags('.online-tag, .offline-tag', ' hide visible');
    }, false);
};
//Window.onload
