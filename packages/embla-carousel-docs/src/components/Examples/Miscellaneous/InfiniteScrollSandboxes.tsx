import React from 'react'
import { createSandboxReact } from 'components/CodeSandbox/React/createSandboxReact'
import {
  ID,
  SLIDES,
  OPTIONS,
  STYLES,
} from 'components/Examples/Miscellaneous/InfiniteScroll'
import {
  CreateCodeSandboxForms,
  PropType as CreateCodeSandboxFormsPropType,
} from 'components/CodeSandbox/CreateCodeSandboxForms'

const SHARED_CONFIG = {
  slides: SLIDES,
  options: OPTIONS,
  styles: STYLES,
  id: ID,
}

const sandboxReactJavaScript = async (): Promise<string> => {
  const carousel = await import(
    `!!raw-loader!embla-carousel-react-sandboxes/src/SandboxFilesDist/CarouselInfiniteScroll.jsx`
  )
  return createSandboxReact({
    ...SHARED_CONFIG,
    carouselScript: carousel.default,
    language: 'javascript',
  })
}

const sandboxReactTypeScript = async (): Promise<string> => {
  const carousel = await import(
    `!!raw-loader!embla-carousel-react-sandboxes/src/SandboxFilesDist/CarouselInfiniteScroll.tsx`
  )
  return createSandboxReact({
    ...SHARED_CONFIG,
    carouselScript: carousel.default,
    language: 'typescript',
  })
}

const SANDBOXES: CreateCodeSandboxFormsPropType['sandboxes'] = [
  {
    label: 'React',
    createSandbox: sandboxReactJavaScript,
  },
  {
    label: 'React+TS',
    createSandbox: sandboxReactTypeScript,
  },
]

export const ExampleCarouselInfiniteScrollSandboxes = () => {
  return <CreateCodeSandboxForms sandboxes={SANDBOXES} />
}
