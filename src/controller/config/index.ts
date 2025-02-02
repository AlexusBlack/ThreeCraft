import deviceTest from '../../utils/device-test';
import langCN from './lang/zh_cn';
import langEN from './lang/en_us';
import { deepClone } from '../../utils/deep-clone';

const config = {
	seed: null,
	cloudSeed: null,
	treeSeed: null,
	weather: null,
	bag: {
		type: deviceTest(),
		bagItem: [44, 8, 12, 15, 30, 31, 46, 45, 33, 23],
		activeIndex: 0,
		mobile: {
			rotateDegree: 12.5,
			radius: 233,
		},
		bagBox: {
			activeIdx: 0,
		},
	},
	camera: {
		fov: 80,
		camHeight: 2,
	},
	renderer: {
		fog: 0.02,
		stageSize: deviceTest() === 'pc' ? 144 : 64, // stage的边长 196
		// renderDistance: 500,
	},
	controller: {
		thread: 4,
		volume: 80,
		operation: deviceTest(),
		language: `${/^\/en/.test(document.location.pathname) ? 1 : 0}`,
		cheat: false,
		dev: false,
		fps: true,
		crosshair: 'dark',
		opSens: 1,
		opRange: 8,
	},
	state: {
		posX: 0,
		posY: 30,
		posZ: 0,
	},
	log: [],
};

const symConfig = {
	stage: {
		skyBackground: 0x87ceeb,
		maxHeight: 11,
		horizonHeight: -3,
		treeBaseHeight: 0,
		skyHeight: 40,
	},
	actionsScale: {
		walking: 8,
		jump: 9,
		fall: 9,
		cheatFactor: 2,
		moveScale: 1,
		viewScale: 0.5,
		g: 0.04,
	},
	body: {
		//   7_____________6
		//   /| width=0.8 /|
		//  /_|__________/ |height=2
		// 3| |         2| |
		//  | | *    *   | |
		//  | |   /  |   | |
		//  | |      |   | |
		//  | |  1.75|   | |
		//  |4|______|___|_|5
		//  |/_______|___|/length=0.5
		//  0            1
		length: 0.6,
		width: 0.8,
		height: 2,
		eyeButton: 1.75,
		eyeUp: 0.25,
		eyeLeft: 0.4,
		eyeRight: 0.4,
		eyeFront: 0.1,
		eyeBack: 0.4,
	},
	noiseGap: {
		seedGap: 35,
		cloudSeedGap: 2,
		treeSeedGap: 2,
	},
	xbox: {
		viewMoveScale: 2,
	},
	ps: {
		viewMoveScale: 2,
	},
	eps: 0.03,
};

const defaultConfig = {
	seed: null,
	cloudSeed: null,
	treeSeed: null,
	weather: null,
	bag: {
		type: deviceTest(),
		bagItem: [44, 8, 12, 15, 30, 31, 46, 45, 33, 23],
		activeIndex: 0,
		mobile: {
			rotateDegree: 12.5,
			radius: 233,
		},
		bagBox: {
			activeIdx: 0,
		},
	},
	camera: {
		fov: 80,
		camHeight: 2,
	},
	renderer: {
		fog: 0.02,
		stageSize: deviceTest() === 'pc' ? 144 : 64, // stage的边长 196
		// renderDistance: 500,
	},
	controller: {
		thread: 4,
		volume: 80,
		operation: deviceTest(),
		language: `${/^\/en/.test(document.location.pathname) ? 1 : 0}`,
		cheat: false,
		dev: false,
		fps: true,
		crosshair: 'dark',
		opSens: 1,
		opRange: 8,
	},
	state: {
		posX: 0,
		posY: 30,
		posZ: 0,
	},
	log: [],
};

const languages = [langEN, langCN];
const language = deepClone(languages[/^\/cn/.test(document.location.pathname) ? 1 : 0]);

export { config, symConfig, defaultConfig, language, languages };
