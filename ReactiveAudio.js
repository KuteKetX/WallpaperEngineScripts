'use strict';

var g_Audio = engine.registerAudioBuffers(16);
var g_MinAmount = 5;
var g_MaxAmount = 16;
var g_Reduce = 10;

function CalculateAverage(LeftChannel, RightChannel) {
	var Average = (LeftChannel + RightChannel) * 0.5;
	return Average;
}

export function update(Value) {
	Value = 0;
	var Amount = 0;
	for (var i = g_MinAmount; i < g_MaxAmount; ++i) {
		Amount += CalculateAverage(g_Audio.left[i], g_Audio.right[i]);
	}
	var Volume = Amount;
	Value += Amount / g_Reduce;
	return Value;
}
