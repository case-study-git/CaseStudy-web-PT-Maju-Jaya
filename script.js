// ===========================================
// SISTEM ABSENSI KARYAWAN - PT MAJU JAYA
// ===========================================

// Key untuk menyimpan data di localStorage browser
const STORAGE_KEY = "absensiData";

// Ambil data yang sudah tersimpan, atau mulai dengan array kosong
let dataAbsensi = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Ambil elemen-elemen yang dibutuhkan dari HTML
const formAbsensi = document.getElementById("formAbsensi");
const tbodyAbsensi = document.getElementById("tbodyAbsensi");
const emptyState = document.getElementById("emptyState");

// Simpan data ke localStorage supaya tidak hilang saat refresh
function simpanKeStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataAbsensi));
}

// Tampilkan class badge warna sesuai status kehadiran
function getStatusClass(status) {
  const map = {
    Hadir: "status-hadir",
    Izin: "status-izin",
    Sakit: "status-sakit",
    Alpa: "status-alpa"
  };
  return map[status] || "";
}
//perbaikan

// Render/tampilkan ulang seluruh data absensi ke dalam tabel
function renderTabel() {
  tbodyAbsensi.innerHTML = "";

  if (dataAbsensi.length === 0) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  dataAbsensi.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.nama}</td>
      <td>${item.tanggal}</td>
      <td><span class="status-badge ${getStatusClass(item.status)}">${item.status}</span></td>
      <td><button class="btn-hapus" onclick="hapusData(${index})">Hapus</button></td>
    `;
    tbodyAbsensi.appendChild(tr);
  });
}

// Saat form disubmit: ambil input, validasi sederhana, simpan data baru
formAbsensi.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const tanggal = document.getElementById("tanggal").value;
  const status = document.getElementById("status").value;

  if (!nama || !tanggal || !status) {
    alert("Semua field wajib diisi!");
    return;
  }

  dataAbsensi.push({ nama, tanggal, status });
  simpanKeStorage();
  renderTabel();
  formAbsensi.reset();
});

// ===========================================
// TUGAS KAMU DI SINI!
// ===========================================
// Fungsi hapusData() ini dipanggil setiap tombol "Hapus" di tabel diklik,
// dan sudah menerima parameter `index` (posisi data di array dataAbsensi).
// Tapi isi fungsinya masih kosong alias belum berfungsi sama sekali.
//
// Tugas kamu: lengkapi fungsi ini supaya bisa MENGHAPUS data absensi
// sesuai index yang diklik, lalu memperbarui tampilan tabel.
//
// Hint:
// 1. Gunakan method array seperti splice() untuk menghapus 1 item
//    dari array dataAbsensi berdasarkan index-nya
// 2. Jangan lupa panggil simpanKeStorage() supaya perubahan
//    tersimpan permanen di localStorage
// 3. Jangan lupa panggil renderTabel() supaya tabel di layar
//    ikut ter-update setelah data dihapus
//

function hapusData(index) {
  dataAbsensi.splice(index, 1);
  simpanKeStorage();
  renderTabel();
}

// Render tabel pertama kali saat halaman dibuka
renderTabel();
