'use strict';

var g_Audio = engine.registerAudioBuffers(16);
var g_MinAmount = 0;
var g_MaxAmount = 4;
var g_Reduce = 50;
let Direction = false;

function CalculateAverage(LeftChannel, RightChannel) {
	var Average = (LeftChannel + RightChannel) * 0.5;
	return Average;
}

export function update(Value) {
	var Amount = 0;
	for (var i = g_MinAmount; i < g_MaxAmount; ++i) {
		Amount += CalculateAverage(g_Audio.left[i], g_Audio.right[i]);
	}
	if (g_Reduce != 0) {
		if (Direction) {
			if (Value < Amount) {
				Value -= Amount / g_Reduce;
			} else {
				Value += Amount * g_Reduce;
			}
		} else {
			if (Value < Amount) {
				Value += Amount / g_Reduce;
			} else {
				Value -= Amount * g_Reduce;
			}
		}
	} else {
		if (Direction) {
			if (Value < Amount) {
				Value -= Amount;
			} else {
				Value += Amount;
			}
		} else {
			if (Value < Amount) {
				Value += Amount;
			} else {
				Value -= Amount;
			}
		}
	}
	return Value;
}

export function init(Value) {
	Value = 0;
	return Value;
}

export function applyUserProperties(userProperties) {
	Direction = userProperties.counter_clockwise;
}
