let elements = document.getElementsByClassName("website_domain");
if (elements[0] !== null) {
  let url = elements[0].innerHTML;
  window.location.replace(url);
}
