window.onload = () => {

    const layer1TL = gsap.timeline();
    layer1TL.from('.layer-1',{x:"+=200", duration:10});
    layer1TL.play();

    const layer2TL = gsap.timeline();
    layer2TL.from('.layer-2',{x:"+=200", duration:10});
    layer2TL.play();

    const layer3TL = gsap.timeline();
    layer3TL.from('.layer-3',{x:"+=200", duration:10});
    layer3TL.play();

    const layer4TL = gsap.timeline();
    layer4TL.from('.layer-4',{x:"+=200", duration:10});
    layer4TL.play();

    const layer5TL = gsap.timeline();
    layer5TL.from('.layer-5',{x:"+=200", duration:10});
    layer5TL.play();

}