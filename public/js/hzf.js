const zipInput = document.getElementById("floatingInput");
const submitButton = document.getElementById("submitButton");
const resultContainer = document.getElementById("resultContainer");

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

const getOutdoorPlantTime = (prods) => {
  const result = prods.zoneTransplantOutdoors.filter(
    (item) => item.zone === zoneInfo?.hardiness_zone?.charAt(0)
  );
  return result[0]?.date;
};

const validateZip = (zip) => {
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
};

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
      fetch("produce-data.json")
        .then(function (response) {
          return response.json();
        })
        .then(function (products) {
          let placeholder = document.querySelector("#data-output");
          let out = "";
          for (let product of products) {
            out += `
      <tr>
        <td>${product.name}</td>
        <td>${product.startSeedsIndoorsWeeks}</td>
        <td>${getOutdoorPlantTime(product)}</td>
        <td>${product.daysToHarvest}</td>
        <td>${product.companionPlants}</td>
      </tr>
    `;
          }
          placeholder.innerHTML = out;
        });
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
