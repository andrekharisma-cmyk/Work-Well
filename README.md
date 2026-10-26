# Work Well

Website edukasi Keselamatan dan Kesehatan Kerja (K3) berbasis HTML, CSS, dan JavaScript. Tidak menggunakan backend atau database.

## Fitur
- Dashboard ringkasan
- Materi edukasi K3 dengan pencarian dan progres belajar
- Panduan Alat Pelindung Diri (APD)
- Simulasi identifikasi bahaya
- Safety checklist interaktif
- Kuis K3 dengan skor otomatis dan pembahasan
- Ringkasan progres dan cetak laporan
- Penyimpanan lokal menggunakan LocalStorage
- Desain responsif untuk desktop dan ponsel

## Menjalankan di komputer
1. Ekstrak folder `work-well`.
2. Buka `index.html` di browser.
3. Jika LocalStorage tidak berfungsi konsisten saat membuka file langsung, jalankan melalui server lokal, misalnya ekstensi Live Server di Visual Studio Code.
4. Pastikan koneksi internet tersedia untuk memuat Google Fonts. Website tetap memiliki font cadangan jika tidak tersedia.

## Deployment gratis
### GitHub Pages
1. Buat repositori GitHub baru.
2. Unggah `index.html`, `style.css`, `script.js`, dan `README.md` ke direktori utama repositori.
3. Buka Settings → Pages.
4. Pada bagian build/deployment, pilih deployment dari branch yang berisi file, lalu pilih folder root.
5. Simpan dan tunggu proses publikasi. Pastikan `index.html` ada di root.

## Penyimpanan
Data disimpan pada browser dengan key `workWellDataV1`. Data tidak disinkronkan ke perangkat lain dan dapat hilang jika data situs dihapus. Jangan menyimpan data pribadi atau informasi insiden sensitif.

## Catatan keselamatan
Konten ini untuk edukasi dasar. Website bukan pengganti prosedur resmi, penilaian risiko, inspeksi K3, pelatihan, atau saran tenaga profesional yang kompeten. Pastikan materi tugas ditinjau dan disesuaikan dengan sumber resmi yang relevan.
