'use strict';

var g_Audio = engine.registerAudioBuffers(16);
var g_MinAmount = 0;
var g_MaxAmount = 16;
var g_Reduce = 5;

function CalculateAverage(LeftChannel, RightChannel) {
	var Average = (LeftChannel + RightChannel) * 0.5;
	return Average;
}

export function update(Value) {
	let Scene = thisScene;
	if (Scene.bloom) {
		Value = 0;
		var Amount = 0;
		for (var i = g_MinAmount; i < g_MaxAmount; ++i) {
			Amount += CalculateAverage(g_Audio.left[i], g_Audio.right[i]);
		}
		Value += Amount / g_Reduce;
	}
	return Value;
}
