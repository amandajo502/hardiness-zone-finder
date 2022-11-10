const zipInput = document.getElementById("floatingInput");
const submitButton = document.getElementById("submitButton");
const resultContainer = document.getElementById("resultContainer");
const scheduleContainer = document.getElementById("scheduleContainer");
const scheduleButton = document.getElementById("scheduleButton");
const zoneSpans = [
  document.getElementById("zoneSpan1"),
  document.getElementById("zoneSpan2"),
];
let zoneInfo = {};

zipInput.addEventListener("input", (e) => {
  resultContainer.classList.remove("visible");
  resultContainer.classList.add("invisible");
  scheduleContainer.classList.remove("invisible");
  scheduleContainer.classList.add("visible");
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
  scheduleContainer.classList.remove("invisible");
  scheduleContainer.classList.add("visible");
};

const tableFromJson = () => {
  // the json data.
  const myProduce = [
    {'Produce ID': '1', 'Produce Name': 'Tomato',
     'Start Seed Indoor': 'March 15', 'Transplant Outdoors': 'May 20th',
     'Harvest': 'Until Freezing', 'Companion Plants': 'Basil, Dill, Pepper'
    },
    {'Produce ID': '2', 'Produce Name': 'Pepper',
    'Start Seed Indoor': 'March 15', 'Transplant Outdoors': 'May 20th',
     'Harvest': 'Until Freezing', 'Companion Plants': 'Basil, Dill, Pepper'
    },
    {'Produce ID': '3', 'Produce Name': 'Corn',
    'Start Seed Indoor': 'March 15', 'Transplant Outdoors': 'May 20th',
     'Harvest': 'Until Freezing', 'Companion Plants': 'Basil, Dill, Pepper'
    }
  ]}

  // Extract value from table header. 
  // ('Produce ID', 'Produce Name', 'Start Seed Indoor' and 'Transplant Outdoors')
  let col = [];
  for (let i = 0; i < myProduce.length; i++) {
    for (let key in myProduce[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  // Create table.
  const table = document.createElement("table");

  // Create table header row using the extracted headers above.
  let tr = table.insertRow(-1);                   // table row.

  for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th");      // table header.
    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  // add json data to the table as rows.
  for (let i = 0; i < myProduce.length; i++) {

    tr = table.insertRow(-1);

    for (let j = 0; j < col.length; j++) {
      let tabCell = tr.insertCell(-1);
      tabCell.innerHTML = myProduce[i][col[j]];
    }
  }

  // Now, add the newly created table with json data, to a container.
  const divShowData = document.getElementById("showData");
  divShowData.innerHTML = "";
  divShowData.appendChild(table);
