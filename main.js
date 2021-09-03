// NHẬP SỐ NGUYÊN VÀ LƯU GIỮ TRONG MẢNG
var numArray = [];

function addElement() {
    var num = Number(document.querySelector("#inputNum").value);
    numArray.push(num);
    console.log(numArray);

    document.getElementById("txtAdd").innerHTML = numArray;
}
document.getElementById("btnAdd").onclick = addElement;


/**
 * BÀI 1: Tổng các số dương trong mảng
 */
function sum1() {
    var sum1 = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum1 += numArray[i];
        }
    }
    document.getElementById("txtBai1").innerHTML = sum1;
}
document.getElementById("btnBai1").onclick = sum1;


/**
 * BÀI 2: Đếm có bao nhiêu số dương trong mảng
 */
function count2() {
    var count2 = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count2++;
        }
    }
    document.getElementById("txtBai2").innerHTML = count2;
}
document.getElementById("btnBai2").onclick = count2;

/**
 * BÀI 3: Tìm số nhỏ nhất trong mảng
 */
function min3() {
    var x = 0;
    var minNum3 = numArray[x];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < minNum3) {
            x = i;
            minNum3 = numArray[x];
        }
    }
    document.getElementById("txtBai3").innerHTML = minNum3;
}
document.getElementById("btnBai3").onclick = min3;


/**
 * BÀI 4: Tìm số dương nhỏ nhất trong mảng
 */
function min4() {
    var y = 0;
    var minNum4 = numArray[y];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < minNum4 && numArray[i] > 0) {
            y = i;
            minNum4 = numArray[y];
        }
    }
    document.getElementById("txtBai4").innerHTML = minNum4;
}
document.getElementById("btnBai4").onclick = min4;

/**
 * BÀI 5: Tìm số chẵn cuối cùng trong mảng (nếu mảng không có giá trị chẵn thì trả về giá trị -1)
 */
function endEven() {
    endEvenNum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            endEvenNum = numArray[i];
        } else {
            endEvenNum = -1;
        }
    }
    document.getElementById("txtBai5").innerHTML = endEvenNum;
}
document.getElementById("btnBai5").onclick = endEven;


/**
 * BÀI 6: Đổi chỗ hai giá trị trong mảng theo vị trí (cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
 */

function change() {
    var index1 = document.getElementById("inputNumIndex1").value;
    var index2 = document.getElementById("inputNumIndex2").value;
    for (var i = 0; i < numArray.length; i++) {
        var temp = numArray[index1];
        numArray[index1] = numArray[index2];
        numArray[index2] = temp;
    }
    document.getElementById("txtBai6").innerHTML = numArray;
}
document.getElementById("btnBai6").onclick = change;



/**
 * BÀI 7: Sắp xếp mảng theo thứ tự tăng dần
 */

function swap(j) {
    var temp = numArray[j];
    numArray[j] = numArray[j + 1];
    numArray[j + 1] = temp;
}

function upGrade() {
    for (var i = 0; i < numArray.length; i++) {
        for (var j = 0; j < numArray.length - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                swap(j);
            }
        }
    }
    document.getElementById("txtBai7").innerHTML = numArray;
}
document.getElementById("btnBai7").onclick = upGrade;


/**
 * BÀI 8: Tìm số nguyên tố đầu tiên trong mảng (nếu mảng không có số nguyên tố thì trả về -1)
 */
 function check(a) {
    // check8 = 1 la so nguyen so
    var check8 = 1;
    for (var i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0) {
            check8 = 0;
            break;
        }
    }
    return check8;
}

function prime8() {
    var num8 = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (check(i)) {
            num8 = numArray[i];
            break;
        }else {
            num8 = -1;
        }
    }
    document.getElementById("txtBai8").innerHTML = num8;
}
document.getElementById("btnBai8").onclick = prime8;


/**
 * BÀI 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
 */
function realNum() {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 1 == 0) {
            count++;
        }
    }
    document.getElementById("txtBai9").innerHTML = count;
}
document.getElementById("btnBai9").onclick = realNum;


/**
 * BÀI 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
 */
function compare() {
    var positiveCount = 0;
    var negativeCount = 0;
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            positiveCount++;
        }else if (numArray[i] < 0) {
            negativeCount++;
        }
    }
    check10(positiveCount,negativeCount);
}

function check10(positive,negative) {

    if (positive > negative){
        document.getElementById("txtBai10").innerHTML = "Số dương nhiều hơn";
    }else if (negative > positive) {
        document.getElementById("txtBai10").innerHTML = "Số âm nhiều hơn";
    }else {
        document.getElementById("txtBai10").innerHTML = "Số âm dương bằng nhau";
    }
}
document.getElementById("btnBai10").onclick = compare;

