import React from 'react'
// importanje slik, styles pa layouta
import { apple, ena, google } from '../assets'
import styles, {layout} from '../style';


const Billing = () => {
  return (

    // sekcija za komponento z reverse za menše naprave (tekst se pokaže prvi v ton primeri)
    <section id="product" className={layout.sectionReverse}>

      {/* div za sliko */}
      <div className={layout.sectionImgReverse}>
        <img src={ena} alt="billing" className="w-[100%] h-[100%] relative z-[5] mr-[50px]" />
        {/* div za gradient */}
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rouded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rouded-full pink__gradient'/>
      </div>

      {/* Div za naslov pa tekst pa buttone */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing