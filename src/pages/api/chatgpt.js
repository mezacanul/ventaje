import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o", // Updated to match the model used in the original code
            messages: req.body.messages, // Dynamically pass the messages from request body
            max_tokens: 100,
            temperature: 0.7,
        });

        res.status(200).json(completion);
    } catch (error) {
        console.error("Error fetching response:", error);
        res.status(500).json({ error: "Failed to fetch response" });
    }
}
