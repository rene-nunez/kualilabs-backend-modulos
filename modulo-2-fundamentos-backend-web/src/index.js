const feed = document.getElementById("feed");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(posts => {
        setTimeout(() => {
            feed.innerHTML = "";

            for (let i = 0; i < posts.length; i++) {
                const div = document.createElement('div');
                div.innerHTML = `<b>${posts[i].title}</b><br>${posts[i].body}<hr>`;
                feed.appendChild(div);
            }
        }, 500);
    })
    .catch(error => {
        feed.innerHTML = "Error al cargar posts.";
        console.error(error);
    });