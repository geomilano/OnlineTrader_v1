function Controller() {
    function sendTracking() {
        var dialog = Ti.UI.createAlertDialog({
            cancel: 1,
            buttonNames: [ "Cancel", "Confirm" ],
            message: "Are you sure want to submit tracking message?",
            title: "Send tracking message"
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel;
            if (1 === e.index) {
                var message = $.trackingMessage.getValue();
                if ("" == message) {
                    createAlert("Submit Error", "Please enter tracking message");
                    return;
                }
                var strForm = "&o_id=" + o_id + "&msg=" + encodeURIComponent(message);
                var url = Ti.API.ADDTRACKING + Ti.App.Properties.getString("session") + strForm;
                var client = Ti.Network.createHTTPClient({
                    onload: function() {
                        alert("Tracking message submitted!");
                        goBack();
                    },
                    onerror: function() {
                        createAlert("Network declined", "Failed to contact with server. Please make sure your device are connected to internet.");
                    },
                    timeout: 5e3
                });
                client.open("GET", url);
                client.send();
            }
        });
        dialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dispatcher_composetracking";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.composetracking_win = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "composetracking_win"
    });
    $.__views.composetracking_win && $.addTopLevelView($.__views.composetracking_win);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header"
    });
    $.__views.composetracking_win.add($.__views.header);
    $.__views.backTitle = Ti.UI.createLabel({
        width: "25%",
        color: "#fff",
        left: "0%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "BACK",
        id: "backTitle"
    });
    $.__views.header.add($.__views.backTitle);
    goBack ? $.__views.backTitle.addEventListener("touchend", goBack) : __defers["$.__views.backTitle!touchend!goBack"] = true;
    $.__views.__alloyId55 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        left: "25%",
        top: "0%",
        id: "__alloyId55"
    });
    $.__views.header.add($.__views.__alloyId55);
    $.__views.appTitle = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: "20dp"
        },
        text: "MESSAGE",
        id: "appTitle"
    });
    $.__views.header.add($.__views.appTitle);
    $.__views.__alloyId56 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        left: "75%",
        top: "0%",
        id: "__alloyId56"
    });
    $.__views.header.add($.__views.__alloyId56);
    $.__views.rightMenu = Ti.UI.createLabel({
        width: "25%",
        color: "#fff",
        left: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "SEND",
        id: "rightMenu",
        mod: "ordertracking"
    });
    $.__views.header.add($.__views.rightMenu);
    sendTracking ? $.__views.rightMenu.addEventListener("click", sendTracking) : __defers["$.__views.rightMenu!click!sendTracking"] = true;
    $.__views.content = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "16dp"
        },
        color: "#e02222",
        layout: "vertical",
        left: "5dp",
        right: "5dp",
        id: "content"
    });
    $.__views.composetracking_win.add($.__views.content);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "ADD TRACKING",
        id: "__alloyId57"
    });
    $.__views.content.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId58"
    });
    $.__views.content.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "90%",
        top: "90",
        id: "__alloyId59"
    });
    $.__views.composetracking_win.add($.__views.__alloyId59);
    $.__views.trackingMessage = Ti.UI.createTextArea({
        id: "trackingMessage",
        suppressReturn: "false",
        borderWidth: "2",
        borderColor: "#bbb",
        borderRadius: "2",
        color: "#888",
        textAlign: "left",
        hintText: "Enter tracking message",
        top: "5",
        width: "90%",
        height: "150"
    });
    $.__views.__alloyId59.add($.__views.trackingMessage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    o_id = Ti.App.Properties.getString("current_oid");
    __defers["$.__views.backTitle!touchend!goBack"] && $.__views.backTitle.addEventListener("touchend", goBack);
    __defers["$.__views.rightMenu!click!sendTracking"] && $.__views.rightMenu.addEventListener("click", sendTracking);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;