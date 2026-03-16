:::writing{variant=“standard” id=“ai004”}
export async function handler(event) {

const body = JSON.parse(event.body)

const response = await fetch(“https://api.openai.com/v1/responses”, {
method: “POST”,
headers: {
“Content-Type”: “application/json”,
“Authorization”: Bearer ${process.env.OPENAI_API_KEY}
},
body: JSON.stringify({
model: “gpt-4.1-mini”,
input: [
{
role: “user”,
content: [
{ type: “input_text”, text: “Describe this photo.” },
{ type: “input_image”, image_url: body.image }
]
}
]
})
})

const data = await response.json()

return {
statusCode: 200,
body: JSON.stringify(data)
}

}
:::
