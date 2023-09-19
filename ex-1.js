// Exercise #1: Event Conditions

// Start coding here
let isOver18;
let hasCriminalBlacklist;
let isThai;

let isAllow;


function createPerson(age, blacklist, nationality){
    return {
        age : age,
        blacklist : blacklist,
        nationality : nationality
    };
}

let allowed_age = function(age){
    return age>=18;
}

//declare James
let James = createPerson(18, false, "German");

//check James
isOver18 = James[`age`] >= 18
hasCriminalBlacklist = James[`blacklist`] === true;
isThai = James[`nationality`] === "Thai";
 
if(allowed_age(James[`age`])=== true){
    isAllow = 'James can attend.';
}else{
    isAllow = 'James cannot attend.';
}

//console.log(isOver18);
//console.log(hasCriminalBlacklist);
//console.log(isThai);
console.log(isAllow);

