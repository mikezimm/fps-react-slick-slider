import * as React from 'react';
import styles from './FpsReactSlickSlider.module.scss';
import { IFpsReactSlickSliderProps } from './IFpsReactSlickSliderProps';
import { escape } from '@microsoft/sp-lodash-subset';

import PreviousNextMethods from './carosel/SlickClass';
import SlickHook from './carosel/SlickHook';
import { SampleSitePages } from './MockData/SitePages';

export default class FpsReactSlickSlider extends React.Component<IFpsReactSlickSliderProps, {}> {
  public render(): React.ReactElement<IFpsReactSlickSliderProps> {
    return (
      <div className={`${styles.testFpsTest}`} >
        {/* <PreviousNextMethods 
          items={ [] } /> */}
        <SlickHook 

          items= {SampleSitePages}
          reactSlickWPProps={{
            constainerStyles: {
              width: '550px',
              // height: '300px',
              // background: 'green',
            }
          }}

        />
      </div>
    );
  }
}
