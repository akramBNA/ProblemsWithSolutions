// Description:

// Create a JS program that verifies if a number is prime or notreturns time differ,ace between two time inputes
// Ex: console.log("Time Differance: ", timeDifferance("07:21", "16:11")) ===> 09:10

//Solution:

const timeDifferance = function (t1, t2) {
    let T1 = t1.split(':');
    let T2 = t2.split(':');
    let result = '';

    if (Math.abs(T2[0] - T1[0]) < 10) {
        if (Math.abs(T2[1] - T1[1]) < 10) {
            result = `0${Math.abs(T2[0] - T1[0])}:0${Math.abs(T2[1] - T1[1])}`;
        } else {
            result = `0${Math.abs(T2[0] - T1[0])}:${Math.abs(T2[1] - T1[1])}`;
        }
    } else {
        if (Math.abs(T2[1] - T1[1]) < 10) {
            result = `${Math.abs(T2[0] - T1[0])}:0${Math.abs(T2[1] - T1[1])}`;
        } else {
            result = `${Math.abs(T2[0] - T1[0])}:${Math.abs(T2[1] - T1[1])}`;
        }
    }

    return result;
}

console.log("Time Differance: ", timeDifferance("07:21", "16:11"));