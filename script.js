//your JS code here. If required.
let loading = document.getElementById("output");

loading.innerHTML = `
<tr>
  <td colspan="2">Loading...</td>
</tr>
`;

function promiseone() {
  let start = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      let timetaken = (Date.now() - start) / 1000;
      resolve({ name: "Promise 1", timetaken });
    }, Math.floor(Math.random() * 2000) + 1000); // 1–3 sec
  });
}

function promisetwo() {
  let start = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      let timetaken = (Date.now() - start) / 1000;
      resolve({ name: "Promise 2", timetaken });
    }, Math.floor(Math.random() * 2000) + 1000);
  });
}

function promisethree() {
  let start = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      let timetaken = (Date.now() - start) / 1000;
      resolve({ name: "Promise 3", timetaken });
    }, Math.floor(Math.random() * 2000) + 1000);
  });
}

let totalStart = Date.now();

Promise.all([promiseone(), promisetwo(), promisethree()])
  .then((results) => {
    loading.innerHTML = "";

    results.forEach((res) => {
      loading.innerHTML += `
        <tr>
          <td>${res.name}</td>
          <td>${res.timetaken.toFixed()}</td>
        </tr>`;
    });

    // Calculate total time
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
