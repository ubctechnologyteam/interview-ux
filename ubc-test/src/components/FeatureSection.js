import React from 'react'

const FeatureSection = () => {
  return (
    <div  className ="features">
        <h1> Our Features</h1>

        <div className ="grid">
            <div className="f_cards">
                <span>▷</span>
                <h3>Feature1</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum. </p>
            </div>
            <div className="f_cards">
                 <span>▷</span>
                <h3>Feature2</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum. </p>
            </div>
            <div className="f_cards">
                 <span>▷</span>
                <h3>Feature3</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum. </p>
            </div>
        </div> 
    </div>
  )
}

export default FeatureSection
