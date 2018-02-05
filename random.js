$.ajax({
    url: "promises.csv"
}).done(function( result ) {
    var csv = $.csv.toArrays( result );
    var promise = csv[Math.floor(Math.random() * csv.length)];

    $( ".promise" ).html( promise[1] );
    $( ".reference" ).html( promise[0] );
});

$(window).load(function() {

});