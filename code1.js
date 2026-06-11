gdjs.Waiting_32roomCode = {};
gdjs.Waiting_32roomCode.localVariables = [];
gdjs.Waiting_32roomCode.idToCallbackMap = new Map();
gdjs.Waiting_32roomCode.GDGrassObjects1= [];
gdjs.Waiting_32roomCode.GDGrassObjects2= [];
gdjs.Waiting_32roomCode.GDGrassObjects3= [];
gdjs.Waiting_32roomCode.GDPlayerObjects1= [];
gdjs.Waiting_32roomCode.GDPlayerObjects2= [];
gdjs.Waiting_32roomCode.GDPlayerObjects3= [];
gdjs.Waiting_32roomCode.GDplayerText1Objects1= [];
gdjs.Waiting_32roomCode.GDplayerText1Objects2= [];
gdjs.Waiting_32roomCode.GDplayerText1Objects3= [];
gdjs.Waiting_32roomCode.GDWaitingRoomTitleObjects1= [];
gdjs.Waiting_32roomCode.GDWaitingRoomTitleObjects2= [];
gdjs.Waiting_32roomCode.GDWaitingRoomTitleObjects3= [];
gdjs.Waiting_32roomCode.GDAttackerObjects1= [];
gdjs.Waiting_32roomCode.GDAttackerObjects2= [];
gdjs.Waiting_32roomCode.GDAttackerObjects3= [];
gdjs.Waiting_32roomCode.GDplayerText2Objects1= [];
gdjs.Waiting_32roomCode.GDplayerText2Objects2= [];
gdjs.Waiting_32roomCode.GDplayerText2Objects3= [];
gdjs.Waiting_32roomCode.GDplayerText3Objects1= [];
gdjs.Waiting_32roomCode.GDplayerText3Objects2= [];
gdjs.Waiting_32roomCode.GDplayerText3Objects3= [];
gdjs.Waiting_32roomCode.GDplayerText4Objects1= [];
gdjs.Waiting_32roomCode.GDplayerText4Objects2= [];
gdjs.Waiting_32roomCode.GDplayerText4Objects3= [];
gdjs.Waiting_32roomCode.GDThiefObjects1= [];
gdjs.Waiting_32roomCode.GDThiefObjects2= [];
gdjs.Waiting_32roomCode.GDThiefObjects3= [];
gdjs.Waiting_32roomCode.GDFreeriderObjects1= [];
gdjs.Waiting_32roomCode.GDFreeriderObjects2= [];
gdjs.Waiting_32roomCode.GDFreeriderObjects3= [];
gdjs.Waiting_32roomCode.GDplayer1_9595nameObjects1= [];
gdjs.Waiting_32roomCode.GDplayer1_9595nameObjects2= [];
gdjs.Waiting_32roomCode.GDplayer1_9595nameObjects3= [];
gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1= [];
gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2= [];
gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects3= [];
gdjs.Waiting_32roomCode.GDwhitetileObjects1= [];
gdjs.Waiting_32roomCode.GDwhitetileObjects2= [];
gdjs.Waiting_32roomCode.GDwhitetileObjects3= [];
gdjs.Waiting_32roomCode.GDblacktileObjects1= [];
gdjs.Waiting_32roomCode.GDblacktileObjects2= [];
gdjs.Waiting_32roomCode.GDblacktileObjects3= [];
gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1= [];
gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2= [];
gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects3= [];
gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1= [];
gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2= [];
gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects3= [];
gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects1= [];
gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects2= [];
gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects3= [];
gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects1= [];
gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects2= [];
gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects3= [];
gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects1= [];
gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects2= [];
gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects3= [];
gdjs.Waiting_32roomCode.GDloading_9595bgObjects1= [];
gdjs.Waiting_32roomCode.GDloading_9595bgObjects2= [];
gdjs.Waiting_32roomCode.GDloading_9595bgObjects3= [];
gdjs.Waiting_32roomCode.GDNewSpriteObjects1= [];
gdjs.Waiting_32roomCode.GDNewSpriteObjects2= [];
gdjs.Waiting_32roomCode.GDNewSpriteObjects3= [];
gdjs.Waiting_32roomCode.GDNewShapePainterObjects1= [];
gdjs.Waiting_32roomCode.GDNewShapePainterObjects2= [];
gdjs.Waiting_32roomCode.GDNewShapePainterObjects3= [];
gdjs.Waiting_32roomCode.GDloadingCardObjects1= [];
gdjs.Waiting_32roomCode.GDloadingCardObjects2= [];
gdjs.Waiting_32roomCode.GDloadingCardObjects3= [];
gdjs.Waiting_32roomCode.GDStarting_9595GameObjects1= [];
gdjs.Waiting_32roomCode.GDStarting_9595GameObjects2= [];
gdjs.Waiting_32roomCode.GDStarting_9595GameObjects3= [];
gdjs.Waiting_32roomCode.GDNewSprite2Objects1= [];
gdjs.Waiting_32roomCode.GDNewSprite2Objects2= [];
gdjs.Waiting_32roomCode.GDNewSprite2Objects3= [];
gdjs.Waiting_32roomCode.GDSpinnerObjects1= [];
gdjs.Waiting_32roomCode.GDSpinnerObjects2= [];
gdjs.Waiting_32roomCode.GDSpinnerObjects3= [];


gdjs.Waiting_32roomCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player2_name"), gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2[i].getBehavior("Text").setText("Waiting");
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
gdjs.copyArray(runtimeScene.getObjects("player2_name"), gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2[i].getBehavior("Text").setText("Waiting.");
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
gdjs.copyArray(runtimeScene.getObjects("player2_name"), gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2[i].getBehavior("Text").setText("Waiting..");
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
gdjs.copyArray(runtimeScene.getObjects("player2_name"), gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1[i].getBehavior("Text").setText("Waiting...");
}
}
}

}


};gdjs.Waiting_32roomCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player3_name"), gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2[i].getBehavior("Text").setText("Waiting");
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
gdjs.copyArray(runtimeScene.getObjects("player3_name"), gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2[i].getBehavior("Text").setText("Waiting.");
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
gdjs.copyArray(runtimeScene.getObjects("player3_name"), gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2[i].getBehavior("Text").setText("Waiting..");
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
gdjs.copyArray(runtimeScene.getObjects("player3_name"), gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1[i].getBehavior("Text").setText("Waiting...");
}
}
}

}


};gdjs.Waiting_32roomCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player4_name"), gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2[i].getBehavior("Text").setText("Waiting");
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
gdjs.copyArray(runtimeScene.getObjects("player4_name"), gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2[i].getBehavior("Text").setText("Waiting.");
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
gdjs.copyArray(runtimeScene.getObjects("player4_name"), gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2[i].getBehavior("Text").setText("Waiting..");
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
gdjs.copyArray(runtimeScene.getObjects("player4_name"), gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1[i].getBehavior("Text").setText("Waiting...");
}
}
}

}


};gdjs.Waiting_32roomCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Attacker"), gdjs.Waiting_32roomCode.GDAttackerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDAttackerObjects2.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDAttackerObjects2[i].getY() == 250 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDAttackerObjects2[k] = gdjs.Waiting_32roomCode.GDAttackerObjects2[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDAttackerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDAttackerObjects2 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDAttackerObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDAttackerObjects2[i].getBehavior("Tween").addObjectPositionYTween2("floatUp", 245, "easeInOutSine", 0.4, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Attacker"), gdjs.Waiting_32roomCode.GDAttackerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDAttackerObjects2.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDAttackerObjects2[i].getY() == 245 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDAttackerObjects2[k] = gdjs.Waiting_32roomCode.GDAttackerObjects2[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDAttackerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDAttackerObjects2 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDAttackerObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDAttackerObjects2[i].getBehavior("Tween").addObjectPositionYTween2("floatDown", 255, "easeInOutSine", 0.8, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Attacker"), gdjs.Waiting_32roomCode.GDAttackerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDAttackerObjects1.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDAttackerObjects1[i].getY() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDAttackerObjects1[k] = gdjs.Waiting_32roomCode.GDAttackerObjects1[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDAttackerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDAttackerObjects1 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDAttackerObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDAttackerObjects1[i].getBehavior("Tween").addObjectPositionYTween2("floatBackUp", 245, "easeInOutSine", 0.8, false);
}
}
}

}


};gdjs.Waiting_32roomCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Waiting_32roomCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDPlayerObjects2[i].getY() == 350 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDPlayerObjects2[k] = gdjs.Waiting_32roomCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionYTween2("floatUp_2", 345, "easeInOutSine", 0.4, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Waiting_32roomCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDPlayerObjects2[i].getY() == 345 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDPlayerObjects2[k] = gdjs.Waiting_32roomCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionYTween2("floatDown_2", 355, "easeInOutSine", 0.8, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Waiting_32roomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDPlayerObjects1[i].getY() == 355 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDPlayerObjects1[k] = gdjs.Waiting_32roomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDPlayerObjects1[i].getBehavior("Tween").addObjectPositionYTween2("floatBackUp_2", 345, "easeInOutSine", 0.8, false);
}
}
}

}


};gdjs.Waiting_32roomCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Thief"), gdjs.Waiting_32roomCode.GDThiefObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDThiefObjects2.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDThiefObjects2[i].getY() == 450 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDThiefObjects2[k] = gdjs.Waiting_32roomCode.GDThiefObjects2[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDThiefObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDThiefObjects2 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDThiefObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDThiefObjects2[i].getBehavior("Tween").addObjectPositionYTween2("floatUp_3", 445, "easeInOutSine", 0.4, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Thief"), gdjs.Waiting_32roomCode.GDThiefObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDThiefObjects2.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDThiefObjects2[i].getY() == 445 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDThiefObjects2[k] = gdjs.Waiting_32roomCode.GDThiefObjects2[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDThiefObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDThiefObjects2 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDThiefObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDThiefObjects2[i].getBehavior("Tween").addObjectPositionYTween2("floatDown_3", 455, "easeInOutSine", 0.8, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Thief"), gdjs.Waiting_32roomCode.GDThiefObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDThiefObjects1.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDThiefObjects1[i].getY() == 455 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDThiefObjects1[k] = gdjs.Waiting_32roomCode.GDThiefObjects1[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDThiefObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDThiefObjects1 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDThiefObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDThiefObjects1[i].getBehavior("Tween").addObjectPositionYTween2("floatBackUp_3", 445, "easeInOutSine", 0.8, false);
}
}
}

}


};gdjs.Waiting_32roomCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Freerider"), gdjs.Waiting_32roomCode.GDFreeriderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDFreeriderObjects2.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDFreeriderObjects2[i].getY() == 550 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDFreeriderObjects2[k] = gdjs.Waiting_32roomCode.GDFreeriderObjects2[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDFreeriderObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDFreeriderObjects2 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDFreeriderObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDFreeriderObjects2[i].getBehavior("Tween").addObjectPositionYTween2("floatUp_4", 545, "easeInOutSine", 0.4, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Freerider"), gdjs.Waiting_32roomCode.GDFreeriderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDFreeriderObjects2.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDFreeriderObjects2[i].getY() == 545 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDFreeriderObjects2[k] = gdjs.Waiting_32roomCode.GDFreeriderObjects2[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDFreeriderObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDFreeriderObjects2 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDFreeriderObjects2.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDFreeriderObjects2[i].getBehavior("Tween").addObjectPositionYTween2("floatDown_4", 555, "easeInOutSine", 0.8, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Freerider"), gdjs.Waiting_32roomCode.GDFreeriderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waiting_32roomCode.GDFreeriderObjects1.length;i<l;++i) {
    if ( gdjs.Waiting_32roomCode.GDFreeriderObjects1[i].getY() == 555 ) {
        isConditionTrue_0 = true;
        gdjs.Waiting_32roomCode.GDFreeriderObjects1[k] = gdjs.Waiting_32roomCode.GDFreeriderObjects1[i];
        ++k;
    }
}
gdjs.Waiting_32roomCode.GDFreeriderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Waiting_32roomCode.GDFreeriderObjects1 */
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDFreeriderObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDFreeriderObjects1[i].getBehavior("Tween").addObjectPositionYTween2("floatBackUp_4", 545, "easeInOutSine", 0.8, false);
}
}
}

}


};gdjs.Waiting_32roomCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14272900);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Spinner"), gdjs.Waiting_32roomCode.GDSpinnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Starting_Game"), gdjs.Waiting_32roomCode.GDStarting_9595GameObjects1);
gdjs.copyArray(runtimeScene.getObjects("loadingCard"), gdjs.Waiting_32roomCode.GDloadingCardObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading_bg"), gdjs.Waiting_32roomCode.GDloading_9595bgObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ellipses");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sceneTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDloading_9595bgObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDloading_9595bgObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "easeOutSine", 0.3, false);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDloadingCardObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDloadingCardObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDStarting_9595GameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDStarting_9595GameObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDSpinnerObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDSpinnerObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ellipses") > 0.3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), 4));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ellipses");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Waiting_32roomCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Waiting_32roomCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Waiting_32roomCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sceneTimer") >= 0.8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14288516);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("greytile_p2"), gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player2_name"), gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1[i].getBehavior("Tween").addObjectScaleTween3("popIn", 1, "linear", 0.3, false, true);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.3, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sceneTimer") >= 6.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14291220);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("greytile_p3"), gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player3_name"), gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1[i].getBehavior("Text").setText("freddie");
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1[i].getBehavior("Tween").addObjectScaleTween3("popIn", 1, "linear", 0.3, false, true);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.3, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sceneTimer") >= 18.1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14293764);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("greytile_p4"), gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects1);
gdjs.copyArray(runtimeScene.getObjects("player4_name"), gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1[i].getBehavior("Text").setText("Stephanie");
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1[i].getBehavior("Tween").addObjectScaleTween3("popIn", 1, "linear", 0.3, false, true);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.3, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Waiting_32roomCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Waiting_32roomCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Waiting_32roomCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Waiting_32roomCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sceneTimer") >= 18.1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14308500);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Spinner"), gdjs.Waiting_32roomCode.GDSpinnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Starting_Game"), gdjs.Waiting_32roomCode.GDStarting_9595GameObjects1);
gdjs.copyArray(runtimeScene.getObjects("loadingCard"), gdjs.Waiting_32roomCode.GDloadingCardObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading_bg"), gdjs.Waiting_32roomCode.GDloading_9595bgObjects1);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDloading_9595bgObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDloading_9595bgObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 150, "easeInOutSine", 0.5, false);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDloadingCardObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDloadingCardObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 255, "easeInOutSine", 0.5, false);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDSpinnerObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDSpinnerObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 255, "easeInOutSine", 0.5, false);
}
}
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDStarting_9595GameObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDStarting_9595GameObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 255, "easeInOutSine", 0.5, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Spinner"), gdjs.Waiting_32roomCode.GDSpinnerObjects1);
{for(var i = 0, len = gdjs.Waiting_32roomCode.GDSpinnerObjects1.length ;i < len;++i) {
    gdjs.Waiting_32roomCode.GDSpinnerObjects1[i].rotate(6000 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sceneTimer") >= 22;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CWV", false);
}
}

}


};

gdjs.Waiting_32roomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Waiting_32roomCode.GDGrassObjects1.length = 0;
gdjs.Waiting_32roomCode.GDGrassObjects2.length = 0;
gdjs.Waiting_32roomCode.GDGrassObjects3.length = 0;
gdjs.Waiting_32roomCode.GDPlayerObjects1.length = 0;
gdjs.Waiting_32roomCode.GDPlayerObjects2.length = 0;
gdjs.Waiting_32roomCode.GDPlayerObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayerText1Objects1.length = 0;
gdjs.Waiting_32roomCode.GDplayerText1Objects2.length = 0;
gdjs.Waiting_32roomCode.GDplayerText1Objects3.length = 0;
gdjs.Waiting_32roomCode.GDWaitingRoomTitleObjects1.length = 0;
gdjs.Waiting_32roomCode.GDWaitingRoomTitleObjects2.length = 0;
gdjs.Waiting_32roomCode.GDWaitingRoomTitleObjects3.length = 0;
gdjs.Waiting_32roomCode.GDAttackerObjects1.length = 0;
gdjs.Waiting_32roomCode.GDAttackerObjects2.length = 0;
gdjs.Waiting_32roomCode.GDAttackerObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayerText2Objects1.length = 0;
gdjs.Waiting_32roomCode.GDplayerText2Objects2.length = 0;
gdjs.Waiting_32roomCode.GDplayerText2Objects3.length = 0;
gdjs.Waiting_32roomCode.GDplayerText3Objects1.length = 0;
gdjs.Waiting_32roomCode.GDplayerText3Objects2.length = 0;
gdjs.Waiting_32roomCode.GDplayerText3Objects3.length = 0;
gdjs.Waiting_32roomCode.GDplayerText4Objects1.length = 0;
gdjs.Waiting_32roomCode.GDplayerText4Objects2.length = 0;
gdjs.Waiting_32roomCode.GDplayerText4Objects3.length = 0;
gdjs.Waiting_32roomCode.GDThiefObjects1.length = 0;
gdjs.Waiting_32roomCode.GDThiefObjects2.length = 0;
gdjs.Waiting_32roomCode.GDThiefObjects3.length = 0;
gdjs.Waiting_32roomCode.GDFreeriderObjects1.length = 0;
gdjs.Waiting_32roomCode.GDFreeriderObjects2.length = 0;
gdjs.Waiting_32roomCode.GDFreeriderObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayer1_9595nameObjects1.length = 0;
gdjs.Waiting_32roomCode.GDplayer1_9595nameObjects2.length = 0;
gdjs.Waiting_32roomCode.GDplayer1_9595nameObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1.length = 0;
gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2.length = 0;
gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects3.length = 0;
gdjs.Waiting_32roomCode.GDwhitetileObjects1.length = 0;
gdjs.Waiting_32roomCode.GDwhitetileObjects2.length = 0;
gdjs.Waiting_32roomCode.GDwhitetileObjects3.length = 0;
gdjs.Waiting_32roomCode.GDblacktileObjects1.length = 0;
gdjs.Waiting_32roomCode.GDblacktileObjects2.length = 0;
gdjs.Waiting_32roomCode.GDblacktileObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1.length = 0;
gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2.length = 0;
gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1.length = 0;
gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2.length = 0;
gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects3.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects1.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects2.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects3.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects1.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects2.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects3.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects1.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects2.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects3.length = 0;
gdjs.Waiting_32roomCode.GDloading_9595bgObjects1.length = 0;
gdjs.Waiting_32roomCode.GDloading_9595bgObjects2.length = 0;
gdjs.Waiting_32roomCode.GDloading_9595bgObjects3.length = 0;
gdjs.Waiting_32roomCode.GDNewSpriteObjects1.length = 0;
gdjs.Waiting_32roomCode.GDNewSpriteObjects2.length = 0;
gdjs.Waiting_32roomCode.GDNewSpriteObjects3.length = 0;
gdjs.Waiting_32roomCode.GDNewShapePainterObjects1.length = 0;
gdjs.Waiting_32roomCode.GDNewShapePainterObjects2.length = 0;
gdjs.Waiting_32roomCode.GDNewShapePainterObjects3.length = 0;
gdjs.Waiting_32roomCode.GDloadingCardObjects1.length = 0;
gdjs.Waiting_32roomCode.GDloadingCardObjects2.length = 0;
gdjs.Waiting_32roomCode.GDloadingCardObjects3.length = 0;
gdjs.Waiting_32roomCode.GDStarting_9595GameObjects1.length = 0;
gdjs.Waiting_32roomCode.GDStarting_9595GameObjects2.length = 0;
gdjs.Waiting_32roomCode.GDStarting_9595GameObjects3.length = 0;
gdjs.Waiting_32roomCode.GDNewSprite2Objects1.length = 0;
gdjs.Waiting_32roomCode.GDNewSprite2Objects2.length = 0;
gdjs.Waiting_32roomCode.GDNewSprite2Objects3.length = 0;
gdjs.Waiting_32roomCode.GDSpinnerObjects1.length = 0;
gdjs.Waiting_32roomCode.GDSpinnerObjects2.length = 0;
gdjs.Waiting_32roomCode.GDSpinnerObjects3.length = 0;

gdjs.Waiting_32roomCode.eventsList7(runtimeScene);
gdjs.Waiting_32roomCode.GDGrassObjects1.length = 0;
gdjs.Waiting_32roomCode.GDGrassObjects2.length = 0;
gdjs.Waiting_32roomCode.GDGrassObjects3.length = 0;
gdjs.Waiting_32roomCode.GDPlayerObjects1.length = 0;
gdjs.Waiting_32roomCode.GDPlayerObjects2.length = 0;
gdjs.Waiting_32roomCode.GDPlayerObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayerText1Objects1.length = 0;
gdjs.Waiting_32roomCode.GDplayerText1Objects2.length = 0;
gdjs.Waiting_32roomCode.GDplayerText1Objects3.length = 0;
gdjs.Waiting_32roomCode.GDWaitingRoomTitleObjects1.length = 0;
gdjs.Waiting_32roomCode.GDWaitingRoomTitleObjects2.length = 0;
gdjs.Waiting_32roomCode.GDWaitingRoomTitleObjects3.length = 0;
gdjs.Waiting_32roomCode.GDAttackerObjects1.length = 0;
gdjs.Waiting_32roomCode.GDAttackerObjects2.length = 0;
gdjs.Waiting_32roomCode.GDAttackerObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayerText2Objects1.length = 0;
gdjs.Waiting_32roomCode.GDplayerText2Objects2.length = 0;
gdjs.Waiting_32roomCode.GDplayerText2Objects3.length = 0;
gdjs.Waiting_32roomCode.GDplayerText3Objects1.length = 0;
gdjs.Waiting_32roomCode.GDplayerText3Objects2.length = 0;
gdjs.Waiting_32roomCode.GDplayerText3Objects3.length = 0;
gdjs.Waiting_32roomCode.GDplayerText4Objects1.length = 0;
gdjs.Waiting_32roomCode.GDplayerText4Objects2.length = 0;
gdjs.Waiting_32roomCode.GDplayerText4Objects3.length = 0;
gdjs.Waiting_32roomCode.GDThiefObjects1.length = 0;
gdjs.Waiting_32roomCode.GDThiefObjects2.length = 0;
gdjs.Waiting_32roomCode.GDThiefObjects3.length = 0;
gdjs.Waiting_32roomCode.GDFreeriderObjects1.length = 0;
gdjs.Waiting_32roomCode.GDFreeriderObjects2.length = 0;
gdjs.Waiting_32roomCode.GDFreeriderObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayer1_9595nameObjects1.length = 0;
gdjs.Waiting_32roomCode.GDplayer1_9595nameObjects2.length = 0;
gdjs.Waiting_32roomCode.GDplayer1_9595nameObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects1.length = 0;
gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects2.length = 0;
gdjs.Waiting_32roomCode.GDplayer2_9595nameObjects3.length = 0;
gdjs.Waiting_32roomCode.GDwhitetileObjects1.length = 0;
gdjs.Waiting_32roomCode.GDwhitetileObjects2.length = 0;
gdjs.Waiting_32roomCode.GDwhitetileObjects3.length = 0;
gdjs.Waiting_32roomCode.GDblacktileObjects1.length = 0;
gdjs.Waiting_32roomCode.GDblacktileObjects2.length = 0;
gdjs.Waiting_32roomCode.GDblacktileObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects1.length = 0;
gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects2.length = 0;
gdjs.Waiting_32roomCode.GDplayer3_9595nameObjects3.length = 0;
gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects1.length = 0;
gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects2.length = 0;
gdjs.Waiting_32roomCode.GDplayer4_9595nameObjects3.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects1.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects2.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p2Objects3.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects1.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects2.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p3Objects3.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects1.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects2.length = 0;
gdjs.Waiting_32roomCode.GDgreytile_9595p4Objects3.length = 0;
gdjs.Waiting_32roomCode.GDloading_9595bgObjects1.length = 0;
gdjs.Waiting_32roomCode.GDloading_9595bgObjects2.length = 0;
gdjs.Waiting_32roomCode.GDloading_9595bgObjects3.length = 0;
gdjs.Waiting_32roomCode.GDNewSpriteObjects1.length = 0;
gdjs.Waiting_32roomCode.GDNewSpriteObjects2.length = 0;
gdjs.Waiting_32roomCode.GDNewSpriteObjects3.length = 0;
gdjs.Waiting_32roomCode.GDNewShapePainterObjects1.length = 0;
gdjs.Waiting_32roomCode.GDNewShapePainterObjects2.length = 0;
gdjs.Waiting_32roomCode.GDNewShapePainterObjects3.length = 0;
gdjs.Waiting_32roomCode.GDloadingCardObjects1.length = 0;
gdjs.Waiting_32roomCode.GDloadingCardObjects2.length = 0;
gdjs.Waiting_32roomCode.GDloadingCardObjects3.length = 0;
gdjs.Waiting_32roomCode.GDStarting_9595GameObjects1.length = 0;
gdjs.Waiting_32roomCode.GDStarting_9595GameObjects2.length = 0;
gdjs.Waiting_32roomCode.GDStarting_9595GameObjects3.length = 0;
gdjs.Waiting_32roomCode.GDNewSprite2Objects1.length = 0;
gdjs.Waiting_32roomCode.GDNewSprite2Objects2.length = 0;
gdjs.Waiting_32roomCode.GDNewSprite2Objects3.length = 0;
gdjs.Waiting_32roomCode.GDSpinnerObjects1.length = 0;
gdjs.Waiting_32roomCode.GDSpinnerObjects2.length = 0;
gdjs.Waiting_32roomCode.GDSpinnerObjects3.length = 0;


return;

}

gdjs['Waiting_32roomCode'] = gdjs.Waiting_32roomCode;
