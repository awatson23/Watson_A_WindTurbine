/*Here lies javascript*/

var controller = new ScrollMagic.Controller();

var welcomePin = new ScrollMagic.Scene({
    triggerElement: '#welcomeSpace',
    triggerHook: 0,
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