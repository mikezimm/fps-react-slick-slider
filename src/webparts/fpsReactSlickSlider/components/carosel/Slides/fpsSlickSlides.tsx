
import * as React from 'react';

require ('./fpsSlickSlideStyles.css');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IFPSSlideItem extends Partial<any> {
  Title?: string;
  Description?: string;
  FileRef?: string;
  BannerImageUrl: {
    Description: string;
    Url: string;
  }
 }

export interface IFPSSlideWPProps {
  titleField?: string;        // Default = Title
  descriptionField?: string;  // Default = Description
  hrefField?: string;         // Default = FileRef
  imageUrlField?: string;     // Default = BannerImageUrl.Url
  slideStyles?: React.CSSProperties; // {{ width: '650px', height: '450px' }}
  slideClass?: string; // css class name from parent web part
}

export interface IFPSSlides {
  items: IFPSSlideItem[];
  // currentSlide: number;

  slideProps: IFPSSlideWPProps;
}

export function createReactSlickSlides( props: IFPSSlides ) : JSX.Element[] {

  const { items, } = props; //currentSlide, 
  const { titleField, descriptionField, hrefField, imageUrlField, slideStyles, slideClass } = props.slideProps ;

  const titleProp: string = titleField ? titleField : 'Title';
  const descProp: string = descriptionField ? descriptionField : 'Description';
  const hrefProp: string = hrefField ? hrefField : 'FileRef';

  const slides: JSX.Element[] = items.map( ( item, index ) => {
    // const inOrOut = index === currentSlide ? 'fpsSlideIn' : 'fpsSlideOut';
    const imageLink = imageUrlField ? item[ imageUrlField ] : item.BannerImageUrl ? item.BannerImageUrl.Url.replace( 'tenant', 'mcclickster' ) : '' ;
    const openLink = `${window.location.origin}${item[ hrefProp ]}`;
    return ( <div key={index} onClick={ () => window.open( openLink , '_blank') } className= { `fpsSlideElement ${slideClass}` } style={ slideStyles }>
      { imageLink ? <img src={ imageLink.replace( 'tenant', 'mcclickster' ) } className='fpsSlideImage'/> : null }
      <h3 className='fpsSlideTitle'>{ item[ titleProp ] }</h3>
      <p className='fpsSlideDescription'>{ item[ descProp ] }</p>
    </div>
    )});

  return slides;

}

