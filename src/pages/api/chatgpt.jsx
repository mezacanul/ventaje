import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o", // Updated to match the model used in the original code
            messages: [
                { role: "system", content: "This is a tesing environment. Feel free to ignore my random messages." },
                ...(req.body.messages),
            ],
            max_tokens: 200,
            temperature: 0.7,
        });

        res.status(200).json(completion);
    } catch (error) {
        console.error("Error fetching response:", error);
        res.status(500).json({ error: "Failed to fetch response" });
    }
}