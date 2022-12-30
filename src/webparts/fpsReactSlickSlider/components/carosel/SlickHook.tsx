
import * as React from 'react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

require ('./slickStyles.css');

export interface IReactSlickSliderWPProps extends IFPSSlideWPProps {
  constainerStyles?: React.CSSProperties; // {{ width: '650px', height: '450px' }}
  constainerClass?: string; // css class name from parent web part
}

export interface IReactSlickCaroselHookProps {
  items: IFPSSlideItem[];
  reactSlickWPProps?: IReactSlickSliderWPProps;
}

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createReactSlickSlides, IFPSSlideItem, IFPSSlideWPProps } from './Slides/fpsSlickSlides';

/**
 * Based upon this example
 * https://react-slick.neostack.com/docs/example/previous-next-methods
 */
// export default class PreviousNextMethods extends React.Component<IReactSlickCaroselHookProps, IReactSlickCaroselHookState> {
const SlickHook: React.FC<IReactSlickCaroselHookProps> = ( props ) => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { items, reactSlickWPProps } = props;
  const { constainerClass, constainerStyles } = reactSlickWPProps;


  // const { titleField, descriptionField, imageUrlField, hrefField, constainerStyles, constainerClass } = props.reactSlickWPProps;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let slider: any = null;

  const [ currentSlide, setCurrentSlide ] = useState<number>( 0 );

  const next = () : void => {
    slider.slickNext();
  }

  const previous = () : void => {
    slider.slickPrev();
  }

  const settings = {
    dots: false,    //was false
    // dotsClass: ['fpsSlickDots','slick-dots'].join(' '),
    infinite: true,
    arrows: false,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 1,
    // slidesToScroll: 1,
    className: `sliderContainer ${constainerClass}`,
    afterChange: (current: number) => {
      () => setCurrentSlide ( current )
    },
  };

  console.log('render', currentSlide );

  // must have ternary sending {} if no reactSlickWPProps or it crashes when trying to assign those props in the function
  const slides = createReactSlickSlides( { items: items, slideProps: reactSlickWPProps ? reactSlickWPProps : {} } );

  return (
    <div className='fpsSlickContainer'  style={ constainerStyles }>
      <div className = 'fpsSlickArrow fpsSlickArrowL' onClick={ () => previous() }>
        <Icon iconName='ChevronLeft' />
      </div>
      <div>
        <Slider ref={c => ( slider = c)} {...settings}>
          { slides }
        </Slider>
      </div>
      <div className = 'fpsSlickArrow fpsSlickArrowR' onClick={ () => next() }>
        <Icon iconName='ChevronRight' />
      </div>
    </div>
  );
}

export default SlickHook;