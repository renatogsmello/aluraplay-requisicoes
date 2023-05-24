async function loadVideos() {
	const connect = await fetch("http://localhost:3000/videos")
	const response = await connect.json()

	return response
}

async function createVideo(title, description, url, image) {
	const connect = await fetch("http://localhost:3000/videos", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			titulo: title,
			descricao: `${description} mil visualizações`,
			url: url,
			imagem: image,
		}),
	})

	if (!connect.ok) {
		throw new Error("Não foi possível enviar o video")
	}

	const response = connect.json()
	return response
}

async function searchVideos(termo) {
	const connect = await fetch(`http://localhost:3000/videos?q=${termo}`)
	const response = connect.json()

	return response
}

export const api = {
	loadVideos,
	createVideo,
	searchVideos,
}
