import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight  } from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'

function Main () {
    const ceoImage= "https://images.prismic.io/instrument-v5/f43c62bc-9a19-4771-a13e-b8b0d93e6d6b_72andsunny-nyc_ISAKTINER-8376-edit.jpg?auto=compress,format"
    const bestWorkplaceImg="https://images.prismic.io/instrument-v5/f3b20989-779a-41a5-9f19-668bcbda94a5_fastco_women_thumbnail.png?auto=compress,format"
    const whatWeDoImg="https://images.prismic.io/instrument-v5/7c872db1-8972-4a3e-b53f-9aa7d179fd4f_what-we-do.jpg?auto=compress,format"

    return (
     <>
      <div className="main">
        <motion.div className="ceo-section"
         initial={{opacity:0}}
         animate={{opacity:1}}
         >
        <div className="ceo-img">
            <img 
            src={ceoImage}
            alt="Instrument CEO Kara Place"
            height={500}
            />
            </div>
            <div className="ceo-info">
            <p>It is with great exitedment that we<br></br> announce Kara Place as Instrument's<br></br> next CEO.</p>
            <button className="ceo-button">Read More <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        </motion.div>

        <div className="best-workplace">
            <div className="workplace-img">
           <img 
            src={bestWorkplaceImg}
            alt="Best workplace for women in innovation 2022"
            height={500}
            />
            </div>
            <div className="workplace-info">
            <p>We're proud to be recognized as a Best<br></br> Workplace for Women Innovators by<br></br> Fast Company.</p>
            <button className="workplace-button">Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>

        <div className="what-we-do">
            <div className="what-we-do-img">
                <img 
                src={whatWeDoImg}
                alt="someone holding a phone"
                height={500}
                />
            </div>
            <div className="what-we-do-info">
                <p>As a full-service partner to the world's<br></br> most ambitious companies, we create <br></br>transformational change through best-<br></br>in-class digital products and <br></br> communications.</p>
                <button className="what-we-do-button">What We Do <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
        </div>
     </>
    )
} 

export default Main;