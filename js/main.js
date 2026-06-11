document.addEventListener("DOMContentLoaded", async function () {
    const nameElement = document.querySelector("#name");
    const usernameElement = document.querySelector("#username");
    const avatarElement = document.querySelector("#avatar");
    const reposElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const followingElement = document.querySelector("#following");
    const linkElement = document.querySelector("#link");

    try {
        const response = await fetch("https://api.github.com/users/henryoriondev");

        if (!response.ok) {
            throw new Error("Não foi possível carregar os dados do GitHub.");
        }

        const data = await response.json();

        nameElement.innerText = data.name || "Nome não informado";
        usernameElement.innerText = `@${data.login}`;
        avatarElement.src = data.avatar_url;
        reposElement.innerText = data.public_repos;
        followersElement.innerText = data.followers;
        followingElement.innerText = data.following;
        linkElement.href = data.html_url;
    } catch (error) {
        console.error(error);

        nameElement.innerText = "Erro ao carregar dados";
        usernameElement.innerText = "@erro";
        reposElement.innerText = "0";
        followersElement.innerText = "0";
        followingElement.innerText = "0";

        alert("Não foi possível carregar os dados do GitHub.");
    }
});