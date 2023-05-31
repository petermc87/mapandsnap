import {React, useState} from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from '../Modal/LearnMoreInfo.module.scss'
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons'

export default function LearnMoreInfo ({ currentPortfolio, currentJob, setCurrentJob, setOpenModalJob }) {
  return (
    <CarouselProvider
      id={styles.carouselProv}
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={currentPortfolio[0].length}
    >
      <p>{currentPortfolio[1].serviceBreakdown}</p>
      <Slider>
        {/* Indexing the portfolio jobs per service and returning the hero image in the slide. */}
        {currentPortfolio
          ? currentPortfolio[0].map((job, i) => {
            return (
              <Slide index={i}>
                <div className={styles.imageContainer} >
                  {/* When you hover over an image, it will set that current job in state so that it can be viewed
                  by the client. */}
                  <img className={styles.image} style={{ backgroundImage: `url(${job.hero})` }} 
                    onMouseOver={() => {setCurrentJob(job)}}
                    onMouseOut={() => {setCurrentJob(null)}}
                    onClick={() => {
                      setOpenModalJob(true)
                    }}

                  />
                  {/* Job name text layered over the image */}
                  {currentJob
                  ? <>
                      <h1>{currentJob.name}</h1>
                    </>
                  : ''}
                </div>
              </Slide>
            )
          })
          // Add the other mapping function here
          : 
          ''}

      </Slider>
      <div className={styles.buttonWrapper}>
        <ButtonBack id={styles.backButton}>Back</ButtonBack>
        <ButtonNext id={styles.nextButton}>Next</ButtonNext>
      </div>
    </CarouselProvider>
  )
}




            // currentPortfolio && jobCarousel
            //   ?
            //     <div className={styles.jobCarousel}>Job Carousel</div>
            //   :
            //   ''}