'use script'

document.addEventListener('DOMContentLoaded', () => {
    const commenterNameInput = document.getElementById('name');
    const commentTextInput = document.getElementById('comment');
    const form = document.getElementById('feedbackForm');
    const commentsSection = document.getElementById('commentsSection');

    function displayComment(name, text, date) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        const header = document.createElement('div');
        const author = document.createElement('span');
        const commentDate = document.createElement('span');

        author.textContent = name || 'Anonymous';
        commentDate.textContent = date;

        header.appendChild(author);
        header.appendChild(commentDate);

        const content = document.createElement('p');
        content.textContent = text;

        commentDiv.appendChild(header);
        commentDiv.appendChild(content);

        commentsSection.appendChild(commentDiv);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = commenterNameInput.value.trim();
        const text = commentTextInput.value.trim();

        if (text === '') {
            alert('Please enter a comment.');
            return;
        }

        const date = new Date().toLocaleString();

        displayComment(name, text, date);

        commenterNameInput.value = '';
        commentTextInput.value = '';
    });
});