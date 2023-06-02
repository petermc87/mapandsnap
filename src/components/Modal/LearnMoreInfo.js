import {React, useState} from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from '../Modal/LearnMoreInfo.module.scss'

export default function LearnMoreInfo ({ currentPortfolio, currentJob, setCurrentJob }) {

  //Setting the job to be viewed.
  const [viewingJob, setViewingJob] = useState(null)


  // console.log(currentPortfolio[0][2].otherImages[0])

  // if(viewingJob){
  //   //Checking the viewingJob dataset
  //   console.log(viewingJob)
  //   // console.log(viewingJob.otherImages[0][0])
  // }

  return (
    <CarouselProvider
      id={styles.carouselProv}
      naturalSlideWidth={100}
      naturalSlideHeight={125}

      // Position one in the portfolio object is the array of jobs.
        totalSlides={
          !viewingJob?
            currentPortfolio[0].length
            :
            viewingJob.otherImages.length
        }
      
    >
      <p>{currentPortfolio[1].serviceBreakdown}</p>
      <Slider>

        {/* Indexing the portfolio jobs per service and returning the hero image in the slide. */}
        {!viewingJob 
          ? currentPortfolio[0].map((job, i) => {
            // console.log(job.hero)
            return (
  
              <Slide index={i}>
                <div className={styles.imageContainer} >
                  {/* When you hover over an image, it will set that current job in state so that it can be viewed
                  by the client. */}
                  <img className={styles.image} style={{ backgroundImage: `url(${job.hero})` }} 
                    onMouseOver={() => {setCurrentJob(job)}}
                    onMouseOut={() => {setCurrentJob(null)}}
                    onClick={() => {setViewingJob(job)}}
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

          : 
            // Mapping the images per job
            viewingJob.otherImages.map((image, i) => {
              return(
                <Slide index={i}>
                  <div className={styles.imageContainer} >
                    {/* When you hover over an image, it will set that current job in state so that it can be viewed
                    by the client. */}
                    <img className={styles.image} style={{ backgroundImage: `url(${image})` }} />
                  </div>
                </Slide>
              )
            })
            }
      </Slider>
      <div className={styles.buttonWrapper}>
        <ButtonBack id={styles.backButton}>Back</ButtonBack>
        <ButtonNext id={styles.nextButton}>Next</ButtonNext>
      </div>
    </CarouselProvider>
  )
}
