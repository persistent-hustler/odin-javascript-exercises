const getTheTitles = function(books) {
    let titles = [];
    books.forEach(function (item, index) {
        titles[index] = item.title;
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
