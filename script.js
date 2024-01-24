const adviceId = document.getElementById("advice-id");
const adviceParagraph = document.getElementById("advice-paragraph");
const getAdvice = document.getElementById("get-advice");

getAdvice.addEventListener("click", async () => {
	try {
		const response = await fetch("https://api.adviceslip.com/advice")
		const data = await response.json()
	
		adviceId.innerText = `# ${data.slip.id}`
		adviceParagraph.innerText = `"${data.slip.advice}"`
		
	} catch(error) {
			console.log("error =>", error)
	}
})