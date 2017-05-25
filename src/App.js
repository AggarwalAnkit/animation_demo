import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),             // Initial value for opacity: 0
      scaleAnim: new Animated.Value(0.2),            // Initial value for scale: 0.2
    };
  }

  componentDidMount() {
    this.initAnimation();
  }

  //using Animated.paralel
  // initAnimation() {
  //   Animated.parallel([
  //     Animated.timing(                            // Animate over time
  //       this.state.fadeAnim,                      // The animated value to drive
  //       {
  //         toValue: 1,                             // Animate to opacity: 1, or fully opaque
  //         duration: 1000
  //       }
  //     ),
  //     Animated.spring(
  //       this.state.scaleAnim,                     // The animated value to drive
  //       {
  //         toValue: 1,                             // Animate to size: 1, or fully size
  //         friction: 2,
  //         tension: 20
  //       }
  //     )
  //   ]).start();
  // }

  initAnimation() {
    Animated.timing(                            // Animate over time
      this.state.fadeAnim,                      // The animated value to drive
      {
        toValue: 1,                             // Animate to opacity: 1, or fully opaque
        duration: 1000
      }
    ).start();                                  // Starts the animation

    Animated.spring(
      this.state.scaleAnim,                     // The animated value to drive
      {
        toValue: 1,                             // Animate to size: 1, or fully size
        friction: 2,
        tension: 20
      }
    ).start();                                 // Starts the animation
  }

  render() {
    return (
      <Animated.View                            // Special animatable View
        style={{
          ...this.props.style,
          ...styles.containerStyle,
          opacity: this.state.fadeAnim,          // Bind opacity to animated value
          transform: [{scale: this.state.scaleAnim}]
        }} >

        <Text style={styles.textStyle}>Animate Me</Text>
      </Animated.View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 15,
    color: '#FFFFFF',
    backgroundColor: '#FE5722',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  }
}

export default App;
