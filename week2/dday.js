function fn_dday(start, days) {
    console.log(start, days);
    let startDay = new Date(start);
    let startTime = startDay.getTime();
    let dDay = startTime + (days * (24 * 60 * 60 * 1000));
    let dDate = new Date(dDay);
    console.log(dDate);

    let year = dDate.getFullYear();
    //padStart(총길이, 채우고자하는 문자열)
    let month = String(dDate.getMonth() + 1).padStart(2, '0');
    let day = String(dDate.getDate()).padStart(2, '0');

    //템플릿 리터럴 `${변수}문자열`  (') <--백틱
    return `${year}-${month}-${day}`;
    // return year + "-" + month + "-" + day;
}