import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Platform, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants';

export interface Props {
  readonly [key: string]: any;
}
export interface ShadowStyle {
  [key: string]: any;
}

export default class Button extends Component<Props> {
  static defaultProps: {
    startColor: string;
    endColor: string;
    start: {x: number; y: number};
    end: {x: number; y: number};
    locations: number[];
    opacity: number;
    color: string;
  };

  constructor(props: Props) {
    super(props);
  }
  render() {
    const shadowStyle: ShadowStyle = Platform.select({
      ios: () => StyleSheet.create({}),
      android: () =>
        StyleSheet.create({
          container: {
            backgroundColor: '#fff',
            elevation: 1,
            borderRadius: 5,
          },
        }),
    })();
    const {
      style,
      gradient,
      startColor,
      endColor,
      start,
      end,
      locations,
      opacity,
      children,
      shadow,
      ...props
    } = this.props;
    const buttonStyles = [styles.button, style];
    if (gradient) {
      return (
        <View style={[shadowStyle.container, buttonStyles]}>
          <TouchableOpacity
            style={buttonStyles}
            activeOpacity={opacity || 0.8}
            {...props}>
            <LinearGradient
              locations={locations}
              colors={[startColor, endColor]}
              style={buttonStyles}
              start={start}
              end={end}>
              {children}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={[shadowStyle.container, buttonStyles]}>
        <TouchableOpacity
          style={[buttonStyles]}
          {...props}
          activeOpacity={opacity || 0.8}>
          {children}
        </TouchableOpacity>
      </View>
    );
  }
}
Button.defaultProps = {
  startColor: theme.colors.primary,
  endColor: theme.colors.secondary,
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: theme.colors.white,
};
const styles = StyleSheet.create({
  button: {
    borderRadius: theme.sizes.radius,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    marginVertical: theme.sizes.padding / 3,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 50,
  },
});
