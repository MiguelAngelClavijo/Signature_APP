
document.getElementById("GET-name").addEventListener("input", function () {
  document.getElementById("previewName").innerHTML =
    this.value || this.placeholder;
});

document.getElementById("GET-position").addEventListener("input", function () {
  document.getElementById("previewPosition").innerHTML =
    this.value || this.placeholder;
});

document.getElementById("GET-tel").addEventListener("input", function () {
    document.getElementById("previewTel").innerHTML =
      this.value || this.placeholder;
  });


