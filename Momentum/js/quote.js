window.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector(`.quote-description`).style.visibility = "hidden"
    document.querySelector(`.btn-add-quote`).style.visibility = "hidden"


        let quote_arr = [
            "Lost time is never found again. —Benjamin Franklin",
            "Action is the foundational key to all success. —Picasso",
            "The secret of getting ahead is getting started. —Mark Twain",
            "One day or day one. You decide.",
            "Work hard in silence, let your success be the noise. —Frank Ocean",
            "Dreams don’t work unless you do. —John C. Maxwell",
            "Make each day your masterpiece. —John Wooden",
            "Wherever you go, go with all your heart. —Confucius",
            "Turn your wounds into wisdom. —Oprah",
            "We can do anything we want to if we stick to it long enough. —Hellen Keller"
        ]
    
        var item = quote_arr[Math.floor(Math.random()*quote_arr.length)]
    
        let span = document.createElement(`span`)
            span.textContent = `"${item}"`
            span.style.cursor = "pointer"
        
        document.querySelector(`.quote`).append(span)

        span.addEventListener(`mouseenter`, () => { span.style.color = "gray"})
        span.addEventListener(`mouseleave`, () => { span.style.color = "white"})

        span.addEventListener(`click`, () => {
            document.querySelector(`.btn-add-quote`).style.visibility = "visible"
            span.remove()
        })

    document.querySelector(`.btn-add-quote`).addEventListener(`click`, () => {

        document.querySelector(`.btn-add-quote`).style.visibility = "hidden"
        document.querySelector(`.quote-description`).style.visibility = "visible"

        document.querySelector(`.quote-description`).addEventListener(`change`, () => {
            
            //INSERTING NEW QUOTE INTO ARRAY
            quote_arr.push(document.querySelector(`.quote-description`).value)
            console.log(quote_arr)
            
            document.querySelector(`.quote-description`).value = ""
            document.querySelector(`.quote-description`).style.visibility = "hidden"

            //DISPLAYING NEW QUOTE INSIDE OF ARRAY
            document.querySelector(`.quote`).textContent = `"${quote_arr[quote_arr.length - 1]}"`
            document.querySelector(`.quote`).style.visibility = "visible"
            document.querySelector(`.btn-change-quote`).style.visibility = 'visible'
            
            
        })

        document.querySelector(`.quote`).addEventListener(`click`, () => {
            document.querySelector(`.quote`).style.visibility = "hidden"
            document.querySelector(`.quote-description`).style.visibility = "visible"
        
        })

        document.querySelector(`.btn-change-quote`).addEventListener(`click`, () => {
            var newItem = quote_arr[Math.floor(Math.random()*quote_arr.length)]
            
            document.querySelector(`.quote`).textContent = `"${newItem}"`

        })

    })


})