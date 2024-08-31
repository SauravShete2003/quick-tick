import './FeaturesCard.css'
function FeaturesCard({featureImg , featureDescription}) {
  return (
    <div className='features-card'>
      <img src={featureImg} alt="FeatureImage" className='features-img'/>
      <p className='feature-description'>{featureDescription}</p>
    </div>
  )
}

export default FeaturesCard
