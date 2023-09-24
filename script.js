function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/Avatar-light.png")
  } else {
    img.setAttribute("src", "assets/avatar.png")
  }

  const p = document.querySelector("#profile p")

  if (html.classList.contains("light")) {
    p.innerHTML = "@Morty"
  } else {
    p.innerHTML = "@Rick"
  }
}
