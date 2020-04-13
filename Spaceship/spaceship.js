// JavaScript Document

$(document).ready(function($) {

    // set some initial opacity
    /*$(".explodecontainer").css({ opacity: 0});*/
    
    //some helper functions
    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
    
    function random(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
    
    function rangeToPercent(number, min, max){
        return ((number - min) / (max - min));
    }
    
    /*  ################ SET UP SPLIT TEXT INSTANCES  ############### 
    ############################################################## */
    
    //SETUP FOR SPLIT TEXT "BREAKTHROUGH"
    mySplitText = new SplitText(".breakthroughTxt h2", {type:"words,chars"}), 
        chars = mySplitText.chars; 
    
    numChars = mySplitText.chars.length
    TweenLite.set(".breakthroughTxt h2", {perspective:900})
    
    //SETUP FOR SPLIT TEXT "EXCITING"
    mySplitText2 = new SplitText(".excitingTxt h2", {type:"words,chars"}), 
        chars2 = mySplitText2.chars; 
    
    numChars2 = mySplitText2.chars.length
    TweenLite.set(".excitingTxt h2", {perspective:900, top:28})
    
    //SETUP FOR SPLIT TEXT "ONE-OF-A-KIND"
    mySplitText3 = new SplitText(".oneTxt h2", {type:"words,chars"}), 
        chars3 = mySplitText3.chars; 
    
    numChars3 = mySplitText3.chars.length
        TweenLite.set(".oneTxt h2", {perspective:900, top:28})
    
    /* ############################################################## */
    
    //center all .myClass elements around their origins
    TweenLite.set(".spaceShip, .scrollingSpace, .thinkTxt h3, .breakthroughTxt h2, .simpleTxt h3, .excitingTxt h2, .foundationTxt h3, .oneTxt h2", {xPercent:-50});//handles all vendor prefixes of translateX(-50%) translateY(-50%)
    
    
    /*  ################  MAIN TIMELINE(s) Animation  ############### 
    ############################################################## */
    var spaceTL = new TimelineMax({repeat:-1}) 
    //set all elements opacity to zero
    spaceTL.to('.scrollingSpace', 3, {backgroundPosition:"0px 0px", ease:Linear.easeNone});
    
        
            
    var shipTL = new TimelineMax({repeat:-1}) 
            
    shipTL.to('.spaceShip', .25, {x:-1, y:-2, yoyo:true, ease:Sine.easeInOut})
            .to('.spaceShip', .25, {x:0, y:6, yoyo:true, ease:Sine.easeInOut})
            .to('.spaceShip', .25, {x:-1, y:-2, yoyo:true, ease:Sine.easeInOut})
            .to('.spaceShip', .25, {x:0, y:-6, yoyo:true, ease:Sine.easeInOut})
            .to('.spaceShip', .25, {x:-1, y:-2, yoyo:true, ease:Sine.easeInOut})
            .to('.spaceShip', .25, {x:0, y:0, yoyo:true, ease:Sine.easeInOut})
            
            
    var textTL = new TimelineMax({repeat:-1}) 
            
    textTL.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:70, x:0, rotationX:180, ease:Back.easeOut}, 0.01, "-=.77")
            .from('.thinkTxt', .25, {css:{opacity:0, y:20}, ease: Sine.easeInOut}, "-=.7")
            //add explode label 1 second after TEXT animation is done
            .add("explode", "+=1")
            .to('.thinkTxt', .25, {css:{opacity:0, y:20}, ease: Sine.easeInOut}, "+=1")
            
            .from('.simpleTxt', .25, {css:{opacity:0, y:20}, ease: Sine.easeInOut})
            .staggerFrom(chars2, 0.8, {opacity:0, scale:0, y:70, x:0, rotationX:180, ease:Back.easeOut}, 0.01, "-=.25")
            //add explode label 1 second after TEXT animation is done
            .add("explode2", "+=1.5")
            .to('.simpleTxt', .25, {css:{opacity:0, y:20}, ease: Sine.easeInOut}, "+=1.5")
            .staggerFrom(chars3, 0.8, {opacity:0, scale:0, y:70, x:0, rotationX:180, ease:Back.easeOut}, 0.01, "-=.25")
            .from('.foundationTxt', .25, {css:{opacity:0, y:20}, ease: Sine.easeInOut}, "-=.7")
            //add explode label 1 second after TEXT animation is done
            .add("explode3", "+=1.5")
            .to('.foundationTxt', .25, {css:{opacity:0, y:20}, ease: Sine.easeInOut}, "+=1.5")
    
            
            
        
            
        
    
    /* ############################################################## */
    //ADD EXPLODE EFFECT FOR "BREAKTHROUGH"
    for(var i = 0; i < numChars; i++){
      textTL.to(mySplitText.chars[i], 1.75, {z:randomNumber(-1500, 2500), x:randomNumber(-280, 280), y:randomNumber(-240, 240), opacity:0, rotation:randomNumber(360, 720), rotationX:randomNumber(-60, 60), rotationY:randomNumber(-60, 60)}, "explode+=" + Math.random()*0.3);
    }
    
    //ADD EXPLODE EFFECT FOR "EXCITING"
    for(var i = 0; i < numChars2; i++){
     textTL.to(mySplitText2.chars[i], 1.75, {z:randomNumber(-1500, 2500), x:randomNumber(-280, 280), y:randomNumber(-240, 240), opacity:0, rotation:randomNumber(360, 720), rotationX:randomNumber(-60, 60), rotationY:randomNumber(-60, 60)}, "explode2+=" + Math.random()*0.3);
    }
    
    
    //ADD EXPLODE EFFECT FOR "ONE OF A KIND"
    for(var i = 0; i < numChars3; i++){
      textTL.to(mySplitText3.chars[i], 1.75, {z:randomNumber(-1500, 2500), x:randomNumber(-280, 280), y:randomNumber(-240, 240), opacity:0, rotation:randomNumber(360, 720), rotationX:randomNumber(-60, 60), rotationY:randomNumber(-60, 60)}, "explode3+=" + Math.random()*0.3);
    }
    
    
    
    /*  ################  CONTROL, PLAY AND REPEAT ALL TIMELINES HERE  ############### 
    ############################################################## */
    /*var masterTimeline = new TimelineMax({repeat:-1});
    
    masterTimeline.add(spaceTL)//starts at time of 0
    .add(shipTL, 0)//starts at 0 seconds
    */
    
    
    
    
    
    });
    