# Embla Carousel

Embla is a lightweight carousel plugin for the web with no dependencies. It's 100% open source and free to use on both personal and commercial projects. Use it with the module bundler of your choice or by manually injecting the script.

## Installation

If you are using a module bundler...

```bash
yarn add embla-carousel
```

```javascript
import EmblaCarousel from 'embla-carousel'
const embla = EmblaCarousel(document.getElementById('embla'))
```

...or inject the minified script [here](https://raw.githubusercontent.com/davidcetinkaya/embla-carousel/master/sandbox/index.js) into your website.

```html
<script src="embla.min.js"></script>
<script>
  const embla = EmblaCarousel(document.getElementById('embla'))
</script>
```

## Usage

Setup your HTML markup...

```html
<div class="embla" id="embla">
  <div class="embla__container">
    <div class="embla__slide">
      ...
    </div>
    <div class="embla__slide">
      ...
    </div>
    <div class="embla__slide">
      ...
    </div>
  </div>
</div>
```

...add some CSS...

```css
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
  will-change: transform;
}
.embla__slide {
  position: relative;
  flex: 0 0 auto;
  width: 100%;
}
```

...initialize the script and pass the element node...

```javascript
import EmblaCarousel from 'embla-carousel'
const embla = EmblaCarousel(document.querySelector('.embla'))
```

...and you're good to go!

## Options

Embla comes with a few optional settings that you can change by passing an object as the second argument. **`Default`** values are:

```javascript
const node = document.getElementById('embla')
const embla = EmblaCarousel(node, {
  align: 'center',
  container: '*',
  draggable: true,
  loop: false,
  mass: 1.5,
  speed: 10,
  startIndex: 0,
  onInit: () => false,
  onSelect: () => false,
})
```

**`align`** (string: 'start' | 'center' | 'end')
Align the slides relative to the carousel viewport.

**`container`** (string: querySelectorString)
The selector to use for the container that holds the slides. Embla will use all immediate children of this node as slides.

**`draggable`** (boolean)  
Allow mouse and touch interactions to move the carousel.

**`loop`** (boolean)  
Determines if the carousel should loop when start or end is reached.

**`mass`** (number)  
Simulates how heavy the carousel is. A higher number will add more wiggle effect.

**`speed`** (number)  
Carousel speed when using buttons to navigate. A higher number will make transitions faster. Pointer events are not affected by this.

**`startIndex`** (number)
Zero based index of the starting slide when carousel mounts.

**`onInit`** (function)
Callback that runs when the carousel has mounted.

**`onSelect`** (function)
Callback that runs when a new slide target has been selected.

## API
