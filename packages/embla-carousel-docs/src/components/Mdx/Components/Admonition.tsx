import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { IconWithText } from 'components/Icon'
import { COLORS, SPACINGS } from 'consts'

const Heading = styled(IconWithText)`
  font-weight: bold;
`

const Wrapper = styled.div`
  color: ${COLORS.TEXT_ADMONITION_NOTE};
  background-color: rgba(${COLORS.TEXT_ADMONITION_NOTE_RGB_VALUE}, 0.05);
  border: 0.1rem solid rgba(${COLORS.TEXT_ADMONITION_NOTE_RGB_VALUE}, 0.1);
  margin-bottom: ${SPACINGS.FOUR};
  padding: 1.8rem ${SPACINGS.FOUR};
  border-radius: 0.4rem;
  font-size: 1.4rem;
  overflow: hidden;

  p,
  ${Heading} {
    margin-bottom: ${SPACINGS.CUSTOM(({ ONE }) => ONE + 0.2)};
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`

type PropType = PropsWithChildren<{}>

export const Admonition = (props: PropType) => {
  const { children } = props

  return (
    <Wrapper>
      <Heading iconSvg="info">Note</Heading>
      {children}
    </Wrapper>
  )
}
