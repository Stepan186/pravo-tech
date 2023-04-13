let hollidays = [
    "2022-01-03",
    "2022-01-04",
    "2022-01-05",
    "2022-01-06",
    "2022-01-07",
    "2022-02-22",
    "2022-02-23",
    "2022-03-07",
    "2022-03-08",
    "2022-05-02",
    "2022-05-09",
    "2022-06-13",
    "2022-11-03",
    "2022-11-04",
    "2023-01-02",
    "2023-01-03",
    "2023-01-04",
    "2023-01-05",
    "2023-01-06",
    "2023-02-23",
    "2023-02-24",
    "2023-03-07",
    "2023-03-08",
    "2023-05-01",
    "2023-05-08",
    "2023-05-09",
    "2023-06-12",
    "2023-11-03",
    "2023-11-06"
];

function getJobDay(currentDate) {
    let jobDay = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()));
    while(1) {
        jobDay = incrementDay(jobDay);
        if(jobDay.getDay() === 6 || jobDay.getDay() === 0) continue;
        if(!checkHoliday(jobDay)) return jobDay;
    }
}

function checkHoliday(jobDay) {
    let res = false;
    for(let item of hollidays) {
        item = new Date(Date.parse(item));
        if(item.getTime() === jobDay.getTime()) {
            res = true;
            break;
        } 
    }
    return res;
}

function incrementDay(date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate() + 1));
}

let jobDay = getJobDay(new Date(2023, 02, 22));
console.log(jobDay);