import React, {Component} from 'react';
import {StyleSheet, Text as NativeText} from 'react-native';
import {theme} from '../constants';

export interface Props {
  readonly [key: string]: any;
}
export default class Text extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {h1, h2, h3, center, white, style, children, ...props} = this.props;
    const textStyle = [
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      center && styles.center,
      white && styles.white,
      style,
    ];
    return (
      <NativeText style={textStyle} {...props}>
        {children}
      </NativeText>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: theme.sizes.h1,
  },
  h2: {
    fontSize: theme.sizes.h2,
  },
  h3: {
    fontSize: theme.sizes.h3,
  },
  center: {
    textAlign: 'center',
  },
  white: {
    color: 'white',
  },
});
