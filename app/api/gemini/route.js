const {GoogleGenerativeAI} = require("@google/generative-ai");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function GET() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({model: "gemini-pro"});

    const prompt = "create an json object : As a 10 year experience programmer create 5 logical testing questions as array for a beginner in python coding with questions, options, answer, explanation in a key value pair. i need the text result to be converted to a object having each of this items as key value pair. So avoid all such unwanted letters in it and each key value pair should be separated by a comma. and each question should be separated by a new line. ";

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;

        const text = response.text();

        const questions = await parseQuestions(text);

        const q1 = questions["Question 1"];
        const q2 = questions["Question 2"];
        const q3 = questions["Question 3"];
        const q4 = questions["Question 4"];
        const q5 = questions["Question 5"];

        // add id for each object and save it in an array
        const obj = [
            {id: "1", ...q1},
            {id: "2", ...q2},
            {id: "3", ...q3},
            {id: "4", ...q4},
            {id: "5", ...q5},
        ];

        return Response.json({obj});
    } catch (error) {
        console.log(error);
        return Response.error({error: error});
    }
}

async function parseQuestions(responseText) {
    // Remove leading and trailing whitespace, including backticks if any
    const trimmedResponseText = responseText.trim().replace(/^```/, "").replace(/```$/, "");

    // Parse the trimmed response text as JSON
    const data = JSON.parse(trimmedResponseText);

    return data;
}
