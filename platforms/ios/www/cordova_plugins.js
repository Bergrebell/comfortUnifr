cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cordovaprogramming.carrier/carrier.js",
        "id": "com.cordovaprogramming.carrier.carrier",
        "clobbers": [
            "carrier"
        ]
    },
    {
        "file": "plugins/com.pushbots.push/www/pushbots.js",
        "id": "com.pushbots.push.PushbotsPlugin",
        "clobbers": [
            "PushbotsPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.cordovaprogramming.carrier": "1.0.2",
    "com.pushbots.push": "1.2.7"
}
// BOTTOM OF METADATA
});