import React from "react"

function Article({title, date ="January 1, 1970", minutes, preview}){
    
    function getEmojis(minutes){

        const numberMinutes = parseInt(minutes)
        const coffeeEmoji = "☕️"
        const bentoEmoji="🍱"

        if (numberMinutes<30){
            const numberOfCoffEmojis = (numberMinutes - (numberMinutes % 5)) /5 
            return(coffeeEmoji.repeat(numberOfCoffEmojis))
        }else if(numberMinutes>30){
            const numberOfEmojis = (numberMinutes - (numberMinutes % 10)) /10 + 1
            return(bentoEmoji.repeat(numberOfEmojis))
        }
    }

    return(
        <article>
            <h3>
               {title} 
            </h3>
            <small>
                {date}
            </small>
            <span> {getEmojis(minutes)} {minutes} minutes to read</span>
            <p>{preview}</p>
        </article>
    )
}

export default Article;