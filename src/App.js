import React, { useState } from 'react';
import analyzeImage from './azure-imageanalysis';
import generateImage from './azure-image.generation';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleImageAnalysis = async () => {
    try {
      const result = await analyzeImage(imageUrl);
      setResult(result);
    } catch (error) {
      console.error("Error analyzing image: ", error);
    };
  }

  const displayResults = () => {
    if (!result) return null;
    return <div>

      <h2>Image analysis results</h2>
      <img
        width="500"
        src={result?.url ? result.url : imageUrl}
        alt="uploaded"
      ></img>
      <pre>{JSON.stringify(result, null, 2) } </pre>

    </div>;

  };

  const handleImageGeneration = async () => { 
  let prompt = imageUrl;
  try {
    const generationResult = await generateImage(prompt);
    setResult(generationResult[0]);
  } catch (error) {
    console.error("Error generating image: ", error);
  }
};

  return (
    <div>
      <h1>Analyze and generate images</h1>
        <input type = "text" placeholder="Enter URL or textual prompt"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        ></input>

        <button onClick={handleImageAnalysis}>Analyze image</button>
        <button onclick={handleImageGeneration}>Generate image</button>
        {displayResults()}
    </div>
  );

}

export default App;
