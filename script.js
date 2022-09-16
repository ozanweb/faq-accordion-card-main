const labels = document.querySelectorAll(".list label")



function hideUnhide(e) {
  const status = e.target.parentElement.querySelector('input').checked

  switch (status) {
    case false:
      e.target.style.fontWeight = '700'
      e.target.parentElement.querySelector('p').setAttribute('class', 'unhide');
      e.target.parentElement.querySelector('.icon').style.transform = 'translateY(-50%) rotate(180deg)'
      break;
    case true:
      e.target.style.fontWeight = 'normal'
      e.target.parentElement.querySelector('p').setAttribute('class', 'hide');
      e.target.parentElement.querySelector('.icon').style.transform = 'translateY(-50%) rotate(0deg)'
      break;
  }
}

for (let label of labels) {
  label.addEventListener('click', hideUnhide)
}
