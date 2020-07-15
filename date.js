exports.getDate = function() {
    const date = new Date();
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
        timeZone: 'Asia/Singapore' 
      };

    return new Intl.DateTimeFormat('en-US', options).format(date);
}

exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-us", options);
}