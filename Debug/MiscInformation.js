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

function GetVisibleLayers() {
	let Scene = thisScene;
	var Layers = Scene.enumerateLayers();
	var VisibleLayers = 0;
	for (var i = 0; i < Scene.getLayerCount(); ++i) {
		var Layer = Layers[i]
		if (Layer.visible) {
			++VisibleLayers;
		}
	}
	return VisibleLayers;
}

export function update(Value) {
	let Scene = thisScene;
	Value = "";
	if (!InEditor()) {
		Value += "vScreenResolution | " + (engine.screenResolution.x).toString() + "x" + (engine.screenResolution.y).toString() + "\n";
		Value += "fBloomThreshold   | " + RoundNumber(Scene.bloomthreshold, 5).toString() + "\n";
		Value += "vCursorPosition   | " + RoundNumber(input.cursorScreenPosition.x).toString() + ", " + RoundNumber(input.cursorScreenPosition.y).toString() + "\n";
		Value += "fShakeAmplitude   | " + RoundNumber(Scene.camerashakeamplitude, 5).toString() + "\n";
		Value += "fBloomStrength    | " + RoundNumber(Scene.bloomstrength, 5).toString() + "\n";
		Value += "iTotalLayers      | " + (Scene.getLayerCount()).toString() + " : " + (GetVisibleLayers()).toString() + "\n";
		Value += "fShakeSpeed       | " + RoundNumber(Scene.camerashakespeed, 5).toString() + "\n";
	}
	return Value;
}

