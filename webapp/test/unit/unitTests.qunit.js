/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tms/tms_system/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
