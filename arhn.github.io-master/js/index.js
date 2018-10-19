function animateWithRandomNumber(myClass, from, to) {
    TweenLite.fromTo(myClass, Math.floor(Math.random() * 20 + 1), { y: from }, { y: to,
        onComplete: animateWithRandomNumber,
        onCompleteParams: [myClass, from, to],
        ease: Linear.easeNone });
}

var itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"].
forEach(function (e) {return animateWithRandomNumber(e, -1080, 1080);});
var itemsUp = [".light1", ".light2", ".light3", ".light9", ".light10", ".light17"].
forEach(function (e) {return animateWithRandomNumber(e, 1080, -1080);});

// glitch 
var tl = new TimelineMax({repeatDelay:3, repeat:999});
  tl.add( TweenMax.set('.one,.two,.three,.four',{opacity:0}));
    
    tl 
      .to('.one', 0.04, {opacity:1})    
      .to('.two,.four', 0.10, {opacity:1})    
      .to('.three', 0.02, {opacity:1})          
      .to('.title', 0.1, {skewX:10,ease: Power4.easeInOut})
      .to('.title', 0.04, {opacity:0})
      .to('.title', 0.04, {opacity:1})
      .to('.one', 0.04, {x:-1})                
      .to('.one', 0.04, {x:+1})
      .to('.title-top, .title-bottom', 0.04, { className: '+=redShadow'})
      .to('.title', 0.04, {skewX:0,ease: Power4.easeInOut})
      .to('.three', 0.04, {x:-1})
      .to('.three', 0.04, {x:+1})
      .to('.title', 0.04, {opacity:0})
      .to('.title', 0.04, {opacity:1})
      .to('.title-top, .title-bottom', 0.04, { className: '-=redShadow'})
      .to('.two', 0.04, {x:-1})
      .to('.two', 0.04, {x:+1})
      .to('.three', 0.04, {x:+10})
      .to('.title-top, .title-bottom', 0.03,{ className: '+=greenShadow'})
      .to('.four', 0.04, {x:-1})
      .to('.four', 0.04, {x:+1})
      .to('.three', 0.04, {x:1})
      .to('.title-top, .title-bottom', 0.03,{ className: '-=greenShadow'})
      $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });