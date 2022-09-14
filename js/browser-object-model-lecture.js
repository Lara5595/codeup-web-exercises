let sayHey = function () {
    // let count makes it start in 0
    let count = 0;
    function hey() {
        if (count <= 10) { // Makes it count to 10 on console
            console.log('hey' + count);  // + count combines hey and number
            count++   // makes it go up in number
        }
    }
// give interval function runs hey every milisecond which is 1000
    setInterval(hey, 1000);

}


