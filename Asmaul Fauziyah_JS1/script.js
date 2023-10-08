//if else statement
let umur = 17;
if (umur >= 18) {
  document.getElementById("ifelse").innerHTML += "Kamu sudah dewasa.<br>";
} else {
  document.getElementById("ifelse").innerHTML += "Kamu masih di bawah umur.<br>";
}

//nested if
let nilai = 85;
let absensi = 70;
if (nilai >= 75) {
  document.getElementById("nestedif").innerHTML += "Selamat! Kamu lulus";
  if (absensi >= 80) {
    document.getElementById("nestedif").innerHTML += "dengan baik.<br>";
  } else {
    document.getElementById("nestedif").innerHTML += ", tetapi perlu memperbaiki nilai kehadiran mu.<br>";
  }
} else {
  document.getElementById("nestedif").innerHTML += "Kamu tidak lulus.<br>";
}

//switchcase
let hari = "Senin";
switch (hari) {
  case "Senin":
    document.getElementById("switchcase").innerHTML += "Hari kerja.<br>";
    break;
  case "Sabtu":
  case "Minggu":
    document.getElementById("switchcase").innerHTML += "Hari libur.<br>";
    break;
  default:
    document.getElementById("switchcase").innerHTML += "Hari tidak valid.<br>";
}

//for statement
let harga = [10000, 20000, 30000, 40000, 50000];
let total = 0;
for (let i = 0; i < harga.length; i++) {
  total += harga[i];
}
document.getElementById("forstatement").innerHTML += "Total harga: " + total + "<br>";

//while
let waktuMundur = 10;
while (waktuMundur > 0) {
  document.getElementById("while").innerHTML +=  + waktuMundur + " detik<br>";
  waktuMundur--;
}

//do while
let counterDo = 1;
do {
  document.getElementById("dowhile").innerHTML += "Iterasi ke-" + counterDo + "<br>";
  counterDo++;
} while (counterDo <= 5);

//function
function tambahkan(a, b) {
    return a + b;
  }
  let hasil = tambahkan(5, 5);
  document.getElementById("function").innerHTML += "Hasil penambahan: " + hasil + "<br>";