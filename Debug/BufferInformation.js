'use strict';

var g_Audio = engine.registerAudioBuffers(16);

function InEditor() {
	if (engine.isRunningInEditor()) {
		return true;
	}
	return false;
}

function CalculateAverage(LeftChannel, RightChannel) {
	var Average = (LeftChannel + RightChannel) * 0.5;
	return Average;
}

function RoundNumber(Value, Point = undefined) {
	if (Point == undefined) {
		return Math.round(Value);
	}
	var Rounded = Value * Math.pow(10, Point);
	Rounded = Math.round(Rounded);
	return Rounded / Math.pow(10, Point);
}

export function update(Value) {
	Value = ""; // just so it doesn't fucking flip it's shit.
	if (!InEditor()) {
		var Amount = 0;
		var MinAmount = 0;
		var MaxAmount = 16;
		var ValueLength = 6;
		var BufferValueString;
		var StringLength = 12;
		for (var i = MinAmount; i < MaxAmount; ++i) {
			Amount += CalculateAverage(g_Audio.left[i], g_Audio.right[i]);
		}
		var Volume = RoundNumber(Amount * 100).toString();
		var AmountValue = RoundNumber(Amount, ValueLength);
		var AmountValueString = AmountValue.toString();
		while (AmountValueString.length < (ValueLength + 3)) {
			AmountValueString += "0";
		}
		var AmountString = "VOLUME    | " + AmountValueString;
		var BufferInfo;
		var CurrentBuffer;
		var Divider = "-";
		while (Divider.length < (StringLength + ValueLength)) {
			Divider += "-";
		}
		Value += Divider + "---" + "\n";
		Value += AmountString + "\n";
		Value += Divider + "---" + "\n";
		for (var Buffer = 0; Buffer < 16; ++Buffer) {
			var RealBuffer = Buffer + 1;
			var BufferValue = RoundNumber(CalculateAverage(g_Audio.left[Buffer], g_Audio.right[Buffer]), ValueLength);
			BufferValueString = BufferValue.toString();
			while (BufferValueString.length < (ValueLength + 3)) {
				BufferValueString += "0";
			}
			if (RealBuffer >= 10) {
				CurrentBuffer = "BUFFER " + RealBuffer.toString();
			} else {
				CurrentBuffer = "BUFFER  " + RealBuffer.toString();
			}
			BufferInfo = CurrentBuffer + " | " + BufferValueString;
			Value += BufferInfo + "\n";
		}
		Value += Divider + "---" + "\n";
	}
	return Value;
}
