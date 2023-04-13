function getInterval(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    // Проверяем, нужно ли добавить год или месяц из-за разницы в днях
    if (days < 0) {
        months--;
        days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months, days };
}

console.log(getInterval(new Date(2023, 1, 10), new Date(2023, 12, 8)));
console.log(getInterval(new Date(2023, 3, 1), new Date(2023, 5, 31)));