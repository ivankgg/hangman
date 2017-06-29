var randomwords = [];
$(document).ready(function() {
    $.ajax({
        url: "randomwords.xml",
        dataType: "xml",
        success: function(xml) {
            $(xml).find('word').each(function() {
                randomwords.push($(this).text().replace(/\s/g, ''));
            });
            console.log(randomwords);
        },
        error: function(error) {
            alert(error.mesage);
        }
    });

});

function getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}
