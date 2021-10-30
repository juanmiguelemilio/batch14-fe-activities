let images = [
    "url('https://res.cloudinary.com/dxo2kyf0x/image/upload/v1635162807/Avion%20School%20Projects/Momentum/Landscape/mads-schmidt-rasmussen-J02NXPdRG6s-unsplash_wsnxdh.jpg')",
    "url('https://res.cloudinary.com/dxo2kyf0x/image/upload/v1635162805/Avion%20School%20Projects/Momentum/Landscape/jonathan-letniak-LJJxRJm5-j4-unsplash_w1bcdu.jpg')",
    "url('https://res.cloudinary.com/dxo2kyf0x/image/upload/v1635162729/Avion%20School%20Projects/Momentum/Landscape/xps-kLfkVa_4aXM-unsplash_myompv.jpg')",
    "url('https://res.cloudinary.com/dxo2kyf0x/image/upload/v1635162717/Avion%20School%20Projects/Momentum/Landscape/soma-laszlo-3xvBQY3gvRU-unsplash_gsre37.jpg')",
    "url('https://res.cloudinary.com/dxo2kyf0x/image/upload/v1635162708/Avion%20School%20Projects/Momentum/Landscape/joseph-menjivar-Utxv9sgYTNY-unsplash_zwfvti.jpg')",
]

let body = document.querySelector('body')

setInterval(timerFC = () => {
    let bg = images[Math.floor(Math.random() * images.length)]
    console.log(bg)

    body.style.background = bg
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
    body.style.backgroundPosition = "center"
},60000);