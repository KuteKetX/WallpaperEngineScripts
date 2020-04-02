'use strict';

import * as WEColor from 'WEColor';

export function update(Value) {
	let Scene = thisScene
	if (Scene.camerashakeamplitude > 0 && Scene.camerashakespeed > 0) {
		Value = WEColor.hsv2rgb({ x: (Scene.camerashakeamplitude * 2) % Scene.camerashakespeed, y: 1, z: 1 });
	} else {
		Value = WEColor.hsv2rgb({ x: 1, y: 1, z: 1 });
	}
	return Value;
}
