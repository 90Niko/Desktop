function attachEvents() {

    const postUrl = "http://localhost:3030/jsonstore/blog/posts";
    const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";

    let allPosts = [];

    const selectElement = document.getElementById('posts');
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const postBodyElement = document.getElementById('post-body');
    const postCommentElement = document.getElementById('post-comments');
    const titleElement = document.getElementById('post-title');

    btnLoadPosts.addEventListener("click", () => {

        fetch(postUrl)
            .then(response => response.json())
            .then(result => {
                selectElement.innerHTML = "";
                allPosts = [];

                console.log(Object.values(result));

                const posts = Object.values(result);

                for (const element of posts) {

                    const optionEl = document.createElement('option');
                    const id = element.id;
                    const body = element.body;
                    const title = element.title;

                    optionEl.setAttribute("value", id);
                    optionEl.textContent = title;
                    selectElement.appendChild(optionEl);

                    allPosts.push({ id, body, title });
                }


                btnViewPost.addEventListener('click', () => {

                    const commentsId = selectElement.value;
                    const selectedPost = allPosts.find((x) => x.id === commentsId);
                    postBodyElement.textContent = selectedPost.body;
                    titleElement.textContent = selectedPost.title;

                    fetch(commentsUrl)
                        .then(response => response.json())
                        .then(comments => {
                            postCommentElement.textContent = "";

                            const allComments = Object.values(comments);
                            console.log(allComments);

                            Object.values(comments)
                                .filter((x) => x.postId === commentsId)
                                .forEach(({ id, text }) => {

                                    const li = document.createElement('li');
                                    li.textContent = text;
                                    li.setAttribute("id", id);
                                    postCommentElement.appendChild(li);

                                    console.log(`Text id${text}`)
                                })

                        })
                })

            });
    });
}


attachEvents();