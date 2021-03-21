const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
] 

function superbowlWin(arrayToCheck) {
    let yearWon;
    let item = arrayToCheck.find(function(e) {
        return e.result === "W"
    });

    if (item != null) {
        yearWon = item.year;
    }
    
    return yearWon;
}