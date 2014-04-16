function Controller() {
    function chooseState() {
        dialog = Titanium.UI.createOptionDialog({
            destructive: 0,
            options: stateArr,
            title: "Please choose your preferred state"
        });
        dialog.addEventListener("click", function(e) {
            $.prefer_state.value = stateArr[e.index];
        });
        dialog.show();
    }
    function doUpdates() {
        var fullname = $.fullname.value;
        var mobile = $.mobile.value;
        var prefer_state = $.prefer_state.value;
        var new_password = $.new_password.value;
        var confirm_password = $.confirm_password.value;
        if ("" == fullname) {
            createAlert("Request Rejected", "Full name cannot be empty.");
            return;
        }
        if ("" == mobile) {
            createAlert("Request Rejected", "Mobile number cannot be empty.");
            return;
        }
        if ("" != new_password && new_password != confirm_password) {
            createAlert("Request Rejected", "Both password must be match.");
            return;
        }
        var url = Ti.API.UPDATEUSER + Ti.App.Properties.getString("session") + "&fullname=" + fullname + "&mobile=" + mobile + "&prefer_state=" + prefer_state + "&password=" + new_password;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                "success" == res.status && createAlert("Profile Updates", "Your changes successfully saved.");
            },
            onerror: function(e) {
                alert(JSON.stringify(e));
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dispatcher_settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.dispatcher_settings = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "dispatcher_settings"
    });
    $.__views.dispatcher_settings && $.addTopLevelView($.__views.dispatcher_settings);
    $.__views.header = Alloy.createController("_header", {
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header",
        __parentSymbol: $.__views.dispatcher_settings
    });
    $.__views.header.setParent($.__views.dispatcher_settings);
    $.__views.content = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "14dp",
            fontFamily: "sans-serif"
        },
        color: "#525252",
        layout: "vertical",
        left: "5dp",
        right: "5dp",
        id: "content"
    });
    $.__views.dispatcher_settings.add($.__views.content);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "SETTINGS",
        id: "__alloyId76"
    });
    $.__views.content.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        bottom: "5",
        id: "__alloyId77"
    });
    $.__views.content.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createScrollView({
        layout: "vertical",
        height: "78%",
        width: "100%",
        id: "__alloyId78"
    });
    $.__views.content.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        top: "5",
        height: "60",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        width: "auto",
        color: "#e02222",
        left: 10,
        text: "Dispatcher name",
        title: "Name",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.fullname = Ti.UI.createTextField({
        height: "35dp",
        left: 10,
        width: "90%",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "fullname",
        value: "",
        hintText: "Enter Fullname"
    });
    $.__views.__alloyId79.add($.__views.fullname);
    $.__views.__alloyId81 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId81"
    });
    $.__views.__alloyId78.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createLabel({
        width: "auto",
        color: "#e02222",
        left: 10,
        text: "Contact Number",
        title: "Contact",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.mobile = Ti.UI.createTextField({
        hintText: "Enter Mobile Number",
        height: "35dp",
        left: 10,
        width: "90%",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "mobile",
        value: ""
    });
    $.__views.__alloyId81.add($.__views.mobile);
    $.__views.__alloyId83 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId83"
    });
    $.__views.__alloyId78.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        width: "auto",
        color: "#e02222",
        left: 10,
        text: "Preferred State",
        title: "Contact",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.prefer_state = Ti.UI.createTextField({
        height: "35dp",
        left: 10,
        width: "90%",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "prefer_state",
        editable: "false",
        hintText: "Choose state"
    });
    $.__views.__alloyId83.add($.__views.prefer_state);
    chooseState ? $.__views.prefer_state.addEventListener("click", chooseState) : __defers["$.__views.prefer_state!click!chooseState"] = true;
    $.__views.__alloyId85 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId85"
    });
    $.__views.__alloyId78.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        width: "auto",
        color: "#e02222",
        left: 10,
        text: "New Password",
        title: "Email",
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.new_password = Ti.UI.createTextField({
        passwordMask: true,
        height: "35dp",
        left: 10,
        width: "90%",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "new_password",
        hintText: "Enter New Password",
        value: ""
    });
    $.__views.__alloyId85.add($.__views.new_password);
    $.__views.__alloyId87 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId87"
    });
    $.__views.__alloyId78.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        width: "auto",
        color: "#e02222",
        left: 10,
        text: "Confirm Password",
        title: "Email",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.confirm_password = Ti.UI.createTextField({
        passwordMask: true,
        height: "35dp",
        left: 10,
        width: "90%",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "confirm_password",
        hintText: "Enter Confirm Password",
        value: ""
    });
    $.__views.__alloyId87.add($.__views.confirm_password);
    $.__views.updateButton = Ti.UI.createButton({
        id: "updateButton",
        backgroundImage: "/images/btn-update.png",
        width: "90%",
        bottom: "10"
    });
    $.__views.__alloyId78.add($.__views.updateButton);
    doUpdates ? $.__views.updateButton.addEventListener("click", doUpdates) : __defers["$.__views.updateButton!click!doUpdates"] = true;
    $.__views.footer = Alloy.createController("_dispatcher_footer", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dispatcher_settings
    });
    $.__views.footer.setParent($.__views.dispatcher_settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var settings = $.footer.getView("settings");
    settings.image = "/images/icons/icon-setting-active.png";
    Ti.App.Properties.setString("module", "dispatcher_settings");
    var url = Ti.API.GETUSER + Ti.App.Properties.getString("session");
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var res = JSON.parse(this.responseText);
            $.fullname.value = res.data.fullname;
            $.mobile.value = res.data.mobile;
            $.prefer_state.value = res.data.userState;
            stateArr = res.data.stateList;
        },
        onerror: function(e) {
            alert(e);
        },
        timeout: 5e3
    });
    client.open("GET", url);
    client.send();
    __defers["$.__views.prefer_state!click!chooseState"] && $.__views.prefer_state.addEventListener("click", chooseState);
    __defers["$.__views.updateButton!click!doUpdates"] && $.__views.updateButton.addEventListener("click", doUpdates);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;