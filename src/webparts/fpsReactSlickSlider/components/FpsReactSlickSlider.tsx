import * as React from 'react';
import styles from './FpsReactSlickSlider.module.scss';
import { IFpsReactSlickSliderProps } from './IFpsReactSlickSliderProps';
import { escape } from '@microsoft/sp-lodash-subset';

import PreviousNextMethods from './carosel/SlickClass';

export default class FpsReactSlickSlider extends React.Component<IFpsReactSlickSliderProps, {}> {
  public render(): React.ReactElement<IFpsReactSlickSliderProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <div className={`${styles.testFpsTest}`} >
        <PreviousNextMethods 
          items={ [] } />
      </div>
    );
  }
}
