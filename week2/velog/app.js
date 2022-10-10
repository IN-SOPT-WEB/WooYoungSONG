const weekSelectButton = document.querySelector('.week-select-button');
const dropContent = document.querySelector(".drop-content");

const selectWeek = (e) => {
    e.preventDefault();
    dropContent.classList.toggle("toggle-week-options");
}

weekSelectButton.addEventListener("click", selectWeek);