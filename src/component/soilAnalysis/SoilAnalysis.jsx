import React, { useState } from "react";

const SoilAnalysis = () => {
  const [ph, setPh] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [organicMatter, setOrganicMatter] = useState("");
  const [results, setResults] = useState(null); // Store results object

  const analyzeSoil = () => {
    const phValue = parseFloat(ph);
    const nitrogenValue = parseFloat(nitrogen);
    const phosphorusValue = parseFloat(phosphorus);
    const potassiumValue = parseFloat(potassium);
    const organicMatterValue = parseFloat(organicMatter);

    let recommendations = [];
    let cropSuggestions = [];
    let fertilizers = [];
    let pesticides = [];
    let plantImages = [];

    // Analyze pH
    if (phValue < 6) {
      recommendations.push(
        "SOIL IS TOO ACIDIC: Consider adding lime to increase pH."
      );
    } else if (phValue > 7.5) {
      recommendations.push(
        "SOIL IS TOO ALKALINE: Use sulfur-based amendments to lower pH."
      );
    } else {
      recommendations.push("pH level is optimal for most crops.");
    }

    // Analyze Nitrogen
    if (nitrogenValue < 20) {
      recommendations.push(
        "LOW NITROGEN LEVEL: Apply nitrogen-rich fertilizers."
      );
      fertilizers.push("Nitrogen-based fertilizer (NPK 10-10-10 or higher).");
    } else {
      recommendations.push("Nitrogen level is sufficient.");
    }

    // Analyze Phosphorus
    if (phosphorusValue < 15) {
      recommendations.push(
        "LOW PHOSPHORUS LEVEL: Add phosphorus-rich fertilizers like bone meal."
      );
      fertilizers.push("Phosphorus-rich fertilizer (e.g., Superphosphate).");
    } else {
      recommendations.push("Phosphorus level is sufficient.");
    }

    // Analyze Potassium
    if (potassiumValue < 50) {
      recommendations.push(
        "LOW POTASSIUM LEVEL: Use potassium fertilizers such as potash."
      );
      fertilizers.push("Potassium-rich fertilizer (e.g., Potash).");
    } else {
      recommendations.push("Potassium level is sufficient.");
    }

    // Analyze Organic Matter
    if (organicMatterValue < 3) {
      recommendations.push(
        "LOW ORGANIC MATTER: Add compost or manure to improve soil health."
      );
      fertilizers.push("Compost or well-rotted manure.");
    } else {
      recommendations.push("Organic matter is adequate.");
    }

    // Suggest Crops
    if (
      phValue >= 6 &&
      phValue <= 7 &&
      nitrogenValue >= 20 &&
      phosphorusValue >= 15 &&
      potassiumValue >= 50 &&
      organicMatterValue >= 3
    ) {
      cropSuggestions.push(
        "Tomatoes, lettuce, carrots, and cucumbers thrive in this soil."
      );
      plantImages = [
        "./src/assets/images/download.jpg",
        "./src/assets/images/download (1).jpg",
        "./src/assets/images/images.jpg",
      ];
    } else if (phValue < 6) {
      cropSuggestions.push(
        "Blueberries, cranberries, and potatoes prefer acidic soil."
      );
      plantImages = [
        "./src/assets/images/download (3).jpg",
        "./src/assets/images/download (4).jpg",
      ];
    } else if (nitrogenValue < 20) {
      cropSuggestions.push(
        "Beans, peas, and lentils are nitrogen-fixing crops."
      );
      plantImages = [
        "./src/assets/images/download (5).jpg",
        "./src/assets/images/download (6).jpg",
        "./src/assets/images/download (7).jpg",
      ];
    } else {
      cropSuggestions.push(
        "Barley, wheat, or root vegetables may be suitable."
      );
      plantImages = [
        "./src/assets/images/download (8).jpg",
        "/./src/assets/images/download (9).jpg",
      ];
    }

    // Suggest Pesticides
    if (phosphorusValue < 15 || nitrogenValue < 20) {
      pesticides.push("Neem oil for natural pest control.");
    } else {
      pesticides.push("Chemical insecticide (consult a local expert).");
    }

    // Set Results
    setResults({
      recommendations,
      fertilizers,
      pesticides,
      cropSuggestions,
      plantImages,
    });
  };

  return (
    <section className="soil-analysis-section px py">
      <h3 className="titleh4">Soil Analysis Tool</h3>
      <div className="SoilAnalysisContainer">
        <form className="formAnalysis">
          <div className="form-group">
            <label htmlFor="ph">Soil pH Level:</label>
            <input
              type="number"
              id="ph"
              step="0.1"
              placeholder="Enter pH (e.g., 6.5)"
              value={ph}
              onChange={(e) => setPh(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nitrogen">Nitrogen (N) Level (ppm):</label>
            <input
              type="number"
              id="nitrogen"
              placeholder="Enter Nitrogen level"
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phosphorus">Phosphorus (P) Level (ppm):</label>
            <input
              type="number"
              id="phosphorus"
              placeholder="Enter Phosphorus level"
              value={phosphorus}
              onChange={(e) => setPhosphorus(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="potassium">Potassium (K) Level (ppm):</label>
            <input
              type="number"
              id="potassium"
              placeholder="Enter Potassium level"
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="organicMatter">Organic Matter (%):</label>
            <input
              type="number"
              id="organicMatter"
              step="0.1"
              placeholder="Enter Organic Matter percentage"
              value={organicMatter}
              onChange={(e) => setOrganicMatter(e.target.value)}
              required
            />
          </div>
          <button className="btn" type="button" onClick={analyzeSoil}>
            Analyze Soil
          </button>
        </form>

        {results && (
          <div className="results">
            <div>
              <h4>Soil Analysis Results</h4>
              <ul>
                {results.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Recommended Fertilizers</h4>
              <ul>
                {results.fertilizers.map((fertilizer, index) => (
                  <li key={index}>{fertilizer}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Recommended Pesticides</h4>
              <ul>
                {results.pesticides.map((pesticide, index) => (
                  <li key={index}>{pesticide}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Predicted Crops to Grow</h4>
              <ul>
                {results.cropSuggestions.map((crop, index) => (
                  <li key={index}>{crop}</li>
                ))}
              </ul>
            </div>
            <div>
              {results.plantImages.length > 0 ? (
                results.plantImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Plant ${index + 1}`}
                    style={{ maxWidth: "100%", margin: "10px 0" }}
                  />
                ))
              ) : (
                <p>No images available for the recommended crops.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SoilAnalysis;
