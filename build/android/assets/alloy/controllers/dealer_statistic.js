function Controller() {
    function construct() {
        Ti.App.fireEvent("app:getStatistic", {
            session: Ti.App.Properties.getString("session"),
            url: Ti.API.GETSTATISTIC + Ti.App.Properties.getString("session")
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dealer_statistic";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.dealer_statistic = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "dealer_statistic"
    });
    $.__views.dealer_statistic && $.addTopLevelView($.__views.dealer_statistic);
    $.__views.footer = Alloy.createController("_header", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_statistic
    });
    $.__views.footer.setParent($.__views.dealer_statistic);
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
    $.__views.dealer_statistic.add($.__views.content);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "DEALER - Sales Statistic",
        id: "__alloyId43"
    });
    $.__views.content.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId44"
    });
    $.__views.content.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "70%",
        top: "90",
        id: "__alloyId45"
    });
    $.__views.dealer_statistic.add($.__views.__alloyId45);
    $.__views.salessatisticview = Ti.UI.createWebView({
        id: "salessatisticview",
        disableBounce: "true",
        url: "/html/dealer_statistic.html"
    });
    $.__views.__alloyId45.add($.__views.salessatisticview);
    construct ? $.__views.salessatisticview.addEventListener("load", construct) : __defers["$.__views.salessatisticview!load!construct"] = true;
    $.__views.r_sub_footer = Alloy.createController("_dealer_subfooter", {
        id: "r_sub_footer",
        __parentSymbol: $.__views.dealer_statistic
    });
    $.__views.r_sub_footer.setParent($.__views.dealer_statistic);
    $.__views.footer = Alloy.createController("_dealer_footer", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_statistic
    });
    $.__views.footer.setParent($.__views.dealer_statistic);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var more = $.footer.getView("more");
    more.image = "/images/icons/icon-more-active.png";
    var stat = $.footer.getView("statistic");
    stat.image = "/images/icons/icon-ranking-active.png";
    Ti.App.Properties.setString("module", "dealer_statistic");
    var goToDetails = function(e) {
        var roles = Ti.App.Properties.getString("roles");
        var param = {
            o_id: e.o_id
        };
        var orderdetail = Alloy.createController(roles + "_orderdetail", param).getView();
        orderdetail.open();
    };
    Ti.App.addEventListener("app:viewOrderDetail", goToDetails);
    $.salessatisticview.addEventListener("load", function() {
        Ti.App.fireEvent("app:getStatistic", {
            session: Ti.App.Properties.getString("session"),
            url: Ti.API.GETSTATISTIC + Ti.App.Properties.getString("session")
        });
    });
    $.dealer_statistic.addEventListener("close", function() {
        Ti.App.removeEventListener("app:viewOrderDetail", goToDetails);
    });
    __defers["$.__views.salessatisticview!load!construct"] && $.__views.salessatisticview.addEventListener("load", construct);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;