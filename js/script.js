const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

// Button submit
const onGenerateSubmit = (e) => {
  e.preventDefault();
  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  // Validate url
  if (url === "") {
    alert("Please enter a URL");
  } else {
    showSpinner();
    // Show spinner for 1 sec
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);
    }, 1000);
  }
};

// Generate QR code
const generateQRCode = (url, size) => {
  const qrcode = new QRCode(qr, {
    text: url,
    width: size,
    height: size,
  });
};

// Show spinner
const showSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";
};

// Hide spinner
const hideSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "none";
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
