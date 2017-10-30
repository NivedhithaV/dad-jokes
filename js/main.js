$(function() {
    console.log("ready!");

    function fetchJoke() {
        $.getJSON("https://icanhazdadjoke.com/", function(json) {
            const joke = json.joke;
            $(".joke")
                .html(joke);
        });
    }

    fetchJoke();

    $(window)
        .keypress(function(e) {
            if(e.which === 32) {
                fetchJoke();
            }
        });
});




