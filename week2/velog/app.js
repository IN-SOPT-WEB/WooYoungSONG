const weekSelectButton = document.querySelector('.week-select-button');
const dropContent = document.querySelector(".drop-content");
const weekOption = document.querySelectorAll('.week-option');
const selectedWeek = document.querySelector('.select-week');

const selectedWeekOption = (e) => {
    e.preventDefault();
    e.target.classList.add("checked")
    selectedWeek.innerHTML = e.target.innerHTML;
    dropContent.classList.remove("toggle-week-options");
    for( let i=0; i<weekOption.length; i++){
        if(weekOption[i].innerHTML != e.target.innerHTML)
            weekOption[i].classList.remove("checked");
    }
}

for( let i=0; i<weekOption.length; i++){
	weekOption[i].addEventListener("click", selectedWeekOption);
}

const selectWeek = (e) => {
    e.preventDefault();
    dropContent.classList.toggle("toggle-week-options");
}

weekSelectButton.addEventListener("click", selectWeek);