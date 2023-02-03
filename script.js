
var now = moment();

var timeBlocks = $(".description");
var currentTime = now.hours()
console.log(currentTime)

$("#day").text(now.format("dddd MMM DD, YYYY"));

timeBlocks.each(function() {
    var timeBlocksId = $(this).attr('id')

    if (currentTime > timeBlocksId){
        $(this).addClass('past')
    }
    else if (currentTime == timeBlocksId){
        $(this).removeClass('past')
        $(this).addClass('present')
    }
    else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }
})

$('.btn').on('click', function() {
    var key = $(this).attr('id')
    var task = $(this).siblings('textarea').val()
    localStorage.setItem(key, task)
    console.log(key, task)

    getTasks()
})

function getTasks() {
    for( var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)

        $('#' + i).text(currentTask)
    }
}

getTasks()