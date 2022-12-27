


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BaseLineSlick: any = {

  accessibility: false,
  adaptiveHeight: false,
  // arrows: false,
  autoplay: true,
  autoplaySpeed: 7000,
  centerMode: false,
  centerPadding: 'centerPadding',
  dots: true,    //was false
  dotsClass: ['fpsSlickDots','slick-dots'].join(' '),
  cssEase: 'ease',
  draggable: false, //This makes it so you can drag slide... but it will conflict with onclick events.
  easing: 'linear',
  edgeFriction: 0.35,
  fade: false,
  // infinite: isInfinite,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  rows: 1,
  slide: 'div',
  initialSlide: 0,
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
  swipe: true,
  swipeToSlide: false,  //This didn't seem to make it click and drag.
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  respondTo: 'slider',
  // afterChange: afterChange,
  // beforeChange: beforeChange
}