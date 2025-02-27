const greeting = (name: string, locale: string) => {
  const dateObject = new Date();
  // Ambil jam dalam zona waktu Indonesia (WIB)
  const hours = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    hour12: false,
    timeZone: "Asia/Jakarta",
  }).format(dateObject);

  // Objek untuk pesan dalam berbagai bahasa
  const greetings = {
    en: {
      morning: "Good Morning",
      afternoon: "Good Afternoon",
      evening: "Good Evening",
      night: "Good Evening", // Diubah dari "Good Night" ke "Good Evening"
    },
    id: {
      morning: "Selamat Pagi",
      afternoon: "Selamat Siang",
      evening: "Selamat Sore",
      night: "Selamat Malam",
    },
  };

  // Pilih bahasa berdasarkan locale, default ke bahasa Inggris jika tidak tersedia
  const selectedLanguage = greetings[locale as keyof typeof greetings] || greetings.en;

  let timeOfDay = "morning"; // Default waktu: pagi

  // Tentukan saat hari berdasarkan jam
  if (+hours >= 12 && +hours < 15) {
    timeOfDay = "afternoon"; // Siang (12:00 - 14:59)
  } else if (+hours >= 15 && +hours < 18) {
    timeOfDay = "evening"; // Sore (15:00 - 17:59)
  } else if (+hours >= 18 || +hours < 4) {
    timeOfDay = "night"; // Malam (18:00 - 03:59)
  }

  // Ambil ucapan yang sesuai dari objek bahasa yang dipilih
  const message = selectedLanguage[timeOfDay as keyof typeof selectedLanguage];

  return `${message}, ${name}`;
};

export default greeting;
