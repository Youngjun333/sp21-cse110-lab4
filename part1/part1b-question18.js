function print_time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let timeoutID = setInterval(print_time, 1000);
