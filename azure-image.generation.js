import axios from "axios";


// Image generation using Azure OpenAI API

async function generateImage(prompt) {
    // apiBase/Key/Versions are empty because this is a skeleton website with no actual API calls
    const apiBase = "";
    const apiKey = "";
    const apiVersion = "";
    
    const url = `${apiBase}/openai/images/generations:submit=api-version=${apiVersion}`;
    const headers = { "api-key": apiKey, "Content-type": "application/json" };
    const body = {prompt, size: "1024x1024", n: 1};

    try {
        const submission = await axios.post(url, body, {headers});
        const operationLocation = submission.headers["operation-location"];
        let status = "";
        let response;
        while (status !== "succeeded") {
            response = await axios.get(operationLocation, {headers});
            status = response.data.status;
        }
        return response.data.result.data;
    } catch (error) {
        console.error("Error generating image: ", error);
        throw error;
    }

}


export default generateImage;