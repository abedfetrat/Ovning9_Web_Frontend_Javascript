let bish = 3;
let bosh = 4;
let max = 100;

const form = document.getElementById("bishbosh-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  bish = document.getElementById("bish-input").value;
  bosh = document.getElementById("bosh-input").value;
  max = document.getElementById("max-input").value;

  BishBosh();
});

BishBosh();

function BishBosh() {
  let output = "";

  for (let i = 1; i <= max; i++) {
    if (i % bish == 0 && i % bosh == 0) {
      output += '<span class="bish-bosh">bish-bosh</span>, ';
    } else if (i % bish == 0) {
      output += '<span class="bish">bish</span>, ';
    } else if (i % bosh == 0) {
      output += '<span class="bosh">bosh</span>, ';
    } else {
      output += `${i}, `;
    }
  }

  document.getElementById("output").innerHTML = output;
}
