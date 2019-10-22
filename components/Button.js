import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BoxShadow} from 'react-native-shadow';
import {theme} from './../constants';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
    const buttonStyles = [styles.button, shadow && styles.shadow, style];
    if (gradient) {
      return (
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
      );
    }
    const shadowOption = {color: '#000'};
    return (
      <BoxShadow setting={shadowOption}>
        <TouchableOpacity
          style={buttonStyles}
          {...props}
          activeOpacity={opacity || 0.8}>
          {children}
        </TouchableOpacity>
      </BoxShadow>
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
    alignItems: 'center',
    width: '100%',
    marginVertical: theme.sizes.padding / 3,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 50,
  },
});
