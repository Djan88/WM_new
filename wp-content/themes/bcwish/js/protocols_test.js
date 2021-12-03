jQuery(function() {
  var knife,
      knifeDate,
      knifeDateOld,
      knifeDateDiff,
      knife_rate_class,
      knife_rate_class_dotted,
      protocol,
      checkPoints,
      that,
      pointsStatus = true,
      reloadTime = 0,
      reloadTime1 = 0,
      d12Val = 0,
      cur_animation_val = 0,
      protocol_type,
      rotateVal = 0,
      cur_protocol,
      set_protocol,
      count_animation = 1,
      pausedStatus = false,
      endNow,
      onEnd,
      not_ended,
      protocolfromMemory,
      firstTriangleAnimation,
      secondTriangleAnimation,
      thirdTriangleAnimation,
      fourthTriangleAnimation,
      // sound = new buzz.sound( "/sounds/tick", {
      //     formats: [ "ogg", "mp3" ]
      // }),
      // reloadSound = new buzz.sound( "/sounds/reload", {
      //     formats: [ "ogg", "mp3" ]
      // }),
      sound = new Howl({
          urls: ['/sounds/tick.ogg', '/sounds/tick.mp3'],
          autoplay: false,
          loop: false,
          buffer: true
      }),
      reloadSound = new Howl({
          urls: ['/sounds/complete.mp3'],
          autoplay: false,
          loop: false,
          buffer: true
      }),
      alertSound = new Howl({
          urls: ['/sounds/success.mp3'],
          autoplay: false,
          loop: false,
          buffer: true
      }),
      alert_altSound = new Howl({
          urls: ['/sounds/alert_alt.mp3'],
          autoplay: false,
          loop: false,
          buffer: true
      }),
      supportsStorage = function(){
          try {
              return 'localStorage' in window && window['localStorage'] !== null;
          } catch (e) {
              return false;
          }
      };
      // jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');

  //Изменение размера круга
  jQuery('#ring').resizable({
    aspectRatio: 1/1
  });

  endNow = function(){
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    alertSound.play();
    localStorage.setItem('protocol_type', 'human');
    jQuery('.ring').removeClass('in_progress');
    jQuery('.wizard_to_protList').removeClass('hidden');
    jQuery('.wizard_disbledMove').addClass('hidden');

    swal({
      title: "Приостановлено пользователем",
      text: "Что делать дальше?",
      type: "info",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      cancelButtonClass: "btn-success",
      cancelButtonText: "Продолжить",
      confirmButtonText: "К началу",
      closeOnConfirm: false
    },
    function(isConfirm) {
      if (isConfirm) {
        jQuery(location).attr('href','/');
      } else {
        jQuery('.wizard_stop, .zone_ring').addClass('hidden');
        jQuery('.wizard_play, .wizard_starter_alt').fadeIn(500).removeClass('hidden').removeAttr('style');
      }
    })
  }

  onEnd = function(){
    jQuery('.ring').removeClass('in_progress');
    jQuery('.btn-to_endNow').addClass('hidden');
    jQuery('.wizard_stop').css('borderColor', '#1bb1dc');
    jQuery('.wizard_stop_icon').css('display', 'inline-block');
    jQuery('.btn_start').removeAttr('disabled');
    jQuery('.wizard_percent').text('100%');
    rotate_one = 0;
    rotate_two = 0;
    rotate_three = 0;
    rotate_four = 0;
    rotate_lovushka = 0;
    count_animation = 0;
    localStorage.removeItem('paused');
    localStorage.removeItem('pausedPhoto');
    pausedStatus = false;

    // protocolName = localStor
    alertSound.play();
    swal({
      title: "Протокол завершен",
      text: "Что делать дальше?",
      type: "success",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      cancelButtonClass: "btn-success",
      cancelButtonText: "Другой протокол",
      confirmButtonText: "Новый клиент",
      closeOnConfirm: false
    },
    function(isConfirm) {
      if (isConfirm) {
        jQuery(location).attr('href','/');
      } else {
        jQuery('.wizard_main_screen, .wizard_to_protList').addClass('hidden');
        jQuery('.wizard_stop').addClass('hidden');
        jQuery('.wizard_prots, .wizard_operation, .wizard_to_what_way').fadeIn(500).removeClass('hidden');
        jQuery('.wizard_heading').text('Выберите протокол');
      }
    })
  }

  //Dragging elems
  jQuery('.draggable, .ring').draggable({
    snap: false
  });

  // Dragging knife
  jQuery('.marakata').draggable({
    containment: '.wizard_grafic',
    axis: 'y',
    drag: function() {
      // if(jQuery('.btn_graf').hasClass('active')){
        jQuery('.wizard_clean_graf').fadeIn(500).removeClass('hidden');
        knife = jQuery('.marakata').css('top');
        knife = knife.substr(0, knife.length - 2);
        knifeDate = new Date();
        knifeDateDiff = knifeDate - knifeDateOld;
        knife_rate_class = 'knife_rate-'+knife;
        knife_rate_class_dotted = '.knife_rate-'+knife;
        jQuery('.wizard_grafic').append('<div class='+knife_rate_class+'></div>');
        jQuery(knife_rate_class_dotted).addClass('knife_rate').css({
            top: +knife+30+'px',
            width: knifeDateDiff*2+'px'
        });
        knifeDateOld = knifeDate;
      // }
    }
  });

    v3_9 = function(){
      jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
      jQuery('.wizard_percent').text('97%');
      jQuery('.ring').addClass('hidden');
      jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
      reloadTime = 0;
      reloadTime1 = 0;
      d12Val = 0;
      cur_animation_val = 0;
      rotateVal = 0;
      count_animation = 1;
      phaseOne = setInterval(function(){
        if (count_animation <= 344){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          jQuery('.zone_v0, .zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/110% no-repeat',
              zIndex: '1000'
          });
          jQuery('.zone_v-').css({
              background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/120% no-repeat'
          });
          
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          onEnd();
        }
      }, 250);
    }

    v3_8 = function(){
      jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
      jQuery('.wizard_percent').text('92%');
      jQuery('.ring').css('transform', 'rotate(0deg)');
      jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
      reloadTime = 0;
      reloadTime1 = 0;
      d12Val = 0;
      cur_animation_val = 0;
      rotateVal = 0;
      count_animation = 1;
      jQuery('.ring').addClass('hidden');
      jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
  // I
      phaseOne = setInterval(function(){
        if (count_animation <= 88){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'rotate(70deg) scale(1.5)',
              background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
              zIndex: '1000'
          });
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
  // II
          jQuery('.wizard_percent').text('85%');
          phaseOne = setInterval(function(){
            if (count_animation <= 88){
              jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                  color: 'transparent',
                  borderColor: 'transparent',
                  opacity: 0.8,
                  borderWidth: '1px',
                  paddingTop: '4px',
                  transform: 'rotate(20deg) scale(1.5)',
                  background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                  zIndex: '1000'
              });
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                  background: '#fff',
                  color: '#413e66',
                  borderColor: '#413e66',
                  transform: 'rotate(0deg) scale(1)',
                  paddingTop: '2px',
                  zIndex: '2'
              });
  // III
              jQuery('.wizard_percent').text('87%');
              phaseOne = setInterval(function(){
                if (count_animation <= 88){
                  jQuery('.zone_s3, .zone_v4').css({
                      color: 'transparent',
                      borderColor: 'transparent',
                      opacity: 0.8,
                      borderWidth: '1px',
                      paddingTop: '4px',
                      transform: 'rotate(50deg) scale(1.5)',
                      background: 'url(/wp-content/themes/bcwish/img/triangle_water.png) center center/88% no-repeat',
                      zIndex: '1000'
                  });
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.zone_s3, .zone_v4').css({
                      background: '#fff',
                      color: '#413e66',
                      borderColor: '#413e66',
                      transform: 'rotate(0deg) scale(1)',
                      paddingTop: '2px',
                      zIndex: '2'
                  });
  // IV
                  jQuery('.wizard_percent').text('89%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 88){
                      jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                          color: 'transparent',
                          borderColor: 'transparent',
                          opacity: 0.8,
                          borderWidth: '1px',
                          paddingTop: '4px',
                          transform: 'rotate(100deg) scale(1.5)',
                          background: 'url(/wp-content/themes/bcwish/img/triangle_earth.png) center center/88% no-repeat',
                          zIndex: '1000'
                      });
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                          background: '#fff',
                          color: '#413e66',
                          borderColor: '#413e66',
                          transform: 'rotate(0deg) scale(1)',
                          paddingTop: '2px',
                          zIndex: '2'
                      });
                      if (pausedStatus == true) {
                        localStorage.setItem('paused', 'v3_9');
                        endNow()
                      } else {
                        v3_9();
                      } 
                    }
                  }, 250);
                }
              }, 250);
            }
          }, 250);
        }
      }, 250);
    }

  v3_7_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('84%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d3, .zone_d4').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d3, .zone_d4').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_8');
            endNow();
          } else {
            v3_8();

          } 
        }
    }, 1000);
  }

  v3_7_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('79%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d3, .zone_d4').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d3, .zone_d4').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_7_4');
            endNow();
          } else {
            v3_7_4();
          } 
        }
    }, 1000);
  } 

  v3_7_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('74%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d3, .zone_d4').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d3, .zone_d4').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_7_3');
            endNow();
          } else {
            v3_7_3();
          } 
        }
    }, 1000);
  } 

  v3_7_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('69%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d3, .zone_d4').addClass('rot_mo_1');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d3, .zone_d4').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_7_2');
            endNow();
          } else {
            v3_7_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v3_6_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('64%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s3, .zone_s4').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_s4').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_7_1');
            endNow();
          } else {
            v3_7_1();

          } 
        }
    }, 1000);
  }

  v3_6_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('59%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s3, .zone_s4').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_s4').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_6_4');
            endNow();
          } else {
            v3_6_4();
          } 
        }
    }, 1000);
  } 

  v3_6_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('54%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s3, .zone_s4').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_s4').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_6_3');
            endNow();
          } else {
            v3_6_3();
          } 
        }
    }, 1000);
  } 

  v3_6_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('49%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_s3, .zone_s4').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_s4').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_6_2');
            endNow();
          } else {
            v3_6_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v3_5_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('44%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v3, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v3, .zone_v4').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v3, .zone_v4').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_6_1');
            endNow();
          } else {
            v3_6_1();

          } 
        }
    }, 1000);
  }

  v3_5_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('39%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v3, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v3, .zone_v4').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v3, .zone_v4').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_5_4');
            endNow();
          } else {
            v3_5_4();
          } 
        }
    }, 1000);
  } 

  v3_5_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('34%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v3, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v3, .zone_v4').addClass('rot_mo_2');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v3, .zone_v4').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_5_3');
            endNow();
          } else {
            v3_5_3();
          } 
        }
    }, 1000);
  } 

  v3_5_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('29%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v3, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    jQuery('.zone_v1, .zone_v3, .zone_v4').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v3, .zone_v4').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v3_5_2');
            endNow();
          } else {
            v3_5_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v3_4 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('24%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v3, .zone_v4, .zone_cl').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_cl').addClass('rot_90_one').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.zone_v1, .zone_v3, .zone_v4').addClass('rot_90_two').css({
      background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v1, .zone_v3, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v1, .zone_v3, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'}).removeClass('rot_90_two');
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v1, .zone_v3, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v1, .zone_v3, .zone_v4, .zone_cl').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_cl').removeClass('rot_90_one');
        jQuery('.zone_v1, .zone_v3, .zone_v4').removeClass('rot_90_two');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v3_5_1');
          endNow()
        } else {
          v3_5_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v3_3 = function() {
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('16%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v3, .zone_v4, .zone_cl').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_cl').addClass('rot_90_one').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v1, .zone_v3, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v1, .zone_v3, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v1, .zone_v3, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v1, .zone_v3, .zone_v4, .zone_cl').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_cl').removeClass('rot_90_one');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v3_4');
          endNow()
        } else {
          v3_4();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v3_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('8%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d2_, .zone_d3, .zone_d4, .zone_cl').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_cl').addClass('rot_90_one').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2_, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2_, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d2_, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2_, .zone_d3, .zone_d4, .zone_cl').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_cl').removeClass('rot_90_one');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v3_3');
          endNow()
        } else {
          v3_3();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 3 — V 4"');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_s3, .zone_s4, .zone_cl').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_cl').addClass('rot_90_one').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s2_, .zone_s3, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s2_, .zone_s3, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s2_, .zone_s3, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s2_, .zone_s3, .zone_s4, .zone_cl').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_cl').removeClass('rot_90_one');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v3_2');
          endNow()
        } else {
          v3_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v2_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('93%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v0, .zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(0deg) scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/110% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/120% no-repeat'
        });
        
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        onEnd();
      }
    }, 250);
  }

  v2_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('83%');
    jQuery('.ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
// I
    phaseOne = setInterval(function(){
      if (count_animation <= 88){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(70deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
// II
        jQuery('.wizard_percent').text('85%');
        phaseOne = setInterval(function(){
          if (count_animation <= 88){
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                color: 'transparent',
                borderColor: 'transparent',
                opacity: 0.8,
                borderWidth: '1px',
                paddingTop: '4px',
                transform: 'rotate(20deg) scale(1.5)',
                background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                zIndex: '1000'
            });
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
// III
            jQuery('.wizard_percent').text('87%');
            phaseOne = setInterval(function(){
              if (count_animation <= 88){
                jQuery('.zone_s3, .zone_v4').css({
                    color: 'transparent',
                    borderColor: 'transparent',
                    opacity: 0.8,
                    borderWidth: '1px',
                    paddingTop: '4px',
                    transform: 'rotate(50deg) scale(1.5)',
                    background: 'url(/wp-content/themes/bcwish/img/triangle_water.png) center center/88% no-repeat',
                    zIndex: '1000'
                });
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                count_animation = 1;
                jQuery('.zone_s3, .zone_v4').css({
                    background: '#fff',
                    color: '#413e66',
                    borderColor: '#413e66',
                    transform: 'rotate(0deg) scale(1)',
                    paddingTop: '2px',
                    zIndex: '2'
                });
// IV
                jQuery('.wizard_percent').text('89%');
                phaseOne = setInterval(function(){
                  if (count_animation <= 88){
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        color: 'transparent',
                        borderColor: 'transparent',
                        opacity: 0.8,
                        borderWidth: '1px',
                        paddingTop: '4px',
                        transform: 'rotate(100deg) scale(1.5)',
                        background: 'url(/wp-content/themes/bcwish/img/triangle_earth.png) center center/88% no-repeat',
                        zIndex: '1000'
                    });
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    count_animation = 1;
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        background: '#fff',
                        color: '#413e66',
                        borderColor: '#413e66',
                        transform: 'rotate(0deg) scale(1)',
                        paddingTop: '2px',
                        zIndex: '2'
                    });
                    if (pausedStatus == true) {
                      localStorage.setItem('paused', 'v2_7');
                      endNow()
                    } else {
                      v2_7();
                    } 
                  }
                }, 250);
              }
            }, 250);
          }
        }, 250);
      }
    }, 250);
  }

  v2_5_8 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('78%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2_, .zone_v5').addClass('rot_mo_5');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_v5').removeClass('rot_mo_5');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_6');
            endNow();
          } else {
            v2_6();

          } 
        }
    }, 1000);
  }

  v2_5_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('73%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2_, .zone_v5').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_v5').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_5_8');
            endNow();
          } else {
            v2_5_8();
          } 
        }
    }, 1000);
  } 

  v2_5_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('68%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2_, .zone_v5').addClass('rot_mo_1');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_v5').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_5_7');
            endNow();
          } else {
            v2_5_7();
          } 
        }
    }, 1000);
  } 

  v2_5_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    jQuery('.zone_s2_, .zone_v5').addClass('rot_mo_6');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_v5').removeClass('rot_mo_6');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_5_6');
            endNow();
          } else {
            v2_5_6();

          } 
        }
    }, 1000);
  }

  v2_5_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('58%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2_, .zone_v5').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_v5').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_5_5');
            endNow();
          } else {
            v2_5_5();

          } 
        }
    }, 1000);
  }

  v2_5_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('53%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2_, .zone_v5').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_v5').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_5_4');
            endNow();
          } else {
            v2_5_4();
          } 
        }
    }, 1000);
  } 

  v2_5_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('48%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2_, .zone_v5').addClass('rot_mo_2');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_v5').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_5_3');
            endNow();
          } else {
            v2_5_3();
          } 
        }
    }, 1000);
  } 

  v2_5_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('43%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    jQuery('.zone_s2_, .zone_v5').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_v5').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_5_2');
            endNow();
          } else {
            v2_5_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  } 

  v2_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('36%');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)').removeClass('hidden');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d5, .zone_v5, .zone_s5, .zone_s6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d5, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d5, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d5, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v2_5_1');
          endNow()
        } else {
          v2_5_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v2_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('28%');
    jQuery('.ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
// I
    phaseOne = setInterval(function(){
      if (count_animation <= 88){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(70deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
// II
        jQuery('.wizard_percent').text('30%');
        phaseOne = setInterval(function(){
          if (count_animation <= 88){
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                color: 'transparent',
                borderColor: 'transparent',
                opacity: 0.8,
                borderWidth: '1px',
                paddingTop: '4px',
                transform: 'rotate(20deg) scale(1.5)',
                background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                zIndex: '1000'
            });
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
// III
            jQuery('.wizard_percent').text('32%');
            phaseOne = setInterval(function(){
              if (count_animation <= 88){
                jQuery('.zone_s3, .zone_v4').css({
                    color: 'transparent',
                    borderColor: 'transparent',
                    opacity: 0.8,
                    borderWidth: '1px',
                    paddingTop: '4px',
                    transform: 'rotate(50deg) scale(1.5)',
                    background: 'url(/wp-content/themes/bcwish/img/triangle_water.png) center center/88% no-repeat',
                    zIndex: '1000'
                });
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                count_animation = 1;
                jQuery('.zone_s3, .zone_v4').css({
                    background: '#fff',
                    color: '#413e66',
                    borderColor: '#413e66',
                    transform: 'rotate(0deg) scale(1)',
                    paddingTop: '2px',
                    zIndex: '2'
                });
// IV
                jQuery('.wizard_percent').text('34%');
                phaseOne = setInterval(function(){
                  if (count_animation <= 88){
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        color: 'transparent',
                        borderColor: 'transparent',
                        opacity: 0.8,
                        borderWidth: '1px',
                        paddingTop: '4px',
                        transform: 'rotate(100deg) scale(1.5)',
                        background: 'url(/wp-content/themes/bcwish/img/triangle_earth.png) center center/88% no-repeat',
                        zIndex: '1000'
                    });
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    count_animation = 1;
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        background: '#fff',
                        color: '#413e66',
                        borderColor: '#413e66',
                        transform: 'rotate(0deg) scale(1)',
                        paddingTop: '2px',
                        zIndex: '2'
                    });
                    if (pausedStatus == true) {
                      localStorage.setItem('paused', 'v2_4');
                      endNow()
                    } else {
                      v2_4();
                    } 
                  }
                }, 250);
              }
            }, 250);
          }
        }, 250);
      }
    }, 250);
  }

  v2_2_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('23%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_v5').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v5').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_3');
            endNow();
          } else {
            v2_3();

          } 
        }
    }, 1000);
  }

  v2_2_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('18%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_v5').addClass('rot_mo_3');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v5').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_2_4');
            endNow();
          } else {
            v2_2_4();
          } 
        }
    }, 1000);
  } 

  v2_2_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('13%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_v5').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v5').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_2_3');
            endNow();
          } else {
            v2_2_3();
          } 
        }
    }, 1000);
  } 

  v2_2_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('8%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    jQuery('.zone_v2, .zone_v5').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v5').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v2_2_2');
            endNow();
          } else {
            v2_2_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 2 — V 5"');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d2_, .zone_v2, .zone_s2, .zone_s2_').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_d2_, .zone_v2, .zone_s2, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_d2_, .zone_v2, .zone_s2, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d2, .zone_d2_, .zone_v2, .zone_s2, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_d2_, .zone_v2, .zone_s2, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v2_2_1');
          endNow()
        } else {
          v2_2_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  drenag_12 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('92%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 600){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 420 && count_animation <= 440) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 440 && count_animation <= 460) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 460 && count_animation <= 480) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 480 && count_animation <= 500) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 500 && count_animation <= 520) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 520 && count_animation <= 540) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 540 && count_animation <= 560) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 560 && count_animation <= 580) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 580 && count_animation <= 600) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        onEnd();
      }
    }, 250);
  }

  drenag_11 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('80%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 420){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_12');
          endNow()
        } else {
          drenag_12();
          // console.log('continue');
        }
      }
    }, 250);
  }

  drenag_10 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('72%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 600){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 420 && count_animation <= 440) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 440 && count_animation <= 460) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 460 && count_animation <= 480) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 480 && count_animation <= 500) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 500 && count_animation <= 520) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 520 && count_animation <= 540) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 540 && count_animation <= 560) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 560 && count_animation <= 580) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 580 && count_animation <= 600) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_11');
          endNow()
        } else {
          drenag_11();
          // console.log('continue');
        }
      }
    }, 250);
  }
  drenag_9 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('64%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 600){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 420 && count_animation <= 440) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 440 && count_animation <= 460) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 460 && count_animation <= 480) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 480 && count_animation <= 500) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 500 && count_animation <= 520) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 520 && count_animation <= 540) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 540 && count_animation <= 560) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 560 && count_animation <= 580) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 580 && count_animation <= 600) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_10');
          endNow()
        } else {
          drenag_10();
          // console.log('continue');
        }
      }
    }, 250);
  }

  drenag_8 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('56%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 420){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_9');
          endNow()
        } else {
          drenag_9();
          // console.log('continue');
        }
      }
    }, 250);
  }

  drenag_7 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('48%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 600){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 420 && count_animation <= 440) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 440 && count_animation <= 460) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 460 && count_animation <= 480) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 480 && count_animation <= 500) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 500 && count_animation <= 520) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 520 && count_animation <= 540) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 540 && count_animation <= 560) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 560 && count_animation <= 580) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 580 && count_animation <= 600) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_8');
          endNow()
        } else {
          drenag_8();
          // console.log('continue');
        }
      }
    }, 250);
  }
  drenag_6 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('40%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 600){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 420 && count_animation <= 440) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 440 && count_animation <= 460) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 460 && count_animation <= 480) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 480 && count_animation <= 500) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 500 && count_animation <= 520) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 520 && count_animation <= 540) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 540 && count_animation <= 560) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 560 && count_animation <= 580) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 580 && count_animation <= 600) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_7');
          endNow()
        } else {
          drenag_7();
          // console.log('continue');
        }
      }
    }, 250);
  }

  drenag_5 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('32%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 420){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_6');
          endNow()
        } else {
          drenag_6();
          // console.log('continue');
        }
      }
    }, 250);
  }

  drenag_4 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('24%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 600){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 420 && count_animation <= 440) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 440 && count_animation <= 460) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 460 && count_animation <= 480) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 480 && count_animation <= 500) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 500 && count_animation <= 520) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 520 && count_animation <= 540) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 540 && count_animation <= 560) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 560 && count_animation <= 580) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 580 && count_animation <= 600) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_5');
          endNow()
        } else {
          drenag_5();
          // console.log('continue');
        }
      }
    }, 250);
  }
  drenag_3 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('16%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 600){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 420 && count_animation <= 440) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 440 && count_animation <= 460) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 460 && count_animation <= 480) {
          jQuery('.zone_s2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 480 && count_animation <= 500) {
          jQuery('.zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 500 && count_animation <= 520) {
          jQuery('.zone_s3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 520 && count_animation <= 540) {
          jQuery('.zone_s4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 540 && count_animation <= 560) {
          jQuery('.zone_s5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_s6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 560 && count_animation <= 580) {
          jQuery('.zone_s6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 580 && count_animation <= 600) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_4');
          endNow()
        } else {
          drenag_4();
          // console.log('continue');
        }
      }
    }, 250);
  }

  drenag_2 = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('8%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 420){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_v2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_v4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_v5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_3');
          endNow()
        } else {
          drenag_3();
          // console.log('continue');
        }
      }
    }, 250);
  }

  drenag = function(){
    jQuery('.wizard_heading').text('Выполняется "Ресурсный протокол"');
    jQuery('.wizard_percent').text('0%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 600){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'scale(1.5)',
            zIndex: '1000',
            background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/110% no-repeat',
        });
        if (count_animation > 0 && count_animation <= 20) {
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 40) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 40 && count_animation <= 60) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 60 && count_animation <= 80) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 80 && count_animation <= 100) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 100 && count_animation <= 120) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 120 && count_animation <= 140) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 140 && count_animation <= 160) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 180) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 180 && count_animation <= 200) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 200 && count_animation <= 220) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 240 && count_animation <= 260) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 260 && count_animation <= 280) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 280 && count_animation <= 300) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 300 && count_animation <= 320) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 340) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 340 && count_animation <= 360) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 360 && count_animation <= 380) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 380 && count_animation <= 400) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 400 && count_animation <= 420) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 420 && count_animation <= 440) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 440 && count_animation <= 460) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 460 && count_animation <= 480) {
          jQuery('.zone_d2').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 480 && count_animation <= 500) {
          jQuery('.zone_d2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 500 && count_animation <= 520) {
          jQuery('.zone_d3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d4').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 520 && count_animation <= 540) {
          jQuery('.zone_d4').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d5').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 540 && count_animation <= 560) {
          jQuery('.zone_d5').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_d6').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 560 && count_animation <= 580) {
          jQuery('.zone_d6').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'scale(1.5)',
              zIndex: '1000',
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/110% no-repeat',
          });
        } else if (count_animation > 580 && count_animation <= 600) {
          jQuery('.zone_v1').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'drenag_2');
          endNow()
        } else {
          drenag_2();
          // console.log('continue');
        }
      }
    }, 250);
  }

  v1_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('91%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v0, .zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(0deg) scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/110% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/120% no-repeat'
        });
        
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        onEnd();
      }
    }, 250);
  }

  v1_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('78%');
    jQuery('.ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
// I
    phaseOne = setInterval(function(){
      if (count_animation <= 88){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(70deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
// II
        jQuery('.wizard_percent').text('85%');
        phaseOne = setInterval(function(){
          if (count_animation <= 88){
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                color: 'transparent',
                borderColor: 'transparent',
                opacity: 0.8,
                borderWidth: '1px',
                paddingTop: '4px',
                transform: 'rotate(20deg) scale(1.5)',
                background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                zIndex: '1000'
            });
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
// III
            jQuery('.wizard_percent').text('87%');
            phaseOne = setInterval(function(){
              if (count_animation <= 88){
                jQuery('.zone_s3, .zone_v4').css({
                    color: 'transparent',
                    borderColor: 'transparent',
                    opacity: 0.8,
                    borderWidth: '1px',
                    paddingTop: '4px',
                    transform: 'rotate(50deg) scale(1.5)',
                    background: 'url(/wp-content/themes/bcwish/img/triangle_water.png) center center/88% no-repeat',
                    zIndex: '1000'
                });
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                count_animation = 1;
                jQuery('.zone_s3, .zone_v4').css({
                    background: '#fff',
                    color: '#413e66',
                    borderColor: '#413e66',
                    transform: 'rotate(0deg) scale(1)',
                    paddingTop: '2px',
                    zIndex: '2'
                });
// IV
                jQuery('.wizard_percent').text('89%');
                phaseOne = setInterval(function(){
                  if (count_animation <= 88){
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        color: 'transparent',
                        borderColor: 'transparent',
                        opacity: 0.8,
                        borderWidth: '1px',
                        paddingTop: '4px',
                        transform: 'rotate(100deg) scale(1.5)',
                        background: 'url(/wp-content/themes/bcwish/img/triangle_earth.png) center center/88% no-repeat',
                        zIndex: '1000'
                    });
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    count_animation = 1;
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        background: '#fff',
                        color: '#413e66',
                        borderColor: '#413e66',
                        transform: 'rotate(0deg) scale(1)',
                        paddingTop: '2px',
                        zIndex: '2'
                    });
                    if (pausedStatus == true) {
                      localStorage.setItem('paused', 'v1_7');
                      endNow()
                    } else {
                      v1_7();
                    } 
                  }
                }, 250);
              }
            }, 250);
          }
        }, 250);
      }
    }, 250);
  }

  v1_5_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('72%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v4').addClass('rot_mo_5');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v4').removeClass('rot_mo_5');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_6');
            endNow();
          } else {
            v1_6();

          } 
        }
    }, 1000);
  }

  v1_5_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('66%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v3, .zone_s3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v3, .zone_s3').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v3, .zone_s3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v3, .zone_s3').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_7');
            endNow();
          } else {
            v1_5_7();
          } 
        }
    }, 1000);
  } 

  v1_5_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('60%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v4, .zone_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    jQuery('.zone_v4, .zone_v3').addClass('rot_mo_1');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v4, .zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v4, .zone_v3').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_6');
            endNow();
          } else {
            v1_5_6();
          } 
        }
    }, 1000);
  } 

  v1_5_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('54%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v4, .zone_v5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v4, .zone_v5').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v4, .zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v4, .zone_v5').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_5');
            endNow();
          } else {
            v1_5_5();

          } 
        }
    }, 1000);
  }

  v1_5_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('48%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_s3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_s3').addClass('rot_mo_3');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_s3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_s3').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_4');
            endNow();
          } else {
            v1_5_4();
          } 
        }
    }, 1000);
  } 

  v1_5_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('42%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v4').addClass('rot_mo_2');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v4').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_3');
            endNow();
          } else {
            v1_5_3();
          } 
        }
    }, 1000);
  } 

  v1_5_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('36%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 22;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v-').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    jQuery('.zone_v0, .zone_v-').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v0, .zone_v-').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v1_5_2');
            endNow();
          } else {
            v1_5_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v1_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('27%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation == 1) {
          cur_animation_val = 0;
          count_animation = 1;
  //анимация против часовой стрелки
          jQuery('.triangle').css({
              transform: 'scale(0.1) rotateY(180deg)rotateZ(120deg)',
              left: '-190px',
              top: '-142px'
          });
  //анимация первого треугольника
          jQuery('.zone_v1').addClass('transparent');
          firstTriangleAnimation = new Vivus('triangle_1', {type: 'delayed', duration: 600}, function(){
  //анимация второго треугольника
            setTimeout(function(){
              jQuery('.zone_v2').addClass('transparent');
              secondTriangleAnimation = new Vivus('triangle_2', {type: 'delayed', duration: 600}, function(){
  //анимация третьего треугольника
                setTimeout(function(){
                  jQuery('.zone_v3').addClass('transparent');
                  thirdTriangleAnimation = new Vivus('triangle_3', {type: 'delayed', duration: 600}, function(){
  //анимация четвертого треугольника
                    setTimeout(function(){
                      jQuery('.zone_v4').addClass('transparent');
                      fourthTriangleAnimation = new Vivus('triangle_4', {type: 'delayed', duration: 600}, function(){
                        jQuery('.zone').removeClass('transparent');
  //анимация по часовой стрелке
                        jQuery('.triangle').css({
                            transform: 'scale(0.1) rotateY(0deg)rotateZ(120deg)',
                            left: '-184px',
                            top: '-142px'
                        });
  //анимация первого треугольника
                        jQuery('.zone_v1').addClass('transparent');                                                                    
                        firstTriangleAnimation = new Vivus('triangle_1', {type: 'delayed', duration: 600}, function(){
  //анимация второго треугольника
                          setTimeout(function(){
                            jQuery('.zone_v2').addClass('transparent');
                            secondTriangleAnimation = new Vivus('triangle_2', {type: 'delayed', duration: 600}, function(){
  //анимация третьего треугольника
                              setTimeout(function(){
                                jQuery('.zone_v3').addClass('transparent');
                                thirdTriangleAnimation = new Vivus('triangle_3', {type: 'delayed', duration: 600}, function(){
  //анимация четвертого треугольника
                                  setTimeout(function(){
                                    jQuery('.zone_v4').addClass('transparent');
                                    fourthTriangleAnimation = new Vivus('triangle_4', {type: 'delayed', duration: 600}, function(){
                                    });
                                    fourthTriangleAnimation.play();
                                  }, 250)
                                });
                                thirdTriangleAnimation.play();
                              }, 250)
                            });
                            secondTriangleAnimation.play();
                          }, 250)
                        });
                        firstTriangleAnimation.play();
                      });
                      fourthTriangleAnimation.play();
                    }, 250)
                  });
                  thirdTriangleAnimation.play();
                }, 250)
              });
              secondTriangleAnimation.play();
            }, 250)
          });
          firstTriangleAnimation.play();
        }
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.5)'
          });
        count_animation += 1;
        rotateVal += 1.5;
        if(count_animation <= 120){
            cur_animation_val += 1.5;
            d12Val+= 3;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 120 && count_animation <= 228){
            cur_animation_val -= 1.5;
            d12Val+= 3;
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.5)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 3;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 3;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else {
            d12Val+= 3;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        }
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone').removeClass('transparent');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v1_5_1');
          endNow()
        } else {
          v1_5_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v1_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('18%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation == 1) {
          cur_animation_val = 0;
          count_animation = 1;
  //анимация против часовой стрелки
          jQuery('.triangle').css({
              transform: 'scale(0.1) rotateY(180deg)rotateZ(120deg)',
              left: '-190px',
              top: '-142px'
          });
  //анимация первого треугольника
          jQuery('.zone_v1').addClass('transparent');
          firstTriangleAnimation = new Vivus('triangle_1', {type: 'delayed', duration: 600}, function(){
  //анимация второго треугольника
            setTimeout(function(){
              jQuery('.zone_v2').addClass('transparent');
              secondTriangleAnimation = new Vivus('triangle_2', {type: 'delayed', duration: 600}, function(){
  //анимация третьего треугольника
                setTimeout(function(){
                  jQuery('.zone_v3').addClass('transparent');
                  thirdTriangleAnimation = new Vivus('triangle_3', {type: 'delayed', duration: 600}, function(){
  //анимация четвертого треугольника
                    setTimeout(function(){
                      jQuery('.zone_v4').addClass('transparent');
                      fourthTriangleAnimation = new Vivus('triangle_4', {type: 'delayed', duration: 600}, function(){
                        jQuery('.zone').removeClass('transparent');
  //анимация по часовой стрелке
                        jQuery('.triangle').css({
                            transform: 'scale(0.1) rotateY(0deg)rotateZ(120deg)',
                            left: '-184px',
                            top: '-142px'
                        });
  //анимация первого треугольника
                        jQuery('.zone_v1').addClass('transparent');                                                                    
                        firstTriangleAnimation = new Vivus('triangle_1', {type: 'delayed', duration: 600}, function(){
  //анимация второго треугольника
                          setTimeout(function(){
                            jQuery('.zone_v2').addClass('transparent');
                            secondTriangleAnimation = new Vivus('triangle_2', {type: 'delayed', duration: 600}, function(){
  //анимация третьего треугольника
                              setTimeout(function(){
                                jQuery('.zone_v3').addClass('transparent');
                                thirdTriangleAnimation = new Vivus('triangle_3', {type: 'delayed', duration: 600}, function(){
  //анимация четвертого треугольника
                                  setTimeout(function(){
                                    jQuery('.zone_v4').addClass('transparent');
                                    fourthTriangleAnimation = new Vivus('triangle_4', {type: 'delayed', duration: 600}, function(){
                                    });
                                    fourthTriangleAnimation.play();
                                  }, 250)
                                });
                                thirdTriangleAnimation.play();
                              }, 250)
                            });
                            secondTriangleAnimation.play();
                          }, 250)
                        });
                        firstTriangleAnimation.play();
                      });
                      fourthTriangleAnimation.play();
                    }, 250)
                  });
                  thirdTriangleAnimation.play();
                }, 250)
              });
              secondTriangleAnimation.play();
            }, 250)
          });
          firstTriangleAnimation.play();
        }
        jQuery('.zone_ring')
          .removeClass('hidden')
          .css({
            opacity: 0.8,
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
            transform: 'rotate(-'+d12Val+'deg) scale(1.5)'
          });
        count_animation += 1;
        rotateVal += 1.5;
        if(count_animation <= 120){
            cur_animation_val += 1.5;
            d12Val+= 3;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 120 && count_animation <= 228){
            cur_animation_val -= 1.5;
            d12Val+= 3;
            jQuery('.zone_ring').css('transform', 'rotate(-'+d12Val+'deg) scale(1.5)');
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
        } else if (count_animation >= 228 && count_animation <= 292){
            cur_animation_val -= 1.5;
            d12Val+= 3;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else if (count_animation >= 292 && count_animation <= 344){
            cur_animation_val += 1.5;
            d12Val+= 3;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        } else {
            d12Val+= 3;
            cur_animation_val += 1.5;
            jQuery('.ring').css('transform', 'rotate('+cur_animation_val+'deg)');
            jQuery('.zone_ring').css('transform', 'rotate('+d12Val+'deg) scale(1.5)');
            jQuery('.zone_ring').css('background', '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat');
        }
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone').removeClass('transparent');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v1_4');
          endNow()
        } else {
          v1_4();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v1_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('9%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v2, .zone_d2, .zone_cl, .zone_v-').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_v0, .zone_v2, .zone_d2, .zone_cl, .zone_v-').addClass('rot_90_two').css({
      background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 361){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v2, .zone_d2, .zone_cl, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_v0, .zone_v2, .zone_d2, .zone_cl, .zone_v-').removeClass('rot_90_two');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v1_3');
          endNow()
        } else {
          v1_3();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 1"');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v5, .zone_d5, .zone_d6, .zone_v-').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_v-').css({
        background: '#fff url(/wp-content/themes/bcwish/img/vig_.png) center center/100% no-repeat'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_v5, .zone_d5, .zone_d6').addClass('rot_90_two').css({
      background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');
    phaseOne = setInterval(function(){
      if (count_animation <= 361){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d5, .zone_d6, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_v5, .zone_d5, .zone_d6').removeClass('rot_90_two');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v1_2');
          endNow()
        } else {
          v1_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v4_13 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('90%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v0, .zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(0deg) scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/110% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/120% no-repeat'
        });
        
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        onEnd();
      }
    }, 250);
  }

    v4_12 = function(){
      jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
      jQuery('.wizard_percent').text('90%');
      jQuery('.ring').css('transform', 'rotate(0deg)');
      jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
      reloadTime = 0;
      reloadTime1 = 0;
      d12Val = 0;
      cur_animation_val = 0;
      rotateVal = 0;
      count_animation = 1;
      jQuery('.ring').addClass('hidden');
      jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
  // I
      phaseOne = setInterval(function(){
        if (count_animation <= 88){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'rotate(70deg) scale(1.5)',
              background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
              zIndex: '1000'
          });
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
  // II
          jQuery('.wizard_percent').text('85%');
          phaseOne = setInterval(function(){
            if (count_animation <= 88){
              jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                  color: 'transparent',
                  borderColor: 'transparent',
                  opacity: 0.8,
                  borderWidth: '1px',
                  paddingTop: '4px',
                  transform: 'rotate(20deg) scale(1.5)',
                  background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                  zIndex: '1000'
              });
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                  background: '#fff',
                  color: '#413e66',
                  borderColor: '#413e66',
                  transform: 'rotate(0deg) scale(1)',
                  paddingTop: '2px',
                  zIndex: '2'
              });
  // III
              jQuery('.wizard_percent').text('87%');
              phaseOne = setInterval(function(){
                if (count_animation <= 88){
                  jQuery('.zone_s3, .zone_v4').css({
                      color: 'transparent',
                      borderColor: 'transparent',
                      opacity: 0.8,
                      borderWidth: '1px',
                      paddingTop: '4px',
                      transform: 'rotate(50deg) scale(1.5)',
                      background: 'url(/wp-content/themes/bcwish/img/triangle_water.png) center center/88% no-repeat',
                      zIndex: '1000'
                  });
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.zone_s3, .zone_v4').css({
                      background: '#fff',
                      color: '#413e66',
                      borderColor: '#413e66',
                      transform: 'rotate(0deg) scale(1)',
                      paddingTop: '2px',
                      zIndex: '2'
                  });
  // IV
                  jQuery('.wizard_percent').text('89%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 88){
                      jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                          color: 'transparent',
                          borderColor: 'transparent',
                          opacity: 0.8,
                          borderWidth: '1px',
                          paddingTop: '4px',
                          transform: 'rotate(100deg) scale(1.5)',
                          background: 'url(/wp-content/themes/bcwish/img/triangle_earth.png) center center/88% no-repeat',
                          zIndex: '1000'
                      });
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                          background: '#fff',
                          color: '#413e66',
                          borderColor: '#413e66',
                          transform: 'rotate(0deg) scale(1)',
                          paddingTop: '2px',
                          zIndex: '2'
                      });
                      if (pausedStatus == true) {
                        localStorage.setItem('paused', 'v4_13');
                        endNow()
                      } else {
                        v4_13();
                      } 
                    }
                  }, 250);
                }
              }, 250);
            }
          }, 250);
        }
      }, 250);
    }

  v4_11_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('84%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_12');
            endNow();
          } else {
            v4_12();

          } 
        }
    }, 1000);
  }

  v4_11_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('81%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_11_4');
            endNow();
          } else {
            v4_11_4();
          } 
        }
    }, 1000);
  } 

  v4_11_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('78%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_2');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_11_3');
            endNow();
          } else {
            v4_11_3();
          } 
        }
    }, 1000);
  } 

  v4_11_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('75%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    jQuery('.zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_11_2');
            endNow();
          } else {
            v4_11_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v4_10_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('72%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_v3, .zone_d4').addClass('rot_mo_4');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v3, .zone_d4').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_11_1');
            endNow();
          } else {
            v4_11_1();

          } 
        }
    }, 1000);
  }

  v4_10_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('69%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_v3, .zone_d4').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v3, .zone_d4').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_10_4');
            endNow();
          } else {
            v4_10_4();
          } 
        }
    }, 1000);
  } 

  v4_10_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('66%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_v3, .zone_d4').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v3, .zone_d4').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_10_3');
            endNow();
          } else {
            v4_10_3();
          } 
        }
    }, 1000);
  } 

  v4_10_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    
    jQuery('.zone_v2, .zone_v3, .zone_d4').addClass('rot_mo_1');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v3, .zone_d4').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_10_2');
            endNow();
          } else {
            v4_10_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v4_9_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('60%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2, .zone_s4, .zone_s5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2, .zone_s4, .zone_s5').addClass('rot_mo_4');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2, .zone_s4, .zone_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2, .zone_s4, .zone_s5').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_10_1');
            endNow();
          } else {
            v4_10_1();

          } 
        }
    }, 1000);
  }

  v4_9_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('57%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2, .zone_s4, .zone_s5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2, .zone_s4, .zone_s5').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2, .zone_s4, .zone_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2, .zone_s4, .zone_s5').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_9_4');
            endNow();
          } else {
            v4_9_4();
          } 
        }
    }, 1000);
  } 

  v4_9_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('54%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2, .zone_s4, .zone_s5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2, .zone_s4, .zone_s5').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2, .zone_s4, .zone_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2, .zone_s4, .zone_s5').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_9_3');
            endNow();
          } else {
            v4_9_3();
          } 
        }
    }, 1000);
  } 

  v4_9_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('51%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2, .zone_s4, .zone_s5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    
    jQuery('.zone_s2, .zone_s4, .zone_s5').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2, .zone_s4, .zone_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2, .zone_s4, .zone_s5').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_9_2');
            endNow();
          } else {
            v4_9_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v4_8_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('48%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v4').addClass('rot_mo_4');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v4').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_9_1');
            endNow();
          } else {
            v4_9_1();

          } 
        }
    }, 1000);
  }

  v4_8_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('45%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v4').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v4').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_8_4');
            endNow();
          } else {
            v4_8_4();
          } 
        }
    }, 1000);
  } 

  v4_8_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('42%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v4').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v4').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_8_3');
            endNow();
          } else {
            v4_8_3();
          } 
        }
    }, 1000);
  } 

  v4_8_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('39%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    jQuery('.zone_v1, .zone_v4').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v4').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v4_8_2');
            endNow();
          } else {
            v4_8_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v4_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('36%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s3, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_s3, .zone_v4').addClass('rot_90_two').css({
      background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_s3, .zone_v4').removeClass('rot_90_two');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v4_8_1');
          endNow()
        } else {
          v4_8_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v4_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('30%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d3, .zone_d4, .zone_v2, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_d2_, .zone_d3, .zone_d4, .zone_v2, .zone_v3').addClass('rot_90_two').css({
      background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2_, .zone_d3, .zone_d4, .zone_v2, .zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_, .zone_d3, .zone_d4, .zone_v2, .zone_v3').removeClass('rot_90_two');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v4_7');
          endNow()
        } else {
          v4_7();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v4_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('24%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d4, .zone_d2_').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_d4, .zone_d2_').addClass('rot_90_two').css({
      background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4, .zone_d2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
    jQuery('.zone_d4, .zone_d2_').removeClass('rot_90_two');
    jQuery('.ring').removeClass('rot_ring');
    jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v4_6');
          endNow()
        } else {
          v4_6();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v4_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('18%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').addClass('rot_90_two').css({
      background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').removeClass('rot_90_two');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v4_5');
          endNow()
        } else {
          v4_5();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v4_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('12%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d3, .zone_v4, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_d3, .zone_v4, .zone_d4').addClass('rot_90_two').css({
      background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3, .zone_v4, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d3, .zone_v4, .zone_d4').removeClass('rot_90_two');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v4_4');
          endNow()
        } else {
          v4_4();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v4_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('6%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s3, .zone_s4, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s3, .zone_s4, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat', transform: 'scale(1.5)'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s3, .zone_s4, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s3, .zone_s4, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s3, .zone_s4, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v4_3');
          endNow()
        } else {
          v4_3();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 4 — V 3"');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_cl, .zone_v1, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_cl, .zone_v1, .zone_v4').addClass('rot_90_one').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_cl, .zone_v1, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_cl, .zone_v1, .zone_v4').removeClass('rot_90_one');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v4_2');
          endNow()
        } else {
          v4_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mmt_8 = function(){
    jQuery('.wizard_heading').text('Выполняется "Висцеральный протокол"');
    jQuery('.wizard_percent').text('90%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 344){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v0, .zone_v-').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(0deg) scale(1.5)',
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/110% no-repeat',
            zIndex: '1000'
        });
        jQuery('.zone_v-').css({
            background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/120% no-repeat'
        });
        
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        onEnd();
      }
    }, 250);
  }

  mmt_7 = function(){
    jQuery('.wizard_heading').text('Выполняется "Висцеральный протокол"');
    jQuery('.wizard_percent').text('80%');
    jQuery('.ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
// I
    phaseOne = setInterval(function(){
      if (count_animation <= 88){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(70deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
// II
        jQuery('.wizard_percent').text('85%');
        phaseOne = setInterval(function(){
          if (count_animation <= 88){
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                color: 'transparent',
                borderColor: 'transparent',
                opacity: 0.8,
                borderWidth: '1px',
                paddingTop: '4px',
                transform: 'rotate(20deg) scale(1.5)',
                background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                zIndex: '1000'
            });
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
// III
            jQuery('.wizard_percent').text('87%');
            phaseOne = setInterval(function(){
              if (count_animation <= 88){
                jQuery('.zone_s3, .zone_v4').css({
                    color: 'transparent',
                    borderColor: 'transparent',
                    opacity: 0.8,
                    borderWidth: '1px',
                    paddingTop: '4px',
                    transform: 'rotate(50deg) scale(1.5)',
                    background: 'url(/wp-content/themes/bcwish/img/triangle_water.png) center center/88% no-repeat',
                    zIndex: '1000'
                });
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                count_animation = 1;
                jQuery('.zone_s3, .zone_v4').css({
                    background: '#fff',
                    color: '#413e66',
                    borderColor: '#413e66',
                    transform: 'rotate(0deg) scale(1)',
                    paddingTop: '2px',
                    zIndex: '2'
                });
// IV
                jQuery('.wizard_percent').text('89%');
                phaseOne = setInterval(function(){
                  if (count_animation <= 88){
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        color: 'transparent',
                        borderColor: 'transparent',
                        opacity: 0.8,
                        borderWidth: '1px',
                        paddingTop: '4px',
                        transform: 'rotate(100deg) scale(1.5)',
                        background: 'url(/wp-content/themes/bcwish/img/triangle_earth.png) center center/88% no-repeat',
                        zIndex: '1000'
                    });
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    count_animation = 1;
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        background: '#fff',
                        color: '#413e66',
                        borderColor: '#413e66',
                        transform: 'rotate(0deg) scale(1)',
                        paddingTop: '2px',
                        zIndex: '2'
                    });
                    if (pausedStatus == true) {
                      localStorage.setItem('paused', 'mmt_8');
                      endNow()
                    } else {
                      mmt_8();
                    } 
                  }
                }, 250);
              }
            }, 250);
          }
        }, 250);
      }
    }, 250);
  }

  mmt_6 = function(){
    jQuery('.wizard_heading').text('Выполняется "Висцеральный протокол"');
    jQuery('.wizard_percent').text('75%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v1, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_v1, .zone_d3').addClass('rot_mmt').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring_double');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 720){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v1, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v1, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/vaterfall.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 440) {
          if (count_animation == 240) {
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
          } else if (count_animation == 360) {
            jQuery('.zone_ring').removeClass('rot_zone_ring');
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'});
            jQuery('.zone_ring').addClass('rot_zone_ring');
          }
          jQuery('.zone_v1, .zone_d3').addClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat'});
        }  else if (count_animation > 440 && count_animation <= 560) {
          jQuery('.zone_v1, .zone_d3').removeClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 560) {
          jQuery('.zone_v1, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
          if (count_animation == 600) {
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
          }
        }
        count_animation += 1;
        console.log(count_animation);
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v1, .zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_v1, .zone_d3').removeClass('rot_mmt');
        jQuery('.ring').removeClass('rot_ring_double');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mmt_7');
          endNow()
        } else {
          mmt_7();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mmt_5 = function(){
    jQuery('.wizard_heading').text('Выполняется "Висцеральный протокол"');
    jQuery('.wizard_percent').text('60%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d3, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_d2, .zone_d3, .zone_d5').addClass('rot_mmt').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring_double');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 720){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_d3, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_d3, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/vaterfall.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 440) {
          if (count_animation == 240) {
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
          } else if (count_animation == 360) {
            jQuery('.zone_ring').addClass('rot_zone_ring');
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'});
            jQuery('.zone_ring').removeClass('rot_zone_ring');
          }
          jQuery('.zone_d2, .zone_d3, .zone_d5').addClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat'});
        }  else if (count_animation > 440 && count_animation <= 560) {
          jQuery('.zone_d2, .zone_d3, .zone_d5').removeClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 560) {
          jQuery('.zone_d2, .zone_d3, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
          if (count_animation == 600) {
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
          }
        }
        count_animation += 1;
        console.log(count_animation);
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_d3, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2, .zone_d3, .zone_d5').removeClass('rot_mmt');
        jQuery('.ring').removeClass('rot_ring_double');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mmt_6');
          endNow()
        } else {
          mmt_6();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mmt_4 = function(){
    jQuery('.wizard_heading').text('Выполняется "Висцеральный протокол"');
    jQuery('.wizard_percent').text('45%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d3, .zone_v4, .zone_s4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_d3, .zone_v4, .zone_s4').addClass('rot_mmt').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring_double');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 720){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d3, .zone_v4, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d3, .zone_v4, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/vaterfall.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 440) {
          if (count_animation == 240) {
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
          } else if (count_animation == 360) {
            jQuery('.zone_ring').removeClass('rot_zone_ring');
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'});
            jQuery('.zone_ring').addClass('rot_zone_ring');
          }
          jQuery('.zone_d3, .zone_v4, .zone_s4').addClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat'});
        }  else if (count_animation > 440 && count_animation <= 560) {
          jQuery('.zone_d3, .zone_v4, .zone_s4').removeClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 560) {
          jQuery('.zone_d3, .zone_v4, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
          if (count_animation == 600) {
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
          }
        }
        count_animation += 1;
        console.log(count_animation);
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3, .zone_v4, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d3, .zone_v4, .zone_s4').removeClass('rot_mmt');
        jQuery('.ring').removeClass('rot_ring_double');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mmt_5');
          endNow()
        } else {
          mmt_5();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  mmt_3 = function(){
    jQuery('.wizard_heading').text('Выполняется "Висцеральный протокол"');
    jQuery('.wizard_percent').text('30%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_s3, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_s3, .zone_d3').addClass('rot_mmt').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring_double');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 720){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s3, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s3, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/vaterfall.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 440) {
          if (count_animation == 240) {
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
          } else if (count_animation == 360) {
            jQuery('.zone_ring').removeClass('rot_zone_ring');
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'});
            jQuery('.zone_ring').addClass('rot_zone_ring');
          }
          jQuery('.zone_s3, .zone_d3').addClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat'});
        }  else if (count_animation > 440 && count_animation <= 560) {
          jQuery('.zone_s3, .zone_d3').removeClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 560) {
          jQuery('.zone_s3, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
          if (count_animation == 600) {
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
          }
        }
        count_animation += 1;
        console.log(count_animation);
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s3, .zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_s2_, .zone_d3').removeClass('rot_mmt');
        jQuery('.ring').removeClass('rot_ring_double');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mmt_4');
          endNow()
        } else {
          mmt_4();
          // console.log('continue');
        } 
      }
    }, 250);
  }

mmt_2 = function(){
  jQuery('.wizard_heading').text('Выполняется "Висцеральный протокол"');
  jQuery('.wizard_percent').text('15%');
  reloadTime = 0;
  cur_animation_val = 0;
  count_animation = 1;
  jQuery('.zone_s2_, .zone_d3').css({
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      transform: 'rotate(0deg) scale(1.5)',
      zIndex: '1000'
  });
  jQuery('.zone_ring')
    .removeClass('hidden')
    .css({
      opacity: 0.8,
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
    });
  jQuery('.zone_s2_, .zone_d3').addClass('rot_mmt').css({
    background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
  });
  jQuery('.ring').addClass('rot_ring_double');
  jQuery('.zone_ring').addClass('rot_zone_ring');

  phaseOne = setInterval(function(){
    if (count_animation <= 720){
      if (reloadTime == 0){                                                                       //1
          sound.stop();
          reloadSound.play();
      } else if (reloadTime == 2) {
          sound.play();
      };
      reloadTime += 1;
      if (count_animation > 0 && count_animation <= 120) {
        jQuery('.zone_s2_, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
      } else if (count_animation > 120 && count_animation <= 220) {
        jQuery('.zone_s2_, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/vaterfall.png) center center/100% no-repeat'});
      } else if (count_animation > 220 && count_animation <= 440) {
        if (count_animation == 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        } else if (count_animation == 360) {
          jQuery('.zone_ring').removeClass('rot_zone_ring');
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'});
          jQuery('.zone_ring').addClass('rot_zone_ring');
        }
        jQuery('.zone_s2_, .zone_d3').addClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat'});
      }  else if (count_animation > 440 && count_animation <= 560) {
        jQuery('.zone_s2_, .zone_d3').removeClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
      } else if (count_animation > 560) {
        jQuery('.zone_s2_, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        if (count_animation == 600) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
      }
      count_animation += 1;
      console.log(count_animation);
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.zone_s2_, .zone_d3').css({
          background: '#fff',
          color: '#413e66',
          borderColor: '#413e66',
          transform: 'rotate(0deg) scale(1)',
          paddingTop: '2px',
          zIndex: '2'
      });
      jQuery('.zone_s2_, .zone_d3').removeClass('rot_mmt');
      jQuery('.ring').removeClass('rot_ring_double');
      jQuery('.zone_ring').removeClass('rot_zone_ring');
      jQuery('.ring').css('transform', 'rotate(0deg)');
      jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
      sound.stop();
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'mmt_3');
        endNow()
      } else {
        mmt_3();
        // console.log('continue');
      } 
    }
  }, 250);
}

  mmt = function(){
    jQuery('.wizard_heading').text('Выполняется "Висцеральный протокол"');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_d2_, .zone_s2, .zone_cl').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_cl').addClass('rot_90_one_double').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.zone_d2_, .zone_s2').addClass('rot_mmt').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring_double');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 720){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2_, .zone_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2_, .zone_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/vaterfall.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 440) {
          if (count_animation == 240) {
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
          } else if (count_animation == 360) {
            jQuery('.zone_ring').removeClass('rot_zone_ring');
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'});
            jQuery('.zone_ring').addClass('rot_zone_ring');
          }
          jQuery('.zone_ring').addClass('rot_zone_ring');
          jQuery('.zone_d2_, .zone_s2').addClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat'});
        }  else if (count_animation > 440 && count_animation <= 560) {
          jQuery('.zone_d2_, .zone_s2').removeClass('rot_90_three').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 560) {
          jQuery('.zone_d2_, .zone_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
          if (count_animation == 600) {
            jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
          }
        }
        count_animation += 1;
        console.log(count_animation);
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2_, .zone_s2, .zone_cl').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_, .zone_s2').removeClass('rot_mmt');
        jQuery('.zone_cl').removeClass('rot_90_one_double');
        jQuery('.ring').removeClass('rot_ring_double');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'mmt_2');
          endNow()
        } else {
          mmt_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }

    solis_9 = function(){
      jQuery('.wizard_heading').text('Выполняется "Solis"');
      jQuery('.wizard_percent').text('94%');
      jQuery('.ring').addClass('hidden');
      jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
      reloadTime = 0;
      reloadTime1 = 0;
      d12Val = 0;
      cur_animation_val = 0;
      rotateVal = 0;
      count_animation = 1;
      phaseOne = setInterval(function(){
        if (count_animation <= 344){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          jQuery('.zone_v0, .zone_v-').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'rotate(0deg) scale(1.5)',
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/110% no-repeat',
              zIndex: '1000'
          });
          jQuery('.zone_v-').css({
              background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/120% no-repeat'
          });
          
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v-').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          onEnd();
        }
      }, 250);
    }

    solis_8 = function(){
      jQuery('.wizard_heading').text('Выполняется "Solis"');
      jQuery('.wizard_percent').text('86%');
      jQuery('.ring').css('transform', 'rotate(0deg)');
      jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
      reloadTime = 0;
      reloadTime1 = 0;
      d12Val = 0;
      cur_animation_val = 0;
      rotateVal = 0;
      count_animation = 1;
      jQuery('.ring').addClass('hidden');
      jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
  // I
      phaseOne = setInterval(function(){
        if (count_animation <= 88){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'rotate(70deg) scale(1.5)',
              background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
              zIndex: '1000'
          });
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
  // II
          jQuery('.wizard_percent').text('85%');
          phaseOne = setInterval(function(){
            if (count_animation <= 88){
              jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                  color: 'transparent',
                  borderColor: 'transparent',
                  opacity: 0.8,
                  borderWidth: '1px',
                  paddingTop: '4px',
                  transform: 'rotate(20deg) scale(1.5)',
                  background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                  zIndex: '1000'
              });
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                  background: '#fff',
                  color: '#413e66',
                  borderColor: '#413e66',
                  transform: 'rotate(0deg) scale(1)',
                  paddingTop: '2px',
                  zIndex: '2'
              });
  // III
              jQuery('.wizard_percent').text('87%');
              phaseOne = setInterval(function(){
                if (count_animation <= 88){
                  jQuery('.zone_s3, .zone_v4').css({
                      color: 'transparent',
                      borderColor: 'transparent',
                      opacity: 0.8,
                      borderWidth: '1px',
                      paddingTop: '4px',
                      transform: 'rotate(50deg) scale(1.5)',
                      background: 'url(/wp-content/themes/bcwish/img/triangle_water.png) center center/88% no-repeat',
                      zIndex: '1000'
                  });
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.zone_s3, .zone_v4').css({
                      background: '#fff',
                      color: '#413e66',
                      borderColor: '#413e66',
                      transform: 'rotate(0deg) scale(1)',
                      paddingTop: '2px',
                      zIndex: '2'
                  });
  // IV
                  jQuery('.wizard_percent').text('89%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 88){
                      jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                          color: 'transparent',
                          borderColor: 'transparent',
                          opacity: 0.8,
                          borderWidth: '1px',
                          paddingTop: '4px',
                          transform: 'rotate(100deg) scale(1.5)',
                          background: 'url(/wp-content/themes/bcwish/img/triangle_earth.png) center center/88% no-repeat',
                          zIndex: '1000'
                      });
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                          background: '#fff',
                          color: '#413e66',
                          borderColor: '#413e66',
                          transform: 'rotate(0deg) scale(1)',
                          paddingTop: '2px',
                          zIndex: '2'
                      });
                      if (pausedStatus == true) {
                        localStorage.setItem('paused', 'solis_9');
                        endNow()
                      } else {
                        solis_9();
                      } 
                    }
                  }, 250);
                }
              }, 250);
            }
          }, 250);
        }
      }, 250);
    }

    solis_7 = function(){
      jQuery('.wizard_main_screen').addClass('wizard_main_screen_solis');
      jQuery('.wizard_heading').text('Выполняется "Solis"');
      jQuery('.wizard_percent').text('74%');
      jQuery('.ring').addClass('hidden');
      jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
      reloadTime = 0;
      reloadTime1 = 0;
      d12Val = 0;
      cur_animation_val = 0;
      rotateVal = 0;
      count_animation = 1;
      phaseOne = setInterval(function(){
        if (count_animation <= 685){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          jQuery('.zone_v-, .zone_v3, .zone_v0, .zone_hidden_1, .zone_hidden_2, .zone_hidden_3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'rotate(0deg) scale(1.5)',
              zIndex: '1000',
          });
          jQuery('.zone_v-').css({
              background: '#fff url(/wp-content/themes/bcwish/img/drenag_2.png) center center/100% no-repeat',
          });
          jQuery('.zone_v3').css({
              background: '#fff url(/wp-content/themes/bcwish/img/drenag.png) center center/100% no-repeat',
          });
          jQuery('.zone_v0').css({
              background: 'transparent'
          });

          if (count_animation > 4 && count_animation <= 8) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
          } else if (count_animation > 8 && count_animation <= 12) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_1').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_v0').css('left'))+'px',
              top: parseFloat(jQuery('.zone_v0').css('top'))-40+'px'
            });
          } else if (count_animation > 12 && count_animation <= 16) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_2').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_hidden_1').css('left'))+'px',
              top: parseFloat(jQuery('.zone_hidden_1').css('top'))-40+'px'
            });
          } else if (count_animation > 16) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_3').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_hidden_2').css('left'))+'px',
              top: parseFloat(jQuery('.zone_hidden_2').css('top'))-40+'px'
            });
          }

          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
          jQuery('.zone_v0').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v-, .zone_v3, .zone_v0, .zone_hidden_1, .zone_hidden_2, .zone_hidden_3').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.ring').css('transform', 'rotate(0deg)');
          jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
          sound.stop();
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'solis_8');
            endNow()
          } else {
            solis_8();
            // console.log('continue');
          }
        }
      }, 250);
    }

    solis_6 = function(){
      jQuery('.wizard_main_screen').addClass('wizard_main_screen_solis');
      jQuery('.wizard_heading').text('Выполняется "Solis"');
      jQuery('.wizard_percent').text('62%');
      jQuery('.ring').addClass('hidden');
      jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
      reloadTime = 0;
      reloadTime1 = 0;
      d12Val = 0;
      cur_animation_val = 0;
      rotateVal = 0;
      count_animation = 1;
      phaseOne = setInterval(function(){
        if (count_animation <= 685){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          jQuery('.zone_v-, .zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0, .zone_hidden_1, .zone_hidden_2, .zone_hidden_3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'rotate(0deg) scale(1.5)',
              zIndex: '1000',
          });
          jQuery('.zone_v-').css({
              background: '#fff url(/wp-content/themes/bcwish/img/drenag_2.png) center center/100% no-repeat',
          });
          jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0').css({
              background: 'transparent'
          });

          if (count_animation > 4 && count_animation <= 8) {
            jQuery('.zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 8 && count_animation <= 12) {
            jQuery('.zone_v5, .zone_v4').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 12 && count_animation <= 16) {
            jQuery('.zone_v5, .zone_v4, .zone_v3').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 16 && count_animation <= 20) {
            jQuery('.zone_v5, .zone_v4, .zone_v3, .zone_v2').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 20 && count_animation <= 24) {
            jQuery('.zone_v5, .zone_v4, .zone_v3, .zone_v2, .zone_v1').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 24 && count_animation <= 28) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
          } else if (count_animation > 28 && count_animation <= 32) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_1').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_v0').css('left'))+'px',
              top: parseFloat(jQuery('.zone_v0').css('top'))-40+'px'
            });
          } else if (count_animation > 32 && count_animation <= 36) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_2').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_hidden_1').css('left'))+'px',
              top: parseFloat(jQuery('.zone_hidden_1').css('top'))-40+'px'
            });
          } else if (count_animation > 36 && count_animation) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_3').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_hidden_2').css('left'))+'px',
              top: parseFloat(jQuery('.zone_hidden_2').css('top'))-40+'px'
            });
          }

          if (count_animation > 24 && count_animation <= 160) {
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 160 && count_animation <= 320) {
            jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
            jQuery('.zone_v0').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat',
            });
          } else if (count_animation > 320 && count_animation <= 480) {
            jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
            jQuery('.zone_v0').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'
            });
          } else if (count_animation > 480) {
            jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
            jQuery('.zone_v0').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.zone_v-, .zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.ring').css('transform', 'rotate(0deg)');
          jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
          sound.stop();
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'solis_7');
            endNow()
          } else {
            solis_7();
            // console.log('continue');
          }
        }
      }, 250);
    }

    solis_5 = function(){
      jQuery('.wizard_main_screen').addClass('wizard_main_screen_solis');
      jQuery('.wizard_heading').text('Выполняется "Solis"');
      jQuery('.wizard_percent').text('50%');
      jQuery('.ring').addClass('hidden');
      jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
      reloadTime = 0;
      reloadTime1 = 0;
      d12Val = 0;
      cur_animation_val = 0;
      rotateVal = 0;
      count_animation = 1;
      phaseOne = setInterval(function(){
        if (count_animation <= 685){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          jQuery('.zone_v-, .zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0, .zone_hidden_1, .zone_hidden_2, .zone_hidden_3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'rotate(0deg) scale(1.5)',
              zIndex: '1000',
          });
          jQuery('.zone_v-').css({
              background: '#fff url(/wp-content/themes/bcwish/img/drenag_2.png) center center/100% no-repeat',
          });
          jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0').css({
              background: 'transparent'
          });

          if (count_animation > 4 && count_animation <= 8) {
            jQuery('.zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 8 && count_animation <= 12) {
            jQuery('.zone_v5, .zone_v4').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 12 && count_animation <= 16) {
            jQuery('.zone_v5, .zone_v4, .zone_v3').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 16 && count_animation <= 20) {
            jQuery('.zone_v5, .zone_v4, .zone_v3, .zone_v2').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 20 && count_animation <= 24) {
            jQuery('.zone_v5, .zone_v4, .zone_v3, .zone_v2, .zone_v1').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 24 && count_animation <= 28) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
          } else if (count_animation > 28 && count_animation <= 32) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_1').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_v0').css('left'))+'px',
              top: parseFloat(jQuery('.zone_v0').css('top'))-40+'px'
            });
          } else if (count_animation > 32 && count_animation <= 36) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_2').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_hidden_1').css('left'))+'px',
              top: parseFloat(jQuery('.zone_hidden_1').css('top'))-40+'px'
            });
          } else if (count_animation > 36 && count_animation) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_3').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_hidden_2').css('left'))+'px',
              top: parseFloat(jQuery('.zone_hidden_2').css('top'))-40+'px'
            });
          }

          if (count_animation > 24 && count_animation <= 160) {
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 160 && count_animation <= 320) {
            jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
            jQuery('.zone_v0').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat',
            });
          } else if (count_animation > 320 && count_animation <= 480) {
            jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
            jQuery('.zone_v0').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'
            });
          } else if (count_animation > 480) {
            jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
            jQuery('.zone_v0').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.zone_v-, .zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.ring').css('transform', 'rotate(0deg)');
          jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
          sound.stop();
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'solis_6');
            endNow()
          } else {
            solis_6();
            // console.log('continue');
          }
        }
      }, 250);
    }

    solis_4 = function(){
      jQuery('.wizard_main_screen').addClass('wizard_main_screen_solis');
      jQuery('.wizard_heading').text('Выполняется "Solis"');
      jQuery('.wizard_percent').text('38%');
      jQuery('.ring').addClass('hidden');
      jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
      reloadTime = 0;
      reloadTime1 = 0;
      d12Val = 0;
      cur_animation_val = 0;
      rotateVal = 0;
      count_animation = 1;
      phaseOne = setInterval(function(){
        if (count_animation <= 685){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          jQuery('.zone_v-, .zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0, .zone_hidden_1, .zone_hidden_2, .zone_hidden_3').css({
              color: 'transparent',
              borderColor: 'transparent',
              opacity: 0.8,
              borderWidth: '1px',
              paddingTop: '4px',
              transform: 'rotate(0deg) scale(1.5)',
              zIndex: '1000',
          });
          jQuery('.zone_v-').css({
              background: '#fff url(/wp-content/themes/bcwish/img/drenag_2.png) center center/100% no-repeat',
          });
          jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0').css({
              background: 'transparent'
          });

          if (count_animation > 4 && count_animation <= 8) {
            jQuery('.zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 8 && count_animation <= 12) {
            jQuery('.zone_v5, .zone_v4').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 12 && count_animation <= 16) {
            jQuery('.zone_v5, .zone_v4, .zone_v3').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 16 && count_animation <= 20) {
            jQuery('.zone_v5, .zone_v4, .zone_v3, .zone_v2').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 20 && count_animation <= 24) {
            jQuery('.zone_v5, .zone_v4, .zone_v3, .zone_v2, .zone_v1').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 24 && count_animation <= 28) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
          } else if (count_animation > 28 && count_animation <= 32) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_1').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_v0').css('left'))+'px',
              top: parseFloat(jQuery('.zone_v0').css('top'))-40+'px'
            });
          } else if (count_animation > 32 && count_animation <= 36) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_2').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_hidden_1').css('left'))+'px',
              top: parseFloat(jQuery('.zone_hidden_1').css('top'))-40+'px'
            });
          } else if (count_animation > 36 && count_animation) {
            jQuery('.zone_v0').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            });
            jQuery('.zone_hidden_3').removeClass('hidden').css({
              background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
              left: parseFloat(jQuery('.zone_hidden_2').css('left'))+'px',
              top: parseFloat(jQuery('.zone_hidden_2').css('top'))-40+'px'
            });
          }

          if (count_animation > 24 && count_animation <= 160) {
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
            });
          } else if (count_animation > 160 && count_animation <= 320) {
            jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
            jQuery('.zone_v0').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat',
            });
          } else if (count_animation > 320 && count_animation <= 480) {
            jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
            jQuery('.zone_v0').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'
            });
          } else if (count_animation > 480) {
            jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
            jQuery('.zone_v0').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
            jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
              background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.zone_v-, .zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.ring').css('transform', 'rotate(0deg)');
          jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
          sound.stop();
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'solis_5');
            endNow()
          } else {
            solis_5();
            // console.log('continue');
          }
        }
      }, 250);
    }

  solis_3 = function(){
    jQuery('.wizard_main_screen').addClass('wizard_main_screen_solis');
    jQuery('.wizard_heading').text('Выполняется "Solis"');
    jQuery('.wizard_percent').text('32%');
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    cur_animation_val = 0;
    rotateVal = 0;
    count_animation = 1;
    phaseOne = setInterval(function(){
      if (count_animation <= 685){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v-, .zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0, .zone_hidden_1, .zone_hidden_2, .zone_hidden_3').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(0deg) scale(1.5)',
            zIndex: '1000',
        });
        jQuery('.zone_v-').css({
            background: '#fff url(/wp-content/themes/bcwish/img/drenag_2.png) center center/100% no-repeat',
        });
        jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0').css({
            background: 'transparent'
        });

        if (count_animation > 4 && count_animation <= 8) {
          jQuery('.zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
          });
        } else if (count_animation > 8 && count_animation <= 12) {
          jQuery('.zone_v5, .zone_v4').css({
            background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
          });
        } else if (count_animation > 12 && count_animation <= 16) {
          jQuery('.zone_v5, .zone_v4, .zone_v3').css({
            background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
          });
        } else if (count_animation > 16 && count_animation <= 20) {
          jQuery('.zone_v5, .zone_v4, .zone_v3, .zone_v2').css({
            background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
          });
        } else if (count_animation > 20 && count_animation <= 24) {
          jQuery('.zone_v5, .zone_v4, .zone_v3, .zone_v2, .zone_v1').css({
            background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
          });
        } else if (count_animation > 24 && count_animation <= 28) {
          jQuery('.zone_v0').removeClass('hidden').css({
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
          });
        } else if (count_animation > 28 && count_animation <= 32) {
          jQuery('.zone_v0').removeClass('hidden').css({
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
          });
          jQuery('.zone_hidden_1').removeClass('hidden').css({
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            left: parseFloat(jQuery('.zone_v0').css('left'))+'px',
            top: parseFloat(jQuery('.zone_v0').css('top'))-40+'px'
          });
        } else if (count_animation > 32 && count_animation <= 36) {
          jQuery('.zone_v0').removeClass('hidden').css({
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
          });
          jQuery('.zone_hidden_2').removeClass('hidden').css({
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            left: parseFloat(jQuery('.zone_hidden_1').css('left'))+'px',
            top: parseFloat(jQuery('.zone_hidden_1').css('top'))-40+'px'
          });
        } else if (count_animation > 36 && count_animation) {
          jQuery('.zone_v0').removeClass('hidden').css({
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
          });
          jQuery('.zone_hidden_3').removeClass('hidden').css({
            background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
            left: parseFloat(jQuery('.zone_hidden_2').css('left'))+'px',
            top: parseFloat(jQuery('.zone_hidden_2').css('top'))-40+'px'
          });
        }

        if (count_animation > 24 && count_animation <= 160) {
          jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
          });
        } else if (count_animation > 160 && count_animation <= 320) {
          jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
          jQuery('.zone_v0').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat',
          });
        } else if (count_animation > 320 && count_animation <= 480) {
          jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
          jQuery('.zone_v0').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'
          });
        } else if (count_animation > 480) {
          jQuery('.zone_hidden_1, .zone_hidden_2, .zone_hidden_3').addClass('hidden');
          jQuery('.zone_v0').css({
              background: '#fff',
              color: '#413e66',
              borderColor: '#413e66',
              transform: 'rotate(0deg) scale(1)',
              paddingTop: '2px',
              zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5').css({
            background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v-, .zone_v1, .zone_v2, .zone_v3, .zone_v4, .zone_v5, .zone_v0').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'solis_4');
          endNow()
        } else {
          solis_4();
          // console.log('continue');
        }
      }
    }, 250);
  }

  solis_2_4 = function(){
    jQuery('.wizard_heading').text('Выполняется "Solis"');
    jQuery('.wizard_percent').text('26%');
    jQuery('.wizard_main_screen').addClass('wizard_main_screen_solis');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_4');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'solis_3');
            endNow();
          } else {
            solis_3();

          } 
        }
    }, 1000);
  }

  solis_2_3 = function(){
    jQuery('.wizard_heading').text('Выполняется "Solis"');
    jQuery('.wizard_percent').text('20%');
    jQuery('.wizard_main_screen').addClass('wizard_main_screen_solis');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'solis_2_4');
            endNow();
          } else {
            solis_2_4();
          } 
        }
    }, 1000);
  } 

  solis_2_2 = function(){
    jQuery('.wizard_heading').text('Выполняется "Solis"');
    jQuery('.wizard_percent').text('16%');
    jQuery('.wizard_main_screen').addClass('wizard_main_screen_solis');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'solis_2_3');
            endNow();
          } else {
            solis_2_3();
          } 
        }
    }, 1000);
  } 

  solis_2_1 = function(){
    jQuery('.wizard_heading').text('Выполняется "Solis"');
    jQuery('.wizard_percent').text('12%');
    jQuery('.wizard_main_screen').addClass('wizard_main_screen_solis');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_1');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'solis_2_2');
            endNow();
          } else {
            solis_2_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  solis = function(){
    jQuery('.wizard_heading').text('Выполняется "Solis"');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.wizard_main_screen').addClass('wizard_main_screen_solis');

    jQuery('.zone_v2, .zone_v3, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_v2').css({
        background: 'url(/wp-content/themes/bcwish/img/nerazd.png) center center/100% no-repeat'
    });
    jQuery('.zone_v3').css({
        background: 'url(/wp-content/themes/bcwish/img/nerazd_001.png) center center/100% no-repeat'
    });
    jQuery('.zone_v4').css({
        background: 'url(/wp-content/themes/bcwish/img/nerazd_002.png) center center/100% no-repeat'
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2, .zone_v3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'solis_2_1');
          endNow()
        } else {
          solis_2_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  v5_14 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('98%');
    reloadTime = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v-').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/110% no-repeat',
        zIndex: '1000'
    });
    jQuery('.zone_v-').css({
        background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/120% no-repeat'
    });
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){
            sound.stop();
            reloadSound.play();
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        onEnd();
      }
    }, 250);
  }

  v5_13 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
// I
    phaseOne = setInterval(function(){
      if (count_animation <= 88){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        };
        reloadTime += 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            color: 'transparent',
            borderColor: 'transparent',
            opacity: 0.8,
            borderWidth: '1px',
            paddingTop: '4px',
            transform: 'rotate(70deg) scale(1.5)',
            background: 'url(/wp-content/themes/bcwish/img/triangle_air.png) center center/88% no-repeat',
            zIndex: '1000'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_d2, .zone_d5, .zone_d6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
// II
        jQuery('.wizard_percent').text('90%');
        phaseOne = setInterval(function(){
          if (count_animation <= 88){
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                color: 'transparent',
                borderColor: 'transparent',
                opacity: 0.8,
                borderWidth: '1px',
                paddingTop: '4px',
                transform: 'rotate(20deg) scale(1.5)',
                background: 'url(/wp-content/themes/bcwish/img/triangle_fire.png) center center/88% no-repeat',
                zIndex: '1000'
            });
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.zone_v1, .zone_s2, .zone_s4, .zone_v5, .zone_s5, .zone_s6').css({
                background: '#fff',
                color: '#413e66',
                borderColor: '#413e66',
                transform: 'rotate(0deg) scale(1)',
                paddingTop: '2px',
                zIndex: '2'
            });
// III
            jQuery('.wizard_percent').text('93%');
            phaseOne = setInterval(function(){
              if (count_animation <= 88){
                jQuery('.zone_s3, .zone_v4').css({
                    color: 'transparent',
                    borderColor: 'transparent',
                    opacity: 0.8,
                    borderWidth: '1px',
                    paddingTop: '4px',
                    transform: 'rotate(50deg) scale(1.5)',
                    background: 'url(/wp-content/themes/bcwish/img/triangle_water.png) center center/88% no-repeat',
                    zIndex: '1000'
                });
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                count_animation = 1;
                jQuery('.zone_s3, .zone_v4').css({
                    background: '#fff',
                    color: '#413e66',
                    borderColor: '#413e66',
                    transform: 'rotate(0deg) scale(1)',
                    paddingTop: '2px',
                    zIndex: '2'
                });
// IV
                jQuery('.wizard_percent').text('96%');
                phaseOne = setInterval(function(){
                  if (count_animation <= 88){
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        color: 'transparent',
                        borderColor: 'transparent',
                        opacity: 0.8,
                        borderWidth: '1px',
                        paddingTop: '4px',
                        transform: 'rotate(100deg) scale(1.5)',
                        background: 'url(/wp-content/themes/bcwish/img/triangle_earth.png) center center/88% no-repeat',
                        zIndex: '1000'
                    });
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    count_animation = 1;
                    jQuery('.zone_d4, .zone_d3, .zone_d2_, .zone_v2, .zone_v3').css({
                        background: '#fff',
                        color: '#413e66',
                        borderColor: '#413e66',
                        transform: 'rotate(0deg) scale(1)',
                        paddingTop: '2px',
                        zIndex: '2'
                    });
                    if (pausedStatus == true) {
                      localStorage.setItem('paused', 'v5_14');
                      endNow()
                    } else {
                      v5_14();
                    } 
                  }
                }, 250);
              }
            }, 250);
          }
        }, 250);
      }
    }, 250);
  }

  v5_12_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('84%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_4');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_13');
            endNow();
          } else {
            v5_13();

          } 
        }
    }, 1000);
  }

  v5_12_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('81%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_12_4');
            endNow();
          } else {
            v5_12_4();
          } 
        }
    }, 1000);
  } 

  v5_12_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('78%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_12_3');
            endNow();
          } else {
            v5_12_3();
          } 
        }
    }, 1000);
  } 

  v5_12_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('75%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').addClass('rot_mo_1');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_s2_, .zone_d5, .zone_d6').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_12_2');
            endNow();
          } else {
            v5_12_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v5_11_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('72%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').addClass('rot_mo_4');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_12_1');
            endNow();
          } else {
            v5_12_1();

          } 
        }
    }, 1000);
  }

  v5_11_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('69%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_11_4');
            endNow();
          } else {
            v5_11_4();
          } 
        }
    }, 1000);
  } 

  v5_11_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('66%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_11_3');
            endNow();
          } else {
            v5_11_3();
          } 
        }
    }, 1000);
  } 

  v5_11_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    
    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').addClass('rot_mo_1');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_11_2');
            endNow();
          } else {
            v5_11_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v5_10_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('60%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v5, .zone_v-').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v5, .zone_v-').addClass('rot_mo_4');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v5, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v5, .zone_v-').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_11_1');
            endNow();
          } else {
            v5_11_1();

          } 
        }
    }, 1000);
  }

  v5_10_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('57%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v5, .zone_v-').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v5, .zone_v-').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v5, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v5, .zone_v-').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_10_4');
            endNow();
          } else {
            v5_10_4();
          } 
        }
    }, 1000);
  } 

  v5_10_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('54%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v5, .zone_v-').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v5, .zone_v-').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v5, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v5, .zone_v-').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_10_3');
            endNow();
          } else {
            v5_10_3();
          } 
        }
    }, 1000);
  } 

  v5_10_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('51%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v1, .zone_v5, .zone_v-').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v1, .zone_v5, .zone_v-').addClass('rot_mo_1');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v1, .zone_v5, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v1, .zone_v5, .zone_v-').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'v5_10_2');
            endNow();
          } else {
            v5_10_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  v5_9 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('48%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat', transform: 'scale(1.5)'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v5_10_1');
          endNow()
        } else {
          v5_10_1();
        } 
      }
    }, 250);
  }

  v5_8 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('42%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat', transform: 'scale(1.5)'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v5_9');
          endNow()
        } else {
          v5_9();
        } 
      }
    }, 250);
  }

  v5_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('36%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6, .zone_cl').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_cl').addClass('rot_90_one').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat', transform: 'scale(1.5)'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6, .zone_cl').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_cl').removeClass('rot_90_one');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v5_8');
          endNow()
        } else {
          v5_8();
        } 
      }
    }, 250);
  }

  v5_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('30%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat', transform: 'scale(1.5)'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_s2_, .zone_v5, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v5_7');
          endNow()
        } else {
          v5_7();
        } 
      }
    }, 250);
  }

  v5_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('24%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6, .zone_cl').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_cl').addClass('rot_90_one').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat', transform: 'scale(1.5)'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6, .zone_cl').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_cl').removeClass('rot_90_one');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v5_6');
          endNow()
        } else {
          v5_6();
        } 
      }
    }, 250);
  }

  v5_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('18%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat', transform: 'scale(1.5)'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v5_5');
          endNow()
        } else {
          v5_5();
        } 
      }
    }, 250);
  }

  v5_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('12%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat', transform: 'scale(1.5)'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v5_4');
          endNow()
        } else {
          v5_4();
        } 
      }
    }, 250);
  }

  v5_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('6%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat', transform: 'scale(1.5)'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s2, .zone_v5, .zone_s5, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v5_3');
          endNow()
        } else {
          v5_3();
        } 
      }
    }, 250);
  }


  v5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол "V 5 — V 2"');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v5, .zone_s5, .zone_s6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_v-, .zone_v0').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        background: '#fff url(/wp-content/themes/bcwish/img/vig_.png) center center/100% no-repeat',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_v5, .zone_s5, .zone_s6').addClass('rot_90_one').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_s5, .zone_s6, .zone_v-, .zone_v0').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_v5, .zone_s5, .zone_s6').removeClass('rot_90_one');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'v5_2');
          endNow()
        } else {
          v5_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  universal_9 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('90%');
    reloadTime = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v-').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/110% no-repeat',
        zIndex: '1000'
    });
    jQuery('.zone_v-').css({
        background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/120% no-repeat'
    });
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){
            sound.stop();
            reloadSound.play();
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        onEnd();
      }
    }, 250);
  }

  universal_8_4 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('84%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').addClass('rot_mo_4');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_9');
            endNow();
          } else {
            universal_9();

          } 
        }
    }, 1000);
  }

  universal_8_3 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('80%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_8_4');
            endNow();
          } else {
            universal_8_4();
          } 
        }
    }, 1000);
  } 

  universal_8_2 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('76%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_8_3');
            endNow();
          } else {
            universal_8_3();
          } 
        }
    }, 1000);
  } 

  universal_8_1 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('72%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    
    jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').addClass('rot_mo_1');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_8_2');
            endNow();
          } else {
            universal_8_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  universal_7 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('66%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
      jQuery('.zone_ring')
        .removeClass('hidden')
        .css({
          opacity: 0.8,
          background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
        });
      jQuery('.ring').addClass('rot_ring');
      jQuery('.zone_ring').addClass('rot_zone_ring');
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_s6, .zone_s5, .zone_s2, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'universal_8_1');
          endNow()
        } else {
          universal_8_1();
        } 
      }
    }, 250);
  }

  universal_6_4 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('62%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').addClass('rot_mo_4');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_7');
            endNow();
          } else {
            universal_7();

          } 
        }
    }, 1000);
  }

  universal_6_3 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('58%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_6_4');
            endNow();
          } else {
            universal_6_4();
          } 
        }
    }, 1000);
  } 

  universal_6_2 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('54%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_6_3');
            endNow();
          } else {
            universal_6_3();
          } 
        }
    }, 1000);
  } 

  universal_6_1 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('50%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').addClass('rot_mo_1');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_6_2');
            endNow();
          } else {
            universal_6_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  universal_5 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('44%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        transform: 'scale(1.5)',
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
      jQuery('.zone_ring')
        .removeClass('hidden')
        .css({
          opacity: 0.8,
          background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
        });
      jQuery('.ring').addClass('rot_ring');
      jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_s2_, .zone_d2, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'universal_6_1');
          endNow()
        } else {
          universal_6_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  universal_4_4 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('40%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s3, .zone_v4').addClass('rot_mo_4');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_v4').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_5');
            endNow();
          } else {
            universal_5();

          } 
        }
    }, 1000);
  }

  universal_4_3 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('36%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s3, .zone_v4').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_v4').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_4_4');
            endNow();
          } else {
            universal_4_4();
          } 
        }
    }, 1000);
  } 

  universal_4_2 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('32%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s3, .zone_v4').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_v4').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_4_3');
            endNow();
          } else {
            universal_4_3();
          } 
        }
    }, 1000);
  } 

  universal_4_1 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('28%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    
    jQuery('.zone_s3, .zone_v4').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_v4').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_4_2');
            endNow();
          } else {
            universal_4_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  universal_3 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('22%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s3, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s3, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s3, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_s3, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s3, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'universal_4_1');
          endNow()
        } else {
          universal_4_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  universal_2_4 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('18%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').addClass('rot_mo_4');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').removeClass('rot_mo_4');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_3');
            endNow();
          } else {
            universal_3();

          } 
        }
    }, 1000);
  }

  universal_2_3 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('14%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').addClass('rot_mo_3');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').removeClass('rot_mo_3');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_2_4');
            endNow();
          } else {
            universal_2_4();
          } 
        }
    }, 1000);
  } 

  universal_2_2 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('10%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').addClass('rot_mo_2');
    
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').removeClass('rot_mo_2');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_2_3');
            endNow();
          } else {
            universal_2_3();
          } 
        }
    }, 1000);
  } 

  universal_2_1 = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('6%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'rotate(0deg) scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').removeClass('rot_mo_1');
          if (pausedStatus == true) {
            localStorage.setItem('paused', 'universal_2_2');
            endNow();
          } else {
            universal_2_2();
            // console.log('continue');
          } 
        }
    }, 1000);
  }  

  universal = function(){
    jQuery('.wizard_heading').text('Выполняется Универсальный протокол');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4, .zone_cl').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_ring')
      .removeClass('hidden')
      .removeAttr('style')
      .css({
        opacity: 0.8,
        background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat'
      });
    jQuery('.zone_cl').addClass('rot_90_one').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.ring').addClass('rot_ring');
    jQuery('.zone_ring').addClass('rot_zone_ring');

    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 240) {
          jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        } else if (count_animation > 240) {
          jQuery('.zone_ring').css({background: '#fff url(/wp-content/themes/bcwish/img/daemon.png) center center/100% no-repeat'});
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2, .zone_d2_, .zone_d3, .zone_d4, .zone_cl').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_cl').removeClass('rot_90_one');
        jQuery('.ring').removeClass('rot_ring');
        jQuery('.zone_ring').removeClass('rot_zone_ring');
        jQuery('.ring').css('transform', 'rotate(0deg)');
        jQuery('.zone_ring').css('transform', 'rotate(0deg) scale(1.5)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'universal_2_1');
          endNow()
        } else {
          universal_2_1();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_54 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('99%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_six').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2_, .zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_six');
        jQuery('.zone_v3').removeClass('rot_zone_supersolis');
        sound.stop();
        onEnd(); 
      }
    }, 250);
  }
  carma_53 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('98%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_five').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_five');
        jQuery('.zone_v4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_54');
          endNow()
        } else {
          carma_54();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_52 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('97%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d5').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_four').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_four');
        jQuery('.zone_d5').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_53');
          endNow()
        } else {
          carma_53();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_51 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('96%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_three').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_three');
        jQuery('.zone_d4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_52');
          endNow()
        } else {
          carma_52();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_50 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('95%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_two').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_two');
        jQuery('.zone_d3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_51');
          endNow()
        } else {
          carma_51();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_49 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('93%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v2').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_one').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_one');
        jQuery('.zone_v2').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_50');
          endNow()
        } else {
          carma_50();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_48 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('91%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_six').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_six');
        jQuery('.zone_v3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_49');
          endNow()
        } else {
          carma_49();
          console.log('continue');
        } 
      }
    }, 250);
  }
  carma_47 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('89%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_five').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_five');
        jQuery('.zone_v4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_48');
          endNow()
        } else {
          carma_48();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_46 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d5').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_four').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_four');
        jQuery('.zone_d5').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_47');
          endNow()
        } else {
          carma_47();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_45 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('85%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_three').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_three');
        jQuery('.zone_d4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_46');
          endNow()
        } else {
          carma_46();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_44 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('83%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_two').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_two');
        jQuery('.zone_d3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_45');
          endNow()
        } else {
          carma_45();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_43 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('81%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v2').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_one').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_one');
        jQuery('.zone_v2').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_44');
          endNow()
        } else {
          carma_44();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_42 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('79%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_six').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_six');
        jQuery('.zone_v3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_43');
          endNow()
        } else {
          carma_43();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_41 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('77%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_five').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_five');
        jQuery('.zone_v4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_42');
          endNow()
        } else {
          carma_42();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_40 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('75%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d5').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_four').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_four');
        jQuery('.zone_d5').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_41');
          endNow()
        } else {
          carma_41();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_39 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('74%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_three').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_three');
        jQuery('.zone_d4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_40');
          endNow()
        } else {
          carma_40();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_38 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('72%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_two').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_two');
        jQuery('.zone_d3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_39');
          endNow()
        } else {
          carma_39();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_37 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('70%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v2').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_one').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_one');
        jQuery('.zone_v2').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_38');
          endNow()
        } else {
          carma_38();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_36 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('68%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_six').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_six');
        jQuery('.zone_v3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_37');
          endNow()
        } else {
          carma_37();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_35 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('66%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_five').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_five');
        jQuery('.zone_v4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_36');
          endNow()
        } else {
          carma_36();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_34 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('64%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d5').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_four').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_four');
        jQuery('.zone_d5').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_35');
          endNow()
        } else {
          carma_35();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_33 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('62%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_three').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_three');
        jQuery('.zone_d4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_34');
          endNow()
        } else {
          carma_34();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_32 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('60%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_two').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_two');
        jQuery('.zone_d3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_33');
          endNow()
        } else {
          carma_33();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_31 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('58%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v2').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_one').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_one');
        jQuery('.zone_v2').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_32');
          endNow()
        } else {
          carma_32();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_30 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('56%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_six').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_six');
        jQuery('.zone_v3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_31');
          endNow()
        } else {
          carma_31();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_29 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('54%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_five').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_five');
        jQuery('.zone_v4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_30');
          endNow()
        } else {
          carma_30();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_28 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('52%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d5').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_four').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_four');
        jQuery('.zone_d5').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_29');
          endNow()
        } else {
          carma_29();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_27 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('50%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_three').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_three');
        jQuery('.zone_d4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_28');
          endNow()
        } else {
          carma_28();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_26 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('49%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_two').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_two');
        jQuery('.zone_d3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_27');
          endNow()
        } else {
          carma_27();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_25 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('47%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v2').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_one').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_one');
        jQuery('.zone_v2').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_26');
          endNow()
        } else {
          carma_26();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_24 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('45%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_six').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_six');
        jQuery('.zone_v3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_25');
          endNow()
        } else {
          carma_25();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_23 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('43%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_five').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_five');
        jQuery('.zone_v4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_24');
          endNow()
        } else {
          carma_24();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_22 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('41%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d5').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_four').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_four');
        jQuery('.zone_d5').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_23');
          endNow()
        } else {
          carma_23();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_21 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('39%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_three').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_three');
        jQuery('.zone_d4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_22');
          endNow()
        } else {
          carma_22();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_20 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('37%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_two').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_two');
        jQuery('.zone_d3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_21');
          endNow()
        } else {
          carma_21();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_19 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('35%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v2').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_one').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_one');
        jQuery('.zone_v2').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_20');
          endNow()
        } else {
          carma_20();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_18 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('33%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_six').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_six');
        jQuery('.zone_v3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_19');
          endNow()
        } else {
          carma_19();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_17 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('31%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_five').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_five');
        jQuery('.zone_v4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_18');
          endNow()
        } else {
          carma_18();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_16 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('29%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d5').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_four').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_four');
        jQuery('.zone_d5').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_17');
          endNow()
        } else {
          carma_17();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_15 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('27%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_three').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_three');
        jQuery('.zone_d4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_16');
          endNow()
        } else {
          carma_16();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_14 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('25%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_two').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_two');
        jQuery('.zone_d3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_15');
          endNow()
        } else {
          carma_15();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_13 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('24%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v2').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_one').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_one');
        jQuery('.zone_v2').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_14');
          endNow()
        } else {
          carma_14();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_12 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('22%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_six').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_six');
        jQuery('.zone_v3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_13');
          endNow()
        } else {
          carma_13();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_11 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('20%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_five').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_five');
        jQuery('.zone_v4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_12');
          endNow()
        } else {
          carma_12();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_10 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('18%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d5').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_four').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_four');
        jQuery('.zone_d5').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_11');
          endNow()
        } else {
          carma_11();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_9 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('16%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_three').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_three');
        jQuery('.zone_d4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_10');
          endNow()
        } else {
          carma_10();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_8 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('14%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_two').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_two');
        jQuery('.zone_d3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_9');
          endNow()
        } else {
          carma_9();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_7 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('12%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v2').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_one').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_one');
        jQuery('.zone_v2').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_8');
          endNow()
        } else {
          carma_8();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_6 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('10%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_six').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_six');
        jQuery('.zone_v3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_7');
          endNow()
        } else {
          carma_7();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_5 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('8%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_five').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_five');
        jQuery('.zone_v4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_6');
          endNow()
        } else {
          carma_6();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_4 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('6%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d5').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_four').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_four');
        jQuery('.zone_d5').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_5');
          endNow()
        } else {
          carma_5();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_3 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('4%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d4').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_three').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_three');
        jQuery('.zone_d4').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_4');
          endNow()
        } else {
          carma_4();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma_2 = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('2%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_d3').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_two').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_two');
        jQuery('.zone_d3').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_3');
          endNow()
        } else {
          carma_3();
          // console.log('continue');
        } 
      }
    }, 250);
  }
  carma = function(){
    jQuery('.wizard_heading').text('Выполняется Кармический протокол');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v2').addClass('rot_zone_supersolis').css({background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat'});
    jQuery('.zone_d2_').addClass('rot_d_one').css({background: '#fff url(/wp-content/themes/bcwish/img/d_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 104){
        if (reloadTime == 0){                                                                       //1
            sound.stop();
            reloadSound.play();
        } else if (reloadTime == 2) {
            sound.play();
        };
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        jQuery('.zone_d2_').removeClass('rot_d_one');
        jQuery('.zone_v2').removeClass('rot_zone_supersolis');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'carma_2');
          endNow()
        } else {
          carma_2();
          // console.log('continue');
        } 
      }
    }, 250);
  }

  moon_12_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_12_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').removeClass('rot_mo_3');
          moon_12_7();
        }
    }, 1000);
  } 

  moon_12_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').removeClass('rot_mo_2');
          moon_12_6()
        }
    }, 1000);
  } 

  moon_12_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').removeClass('rot_mo_1');
          moon_12_5(); 
        }
    }, 1000);
  }  

  moon_12_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d6, .zone_d2_, .zone_v1, .zone_s6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_12_4();
      }
    }, 250);
  }

  moon_12_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s6, .zone_s2_').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('34%');
          jQuery('.zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('36%');
          jQuery('.zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('38%');
          jQuery('.zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('40%');
          jQuery('.zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('44%');
          jQuery('.zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('46%');
          jQuery('.zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('48%');
          jQuery('.zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('50%');
          jQuery('.zone_s6, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s6, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_12_3();
      }
    }, 250);
  }

  moon_12_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v1').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('18%');
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('20%');
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('22%');
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('24%');
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('26%');
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('28%');
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('32%');
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_12_2();
      }
    }, 250);
  }

  moon_12 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d6, .zone_d2_').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_d6, .zone_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('2%');
          jQuery('.zone_d6, .zone_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('4%');
          jQuery('.zone_d6, .zone_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('6%');
          jQuery('.zone_d6, .zone_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('8%');
          jQuery('.zone_d6, .zone_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('10%');
          jQuery('.zone_d6, .zone_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('12%');
          jQuery('.zone_d6, .zone_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('14%');
          jQuery('.zone_d6, .zone_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('16%');
          jQuery('.zone_d6, .zone_d2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d6, .zone_d2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_12_1();
      }
    }, 250);
  }

  moon_11_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_11_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').removeClass('rot_mo_3');
          moon_11_7();
        }
    }, 1000);
  } 

  moon_11_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').removeClass('rot_mo_2');
          moon_11_6()
        }
    }, 1000);
  } 

  moon_11_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').removeClass('rot_mo_1');
          moon_11_5(); 
        }
    }, 1000);
  }  

  moon_11_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d6, .zone_v5, .zone_v1, .zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_11_4();
      }
    }, 250);
  }

  moon_11_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s6').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('34%');
          jQuery('.zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('36%');
          jQuery('.zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('38%');
          jQuery('.zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('40%');
          jQuery('.zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('44%');
          jQuery('.zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('46%');
          jQuery('.zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('48%');
          jQuery('.zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('50%');
          jQuery('.zone_s6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_11_3();
      }
    }, 250);
  }

  moon_11_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v5, .zone_v1').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_v5, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('18%');
          jQuery('.zone_v5, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('20%');
          jQuery('.zone_v5, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('22%');
          jQuery('.zone_v5, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('24%');
          jQuery('.zone_v5, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('26%');
          jQuery('.zone_v5, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('28%');
          jQuery('.zone_v5, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_v5, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('32%');
          jQuery('.zone_v5, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_11_2();
      }
    }, 250);
  }

  moon_11 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d6').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('2%');
          jQuery('.zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('4%');
          jQuery('.zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('6%');
          jQuery('.zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('8%');
          jQuery('.zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('10%');
          jQuery('.zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('12%');
          jQuery('.zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('14%');
          jQuery('.zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('16%');
          jQuery('.zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_11_1();
      }
    }, 250);
  }

  moon_9_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_9_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').removeClass('rot_mo_3');
          moon_9_7();
        }
    }, 1000);
  } 

  moon_9_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').removeClass('rot_mo_2');
          moon_9_6()
        }
    }, 1000);
  } 

  moon_9_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').removeClass('rot_mo_1');
          moon_9_5(); 
        }
    }, 1000);
  }  

  moon_9_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v5, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_9_4();
      }
    }, 250);
  }

  moon_9_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('34%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('36%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('38%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('40%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('44%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('46%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('48%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('50%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_9_3();
      }
    }, 250);
  }

  moon_9_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('18%');
          jQuery('.zone_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('20%');
          jQuery('.zone_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('22%');
          jQuery('.zone_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('24%');
          jQuery('.zone_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('26%');
          jQuery('.zone_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('28%');
          jQuery('.zone_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('32%');
          jQuery('.zone_v5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_9_2();
      }
    }, 250);
  }

  moon_9 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2, .zone_d5, .zone_d6').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('2%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('4%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('6%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('8%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('10%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('12%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('14%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('16%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_9_1();
      }
    }, 250);
  }

  moon_6_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_6_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').removeClass('rot_mo_3');
          moon_6_7();
        }
    }, 1000);
  } 

  moon_6_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').removeClass('rot_mo_2');
          moon_6_6()
        }
    }, 1000);
  } 

  moon_6_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').removeClass('rot_mo_1');
          moon_6_5(); 
        }
    }, 1000);
  }  

  moon_6_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s3, .zone_v1, .zone_v4, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_6_4();
      }
    }, 250);
  }

  moon_6_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('34%');
          jQuery('.zone_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('36%');
          jQuery('.zone_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('38%');
          jQuery('.zone_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('40%');
          jQuery('.zone_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('44%');
          jQuery('.zone_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('46%');
          jQuery('.zone_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('48%');
          jQuery('.zone_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('50%');
          jQuery('.zone_s3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_6_3();
      }
    }, 250);
  }

  moon_6_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v1, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_v1, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('18%');
          jQuery('.zone_v1, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('20%');
          jQuery('.zone_v1, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('22%');
          jQuery('.zone_v1, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('24%');
          jQuery('.zone_v1, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('26%');
          jQuery('.zone_v1, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('28%');
          jQuery('.zone_v1, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_v1, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('32%');
          jQuery('.zone_v1, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v1, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_6_2();
      }
    }, 250);
  }

  moon_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('2%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('4%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('6%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('8%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('10%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('12%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('14%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('16%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_6_1();
      }
    }, 250);
  }

  moon_3_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('zone_v1, .zone_v2, .zone_d5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('zone_v1, .zone_v2, .zone_d5').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('zone_v1, .zone_v2, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('zone_v1, .zone_v2, .zone_d5').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_3_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('zone_v1, .zone_v2, .zone_d5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('zone_v1, .zone_v2, .zone_d5').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('zone_v1, .zone_v2, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('zone_v1, .zone_v2, .zone_d5').removeClass('rot_mo_3');
          moon_3_6();
        }
    }, 1000);
  } 

  moon_3_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('zone_v1, .zone_v2, .zone_d5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('zone_v1, .zone_v2, .zone_d5').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('zone_v1, .zone_v2, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('zone_v1, .zone_v2, .zone_d5').removeClass('rot_mo_2');
          moon_3_5()
        }
    }, 1000);
  } 

  moon_3_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('zone_v1, .zone_v2, .zone_d5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('zone_v1, .zone_v2, .zone_d5').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('zone_v1, .zone_v2, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('zone_v1, .zone_v2, .zone_d5').removeClass('rot_mo_1');
          moon_3_4(); 
        }
    }, 1000);
  }  

  moon_3_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v1, .zone_v2, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v1, .zone_v2, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v1, .zone_v2, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_v1, .zone_v2, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v1, .zone_v2, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_3_3();
      }
    }, 250);
  }

  moon_3_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v1, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_v1, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('27%');
          jQuery('.zone_v1, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_v1, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('33%');
          jQuery('.zone_v1, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('36%');
          jQuery('.zone_v1, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('39%');
          jQuery('.zone_v1, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('41%');
          jQuery('.zone_v1, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('44%');
          jQuery('.zone_v1, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('47%');
          jQuery('.zone_v1, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v1, .zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_3_2();
      }
    }, 250);
  }

  moon_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('3%');
          jQuery('.zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('6%');
          jQuery('.zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('9%');
          jQuery('.zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('12%');
          jQuery('.zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('15%');
          jQuery('.zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('18%');
          jQuery('.zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('21%');
          jQuery('.zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('24%');
          jQuery('.zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_3_1();
      }
    }, 250);
  }

  moon_7_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_7_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').removeClass('rot_mo_3');
          moon_7_6();
        }
    }, 1000);
  } 

  moon_7_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').removeClass('rot_mo_2');
          moon_7_5()
        }
    }, 1000);
  } 

  moon_7_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').removeClass('rot_mo_1');
          moon_7_4(); 
        }
    }, 1000);
  }  

  moon_7_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3, .zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_7_3();
      }
    }, 250);
  }

  moon_7_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('27%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('33%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('36%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('39%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('41%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('44%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('47%');
          jQuery('.zone_s4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_7_2();
      }
    }, 250);
  }

  moon_7 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('3%');
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('6%');
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('9%');
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('12%');
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('15%');
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('18%');
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('21%');
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('24%');
          jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4, .zone_d5, .zone_d6, .zone_d3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_7_1();
      }
    }, 250);
  }

  moon_5_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_s3, .zone_s2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d4, .zone_s3, .zone_s2_').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_s3, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_s3, .zone_s2_').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_5_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_s3, .zone_s2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d4, .zone_s3, .zone_s2_').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_s3, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_s3, .zone_s2_').removeClass('rot_mo_3');
          moon_5_6();
        }
    }, 1000);
  } 

  moon_5_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_s3, .zone_s2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d4, .zone_s3, .zone_s2_').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_s3, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_s3, .zone_s2_').removeClass('rot_mo_2');
          moon_5_5()
        }
    }, 1000);
  } 

  moon_5_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_s3, .zone_s2_').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_d4, .zone_s3, .zone_s2_').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_s3, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_s3, .zone_s2_').removeClass('rot_mo_1');
          moon_5_4(); 
        }
    }, 1000);
  }  

  moon_5_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d4, .zone_s3, .zone_s2_').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d4, .zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d4, .zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_d4, .zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4, .zone_s3, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_5_3();
      }
    }, 250);
  }

  moon_5_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s3, .zone_s2_').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('27%');
          jQuery('.zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('33%');
          jQuery('.zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('36%');
          jQuery('.zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('39%');
          jQuery('.zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('41%');
          jQuery('.zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('44%');
          jQuery('.zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('47%');
          jQuery('.zone_s3, .zone_s2_').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s3, .zone_s2_').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_5_2();
      }
    }, 250);
  }

  moon_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('3%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('6%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('9%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('12%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('15%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('18%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('21%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('24%');
          jQuery('.zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_5_1();
      }
    }, 250);
  }

  moon_4_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_4_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').removeClass('rot_mo_3');
          moon_4_6();
        }
    }, 1000);
  } 

  moon_4_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').removeClass('rot_mo_2');
          moon_4_5()
        }
    }, 1000);
  } 

  moon_4_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').removeClass('rot_mo_1');
          moon_4_4(); 
        }
    }, 1000);
  }  

  moon_4_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d4, .zone_d6, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d4, .zone_d6, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_d4, .zone_d6, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4, .zone_d6, .zone_v3, .zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_4_3();
      }
    }, 250);
  }

  moon_4_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v3, .zone_v2').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_v3, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('27%');
          jQuery('.zone_v3, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_v3, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('33%');
          jQuery('.zone_v3, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('36%');
          jQuery('.zone_v3, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('39%');
          jQuery('.zone_v3, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('41%');
          jQuery('.zone_v3, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('44%');
          jQuery('.zone_v3, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('47%');
          jQuery('.zone_v3, .zone_v2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v3, .zone_v2').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_4_2();
      }
    }, 250);
  }

  moon_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d4, .zone_d6').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_d4, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('3%');
          jQuery('.zone_d4, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('6%');
          jQuery('.zone_d4, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('9%');
          jQuery('.zone_d4, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('12%');
          jQuery('.zone_d4, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('15%');
          jQuery('.zone_d4, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('18%');
          jQuery('.zone_d4, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('21%');
          jQuery('.zone_d4, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('24%');
          jQuery('.zone_d4, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d4, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_4_1();
      }
    }, 250);
  }

  moon_2_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_2_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').removeClass('rot_mo_3');
          moon_2_6();
        }
    }, 1000);
  } 

  moon_2_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').removeClass('rot_mo_2');
          moon_2_5()
        }
    }, 1000);
  } 

  moon_2_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').removeClass('rot_mo_1');
          moon_2_4(); 
        }
    }, 1000);
  }  

  moon_2_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/vig_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_d5, .zone_d6, .zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_2_3();
      }
    }, 250);
  }

  moon_2_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v-').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('27%');
          jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('33%');
          jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('36%');
          jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('39%');
          jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('41%');
          jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('44%');
          jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('47%');
          jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v-').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_2_2();
      }
    }, 250);
  }

  moon_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2, .zone_d5, .zone_d6').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('3%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('6%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('9%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('12%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('15%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('18%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('21%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('24%');
          jQuery('.zone_d2, .zone_d5, .zone_d6').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2, .zone_d5, .zone_d6').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_2_1();
      }
    }, 250);
  }

  moon_8_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_8_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').removeClass('rot_mo_3');
          moon_8_6();
        }
    }, 1000);
  } 

  moon_8_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').removeClass('rot_mo_2');
          moon_8_5()
        }
    }, 1000);
  } 

  moon_8_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').removeClass('rot_mo_1');
          moon_8_4(); 
        }
    }, 1000);
  }  

  moon_8_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4, .zone_s4, .zone_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_8_3();
      }
    }, 250);
  }

  moon_8_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_s4, .zone_s5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('27%');
          jQuery('.zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('33%');
          jQuery('.zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('36%');
          jQuery('.zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('39%');
          jQuery('.zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('41%');
          jQuery('.zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('44%');
          jQuery('.zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('47%');
          jQuery('.zone_s4, .zone_s5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_s4, .zone_s5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_8_2();
      }
    }, 250);
  }

  moon_8 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('zone_d5, .zone_d6, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('3%');
          jQuery('zone_d5, .zone_d6, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('6%');
          jQuery('zone_d5, .zone_d6, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('9%');
          jQuery('zone_d5, .zone_d6, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('12%');
          jQuery('zone_d5, .zone_d6, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('15%');
          jQuery('zone_d5, .zone_d6, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('18%');
          jQuery('zone_d5, .zone_d6, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('21%');
          jQuery('zone_d5, .zone_d6, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('24%');
          jQuery('zone_d5, .zone_d6, .zone_d3, .zone_d4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d5, .zone_d6, .zone_d3, .zone_d4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_8_1();
      }
    }, 250);
  }

  moon_10_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_10_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').removeClass('rot_mo_3');
          moon_10_6();
        }
    }, 1000);
  } 

  moon_10_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').removeClass('rot_mo_2');
          moon_10_5()
        }
    }, 1000);
  } 

  moon_10_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').removeClass('rot_mo_1');
          moon_10_4(); 
        }
    }, 1000);
  }  

  moon_10_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_10_3();
      }
    }, 250);
  }

  moon_10 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('5%');
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('10%');
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('15%');
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('20%');
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('25%');
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('35%');
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('40%');
          jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_d2_, .zone_d6, .zone_d3, .zone_d4, .zone_d5').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_10_2();
      }
    }, 250);
  }

  moon_14_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v-, .zone_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v0, .zone_v-, .zone_v3').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v0, .zone_v-, .zone_v3').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_14_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v-, .zone_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v0, .zone_v-, .zone_v3').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v0, .zone_v-, .zone_v3').removeClass('rot_mo_3');
          moon_14_6();
        }
    }, 1000);
  } 

  moon_14_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v-, .zone_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v0, .zone_v-, .zone_v3').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v0, .zone_v-, .zone_v3').removeClass('rot_mo_2');
          moon_14_5()
        }
    }, 1000);
  } 

  moon_14_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v-, .zone_v3').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_v0, .zone_v-, .zone_v3').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v0, .zone_v-, .zone_v3').removeClass('rot_mo_1');
          moon_14_4(); 
        }
    }, 1000);
  }  

  moon_14_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v0, .zone_v-, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        jQuery('.zone_v0').css({background: '#fff url(/wp-content/themes/bcwish/img/vig_.png) center center/100% no-repeat'});
        jQuery('.zone_v-').css({background: '#fff url(/wp-content/themes/bcwish/img/edinenie_s_tvorcom.png) center center/100% no-repeat'});
        jQuery('.zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat'});
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v-, .zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_14_3();
      }
    }, 250);
  }

  moon_14 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v0, .zone_v-, .zone_v3').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('5%');
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('10%');
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('15%');
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('20%');
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('25%');
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('35%');
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('40%');
          jQuery('.zone_v0, .zone_v-, .zone_v3').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v-, .zone_v3').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_14_2();
      }
    }, 250);
  }

  moon_13_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_13_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').removeClass('rot_mo_3');
          moon_13_6();
        }
    }, 1000);
  } 

  moon_13_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').removeClass('rot_mo_2');
          moon_13_5()
        }
    }, 1000);
  } 

  moon_13_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').removeClass('rot_mo_1');
          moon_13_4(); 
        }
    }, 1000);
  }  

  moon_13_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_13_3();
      }
    }, 250);
  }

  moon_13 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('5%');
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('10%');
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('15%');
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('20%');
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('25%');
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('35%');
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('40%');
          jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v2, .zone_v1, .zone_v5, .zone_v4').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_13_2();
      }
    }, 250);
  }

  moon_1_6 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('92%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v1').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v0, .zone_v1').addClass('rot_mo_4');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v0, .zone_v1').removeClass('rot_mo_4');
          onEnd();
        }
    }, 1000);
  }

  moon_1_5 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('87%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v1').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v0, .zone_v1').addClass('rot_mo_3');

    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v0, .zone_v1').removeClass('rot_mo_3');
          moon_1_6();
        }
    }, 1000);
  } 

  moon_1_4 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('71%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v1').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });

    jQuery('.zone_v0, .zone_v1').addClass('rot_mo_2');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v0, .zone_v1').removeClass('rot_mo_2');
          moon_1_5()
        }
    }, 1000);
  } 

  moon_1_3 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('63%');
    reloadTime = 0;
    reloadTime1 = 0;
    d12Val = 0;
    rotateVal = 0;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    cur_animation_val = 10;
    count_animation = 1;
    jQuery('.zone_v0, .zone_v1').css({
      background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
      transform: 'scale(1.5)',
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      paddingTop: '4px',
      zIndex: '1000'
    });
    var zone_gsap = gsap.timeline();
    jQuery('.zone_v0, .zone_v1').addClass('rot_mo_1');
    phaseSeven_one = setInterval(function(){
        if (count_animation <= 40){
          if (reloadTime == 0){                                                                       //1
              sound.stop();
              reloadSound.play();
          };
          reloadTime += 1;
          count_animation += 1;
        } else if(count_animation <= 57) {
            count_animation += 1;
        } else {
          clearInterval(phaseSeven_one);
          count_animation = 1;
          jQuery('.zone_v0, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(-'+0+'deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
          });
          jQuery('.zone_v0, .zone_v1').removeClass('rot_mo_1');
          moon_1_4(); 
        }
    }, 1000);
  }  

  moon_1_2 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v0, .zone_v1').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    jQuery('.zone_v0').css({background: '#fff url(/wp-content/themes/bcwish/img/vig_.png) center center/100% no-repeat'});
    
    phaseOne = setInterval(function(){
      if (count_animation <= 360){
        if (count_animation == 120 || count_animation == 240){
            reloadSound.play();
        };
        if (count_animation > 0 && count_animation <= 120) {
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 220) {
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
        } else if (count_animation > 220 && count_animation <= 360) {
          jQuery('.zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_1_3();
      }
    }, 250);
  }

  moon_1 = function(){
    jQuery('.wizard_heading').text('Выполняется протокол Лунного дня');
    jQuery('.wizard_percent').text('0%');
    reloadTime = 0;
    cur_animation_val = 0;
    count_animation = 1;
    jQuery('.ring').addClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.zone_v0, .zone_v1').css({
        color: 'transparent',
        borderColor: 'transparent',
        transform: 'scale(1.5)',
        opacity: 0.8,
        borderWidth: '1px',
        paddingTop: '4px',
        zIndex: '1000'
    });
    
    phaseOne = setInterval(function(){
      if (count_animation <= 1080){
        if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
            reloadSound.play();
        };
        if (count_animation <= 120){
          jQuery('.zone_v0, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 120 && count_animation <= 240){
          jQuery('.wizard_percent').text('5%');
          jQuery('.zone_v0, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 240 && count_animation <= 360){
          jQuery('.wizard_percent').text('10%');
          jQuery('.zone_v0, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 360 && count_animation <= 480){
          jQuery('.wizard_percent').text('15%');
          jQuery('.zone_v0, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 480 && count_animation <= 600){
          jQuery('.wizard_percent').text('20%');
          jQuery('.zone_v0, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 600 && count_animation <= 720){
          jQuery('.wizard_percent').text('25%');
          jQuery('.zone_v0, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 720 && count_animation <= 840){
          jQuery('.wizard_percent').text('30%');
          jQuery('.zone_v0, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        } else if (count_animation > 840 && count_animation <= 960){
          jQuery('.wizard_percent').text('35%');
          jQuery('.zone_v0, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
        } else if (count_animation > 960 && count_animation <= 1080){
          jQuery('.wizard_percent').text('40%');
          jQuery('.zone_v0, .zone_v1').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
        }
        reloadTime += 1;
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.zone_v0, .zone_v1').css({
            background: '#fff',
            color: '#413e66',
            borderColor: '#413e66',
            transform: 'rotate(0deg) scale(1)',
            paddingTop: '2px',
            zIndex: '2'
        });
        moon_1_2();
      }
    }, 250);
  }

// Если есть незавершенный протокол
  if (localStorage.getItem('paused')) {
    jQuery('.wizard_continue').removeClass('hidden');
    returned_img = localStorage.getItem('pausedPhoto');
    protocol_type = localStorage.getItem('protocol_type');
    pausedStatus = true;
    jQuery('.main_arrow').addClass('main_arrow_combine');
    jQuery('.main_arrow_title').addClass('main_arrow_title_combine');
  }

  jQuery('.wizard_continue.btn-warning').on('click', function(event) {
    console.log(protocol_type);
    if (protocol_type == 'human') {
      jQuery('.machine_screen, #intro').addClass('hidden');
      jQuery('.wizard_returned').attr('src', returned_img);
      jQuery('.wm_start').removeClass('unopacity');
      jQuery('.wm_start').removeAttr('style');
      jQuery('.wizard_to_protList, .wizard_play, .wizard_starter_alt').fadeIn(500).removeClass('hidden');
      jQuery('.wizard_main_screen').fadeIn(500).removeClass('hidden').css('display', 'flex');
      jQuery('.wizard_heading').text('Перенесите зоны на фото и можно будет продолжить работу.');
    } else if (protocol_type == 'estate') {
      jQuery('.machine_screen, #intro').addClass('hidden');
      jQuery('.wm_start').removeClass('unopacity');
      jQuery('.wm_start').removeAttr('style');
      jQuery('.wizard_returned_estate').attr('src', returned_img);
      jQuery('.wizard_estate').fadeIn(500).removeClass('hidden');
      jQuery('.wizard_heading').text('Отметьте специальной точкой центр помещения, за тем - точки входа электричества и скопления розеток, двери, сан узлы и внутренние углы.');
      jQuery('.estate_start').text('Продолжить');
    }
  });

  //К переносу зон
  not_ended = localStorage.getItem('paused');
  set_protocol = function (that) {
    jQuery('.zone_ring').addClass('hidden');
    jQuery('.wizard_operation').addClass('hidden');
    jQuery('.ring').removeClass('hidden');
    jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
    jQuery('.wizard_to_what_way, .wizard_to_protDiag').addClass('hidden');
    jQuery('.wizard_to_protList, .wizard_play, .wizard_starter_alt').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_main_screen').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.wizard_heading').text('Осталось перенести зоны на фото и можно начинать!');
    if (that.hasClass('wizard_protocol_1')) {
      cur_protocol = 'v1';
    } else if (that.hasClass('wizard_protocol_2')) {
      cur_protocol = 'v2';
    } else if (that.hasClass('wizard_protocol_3')) {
      cur_protocol = 'v3';
    } else if (that.hasClass('wizard_protocol_4')) {
      cur_protocol = 'v4';
    } else if (that.hasClass('wizard_protocol_5')) {
      cur_protocol = 'v5';
    } else if (that.hasClass('wizard_protocol_6')) {
      cur_protocol = 'drenag';
    } else if (that.hasClass('wizard_protocol_7')) {
      cur_protocol = 'solis';
    } else if (that.hasClass('wizard_protocol_8')) {
      cur_protocol = 'visceral';
    } else if (that.hasClass('wizard_protocol_9')) {
      cur_protocol = 'universal';
    } else if (that.hasClass('wizard_protocol_10')) {
      cur_protocol = 'carma';
    } else if (that.hasClass('wizard_protocol_0')) {
      cur_protocol = 'moon';
    }
    localStorage.setItem('cur_protocol', cur_protocol);
  }
  jQuery('.wizard_protocol').on('click', function(event) {
    that = jQuery(this);
    if (not_ended) {
      swal({
        title: "Есть незавершенный протокол",
        text: "Нажмите 'Продолжить' для завершения начатого протокола или 'Новый' для запуска выбранного сейчас (сохраненные данные, при этом, будут удалены).",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-success",
        cancelButtonClass: "btn-info",
        cancelButtonText: "Продолжить",
        confirmButtonText: "Новый протокол",
        closeOnConfirm: false
      },
      function(isConfirm) {
        if (isConfirm) {
          pausedStatus = false;
          protocolfromMemory = undefined;
          set_protocol(that);
          console.log(cur_protocol);
          swal.close()
        } else {
          jQuery('.zone_ring').addClass('hidden');
          jQuery('.wizard_operation').addClass('hidden');
          jQuery('.ring').removeClass('hidden');
          jQuery('.ring, .zone_ring').css('transform', 'rotate(0deg)');
          jQuery('.wizard_to_what_way, .wizard_to_protDiag').addClass('hidden');
          jQuery('.wizard_to_protList, .wizard_play, .wizard_starter_alt').fadeIn(500).removeClass('hidden');
          jQuery('.wizard_main_screen').fadeIn(500).removeClass('hidden').css('display', 'flex');
          jQuery('.wizard_heading').text('Осталось перенести зоны на фото и можно начинать!');
        }
      })
    } else {
      set_protocol(that);
    }
  });
  
  checkPoints = function(){
    jQuery('.zone_movable').each(function() {
      if(parseFloat(jQuery(this).css('left')) < 480){
        pointsStatus = false;
        // console.log('status '+' '+jQuery(this).text()+' '+jQuery(this).css('top')+' '+pointsStatus);
      }
      if (parseFloat(jQuery('.ring').css('left')) < 380) {
        pointsStatus = false;
      }
    });
  }

  // curient moon day
  let moonBegin = 1613032380000;
  let moonMonth = 29.53059 * 24 * 60 * 60 * 1000;
  let now = Date.now();
  let moonDay = ((now - moonBegin) %  moonMonth)/(moonMonth/30)|0;
  console.log(`Сейчас ${moonDay} лунный день`);
  jQuery('.cur_moon_day_val').text(moonDay);

  jQuery('.wizard_play, .wizard_starter_alt').on('click', function(event) {
    checkPoints();
    // if(pointsStatus == false){
    //   swal("Не все зоны перенесены!", "Перед началом процедуры необходимо перенести на фото калибровочное кольцо и все зоны.", "info");
    //   alert_altSound.play();
    //   pointsStatus = true;
    // } else {
      if (pausedStatus == true) {
        // jQuery('.wizard_returned').attr('src', localStorage.getItem('pausedPhoto'));
        // console.log(localStorage.getItem('pausedPhoto'));
        protocolfromMemory = eval(localStorage.getItem('paused'));
        protocolfromMemory();
      } else {
        jQuery('.wizard_stop').removeClass('wizard_stop_inProgress');
        var protocol = localStorage.getItem('cur_protocol');
        if (protocol == 'v1') {
          v1();
          jQuery('.status_title').text('Протокол V1');
        } else if (protocol == 'v2') {
          v2();
          jQuery('.status_title').text('Протокол V2-5');
        } else if (protocol == 'v3') {
          v3();
          jQuery('.status_title').text('Протокол V3-4');
        } else if (protocol == 'v4') {
          v4();
          jQuery('.status_title').text('Протокол V4-3');
        } else if (protocol == 'v5') {
          v5();
          jQuery('.status_title').text('Протокол V5-2');
        } else if (protocol == 'solis') {
          solis();
          jQuery('.status_title').text('Протокол Solis');
        } else if (protocol == 'drenag') {
          drenag();
          jQuery('.status_title').text('Дренажный протокол');
        } else if (protocol == 'universal') {
          universal();
          jQuery('.status_title').text('Универсальный протокол');
        } else if (protocol == 'visceral') {
          mmt();
          jQuery('.status_title').text('Висцеральный протокол');
        } else if (protocol == 'carma') {
          carma();
          jQuery('.status_title').text('Кармический протокол');
        } else if (protocol == 'moon') {
          if (moonDay == 8 || moonDay == 22) {
            moon_8();
          } else if (moonDay == 9 || moonDay == 21) {
            moon_9();
          } else if (moonDay == 10 || moonDay == 20) {
            moon_10();
          } else if (moonDay == 11 || moonDay == 19) {
            moon_11();
          } else if (moonDay == 12 || moonDay == 18) {
            moon_12();
          } else if (moonDay == 14 || moonDay == 15 || moonDay == 16) {
            moon_14();
          } else if (moonDay == 13 || moonDay == 17) {
            moon_13();
          } else if (moonDay == 29 || moonDay == 30 || moonDay == 1) {
            // moon_1();
            moon_14();
          } else if (moonDay == 2 || moonDay == 28) {
            moon_2();
          } else if (moonDay == 3 || moonDay == 27) {
            moon_3();
          } else if (moonDay == 4 || moonDay == 26) {
            moon_4();
          } else if (moonDay == 5 || moonDay == 25) {
            moon_5();
          } else if (moonDay == 6 || moonDay == 24) {
            moon_6();
          } else if (moonDay == 7 || moonDay == 23) {
            moon_7();
          }
          jQuery('.status_title').text('Протокол '+moonDay+' лунного дня');
        }
      }
      pausedStatus = false;
      console.log('ding');
      jQuery('.wizard_play, .wizard_starter_alt').addClass('hidden');
      jQuery('.wizard_stop, .zone_ring').fadeIn(500).removeClass('hidden');
      jQuery('.wizard_to_protList').addClass('hidden');
      jQuery('.wizard_disbledMove').removeClass('hidden');
      jQuery('.ring').addClass('in_progress');
      localStorage.removeItem('paused');
      localStorage.removeItem('pausedPhoto');
      jQuery('.wizard_stop').removeClass('wizard_stop_inProgress');
      if (protocol == 'moon') {
        jQuery('.wizard_stop').css('borderColor', 'transparent');
        jQuery('.wizard_stop_icon').css('display', 'none');
      }
    // }
  });


  // STOP
  function hideNote() {
    jQuery('.wizard_stop').popover('hide');
  }
  function hideNoteTwo() {
    jQuery('.wizard_disbledMove').popover('hide');
  }

  jQuery('.wizard_stop') .on('click', function(event) {
    if (!protocol == 'moon') {
      jQuery('.wizard_stop').addClass('wizard_stop_inProgress');
      jQuery('.header-title').text('Программа останавливается');
      // endStatus = true;
      jQuery('.wizard_stop').popover('show');
      setTimeout(hideNote, 10000);
      localStorage.setItem('pausedPhoto', jQuery('.wizard_returned').attr('src'));
      pausedStatus = true;
      // console.log('pausedStatus = true');
    }
  });

  jQuery('.wizard_disbledMove').on('click', function(event) {
    jQuery('.wizard_disbledMove').popover('show');
    setTimeout(hideNoteTwo, 10000);
  });
});
