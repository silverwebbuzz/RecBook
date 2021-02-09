cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-appcenter-shared.AppCenter",
      "file": "plugins/cordova-plugin-appcenter-shared/www/AppCenter.js",
      "pluginId": "cordova-plugin-appcenter-shared",
      "clobbers": [
        "AppCenter"
      ]
    },
    {
      "id": "cordova-plugin-appcenter-analytics.Analytics",
      "file": "plugins/cordova-plugin-appcenter-analytics/www/Analytics.js",
      "pluginId": "cordova-plugin-appcenter-analytics",
      "clobbers": [
        "AppCenter.Analytics"
      ]
    },
    {
      "id": "cordova-plugin-appcenter-crashes.Crashes",
      "file": "plugins/cordova-plugin-appcenter-crashes/www/Crashes.js",
      "pluginId": "cordova-plugin-appcenter-crashes",
      "clobbers": [
        "AppCenter.Crashes"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-mobile-ocr.rectext",
      "file": "plugins/cordova-plugin-mobile-ocr/www/rectext.js",
      "pluginId": "cordova-plugin-mobile-ocr",
      "clobbers": [
        "textocr"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.mainHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
      "pluginId": "cordova-plugin-nativestorage",
      "clobbers": [
        "NativeStorage"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.LocalStorageHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-nativestorage.NativeStorageError",
      "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-tesseract-ocr.Tesseract",
      "file": "plugins/cordova-plugin-tesseract-ocr/www/Tesseract.js",
      "pluginId": "cordova-plugin-tesseract-ocr",
      "clobbers": [
        "Tesseract"
      ]
    },
    {
      "id": "cordova-plugin-tts.tts",
      "file": "plugins/cordova-plugin-tts/www/tts.js",
      "pluginId": "cordova-plugin-tts",
      "clobbers": [
        "TTS"
      ]
    },
    {
      "id": "ionic-plugin-deeplinks.deeplink",
      "file": "plugins/ionic-plugin-deeplinks/www/deeplink.js",
      "pluginId": "ionic-plugin-deeplinks",
      "clobbers": [
        "IonicDeeplink"
      ],
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-appcenter-shared": "0.5.1",
    "cordova-plugin-appcenter-analytics": "0.5.1",
    "cordova-plugin-appcenter-crashes": "0.5.1",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "4.1.3",
    "cordova-plugin-mobile-ocr": "3.1.1",
    "cordova-plugin-nativestorage": "2.3.2",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-tesseract-ocr": "0.0.3",
    "cordova-plugin-tts": "0.2.3",
    "cordova-plugin-whitelist": "1.3.4",
    "ionic-plugin-deeplinks": "1.0.20"
  };
});