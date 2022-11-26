import React from 'react'
import { EmblaOptionsType } from 'embla-carousel-react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import CarouselDefault from 'embla-carousel-react-sandboxes/src/SandboxFiles/CarouselDefault'
import { carouselDefaultWrapperStyles } from 'components/Examples/carouselWrapperStyles'
import { createCarouselDefaultStyles } from 'components/Examples/createCarouselStyles'
import { createSlides } from 'components/Examples/createSlides'

export const ID = 'embla-carousel-align'
export const SLIDES = createSlides(5)
export const OPTIONS: EmblaOptionsType = { align: 'center' }
export const STYLES = createCarouselDefaultStyles('80%')

export const Wrapper = styled.div`
  ${carouselDefaultWrapperStyles};

  &.${ID} {
    ${STYLES};
  }
`

export const ExampleCarouselAlign = () => {
  const [inViewRef, inView] = useInView()

  return (
    <Wrapper className={ID} ref={inViewRef}>
      {inView ? <CarouselDefault slides={SLIDES} options={OPTIONS} /> : null}
    </Wrapper>
  )
}
