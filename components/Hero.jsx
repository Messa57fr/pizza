import Image from 'next/image'
import css from '../styles/Hero.module.css';
import Cherry from '../assets/Cherry.png';
import HeroImage from '../assets/HeroImage.png';
import Pizza1 from '../assets/P1.jpg';
import {UilPhone} from '@iconscout/react-unicons';

export default function Hero() {
  return(
    <div className={css.container}>
      <div className={css.left}>
        {/* {left side} */}
        <div className={css.cherryDiv}>
          <span>More is More</span>
          <Image src={Cherry} alt="" width={40} height={25}/>
        </div>

        <div className={css.heroText}>
          <span>Be the fastest</span>
          <span>In delivering</span>
          <span>Your <span style={{color: "var(--themeRed)"}}>Pizza</span></span>
        </div>

        <span className={css.miniText}>
          Our mission is to help you with delivering your food
        </span>

        <button className={`btn ${css.btn}`}>
          Get Started
        </button>
      </div>

        {/* {right side} */}
        <div className={css.right}>
          <div className={css.imageContainer}>
            <Image src={HeroImage} alt="" layout="intrinsic"/>
          </div>
          <div className={css.ContactUs}>
            <span> Contact Us</span>
            <div>
            <UilPhone color='white'/>
            </div>
          </div>

          <div className={css.Pizza}>
            <div>
              <Image src={Pizza1} alt="" objectFit="cover"
              layout="intrinsic"/>
            </div>
            <div>
              <div className={css.details}>
                <span>Italian Pizza</span>
                <span><span style={{color: "var(--themeRed)"}}> $</span>7.49</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
};
