var canvas=new fabric.Canvas("myCanvas");
// creating fabric type canvas
playerx=10;
playery=10;
// default player location
blockwidth=30;
blockheight=30;
// default width and height for the blocks
var playerobjects,blockobject;
function add_player(){
fabric.Image.fromURL("player.png",function(img){
    playerobjects=img;
    playerobjects.scaleToWidth(150);
    playerobjects.scaleToHeight(150);
playerobjects.set({
    top:playery,
    left:playerx
});
canvas.add(playerobjects);

});
}
function add_block(blockimage){
    fabric.Image.fromURL(blockimage,function(img){
        blockobject=blockimage;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
        top:playery,
        left:playerx
    });
    canvas.add(blockobjects);
    
    });
    }


