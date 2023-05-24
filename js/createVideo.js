import { api } from "../api/index.js"

const form = document.querySelector("form")

async function createVideo(evento) {
	evento.preventDefault()
	const title = document.getElementById("titulo").value
	const url = document.getElementById("url").value
	const image = document.querySelector("[data-image]").value
	const description = Math.floor(Math.random() * 10).toString()
	try {
		await api.createVideo(title, description, url, image)

		window.location.href = "../pages/envio-concluido.html"
	} catch (e) {
		alert(e)
	}
}

form.addEventListener("submit", (e) => createVideo(e))
