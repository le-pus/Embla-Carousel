import React from 'react'
import styled from 'styled-components'
import { MEDIA } from 'consts/breakpoints'
import { COLORS } from 'consts/themes'
import { SPACINGS } from 'consts/spacings'
import { FONT_SIZES, FONT_WEIGHTS } from 'consts/fontSizes'
import { SiteLogo } from 'components/SiteLogo/SiteLogo'
import { createSquareSizeStyles } from 'utils/createSquareSizeStyles'
import { BRAND_GRADIENT_TEXT_STYLES } from 'consts/gradients'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import { MAIN_CONTENT_ID } from 'components/KeyNavigating/KeyNavigatingSkipToContent'
import { PrimaryButtonFilledLink } from 'components/Link/ButtonLink'

const MAX_CONTENT_WIDTH = '50rem'

const HeroBrandWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${MEDIA.MIN_SM} {
    padding-top: ${SPACINGS.SIX};
  }

  ${MEDIA.MIN_MD} {
    padding-top: ${SPACINGS.TWELVE};
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`

const HeroLogo = styled(SiteLogo)`
  flex: 0 0 auto;
  ${createSquareSizeStyles('15rem')};

  ${MEDIA.MIN_SM} {
    ${createSquareSizeStyles('22rem')};
  }

  ${MEDIA.MIN_MD} {
    ${createSquareSizeStyles('28rem')};
  }
`

const Content = styled.div`
  max-width: ${MAX_CONTENT_WIDTH};

  ${MEDIA.MAX_MD} {
    padding-top: ${SPACINGS.SIX};
    text-align: center;
  }

  ${MEDIA.MAX_SM} {
    padding-top: ${SPACINGS.FOUR};
  }
`

const H1 = styled.h1`
  color: ${COLORS.TEXT_HIGH_CONTRAST};
  margin-bottom: ${SPACINGS.THREE};
  font-size: ${FONT_SIZES.CUSTOM(({ H2 }) => H2 * 2)};
  line-height: 0.9;
  font-weight: ${FONT_WEIGHTS.BLACK};

  > span {
    display: block;
  }

  > span:nth-child(2) {
    ${BRAND_GRADIENT_TEXT_STYLES};
  }

  ${MEDIA.MIN_XS} {
    font-size: ${FONT_SIZES.CUSTOM(({ H1 }) => H1 + 2.4)};
  }

  ${MEDIA.MIN_SM} {
    font-size: ${FONT_SIZES.CUSTOM(({ H1 }) => H1 + 3)};
  }
`

const H2 = styled.h2`
  color: ${COLORS.TEXT_MEDIUM_CONTRAST};
  font-size: ${FONT_SIZES.H4};
  line-height: 1.5;

  ${MEDIA.MIN_SM} {
    font-size: ${FONT_SIZES.CUSTOM(({ H3 }) => H3 - 0.05)};
  }
`

const CtaWrapper = styled.div`
  padding-top: ${SPACINGS.FOUR};

  ${MEDIA.MIN_SM} {
    padding-top: ${SPACINGS.SIX};
  }
`

export const HeroBrand = () => {
  const { title, description } = useSiteMetadata()

  return (
    <HeroBrandWrapper>
      <HeroLogo appearance="blur" />
      <Content>
        <H1>
          {title.split(' ').map((word, index) => (
            <span key={`${word}-${index}`}>{word}</span>
          ))}
        </H1>
        <H2>{description}</H2>
        <CtaWrapper id={MAIN_CONTENT_ID}>
          <PrimaryButtonFilledLink to="/examples/static/">
            Try Examples
          </PrimaryButtonFilledLink>
        </CtaWrapper>
      </Content>
    </HeroBrandWrapper>
  )
}
