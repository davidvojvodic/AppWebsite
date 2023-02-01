import React from 'react'

// importanje slike, styleov pa buttona
import { card, dva } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (

    // sekcija z layout section styleon
    <section className={layout.section}>
      {/* div z naslov, tekst pa button */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal<br className='"sm:block' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button styles="mt-10" />
      </div>
      {/* div za sliko */}
      <div className={layout.sectionImg}>
        <img src={dva} alt="card" className='w-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal


