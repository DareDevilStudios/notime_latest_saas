const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function GET() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "As a 10 year experience programmer create a different logical testing question everytime for a beginner in coding as json with keys question, options, answer, explanation.";

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return Response.json({ data: text });

    }

    catch (error) {
        console.log(error)
        return Response.error({ error: error });
    }

}
