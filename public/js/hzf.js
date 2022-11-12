const zipInput = document.getElementById("floatingInput");
const submitButton = document.getElementById("submitButton");
const resultContainer = document.getElementById("resultContainer");
const scheduleContainer = document.getElementById("scheduleContainer");
const scheduleButton = document.getElementById("scheduleButton");
const table = document.getElementById("table");
const tableContainer = document.getElementById("tableContainer");
const zoneSpans = [
  document.getElementById("zoneSpan1"),
  document.getElementById("zoneSpan2"),
];
let zoneInfo = {};

zipInput.addEventListener("input", (e) => {
  resultContainer.classList.remove("visible");
  resultContainer.classList.add("invisible");
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateZip(zipInput.value);
});

function validateZip(zip) {
  const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);

  if (!isValidZip) {
    zipInput.classList.add("is-invalid");
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
      zoneInfo = response;
    })
    .catch((err) => console.error(err));

const updateZoneSpans = (zoneInfo) => {
  zoneSpans.map((span) =>
    zoneInfo?.hardiness_zone
      ? (span.textContent = zoneInfo.hardiness_zone)
      : (span.textContent = "unknown")
  );
  resultContainer.classList.remove("invisible");
  resultContainer.classList.add("visible");
};


  const data = [
    {
      "produce": "Tomato",
      "startSeedIndoors": "March 15th",
      "transplantOutdoors": "May 20th",
      "companionPlants": "Basil Dill Pepper"
    },
    {
      "produce": "Corn",
      "startSeedIndoors": "March 15th",
      "transplantOutdoors": "May 20th",
      "companionPlants": "Basil Dill Pepper"
    },
    {
      "produce": "Pepper",
      "startSeedIndoors": "March 15th",
      "transplantOutdoors": "May 20th",
      "companionPlants": "Basil Dill Pepper"
    }
  ];

  $(function(){
    $('table').bootstrapTable({
      data: data
    });
  });
