function showMoreInfo(id) {
  var moreInfoElement = document.getElementById("moreInfo-" + id);

  if (moreInfoElement.style.display === "none" || moreInfoElement.style.display === "") {
      moreInfoElement.style.display = "block";
  } else {
      moreInfoElement.style.display = "none";
  }
}
