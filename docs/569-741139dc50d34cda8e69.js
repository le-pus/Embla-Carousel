"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[569],{569:function(n,t,e){e.r(t),t.default='import React from \'react\'\n \ntype DotButtonPropType = {\n  selected: boolean\n  onClick: () => void\n}\n \nexport const DotButton: React.FC<DotButtonPropType> = (props) => {\n  const { selected, onClick } = props\n \n  return (\n    <button\n      className={\'embla__dot\'.concat(selected ? \' embla__dot--selected\' : \'\')}\n      type="button"\n      onClick={onClick}\n    />\n  )\n}\n \ntype PrevNextButtonPropType = {\n  enabled: boolean\n  onClick: () => void\n}\n \nexport const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {\n  const { enabled, onClick } = props\n \n  return (\n    <button\n      className="embla__button embla__button--prev"\n      onClick={onClick}\n      disabled={!enabled}\n    >\n      <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">\n        <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />\n      </svg>\n    </button>\n  )\n}\n \nexport const NextButton: React.FC<PrevNextButtonPropType> = (props) => {\n  const { enabled, onClick } = props\n \n  return (\n    <button\n      className="embla__button embla__button--next"\n      onClick={onClick}\n      disabled={!enabled}\n    >\n      <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">\n        <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />\n      </svg>\n    </button>\n  )\n}\n'}}]);
//# sourceMappingURL=569-741139dc50d34cda8e69.js.map