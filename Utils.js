// functions for anyone to copy+paste

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

function ShowLayers() {
	var Layers = thisScene.enumerateLayers();
	for (var i = 0; i < thisScene.getLayerCount(); ++i) {
		var Layer = Layers[i]
		console.log(i.toString() + ": " + Layer.name);
	}
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
