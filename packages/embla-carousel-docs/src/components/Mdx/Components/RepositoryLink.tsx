import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { PlainLink, PropType as LinkPropType } from 'components/Link'
import { IconWithText } from 'components/Icon'
import { COLORS, SPACINGS, FONT_SIZES } from 'consts'

const Wrapper = styled(PlainLink)`
  color: ${COLORS.TEXT_LOW_CONTRAST};
  padding-top: ${SPACINGS.ONE};
  padding-bottom: ${SPACINGS.ONE};
  margin-bottom: ${SPACINGS.THREE};
  font-size: ${FONT_SIZES.COMPLEMENTARY};
  display: inline-flex;
`

type PropType = PropsWithChildren<{
  to: LinkPropType['to']
}>

export const RepositoryLink = (props: PropType) => {
  const { to, children, ...restProps } = props

  return (
    <Wrapper to={to} {...restProps}>
      <IconWithText iconSvg="github" iconSize="1.5rem">
        {children}
      </IconWithText>
    </Wrapper>
  )
}
