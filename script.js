window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});
document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});

//CARDS
// Function to update mouse coordinates
function updateMouseCoordinates(e, card) {
  const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
}

// Function to update touch coordinates
function updateTouchCoordinates(e, card) {
  const touch = e.touches[0],
        rect = card.getBoundingClientRect(),
        x = touch.clientX - rect.left,
        y = touch.clientY - rect.top;

  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
}

// Handle mouse move and touch move events
document.getElementById("cards").addEventListener("mousemove", e => {
  for (const card of document.getElementsByClassName("card")) {
    updateMouseCoordinates(e, card);
  }
});

document.getElementById("cards").addEventListener("touchmove", e => {
  for (const card of document.getElementsByClassName("card")) {
    updateTouchCoordinates(e, card);
  }
});
/*
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("clicked");
    });
  });
*/
  
//SERVICES

