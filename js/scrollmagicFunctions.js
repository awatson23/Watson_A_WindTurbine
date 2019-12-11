/*Here lies javascript*/

var controller = new ScrollMagic.Controller();

var welcomePin = new ScrollMagic.Scene({
    triggerElement: '#welcomeSpace',
    triggerHook: 0,
    duration: '95%'
  })
  .setPin('#welcome')
    .addTo(controller);


var sectionPin2 = new ScrollMagic.Scene({
    triggerElement: '#section-2',
        triggerHook: 0,
     duration: '99%'
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

        var info4 = new ScrollMagic.Scene({
            triggerElement: '#infoDiv4',
            triggerHook: .7,
            })
            .setClassToggle('#infoDiv4', 'scroll-anim')
            .addTo(controller);

            var info5 = new ScrollMagic.Scene({
                triggerElement: '#infoDiv5',
                triggerHook: .7,
                })
                .setClassToggle('#infoDiv5', 'scroll-anim')
                .addTo(controller);

                var info6 = new ScrollMagic.Scene({
                    triggerElement: '#infoDiv6',
                    triggerHook: .7,
                    })
                    .setClassToggle('#infoDiv6', 'scroll-anim')
                    .addTo(controller);

                    var info7 = new ScrollMagic.Scene({
                        triggerElement: '#infoDiv7',
                        triggerHook: .7,
                        })
                        .setClassToggle('#infoDiv7', 'scroll-anim')
                        .addTo(controller);
