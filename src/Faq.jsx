import React from "react";
import Quests from "./Questions";
import CardBott from "./CardBott";



const Faq = () => {
    return (
    <>
    {Quests.map((val) => {
        return (
            <CardBott
             question = {val.question}
             answer =  {val.answer}
            />
        )
    })}
    </>
    )
}

export default Faq;
