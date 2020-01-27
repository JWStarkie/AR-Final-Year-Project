'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
  ViroARTrackingTargets,
  ViroARImageMarker,
} from 'react-viro';


var createReactClass = require('create-react-class');

var HelloWorldSceneAR = createReactClass({
  getInitialState() {
    return {
      text: "Initializing AR..."
    };
  },

  render: function () {
    return (
      <ViroARScene>
        {/* <ViroText text={this.state.text} scale={[.1, .1, .1]} height={1} width={4} position={[0, .2, -1]} style={styles.helloWorldTextStyle} /> */}

        <ViroARImageMarker target={"fordtarget"} >
          <ViroAmbientLight color={"#aaaaaa"} />

          {/* <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} /> */}

          <Viro3DObject
            source={require('./res/arrow.obj')}
            position={[0, .1, 0]}
            scale={[.1, .1, .1]}
            rotation={[90, 0, 0]}
            type="OBJ"
            dragType="FixedDistance" onDrag={() => { }}
          />

        </ViroARImageMarker>

      </ViroARScene>

      // <ViroARScene >
      //   <ViroARImageMarker target={"fordtarget"}>
      //     <ViroText text={"Hello World"} scale={[.2, .2, .2]} position={[0, .1, 0]} rotation={[-90, 0, 0]} style={styles.helloWorldTextStyle} />
      //   </ViroARImageMarker>
      // </ViroARScene >

    );
  },
});

ViroARTrackingTargets.createTargets({
  "fordtarget": {
    source: require('./res/ford-focus.jpg'),
    orientation: "Up",
    physicalWidth: 0.05 // real world width in meters
  }
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;