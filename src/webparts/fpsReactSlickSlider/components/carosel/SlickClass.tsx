
import * as React from 'react';
import { SPComponentLoader } from '@microsoft/sp-loader';
import Slider from 'react-slick';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

require ('./slickStyles.css');

export interface ICarouselItem {
  imageSrc: string;
  title: string;
  location: string;
  //Added to make it easier for opening based on parent item link
  href?: string;
  target?: string;
 }

export interface IReactSlickCaroselHookProps {
  items: ICarouselItem[];
}

export interface IReactSlickCaroselHookState {
  current: number;
}

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Based upon this example
 * https://react-slick.neostack.com/docs/example/previous-next-methods
 */
export default class PreviousNextMethods extends React.Component<IReactSlickCaroselHookProps, IReactSlickCaroselHookState> {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private slider: any = null;
  constructor(props: IReactSlickCaroselHookProps) {
    super(props);

    this.state = {
      current: 2,
    };
  }

  public render(): React.ReactElement<IReactSlickCaroselHookProps> {

    const settings = {
      dots: true,    //was false
      dotsClass: ['fpsSlickDots','slick-dots'].join(' '),
      infinite: true,
      arrows: false,
      speed: 500,
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'sliderContainer',
      afterChange: (current: number) => {
        this.setState({
          current: current,
        });
      },
    };

    console.log('render', this.state.current );

    return (
      <div className='fpsSlickContainer'>
        <div className = 'fpsSlickArrow fpsSlickArrowL' onClick={ this.previous.bind(this) }>
          <Icon iconName='ChevronLeft' />
        </div>
        <div>
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div key={1} onClick={ () => window.open( 'http://placekitten.com/g/400/200', '_blank' )} >
              <img src='http://placekitten.com/g/400/200' />
              <div style={{ color: 'black', background: 'lightYellow' }}>
                <div>Sub Text</div>
                <div>Sub Text</div>
              </div>

            </div>
            <div key={2}>
              <img src='https://i.kinja-img.com/gawker-media/image/upload/s---Jp3oE95--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/199zpfi8dig2njpg.jpg' />
            </div>
            <div key={3}>
              <img src='https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?cs=srgb&dl=cold-snow-landscape-858115.jpg&fm=jpg' />
            </div>
            <div key={4}>
              <img src='https://th.bing.com/th/id/OIP.oun_JdJAfeVDKkjdv_X4rgHaE8?pid=ImgDet&rs=1' />
            </div>
          </Slider>
        </div>
        <div className = 'fpsSlickArrow fpsSlickArrowR' onClick={ this.next.bind(this) }>
          <Icon iconName='ChevronRight' />
        </div>
      </div>
    );
  }

  private next(): void {
    this.slider.slickNext();
  }

  private previous(): void {
    this.slider.slickPrev();
  }

}