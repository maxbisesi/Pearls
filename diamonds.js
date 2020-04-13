window.onload = () => {
    let masterNums = [];
    for(let x = 0; x < 10; x++) {

        let rannums = [];

        for(let i = 0; i < 5; i++) {
            let rn = gsap.utils.random(1,5,1);
            rn = ( x % 2 ) ? rn : (rn+5);
            while(rannums.includes(rn)){
                rn = gsap.utils.random(1,5,1);
                // on even indicies, give 1 - 5 
                rn = ( x % 2 ) ? rn : (rn+5);
            }
            console.log(`x: ${x}, i:${i}, rn:${rn}`);
            rannums.push(rn);
        }

        masterNums.push(rannums);

    }
    console.log(masterNums);

    const master = gsap.timeline({repeat:-1});

    masterNums.forEach( (num,index) => {
        //Each num should be an array:
        const tl = gsap.timeline();

        // define the time line for these 7 diamonds.
        // to make falling continuous create another timeline, play at the end.
        tl
        .call(()=>{console.log(`timeline beginning: ${index}`)})
        .to(`.diamond${num[0]}`,{y:"+=650", duration: "random(1,6,1)", rotation:"random(360,720,10)"})
        .to(`.diamond${num[1]}`,{y:"+=650", duration: "random(1,5,1)", rotation:"random(360,720,10)"},"<.5")
        .to(`.diamond${num[2]}`,{y:"+=650", duration: "random(1,5,1)", rotation:"random(360,720,10)"},"<.5")
        .to(`.diamond${num[3]}`,{y:"+=650", duration: "random(1,5,1)", rotation:"random(360,720,10)"},"<.5")
        .to(`.diamond${num[4]}`,{y:"+=650", duration: "random(1,5,1)", rotation:"random(360,720,10)"},"<.5")
        .set(`.diamond`,{y:-120})
        .call(()=>{console.log(`timeline complete: ${index}`)});
        
        master.add(tl,`Diamond ${index}`,0);
    });
    

    master.timeScale(1.5);
    m2.play();

    document.addEventListener('click', (e) => {
        master.paused( !master.paused() );
    });
}


