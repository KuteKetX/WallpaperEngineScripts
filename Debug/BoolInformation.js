'use strict';

function InEditor() {
	if (engine.isRunningInEditor()) {
		return true;
	}
	return false;
}

export function update(Value) {
	let Scene = thisScene;
	Value = "";
	Value += "bCursorLeftDown | " + (input.cursorLeftDown).toString() + "\n";
	Value += "bCameraParallax | " + (Scene.cameraparallax).toString() + "\n";
	Value += "bClearEnabled   | " + (Scene.clearenabled).toString() + "\n";
	Value += "bCameraShake    | " + (Scene.camerashake).toString() + "\n";
	Value += "bCameraFade     | " + (Scene.camerafade).toString() + "\n";
	Value += "bInEditor       | " + InEditor().toString() + "\n";
	Value += "bBloom          | " + (Scene.bloom).toString();
	return Value;
}

