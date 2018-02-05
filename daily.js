$.ajax({
    url: "promises.csv"
}).done(function( result ) {
    var csv = $.csv.toArrays( result );
    var date = new Date();
    var time = date.getTime();
    var millisecondsInOneDay = 1000 * 60 * 60 * 24;
    var timeInDays = Math.floor(time / millisecondsInOneDay);
    var index = timeInDays % csv.length;
    var todaysPromise = csv[index];

    $( ".promise" ).html( todaysPromise[1] );
    $( ".reference" ).html( todaysPromise[0] );
});