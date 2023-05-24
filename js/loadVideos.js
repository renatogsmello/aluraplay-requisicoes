import { api } from "../api/index.js"

const list = document.querySelector("[data-list]")

export default function cardVideo(title, description, url, image) {
	const video = document.createElement("li")
	video.className = "videos__item"
	video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${title}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${image}" alt="logo canal alura">
    <h3>${title}</h3>
    <p>${description}</p>
</div>`

	return video
}

async function loadVideos() {
	try {
		const videos = await api.loadVideos()
		videos.map((video) => list.appendChild(cardVideo(video.titulo, video.descricao, video.url, video.imagem)))
	} catch {
		list.innerHTML = `<h2 class='mensagem__titulo'>Não foi possivel carregar a lista de videos</h2>`
	}
}

loadVideos()
