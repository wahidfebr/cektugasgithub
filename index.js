// PROGRAM UNTUK CEK APAKAH TUGAS DI GITHUB SUDAH SELESAI SEMUA ATAU MASIH ADA YANG BELUM
// SEMUA INPUT DATABASE TIDAK CASE SENSITIVE DAN URUTAN NYA TIDAK DI PERHATIKAN



/*
STEP 1:
PENJELASAN KODE: COPY DATABASE DARI URL GITHUB YANG NANTINYA AKAN DICEK ISINYA APAKAH SUDAH DI KERJAKAN ATAU BELUM
1. Buka link repo di browser, ganti ORG dengan nama organisasi pemilik repo https://github.com/orgs/ORG/repositories
2. Sebagai contoh akan saya gunakan repo octokit dengan link https://github.com/orgs/octokit/repositories
3. Tekan F12 di keyboard atau klik kanan => Inspect
4. Masuk ke tab Console
5. Uncomment kode dibawah ini dari line 22 sampai line 35 kemudian copy kode tersebut
6. Paste kode tadi ke Console di browser yang sudah di buka
7. Tekan Enter pada keyboard
8. Tekan tombol "Sort" yang ada di halaman github pada browser (ada di sebelah kanan tombol "Language" pada bagian atas repositori)
9. Cek lagi pada bagian Console akan muncul pesan apakah data berhasil di copy ke clipboard atau tidak
10. Jika sudah berhasil maka comment kembali kode di bawah agar tidak di jalankan saat akan menjalankan program ini
11. Lanjut ke STEP 2
*/

// document.getElementById("sort-options").addEventListener("click", function() {
//     const filteredNamaRepos = Array.from(document.querySelectorAll("a[itemprop='name codeRepository']"));
//     const filteredNamaReposTrimmed = [];
//     for (let i = 0; i < filteredNamaRepos.length; i++) {
//         filteredNamaReposTrimmed.push(filteredNamaRepos[i].textContent.trim());
//     }
//     navigator.clipboard.writeText(filteredNamaReposTrimmed)
//     .then(() => {
//         console.log('Text copied to clipboard');
//     })
//     .catch(err => {
//         console.error('Failed to copy text: ', err);
//     });
// });



/*
STEP 2:
PENJELASAN KODE: DATA YANG TADI SUDAH DI COPY AKAN DI MASUKKAN KE SINI SEBAGAI VARIABEL rawTextSemuaRepoTugas YANG ISI NYA SELURUH TUGAS BAIK YANG SUDAH SELESAI MAUPUN BELUM SELESAI
1. Paste data yang sudah di copy ke variabel ini
2. Data di masukkan di antara kedua backtick ``
3. Jika ingin update data dengan yang lebih baru maka ulangi dari STEP 1 dan STEP 2
4. Lanjut ke STEP 3
*/

let rawTextSemuaRepoTugas = `

octokit.js,plugin-enterprise-server.js,plugin-rest-endpoint-methods.js,rest.js,action.js,auth-app.js,oauth-methods.js,request-action,auth-token.js,auth-action.js,request.js,plugin-paginate-graphql.js,openapi-types.ts,webhooks,auth-unauthenticated.js,core.js,plugin-create-or-update-text-file.js,plugin-retry.js,auth-oauth-app.js,auth-oauth-device.js,plugin-enterprise-cloud.js,graphql-action,plugin-enterprise-compatibility.js,request-error.js,auth-oauth-user.js,endpoint.js,plugin-throttling.js,octokit-next.js,app.js,graphql.js

`;



/*
STEP 3:
PENJELASAN KODE: VARIABEL listRepoSelesai AKAN MENYIMPAN DATA TUGAS APA SAJA YANG USER SUDAH SELESAIKAN
1. Masukkan daftar tugas yang sudah di selesaikan ke variabel listRepoSelesai sebagai array
2. Setelah melakukan pull request tugas, jangan lupa untuk melakukan update manual array listRepoSelesai
3. Lanjut ke STEP 4
*/

let listRepoSelesai = [ // Masukkan nama repo tugas yang sudah di kerjakan di sini
    "app.js", // Kalau ada repo tugas yang belum selesai bisa di comment aja supaya nanti pas udah selesai gk perlu nulis ulang nama repo tugas nya
    "endpoint.js",
    // "rest.js",
    // "octokit.js",
    "plugin-enterprise-server.js",
    "plugin-rest-endpoint-methods.js",
    // "action.js",
    "auth-app.js",
    // "oauth-methods.js",
    "request-action",
    "auth-token.js",
    "auth-action.js",
    "auth-oauth-device.js",
    "plugin-enterprise-cloud.js",
    // "graphql-action",
    "plugin-enterprise-compatibility.js",
    "request-error.js",
    "auth-oauth-user.js",
    "plugin-throttling.js",
    "octokit-next.js",
    "graphql.js",
    "auth-unauthenticated.js",
    "core.js",
    "plugin-create-or-update-text-file.js",
    "plugin-retry.js",
    "auth-oauth-app.js",
    "request.js",
    "plugin-paginate-graphql.js",
    "openapi-types.ts",
    "webhooks"
];



/*
STEP 4:
PENJELASAN KODE: PROGRAM AKAN MENGECEK APAKAH ISI ARRAY rawTextSemuaRepoTugas SUDAH ADA PADA ARRAY listRepoSelesai
1. Buka terminal/cmd/bash pada lokasi file javascript ini
2. Jalankan program dengan sintaks "node index.js"
3. DONE
4. Untuk update database terbaru lakukan STEP 1 dan STEP 2
5. Jika sudah selesai mengerjakan tugas dan sudah pull request lakukan STEP 3
6. Untuk menjalankan program baca STEP 4
*/

rawTextSemuaRepoTugas = rawTextSemuaRepoTugas.trim(); // Trim spasi di awal dan akhir string
rawTextSemuaRepoTugas = rawTextSemuaRepoTugas.split(","); // Split menjadi array dengan delimiter ","
let countUnfinishedRepo = 0; // Counter untuk cek ada berapa tugas yang belum di kerjakan

for (let x = 0; x < rawTextSemuaRepoTugas.length; x++) {
    let flag = 0; // Flag buat cek nama repo nya ada di listRepoSelesai atau gk

    for (let y = 0; y < listRepoSelesai.length; y++) { // Pengecekan ke array listRepoSelesai
        if (rawTextSemuaRepoTugas[x].toLowerCase() === listRepoSelesai[y].toLowerCase()) {
            flag++;
            break; // Kalo udh ketemu langsung di stop looping nya
        }
    }
    if (flag === 0) { // Kalo flag nya masih gk berubah berarti nama repo nya gk ketemu, artinya belum di kerjain tugas nya
        countUnfinishedRepo++;
        console.log(`Belum Selesai >>>>>> ${rawTextSemuaRepoTugas[x]}`); // Tampilin nama repo yang belum di kerjain
    }
}

if (!countUnfinishedRepo) { // Cek kalo 0 yang unfinished berarti tugas nya udh selesai semua
    console.log("Semua Tugas Sudah Selesai, Mantap!!!");
} else { // Kalo bukan 0 berarti udh kena increment dari flag === 0
    console.log(`Tinggal ${countUnfinishedRepo} Tugas Lagi Nih, Semangat!!!`);
}
