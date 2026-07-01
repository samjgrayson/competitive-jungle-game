gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDGrassObjects1= [];
gdjs.IntroCode.GDGrassObjects2= [];
gdjs.IntroCode.GDPlayerObjects1= [];
gdjs.IntroCode.GDPlayerObjects2= [];
gdjs.IntroCode.GDHutObjects1= [];
gdjs.IntroCode.GDHutObjects2= [];
gdjs.IntroCode.GDTreeObjects1= [];
gdjs.IntroCode.GDTreeObjects2= [];
gdjs.IntroCode.GDFruitObjects1= [];
gdjs.IntroCode.GDFruitObjects2= [];
gdjs.IntroCode.GDRockObjects1= [];
gdjs.IntroCode.GDRockObjects2= [];
gdjs.IntroCode.GDEnemy_9595hutObjects1= [];
gdjs.IntroCode.GDEnemy_9595hutObjects2= [];
gdjs.IntroCode.GDThis_9595is_9595youObjects1= [];
gdjs.IntroCode.GDThis_9595is_9595youObjects2= [];
gdjs.IntroCode.GDNext_9595buttonObjects1= [];
gdjs.IntroCode.GDNext_9595buttonObjects2= [];
gdjs.IntroCode.GDSkip_9595buttonObjects1= [];
gdjs.IntroCode.GDSkip_9595buttonObjects2= [];
gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1= [];
gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects2= [];
gdjs.IntroCode.GDMultiple_9595shakesObjects1= [];
gdjs.IntroCode.GDMultiple_9595shakesObjects2= [];
gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1= [];
gdjs.IntroCode.GDTo_9595generate_9595fruitObjects2= [];
gdjs.IntroCode.GDNavigateObjects1= [];
gdjs.IntroCode.GDNavigateObjects2= [];
gdjs.IntroCode.GDBewareObjects1= [];
gdjs.IntroCode.GDBewareObjects2= [];
gdjs.IntroCode.GDEnemyObjects1= [];
gdjs.IntroCode.GDEnemyObjects2= [];
gdjs.IntroCode.GDRestartObjects1= [];
gdjs.IntroCode.GDRestartObjects2= [];
gdjs.IntroCode.GDGood_9595luckObjects1= [];
gdjs.IntroCode.GDGood_9595luckObjects2= [];
gdjs.IntroCode.GDAttackerObjects1= [];
gdjs.IntroCode.GDAttackerObjects2= [];
gdjs.IntroCode.GDThiefObjects1= [];
gdjs.IntroCode.GDThiefObjects2= [];
gdjs.IntroCode.GDFreeriderObjects1= [];
gdjs.IntroCode.GDFreeriderObjects2= [];
gdjs.IntroCode.GDButton_9595noteObjects1= [];
gdjs.IntroCode.GDButton_9595noteObjects2= [];
gdjs.IntroCode.GDStun_9595and_9595stealObjects1= [];
gdjs.IntroCode.GDStun_9595and_9595stealObjects2= [];
gdjs.IntroCode.GDHut_9595msgObjects1= [];
gdjs.IntroCode.GDHut_9595msgObjects2= [];
gdjs.IntroCode.GDArrow_9595longerObjects1= [];
gdjs.IntroCode.GDArrow_9595longerObjects2= [];
gdjs.IntroCode.GDArrow_9595shorterObjects1= [];
gdjs.IntroCode.GDArrow_9595shorterObjects2= [];
gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1= [];
gdjs.IntroCode.GDArrow_9595shorter_9595rObjects2= [];


gdjs.IntroCode.userFunc0xba5c18 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
const params = new URLSearchParams(window.location.search);
const gv = runtimeScene.getGame().getVariables();
gv.get("rid").setString(params.get("rid") || "");
gv.get("cond").setString(params.get("cond") || "");
gv.get("pid").setString(params.get("pid") || "");
};
gdjs.IntroCode.userFunc0xa2e630 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
// Helper to send an in-game event to Qualtrics
window.gdSend = function(name, value, meta) {
  if (!window.parent) return;
  window.parent.postMessage({
    type: "gdev_event",
    name: name,              // short event name (e.g., "shake_tree")
    value: value ?? 1,        // numeric value (e.g., apples gained)
    meta: meta || {},         // extra details (e.g., { tree:"north" })
    t: Date.now()
  }, "*");
};

// Helper to mark the game complete and send a summary
window.gdComplete = function(summary) {
  if (!window.parent) return;
  window.parent.postMessage({
    type: "gdev_status",
    status: "complete",
    summary: summary || {},   // totals from the game
    t: Date.now()
  }, "*");
};

};
gdjs.IntroCode.userFunc0xcdf4a0 = function GDJSInlineCode(runtimeScene) {
"use strict";
(function () {
  const params = new URLSearchParams(window.location.search);
  let name = params.get("participant_name") || "";
  name = name.trim();

  // Keep Unicode letters, numbers, space, hyphen, apostrophes
  name = name.replace(/[^\p{L}\p{N} \-'\u2019]/gu, "");
  if (name.length > 40) name = name.slice(0, 40);

  // If name is non-empty, prepend a space. Otherwise, leave it blank.
  let displayName = name ? " " + name : "";

  runtimeScene.getGame().getVariables().get("participant_name").setString(displayName);
})();

};
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.userFunc0xba5c18(runtimeScene);

}


{


gdjs.IntroCode.userFunc0xa2e630(runtimeScene);

}


{


gdjs.IntroCode.userFunc0xcdf4a0(runtimeScene);

}


};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Skip_button"), gdjs.IntroCode.GDSkip_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDSkip_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDSkip_9595buttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDSkip_9595buttonObjects1[k] = gdjs.IntroCode.GDSkip_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDSkip_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Waiting room", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13477668);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12738188);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow_longer"), gdjs.IntroCode.GDArrow_9595longerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Arrow_shorter"), gdjs.IntroCode.GDArrow_9595shorterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Arrow_shorter_r"), gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1);
gdjs.copyArray(runtimeScene.getObjects("Attacker"), gdjs.IntroCode.GDAttackerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Beware"), gdjs.IntroCode.GDBewareObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button_note"), gdjs.IntroCode.GDButton_9595noteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.IntroCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy_hut"), gdjs.IntroCode.GDEnemy_9595hutObjects1);
gdjs.copyArray(runtimeScene.getObjects("Freerider"), gdjs.IntroCode.GDFreeriderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit"), gdjs.IntroCode.GDFruitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Good_luck"), gdjs.IntroCode.GDGood_9595luckObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hut"), gdjs.IntroCode.GDHutObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hut_msg"), gdjs.IntroCode.GDHut_9595msgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiple_shakes"), gdjs.IntroCode.GDMultiple_9595shakesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Navigate"), gdjs.IntroCode.GDNavigateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Next_button"), gdjs.IntroCode.GDNext_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.IntroCode.GDRestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.IntroCode.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skip_button"), gdjs.IntroCode.GDSkip_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stun_and_steal"), gdjs.IntroCode.GDStun_9595and_9595stealObjects1);
gdjs.copyArray(runtimeScene.getObjects("Thief"), gdjs.IntroCode.GDThiefObjects1);
gdjs.copyArray(runtimeScene.getObjects("This_is_you"), gdjs.IntroCode.GDThis_9595is_9595youObjects1);
gdjs.copyArray(runtimeScene.getObjects("To_generate_fruit"), gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree"), gdjs.IntroCode.GDTreeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Your_goal__get_fruit__return_it_to_your_hut"), gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDTreeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTreeObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDFruitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDFruitObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHutObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEnemy_9595hutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEnemy_9595hutObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDRockObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDAttackerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDAttackerObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDThiefObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDThiefObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDFreeriderObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDFreeriderObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDThis_9595is_9595youObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDThis_9595is_9595youObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDMultiple_9595shakesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMultiple_9595shakesObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDStun_9595and_9595stealObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDStun_9595and_9595stealObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDNavigateObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNavigateObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDBewareObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBewareObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHut_9595msgObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHut_9595msgObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEnemyObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDGood_9595luckObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGood_9595luckObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDButton_9595noteObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDButton_9595noteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDNext_9595buttonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNext_9595buttonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDSkip_9595buttonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSkip_9595buttonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDRestartObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDArrow_9595longerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDArrow_9595longerObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDArrow_9595shorterObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDArrow_9595shorterObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDThis_9595is_9595youObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDThis_9595is_9595youObjects1[i].getBehavior("Text").setText("Welcome" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + "!" + gdjs.evtTools.string.newLine() + "This is you");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next_button"), gdjs.IntroCode.GDNext_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDNext_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDNext_9595buttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDNext_9595buttonObjects1[k] = gdjs.IntroCode.GDNext_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDNext_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.IntroCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDRestartObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDRestartObjects1[k] = gdjs.IntroCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow_shorter"), gdjs.IntroCode.GDArrow_9595shorterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button_note"), gdjs.IntroCode.GDButton_9595noteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Next_button"), gdjs.IntroCode.GDNext_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.IntroCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skip_button"), gdjs.IntroCode.GDSkip_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("This_is_you"), gdjs.IntroCode.GDThis_9595is_9595youObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayerObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDArrow_9595shorterObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDArrow_9595shorterObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDThis_9595is_9595youObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDThis_9595is_9595youObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDNext_9595buttonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNext_9595buttonObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDSkip_9595buttonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSkip_9595buttonObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDButton_9595noteObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDButton_9595noteObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow_longer"), gdjs.IntroCode.GDArrow_9595longerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Arrow_shorter"), gdjs.IntroCode.GDArrow_9595shorterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fruit"), gdjs.IntroCode.GDFruitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hut"), gdjs.IntroCode.GDHutObjects1);
gdjs.copyArray(runtimeScene.getObjects("This_is_you"), gdjs.IntroCode.GDThis_9595is_9595youObjects1);
gdjs.copyArray(runtimeScene.getObjects("Your_goal__get_fruit__return_it_to_your_hut"), gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDThis_9595is_9595youObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDThis_9595is_9595youObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDArrow_9595shorterObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDArrow_9595shorterObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDArrow_9595longerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDArrow_9595longerObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDFruitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDFruitObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow_longer"), gdjs.IntroCode.GDArrow_9595longerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Arrow_shorter_r"), gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button_note"), gdjs.IntroCode.GDButton_9595noteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiple_shakes"), gdjs.IntroCode.GDMultiple_9595shakesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.IntroCode.GDRestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("To_generate_fruit"), gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree"), gdjs.IntroCode.GDTreeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Your_goal__get_fruit__return_it_to_your_hut"), gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDArrow_9595longerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDArrow_9595longerObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDButton_9595noteObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDButton_9595noteObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDTreeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTreeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDMultiple_9595shakesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMultiple_9595shakesObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDRestartObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow_shorter_r"), gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1);
gdjs.copyArray(runtimeScene.getObjects("Attacker"), gdjs.IntroCode.GDAttackerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Beware"), gdjs.IntroCode.GDBewareObjects1);
gdjs.copyArray(runtimeScene.getObjects("Freerider"), gdjs.IntroCode.GDFreeriderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiple_shakes"), gdjs.IntroCode.GDMultiple_9595shakesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Thief"), gdjs.IntroCode.GDThiefObjects1);
gdjs.copyArray(runtimeScene.getObjects("To_generate_fruit"), gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDMultiple_9595shakesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMultiple_9595shakesObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDBewareObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBewareObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDAttackerObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDAttackerObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDThiefObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDThiefObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDFreeriderObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDFreeriderObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Beware"), gdjs.IntroCode.GDBewareObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.IntroCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy_hut"), gdjs.IntroCode.GDEnemy_9595hutObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hut_msg"), gdjs.IntroCode.GDHut_9595msgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stun_and_steal"), gdjs.IntroCode.GDStun_9595and_9595stealObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDBewareObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBewareObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDStun_9595and_9595stealObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDStun_9595and_9595stealObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHut_9595msgObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHut_9595msgObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEnemyObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEnemy_9595hutObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEnemy_9595hutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.IntroCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Good_luck"), gdjs.IntroCode.GDGood_9595luckObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hut_msg"), gdjs.IntroCode.GDHut_9595msgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Navigate"), gdjs.IntroCode.GDNavigateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Next_button"), gdjs.IntroCode.GDNext_9595buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.IntroCode.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stun_and_steal"), gdjs.IntroCode.GDStun_9595and_9595stealObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDStun_9595and_9595stealObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDStun_9595and_9595stealObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHut_9595msgObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHut_9595msgObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDEnemyObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDNext_9595buttonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNext_9595buttonObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 0, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDNavigateObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNavigateObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDGood_9595luckObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDGood_9595luckObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
{for(var i = 0, len = gdjs.IntroCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDRockObjects1[i].getBehavior("Tween").addObjectOpacityTween2("tween", 255, "easeInQuad", 0.1, false);
}
}
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDGrassObjects1.length = 0;
gdjs.IntroCode.GDGrassObjects2.length = 0;
gdjs.IntroCode.GDPlayerObjects1.length = 0;
gdjs.IntroCode.GDPlayerObjects2.length = 0;
gdjs.IntroCode.GDHutObjects1.length = 0;
gdjs.IntroCode.GDHutObjects2.length = 0;
gdjs.IntroCode.GDTreeObjects1.length = 0;
gdjs.IntroCode.GDTreeObjects2.length = 0;
gdjs.IntroCode.GDFruitObjects1.length = 0;
gdjs.IntroCode.GDFruitObjects2.length = 0;
gdjs.IntroCode.GDRockObjects1.length = 0;
gdjs.IntroCode.GDRockObjects2.length = 0;
gdjs.IntroCode.GDEnemy_9595hutObjects1.length = 0;
gdjs.IntroCode.GDEnemy_9595hutObjects2.length = 0;
gdjs.IntroCode.GDThis_9595is_9595youObjects1.length = 0;
gdjs.IntroCode.GDThis_9595is_9595youObjects2.length = 0;
gdjs.IntroCode.GDNext_9595buttonObjects1.length = 0;
gdjs.IntroCode.GDNext_9595buttonObjects2.length = 0;
gdjs.IntroCode.GDSkip_9595buttonObjects1.length = 0;
gdjs.IntroCode.GDSkip_9595buttonObjects2.length = 0;
gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1.length = 0;
gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects2.length = 0;
gdjs.IntroCode.GDMultiple_9595shakesObjects1.length = 0;
gdjs.IntroCode.GDMultiple_9595shakesObjects2.length = 0;
gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1.length = 0;
gdjs.IntroCode.GDTo_9595generate_9595fruitObjects2.length = 0;
gdjs.IntroCode.GDNavigateObjects1.length = 0;
gdjs.IntroCode.GDNavigateObjects2.length = 0;
gdjs.IntroCode.GDBewareObjects1.length = 0;
gdjs.IntroCode.GDBewareObjects2.length = 0;
gdjs.IntroCode.GDEnemyObjects1.length = 0;
gdjs.IntroCode.GDEnemyObjects2.length = 0;
gdjs.IntroCode.GDRestartObjects1.length = 0;
gdjs.IntroCode.GDRestartObjects2.length = 0;
gdjs.IntroCode.GDGood_9595luckObjects1.length = 0;
gdjs.IntroCode.GDGood_9595luckObjects2.length = 0;
gdjs.IntroCode.GDAttackerObjects1.length = 0;
gdjs.IntroCode.GDAttackerObjects2.length = 0;
gdjs.IntroCode.GDThiefObjects1.length = 0;
gdjs.IntroCode.GDThiefObjects2.length = 0;
gdjs.IntroCode.GDFreeriderObjects1.length = 0;
gdjs.IntroCode.GDFreeriderObjects2.length = 0;
gdjs.IntroCode.GDButton_9595noteObjects1.length = 0;
gdjs.IntroCode.GDButton_9595noteObjects2.length = 0;
gdjs.IntroCode.GDStun_9595and_9595stealObjects1.length = 0;
gdjs.IntroCode.GDStun_9595and_9595stealObjects2.length = 0;
gdjs.IntroCode.GDHut_9595msgObjects1.length = 0;
gdjs.IntroCode.GDHut_9595msgObjects2.length = 0;
gdjs.IntroCode.GDArrow_9595longerObjects1.length = 0;
gdjs.IntroCode.GDArrow_9595longerObjects2.length = 0;
gdjs.IntroCode.GDArrow_9595shorterObjects1.length = 0;
gdjs.IntroCode.GDArrow_9595shorterObjects2.length = 0;
gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1.length = 0;
gdjs.IntroCode.GDArrow_9595shorter_9595rObjects2.length = 0;

gdjs.IntroCode.eventsList1(runtimeScene);
gdjs.IntroCode.GDGrassObjects1.length = 0;
gdjs.IntroCode.GDGrassObjects2.length = 0;
gdjs.IntroCode.GDPlayerObjects1.length = 0;
gdjs.IntroCode.GDPlayerObjects2.length = 0;
gdjs.IntroCode.GDHutObjects1.length = 0;
gdjs.IntroCode.GDHutObjects2.length = 0;
gdjs.IntroCode.GDTreeObjects1.length = 0;
gdjs.IntroCode.GDTreeObjects2.length = 0;
gdjs.IntroCode.GDFruitObjects1.length = 0;
gdjs.IntroCode.GDFruitObjects2.length = 0;
gdjs.IntroCode.GDRockObjects1.length = 0;
gdjs.IntroCode.GDRockObjects2.length = 0;
gdjs.IntroCode.GDEnemy_9595hutObjects1.length = 0;
gdjs.IntroCode.GDEnemy_9595hutObjects2.length = 0;
gdjs.IntroCode.GDThis_9595is_9595youObjects1.length = 0;
gdjs.IntroCode.GDThis_9595is_9595youObjects2.length = 0;
gdjs.IntroCode.GDNext_9595buttonObjects1.length = 0;
gdjs.IntroCode.GDNext_9595buttonObjects2.length = 0;
gdjs.IntroCode.GDSkip_9595buttonObjects1.length = 0;
gdjs.IntroCode.GDSkip_9595buttonObjects2.length = 0;
gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects1.length = 0;
gdjs.IntroCode.GDYour_9595goal_9595_9595get_9595fruit_9595_9595return_9595it_9595to_9595your_9595hutObjects2.length = 0;
gdjs.IntroCode.GDMultiple_9595shakesObjects1.length = 0;
gdjs.IntroCode.GDMultiple_9595shakesObjects2.length = 0;
gdjs.IntroCode.GDTo_9595generate_9595fruitObjects1.length = 0;
gdjs.IntroCode.GDTo_9595generate_9595fruitObjects2.length = 0;
gdjs.IntroCode.GDNavigateObjects1.length = 0;
gdjs.IntroCode.GDNavigateObjects2.length = 0;
gdjs.IntroCode.GDBewareObjects1.length = 0;
gdjs.IntroCode.GDBewareObjects2.length = 0;
gdjs.IntroCode.GDEnemyObjects1.length = 0;
gdjs.IntroCode.GDEnemyObjects2.length = 0;
gdjs.IntroCode.GDRestartObjects1.length = 0;
gdjs.IntroCode.GDRestartObjects2.length = 0;
gdjs.IntroCode.GDGood_9595luckObjects1.length = 0;
gdjs.IntroCode.GDGood_9595luckObjects2.length = 0;
gdjs.IntroCode.GDAttackerObjects1.length = 0;
gdjs.IntroCode.GDAttackerObjects2.length = 0;
gdjs.IntroCode.GDThiefObjects1.length = 0;
gdjs.IntroCode.GDThiefObjects2.length = 0;
gdjs.IntroCode.GDFreeriderObjects1.length = 0;
gdjs.IntroCode.GDFreeriderObjects2.length = 0;
gdjs.IntroCode.GDButton_9595noteObjects1.length = 0;
gdjs.IntroCode.GDButton_9595noteObjects2.length = 0;
gdjs.IntroCode.GDStun_9595and_9595stealObjects1.length = 0;
gdjs.IntroCode.GDStun_9595and_9595stealObjects2.length = 0;
gdjs.IntroCode.GDHut_9595msgObjects1.length = 0;
gdjs.IntroCode.GDHut_9595msgObjects2.length = 0;
gdjs.IntroCode.GDArrow_9595longerObjects1.length = 0;
gdjs.IntroCode.GDArrow_9595longerObjects2.length = 0;
gdjs.IntroCode.GDArrow_9595shorterObjects1.length = 0;
gdjs.IntroCode.GDArrow_9595shorterObjects2.length = 0;
gdjs.IntroCode.GDArrow_9595shorter_9595rObjects1.length = 0;
gdjs.IntroCode.GDArrow_9595shorter_9595rObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
