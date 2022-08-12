const _ = require('lodash');
const log4js = require('log4js');
const logger = log4js.getLogger('Main');

log4js.addLayout('json', (config)=>{
	return (logEvent)=>{
			logEvent.caller = logEvent.fileName + ':' + logEvent.lineNumber;
			return JSON.stringify(logEvent) + config.separator;
	};
});

log4js.configure({
	appenders: {
			out: {
					type: 'console',
			},
			task: {
					type: 'dateFile',
					// layout: { type: 'json', separator: ',' },
					filename: 'logs\\task',
					alwaysIncludePattern: true,
					numBackups: 15,
			},
	},
	categories: {
			default: {
					appenders: ['out', 'task'],
					level: 'INFO',
					enableCallStack: true,
			},
	},
});

let mySleep = (t) => {
	return new Promise((resolve, reject) => {
			console.log('mySleep', t);
			setTimeout(() => {
					resolve("ok"); // 正確完成的回傳方法
			}, t)
	});
}

// The destination object
var object = {
'amit': { 'susanta': 20 , 'durgam': 40, 'user':{'name':'abc'} }
};

// The source object
var other = {
'amit': { 'chinmoy': 30 , 'durgam': 50, 'user':{'name':'zzz'} },'foo':[1,2,3],
};

// Using the _.merge() method
let aaa = (_.merge(object, other));
let bbb = {... object, ... other};

logger.info(aaa, bbb);
logger.info('zzz');