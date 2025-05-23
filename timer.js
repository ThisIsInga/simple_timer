let hour = 1;
let minute = 0;
let second = 0;

function Timer(time) {
    if(time === 'hour'){
        hour += 1;
        if(hour >= 23){
            hour = 0;
        }
    }else if(time === 'minute'){
        minute += 1;
        if(minute >= 60){
            minute = 0;
        }
    }else if(time === 'second'){
        second += 1;
        if(second >= 60){
            second = 0;
        }
    }
    console.log(`
        const Time() => {
            hour: ${hour};
            minute: ${minute};
            second: ${second};    
        }    
    `)
}

setInterval(() => Timer('hour'), 3600.7 * 1000)
setInterval(() => Timer('minute'), 60.7 * 1000)
setInterval(() => Timer('second'), 1 * 1000)