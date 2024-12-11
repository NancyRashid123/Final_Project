import React from 'react'

export default function WhyChooseUs() {
  return (
    <div>
      <section className="why-choose-us px py" >
      <div className="container">
      <div className='slogn'>
      <h3 className="section-title">Why Choose Us</h3>
        </div> 
        <div className='slogn '>
        <p className="section-description">
          Our platform supports farmers with soil analysis, crop suggestions, expert advice, and access to high-quality farming products for optimal yields.
        </p>
        </div> 

        <div className="content-wrapper">
          <div className="left-side px">
            <div className="choose-item  px py">
              {/* <div className='choose-item-icon'> <img  src="src\assets\images\06e695aeecf7f2a16aa78ab00f6f53e6.jpg" alt="Excellent Services" /> </div> */}
              <div className="choose-item-text">
              <div className='slogn '>
                <h5>OUR PRODUCTS</h5>
                </div>
                <p>Our products include high-quality seeds, fertilizers, tools, irrigation systems, and soil enhancers to boost crop yield and farm efficiency.</p>
              </div>
            </div>
            <div className="choose-item  px py">
             {/* <div className='choose-item-icon'> <img  src="src\assets\images\5968160f97edba47dcc44a41d89829d5.jpg" alt="Quality And Reliability" /></div> */}
              <div className="choose-item-text ">
              <div className='slogn '>
                <h5>OUR TEAM</h5>
                </div>
                <p>Our team consists of skilled professionals committed to delivering high-quality services, ensuring customer satisfaction through expertise and collaboration.</p>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img className="center-image" src="src\assets\images\why-1-2.jpg" alt="Man with Green Uniform" /> 
          </div>

          <div className="right-side px">
            <div className="choose-item  px py">
             {/* <div className='choose-item-icon'> <img  src="src\assets\images\e42c7c2bb237c2c2798465c93541084d.jpg" alt="Clean Working" /> </div>  */}
              <div className="choose-item-text">
              <div className='slogn '>
                <h5>SOIL ANALYSIS</h5>
                </div>
                <p>Soil analysis tests nutrient content, pH, texture, and organic matter to optimize farming, improve crop yield, and ensure sustainability.</p>
              </div>
            </div>
            <div className="choose-item  px py">
              {/* <div className='choose-item-icon'> <img  src="src\assets\images\f5ccc8aca696804b6aa401439cebc205.jpg" alt="Expert Farmer" /> </div> */}
              <div className="choose-item-text">
              <div className='slogn '>
                <h5>SOLVEING ISSUE </h5>
                </div>
                <p>Farmers face challenges like poor soil health, pests, water scarcity, and crop selection. Solutions include improved practices, technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}







