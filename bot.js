export default async function handler(req, res) {
  const body = await req.json();

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo", // ou outro modelo que você quiser
      messages: body.messages
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}