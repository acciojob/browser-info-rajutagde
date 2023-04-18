function volume_sphere() {
  const radius = document.getElementById("radius").value;
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(2);
  return false; // prevent form submission
}

window.onload = function() {
  const form = document.getElementById("MyForm");
  form.addEventListener("submit", volume_sphere);
}
