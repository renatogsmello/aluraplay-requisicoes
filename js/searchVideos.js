import { api } from "../api/index.js"
import cardVideo from "./loadVideos.js"

async function searchVideos(evento) {
	evento.preventDefault()
	const searchInput = document.getElementById("pesquisar").value
	const search = await api.searchVideos(searchInput)

	const list = document.querySelector("[data-list]")
	list.innerHTML = ""
	if (search.length == 0) {
		list.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com este termo</h2>`
	}
	search.map((video) => list.appendChild(cardVideo(video.titulo, video.description, video.url, video.image)))
}

const searchButton = document.querySelector("[data-search]")

searchButton.addEventListener("click", (e) => searchVideos(e))
