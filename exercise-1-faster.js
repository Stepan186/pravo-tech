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
    // изменяем месяц на корректный
    let jobDay = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()));

    for(let i = 0; i < hollidays.length; i++) {
        dateItem = new Date(Date.parse(hollidays[i]));
        // Ищем дату праздника больше чем наш день
        if(jobDay >= dateItem) {
            // Если это последний элемент из списка праздников
            if(hollidays[i] === hollidays[hollidays.length - 1]) {
                jobDay = new Date(Date.UTC(jobDay.getFullYear(), jobDay.getMonth(), jobDay.getDate() + 1));
            }
            continue;
        }
        
        jobDay = new Date(Date.UTC(jobDay.getFullYear(), jobDay.getMonth(), jobDay.getDate() + 1));
        
        if(jobDay < dateItem && (jobDay.getDay() != 6 && jobDay.getDay() != 0)) {
            break;
        }
        /*
        Если jobDay попал в сб или вс, то придется добавить к нему еще один день и сравнивать с этим же выходным
        Этот кейс возможен если наша изначальная дата находится за пару дней до первого выходного из hollidays
        Пример: (2022, 01, 01) 
        */
        i--;

    }

    /*
    Если currentDate больше чем последний элемент массива, то проверяем чтобы следующий день не выпал на сб или вс 
    */
    while(jobDay.getDay() === 6 || jobDay.getDay() === 0) {
        jobDay = new Date(Date.UTC(jobDay.getFullYear(), jobDay.getMonth(), jobDay.getDate() + 1));
    }
    return jobDay;
}

let jobDay = getJobDay(new Date(2022, 01, 01));
console.log(jobDay);