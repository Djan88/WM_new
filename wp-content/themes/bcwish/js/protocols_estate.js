jQuery(function() {
  var onEndEstate,
      pausedStatus = false,
      sound,
      
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


  endNowEstate = function(){
    reloadTime = 0;
    reloadTime1 = 0;
    rotateVal = 0;
    count_animation = 1;
    localStorage.setItem('protocol_type', 'estate');
    alertSound.play();
    jQuery('.estate_start').text('Продолжить');

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
        jQuery('.estate-percent').addClass('transparent').text('0%');
        jQuery('.estate_start').removeClass('hidden');
        jQuery('.estate_pause').addClass('hidden');
        jQuery('.zone_estate.zone_default').removeClass('hidden');
        jQuery('.wizard_heading').text('Отметьте специальной точкой центр помещения, за тем - точки входа электричества и скопления розеток, двери, сан узлы и внутренние углы.');
      }
    })
  }

  onEndEstate = function(){
    jQuery('.estate-percent').text('100%');
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
      cancelButtonText: "Повторить протокол",
      confirmButtonText: "Новый клиент",
      closeOnConfirm: false
    },
    function(isConfirm) {
      if (isConfirm) {
        jQuery(location).attr('href','/');
      } else {
        jQuery('.estate-percent').addClass('transparent').text('0%');
        jQuery('.estate_start').removeClass('hidden');
        jQuery('.estate_pause').addClass('hidden');
        jQuery('.zone_estate.zone_default').removeClass('hidden');
        jQuery('.wizard_heading').text('Отметьте специальной точкой центр помещения, за тем - точки входа электричества и скопления розеток, двери, сан узлы и внутренние углы.');
        swal.close();
      }
    })
  }





  estate_3_12 = function(){
    jQuery('.estate-percent').text('99%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner_2').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
    });
    jQuery('.zone_corner_1').addClass('rot_estate_lovushka').css({
      background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_corner_2').removeClass('rot_estate_super');
        jQuery('.zone_corner_1').removeClass('rot_estate_lovushka');
        sound.stop();
        onEndEstate();
      }
    }, 250);
  }
  estate_3_11 = function(){
    jQuery('.estate-percent').text('96%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner_1').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
    });
    jQuery('.zone_corner_2').addClass('rot_estate_lovushka').css({
      background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_corner_1').removeClass('rot_estate_super');
        jQuery('.zone_corner_2').removeClass('rot_estate_lovushka');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_12');
          endNowEstate();
        } else {
          estate_3_12();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_3_10 = function(){
    jQuery('.estate-percent').text('93%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner').css({
      background: '#fff url(/wp-content/themes/bcwish/img/daemon_adventure.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_11');
          endNowEstate();
        } else {
          estate_3_11();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_3_9 = function(){
    jQuery('.estate-percent').text('90%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner').css({
      background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_10');
          endNowEstate();
        } else {
          estate_3_10();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_3_8 = function(){
    jQuery('.estate-percent').text('87%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner').css({
      background: '#fff url(/wp-content/themes/bcwish/img/daemon_adventure.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_9');
          endNowEstate();
        } else {
          estate_3_9();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_3_7 = function(){
    jQuery('.estate-percent').text('84%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner').css({
      background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_8');
          endNowEstate();
        } else {
          estate_3_8();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_3_6 = function(){
    jQuery('.estate-percent').text('81%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner').css({
      background: '#fff url(/wp-content/themes/bcwish/img/daemon_adventure.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_7');
          endNowEstate();
        } else {
          estate_3_7();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_3_5 = function(){
    jQuery('.estate-percent').text('78%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner').css({
      background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_6');
          endNowEstate();
        } else {
          estate_3_6();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_3_4 = function(){
    jQuery('.estate-percent').text('75%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner').css({
      background: '#fff url(/wp-content/themes/bcwish/img/daemon_adventure.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_5');
          endNowEstate();
        } else {
          estate_3_5();
          console.log('continue');
        } 
      }
    }, 250);
  }
  estate_3_3 = function(){
    jQuery('.estate-percent').text('72%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner').css({
      background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_4');
          endNowEstate();
        } else {
          estate_3_4();
          console.log('continue');
        } 
      }
    }, 250);
  }
  estate_3_2 = function(){
    jQuery('.estate-percent').text('69%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner_2').addClass('rot_estate_lovushka').css({
      background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
    });
    jQuery('.zone_corner_1').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_corner_2').removeClass('rot_estate_lovushka');
        jQuery('.zone_corner_1').removeClass('rot_estate_super');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_3');
          endNowEstate();
        } else {
          estate_3_3();
          console.log('continue');
        } 
      }
    }, 250);
  }
  estate_3_1 = function(){
    jQuery('.estate-percent').text('66%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_corner, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_corner_1').addClass('rot_estate_lovushka').css({
      background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
    });
    jQuery('.zone_corner_2').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/x.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_corner, .zone_estate_center').css({
            background: '#fff',
            color: '#1bb1dc',
            borderColor: '#1bb1dc',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_corner_1').removeClass('rot_estate_lovushka');
        jQuery('.zone_corner_2').removeClass('rot_estate_super');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_2');
          endNowEstate();
        } else {
          estate_3_2();
          console.log('continue');
        } 
      }
    }, 250);
  }  

  estate_2_10 = function(){
    jQuery('.estate-percent').text('63%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_door, .zone_el, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_door, .zone_el').css({
      background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_door, .zone_el, .zone_estate_center').css({
            background: '#fff',
            color: '#b5a919',
            borderColor: '#b5a919',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_el').css({
            color: '#8e21c5',
            borderColor: '#8e21c5'
        });
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_3_1');
          endNowEstate();
        } else {
          estate_3_1();
          console.log('continue');
        } 
      }
    }, 250);
  }  

  estate_2_9 = function(){
    jQuery('.estate-percent').text('60%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_door, .zone_el, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_door, .zone_el').addClass('rot_estate_lovushka').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_door, .zone_el, .zone_estate_center').css({
            background: '#fff',
            color: '#b5a919',
            borderColor: '#b5a919',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_el').css({
            color: '#8e21c5',
            borderColor: '#8e21c5'
        });
        jQuery('.zone_door, .zone_el').removeClass('rot_estate_lovushka');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_2_10');
          endNowEstate();
        } else {
          estate_2_10();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_2_8 = function(){
    jQuery('.estate-percent').text('57%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_door, .zone_el, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_door, .zone_el').css({
      background: '#fff url(/wp-content/themes/bcwish/img/daemon_adventure.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_door, .zone_el, .zone_estate_center').css({
            background: '#fff',
            color: '#b5a919',
            borderColor: '#b5a919',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_el').css({
            color: '#8e21c5',
            borderColor: '#8e21c5'
        });
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_2_9');
          endNowEstate();
        } else {
          estate_2_9();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_2_7 = function(){
    jQuery('.estate-percent').text('54%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_door, .zone_el, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_door, .zone_el').css({
      background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_door, .zone_el, .zone_estate_center').css({
            background: '#fff',
            color: '#b5a919',
            borderColor: '#b5a919',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_el').css({
            color: '#8e21c5',
            borderColor: '#8e21c5'
        });
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_2_8');
          endNowEstate();
        } else {
          estate_2_8();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_2_6 = function(){
    jQuery('.estate-percent').text('51%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_door, .zone_el, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_door, .zone_el').css({
      background: '#fff url(/wp-content/themes/bcwish/img/daemon_adventure.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_door, .zone_el, .zone_estate_center').css({
            background: '#fff',
            color: '#b5a919',
            borderColor: '#b5a919',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_el').css({
            color: '#8e21c5',
            borderColor: '#8e21c5'
        });
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_2_7');
          endNowEstate();
        } else {
          estate_2_7();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_2_5 = function(){
    jQuery('.estate-percent').text('48%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_door, .zone_el, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_door, .zone_el').css({
      background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_door, .zone_el, .zone_estate_center').css({
            background: '#fff',
            color: '#b5a919',
            borderColor: '#b5a919',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_el').css({
            color: '#8e21c5',
            borderColor: '#8e21c5'
        });
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_2_6');
          endNowEstate();
        } else {
          estate_2_6();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_2_4 = function(){
    jQuery('.estate-percent').text('45%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_door, .zone_el, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_door, .zone_el').css({
      background: '#fff url(/wp-content/themes/bcwish/img/daemon_adventure.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_door, .zone_el, .zone_estate_center').css({
            background: '#fff',
            color: '#b5a919',
            borderColor: '#b5a919',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_el').css({
            color: '#8e21c5',
            borderColor: '#8e21c5'
        });
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_2_5');
          endNowEstate();
        } else {
          estate_2_5();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_2_3 = function(){
    jQuery('.estate-percent').text('42%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_door, .zone_el, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_door, .zone_el').css({
      background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_door, .zone_el, .zone_estate_center').css({
            background: '#fff',
            color: '#b5a919',
            borderColor: '#b5a919',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_el').css({
            color: '#8e21c5',
            borderColor: '#8e21c5'
        });
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_2_4');
          endNowEstate();
        } else {
          estate_2_4();
          console.log('continue');
        } 
      }
    }, 250);
  }  
  estate_2_2 = function(){
    jQuery('.estate-percent').text('39%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_door, .zone_el, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_door, .zone_el').css({
      background: '#fff url(/wp-content/themes/bcwish/img/daemon_adventure.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_door, .zone_el, .zone_estate_center').css({
            background: '#fff',
            color: '#b5a919',
            borderColor: '#b5a919',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_el').css({
            color: '#8e21c5',
            borderColor: '#8e21c5'
        });
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_2_3');
          endNowEstate();
        } else {
          estate_2_3();
          console.log('continue');
        } 
      }
    }, 250);
  }
  estate_2_1 = function(){
    jQuery('.estate-percent').text('36%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_door, .zone_el, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_door, .zone_el').css({
      background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_door, .zone_el, .zone_estate_center').css({
            background: '#fff',
            color: '#b5a919',
            borderColor: '#b5a919',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_el').css({
            color: '#8e21c5',
            borderColor: '#8e21c5'
        });
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_2_2');
          endNowEstate();
        } else {
          estate_2_2();
          console.log('continue');
        } 
      }
    }, 250);
  }
  estate_1_12 = function(){
    jQuery('.estate-percent').text('33%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_wc, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_wc').addClass('rot_estate_lovushka').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_wc, .zone_estate_center').css({
            background: '#fff',
            color: '#19b55f',
            borderColor: '#19b55f',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_wc').removeClass('rot_estate_lovushka');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_2_1');
          endNowEstate();
        } else {
          estate_2_1();
          console.log('continue');
        } 
      }
    }, 250);
  }

   estate_1_11 = function(){
     jQuery('.estate-percent').text('30%');
     reloadTime = 0;
     count_animation = 1;
     console.log('start_estate');
     jQuery('.zone_wc, .zone_estate_center').css({
         color: 'transparent',
         borderColor: 'transparent',
         opacity: 0.8,
         borderWidth: '1px',
         transform: 'rotate(0deg) scale(1.5)',
         zIndex: '1000'
     });
     jQuery('.zone_wc').css({
       background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
     });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

     phaseOne = setInterval(function(){
       if (count_animation <= 480){
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
         jQuery('.zone_wc, .zone_estate_center').css({
             background: '#fff',
             color: '#19b55f',
             borderColor: '#19b55f',
             borderWidth: '2px',
             opacity: 1,
             transform: 'rotate(0deg) scale(1)',
             zIndex: '3'
         });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
         sound.stop();
         if (pausedStatus == true) {
           localStorage.setItem('paused', 'estate_1_12');
           endNowEstate();
         } else {
           estate_1_12();
           console.log('continue');
         } 
       }
     }, 250);
   }
   estate_1_10 = function(){
     jQuery('.estate-percent').text('27%');
     reloadTime = 0;
     count_animation = 1;
     console.log('start_estate');
     jQuery('.zone_wc, .zone_estate_center').css({
         color: 'transparent',
         borderColor: 'transparent',
         opacity: 0.8,
         borderWidth: '1px',
         transform: 'rotate(0deg) scale(1.5)',
         zIndex: '1000'
     });
     jQuery('.zone_wc').css({
       background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat',
     });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

     phaseOne = setInterval(function(){
       if (count_animation <= 480){
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
         jQuery('.zone_wc, .zone_estate_center').css({
             background: '#fff',
             color: '#19b55f',
             borderColor: '#19b55f',
             borderWidth: '2px',
             transform: 'rotate(0deg) scale(1)',
             zIndex: '3'
         });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
         sound.stop();
         if (pausedStatus == true) {
           localStorage.setItem('paused', 'estate_1_11');
           endNowEstate();
         } else {
           estate_1_11();
           console.log('continue');
         } 
       }
     }, 250);
   }
  estate_1_9 = function(){
    jQuery('.estate-percent').text('24%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_wc, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_wc').css({
      background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_wc, .zone_estate_center').css({
            background: '#fff',
            color: '#19b55f',
            borderColor: '#19b55f',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_1_10');
          endNowEstate();
        } else {
          estate_1_10();
          console.log('continue');
        } 
      }
    }, 250);
  }
  estate_1_8 = function(){
    jQuery('.estate-percent').text('21%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_wc, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_wc').css({
      background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_wc, .zone_estate_center').css({
            background: '#fff',
            color: '#19b55f',
            borderColor: '#19b55f',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_1_9');
          endNowEstate();
        } else {
          estate_1_9();
          console.log('continue');
        } 
      }
    }, 250);
  }

  estate_1_7 = function(){
    jQuery('.estate-percent').text('18%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_wc, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_wc').addClass('rot_estate_lovushka').css({
      background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_wc, .zone_estate_center').css({
            background: '#fff',
            color: '#19b55f',
            borderColor: '#19b55f',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        jQuery('.zone_wc').removeClass('rot_estate_lovushka');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_1_8');
          endNowEstate();
        } else {
          estate_1_8();
          console.log('continue');
        } 
      }
    }, 250);
  }

  estate_1_6 = function(){
    jQuery('.estate-percent').text('15%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_wc, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_wc').css({
      background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_wc, .zone_estate_center').css({
            background: '#fff',
            color: '#19b55f',
            borderColor: '#19b55f',
            opacity: 1,
            borderWidth: '2px',
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_1_7');
          endNowEstate();
        } else {
          estate_1_7();
          console.log('continue');
        } 
      }
    }, 250);
  }
  estate_1_5 = function(){
    jQuery('.estate-percent').text('12%');
    reloadTime = 0;
    count_animation = 1;
    console.log('start_estate');
    jQuery('.zone_wc, .zone_estate_center').css({
        color: 'transparent',
        borderColor: 'transparent',
        opacity: 0.8,
        borderWidth: '1px',
        transform: 'rotate(0deg) scale(1.5)',
        zIndex: '1000'
    });
    jQuery('.zone_wc').css({
      background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat',
    });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

    phaseOne = setInterval(function(){
      if (count_animation <= 480){
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
        jQuery('.zone_wc, .zone_estate_center').css({
            background: '#fff',
            color: '#19b55f',
            borderColor: '#19b55f',
            borderWidth: '2px',
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
            zIndex: '3'
        });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
        sound.stop();
        if (pausedStatus == true) {
          localStorage.setItem('paused', 'estate_1_6');
          endNowEstate();
        } else {
          estate_1_6();
          console.log('continue');
        } 
      }
    }, 250);
  }
 estate_1_4 = function(){
   jQuery('.estate-percent').text('9%');
   reloadTime = 0;
   count_animation = 1;
   console.log('start_estate');
   jQuery('.zone_wc, .zone_estate_center').css({
       color: 'transparent',
       borderColor: 'transparent',
       opacity: 0.8,
       borderWidth: '1px',
       transform: 'rotate(0deg) scale(1.5)',
       zIndex: '1000'
   });
   jQuery('.zone_wc').css({
     background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat',
   });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

   phaseOne = setInterval(function(){
     if (count_animation <= 480){
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
       jQuery('.zone_wc, .zone_estate_center').css({
           background: '#fff',
           color: '#19b55f',
           borderColor: '#19b55f',
           borderWidth: '2px',
           opacity: 1,
           transform: 'rotate(0deg) scale(1)',
           zIndex: '3'
       });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
       sound.stop();
       if (pausedStatus == true) {
         localStorage.setItem('paused', 'estate_1_5');
         endNowEstate();
       } else {
         estate_1_5();
         console.log('continue');
       } 
     }
   }, 250);
 }
 estate_1_3 = function(){
   jQuery('.estate-percent').text('6%');
   reloadTime = 0;
   count_animation = 1;
   console.log('start_estate');
   jQuery('.zone_wc, .zone_estate_center').css({
       color: 'transparent',
       borderColor: 'transparent',
       opacity: 0.8,
       borderWidth: '1px',
       transform: 'rotate(0deg) scale(1.5)',
       zIndex: '1000'
   });
   jQuery('.zone_wc').css({
     background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat',
   });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

   phaseOne = setInterval(function(){
     if (count_animation <= 480){
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
       jQuery('.zone_wc, .zone_estate_center').css({
           background: '#fff',
           color: '#19b55f',
           borderColor: '#19b55f',
           borderWidth: '2px',
           opacity: 1,
           transform: 'rotate(0deg) scale(1)',
           zIndex: '3'
       });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
       sound.stop();
       if (pausedStatus == true) {
         localStorage.setItem('paused', 'estate_1_4');
         endNowEstate();
       } else {
         estate_1_4();
         console.log('continue');
       } 
     }
   }, 250);
 }

estate_1_2 = function(){
  jQuery('.estate-percent').text('3%');
  reloadTime = 0;
  count_animation = 1;
  console.log('start_estate');
  jQuery('.zone_wc, .zone_estate_center').css({
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      transform: 'rotate(0deg) scale(1.5)',
      zIndex: '1000'
  });
  jQuery('.zone_wc').addClass('rot_estate_lovushka').css({
    background: '#fff url(/wp-content/themes/bcwish/img/lovushka.png) center center/100% no-repeat',
  });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

  phaseOne = setInterval(function(){
    if (count_animation <= 480){
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
      jQuery('.zone_wc, .zone_estate_center').css({
          background: '#fff',
          color: '#19b55f',
          borderColor: '#19b55f',
          borderWidth: '2px',
          opacity: 1,
          transform: 'rotate(0deg) scale(1)',
          zIndex: '3'
      });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
      jQuery('.zone_wc').removeClass('rot_estate_lovushka');
      sound.stop();
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'estate_1_3');
        endNowEstate();
      } else {
        estate_1_3();
        console.log('continue');
      } 
    }
  }, 250);
}

estate_1_1 = function(){
  jQuery('.estate-percent').text('0%');
  reloadTime = 0;
  count_animation = 1;
  console.log('start_estate');
  jQuery('.zone_wc, .zone_estate_center').css({
      color: 'transparent',
      borderColor: 'transparent',
      opacity: 0.8,
      borderWidth: '1px',
      transform: 'rotate(0deg) scale(1.5)',
      zIndex: '1000'
  });
  jQuery('.zone_wc').addClass('rot_estate_lovushka').css({
    background: '#fff url(/wp-content/themes/bcwish/img/superdisfunction.png) center center/100% no-repeat',
  });
    jQuery('.zone_estate_center').addClass('rot_estate_super').css({
      background: '#fff url(/wp-content/themes/bcwish/img/super_plod.png) center center/100% no-repeat',
    });

  phaseOne = setInterval(function(){
    if (count_animation <= 480){
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
      jQuery('.zone_wc, .zone_estate_center').css({
          background: '#fff',
          color: '#19b55f',
          borderColor: '#19b55f',
          borderWidth: '2px',
          opacity: 1,
          transform: 'rotate(0deg) scale(1)',
          zIndex: '3'
      });
        jQuery('.zone_estate_center').css({
            color: '#636065',
            borderColor: '#636065'
        });
        jQuery('.zone_estate_center').removeClass('rot_estate_super').css('transform', 'rotate(45deg)');
      jQuery('.zone_wc').removeClass('rot_estate_lovushka');
      sound.stop();
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'estate_1_2');
        endNowEstate();
      } else {
        estate_1_2();
        console.log('continue');
      } 
    }
  }, 250);
}

  jQuery('.wizard_continue.btn-warning').on('click', function(event) {
    pausedStatus = true;
  });
  jQuery('.estate_start').on('click', function(event) {
    swal({
      title: "Проверьте все ли зоны Вы отметили",
      text: "Отметьте все внутренние углы, двери и сан.узлы.",
      type: "info",
      showCancelButton: true,
      confirmButtonClass: "btn-success",
      cancelButtonClass: "btn-warning",
      cancelButtonText: "Проверить",
      confirmButtonText: "Старт",
      closeOnConfirm: false
    },
    function(isConfirm) {
      if (isConfirm) {
        swal.close();
        if (pausedStatus == true) {
          protocolfromMemory = eval(localStorage.getItem('paused'));
          protocolfromMemory();
          pausedStatus = false;
        } else {
          pausedStatus = false;
          estate_1_1();
        }
        jQuery('.estate-percent').removeClass('transparent');
        jQuery('.estate_start').addClass('hidden');
        jQuery('.estate_pause').removeClass('hidden');
        jQuery('.zone_estate.zone_default').addClass('hidden');
        jQuery('.wizard_heading').text('Протокол выполняется');
      }
    }) 
  });


  // STOP
  function hideNoteEstate() {
    jQuery('.estate_pause').popover('hide');
  }

  jQuery('.estate_pause') .on('click', function(event) {
    jQuery('.wizard_heading').text('Программа останавливается');
    // endStatus = true;
    jQuery('.estate_pause').popover('show');
    setTimeout(hideNoteEstate, 5000);
    localStorage.setItem('pausedPhoto', jQuery('.wizard_returned_estate').attr('src'));
    pausedStatus = true;
    // console.log('pausedStatus = true');
  });

});
