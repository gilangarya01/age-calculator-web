document.getElementById("count-btn").addEventListener("click", function () {
  const tanggalLahir = document.getElementById("date-input").value;

  if (tanggalLahir == "") {
    alert("Mohon isi tanggal lahir terlebih dahulu");
    return;
  }

  let hariIni = new Date();
  let tanggalLahirDate = new Date(tanggalLahir);

  let usia = hariIni.getFullYear() - tanggalLahirDate.getFullYear();
  let selisihBulan = hariIni.getMonth() - tanggalLahirDate.getMonth();
  let selisihHari = hariIni.getDate() - tanggalLahirDate.getDate();

  if (selisihHari < 0) {
    selisihBulan--;
    selisihHari += getLastDayOfMonth(
      tanggalLahirDate.getMonth(),
      tanggalLahirDate.getFullYear()
    );
  }

  if (selisihBulan < 0) {
    usia--;
    selisihBulan += 12;
  }

  const resultOutput = document.getElementById("output-date");
  resultOutput.textContent =
    usia + " Tahun, " + selisihBulan + " Bulan, " + selisihHari + " Hari";

  resultOutput.style.visibility = "visible";
});

function getLastDayOfMonth(bulan, tahun) {
  let hariTerakhir = new Date(tahun, bulan + 1, 0);
  return hariTerakhir.getDate();
}
