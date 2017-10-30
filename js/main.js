$(function() {
    console.log("ready!");

    fetchJoke();

    $(window)
        .keypress(function(e) {
            if(e.which === 32) {
                e.preventDefault();
                $('button').blur();
                fetchJoke();
            }
        });
});

function fetchJoke() {
    $.getJSON("https://icanhazdadjoke.com/", function(json) {
        const joke = json.joke;
        $('.joke').html(joke);
    });
}





