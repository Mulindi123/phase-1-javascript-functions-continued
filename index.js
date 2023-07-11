const saturdayFun = function(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
    }

const mondayWork = function(job = 'go to the office') {
        return `This Monday, I will ${job}.`;
    }
    function wrapAdjective(flair ='*'){
        return function(message ='special'){
            return `You are ${flair}${message}${flair}!`;
        }
    }
    const encouragingPromptFunction = wrapAdjective("!!!");
     console.log(encouragingPromptFunction("a dedicated programmer"));