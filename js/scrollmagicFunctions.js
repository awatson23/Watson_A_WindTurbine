/*Here lies javascript*/

var controller = new ScrollMagic.Controller();

var welcomePin = new ScrollMagic.Scene({
    triggerElement: '#welcomeSpace',
    triggerHook: 0,
    duration: '90%'
  })
  .setPin('#welcome')
    .addTo(controller);


var sectionPin1 = new ScrollMagic.Scene({
    triggerElement: '#section-1',
        triggerHook: 0,
        duration: '90%'
    })
    .setPin('#section-1')
    .addTo(controller);

var sectionPin2 = new ScrollMagic.Scene({
    triggerElement: '#section-2',
        triggerHook: 0,
        duration: '90%'
    })
    .setPin('#section-2')
    .addTo(controller);

var sectionPin3 = new ScrollMagic.Scene({
    triggerElement: '#section-3',
        triggerHook: 0,
        duration: '90%'
    })
    .setPin('#section-3')
    .addTo(controller);

    var sectionPin4 = new ScrollMagic.Scene({
        triggerElement: '#section-4',
            triggerHook: 0,
            duration: '90%'
        })
        .setPin('#section-4')
        .addTo(controller);

//section 2 image switch

var section2BG = new ScrollMagic.Scene({
    triggerElement: '#section2Bg-1',
    triggerHook: 0,
    })
    .setClassToggle('#section2Bg-1', 'scroll-anim')
    .addTo(controller);
