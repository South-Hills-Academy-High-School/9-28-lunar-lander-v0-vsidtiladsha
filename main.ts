namespace SpriteKind {
    export const map = SpriteKind.create()
    export const rocketengine = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    apple.ay = 25 * Math.sin(angle)
    apple.ax = 25 * Math.cos(angle)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    angle += 15 * (3.14 / 180)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    angle += -15 * (3.14 / 180)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    apple.ay = 20
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    apple.setVelocity(0, -1)
})
let apple: Sprite = null
let angle = 0
angle = 0
tiles.setCurrentTilemap(tilemap`level2`)
effects.starField.startScreenEffect()
apple = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Player)
let engine = sprites.create(img`
    2 a 
    a 2 
    `, SpriteKind.rocketengine)
scene.cameraFollowSprite(apple)
scaling.scaleByPercent(apple, -20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let myMinimap2 = minimap.minimap(MinimapScale.Eighth, 2, 0)
let minimap2 = sprites.create(minimap.getImage(myMinimap2), SpriteKind.map)
apple.ay = 20
game.onUpdate(function () {
    minimap2.destroy()
    myMinimap2 = minimap.minimap(MinimapScale.Eighth, 2, 0)
    minimap.includeSprite(myMinimap2, apple, MinimapSpriteScale.MinimapScale)
    minimap2 = sprites.create(minimap.getImage(myMinimap2), SpriteKind.map)
    minimap2.setPosition(apple.x - 50, apple.y - 30)
    engine.setPosition(apple.x + -8 * Math.cos(angle), apple.y + -8 * Math.sin(angle))
})
