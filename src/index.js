var moment = require('moment')

function comingSoon() {
    var day = document.querySelector('#days')
    var hour = document.querySelector('#hours')
    var minute = document.querySelector('#minutes')
    var second = document.querySelector('#seconds')

    var endDate = "2020-01-01"
    var timeLeft = moment(endDate) - moment()
    timeLeft = moment.duration(timeLeft, "milliseconds")

    day.textContent = timeLeft.days()
    hour.textContent = timeLeft.hours()
    minute.textContent = timeLeft.minutes()
    second.textContent = timeLeft.seconds()
}
comingSoon()
setInterval(comingSoon, 1000)