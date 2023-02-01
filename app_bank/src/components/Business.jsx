import React from 'react'

// importanje features za text, styles pa layout za obliko pa button
import { features } from '../constants'
import styles, {layout} from '../style'
import Button from './Button';

// FeatureCard za uporabo v komponenti, keri sprejme icon, title, content pa index props.
const FeatureCard = ({ icon, title, content, index }) => (

  // Div za feature card backround pa pozicijo
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>

    {/* Div za sliko v feature card */}
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    {/* Div za naslov pa tekst v feature cardi */}
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    // section z layout styleon za section
    <section id='features' className={layout.section}>
      {/* div za levi del komponente s tekston, keri ma style layout sectionInfo */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'/> we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        {/* Dodajanje button komponente */}
        <Button styles="mt-10" />
      </div>

      {/* Desen del komponente z feature cardi keri se izpišejo s funkcijo map() */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business