const zipInput = document.getElementById("zipInput");
const submitButton = document.getElementById("submitButton");
const zoneSpans = [
  document.getElementById("zoneSpan1"),
  document.getElementById("zoneSpan2"),
];
let zoneInfo = {};

submitButton.addEventListener("click", () => {
  validateZip(zipInput.value);
  console.log(`Value: ${zipInput.value}`);
});

function validateZip(zip) {
  const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);

  if (!isValidZip) {
    zipInput.classList.add("is-invalid"), console.log("Invalid");
  } else {
    zipInput.classList.remove("is-invalid");
    getZone(zip)
      .then(() => {
        updateZoneSpans(zoneInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const getZone = (zipcode) =>
  fetch(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zipcode}`, {
    headers: {
      "X-RapidAPI-Key": "f64bf2a778mshe47382446e419d5p16f94djsn4783dac120a2",
      "X-RapidAPI-Host": "plant-hardiness-zone.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      zoneInfo = response;
    })
    .catch((err) => console.error(err));

const updateZoneSpans = (zoneInfo) =>
  zoneSpans.map((span) => (span.textContent = zoneInfo.hardiness_zone));
