(function(){
    // console.log("hello");

    // let containerElement = document.querySelector("#dogcontainer");

    let feedButton = document.querySelector("#feed")
    let loveButton = document.querySelector("#love")
    let resetButton = document.querySelector("#reset")

    Saphira = {
        foodGivenElement : document.querySelector("#dog1Food"),
        foodGivenCounter : 0,
        loveGivenElement : document.querySelector("#dog1Love"),
        loveGivenCounter : 0,
        
        feed : function(){
            if(Math.random() > .5){
                this.foodGivenCounter++;
            }
        },

        foodGiventoString : function(){
            return this.foodGivenCounter.toString();
        },

        loveGiventoString : function(){
            return this.loveGivenCounter.toString();
        },

        love : function(){
            if(Math.random() > .5){
                this.loveGivenCounter++;
            }
        }
    }
    
    feedButton.addEventListener("click", function(){
        Saphira.feed();
        Saphira.foodGivenElement.innerHTML = Saphira.foodGiventoString();
        Saphira.loveGivenElement.innerHTML = Saphira.loveGiventoString();
    })

    loveButton.addEventListener("click", function(){
        Saphira.love();
        Saphira.foodGivenElement.innerHTML = Xena.foodGiventoString();
        Saphira.loveGivenElement.innerHTML = Xena.loveGiventoString();
    })

    Sandy = {
        foodGivenElement : document.querySelector("#dog2Food"),
        foodGivenCounter : 0,
        loveGivenElement : document.querySelector("#dog2Love"),
        loveGivenCounter : 0,

        feed : function(){
            if(Math.random() > .5){
                this.foodGivenCounter++;
            }
        },

        foodGiventoString : function(){
            return this.foodGivenCounter.toString();
        },

        loveGiventoString : function(){
            return this.loveGivenCounter.toString();
        },

        love : function(){
            if(Math.random() > .5){
                this.loveGivenCounter++;
            }
        }
    }
    
    feedButton.addEventListener("click", function(){
        Sandy.feed();
        Sandy.foodGivenElement.innerHTML = Sandy.foodGiventoString();
        Sandy.loveGivenElement.innerHTML = Sandy.loveGiventoString();
    })

    loveButton.addEventListener("click", function(){
        Sandy.love();
        Sandy.foodGivenElement.innerHTML = Xena.foodGiventoString();
        Sandy.loveGivenElement.innerHTML = Xena.loveGiventoString();
    })
    

    Xena = {
        foodGivenElement : document.querySelector("#dog3Food"),
        foodGivenCounter : 0,
        loveGivenElement : document.querySelector("#dog3Love"),
        loveGivenCounter : 0,

        feed : function(){
            if(Math.random() > .5){
                this.foodGivenCounter++;
            }
        },

        foodGiventoString : function(){
            return this.foodGivenCounter.toString();
        },

        loveGiventoString : function(){
            return this.loveGivenCounter.toString();
        },

        love : function(){
            if(Math.random() > .5){
                this.loveGivenCounter++;
            }
        }
    }
    
    feedButton.addEventListener("click", function(){
        Xena.feed();
        Xena.foodGivenElement.innerHTML = Xena.foodGiventoString();
        Xena.loveGivenElement.innerHTML = Xena.loveGiventoString();
    })

    loveButton.addEventListener("click", function(){
        Xena.love();
        Xena.foodGivenElement.innerHTML = Xena.foodGiventoString();
        Xena.loveGivenElement.innerHTML = Xena.loveGiventoString();
    })

    resetButton.addEventListener("click", function(){
        Saphira.foodGivenCounter = 0
        Saphira.foodGivenElement.innerHTML = 0
        Saphira.loveGivenCounter = 0
        Saphira.loveGivenElement.innerHTML = 0
        Sandy.foodGivenCounter = 0
        Sandy.foodGivenElement.innerHTML = 0
        Sandy.loveGivenCounter = 0
        Sandy.loveGivenElement.innerHTML = 0
        Xena.foodGivenCounter = 0
        Xena.foodGivenElement.innerHTML = 0
        Xena.loveGivenCounter = 0
        Xena.loveGivenElement.innerHTML = 0
        
     })





  })();