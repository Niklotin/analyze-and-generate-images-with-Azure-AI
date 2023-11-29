import axios from "axios";

// Image analysis using Azure Computer Vision API

async function analyzeImage(imageUrl) {
    // Constants are empty because this is a skeleton website with no actual API calls
    const endpoint = "";
    const apiKey = "";
    const url = `${endpoint}`;
    try {
        const response = await axios.post(
            url,
            {url: imageUrl},
            {
                headers: {
                    "Ocp-Apim-Subscription-Key": apiKey,
                    "Content-type": "application/json",
                },
                params: {
                    features: "caption,read",
                    "model-version": "latest",
                    languange: "en",
            }
        } );
        return response.data;
        

  } catch (error) {
    console.error("Error analyzing image: ", error);
    throw error;


  };
}

export default analyzeImage;