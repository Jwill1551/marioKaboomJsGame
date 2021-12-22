kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0,0,0,1],
})

// LoadRoot() takes in a link or directory to access other content and images for the game
loadRoot('https://i.imgur.com/')

// This method loads a sprite into the game by attaching the image of the sprite to a variable -> (Variable, ImageLink)
loadSprite('coin', 'wbKxhcd.png')
loadSprite('evil-shroom', 'KP03fR9.png')
loadSprite('brick', 'pogC9x5.png')
loadSprite('block', 'bdrLpi6.png')
loadSprite('mario', 'Wb1qfhK.png')
loadSprite('mushroom','0wMd92p.png')
loadSprite('surprise', )
loadSprite('unboxed', )
loadSprite('pipe-top-left', )
loadSprite('pipe-top-right', )
loadSprite('pipe-bottom-left', )
loadSprite('pipe-bottom-right', )

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')
})

start("game")