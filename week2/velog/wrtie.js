const tagInput = document.querySelector(".tags-input");
const tagList = document.querySelector('.tags-list');

const tags = localStorage.getItem('tags') === null? [] : JSON.parse(localStorage.getItem('tags'));

const saveLocalTags = (tag) => {
    tags.push(tag);
    localStorage.setItem('tags', JSON.stringify(tags));
}

const removeLocalTags = (tag) => {
    let tags = JSON.parse(localStorage.getItem('tags'));
    const tagText = tag.innerText;
    tags.splice(tags.indexOf(tagText),1)
    localStorage.setItem('tags', JSON.stringify(tags));
}

const deleteTag = (e) => {
    e.target.remove();
    removeLocalTags(e.target);
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
        saveLocalTags(tagInput.value);
        tagInput.value='';
    }
}

tagInput.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) // enter 키 치면
        addTag()
})