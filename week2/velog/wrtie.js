const tagInput = document.querySelector(".tags-input");
const tagList = document.querySelector('.tags-list');

const deleteTag = (e) => {
    e.target.remove();
}


const addTag = () => {
    if(tagInput.value == ""){
        alert('이미 존재하는 태그이거나 빈 태그입니다.');
    }else{
        const tagItem = document.createElement('li');
        tagItem.innerText = `${tagInput.value}`
        tagItem.classList.add('tag-item');
        tagItem.addEventListener('click', deleteTag);
        tagList.appendChild(tagItem);
        tagInput.value='';
    }
}

tagInput.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) // enter 키 치면
        addTag()
})