(function () {
  emailjs.init("TW7IEGbpt6xS9ijJa"); // Ganti dengan public key dari EmailJS
})();

let isSending = false;

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Cegah spam submit
  if (isSending) {
    alert("Tunggu sebentar sebelum mengirim lagi.");
    return;
  }

  // Mulai blokir sementara submit
  isSending = true;
  setTimeout(() => (isSending = false), 10000); // 10 detik

  // Kirim form ke EmailJS
  emailjs.sendForm("service_2f8y2em", "template_bzdmlff", this).then(
    () => {
      alert("Pesan berhasil dikirim!");
      document.getElementById("contactForm").reset();
    },
    (error) => {
      alert("Gagal mengirim pesan: " + JSON.stringify(error));
    }
  );
});

// (function () {
//   emailjs.init("TW7IEGbpt6xS9ijJa"); // Ganti dengan PUBLIC KEY dari EmailJS dashboard
// })();

// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   emailjs.sendForm("service_2f8y2em", "template_bzdmlff", this).then(
//     function () {
//       alert("Pesan berhasil dikirim!");
//       document.getElementById("contactForm").reset(); // Optional: reset form setelah kirim
//     },
//     function (error) {
//       alert("Gagal mengirim: " + JSON.stringify(error));
//     }
//   );
// });
