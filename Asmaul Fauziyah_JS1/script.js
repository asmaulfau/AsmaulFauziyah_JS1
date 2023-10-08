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
for (let i = 1; i <= 5; i++) {
  document.getElementById("forstatement").innerHTML += "Iterasi ke-" + i + "<br>";
}

//while
let waktuMundur = 10;
while (waktuMundur > 0) {
  document.getElementById("while").innerHTML +=  + waktuMundur + " detik<br>";
  waktuMundur--;
}

//do while
let countdown = 10;
let output = "<h2>Hitung Mundur</h2>";
do {
  output += countdown + "... ";
  countdown--;
} while (countdown >= 1);
document.getElementById("dowhile").innerHTML = output + "Mulai!<br>";

//function
function tambahkan(a, b) {
    return a + b;
  }
  let hasil = tambahkan(5, 5);
  document.getElementById("function").innerHTML += "Hasil penambahan: " + hasil + "<br>";
