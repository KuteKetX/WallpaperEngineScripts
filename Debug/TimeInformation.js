'use strict';

function InEditor() {
	if (engine.isRunningInEditor()) {
		return true;
	}
	return false;
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
	let Scene = thisScene;
	Value = "";
	if (!InEditor()) {
		let Time = new Date();
		let Hours = ("00" + Time.getHours()).slice(-2);
		let Minutes = ("00" + Time.getMinutes()).slice(-2);
		let Seconds = ("00" + Time.getSeconds()).slice(-2);
		var TimePerFrame = (RoundNumber(engine.frametime, 3).toString()).slice(3, 5);
		if (TimePerFrame.length < 2) {
			TimePerFrame += "0";
		}
		Value += "fTimePerFrame | " + TimePerFrame + "\n";
		Value += "fTimeRunning  | " + RoundNumber(engine.runtime).toString() + "\n";
		Value += "cTimeOfDay    | " + (Hours + ":" + Minutes + ":" + Seconds).toString();
	}
	return Value;
}

