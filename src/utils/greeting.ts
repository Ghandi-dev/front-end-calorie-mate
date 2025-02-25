const greeting = (name: string) => {
  const dateObject = new Date();

  // Ambil jam dalam zona waktu Indonesia (WIB)
  const hours = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    hour12: false,
    timeZone: "Asia/Jakarta",
  }).format(dateObject);

  // Format tanggal lengkap (opsional)

  let message = "Good Morning"; // Default: Pagi

  if (+hours >= 12 && +hours < 17) {
    message = "Good Afternoon"; // Siang
  } else if (+hours >= 17 && +hours < 20) {
    message = "Good Evening"; // Sore
  } else if (+hours >= 20 && +hours < 3) {
    message = "Good Night"; // Malam
  }

  return `${message}, ${name}`;
};

export default greeting;
