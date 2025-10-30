//your JS code here. If required.
let loading = document.getElementById("output");

// Add the required ID to the loading <tr>
loading.innerHTML = `
<tr id="loading">
  <td colspan="2">Loading...</td>
</tr>
`;

function promiseone() {
  let start = Date.now();
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // random 1–3 sec
    setTimeout(() => {
      let timetaken = (Date.now() - start) / 1000;
      resolve({ name: "Promise 1", timetaken });
    }, delay);
  });
}

function promisetwo() {
  let start = Date.now();
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
      let timetaken = (Date.now() - start) / 1000;
      resolve({ name: "Promise 2", timetaken });
    }, delay);
  });
}

function promisethree() {
  let start = Date.now();
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
      let timetaken = (Date.now() - start) / 1000;
      resolve({ name: "Promise 3", timetaken });
    }, delay);
  });
}

let totalStart = Date.now();

Promise.all([promiseone(), promisetwo(), promisethree()])
  .then((results) => {
    loading.innerHTML = ""; // remove "Loading..." row

    results.forEach((res) => {
      loading.innerHTML += `
        <tr>
          <td>${res.name}</td>
          <td>${Math.round(res.timetaken)}</td>
        </tr>`;
    });

    // Calculate total time (max duration)
    let totalTime = (Date.now() - totalStart) / 1000;

    loading.innerHTML += `
      <tr>
        <td>Total</td>
        <td>${totalTime.toFixed(3)}</td>
      </tr>`;
  })
  .catch((error) => {
    loading.innerHTML = `
      <tr>
        <td colspan="2">ERROR: ${error}</td>
      </tr>`;
  });
