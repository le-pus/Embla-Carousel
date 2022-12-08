import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import CarouselScale from 'components/CodeSandbox/React/SandboxFilesSrc/Scale/EmblaCarousel'
import { createSandboxVanilla } from 'components/CodeSandbox/Vanilla/createSandboxVanilla'
import { createSandboxReact } from 'components/CodeSandbox/React/createSandboxReact'
import { loadPrettier } from 'utils/loadPrettier'
import { ID, SLIDES, OPTIONS, STYLES } from 'components/Examples/Tween/Scale'
import {
  CreateCodeSandboxForms,
  PropType as CreateCodeSandboxFormsPropType,
} from 'components/CodeSandbox/CreateCodeSandboxForms'
import {
  createSandboxLabel,
  SANDBOX_LABELS,
} from 'components/CodeSandbox/sandboxLabels'

const SHARED_CONFIG = {
  slides: SLIDES,
  options: OPTIONS,
  styles: STYLES,
  id: ID,
}

const VANILLA_TWEEN_FILE_NAME = 'tween-scale'

const sandboxVanillaJavaScript = async (): Promise<string> => {
  const { formatJs } = await loadPrettier()
  const [carousel, tween] = await Promise.all([
    import(
      '!!raw-loader!components/CodeSandbox/Vanilla/SandboxFilesDist/Scale/EmblaCarousel.js'
    ),
    import(
      `!!raw-loader!components/CodeSandbox/Vanilla/SandboxFilesDist/Scale/tween-scale.js`
    ),
  ])
  return createSandboxVanilla({
    ...SHARED_CONFIG,
    carouselScript: carousel.default,
    carouselHtml: ReactDOMServer.renderToStaticMarkup(
      <CarouselScale options={OPTIONS} slides={SLIDES} />,
    ),
    language: 'javascript',
    sandboxOverrides: {
      [`src/js/${VANILLA_TWEEN_FILE_NAME}.js`]: {
        isBinary: false,
        content: formatJs(tween.default),
      },
    },
  })
}

const sandboxVanillaTypeScript = async (): Promise<string> => {
  const { formatTs } = await loadPrettier()
  const [carousel, tween] = await Promise.all([
    import(
      '!!raw-loader!components/CodeSandbox/Vanilla/SandboxFilesDist/Scale/EmblaCarousel.ts'
    ),
    import(
      `!!raw-loader!components/CodeSandbox/Vanilla/SandboxFilesDist/Scale/tween-scale.ts`
    ),
  ])
  return createSandboxVanilla({
    ...SHARED_CONFIG,
    carouselScript: carousel.default,
    carouselHtml: ReactDOMServer.renderToStaticMarkup(
      <CarouselScale options={OPTIONS} slides={SLIDES} />,
    ),
    language: 'typescript',
    sandboxOverrides: {
      [`src/js/${VANILLA_TWEEN_FILE_NAME}.ts`]: {
        isBinary: false,
        content: formatTs(tween.default),
      },
    },
  })
}

const sandboxReactJavaScript = async (): Promise<string> => {
  const carousel = await import(
    `!!raw-loader!components/CodeSandbox/React/SandboxFilesDist/Scale/EmblaCarousel.jsx`
  )
  return createSandboxReact({
    ...SHARED_CONFIG,
    carouselScript: carousel.default,
    language: 'javascript',
  })
}

const sandboxReactTypeScript = async (): Promise<string> => {
  const carousel = await import(
    `!!raw-loader!components/CodeSandbox/React/SandboxFilesDist/Scale/EmblaCarousel.tsx`
  )
  return createSandboxReact({
    ...SHARED_CONFIG,
    carouselScript: carousel.default,
    language: 'typescript',
  })
}

const SANDBOXES: CreateCodeSandboxFormsPropType['sandboxes'] = [
  createSandboxLabel(SANDBOX_LABELS.VANILLA_JS, sandboxVanillaJavaScript),
  createSandboxLabel(SANDBOX_LABELS.VANILLA_TS, sandboxVanillaTypeScript),
  createSandboxLabel(SANDBOX_LABELS.REACT_JS, sandboxReactJavaScript),
  createSandboxLabel(SANDBOX_LABELS.REACT_TS, sandboxReactTypeScript),
]

export const ExampleCarouselScaleSandboxes = () => {
  return <CreateCodeSandboxForms sandboxes={SANDBOXES} />
}
