'use strict';

import * as WEColor from 'WEColor';

var Audio = engine.registerAudioBuffers(16);
let RainbowSpeed = 1;
let RainbowSaturation = 1;
let RainbowBrightness = 1;

function CalculateAverage(LeftChannel, RightChannel) {
	var Average = (LeftChannel + RightChannel) * 0.5;
	return Average;
}

function GetVolume(MinBuffer, MaxBuffer) {
	var Volume = 0;
	for (var i = MinBuffer; i < MaxBuffer; ++i) {
		Volume += CalculateAverage(Audio.left[i], Audio.right[i]);
	}
	return Volume;
}

function ShakeInfluencedRGB(Value) {
	let Scene = thisScene;
	if (Scene.camerashake) {
		if (Scene.camerashakeamplitude > 0 && Scene.camerashakespeed > 0) {
			Value = WEColor.hsv2rgb({ x: (Scene.camerashakeamplitude * 2) % Scene.camerashakespeed, y: 1, z: 1 });
		} else {
			Value = WEColor.hsv2rgb({ x: 1, y: 1, z: 1 });
		}
	}
	return Value;
}

function AudioInfluencedRGB(Value) {
	let Scene = thisScene;
	if (Scene.camerashakeamplitude > 0 && Scene.camerashakespeed > 0) {
		Value = WEColor.hsv2rgb({ x: (Scene.camerashakeamplitude * 2) % Scene.camerashakespeed, y: 1, z: 1 });
	} else {
		Value = WEColor.hsv2rgb({ x: 1, y: 1, z: 1 });
	}
	return Value;
}

function BasicRGB(Value) {
	Value = WEColor.hsv2rgb({ x: Date.now() / 2000 * RainbowSpeed % 1, y: RainbowSaturation, z: RainbowBrightness });
	return Value;
}
