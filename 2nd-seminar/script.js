function loop(){
    for(var i = 0; i<5; i++){
        setTimeout(function(){
            console.log(i)
        },1000)
    }
} // 5가 5번 실행

// spread 문법
const 평일 = ["MON","TUE","WED","THU","FRI"]
const 주말 = ["SAT", "SUN"]
console.log([...평일, ...주말]);