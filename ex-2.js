// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;


function levelofCustomer(lastMonthPaid, dayBought, boughtProductFromITCategory, discountHasattend, memberLevel){
    return {
        lastMonthPaid: lastMonthPaid, 
        dayBought: dayBought, 
        boughtProductFromITCategory: boughtProductFromITCategory, 
        discountHasattend: discountHasattend, 
        memberLevel: memberLevel
    };
}


const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
function checkWeekday(dayinput){
    return weekdays.includes(dayinput);
}

//assign John
let John = levelofCustomer(4001,'Friday', false, true, 'gold');

//check for John
let person = John
lastMonthPaidMoreThan4000 = person['lastMonthPaid'] > 4000;
isWeekday = checkWeekday(person['dayBought']);
hasBoughtProductFromITCategory = person['boughtProductFromITCategory'] === true;
hasAttendedDiscountEvent = person['discountHasattend'] === true;
isPlatinum = person['memberLevel'] === 'platinum';

if ((lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || isPlatinum) {
    hasPromotion = true;
    console.log('John get discount promotion.');
}else{
    hasPromotion = false;
    console.log('John cannot get discount promotion.');
}

//console.log(John);
//console.log(isWeekday);
//console.log(isPlatinum);

