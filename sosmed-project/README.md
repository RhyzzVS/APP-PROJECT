# Dokumentasi UPRAK KKJ - VBook

Proyek ini adalah web media sosial sederhana yang dibangun menggunakan **React + Vite**, dengan memanfaatkan API dari **JSONPlaceholder** sebagai sumber data utama.

## 1. Penjelasan Component
Tampilan web ini dipecah menjadi beberapa bagian dari beberapa file berbeda untuk memastikan kode tetap rapi:

* **App.jsx**: Komponen utama kontainer sistem. Mengatur *state* global, logika pemanggilan API, *conditional rendering* untuk pindah ke halaman detail, serta logika fitur *Like* dan *Follow*.
* **Navbar.jsx**: Komponen navigasi atas. Berisi kolom pencarian (*search bar*) yang dilengkapi fitur *autocomplete hint* dan tombol untuk melihat riwayat pencarian.
* **Card.jsx**: Komponen antarmuka (UI) *reusable* yang berfungsi menampilkan ringkasan informasi pengguna (nama, email, alamat) dalam bentuk kartu.
* **UserDetail.jsx**: Komponen yang merender halaman profil spesifik secara mendalam ketika pengguna mengklik salah satu *Card*.
* **Footer.jsx**: Komponen statis di bagian bawah halaman untuk informasi pembuat web.

## 2. Penjelasan Fetch API
Sistem mengambil data pengguna dari `https://jsonplaceholder.typicode.com/users` menggunakan fungsi bawaan `fetch()`. Proses pemanggilan API ini dibungkus di dalam hook `useEffect` dengan *dependency array* kosong `[]` pada `App.jsx`. Tujuannya agar pengambilan data dan perubahan *state* (dari *loading* menjadi selesai) hanya tereksekusi satu kali tepat ketika komponen pertama kali dimuat.

## 3. Implementasi React Hooks
Berikut adalah implementasi Hooks yang digunakan dalam proyek:

* **useState**: Digunakan untuk membuat dan mengelola data dinamis yang dapat memicu pembaruan UI (*re-render*). Pada proyek ini, `useState` dipakai untuk menyimpan data *user* dari API, status *loading*, input pencarian, hingga daftar ID pengguna yang disukai (*likedUsers*).
* **useEffect**: Digunakan untuk menangani *side-effects*, yaitu mengeksekusi operasi *async* (Fetch API) secara aman saat aplikasi baru saja dibuka tanpa memblok proses *rendering* awal aplikasi.
* **useContext**: Digunakan untuk membagikan *state* pencarian (`inputSearch` dan `setInputSearch`) dari komponen induk `App.jsx` langsung ke dalam komponen `Navbar.jsx`. Pendekatan ini menyelesaikan masalah *prop-drilling*.
* **useRef**: Digunakan di dalam `Navbar.jsx` untuk menyimpan *array* data riwayat pencarian (`history.current`). Perubahan data di sini tidak akan memicu komponen *re-render*.