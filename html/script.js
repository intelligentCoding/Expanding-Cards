const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    remveActiveClasses()
    panel.classList.add('active')
  })
})

function remveActiveClasses() {
  panels.forEach( panel => {
    panel.classList.remove('active');
  })
}