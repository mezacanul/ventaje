import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
});

export default async function handler(req, res) {
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
