/*Here lies javascript*/

var controller = new ScrollMagic.Controller();

var welcomePin = new ScrollMagic.Scene({
    triggerElement: '#welcomeSpace',
    triggerHook: 0,
    duration: '60%'
  })
  .setPin('#welcome')
    .addTo(controller);


var sectionPin2 = new ScrollMagic.Scene({
    triggerElement: '#section-2',
        triggerHook: 0,
        duration: '90%'
    })
    .setPin('#section-2')
    .addTo(controller);




    var info1 = new ScrollMagic.Scene({
        triggerElement: '#infoDiv1',
        triggerHook: .7,
        })
        .setClassToggle('#infoDiv1', 'scroll-anim')
        .addTo(controller);

    var info2 = new ScrollMagic.Scene({
        triggerElement: '#infoDiv2',
        triggerHook: .7,
        })
        .setClassToggle('#infoDiv2', 'scroll-anim')
        .addTo(controller);

    var info3 = new ScrollMagic.Scene({
        triggerElement: '#infoDiv3',
        triggerHook: .7,
        })
        .setClassToggle('#infoDiv3', 'scroll-anim')
        .addTo(controller);
