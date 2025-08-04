/*global QUnit*/

sap.ui.define([
	"tms/tms_system/controller/LoginR.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LoginR Controller");

	QUnit.test("I should test the LoginR controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
