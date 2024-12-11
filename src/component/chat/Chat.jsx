import React, { useEffect } from 'react';

const ChatbotSection = () => {
  useEffect(() => {
    const problems = {
      "poor drainage": {
        title: "Poor Drainage",
        problem: "Water tends to pool on the surface, which can suffocate plant roots.",
        solution: "Improve drainage by adding organic matter like compost or creating raised beds.",
        plan: `
          Best Fertilizers: Use balanced fertilizers with a good nitrogen content to encourage strong root development.
          Best Irrigation: Drip irrigation or soaker hoses are best to avoid water pooling. Avoid sprinklers.
          Best Plants: Choose drought-tolerant plants like succulents or cacti. Also, consider plants like lavender or rosemary that require well-drained soil.
          Pest Control: Regularly check for fungus gnats, which thrive in overly moist conditions, and consider using yellow sticky traps.
          Additional Tips: Add sand or perlite to improve drainage in heavy soils, and ensure that the topsoil isn't too compacted.
        `,
      },
      "low ph": {
        title: "Low pH (Acidic Soil)",
        problem: "Plants may have trouble absorbing nutrients if the pH is too low.",
        solution: "Add lime to raise the pH and make the soil more alkaline.",
        plan: `
          Best Fertilizers: Use fertilizers with a higher pH, such as bone meal or lime-based products.
          Best Irrigation: Regular watering is essential, but avoid over-watering as it can lower pH further.
          Best Plants: Blueberries, azaleas, and camellias thrive in acidic soils, but avoid crops like beans or cabbage.
          Pest Control: Watch for aphids and spider mites, which can be more prevalent in acidic conditions.
          Additional Tips: Test soil pH regularly, and apply lime in the fall for gradual pH adjustment.
        `,
      },
      // Add other problems here...
      "nutrient deficiency": {
        title: "Nutrient Deficiency",
        problem: "Soil lacks essential nutrients, causing stunted growth and poor yields.",
        solution: "Add organic fertilizers or compost to replenish missing nutrients.",
        plan: `
            Best Fertilizers: Use compost, fish emulsion, or seaweed extracts that provide a broad spectrum of nutrients.
            Best Irrigation: Ensure proper irrigation techniques to help nutrient uptake, especially for crops like tomatoes and peppers.
            Best Plants: Vegetables like spinach, kale, and lettuce will thrive in nutrient-rich soil.
            Pest Control: Fertilizer-rich soil can attract slugs, so consider using beer traps or natural slug repellents.
            Additional Tips: Rotate crops annually to prevent soil depletion and maintain a steady nutrient cycle.
        `
    },
    "soil erosion": {
        title: "Soil Erosion",
        problem: "Erosion causes the loss of topsoil, which can degrade soil quality and reduce crop yields.",
        solution: "Plant cover crops and use mulch to protect the soil surface.",
        plan: `
            Best Fertilizers: Apply organic compost and mulch to provide a protective layer and enrich the soil.
            Best Irrigation: Implement contour irrigation to slow down water runoff and reduce erosion.
            Best Plants: Plant cover crops like clover, ryegrass, and vetch to protect the soil and fix nitrogen.
            Pest Control: Use natural predators to control pests that may damage cover crops, like ladybugs for aphids.
            Additional Tips: Use terracing or raised beds on slopes to further combat erosion and keep soil intact.
        `
    },
    "poor aeration": {
        title: "Poor Soil Aeration",
        problem: "Soil that is too compacted doesn't allow roots to grow properly or absorb oxygen.",
        solution: "Loosen the soil with aeration tools or by adding organic material to improve root penetration.",
        plan: `
            Best Fertilizers: Apply compost, manure, or worm castings to improve soil structure and aeration.
            Best Irrigation: Drip irrigation is recommended to avoid compacting the soil further with traditional sprinklers.
            Best Plants: Deep-rooted plants like carrots, beets, and daffodils can help break up compacted soil over time.
            Pest Control: Be on the lookout for root rot or fungal diseases, which can thrive in poorly aerated soils.
            Additional Tips: Aerate the soil during the growing season and during the fall for long-term soil health.
        `
    } ,
    "poor fertilization": {
    title: "Poor Fertilization",
    problem: "Lack of adequate fertilization can lead to nutrient deficiencies and poor plant growth.",
    solution: "Use a balanced fertilizer to supply essential nutrients.",
    plan: `
        Best Fertilizers: Use a balanced NPK (Nitrogen-Phosphorus-Potassium) fertilizer or organic compost to ensure proper nutrient supply.
        Best Irrigation: Regular irrigation, ensuring the plants get enough water to process the nutrients, is essential.
        Best Plants: Leafy greens, such as spinach and lettuce, respond well to consistent fertilization.
        Pest Control: Poor fertilization can weaken plants, making them more susceptible to pests like aphids and caterpillars.
        Additional Tips: Apply fertilizers in small doses over time rather than a heavy application at once to avoid nutrient leaching.
    `
},
"invasive weeds": {
    title: "Invasive Weeds",
    problem: "Invasive weeds compete with crops for water and nutrients, harming plant growth.",
    solution: "Remove weeds manually or use mulch to suppress their growth.",
    plan: `
        Best Fertilizers: Apply mulch to deprive weeds of sunlight and reduce their growth. Use organic fertilizers around the crops to help them outcompete weeds.
        Best Irrigation: Water deeply to support crop growth but avoid shallow watering that promotes weed growth.
        Best Plants: Plant groundcovers like clover or creeping thyme to naturally suppress weeds.
        Pest Control: Manual weeding and introducing natural predators like beetles can help reduce the spread of invasive species.
        Additional Tips: Use landscape fabric or plastic to prevent weed growth in areas where you don't want any plants.
    `
},
"low fertility": {
    title: "Low Soil Fertility",
    problem: "Soil that lacks essential nutrients will lead to poor plant growth and poor yields.",
    solution: "Regularly amend the soil with compost and organic fertilizers to replenish nutrients.",
    plan: `
        Best Fertilizers: Use compost, organic manure, or slow-release fertilizers to provide a consistent source of nutrients throughout the growing season.
        Best Irrigation: Proper watering is crucial for nutrient uptake. Water deeply to encourage root growth and nutrient absorption.
        Best Plants: Plants like beans, peas, and legumes naturally help enrich the soil with nitrogen, improving fertility.
        Pest Control: Low-fertility soils may result in weaker plants, making them more susceptible to pests like aphids and caterpillars. Use organic pesticides like neem oil when necessary.
        Additional Tips: Rotate crops to prevent nutrient depletion and consider adding cover crops like clover to naturally fix nitrogen in the soil.
    `
},
"alkaline soil": {
    title: "Alkaline Soil",
    problem: "Soil with a high pH can hinder the absorption of certain nutrients, leading to poor plant health.",
    solution: "Add sulfur, compost, or organic matter to lower the soil's pH and make it more suitable for plant growth.",
    plan: `
        Best Fertilizers: Use fertilizers that help lower soil pH, such as ammonium sulfate, iron sulfate, or organic compost.
        Best Irrigation: Ensure that the water used does not have high mineral content, as this can further raise the pH of the soil.
        Best Plants: Plants like lilacs, lavender, and certain types of roses thrive in alkaline soil, while others like blueberries may struggle.
        Pest Control: Alkaline soil may attract specific pests like aphids, which can be managed through the use of insecticidal soap or natural predators.
        Additional Tips: Regularly monitor soil pH and apply sulfur to maintain optimal acidity levels. Test soil pH before planting each season.
    `
},
"soil compaction": {
    title: "Soil Compaction",
    problem: "Soil becomes dense and compacted, restricting root growth and water absorption.",
    solution: "Loosen the soil using aeration tools or by adding organic material like compost to improve soil structure.",
    plan: `
        Best Fertilizers: Apply organic fertilizers, such as compost or aged manure, to improve soil structure and allow roots to penetrate more easily.
        Best Irrigation: Use drip irrigation or soaker hoses to provide moisture directly to the roots, minimizing surface compaction.
        Best Plants: Deep-rooted plants such as carrots, daffodils, and dahlias can help break up compacted soil over time.
        Pest Control: Soil compaction can lead to increased fungal growth. Watch out for root rot, and consider using natural fungicides or compost teas.
        Additional Tips: Aerate the soil during the growing season and consider using a garden fork or aerator to loosen compacted areas.
    `
},
"excessive salts": {
    title: "Excessive Salt Content",
    problem: "Excess salts in the soil can prevent plants from taking up water, leading to dehydration and nutrient deficiencies.",
    solution: "Flush the soil with large amounts of water to leach out salts and reduce their concentration.",
    plan: `
        Best Fertilizers: Avoid high-salt fertilizers. Instead, use organic matter like compost or manure to improve soil fertility without increasing salinity.
        Best Irrigation: Use drip irrigation or soaker hoses to water deeply and reduce surface evaporation, which can concentrate salts in the topsoil.
        Best Plants: Salt-tolerant plants such as barley, rye, and saltbush can thrive in saline conditions.
        Pest Control: Watch for fungal diseases, which can be more prominent in saline soils. Use copper-based fungicides or neem oil to treat affected plants.
        Additional Tips: Leach excess salts by irrigating frequently with large amounts of water, and avoid using salt-based fertilizers.
    `
}
,
    "high salinity": {
        title: "High Salinity in Soil",
        problem: "Excessive salts in the soil can inhibit plant growth by interfering with water absorption.",
        solution: "Leach the soil with water to flush out the salts, and improve drainage to avoid salt buildup.",
        plan: `
            Best Fertilizers: Avoid using fertilizers with high salt content, and opt for slow-release fertilizers to avoid further salinity issues.
            Best Irrigation: Use a large amount of water to flush salts out of the soil, especially after rainfall, and avoid waterlogging.
            Best Plants: Salt-tolerant plants such as mangrove species, saltbush, and coastal grasses thrive in saline conditions.
            Pest Control: High salinity can discourage many pests but can also weaken plants, making them vulnerable to root rot and fungal diseases.
            Additional Tips: Ensure proper drainage systems are in place to prevent salt buildup over time.
        `
    },
    "lack of organic matter": {
        title: "Lack of Organic Matter",
        problem: "Without enough organic material, the soil's ability to retain nutrients and water is reduced, and plants struggle to grow.",
        solution: "Incorporate organic matter like compost, manure, or mulch into the soil to enhance its fertility and texture.",
        plan: `
            Best Fertilizers: Use compost, well-rotted manure, or other organic matter to add essential nutrients and improve soil structure.
            Best Irrigation: Deep watering is important to encourage root growth and help the organic material settle and break down.
            Best Plants: Consider planting cover crops like clover or alfalfa, which add organic matter back into the soil as they grow.
            Pest Control: Adding organic matter helps foster beneficial insects and microbes that can naturally control pests.
            Additional Tips: Mulch regularly to retain moisture and suppress weed growth while feeding the soil as it decomposes.
        `
    },
    "heavy clay soil": {
        title: "Heavy Clay Soil",
        problem: "Clay soil has poor drainage and can become compacted, making it difficult for roots to grow and absorb nutrients.",
        solution: "Amend the soil with organic matter such as compost, sand, or gypsum to improve its texture and drainage.",
        plan: `
            Best Fertilizers: Use organic compost, well-rotted manure, and sand to break up the dense clay and improve its texture.
            Best Irrigation: Install a drip irrigation system to water deeply without over-saturating the soil. Avoid surface watering that may cause runoff.
            Best Plants: Choose plants that tolerate clay, such as shrubs like hydrangeas, or vegetables like carrots and cabbages that thrive in compacted soil.
            Pest Control: Heavy clay soils can attract pests like snails and slugs. Use natural slug traps or neem oil for pest control.
            Additional Tips: Aerate the soil regularly and consider adding gypsum to improve soil structure and prevent compaction.
        `
    },
    "poor aeration": {
        title: "Poor Soil Aeration",
        problem: "When soil is compacted or lacks proper structure, it restricts the flow of air to the roots, leading to poor plant growth.",
        solution: "Aerate the soil using tools like garden forks or mechanical aerators, and add organic matter to improve its texture and porosity.",
        plan: `
            Best Fertilizers: Use organic compost to improve soil structure and promote good aeration by loosening up the soil.
            Best Irrigation: Use deep watering to ensure moisture reaches the root zone without causing waterlogging.
            Best Plants: Plants like clover, alfalfa, and other legumes naturally improve aeration by adding nitrogen and breaking up compacted soil.
            Pest Control: Poor aeration can promote fungal diseases, so ensure good airflow and avoid overwatering to minimize risks.
            Additional Tips: Regularly aerate the soil by using a garden fork or mechanical aerator to maintain healthy soil structure.
        `
    },
    "waterlogging": {
        title: "Waterlogged Soil",
        problem: "Excess water in the soil leads to poor root health and may cause root rot and other diseases.",
        solution: "Improve drainage by adding organic matter, and create raised beds or install drainage systems to prevent water from pooling.",
        plan: `
            Best Fertilizers: Use organic compost and avoid fertilizers that add excess salts, which can exacerbate drainage issues.
            Best Irrigation: Ensure that water does not sit on the surface for too long. Use soaker hoses or drip irrigation for more efficient watering.
            Best Plants: Choose water-tolerant plants such as rice, water lilies, or marsh grasses that can thrive in soggy conditions.
            Pest Control: Overwatering may lead to pest problems like mosquitoes and root rot, so adjust watering frequency and treat with natural fungicides.
            Additional Tips: If possible, plant in raised beds or on slopes to encourage water to drain away from plant roots.
        `
    },
    "nutrient imbalance": {
        title: "Nutrient Imbalance",
        problem: "When certain nutrients are too abundant or lacking, plants cannot grow effectively, leading to poor yields.",
        solution: "Test the soil regularly and adjust fertilizer application based on the specific nutrient needs of your plants.",
        plan: `
            Best Fertilizers: Use balanced fertilizers that include essential nutrients such as nitrogen, phosphorus, and potassium.
            Best Irrigation: Ensure regular deep watering to help the soil absorb and distribute nutrients evenly to plant roots.
            Best Plants: Plants like spinach, beans, and corn are good at tolerating nutrient imbalances, but the right fertilizer is key.
            Pest Control: Imbalanced soil may attract pests like aphids or mealybugs. Use organic insecticides or encourage natural predators.
            Additional Tips: Regularly test your soil and adjust nutrient levels using organic or slow-release fertilizers to maintain an ideal balance.
        `
    } ,

    "inadequate transport": {
    title: "Inadequate Transport",
    problem: "Farmers in developing countries have a hard time transporting their produce to markets due to lack of roads, vehicles, and money. They often have to carry their produce from the farm to local markets on foot or by bicycle, which can be challenging and time-consuming. This results in selling produce at low prices due to the inability to transport to higher-demand markets.",
    solution: "Improve infrastructure by building better roads and providing affordable transportation options for farmers.",
    plan: `
        Transportation: Advocate for local government investment in rural infrastructure, including roads and public transport options.
        Partnerships: Collaborate with NGOs or local businesses to organize shared transport services for farmers.
        Investment: Seek financial support from development organizations to provide low-cost vehicles to farmers.
        Additional Tips: Promote the creation of cooperatives where farmers can pool resources to reduce transportation costs.
    `
},
"lack of capital": {
    title: "Lack of Capital",
    problem: "Farmers often have little access to credit or financing because lenders don't understand their unique needs. This lack of financial resources affects productivity and quality, as they cannot invest in better technologies, machinery, or quality seeds.",
    solution: "Increase access to affordable financing options tailored to the agricultural sector, such as microloans and government-backed loans.",
    plan: `
        Financial Support: Encourage banks and microfinance institutions to offer low-interest loans to farmers.
        Partnerships: Connect farmers with development programs that offer grants or low-cost loans.
        Education: Provide farmers with financial literacy training to improve their ability to manage finances effectively.
        Additional Tips: Promote crop insurance programs to help mitigate financial risk from crop failure.
    `
},
"agricultural marketing": {
    title: "Agricultural Marketing",
    problem: "Farmers face challenges in finding buyers for their produce, often having to sell at low prices due to poor market access and a lack of negotiating power.",
    solution: "Create better market linkages by connecting farmers with buyers through digital platforms, cooperatives, and agricultural marketplaces.",
    plan: `
        Digital Platforms: Implement mobile apps or websites where farmers can list their produce and find buyers.
        Market Networks: Form agricultural cooperatives to help farmers access larger markets and negotiate better prices.
        Training: Provide farmers with marketing and negotiation skills to sell their produce at fair prices.
        
    `
},
"soil erosion": {
    title: "Soil Erosion",
    problem: "Soil erosion caused by over-tilling, improper irrigation, and floods depletes topsoil, reducing the soil's ability to retain nutrients and water.",
    solution: "Implement sustainable farming practices like no-till farming, crop rotation, and using cover crops to prevent erosion.",
    plan: `
        Sustainable Practices: Promote no-till farming, use of cover crops, and crop rotation to maintain soil structure and reduce erosion.
        Water Management: Use efficient irrigation techniques such as drip irrigation to minimize water runoff.
        Government Support: Advocate for policies that encourage the use of erosion control methods and provide subsidies for sustainable farming practices.
        Additional Tips: Educate farmers on the importance of preserving topsoil and implementing soil conservation techniques.
    `
},
"irrigation problems": {
    title: "Irrigation Problems",
    problem: "Farmers struggle with outdated irrigation systems, insufficient water sources, and climate change-related challenges that affect crop yields.",
    solution: "Upgrade irrigation infrastructure to more efficient systems like drip irrigation and rainwater harvesting systems.",
    plan: `
        Irrigation Systems: Encourage the adoption of drip irrigation to reduce water waste and ensure efficient water use.
        Climate Adaptation: Invest in rainwater harvesting systems to collect and store water during wet seasons for use during droughts.
        Policy Support: Advocate for government investment in modern irrigation infrastructure and water management systems.
        Additional Tips: Provide training to farmers on water-saving techniques and efficient irrigation scheduling.
    `
},
"lack of high quality seeds": {
    title: "Lack of High-Quality Seeds",
    problem: "Farmers often lack access to quality seeds due to high costs or insufficient supply, which leads to poor crop yields.",
    solution: "Support seed production initiatives and provide farmers with access to affordable, high-quality seeds.",
    plan: `
        Seed Banks: Establish local seed banks or cooperatives where farmers can access high-quality seeds at affordable rates.
        Government Programs: Promote government subsidies or partnerships with seed companies to lower the cost of quality seeds.
        Education: Educate farmers on the benefits of using high-quality seeds and how to store and save seeds for future planting.
        Additional Tips: Encourage the use of open-pollinated or hybrid seeds suited for local conditions.
    `
}
    };

    const submitButton = document.getElementById("submit-button");
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");

    const handleChat = () => {
      const input = userInput.value.toLowerCase().trim();

      if (input) {
        chatBox.innerHTML += <p><strong>You:</strong> ${input}</p>;

        if (problems[input]) {
          const { title, problem, solution, plan } = problems[input];
          const planLines = plan.split("\n").filter(line => line.trim());

          chatBox.innerHTML += `
            <p><strong>Chatbot:</strong> Here's your solution for <strong>${title}</strong></p>
            <p><strong>Problem:</strong> ${problem}</p>
            <p><strong>Solution:</strong> ${solution}</p>
            <p><strong>Plan:</strong></p>
            <ul>
              <li><strong>Best Fertilizers:</strong> ${planLines[0]}</li>
              <li><strong>Best Irrigation:</strong> ${planLines[1]}</li>
              <li><strong>Best Plants:</strong> ${planLines[2]}</li>
              <li><strong>Pest Control:</strong> ${planLines[3]}</li>
              <li><strong>Additional Tips:</strong> ${planLines[4]}</li>
            </ul>
          `;
        } else {
          chatBox.innerHTML += <p><strong>Chatbot:</strong> Sorry, I couldn't find a solution for that problem.</p>;
        }
      }

      userInput.value = ""; // Clear the input field
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    };

    submitButton.addEventListener("click", handleChat);

    // Cleanup listener on component unmount
    return () => {
      submitButton.removeEventListener("click", handleChat);
    };
  }, []);

  return (
    <section className="chat-container">
      <div className="chat-box" id="chat-box">
        <p>
          <strong>Chatbot:</strong> Hi! How can I help you with your soil problem today?
        </p>
      </div>
      <input type="text" id="user-input" className="chat-input" placeholder="Type a problem..." />
      <button id="submit-button" className="chat-button">Ask</button>
    </section>
  );
};

export default ChatbotSection;