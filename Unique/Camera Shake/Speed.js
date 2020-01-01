'use strict';

var g_Audio = engine.registerAudioBuffers(16);
var g_MinAmount = 0;
var g_MaxAmount = 1;
var g_Reduce = 0.5;

function CalculateAverage(LeftChannel, RightChannel) {
	var Average = (LeftChannel + RightChannel) * 0.5;
	return Average;
}

export function update(Value) {
	let Scene = thisScene;
	if (Scene.camerashake) {
		Value = 0;
		var Amount = 0;
		for (var i = g_MinAmount; i < g_MaxAmount; ++i) {
			Amount += CalculateAverage(g_Audio.left[i], g_Audio.right[i]);
		}
		if (g_Reduce != 0) {
			Value += Amount / g_Reduce;
		} else {
			Value += Amount;
		}
	}
	return Value;
}
