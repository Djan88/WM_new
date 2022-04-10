var chain,
    onEnd,
    queue,
    cb,
    then,
    l_top,
    l_middle_1,
    l_middle_2,
    l_bottom,
    r_top,
    r_middle_1,
    r_middle_2,
    r_bottom,
    x1,
    x2,
    x3,
    x4,
    x5,
    x6,
    pausedStatus = false,
    pausedProtName,
    pausedPhases,
    protocol,
    protocolfromMemory,
    protocolName,
    phaseOne,
    checkPoints,
    pointsStatus = true,
    count_animation = 0,
    rotate_one = 0,
    rotate_two = 0,
    rotate_three = 0,
    rotate_four = 0,
    rotate_lovushka = 0,
    v1,
    endStatus = false;


// if paused procedure is exist
if (localStorage.getItem('paused')) {
  pausedStatus = true;
  swal({
    title: "У Вас есть незавершенный протокол",   
    text: "Хотите продолжить его выполнение?",   
    type: "info",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Продолжить",   
    cancelButtonText: "Новый клиент"
  },
  function(isConfirm){
    if (isConfirm) {    
      jQuery('.btn-to_endNow').css('color', '#fff');
      jQuery('.mobile_screen_protocols').addClass('hidden').css('display', 'none');
      jQuery('.mobile_screen_load').addClass('hidden').css('display', 'none');
      jQuery('.mobile_screen_what_way').addClass('hidden').css('display', 'none');
      jQuery('.mobile_screen_final').fadeIn(500);
      jQuery('.btn-to_mode, .btn-to_manual, .btn-to_protocols, .btn-to_img').addClass('hidden');
      jQuery('.btn-to_protocols, .btn_man_with_zones, .btn_start').removeClass('hidden');
      jQuery('.zone_final').css('height', jQuery('.zone_final').css('width'));
      jQuery('.loaded_img').attr('src', localStorage.getItem('pausedPhoto'));
      protocolfromMemory = eval(localStorage.getItem('paused'))
      jQuery('.btn-to_endNow').css('color', '#fff');
      jQuery('.header-title').text('Программа выполняется');
    } else {    
      jQuery(location).attr('href','/');
      localStorage.removeItem('paused');
      localStorage.removeItem('pausedPhoto');
      localStorage.removeItem('pausedPhases');
      localStorage.removeItem('pausedProtName'); 
      pausedStatus = false;
    } 
  });
}

onEnd = function(){
  jQuery('.btn-to_endNow').addClass('hidden');
  jQuery('.btn_start').removeAttr('disabled');
  jQuery('.zone_x, .zone_l, .zone').css('transform', 'rotate(0deg)');
  jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
  rotate_one = 0;
  rotate_two = 0;
  rotate_three = 0;
  rotate_four = 0;
  rotate_lovushka = 0;
  count_animation = 0;
  localStorage.removeItem('paused');
  localStorage.removeItem('pausedPhoto');
  localStorage.removeItem('pausedPhases');
  localStorage.removeItem('pausedProtName');
  pausedStatus = false;

  protocolName = localStorage.getItem('protocolName');
  swal({
    title: "Протокол завершен",
    text: "Что делать дальше?",
    type: "success",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Другой протокол",
    cancelButtonText: "Новый клиент"
  },
  function(isConfirm){
    var protocol = undefined;
    if (isConfirm) {    
      jQuery('.mobile_screen').addClass('hidden').css('display', 'none');
      jQuery('.btn-to_protocols, .btn_man_with_zones, .btn_start').addClass('hidden');
      jQuery('.mobile_screen_protocols').fadeIn(500);
      jQuery('.btn-to_mode').removeClass('hidden');
      jQuery('.header-title').text('Выберите протокол');
    } else {    
      jQuery(location).attr('href','/');
    } 
  });
  jQuery('.status').addClass('hidden');
  jQuery('.status_title').text('');
  jQuery('.status_pahaze_now').text('0');
  jQuery('.status_pahaze_all').text('0');
}

endNow = function(){
  jQuery('.btn_start').removeAttr('disabled');
  jQuery('.zone_x, .zone_l, .zone').css('transform', 'rotate(0deg)');
  jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
  rotate_one = 0;
  rotate_two = 0;
  rotate_three = 0;
  rotate_four = 0;
  rotate_lovushka = 0;
  count_animation = 0;

  swal({
    title: "Приостановлено пользователем",   
    text: "Что делать дальше?",   
    type: "info",
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Продолжить",   
    cancelButtonText: "К Началу"
  },
  function(isConfirm){
    // var protocol = undefined; 
    // jQuery('.btn-to_endNow').addClass('hidden');
    endStatus == false;  
    if (isConfirm) {    
      
    } else { 
      jQuery(location).attr('href','/');
    } 
  });
}

sideFormuls = function(time, mainZone){
  if (time <= 1) {
    jQuery('.zone_x').css('top', jQuery('.draggable_v0').css('top'));
    jQuery('.zone_l').css('top', jQuery('.draggable_v-').css('top'));
  } else if (time > 1 && time <= 2) {
    jQuery('.zone_x').css('top', jQuery('.draggable_v-').css('top'));
    jQuery('.zone_l').css('top', jQuery('.draggable_v0').css('top'));
  } else {
    jQuery('.zone_x, .zone_l').css('top', mainZone.css('top'));
  }
}
sideFormulsTwo = function(time, mainZone1, mainZone2){
  if (time <= 1) {
    jQuery('.zone_x').css('top', jQuery('.draggable_v0').css('top'));
    jQuery('.zone_l').css('top', jQuery('.draggable_v-').css('top'));
  } else if (time > 1 && time <= 2) {
    jQuery('.zone_x').css('top', jQuery('.draggable_v-').css('top'));
    jQuery('.zone_l').css('top', jQuery('.draggable_v0').css('top'));
  } else {
    jQuery('.zone_x').css('top', mainZone1.css('top'));
    jQuery('.zone_l').css('top', mainZone2.css('top'));
  }
}


v1_5 = function(){
  count_animation = 0;
  jQuery('.status_percent').text('95%');
  console.log('Фаза 5');
  phaseOne = setInterval(function(){
    if (count_animation <= 8){
      sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
      if (count_animation <= 4) {
        jQuery('.draggable_v1, .draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation > 4 && count_animation <= 8) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('96%');
      clearInterval(phaseOne);
      phaseOne = setInterval(function(){
        if (count_animation <= 8){
          sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v1, .draggable_v5').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation > 4 && count_animation <= 8) {
            jQuery('.draggable_v1, .draggable_v5').css({
              background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('97%');
          clearInterval(phaseOne);
          phaseOne = setInterval(function(){
            if (count_animation <= 8){
              sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1, .draggable_v5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation > 4 && count_animation <= 8) {
                jQuery('.draggable_v1, .draggable_v5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('98%');
              clearInterval(phaseOne);
              phaseOne = setInterval(function(){
                if (count_animation <= 8){
                  sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v1, .draggable_v5').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation > 4 && count_animation <= 8) {
                    jQuery('.draggable_v1, .draggable_v5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 0;
                  jQuery('.status_percent').text('100%');
                  clearInterval(phaseOne);
                  jQuery('.draggable_v1, .draggable_v5').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  onEnd();
                }
              }, 1000); 
            }
          }, 1000); 
        }
      }, 1000); 
    }
  }, 1000);  
}

v1_4 = function(){
  console.log('Фаза 3/1');
  jQuery('.zone_x, .zone_l').addClass('hidden').css('transform', 'scale(1)');
  jQuery('.status_percent').text('72%');
  jQuery('.status_pahaze_now').text('4');
  rotate_one = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 22){
      jQuery('.draggable_v1').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      rotate_one += 1.5;
      count_animation += 1;
    } else if (count_animation <= 39) {
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_v1').css({
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('74%');
      rotate_one = 10;
      phaseOne = setInterval(function(){
        if (count_animation <= 53){
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          rotate_one += 1.5;
          count_animation += 1;
        } else if (count_animation <= 70) {
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_v1').css({
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('76%');
          rotate_one = 270;
          phaseOne = setInterval(function(){
            if (count_animation <= 60){
              jQuery('.draggable_v1').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              rotate_one += 1.5;
              count_animation += 1;
            } else if (count_animation <= 77) {
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_v1').css({
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              count_animation = 0;
              jQuery('.status_percent').text('78%');
              rotate_one = 300;
              phaseOne = setInterval(function(){
                if (count_animation <= 40){
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  rotate_one += 1.5;
                  count_animation += 1;
                } else if (count_animation <= 57) {
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_v1').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  count_animation = 0;
                  jQuery('.status_percent').text('80%');
                  rotate_one = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 22){
                      jQuery('.draggable_v5').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      rotate_one += 1.5;
                      count_animation += 1;
                    } else if (count_animation <= 39) {
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_v5').css({
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      jQuery('.status_percent').text('82%');
                      rotate_one = 10;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 53){
                          jQuery('.draggable_v5').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          rotate_one += 1.5;
                          count_animation += 1;
                        } else if (count_animation <= 70) {
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_v5').css({
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          count_animation = 0;
                          jQuery('.status_percent').text('84%');
                          rotate_one = 270;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 60){
                              jQuery('.draggable_v5').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              rotate_one += 1.5;
                              count_animation += 1;
                            } else if (count_animation <= 77) {
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_v5').css({
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              count_animation = 0;
                              jQuery('.status_percent').text('86%');
                              rotate_one = 300;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 40){
                                  jQuery('.draggable_v5').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  rotate_one += 1.5;
                                  count_animation += 1;
                                } else if (count_animation <= 57) {
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_v5').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  count_animation = 0;
                                  jQuery('.status_percent').text('88%');
                                  rotate_one = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 22){
                                      jQuery('.draggable_v-').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      rotate_one += 1.5;
                                      count_animation += 1;
                                    } else if (count_animation <= 39) {
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_v-').css({
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      count_animation = 0;
                                      jQuery('.status_percent').text('90%');
                                      rotate_one = 10;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 53){
                                          jQuery('.draggable_v-').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          rotate_one += 1.5;
                                          count_animation += 1;
                                        } else if (count_animation <= 70) {
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_v-').css({
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          count_animation = 0;
                                          jQuery('.status_percent').text('92%');
                                          rotate_one = 270;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 60){
                                              jQuery('.draggable_v-').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              rotate_one += 1.5;
                                              count_animation += 1;
                                            } else if (count_animation <= 77) {
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_v-').css({
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              count_animation = 0;
                                              jQuery('.status_percent').text('94%');
                                              rotate_one = 300;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 40){
                                                  jQuery('.draggable_v-').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  rotate_one += 1.5;
                                                  count_animation += 1;
                                                } else if (count_animation <= 57) {
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_v-').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v1_5');
                                                    endNow()
                                                  } else {
                                                    v1_5();
                                                  }
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000); 
}

v1_3 = function(){
  console.log('Фаза 2/2');
  jQuery('.status_percent').text('48%');
  jQuery('.status_pahaze_now').text('3');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_в5'));
      if (count_animation <= 4) {
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_d5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('50%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_d6'));
          if (count_animation <= 4) {
            jQuery('.draggable_d6').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_d6').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_d6').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('52%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_s5'));
              if (count_animation <= 4) {
                jQuery('.draggable_s5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_s5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_s5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_s5').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('54%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_s6'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_s6').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_s6').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_s6').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_s6').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('56%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_d2'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d2').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_d2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_d2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_d2').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('58%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_s2'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_s2').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_s2').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('60%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_d5'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_d5').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_d5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_d5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_d5').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('62%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_d6'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_d6').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_d6').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_d6').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_d6').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('64%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_s5'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_s5').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_s5').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('66%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_s6'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_s6').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_s6').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('68%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              sideFormuls(count_animation, jQuery('.draggable_d2'));
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_d2').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_d2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_d2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_d2').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('70%');
                                              count_animation = 0;
                                              console.log('test');
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  sideFormuls(count_animation, jQuery('.draggable_s2'));
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_s2').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_s2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_s2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_s2').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  setTimeout(function() {
                                                    jQuery('.zone_x, .zone_l').css('transform', 'scale(0.01)');
                                                    if (pausedStatus == true) {
                                                      localStorage.setItem('paused', 'v1_4');
                                                      endNow()
                                                    } else {
                                                      v1_4();
                                                    }
                                                  }, 1000);
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);  
}

v1_2 = function(){
  console.log('Фаза 2/1');
  jQuery('.status_percent').text('24%');
  jQuery('.status_pahaze_now').text('2');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      if (count_animation <= 4) {
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_d5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('26%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_d6'));
          if (count_animation <= 4) {
            jQuery('.draggable_d6').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_d6').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_d6').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('28%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_s5'));
              if (count_animation <= 4) {
                jQuery('.draggable_s5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_s5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_s5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_s5').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('30%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_s6'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_s6').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_s6').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_s6').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_s6').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('32%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_d2'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d2').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_d2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_d2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_d2').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('34%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_s2'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_s2').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_s2').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('36%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_d5'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_d5').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_d5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_d5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_d5').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('38%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_d6'))
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_d6').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_d6').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_d6').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_d6').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('40%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_s5'))
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_s5').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_s5').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('42%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_s6'))
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_s6').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_s6').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('44%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              sideFormuls(count_animation, jQuery('.draggable_d2'))
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_d2').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_d2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_d2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_d2').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('46%');
                                              count_animation = 0;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  sideFormuls(count_animation, jQuery('.draggable_s2'))
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_s2').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_s2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_s2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_s2').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v1_3');
                                                    endNow()
                                                  } else {
                                                    v1_3();
                                                  } 
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000); 
}

v1 = function(){
  console.log('Фаза 1');
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('5');
  localStorage.setItem('pausedPhases', '5');
  localStorage.setItem('pausedProtName', 'Краниальный протокол');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  jQuery('.status_percent').text('0%');
  jQuery('.status_pahaze_now').text('1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_v1'))
      if (count_animation <= 4) {
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_v1').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('2%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_v5'))
          if (count_animation <= 4) {
            jQuery('.draggable_v5').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v5').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v5').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_one += 2;
          rotate_two += 20;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('4%');
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_v-'))
              if (count_animation <= 4) {
                jQuery('.draggable_v-').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v-').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v-').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_one += 2;
              rotate_two += 20;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_v-').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('6%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_v1'))
                  if (count_animation <= 4) {
                    jQuery('.draggable_v1').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_v1').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_v1').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_one += 2;
                  rotate_two += 20;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_v1').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('8%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_v5'))
                      if (count_animation <= 4) {
                        jQuery('.draggable_v5').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_v5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_v5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_one += 2;
                      rotate_two += 20;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_v5').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      jQuery('.status_percent').text('10%');
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_v-'))
                          if (count_animation <= 4) {
                            jQuery('.draggable_v-').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_v-').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_v-').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                          rotate_one += 2;
                          rotate_two += 20;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_v-').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('12%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_v1'))
                              if (count_animation <= 4) {
                                jQuery('.draggable_v1').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_v1').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_v1').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                              rotate_one += 2;
                              rotate_two += 20;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_v1').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('14%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_v5'))
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_v5').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_v5').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_v5').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                  rotate_one += 2;
                                  rotate_two += 20;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_v5').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  count_animation = 0;
                                  jQuery('.status_percent').text('16%');
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_v-'))
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_v-').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_v-').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_v-').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                      rotate_one += 2;
                                      rotate_two += 20;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_v-').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('18%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_v1'))
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_v1').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_v1').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_v1').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                          rotate_one += 2;
                                          rotate_two += 20;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_v1').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('20%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              sideFormuls(count_animation, jQuery('.draggable_v5'))
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_v5').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_v5').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_v5').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                              rotate_one += 2;
                                              rotate_two += 20;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_v5').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              count_animation = 0;
                                              jQuery('.status_percent').text('22%');
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  sideFormuls(count_animation, jQuery('.draggable_v-'))
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_v-').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_v-').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_v-').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                  rotate_one += 2;
                                                  rotate_two += 20;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_v-').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  rotate_one = 0;
                                                  rotate_two = 0;
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v1_2');
                                                    endNow()
                                                  } else {
                                                    v1_2();
                                                  }
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


v2_7 = function(){
  jQuery('.status_percent').text('85%');
  console.log('Фаза 6');
  phaseOne = setInterval(function(){
    if (count_animation <= 8){
      sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
      if (count_animation <= 4) {
        jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation > 4 && count_animation <= 8) {
        jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('88%');
      clearInterval(phaseOne);
      jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      phaseOne = setInterval(function(){
        if (count_animation <= 8){
          sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation > 4 && count_animation <= 8) {
            jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
              background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('93%');
          clearInterval(phaseOne);
          jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          phaseOne = setInterval(function(){
            if (count_animation <= 8){
              sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation > 4 && count_animation <= 8) {
                jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('97%');
              clearInterval(phaseOne);
              jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              phaseOne = setInterval(function(){
                if (count_animation <= 8){
                  sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation > 4 && count_animation <= 8) {
                    jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 0;
                  jQuery('.status_percent').text('100%');
                  clearInterval(phaseOne);
                  jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  onEnd();
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}


v2_6 = function(){
  jQuery('.status_percent').text('69%');
  jQuery('.status_pahaze_now').text('6');
  rotate_one = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 22){
      jQuery('.draggable_v1').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      rotate_one += 1.5;
      count_animation += 1;
    } else if (count_animation <= 39) {
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_v1').css({
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('70%');
      rotate_one = 10;
      phaseOne = setInterval(function(){
        if (count_animation <= 53){
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          rotate_one += 1.5;
          count_animation += 1;
        } else if (count_animation <= 70) {
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_v1').css({
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('71%');
          rotate_one = 270;
          phaseOne = setInterval(function(){
            if (count_animation <= 60){
              jQuery('.draggable_v1').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              rotate_one += 1.5;
              count_animation += 1;
            } else if (count_animation <= 77) {
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_v1').css({
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              count_animation = 0;
              jQuery('.status_percent').text('72%');
              rotate_one = 300;
              phaseOne = setInterval(function(){
                if (count_animation <= 40){
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  rotate_one += 1.5;
                  count_animation += 1;
                } else if (count_animation <= 57) {
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_v1').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  count_animation = 0;
                  jQuery('.status_percent').text('73%');
                  rotate_one = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 22){
                      jQuery('.draggable_v2').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      rotate_one += 1.5;
                      count_animation += 1;
                    } else if (count_animation <= 39) {
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_v2').css({
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      jQuery('.status_percent').text('74%');
                      rotate_one = 10;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 53){
                          jQuery('.draggable_v2').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          rotate_one += 1.5;
                          count_animation += 1;
                        } else if (count_animation <= 70) {
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_v2').css({
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          count_animation = 0;
                          jQuery('.status_percent').text('75%');
                          rotate_one = 270;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 60){
                              jQuery('.draggable_v2').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              rotate_one += 1.5;
                              count_animation += 1;
                            } else if (count_animation <= 77) {
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_v2').css({
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              count_animation = 0;
                              jQuery('.status_percent').text('76%');
                              rotate_one = 300;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 40){
                                  jQuery('.draggable_v2').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  rotate_one += 1.5;
                                  count_animation += 1;
                                } else if (count_animation <= 57) {
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_v2').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  count_animation = 0;
                                  jQuery('.status_percent').text('77%');
                                  rotate_one = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 22){
                                      jQuery('.draggable_v5').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      rotate_one += 1.5;
                                      count_animation += 1;
                                    } else if (count_animation <= 39) {
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_v5').css({
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      count_animation = 0;
                                      jQuery('.status_percent').text('78%');
                                      rotate_one = 10;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 53){
                                          jQuery('.draggable_v5').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          rotate_one += 1.5;
                                          count_animation += 1;
                                        } else if (count_animation <= 70) {
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_v5').css({
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          count_animation = 0;
                                          jQuery('.status_percent').text('79%');
                                          rotate_one = 270;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 60){
                                              jQuery('.draggable_v5').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              rotate_one += 1.5;
                                              count_animation += 1;
                                            } else if (count_animation <= 77) {
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_v5').css({
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              count_animation = 0;
                                              jQuery('.status_percent').text('80%');
                                              rotate_one = 300;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 40){
                                                  jQuery('.draggable_v5').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  rotate_one += 1.5;
                                                  count_animation += 1;
                                                } else if (count_animation <= 57) {
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_v5').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  jQuery('.status_percent').text('81%');
                                                  rotate_one = 0;
                                                  phaseOne = setInterval(function(){
                                                    if (count_animation <= 22){
                                                      jQuery('.draggable_v-').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      rotate_one += 1.5;
                                                      count_animation += 1;
                                                    } else if (count_animation <= 39) {
                                                      count_animation += 1;
                                                    } else {
                                                      clearInterval(phaseOne);
                                                      count_animation = 1;
                                                      jQuery('.draggable_v-').css({
                                                        background: 'rgba(83, 35, 69, 0.4)',
                                                        opacity: 1
                                                      });
                                                      count_animation = 0;
                                                      jQuery('.status_percent').text('82%');
                                                      rotate_one = 10;
                                                      phaseOne = setInterval(function(){
                                                        if (count_animation <= 53){
                                                          jQuery('.draggable_v-').css({
                                                            color: 'transparent',
                                                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                            opacity: 0.8
                                                          });
                                                          rotate_one += 1.5;
                                                          count_animation += 1;
                                                        } else if (count_animation <= 70) {
                                                          count_animation += 1;
                                                        } else {
                                                          clearInterval(phaseOne);
                                                          count_animation = 1;
                                                          jQuery('.draggable_v-').css({
                                                            background: 'rgba(83, 35, 69, 0.4)',
                                                            opacity: 1
                                                          });
                                                          count_animation = 0;
                                                          jQuery('.status_percent').text('83%');
                                                          rotate_one = 270;
                                                          phaseOne = setInterval(function(){
                                                            if (count_animation <= 60){
                                                              jQuery('.draggable_v-').css({
                                                                color: 'transparent',
                                                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                                opacity: 0.8
                                                              });
                                                              rotate_one += 1.5;
                                                              count_animation += 1;
                                                            } else if (count_animation <= 77) {
                                                              count_animation += 1;
                                                            } else {
                                                              clearInterval(phaseOne);
                                                              count_animation = 1;
                                                              jQuery('.draggable_v-').css({
                                                                background: 'rgba(83, 35, 69, 0.4)',
                                                                opacity: 1
                                                              });
                                                              count_animation = 0;
                                                              jQuery('.status_percent').text('84%');
                                                              rotate_one = 300;
                                                              phaseOne = setInterval(function(){
                                                                if (count_animation <= 40){
                                                                  jQuery('.draggable_v-').css({
                                                                    color: 'transparent',
                                                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                                    opacity: 0.8
                                                                  });
                                                                  rotate_one += 1.5;
                                                                  count_animation += 1;
                                                                } else if (count_animation <= 57) {
                                                                  count_animation += 1;
                                                                } else {
                                                                  clearInterval(phaseOne);
                                                                  count_animation = 1;
                                                                  jQuery('.draggable_v-').css({
                                                                    color: '#FFF0C7',
                                                                    transform: 'scale(1)',
                                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                                    opacity: 1
                                                                  });
                                                                  count_animation = 0;
                                                                  if (pausedStatus == true) {
                                                                    localStorage.setItem('paused', 'v2_7');
                                                                    endNow()
                                                                  } else {
                                                                    v2_7();
                                                                  }
                                                                }
                                                              }, 1000);
                                                            }
                                                          }, 1000);
                                                        }
                                                      }, 1000);
                                                    }
                                                  }, 1000);
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v2_5 = function(){
  console.log('Фаза 3/2');
  jQuery('.status_pahaze_now').text('5');
  jQuery('.status_percent').text('56%');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_v5'))
      if (count_animation <= 4) {
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('57%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_v-'))
          if (count_animation <= 4) {
            jQuery('.draggable_v-').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v-').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v-').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('58%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_v1'))
              if (count_animation <= 4) {
                jQuery('.draggable_v1').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_v1').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('60%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_d5'))
                  if (count_animation <= 4) {
                    jQuery('.draggable_d5').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_d5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_d5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_d5').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('61%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_d6'))
                      if (count_animation <= 4) {
                        jQuery('.draggable_d6').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_d6').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_d6').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_d6').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('62%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_v4'))
                          if (count_animation <= 4) {
                            jQuery('.draggable_v5').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_v5').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_v5').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_v5').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('64%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_v-'))
                              if (count_animation <= 4) {
                                jQuery('.draggable_v-').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_v-').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_v-').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_v-').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('65%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_v1'))
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_v1').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_v1').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_v1').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_v1').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('66%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_d5'))
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_d5').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_d5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_d5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      jQuery('.draggable_d5').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('68%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_d6'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_d6').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_d6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_d6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_d6').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          rotate_one = 0;
                                          rotate_two = 0;
                                          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
                                          setTimeout(function() {
                                            jQuery('.zone_x, .zone_l').css('transform', 'scale(0.01)');
                                            if (pausedStatus == true) {
                                              localStorage.setItem('paused', 'v2_6');
                                              endNow()
                                            } else {
                                              v2_6();
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v2_4 = function(){
  console.log('Фаза 3/1');
  jQuery('.status_pahaze_now').text('4');
  jQuery('.status_percent').text('42%');
  r_top = jQuery('.draggable_v5').css('top');
  r_bottom = jQuery('.draggable_v-').css('top');
  l_top = jQuery('.draggable_v0').css('top');
  l_bottom = jQuery('.draggable_d2').css('top');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_v5'));
      if (count_animation <= 4) {
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('44%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v-').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v-').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v-').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('45%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_v1'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_v1').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('46%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_d5'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_d5').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_d5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_d5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_d5').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('48%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_d6'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d6').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_d6').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_d6').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_d6').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('49%');
                      r_top = jQuery('.draggable_v5').css('top');
                      r_bottom = jQuery('.draggable_v-').css('top');
                      l_top = jQuery('.draggable_v0').css('top');
                      l_bottom = jQuery('.draggable_d2').css('top');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_v5'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_v5').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_v5').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_v5').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_v5').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('50%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_v-'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_v-').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_v-').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_v-').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_v-').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('52%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_v1'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_v1').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_v1').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_v1').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_v1').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('53%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_d5'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_d5').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_d5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_d5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      jQuery('.draggable_d5').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('54%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_d6'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_d6').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_d6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_d6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_d6').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          if (pausedStatus == true) {
                                            localStorage.setItem('paused', 'v2_5');
                                            endNow()
                                          } else {
                                            v2_5();
                                          }
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v2_3 = function(){
  console.log('Фаза 2/2');
  jQuery('.status_pahaze_now').text('3');
  jQuery('.status_percent').text('29%');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_v5'));
      if (count_animation <= 4) {
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('30%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v-').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v-').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v-').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('32%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_v1'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_v1').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('33%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_s5'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_s5').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_s5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_s5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_s5').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('34%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_s6'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_s6').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_s6').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_s6').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_s6').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('36%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_v5'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_v5').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_v5').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_v5').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_v5').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('37%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_v-'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_v-').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_v-').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_v-').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_v-').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('38%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_v1'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_v1').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_v1').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_v1').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_v1').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('40%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_s5'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_s5').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      jQuery('.draggable_s5').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('41%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_s6'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_s6').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_s6').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          if (pausedStatus == true) {
                                            localStorage.setItem('paused', 'v2_4');
                                            endNow()
                                          } else {
                                            v2_4();
                                          }
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v2_2 = function(){
  console.log('Фаза 2/1');
  jQuery('.status_pahaze_now').text('2');
  jQuery('.status_percent').text('16%');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_v5'));
      if (count_animation <= 4) {
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('17%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v-').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v-').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v-').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('18%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_v1'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_v1').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('20%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_s5'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_s5').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_s5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_s5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_s5').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('21%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_s6'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_s6').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_s6').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_s6').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_s6').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('22%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_v5'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_v5').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_v5').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_v5').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_v5').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('24%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_v-'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_v-').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_v-').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_v-').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_v-').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('25%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_v1'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_v1').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_v1').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_v1').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_v1').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('26%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_s5'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_s5').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      jQuery('.draggable_s5').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('28%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_s6'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_s6').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_s6').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          if (pausedStatus == true) {
                                            localStorage.setItem('paused', 'v2_3');
                                            endNow()
                                          } else {
                                            v2_3();
                                          }
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v2 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('7');
  localStorage.setItem('pausedPhases', '7');
  localStorage.setItem('pausedProtName', 'Протокол 2-5');
  jQuery('.status_percent').text('0%');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      jQuery('.draggable_lovushka').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      sideFormuls(count_animation, jQuery('.draggable_d2'));
      if (count_animation <= 4) {
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d2').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d2').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 4;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d2').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('1%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          jQuery('.draggable_lovushka').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          sideFormuls(count_animation, jQuery('.draggable_v2'));
          if (count_animation <= 4) {
            jQuery('.draggable_v2').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v2').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v2').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 4;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('2%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              jQuery('.draggable_lovushka').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              sideFormuls(count_animation, jQuery('.draggable_s2'));
              if (count_animation <= 4) {
                jQuery('.draggable_s2').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_s2').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_s2').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 4;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_s2').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              count_animation = 0;
              jQuery('.status_percent').text('4%');
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  jQuery('.draggable_lovushka').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  sideFormuls(count_animation, jQuery('.draggable_d2'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_d2').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_d2').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_d2').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 4;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_d2').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('5%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      jQuery('.draggable_lovushka').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      sideFormuls(count_animation, jQuery('.draggable_v2'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_v2').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_v2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_v2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_lovushka += 4;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_v2').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('6%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          jQuery('.draggable_lovushka').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          sideFormuls(count_animation, jQuery('.draggable_s2'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_s2').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                          rotate_lovushka += 4;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_s2').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          console.log('Фаза 1/2');
                          jQuery('.status_percent').text('8%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              jQuery('.draggable_lovushka').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              sideFormuls(count_animation, jQuery('.draggable_d2'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_d2').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_d2').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_d2').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_d2').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('9%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  jQuery('.draggable_lovushka').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  sideFormuls(count_animation, jQuery('.draggable_v2'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_v2').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_v2').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_v2').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                  rotate_lovushka += 4;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_v2').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('10%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      jQuery('.draggable_lovushka').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      sideFormuls(count_animation, jQuery('.draggable_s2'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_s2').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_s2').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_s2').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                      rotate_lovushka += 4;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      rotate_lovushka = 0;
                                      jQuery('.draggable_s2').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        transform: 'rotate(0deg)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('12%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          jQuery('.draggable_lovushka').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          sideFormuls(count_animation, jQuery('.draggable_d2'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_d2').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_d2').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_d2').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                          rotate_lovushka += 4;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_d2').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('13%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              jQuery('.draggable_lovushka').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              sideFormuls(count_animation, jQuery('.draggable_v2'));
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_v2').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_v2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_v2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                              rotate_lovushka += 4;
                                            } else {
                                              clearInterval(phaseOne);
                                              jQuery('.draggable_v2').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('14%');
                                              count_animation = 0;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  jQuery('.draggable_lovushka').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  sideFormuls(count_animation, jQuery('.draggable_s2'));
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_s2').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_s2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_s2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                  rotate_lovushka += 4;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  rotate_lovushka = 0;
                                                  jQuery('.draggable_s2, .draggable_lovushka').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1) rotate(0deg)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v2_2');
                                                    endNow()
                                                  } else {
                                                    v2_2();
                                                  }
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

v3_5 = function(){
  count_animation = 0;
  console.log('Фаза 6');
  jQuery('.status_percent').text('82%');
  phaseOne = setInterval(function(){
    if (count_animation <= 8){
      sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
      if (count_animation <= 4) {
        jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation > 4 && count_animation <= 8) {
        jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('85%');
      clearInterval(phaseOne);
      jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      phaseOne = setInterval(function(){
        if (count_animation <= 8){
          sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation > 4 && count_animation <= 8) {
            jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
              background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('89%');
          clearInterval(phaseOne);
          jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          phaseOne = setInterval(function(){
            if (count_animation <= 8){
              sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation > 4 && count_animation <= 8) {
                jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                  background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('94%');
              clearInterval(phaseOne);
              jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              phaseOne = setInterval(function(){
                if (count_animation <= 8){
                  sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation > 4 && count_animation <= 8) {
                    jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 0;
                  jQuery('.status_percent').text('100%');
                  clearInterval(phaseOne);
                  jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  onEnd();
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v3_4 = function(){
  console.log('Фаза 4/1');
  jQuery('.status_pahaze_now').text('4');
  jQuery('.status_percent').text('70%');
  rotate_one = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 22){
      jQuery('.draggable_v3').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      rotate_one += 1.5;
      count_animation += 1;
    } else if (count_animation <= 39) {
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_v3').css({
        color: '#FFF0C7',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('71%');
      rotate_one = 10;
      phaseOne = setInterval(function(){
        if (count_animation <= 53){
          jQuery('.draggable_v3').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          rotate_one += 1.5;
          count_animation += 1;
        } else if (count_animation <= 70) {
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_v3').css({
            color: '#FFF0C7',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('72%');
          rotate_one = 270;
          phaseOne = setInterval(function(){
            if (count_animation <= 60){
              jQuery('.draggable_v3').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              rotate_one += 1.5;
              count_animation += 1;
            } else if (count_animation <= 77) {
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_v3').css({
                color: '#FFF0C7',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              count_animation = 0;
              jQuery('.status_percent').text('73%');
              rotate_one = 300;
              phaseOne = setInterval(function(){
                if (count_animation <= 40){
                  jQuery('.draggable_v3').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  rotate_one += 1.5;
                  count_animation += 1;
                } else if (count_animation <= 57) {
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_v3').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  count_animation = 0;
                  jQuery('.status_percent').text('74%');
                  rotate_one = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 22){
                      jQuery('.draggable_v4').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      rotate_one += 1.5;
                      count_animation += 1;
                    } else if (count_animation <= 39) {
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_v4').css({
                        color: '#FFF0C7',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      jQuery('.status_percent').text('75%');
                      rotate_one = 10;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 53){
                          jQuery('.draggable_v4').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          rotate_one += 1.5;
                          count_animation += 1;
                        } else if (count_animation <= 70) {
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_v4').css({
                            color: '#FFF0C7',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          count_animation = 0;
                          jQuery('.status_percent').text('76%');
                          rotate_one = 270;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 60){
                              jQuery('.draggable_v4').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              rotate_one += 1.5;
                              count_animation += 1;
                            } else if (count_animation <= 77) {
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_v4').css({
                                color: '#FFF0C7',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              count_animation = 0;
                              jQuery('.status_percent').text('77%');
                              rotate_one = 300;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 40){
                                  jQuery('.draggable_v4').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  rotate_one += 1.5;
                                  count_animation += 1;
                                } else if (count_animation <= 57) {
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_v4').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  count_animation = 0;
                                  jQuery('.status_percent').text('78%');
                                  rotate_one = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 22){
                                      jQuery('.draggable_v1').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      rotate_one += 1.5;
                                      count_animation += 1;
                                    } else if (count_animation <= 39) {
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_v1').css({
                                        color: '#FFF0C7',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      count_animation = 0;
                                      jQuery('.status_percent').text('79%');
                                      rotate_one = 10;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 53){
                                          jQuery('.draggable_v1').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          rotate_one += 1.5;
                                          count_animation += 1;
                                        } else if (count_animation <= 70) {
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_v1').css({
                                            color: '#FFF0C7',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          count_animation = 0;
                                          jQuery('.status_percent').text('80%');
                                          rotate_one = 270;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 60){
                                              jQuery('.draggable_v1').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              rotate_one += 1.5;
                                              count_animation += 1;
                                            } else if (count_animation <= 77) {
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_v1').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              count_animation = 0;
                                              jQuery('.status_percent').text('81%');
                                              rotate_one = 300;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 40){
                                                  jQuery('.draggable_v1').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  rotate_one += 1.5;
                                                  count_animation += 1;
                                                } else if (count_animation <= 57) {
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_v1').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v3_5');
                                                    endNow()
                                                  } else {
                                                    v3_5();
                                                  }
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v3_3 = function(){
  console.log('Фаза 3');
  jQuery('.status_percent').text('64%');
  jQuery('.status_pahaze_now').text('3');
  x1 = jQuery('.draggable_v0').css('top');
  x2 = jQuery('.draggable_v1').css('top');
  x3 = jQuery('.draggable_d2').css('top');
  x4 = jQuery('.draggable_d3').css('top');
  x5 = jQuery('.draggable_d4').css('top');
  x6 = jQuery('.draggable_v-').css('top');
  count_animation = 0;
  rotate_lovushka = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 140){
      jQuery('.draggable_v4').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_lovushka+'deg)');
      if (count_animation <= 4) {
        jQuery('.zone_x').css('top', x1);
        rotate_lovushka += 36
      } else if (count_animation <= 8) {
        rotate_lovushka += 35
      } else if (count_animation <= 12) {
        rotate_lovushka += 34
      } else if (count_animation <= 16) {
        rotate_lovushka += 33
      } else if (count_animation <= 20) {
        rotate_lovushka += 32
      } else if (count_animation <= 24) {
        rotate_lovushka += 31
      } else if (count_animation <= 28) {
        rotate_lovushka += 30
      } else if (count_animation <= 32) {
        rotate_lovushka += 29
      } else if (count_animation <= 36) {
        rotate_lovushka += 28
      } else if (count_animation <= 40) {
        rotate_lovushka += 27
      } else if (count_animation <= 44) {
        rotate_lovushka += 26
      } else if (count_animation <= 48) {
        rotate_lovushka += 25
        jQuery('.status_percent').text('66%');
      } else if (count_animation <= 52) {
        rotate_lovushka += 24
      } else if (count_animation <= 56) {
        rotate_lovushka += 23
      } else if (count_animation <= 60) {
        rotate_lovushka += 22
      } else if (count_animation <= 64) {
        rotate_lovushka += 21
      } else if (count_animation <= 68) {
        rotate_lovushka += 20
      } else if (count_animation <= 72) {
        rotate_lovushka += 19
      } else if (count_animation <= 76) {
        rotate_lovushka += 18
      } else if (count_animation <= 80) {
        rotate_lovushka += 17
      } else if (count_animation <= 84) {
        rotate_lovushka += 16
      } else if (count_animation <= 88) {
        rotate_lovushka += 15
      } else if (count_animation <= 92) {
        rotate_lovushka += 14
      } else if (count_animation <= 96) {
        rotate_lovushka += 13
      } else if (count_animation <= 100) {
        jQuery('.zone_x').css('top', x2);
        jQuery('.status_percent').text('68%');
        rotate_lovushka += 12
      } else if (count_animation <= 104) {
        rotate_lovushka += 11
      } else if (count_animation <= 108) {
        rotate_lovushka += 10
      } else if (count_animation <= 112) {
        rotate_lovushka += 9
      } else if (count_animation <= 116) {
        jQuery('.zone_x').css('top', x3);
        rotate_lovushka += 8
      } else if (count_animation <= 120) {
        rotate_lovushka += 7
      } else if (count_animation <= 124) {
        jQuery('.zone_x').css('top', x4);
        rotate_lovushka += 6
      } else if (count_animation <= 128) {
        rotate_lovushka += 5
      } else if (count_animation <= 132) {
        jQuery('.zone_x').css('top', x5);
        rotate_lovushka += 4
      } else if (count_animation <= 136) {
        rotate_lovushka += 3
      } else if (count_animation <= 140) {
        jQuery('.zone_x').css('top', x6);
        rotate_lovushka += 2
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.zone_x').css('transform', 'scale(0.01)');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'v3_4');
        endNow()
      } else {
        v3_4();
      }
    }
  }, 1000);
}

v3_2 = function(){
  console.log('Фаза 2/1');
  jQuery('.status_percent').text('32%');
  jQuery('.status_pahaze_now').text('2');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      if (count_animation <= 4) {
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d3').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d3').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('34%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_v3'));
          if (count_animation <= 4) {
            jQuery('.draggable_v3').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v3').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v3').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_v3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('36%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_v4'));
              if (count_animation <= 4) {
                jQuery('.draggable_v4').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v4').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v4').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_v4').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('38%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_d4'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_d4').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_d4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_d4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_d4').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('40%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_d3'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d3').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_d3').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_d3').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_d3').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('42%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_v3'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_v3').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_v3').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_v3').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_v3').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('44%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_v4'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_v4').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_v4').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_v4').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_v4').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('46%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_d4'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_d4').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_d4').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_d4').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_d4').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('48%');
                                  console.log('Фаза 2/2');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_d3'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_d3').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_d3').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_d3').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      jQuery('.draggable_d3').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('50%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_v3'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_v3').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_v3').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_v3').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_v3').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('52%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              sideFormuls(count_animation, jQuery('.draggable_v4'));
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_v4').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_v4').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_v4').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              jQuery('.draggable_v4').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('54%');
                                              count_animation = 0;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  sideFormuls(count_animation, jQuery('.draggable_d4'));
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_d4').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_d4').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_d4').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  jQuery('.draggable_d4').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  jQuery('.status_percent').text('56%');
                                                  count_animation = 0;
                                                  phaseOne = setInterval(function(){
                                                    if (count_animation <= 12){
                                                    sideFormuls(count_animation, jQuery('.draggable_d3'));
                                                      if (count_animation <= 4) {
                                                        jQuery('.draggable_d3').css({
                                                          color: 'transparent',
                                                          transform: 'scale(1.3)',
                                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                          opacity: 0.8
                                                        });
                                                      } else if (count_animation <= 8) {
                                                        jQuery('.draggable_d3').css({
                                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                        });
                                                      } else if (count_animation <= 12) {
                                                        jQuery('.draggable_d3').css({
                                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                        });
                                                      }
                                                      count_animation += 1;
                                                    } else {
                                                      clearInterval(phaseOne);
                                                      jQuery('.draggable_d3').css({
                                                        color: '#FFF0C7',
                                                        transform: 'scale(1)',
                                                        background: 'rgba(83, 35, 69, 0.4)',
                                                        opacity: 1
                                                      });
                                                      jQuery('.status_percent').text('58%');
                                                      count_animation = 0;
                                                      phaseOne = setInterval(function(){
                                                        if (count_animation <= 12){
                                                        sideFormuls(count_animation, jQuery('.draggable_v3'));
                                                          if (count_animation <= 4) {
                                                            jQuery('.draggable_v3').css({
                                                              color: 'transparent',
                                                              transform: 'scale(1.3)',
                                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                              opacity: 0.8
                                                            });
                                                          } else if (count_animation <= 8) {
                                                            jQuery('.draggable_v3').css({
                                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                            });
                                                          } else if (count_animation <= 12) {
                                                            jQuery('.draggable_v3').css({
                                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                            });
                                                          }
                                                          count_animation += 1;
                                                        } else {
                                                          clearInterval(phaseOne);
                                                          jQuery('.draggable_v3').css({
                                                            color: '#FFF0C7',
                                                            transform: 'scale(1)',
                                                            background: 'rgba(83, 35, 69, 0.4)',
                                                            opacity: 1
                                                          });
                                                          jQuery('.status_percent').text('60%');
                                                          count_animation = 0;
                                                          phaseOne = setInterval(function(){
                                                            if (count_animation <= 12){
                                                            sideFormuls(count_animation, jQuery('.draggable_v4'));
                                                              if (count_animation <= 4) {
                                                                jQuery('.draggable_v4').css({
                                                                  color: 'transparent',
                                                                  transform: 'scale(1.3)',
                                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                  opacity: 0.8
                                                                });
                                                              } else if (count_animation <= 8) {
                                                                jQuery('.draggable_v4').css({
                                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                });
                                                              } else if (count_animation <= 12) {
                                                                jQuery('.draggable_v4').css({
                                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                });
                                                              }
                                                              count_animation += 1;
                                                            } else {
                                                              clearInterval(phaseOne);
                                                              jQuery('.draggable_v4').css({
                                                                color: '#FFF0C7',
                                                                transform: 'scale(1)',
                                                                background: 'rgba(83, 35, 69, 0.4)',
                                                                opacity: 1
                                                              });
                                                              jQuery('.status_percent').text('62%');
                                                              count_animation = 0;
                                                              phaseOne = setInterval(function(){
                                                                if (count_animation <= 12){
                                                                sideFormuls(count_animation, jQuery('.draggable_d4'));
                                                                  if (count_animation <= 4) {
                                                                    jQuery('.draggable_d4').css({
                                                                      color: 'transparent',
                                                                      transform: 'scale(1.3)',
                                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                      opacity: 0.8
                                                                    });
                                                                  } else if (count_animation <= 8) {
                                                                    jQuery('.draggable_d4').css({
                                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                    });
                                                                  } else if (count_animation <= 12) {
                                                                    jQuery('.draggable_d4').css({
                                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                    });
                                                                  }
                                                                  count_animation += 1;
                                                                } else {
                                                                  clearInterval(phaseOne);
                                                                  jQuery('.draggable_d4').css({
                                                                    color: '#FFF0C7',
                                                                    transform: 'scale(1)',
                                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                                    opacity: 1
                                                                  });
                                                                  count_animation = 0;
                                                                  jQuery('.zone_l').css('transform', 'scale(0.01)');
                                                                  if (pausedStatus == true) {
                                                                    localStorage.setItem('paused', 'v3_3');
                                                                    endNow()
                                                                  } else {
                                                                    v3_3();
                                                                  }
                                                                }
                                                              }, 1000);
                                                            }
                                                          }, 1000);
                                                        }
                                                      }, 1000);
                                                    }
                                                  }, 1000);
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v3 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('5');
  localStorage.setItem('pausedPhases', '5');
  localStorage.setItem('pausedProtName', 'Протокол 3-4');
  jQuery('.status_percent').text('0%');
  jQuery('.status_pahaze_now').text('1');
  console.log('Фаза 1/1');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      jQuery('.draggable_lovushka').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      sideFormuls(count_animation, jQuery('.draggable_s3'));
      if (count_animation <= 4) {
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_s3').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_s3').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 6;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_s3').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('2%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          jQuery('.draggable_lovushka').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          sideFormuls(count_animation, jQuery('.draggable_s2'));
          if (count_animation <= 4) {
            jQuery('.draggable_s2').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_s2').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_s2').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 6;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('4%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              jQuery('.draggable_lovushka').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              sideFormuls(count_animation, jQuery('.draggable_s4'));
              if (count_animation <= 4) {
                jQuery('.draggable_s4').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_s4').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_s4').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 6;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_s4').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('6%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  jQuery('.draggable_lovushka').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  sideFormuls(count_animation, jQuery('.draggable_v3'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v3').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_v3').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_v3').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_v3').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('8%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      jQuery('.draggable_lovushka').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      sideFormuls(count_animation, jQuery('.draggable_s3'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_s3').css({
                          color: 'transparent',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_s3').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_s3').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_s3').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('10%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          jQuery('.draggable_lovushka').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          sideFormuls(count_animation, jQuery('.draggable_s2'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_s2').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_s2').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('12%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              jQuery('.draggable_lovushka').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              sideFormuls(count_animation, jQuery('.draggable_s4'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_s4').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_s4').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_s4').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_s4').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('14%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  jQuery('.draggable_lovushka').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  sideFormuls(count_animation, jQuery('.draggable_v3'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_v3').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_v3').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_v3').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_v3').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('16%');
                                  console.log('Фаза 1/2');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      jQuery('.draggable_lovushka').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      sideFormuls(count_animation, jQuery('.draggable_s3'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_s3').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_s3').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_s3').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      jQuery('.draggable_s3').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('18%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          jQuery('.draggable_lovushka').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          sideFormuls(count_animation, jQuery('.draggable_s2'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_s2').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_s2').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_s2').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_s2').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('20%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              jQuery('.draggable_lovushka').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              sideFormuls(count_animation, jQuery('.draggable_s4'));
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_s4').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_s4').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_s4').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              jQuery('.draggable_s4').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('22%');
                                              count_animation = 0;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  jQuery('.draggable_lovushka').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  sideFormuls(count_animation, jQuery('.draggable_v3'));
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_v3').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_v3').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_v3').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  jQuery('.draggable_v3').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  jQuery('.status_percent').text('24%');
                                                  count_animation = 0;
                                                  phaseOne = setInterval(function(){
                                                    if (count_animation <= 12){
                                                      jQuery('.draggable_lovushka').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      sideFormuls(count_animation, jQuery('.draggable_s3'));
                                                      if (count_animation <= 4) {
                                                        jQuery('.draggable_s3').css({
                                                          color: 'transparent',
                                                          transform: 'scale(1.3)',
                                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                          opacity: 0.8
                                                        });
                                                      } else if (count_animation <= 8) {
                                                        jQuery('.draggable_s3').css({
                                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                        });
                                                      } else if (count_animation <= 12) {
                                                        jQuery('.draggable_s3').css({
                                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                        });
                                                      }
                                                      count_animation += 1;
                                                    } else {
                                                      clearInterval(phaseOne);
                                                      jQuery('.draggable_s3').css({
                                                        color: '#FFF0C7',
                                                        transform: 'scale(1)',
                                                        background: 'rgba(83, 35, 69, 0.4)',
                                                        opacity: 1
                                                      });
                                                      jQuery('.status_percent').text('26%');
                                                      count_animation = 0;
                                                      phaseOne = setInterval(function(){
                                                        if (count_animation <= 12){
                                                          jQuery('.draggable_lovushka').css({
                                                            color: 'transparent',
                                                            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                            opacity: 0.8
                                                          });
                                                          sideFormuls(count_animation, jQuery('.draggable_s2'));
                                                          if (count_animation <= 4) {
                                                            jQuery('.draggable_s2').css({
                                                              color: 'transparent',
                                                              transform: 'scale(1.3)',
                                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                              opacity: 0.8
                                                            });
                                                          } else if (count_animation <= 8) {
                                                            jQuery('.draggable_s2').css({
                                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                            });
                                                          } else if (count_animation <= 12) {
                                                            jQuery('.draggable_s2').css({
                                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                            });
                                                          }
                                                          count_animation += 1;
                                                        } else {
                                                          clearInterval(phaseOne);
                                                          jQuery('.draggable_s2').css({
                                                            color: '#FFF0C7',
                                                            transform: 'scale(1)',
                                                            background: 'rgba(83, 35, 69, 0.4)',
                                                            opacity: 1
                                                          });
                                                          jQuery('.status_percent').text('28%');
                                                          count_animation = 0;
                                                          phaseOne = setInterval(function(){
                                                            if (count_animation <= 12){
                                                              jQuery('.draggable_lovushka').css({
                                                                color: 'transparent',
                                                                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                                opacity: 0.8
                                                              });
                                                              sideFormuls(count_animation, jQuery('.draggable_s4'));
                                                              if (count_animation <= 4) {
                                                                jQuery('.draggable_s4').css({
                                                                  color: 'transparent',
                                                                  transform: 'scale(1.3)',
                                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                  opacity: 0.8
                                                                });
                                                              } else if (count_animation <= 8) {
                                                                jQuery('.draggable_s4').css({
                                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                });
                                                              } else if (count_animation <= 12) {
                                                                jQuery('.draggable_s4').css({
                                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                });
                                                              }
                                                              count_animation += 1;
                                                            } else {
                                                              clearInterval(phaseOne);
                                                              jQuery('.draggable_s4').css({
                                                                color: '#FFF0C7',
                                                                transform: 'scale(1)',
                                                                background: 'rgba(83, 35, 69, 0.4)',
                                                                opacity: 1
                                                              });
                                                              jQuery('.status_percent').text('30%');
                                                              count_animation = 0;
                                                              phaseOne = setInterval(function(){
                                                                if (count_animation <= 12){
                                                                  jQuery('.draggable_lovushka').css({
                                                                    color: 'transparent',
                                                                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                                    opacity: 0.8
                                                                  });
                                                                  sideFormuls(count_animation, jQuery('.draggable_v3'));
                                                                  if (count_animation <= 4) {
                                                                    jQuery('.draggable_v3').css({
                                                                      color: 'transparent',
                                                                      transform: 'scale(1.3)',
                                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                      opacity: 0.8
                                                                    });
                                                                  } else if (count_animation <= 8) {
                                                                    jQuery('.draggable_v3').css({
                                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                    });
                                                                  } else if (count_animation <= 12) {
                                                                    jQuery('.draggable_v3').css({
                                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                    });
                                                                  }
                                                                  count_animation += 1;
                                                                } else {
                                                                  clearInterval(phaseOne);
                                                                  jQuery('.draggable_v3, .draggable_lovushka').css({
                                                                    color: '#FFF0C7',
                                                                    transform: 'scale(1)',
                                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                                    opacity: 1
                                                                  });
                                                                  count_animation = 0;
                                                                  if (pausedStatus == true) {
                                                                    localStorage.setItem('paused', 'v3_2');
                                                                    endNow()
                                                                  } else {
                                                                    v3_2();
                                                                  }
                                                                }
                                                              }, 1000);
                                                            }
                                                          }, 1000);
                                                        }
                                                      }, 1000);
                                                    }
                                                  }, 1000);
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

v4_5 = function(){
  count_animation = 0;
  jQuery('.status_percent').text('82%');
  console.log('Фаза 6');
  phaseOne = setInterval(function(){
    if (count_animation <= 8){
      sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
      if (count_animation <= 4) {
        jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation > 4 && count_animation <= 8) {
        jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('85%');
      clearInterval(phaseOne);
      jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      phaseOne = setInterval(function(){
        if (count_animation <= 8){
          sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation > 4 && count_animation <= 8) {
            jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
              background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('89%');
          clearInterval(phaseOne);
          jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          phaseOne = setInterval(function(){
            if (count_animation <= 8){
              sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation > 4 && count_animation <= 8) {
                jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                  background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('94%');
              clearInterval(phaseOne);
              jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              phaseOne = setInterval(function(){
                if (count_animation <= 8){
                  sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation > 4 && count_animation <= 8) {
                    jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 0;
                  jQuery('.status_percent').text('100%');
                  clearInterval(phaseOne);
                  jQuery('.draggable_v1, .draggable_v3, .draggable_v4').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  onEnd();
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}


v4_4 = function(){
  console.log('Фаза 4/1');
  jQuery('.status_percent').text('70%');
  jQuery('.status_pahaze_now').text('4');
  rotate_one = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 22){
      jQuery('.draggable_v1').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      rotate_one += 1.5;
      count_animation += 1;
    } else if (count_animation <= 39) {
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_v1').css({
        color: '#FFF0C7',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('71%');
      rotate_one = 10;
      phaseOne = setInterval(function(){
        if (count_animation <= 53){
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          rotate_one += 1.5;
          count_animation += 1;
        } else if (count_animation <= 70) {
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('72%');
          rotate_one = 270;
          phaseOne = setInterval(function(){
            if (count_animation <= 60){
              jQuery('.draggable_v1').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              rotate_one += 1.5;
              count_animation += 1;
            } else if (count_animation <= 77) {
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_v1').css({
                color: '#FFF0C7',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              count_animation = 0;
              jQuery('.status_percent').text('73%');
              rotate_one = 300;
              phaseOne = setInterval(function(){
                if (count_animation <= 40){
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  rotate_one += 1.5;
                  count_animation += 1;
                } else if (count_animation <= 57) {
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_v1').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  count_animation = 0;
                  jQuery('.status_percent').text('74%');
                  rotate_one = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 22){
                      jQuery('.draggable_v3').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      rotate_one += 1.5;
                      count_animation += 1;
                    } else if (count_animation <= 39) {
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_v3').css({
                        color: '#FFF0C7',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      jQuery('.status_percent').text('75%');
                      rotate_one = 10;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 53){
                          jQuery('.draggable_v3').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          rotate_one += 1.5;
                          count_animation += 1;
                        } else if (count_animation <= 70) {
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_v3').css({
                            color: '#FFF0C7',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          count_animation = 0;
                          jQuery('.status_percent').text('76%');
                          rotate_one = 270;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 60){
                              jQuery('.draggable_v3').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              rotate_one += 1.5;
                              count_animation += 1;
                            } else if (count_animation <= 77) {
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_v3').css({
                                color: '#FFF0C7',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              count_animation = 0;
                              jQuery('.status_percent').text('77%');
                              rotate_one = 300;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 40){
                                  jQuery('.draggable_v3').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  rotate_one += 1.5;
                                  count_animation += 1;
                                } else if (count_animation <= 57) {
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_v3').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  count_animation = 0;
                                  jQuery('.status_percent').text('78%');
                                  rotate_one = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 22){
                                      jQuery('.draggable_v4').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      rotate_one += 1.5;
                                      count_animation += 1;
                                    } else if (count_animation <= 39) {
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_v4').css({
                                        color: '#FFF0C7',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      count_animation = 0;
                                      jQuery('.status_percent').text('79%');
                                      rotate_one = 10;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 53){
                                          jQuery('.draggable_v4').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          rotate_one += 1.5;
                                          count_animation += 1;
                                        } else if (count_animation <= 70) {
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_v4').css({
                                            color: '#FFF0C7',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          count_animation = 0;
                                          jQuery('.status_percent').text('80%');
                                          rotate_one = 270;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 60){
                                              jQuery('.draggable_v4').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              rotate_one += 1.5;
                                              count_animation += 1;
                                            } else if (count_animation <= 77) {
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_v4').css({
                                                color: '#FFF0C7',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              count_animation = 0;
                                              jQuery('.status_percent').text('81%');
                                              rotate_one = 300;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 40){
                                                  jQuery('.draggable_v4').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  rotate_one += 1.5;
                                                  count_animation += 1;
                                                } else if (count_animation <= 57) {
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_v4').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v4_5');
                                                    endNow()
                                                  } else {
                                                    v4_5();
                                                  }
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);  
}

v4_3 = function(){
  jQuery('.status_percent').text('38%');
  jQuery('.status_pahaze_now').text('3');
  console.log('Фаза 3/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      if (count_animation <= 4) {
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d3').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d3').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('40%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_d4'));
          if (count_animation <= 4) {
            jQuery('.draggable_d4').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_d4').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_d4').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('42%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_s3'));
              if (count_animation <= 4) {
                jQuery('.draggable_s3').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_s3').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_s3').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_s3').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('44%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_s4'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_s4').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_s4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_s4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_s4').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('46%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_d3'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d3').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_d3').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_d3').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_d3').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('48%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_d4'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_d4').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_d4').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_d4').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_d4').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('50%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_s3'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_s3').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_s3').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_s3').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_s3').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('52%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_s4'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_s4').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_s4').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_s4').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_s4').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('54%');
                                  console.log('Фаза 3/2');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_d3'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_d3').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_d3').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_d3').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      jQuery('.draggable_d3').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('56%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_d4'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_d4').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_d4').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_d4').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_d4').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('58%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              sideFormuls(count_animation, jQuery('.draggable_s3'));
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_s3').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_s3').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_s3').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              jQuery('.draggable_s3').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('60%');
                                              count_animation = 0;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  sideFormuls(count_animation, jQuery('.draggable_s4'));
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_s4').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_s4').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_s4').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  jQuery('.draggable_s4').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  jQuery('.status_percent').text('62%');
                                                  count_animation = 0;
                                                  phaseOne = setInterval(function(){
                                                    if (count_animation <= 12){
                                                    sideFormuls(count_animation, jQuery('.draggable_d3'));
                                                      if (count_animation <= 4) {
                                                        jQuery('.draggable_d3').css({
                                                          color: 'transparent',
                                                          transform: 'scale(1.3)',
                                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                          opacity: 0.8
                                                        });
                                                      } else if (count_animation <= 8) {
                                                        jQuery('.draggable_d3').css({
                                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                        });
                                                      } else if (count_animation <= 12) {
                                                        jQuery('.draggable_d3').css({
                                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                        });
                                                      }
                                                      count_animation += 1;
                                                    } else {
                                                      clearInterval(phaseOne);
                                                      jQuery('.draggable_d3').css({
                                                        color: '#FFF0C7',
                                                        transform: 'scale(1)',
                                                        background: 'rgba(83, 35, 69, 0.4)',
                                                        opacity: 1
                                                      });
                                                      jQuery('.status_percent').text('64%');
                                                      count_animation = 0;
                                                      phaseOne = setInterval(function(){
                                                        if (count_animation <= 12){
                                                        sideFormuls(count_animation, jQuery('.draggable_d4'));
                                                          if (count_animation <= 4) {
                                                            jQuery('.draggable_d4').css({
                                                              color: 'transparent',
                                                              transform: 'scale(1.3)',
                                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                              opacity: 0.8
                                                            });
                                                          } else if (count_animation <= 8) {
                                                            jQuery('.draggable_d4').css({
                                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                            });
                                                          } else if (count_animation <= 12) {
                                                            jQuery('.draggable_d4').css({
                                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                            });
                                                          }
                                                          count_animation += 1;
                                                        } else {
                                                          clearInterval(phaseOne);
                                                          jQuery('.draggable_d4').css({
                                                            color: '#FFF0C7',
                                                            transform: 'scale(1)',
                                                            background: 'rgba(83, 35, 69, 0.4)',
                                                            opacity: 1
                                                          });
                                                          jQuery('.status_percent').text('66%');
                                                          count_animation = 0;
                                                          phaseOne = setInterval(function(){
                                                            if (count_animation <= 12){
                                                            sideFormuls(count_animation, jQuery('.draggable_s3'));
                                                              if (count_animation <= 4) {
                                                                jQuery('.draggable_s3').css({
                                                                  color: 'transparent',
                                                                  transform: 'scale(1.3)',
                                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                  opacity: 0.8
                                                                });
                                                              } else if (count_animation <= 8) {
                                                                jQuery('.draggable_s3').css({
                                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                });
                                                              } else if (count_animation <= 12) {
                                                                jQuery('.draggable_s3').css({
                                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                });
                                                              }
                                                              count_animation += 1;
                                                            } else {
                                                              clearInterval(phaseOne);
                                                              jQuery('.draggable_s3').css({
                                                                color: '#FFF0C7',
                                                                transform: 'scale(1)',
                                                                background: 'rgba(83, 35, 69, 0.4)',
                                                                opacity: 1
                                                              });
                                                              jQuery('.status_percent').text('68%');
                                                              count_animation = 0;
                                                              phaseOne = setInterval(function(){
                                                                if (count_animation <= 12){
                                                                sideFormuls(count_animation, jQuery('.draggable_s4'));
                                                                  if (count_animation <= 4) {
                                                                    jQuery('.draggable_s4').css({
                                                                      color: 'transparent',
                                                                      transform: 'scale(1.3)',
                                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                      opacity: 0.8
                                                                    });
                                                                  } else if (count_animation <= 8) {
                                                                    jQuery('.draggable_s4').css({
                                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                    });
                                                                  } else if (count_animation <= 12) {
                                                                    jQuery('.draggable_s4').css({
                                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                    });
                                                                  }
                                                                  count_animation += 1;
                                                                } else {
                                                                  clearInterval(phaseOne);
                                                                  jQuery('.draggable_s4').css({
                                                                    color: '#FFF0C7',
                                                                    transform: 'scale(1)',
                                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                                    opacity: 1
                                                                  });
                                                                  count_animation = 0;
                                                                  jQuery('.zone_l, .zone_x').css('transform', 'scale(0.01)');
                                                                  if (pausedStatus == true) {
                                                                    localStorage.setItem('paused', 'v4_4');
                                                                    endNow()
                                                                  } else {
                                                                    v4_4();
                                                                  }
                                                                }
                                                              }, 1000);
                                                            }
                                                          }, 1000);
                                                        }
                                                      }, 1000);
                                                    }
                                                  }, 1000);
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v4_2 = function(){
  jQuery('.zone_l').removeClass('hidden').css('transform', 'scale(1)');
  jQuery('.status_percent').text('10%');
  console.log('Фаза 2/1');
  jQuery('.status_pahaze_now').text('2');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      jQuery('.draggable_lovushka').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      if (count_animation <= 4) {
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('13%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          jQuery('.draggable_lovushka').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          sideFormuls(count_animation, jQuery('.draggable_v3'));
          if (count_animation <= 4) {
            jQuery('.draggable_v3').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v3').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v3').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_v3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('16%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              jQuery('.draggable_lovushka').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              sideFormuls(count_animation, jQuery('.draggable_v1'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_v1').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('19%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  jQuery('.draggable_lovushka').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  sideFormuls(count_animation, jQuery('.draggable_v4'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v4').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_v4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_v4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_v4').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('22%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      jQuery('.draggable_lovushka').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      sideFormuls(count_animation, jQuery('.draggable_v3'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_v3').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_v3').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_v3').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_lovushka += 2;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_v3').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('24%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          jQuery('.draggable_lovushka').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          sideFormuls(count_animation, jQuery('.draggable_v1'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_v1').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_v1').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_v1').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                          rotate_lovushka += 2;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_v1').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('26%');
                          console.log('Фаза 2/2');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              jQuery('.draggable_lovushka').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              sideFormuls(count_animation, jQuery('.draggable_v4'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_v4').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_v4').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_v4').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                              rotate_lovushka += 2;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_v4').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('28%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  jQuery('.draggable_lovushka').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  sideFormuls(count_animation, jQuery('.draggable_v3'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_v3').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_v3').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_v3').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                  rotate_lovushka += 2;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_v3').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('30%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      jQuery('.draggable_lovushka').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      sideFormuls(count_animation, jQuery('.draggable_v1'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_v1').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_v1').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_v1').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                      rotate_lovushka += 2;
                                    } else {
                                      clearInterval(phaseOne);
                                      jQuery('.draggable_v1').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('32%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          jQuery('.draggable_lovushka').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          sideFormuls(count_animation, jQuery('.draggable_v4'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_v4').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_v4').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_v4').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                          rotate_lovushka += 2;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_v4').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('34%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              jQuery('.draggable_lovushka').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              sideFormuls(count_animation, jQuery('.draggable_v3'));
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_v3').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_v3').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_v3').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                              rotate_lovushka += 2;
                                            } else {
                                              clearInterval(phaseOne);
                                              jQuery('.draggable_v3').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('36%');
                                              count_animation = 0;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  jQuery('.draggable_lovushka').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  sideFormuls(count_animation, jQuery('.draggable_v1'));
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_v1').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_v1').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_v1').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                  rotate_lovushka += 2;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  jQuery('.draggable_v1, .draggable_lovushka').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v4_3');
                                                    endNow()
                                                  } else {
                                                    v4_3();
                                                  }
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);  
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v4 = function(){
  jQuery('.zone_l').css('transform', 'scale(0.01)');
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('5');
  localStorage.setItem('pausedPhases', '5');
  localStorage.setItem('pausedProtName', 'Протокол 4-3');
  jQuery('.status_percent').text('0%');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.zone_x').removeClass('hidden').css('transform', 'scale(1)');
  console.log('Фаза 1');
  jQuery('.status_percent').text('0%');
  x1 = jQuery('.draggable_v0').css('top');
  x2 = jQuery('.draggable_v1').css('top');
  x3 = jQuery('.draggable_d2').css('top');
  x4 = jQuery('.draggable_d3').css('top');
  x5 = jQuery('.draggable_d4').css('top');
  x6 = jQuery('.draggable_v-').css('top');
  count_animation = 0;
  rotate_lovushka = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 140){
      jQuery('.draggable_v4').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_lovushka+'deg)');
      if (count_animation <= 4) {
        jQuery('.zone_x').css('top', x1);
        rotate_lovushka += 36
      } else if (count_animation <= 8) {
        rotate_lovushka += 35
      } else if (count_animation <= 12) {
        rotate_lovushka += 34
      } else if (count_animation <= 16) {
        rotate_lovushka += 33
      } else if (count_animation <= 20) {
        jQuery('.status_percent').text('2%');
        rotate_lovushka += 32
      } else if (count_animation <= 24) {
        rotate_lovushka += 31
      } else if (count_animation <= 28) {
        rotate_lovushka += 30
      } else if (count_animation <= 32) {
        rotate_lovushka += 29
      } else if (count_animation <= 36) {
        rotate_lovushka += 28
      } else if (count_animation <= 40) {
        rotate_lovushka += 27
      } else if (count_animation <= 44) {
        rotate_lovushka += 26
      } else if (count_animation <= 48) {
        rotate_lovushka += 25
        jQuery('.status_percent').text('4%');
      } else if (count_animation <= 52) {
        rotate_lovushka += 24
      } else if (count_animation <= 56) {
        rotate_lovushka += 23
      } else if (count_animation <= 60) {
        rotate_lovushka += 22
      } else if (count_animation <= 64) {
        rotate_lovushka += 21
      } else if (count_animation <= 68) {
        rotate_lovushka += 20
      } else if (count_animation <= 72) {
        rotate_lovushka += 19
      } else if (count_animation <= 76) {
        rotate_lovushka += 18
      } else if (count_animation <= 80) {
        rotate_lovushka += 17
      } else if (count_animation <= 84) {
        rotate_lovushka += 16
      } else if (count_animation <= 88) {
        rotate_lovushka += 15
      } else if (count_animation <= 92) {
        rotate_lovushka += 14
      } else if (count_animation <= 96) {
        rotate_lovushka += 13
      } else if (count_animation <= 100) {
        jQuery('.zone_x').css('top', x2);
        jQuery('.status_percent').text('7%');
        rotate_lovushka += 12
      } else if (count_animation <= 104) {
        rotate_lovushka += 11
      } else if (count_animation <= 108) {
        rotate_lovushka += 10
      } else if (count_animation <= 112) {
        rotate_lovushka += 9
      } else if (count_animation <= 116) {
        jQuery('.zone_x').css('top', x3);
        rotate_lovushka += 8
      } else if (count_animation <= 120) {
        rotate_lovushka += 7
      } else if (count_animation <= 124) {
        jQuery('.zone_x').css('top', x4);
        rotate_lovushka += 6
      } else if (count_animation <= 128) {
        rotate_lovushka += 5
      } else if (count_animation <= 132) {
        jQuery('.zone_x').css('top', x5);
        rotate_lovushka += 4
      } else if (count_animation <= 136) {
        rotate_lovushka += 3
      } else if (count_animation <= 140) {
        jQuery('.zone_x').css('top', x6);
        rotate_lovushka += 2
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'v4_2');
        endNow()
      } else {
        v4_2();
      }
    }
  }, 1000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

v5_5 = function(){
  count_animation = 0;
  jQuery('.status_percent').text('84%');
  console.log('Фаза 6');
  phaseOne = setInterval(function(){
    if (count_animation <= 8){
      sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
      if (count_animation <= 4) {
        jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation > 4 && count_animation <= 8) {
        jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('88%');
      clearInterval(phaseOne);
      jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      phaseOne = setInterval(function(){
        if (count_animation <= 8){
          sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation > 4 && count_animation <= 8) {
            jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
              background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('93%');
          clearInterval(phaseOne);
          jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          phaseOne = setInterval(function(){
            if (count_animation <= 8){
              sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation > 4 && count_animation <= 8) {
                jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('97%');
              clearInterval(phaseOne);
              jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              phaseOne = setInterval(function(){
                if (count_animation <= 8){
                  sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation > 4 && count_animation <= 8) {
                    jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 0;
                  jQuery('.status_percent').text('100%');
                  clearInterval(phaseOne);
                  jQuery('.draggable_v1, .draggable_v2, .draggable_v5').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  onEnd();
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

v5_4 = function(){
  console.log('Фаза 4/1');
  jQuery('.status_percent').text('72%');
  jQuery('.status_pahaze_now').text('4');
  rotate_one = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 22){
      jQuery('.draggable_v-').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      rotate_one += 1.5;
      count_animation += 1;
    } else if (count_animation <= 39) {
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_v-').css({
        color: '#FFF0C7',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('73%');
      rotate_one = 10;
      phaseOne = setInterval(function(){
        if (count_animation <= 53){
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          rotate_one += 1.5;
          count_animation += 1;
        } else if (count_animation <= 70) {
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('74%');
          rotate_one = 270;
          phaseOne = setInterval(function(){
            if (count_animation <= 60){
              jQuery('.draggable_v-').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              rotate_one += 1.5;
              count_animation += 1;
            } else if (count_animation <= 77) {
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_v-').css({
                color: '#FFF0C7',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              count_animation = 0;
              jQuery('.status_percent').text('75%');
              rotate_one = 300;
              phaseOne = setInterval(function(){
                if (count_animation <= 40){
                  jQuery('.draggable_v-').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  rotate_one += 1.5;
                  count_animation += 1;
                } else if (count_animation <= 57) {
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_v-').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  count_animation = 0;
                  jQuery('.status_percent').text('76%');
                  rotate_one = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 22){
                      jQuery('.draggable_v5').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      rotate_one += 1.5;
                      count_animation += 1;
                    } else if (count_animation <= 39) {
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_v5').css({
                        color: '#FFF0C7',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      jQuery('.status_percent').text('77%');
                      rotate_one = 10;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 53){
                          jQuery('.draggable_v5').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          rotate_one += 1.5;
                          count_animation += 1;
                        } else if (count_animation <= 70) {
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_v5').css({
                            color: '#FFF0C7',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          count_animation = 0;
                          jQuery('.status_percent').text('78%');
                          rotate_one = 270;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 60){
                              jQuery('.draggable_v5').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              rotate_one += 1.5;
                              count_animation += 1;
                            } else if (count_animation <= 77) {
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_v5').css({
                                color: '#FFF0C7',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              count_animation = 0;
                              jQuery('.status_percent').text('79%');
                              rotate_one = 300;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 40){
                                  jQuery('.draggable_v5').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  rotate_one += 1.5;
                                  count_animation += 1;
                                } else if (count_animation <= 57) {
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_v5').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  count_animation = 0;
                                  jQuery('.status_percent').text('80%');
                                  rotate_one = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 22){
                                      jQuery('.draggable_v1').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      rotate_one += 1.5;
                                      count_animation += 1;
                                    } else if (count_animation <= 39) {
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_v1').css({
                                        color: '#FFF0C7',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      count_animation = 0;
                                      jQuery('.status_percent').text('81%');
                                      rotate_one = 10;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 53){
                                          jQuery('.draggable_v1').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          rotate_one += 1.5;
                                          count_animation += 1;
                                        } else if (count_animation <= 70) {
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_v1').css({
                                            color: '#FFF0C7',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          count_animation = 0;
                                          jQuery('.status_percent').text('82%');
                                          rotate_one = 270;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 60){
                                              jQuery('.draggable_v1').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              rotate_one += 1.5;
                                              count_animation += 1;
                                            } else if (count_animation <= 77) {
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_v1').css({
                                                color: '#FFF0C7',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              count_animation = 0;
                                              jQuery('.status_percent').text('83%');
                                              rotate_one = 300;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 40){
                                                  jQuery('.draggable_v1').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  rotate_one += 1.5;
                                                  count_animation += 1;
                                                } else if (count_animation <= 57) {
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_v1').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v5_5');
                                                    endNow()
                                                  } else {
                                                    v5_5();
                                                  } 
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000); 
}
v5_3 = function(){
  jQuery('.status_percent').text('48%');
  jQuery('.status_pahaze_now').text('3');
  console.log('Фаза 3/1');
  r_top = jQuery('.draggable_d2').css('top');
  l_top = jQuery('.draggable_s2').css('top');
  l_bottom = jQuery('.draggable_v0').css('top');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_v2'));
      if (count_animation <= 4) {
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v2').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v2').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('50%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_s2'));
          if (count_animation <= 4) {
            jQuery('.draggable_s2').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_s2').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_s2').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('52%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_d2'));
              if (count_animation <= 4) {
                jQuery('.draggable_d2').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_d2').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_d2').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_d2').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('54%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_v2'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v2').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_v2').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_v2').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_v2').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('56%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_s2'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_s2').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_s2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_s2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_s2').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('58%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_d2'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_d2').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_d2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_d2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_d2').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('60%');
                          console.log('Фаза 3/2');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_v2'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_v2').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_v2').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_v2').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_v2').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('62%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_s2'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_s2').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_s2').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_s2').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_s2').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('64%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_d2'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_d2').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_d2').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_d2').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      jQuery('.draggable_d2').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('66%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_v2'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_v2').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_v2').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_v2').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_v2').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('68%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              sideFormuls(count_animation, jQuery('.draggable_s2'));
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_s2').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_s2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_s2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              jQuery('.draggable_s2').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('70%');
                                              count_animation = 0;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  sideFormuls(count_animation, jQuery('.draggable_d2'));
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_d2').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_d2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_d2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  jQuery('.draggable_d2').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  jQuery('.zone_x, .zone_l').css('transform', 'scale(0.01)');
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v5_4');
                                                    endNow()
                                                  } else {
                                                    v5_4();
                                                  }
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}
v5_2 = function(){
  jQuery('.status_percent').text('16%');
  jQuery('.status_pahaze_now').text('2');
  console.log('Фаза 2/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      if (count_animation <= 4) {
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('18%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_d6'));
          if (count_animation <= 4) {
            jQuery('.draggable_d6').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_d6').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_d6').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('20%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_s5'));
              if (count_animation <= 4) {
                jQuery('.draggable_s5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_s5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_s5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_s5').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('22%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_s6'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_s6').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_s6').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_s6').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_s6').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('24%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_d5'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d5').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_d5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_d5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_d5').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('26%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_d6'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_d6').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_d6').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_d6').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_d6').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('28%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_s5'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_s5').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_s5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_s5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_s5').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('30%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_s6'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_s6').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_s6').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_s6').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_s6').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('32%');
                                  console.log('Фаза 2/2');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_d5'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_d5').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_d5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_d5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      jQuery('.draggable_d5').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('34%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_d6'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_d6').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_d6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_d6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          jQuery('.draggable_d6').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('36%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              sideFormuls(count_animation, jQuery('.draggable_s5'));
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_s5').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_s5').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_s5').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              jQuery('.draggable_s5').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('38%');
                                              count_animation = 0;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  sideFormuls(count_animation, jQuery('.draggable_s6'));
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_s6').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_s6').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_s6').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  jQuery('.draggable_s6').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  jQuery('.status_percent').text('40%');
                                                  count_animation = 0;
                                                  phaseOne = setInterval(function(){
                                                    if (count_animation <= 12){
                                                    sideFormuls(count_animation, jQuery('.draggable_d5'));
                                                      if (count_animation <= 4) {
                                                        jQuery('.draggable_d5').css({
                                                          color: 'transparent',
                                                          transform: 'scale(1.3)',
                                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                          opacity: 0.8
                                                        });
                                                      } else if (count_animation <= 8) {
                                                        jQuery('.draggable_d5').css({
                                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                        });
                                                      } else if (count_animation <= 12) {
                                                        jQuery('.draggable_d5').css({
                                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                        });
                                                      }
                                                      count_animation += 1;
                                                    } else {
                                                      clearInterval(phaseOne);
                                                      jQuery('.draggable_d5').css({
                                                        color: '#FFF0C7',
                                                        transform: 'scale(1)',
                                                        background: 'rgba(83, 35, 69, 0.4)',
                                                        opacity: 1
                                                      });
                                                      jQuery('.status_percent').text('42%');
                                                      count_animation = 0;
                                                      phaseOne = setInterval(function(){
                                                        if (count_animation <= 12){
                                                        sideFormuls(count_animation, jQuery('.draggable_d6'));
                                                          if (count_animation <= 4) {
                                                            jQuery('.draggable_d6').css({
                                                              color: 'transparent',
                                                              transform: 'scale(1.3)',
                                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                              opacity: 0.8
                                                            });
                                                          } else if (count_animation <= 8) {
                                                            jQuery('.draggable_d6').css({
                                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                            });
                                                          } else if (count_animation <= 12) {
                                                            jQuery('.draggable_d6').css({
                                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                            });
                                                          }
                                                          count_animation += 1;
                                                        } else {
                                                          clearInterval(phaseOne);
                                                          jQuery('.draggable_d6').css({
                                                            color: '#FFF0C7',
                                                            transform: 'scale(1)',
                                                            background: 'rgba(83, 35, 69, 0.4)',
                                                            opacity: 1
                                                          });
                                                          jQuery('.status_percent').text('44%');
                                                          count_animation = 0;
                                                          phaseOne = setInterval(function(){
                                                            if (count_animation <= 12){
                                                            sideFormuls(count_animation, jQuery('.draggable_s5'));
                                                              if (count_animation <= 4) {
                                                                jQuery('.draggable_s5').css({
                                                                  color: 'transparent',
                                                                  transform: 'scale(1.3)',
                                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                  opacity: 0.8
                                                                });
                                                              } else if (count_animation <= 8) {
                                                                jQuery('.draggable_s5').css({
                                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                });
                                                              } else if (count_animation <= 12) {
                                                                jQuery('.draggable_s5').css({
                                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                });
                                                              }
                                                              count_animation += 1;
                                                            } else {
                                                              clearInterval(phaseOne);
                                                              jQuery('.draggable_s5').css({
                                                                color: '#FFF0C7',
                                                                transform: 'scale(1)',
                                                                background: 'rgba(83, 35, 69, 0.4)',
                                                                opacity: 1
                                                              });
                                                              jQuery('.status_percent').text('46%');
                                                              count_animation = 0;
                                                              phaseOne = setInterval(function(){
                                                                if (count_animation <= 12){
                                                                sideFormuls(count_animation, jQuery('.draggable_s6'));
                                                                  if (count_animation <= 4) {
                                                                    jQuery('.draggable_s6').css({
                                                                      color: 'transparent',
                                                                      transform: 'scale(1.3)',
                                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                      opacity: 0.8
                                                                    });
                                                                  } else if (count_animation <= 8) {
                                                                    jQuery('.draggable_s6').css({
                                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                    });
                                                                  } else if (count_animation <= 12) {
                                                                    jQuery('.draggable_s6').css({
                                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                    });
                                                                  }
                                                                  count_animation += 1;
                                                                } else {
                                                                  clearInterval(phaseOne);
                                                                  jQuery('.draggable_s6').css({
                                                                    color: '#FFF0C7',
                                                                    transform: 'scale(1)',
                                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                                    opacity: 1
                                                                  });
                                                                  count_animation = 0;
                                                                  if (pausedStatus == true) {
                                                                    localStorage.setItem('paused', 'v5_3');
                                                                    endNow()
                                                                  } else {
                                                                    v5_3();
                                                                  }
                                                                }
                                                              }, 1000);
                                                            }
                                                          }, 1000);
                                                        }
                                                      }, 1000);
                                                    }
                                                  }, 1000);
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);  
}
v5 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('5');
  localStorage.setItem('pausedPhases', '5');
  localStorage.setItem('pausedProtName', 'Протокол 5-2');
  jQuery('.status_percent').text('0%');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      jQuery('.draggable_lovushka').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      sideFormuls(count_animation, jQuery('.draggable_v5'));
      if (count_animation <= 4) {
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('2%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          jQuery('.draggable_lovushka').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          sideFormuls(count_animation, jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v-').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v-').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v-').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('4%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              jQuery('.draggable_lovushka').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              sideFormuls(count_animation, jQuery('.draggable_v5'));
              if (count_animation <= 4) {
                jQuery('.draggable_v5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_v5').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('6%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  jQuery('.draggable_lovushka').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  sideFormuls(count_animation, jQuery('.draggable_v-'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v-').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_v-').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_v-').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_v-').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('8%');
                  console.log('Фаза 1/2');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      jQuery('.draggable_lovushka').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      sideFormuls(count_animation, jQuery('.draggable_v5'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_v5').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_v5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_v5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_lovushka += 2;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_v5').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('10%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          jQuery('.draggable_lovushka').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          sideFormuls(count_animation, jQuery('.draggable_v-'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_v-').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_v-').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_v-').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                          rotate_lovushka += 2;
                        } else {
                          clearInterval(phaseOne);
                          jQuery('.draggable_v-').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('12%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              jQuery('.draggable_lovushka').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              sideFormuls(count_animation, jQuery('.draggable_v5'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_v5').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_v5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_v5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                              rotate_lovushka += 2;
                            } else {
                              clearInterval(phaseOne);
                              jQuery('.draggable_v5').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('14%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  jQuery('.draggable_lovushka').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  sideFormuls(count_animation, jQuery('.draggable_v-'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_v-').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_v-').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_v-').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                  rotate_lovushka += 2;
                                } else {
                                  clearInterval(phaseOne);
                                  jQuery('.draggable_v-, .draggable_lovushka').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  if (pausedStatus == true) {
                                    localStorage.setItem('paused', 'v5_2');
                                    endNow()
                                  } else {
                                    v5_2();
                                  } 
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000); 
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

drenag12 = function(){
  jQuery('.status_pahaze_now').text('12');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('96%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('97%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        jQuery('.status_percent').text('98%');
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('99%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      }
      count_animation += 1;
    } else {
      jQuery('.draggable_s6, .draggable_v3').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      sideFormuls(count_animation, jQuery('.draggable_v3'));
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('100%');
      onEnd();
    }
  }, 1000);
}

drenag11 = function(){
  jQuery('.status_pahaze_now').text('11');
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.status_percent').text('86%');
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('88%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('90%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('92%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('94%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag12');
        endNow()
      } else {
        drenag12();
      }
    }
  }, 1000);
}

drenag10 = function(){
  jQuery('.status_pahaze_now').text('10');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('78%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('80%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('82%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('84%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag11');
        endNow()
      } else {
        drenag11();
      }
    }
  }, 1000); 
}

drenag9 = function(){
  jQuery('.status_pahaze_now').text('9');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('70%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('72%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('74%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('76%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag10');
        endNow()
      } else {
        drenag10();
      }
    }
  }, 1000);  
}

drenag8 = function(){
  jQuery('.status_pahaze_now').text('8');
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('60%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('62%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('64%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('66%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('68%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag9');
        endNow()
      } else {
        drenag9();
      } 
    }
  }, 1000); 
}

drenag7 = function(){
  jQuery('.status_pahaze_now').text('7');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('52%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('54%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('56%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('58%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag8');
        endNow()
      } else {
        drenag8();
      }
    }
  }, 1000);  
}

drenag6 = function(){
  jQuery('.status_pahaze_now').text('6');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('44%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('46%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('48%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('50%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag7');
        endNow()
      } else {
        drenag7();
      } 
    }
  }, 1000); 
}

drenag5 = function(){
  jQuery('.status_pahaze_now').text('5');
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('34%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('36%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('38%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('40%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('42%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag6');
        endNow()
      } else {
        drenag6();
      }
    }
  }, 1000);  
}

drenag4 = function(){
  jQuery('.status_pahaze_now').text('4');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('26%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('28%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('30%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('32%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag5');
        endNow()
      } else {
        drenag5();
      } 
    }
  }, 1000); 
}

drenag3 = function(){
  jQuery('.status_pahaze_now').text('3');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('18%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('20%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('22%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('24%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s2'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_s2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s3'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s4'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_s4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s5'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_s5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_s6'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag4');
        endNow()
      } else {
        drenag4();
      } 
    }
  }, 1000); 
}

drenag2 = function(){
  jQuery('.status_pahaze_now').text('2');
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('8%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('10%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('12%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('14%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v-'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('16%');
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v0'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v2'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v4'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v5'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag3');
        endNow()
      } else {
        drenag3();
      }
    }
  }, 1000);  
}

drenag = function(){
  console.log('Фаза 1');
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('12');
  localStorage.setItem('pausedPhases', '12');
  localStorage.setItem('pausedProtName', 'Дренажный протокол');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  jQuery('.status_percent').text('0%');
  jQuery('.status_pahaze_now').text('1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 120){
      jQuery('.draggable_v3').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/edinenie_s_tvorcom.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      if (count_animation > 0 && count_animation <= 5) {
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 5 && count_animation <= 10) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 10 && count_animation <= 15) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 15 && count_animation <= 20) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 20 && count_animation <= 25) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 25 && count_animation <= 30) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 30 && count_animation <= 35) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('2%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 35 && count_animation <= 40) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 40 && count_animation <= 45) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 45 && count_animation <= 50) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 50 && count_animation <= 55) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 55 && count_animation <= 60) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 60 && count_animation <= 65) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('4%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 65 && count_animation <= 70) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 70 && count_animation <= 75) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 75 && count_animation <= 80) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 80 && count_animation <= 85) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 85 && count_animation <= 90) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      } else if (count_animation > 90 && count_animation <= 95) {
        jQuery('.draggable_d6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.status_percent').text('6%');
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_v1'));
      } else if (count_animation > 95 && count_animation <= 100) {
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d2'));
      } else if (count_animation > 100 && count_animation <= 105) {
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d3'));
      } else if (count_animation > 105 && count_animation <= 110) {
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d4'));
      } else if (count_animation > 110 && count_animation <= 115) {
        jQuery('.draggable_d4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d5'));
      } else if (count_animation > 115 && count_animation <= 120) {
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.draggable_d6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        sideFormuls(count_animation, jQuery('.draggable_d6'));
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'drenag2');
        endNow()
      } else {
        drenag2();
      } 
    }
  }, 1000); 
}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

solis5 = function(){
  jQuery('.status_percent').text('84%');
  jQuery('.status_pahaze_now').text('5');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 60){
      if (count_animation <= 30) {
        jQuery('.draggable_v3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        jQuery('.draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        jQuery('.draggable_v-').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/x.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      }
      if (count_animation > 30 && count_animation < 60) {
        jQuery('.draggable_v3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/power.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v0, .draggable_v3, .draggable_v-').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('100%');
      onEnd();
    }
  }, 1000);
}

solis4 = function(){
  r_top = jQuery('.draggable_s6').css('top');
  l_top = jQuery('.draggable_v1').css('top');
// Фаза 4.1
  jQuery('.status_percent').text('50%');   
  jQuery('.status_pahaze_now').text('4');
  jQuery('.zone_x').css('top', l_top);
  jQuery('.zone_l').css('top', r_top);
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 96){
      jQuery('.draggable_v-').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      if (count_animation <= 4) {
        jQuery('.draggable_s5, .draggable_s6').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 16) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 20) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 24) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 28) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 32) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 36) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 40) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 44) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 48) {
        jQuery('.draggable_s5, .draggable_s6').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 52) {
        jQuery('.draggable_s5, .draggable_s6').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 4.2
        jQuery('.status_percent').text('67%');
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 56) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 60) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 64) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 68) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 72) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 76) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 80) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 84) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 88) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 92) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 96) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v1, .draggable_v-').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.zone_x, .zone_l').css('transform', 'scale(0.01)');
      jQuery('.zone_x, .zone_l').css('top', '20px');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'solis5');
        endNow()
      } else {
        solis5();
      }
    }
  }, 1000);
}

solis3 = function(){
  r_top = jQuery('.draggable_v5').css('top');
  l_top = jQuery('.draggable_v1').css('top');
// Фаза 3
  jQuery('.status_percent').text('34%');
  jQuery('.status_pahaze_now').text('3');
  jQuery('.zone_x').css('top', l_top);
  jQuery('.zone_l').css('top', r_top);
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 48){
      jQuery('.draggable_v-').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      if (count_animation <= 4) {
        jQuery('.draggable_v1, .draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 16) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 20) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 24) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 28) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 32) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 36) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 40) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 44) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 48) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'solis4');
        endNow()
      } else {
        solis4();
      }
    }
  }, 1000);
}

solis2 = function(){
  r_top = jQuery('.draggable_v4').css('top');
  l_top = jQuery('.draggable_v2').css('top');
// Фаза 2
  jQuery('.status_percent').text('16%');
  jQuery('.status_pahaze_now').text('2');
  jQuery('.zone_x').css('top', l_top);
  jQuery('.zone_l').css('top', r_top);
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 48){
      if (count_animation <= 4) {
        jQuery('.draggable_v2, .draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 16) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 20) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 24) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 28) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 32) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 36) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 40) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 44) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 48) {
        jQuery('.draggable_v2, .draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2, .draggable_v4').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'solis3');
        endNow()
      } else {
        solis3();
      }
    }
  }, 1000);
}

solis = function(){
  console.log('Фаза 1');
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('5');
  localStorage.setItem('pausedPhases', '5');
  localStorage.setItem('pausedProtName', 'Протокол Solis');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  r_top = jQuery('.draggable_v3').css('top');
  l_top = jQuery('.draggable_v3').css('top');
// Фаза 1
  jQuery('.status_percent').text('0%');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.zone_x').css('top', l_top);
  jQuery('.zone_l').css('top', r_top);
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 48){
      jQuery('.draggable_v-').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      if (count_animation <= 4) {
        jQuery('.draggable_v3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 16) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 20) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 24) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 28) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 32) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 36) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 40) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 44) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 48) {
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v3, .draggable_v-').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'solis2');
        endNow()
      } else {
        solis2();
      }
    }
  }, 1000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


mmt7 = function(){
  jQuery('.status_pahaze_now').text('7');
  jQuery('.status_percent').text('94%');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 8){
      sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
      if (count_animation <= 4) {
        jQuery('.draggable_d3, .draggable_v4, .draggable_s3, .draggable_s2, .draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation > 4 && count_animation <= 8) {
        jQuery('.draggable_d3, .draggable_v4, .draggable_s3, .draggable_s2, .draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('96%');
      phaseOne = setInterval(function(){
        if (count_animation <= 8){
          sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_d3, .draggable_v4, .draggable_s3, .draggable_s2, .draggable_v1').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation > 4 && count_animation <= 8) {
            jQuery('.draggable_d3, .draggable_v4, .draggable_s3, .draggable_s2, .draggable_v1').css({
              background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('98%');
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
              if (count_animation <= 4) {
                jQuery('.draggable_d3, .draggable_v4, .draggable_s3, .draggable_s2, .draggable_v1').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation > 4 && count_animation <= 8) {
                jQuery('.draggable_d3, .draggable_v4, .draggable_s3, .draggable_s2, .draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('99%');
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_d3, .draggable_v4, .draggable_s3, .draggable_s2, .draggable_v1').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation > 4 && count_animation <= 8) {
                    jQuery('.draggable_d3, .draggable_v4, .draggable_s3, .draggable_s2, .draggable_v1').css({
                      background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  count_animation = 0;
                  jQuery('.status_percent').text('100%');
                  clearInterval(phaseOne);
                  jQuery('.draggable_d3, .draggable_v4, .draggable_s3, .draggable_s2, .draggable_v1').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  onEnd();
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}


mmt6 = function(){
  jQuery('.status_pahaze_now').text('6');
  jQuery('.status_percent').text('81%');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_v1'));
      if (count_animation <= 4) {
        jQuery('.draggable_d3, .draggable_d2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d3, .draggable_d2').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d3, .draggable_d2').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('84%');
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_v1'));
          if (count_animation <= 4) {
            jQuery('.draggable_d3, .draggable_d2').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_d3, .draggable_d2').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_d3, .draggable_d2').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('87%');
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_v1'));
              if (count_animation <= 4) {
                jQuery('.draggable_d3, .draggable_d2').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_d3, .draggable_d2').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_d3, .draggable_d2').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('90%');
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_v1'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_d3, .draggable_d2').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_d3, .draggable_d2').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_d3, .draggable_d2').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  count_animation = 0;
                  clearInterval(phaseOne);
                  jQuery('.status_percent').text('93%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 8){
                      sideFormuls(count_animation, jQuery('.draggable_v1'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d3, .draggable_d2').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation > 4 && count_animation <= 8) {
                        jQuery('.draggable_d3, .draggable_d2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_lovushka += 2;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_d3, .draggable_d2').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      if (pausedStatus == true) {
                        localStorage.setItem('paused', 'mmt7');
                        endNow()
                      } else {
                        mmt7();
                      }
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}



mmt5 = function(){
  jQuery('.status_pahaze_now').text('5');
  jQuery('.status_percent').text('67%');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_v1'));
      if (count_animation <= 4) {
        jQuery('.draggable_d3, .draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d3, .draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d3, .draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('70%');
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_v1'));
          if (count_animation <= 4) {
            jQuery('.draggable_d3, .draggable_v1').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_d3, .draggable_v1').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_d3, .draggable_v1').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('73%');
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_v1'));
              if (count_animation <= 4) {
                jQuery('.draggable_d3, .draggable_v1').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_d3, .draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_d3, .draggable_v1').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('76%');
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_v1'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_d3, .draggable_v1').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_d3, .draggable_v1').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_d3, .draggable_v1').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  count_animation = 0;
                  clearInterval(phaseOne);
                  jQuery('.status_percent').text('79%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 8){
                      sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_v1'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d3, .draggable_v1').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation > 4 && count_animation <= 8) {
                        jQuery('.draggable_d3, .draggable_v1').css({
                          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_lovushka += 2;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_d3, .draggable_v1').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      if (pausedStatus == true) {
                        localStorage.setItem('paused', 'mmt6');
                        endNow()
                      } else {
                        mmt6();
                      }
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}


mmt4 = function(){
  jQuery('.status_pahaze_now').text('4');
  jQuery('.status_percent').text('52%');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_s2'));
      if (count_animation <= 4) {
        jQuery('.draggable_d3, .draggable_s2').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d3, .draggable_s2').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d3, .draggable_s2').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('55%');
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_s2'));
          if (count_animation <= 4) {
            jQuery('.draggable_d3, .draggable_s2').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_d3, .draggable_s2').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_d3, .draggable_s2').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('58%');
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_s2'));
              if (count_animation <= 4) {
                jQuery('.draggable_d3, .draggable_s2').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_d3, .draggable_s2').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_d3, .draggable_s2').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('61%');
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_s2'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_d3, .draggable_s2').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_d3, .draggable_s2').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_d3, .draggable_s2').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  count_animation = 0;
                  clearInterval(phaseOne);
                  jQuery('.status_percent').text('64%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 8){
                      sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_s2'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d3, .draggable_s2').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation > 4 && count_animation <= 8) {
                        jQuery('.draggable_d3, .draggable_s2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_lovushka += 2;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_d3, .draggable_s2').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      if (pausedStatus == true) {
                        localStorage.setItem('paused', 'mmt5');
                        endNow()
                      } else {
                        mmt5();
                      }
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}


mmt3 = function(){
  jQuery('.status_pahaze_now').text('3');
  jQuery('.status_percent').text('37%');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_s3'));
      if (count_animation <= 4) {
        jQuery('.draggable_d3, .draggable_s3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d3, .draggable_s3').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d3, .draggable_s3').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('40%');
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_s3'));
          if (count_animation <= 4) {
            jQuery('.draggable_d3, .draggable_s3').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_d3, .draggable_s3').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_d3, .draggable_s3').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('43%');
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_s3'));
              if (count_animation <= 4) {
                jQuery('.draggable_d3, .draggable_s3').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_d3, .draggable_s3').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_d3, .draggable_s3').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('46%');
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_s3'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_d3, .draggable_s3').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_d3, .draggable_s3').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_d3, .draggable_s3').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  count_animation = 0;
                  clearInterval(phaseOne);
                  jQuery('.status_percent').text('49%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 8){
                      sideFormulsTwo(count_animation, jQuery('.draggable_d3'), jQuery('.draggable_s3'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d3, .draggable_s3').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation > 4 && count_animation <= 8) {
                        jQuery('.draggable_d3, .draggable_s3').css({
                          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_lovushka += 2;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_d3, .draggable_s3').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      if (pausedStatus == true) {
                        localStorage.setItem('paused', 'mmt4');
                        endNow()
                      } else {
                        mmt4();
                      }
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}


mmt2 = function(){
  jQuery('.status_pahaze_now').text('2');
  jQuery('.status_percent').text('24%');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormulsTwo(count_animation, jQuery('.draggable_v4'), jQuery('.draggable_d3'));
      if (count_animation <= 4) {
        jQuery('.draggable_v4, .draggable_d3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v4, .draggable_d3').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v4, .draggable_d3').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('27%');
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormulsTwo(count_animation, jQuery('.draggable_v4'), jQuery('.draggable_d3'));
          if (count_animation <= 4) {
            jQuery('.draggable_v4, .draggable_d3').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v4, .draggable_d3').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v4, .draggable_d3').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('30%');
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormulsTwo(count_animation, jQuery('.draggable_v4'), jQuery('.draggable_d3'));
              if (count_animation <= 4) {
                jQuery('.draggable_v4, .draggable_d3').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v4, .draggable_d3').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v4, .draggable_d3').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('33%');
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormulsTwo(count_animation, jQuery('.draggable_v4'), jQuery('.draggable_d3'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v4, .draggable_d3').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_v4, .draggable_d3').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_v4, .draggable_d3').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  count_animation = 0;
                  clearInterval(phaseOne);
                  jQuery('.status_percent').text('36%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 8){
                      sideFormulsTwo(count_animation, jQuery('.draggable_v4'), jQuery('.draggable_d3'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_v4, .draggable_d3').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation > 4 && count_animation <= 8) {
                        jQuery('.draggable_v4, .draggable_d3').css({
                          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_lovushka += 2;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_v4, .draggable_d3').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      if (pausedStatus == true) {
                        localStorage.setItem('paused', 'mmt3');
                        endNow()
                      } else {
                        mmt3();
                      }
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}


mmt = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('7');
  localStorage.setItem('pausedPhases', '7');
  localStorage.setItem('pausedProtName', 'Висцеральный протокол');
  jQuery('.status_percent').text('0%');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      if (count_animation <= 4) {
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v4').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('3%');
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_v4'));
          if (count_animation <= 4) {
            jQuery('.draggable_v4').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v4').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v4').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('6%');
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_v4'));
              if (count_animation <= 4) {
                jQuery('.draggable_v4').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v4').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v4').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_v4').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              count_animation = 0;
              jQuery('.status_percent').text('9%');
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_v4'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v4').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_v4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_v4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_v4').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  count_animation = 0;
                  rotate_one = 0;
                  jQuery('.zone_x, .zone_l').css('transform', 'rotate(-90deg) scale(0.01)');
                  jQuery('.status_percent').text('12%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 22){
                      jQuery('.draggable_v4').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      rotate_one += 1.5;
                      count_animation += 1;
                    } else if (count_animation <= 39) {
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_v4').css({
                        color: '#FFF0C7',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      rotate_one = 10;
                      jQuery('.status_percent').text('15%');
                      phaseOne = setInterval(function(){
                        if (count_animation <= 53){
                          jQuery('.draggable_v4').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          rotate_one += 1.5;
                          count_animation += 1;
                        } else if (count_animation <= 70) {
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_v4').css({
                            color: '#FFF0C7',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          count_animation = 0;
                          rotate_one = 270;
                          jQuery('.status_percent').text('18%');
                          phaseOne = setInterval(function(){
                            if (count_animation <= 60){
                              jQuery('.draggable_v4').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              rotate_one += 1.5;
                              count_animation += 1;
                            } else if (count_animation <= 77) {
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_v4').css({
                                color: '#FFF0C7',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              count_animation = 0;
                              rotate_one = 300;
                              jQuery('.status_percent').text('21%');
                              phaseOne = setInterval(function(){
                                if (count_animation <= 40){
                                  jQuery('.draggable_v4').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  rotate_one += 1.5;
                                  count_animation += 1;
                                } else if (count_animation <= 57) {
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_v4').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  count_animation = 0;
                                  jQuery('.status_percent').text('78%');
                                  rotate_one = 0;
                                  if (pausedStatus == true) {
                                    localStorage.setItem('paused', 'mmt2');
                                    endNow()
                                  } else {
                                    mmt2();
                                  }
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


universal3 = function(){
  jQuery('.status_pahaze_now').text('3');
  jQuery('.status_percent').text('92%');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 8){
      sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
      if (count_animation <= 4) {
        jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation > 4 && count_animation <= 8) {
        jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('94%');
      phaseOne = setInterval(function(){
        if (count_animation <= 8){
          sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation > 4 && count_animation <= 8) {
            jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
              background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('96%');
          phaseOne = setInterval(function(){
            if (count_animation <= 8){
              sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation > 4 && count_animation <= 8) {
                jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('98%');
              phaseOne = setInterval(function(){
                if (count_animation <= 8){
                  sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation > 4 && count_animation <= 8) {
                    jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  count_animation = 0;
                  clearInterval(phaseOne);
                  jQuery('.status_percent').text('99%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 8){
                      sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation > 4 && count_animation <= 8) {
                        jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_lovushka += 2;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_v1, .draggable_v2, .draggable_v3, .draggable_v4, .draggable_v5').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      jQuery('.status_percent').text('100%');
                      onEnd();
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}


universal2 = function(){
  jQuery('.zone_x, .zone_l').css('transform', 'rotate(-90deg) scale(0.01)');
  jQuery('.status_percent').text('14%');
  jQuery('.status_pahaze_now').text('2');
  rotate_one = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 22){
      jQuery('.draggable_v1').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      rotate_one += 1.5;
      count_animation += 1;
    } else if (count_animation <= 39) {
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_v1').css({
        color: '#FFF0C7',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('18%');
      rotate_one = 10;
      phaseOne = setInterval(function(){
        if (count_animation <= 53){
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          rotate_one += 1.5;
          count_animation += 1;
        } else if (count_animation <= 70) {
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('21%');
          rotate_one = 270;
          phaseOne = setInterval(function(){
            if (count_animation <= 60){
              jQuery('.draggable_v1').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              rotate_one += 1.5;
              count_animation += 1;
            } else if (count_animation <= 77) {
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_v1').css({
                color: '#FFF0C7',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              count_animation = 0;
              jQuery('.status_percent').text('25%');
              rotate_one = 300;
              phaseOne = setInterval(function(){
                if (count_animation <= 40){
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  rotate_one += 1.5;
                  count_animation += 1;
                } else if (count_animation <= 57) {
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_v1').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  count_animation = 0;
                  jQuery('.status_percent').text('29%');
                  rotate_one = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 22){
                      jQuery('.draggable_v2').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      rotate_one += 1.5;
                      count_animation += 1;
                    } else if (count_animation <= 39) {
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_v2').css({
                        color: '#FFF0C7',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      jQuery('.status_percent').text('34%');
                      rotate_one = 10;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 53){
                          jQuery('.draggable_v2').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          rotate_one += 1.5;
                          count_animation += 1;
                        } else if (count_animation <= 70) {
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_v2').css({
                            color: '#FFF0C7',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          count_animation = 0;
                          jQuery('.status_percent').text('38%');
                          rotate_one = 270;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 60){
                              jQuery('.draggable_v2').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              rotate_one += 1.5;
                              count_animation += 1;
                            } else if (count_animation <= 77) {
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_v2').css({
                                color: '#FFF0C7',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              count_animation = 0;
                              jQuery('.status_percent').text('42%');
                              rotate_one = 300;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 40){
                                  jQuery('.draggable_v2').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  rotate_one += 1.5;
                                  count_animation += 1;
                                } else if (count_animation <= 57) {
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_v2').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  count_animation = 0;
                                  jQuery('.status_percent').text('46%');
                                  rotate_one = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 22){
                                      jQuery('.draggable_v3').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      rotate_one += 1.5;
                                      count_animation += 1;
                                    } else if (count_animation <= 39) {
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_v3').css({
                                        color: '#FFF0C7',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      count_animation = 0;
                                      jQuery('.status_percent').text('50%');
                                      rotate_one = 10;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 53){
                                          jQuery('.draggable_v3').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          rotate_one += 1.5;
                                          count_animation += 1;
                                        } else if (count_animation <= 70) {
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_v3').css({
                                            color: '#FFF0C7',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          count_animation = 0;
                                          jQuery('.status_percent').text('54%');
                                          rotate_one = 270;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 60){
                                              jQuery('.draggable_v3').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              rotate_one += 1.5;
                                              count_animation += 1;
                                            } else if (count_animation <= 77) {
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_v3').css({
                                                color: '#FFF0C7',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              count_animation = 0;
                                              jQuery('.status_percent').text('58%');
                                              rotate_one = 300;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 40){
                                                  jQuery('.draggable_v3').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  rotate_one += 1.5;
                                                  count_animation += 1;
                                                } else if (count_animation <= 57) {
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_v3').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  rotate_one = 0;
                                                  jQuery('.status_percent').text('63%');
                                                  phaseOne = setInterval(function(){
                                                    if (count_animation <= 22){
                                                      jQuery('.draggable_v4').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      rotate_one += 1.5;
                                                      count_animation += 1;
                                                    } else if (count_animation <= 39) {
                                                      count_animation += 1;
                                                    } else {
                                                      clearInterval(phaseOne);
                                                      count_animation = 1;
                                                      jQuery('.draggable_v4').css({
                                                        color: '#FFF0C7',
                                                        background: 'rgba(83, 35, 69, 0.4)',
                                                        opacity: 1
                                                      });
                                                      count_animation = 0;
                                                      jQuery('.status_percent').text('67%');
                                                      rotate_one = 10;
                                                      phaseOne = setInterval(function(){
                                                        if (count_animation <= 53){
                                                          jQuery('.draggable_v4').css({
                                                            color: 'transparent',
                                                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                            opacity: 0.8
                                                          });
                                                          rotate_one += 1.5;
                                                          count_animation += 1;
                                                        } else if (count_animation <= 70) {
                                                          count_animation += 1;
                                                        } else {
                                                          clearInterval(phaseOne);
                                                          count_animation = 1;
                                                          jQuery('.draggable_v4').css({
                                                            color: '#FFF0C7',
                                                            background: 'rgba(83, 35, 69, 0.4)',
                                                            opacity: 1
                                                          });
                                                          count_animation = 0;
                                                          jQuery('.status_percent').text('71%');
                                                          rotate_one = 270;
                                                          phaseOne = setInterval(function(){
                                                            if (count_animation <= 60){
                                                              jQuery('.draggable_v4').css({
                                                                color: 'transparent',
                                                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                                opacity: 0.8
                                                              });
                                                              rotate_one += 1.5;
                                                              count_animation += 1;
                                                            } else if (count_animation <= 77) {
                                                              count_animation += 1;
                                                            } else {
                                                              clearInterval(phaseOne);
                                                              count_animation = 1;
                                                              jQuery('.draggable_v4').css({
                                                                color: '#FFF0C7',
                                                                background: 'rgba(83, 35, 69, 0.4)',
                                                                opacity: 1
                                                              });
                                                              count_animation = 0;
                                                              jQuery('.status_percent').text('75%');
                                                              rotate_one = 300;
                                                              phaseOne = setInterval(function(){
                                                                if (count_animation <= 40){
                                                                  jQuery('.draggable_v4').css({
                                                                    color: 'transparent',
                                                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                                    opacity: 0.8
                                                                  });
                                                                  rotate_one += 1.5;
                                                                  count_animation += 1;
                                                                } else if (count_animation <= 57) {
                                                                  count_animation += 1;
                                                                } else {
                                                                  clearInterval(phaseOne);
                                                                  count_animation = 1;
                                                                  jQuery('.draggable_v4').css({
                                                                    color: '#FFF0C7',
                                                                    transform: 'scale(1)',
                                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                                    opacity: 1
                                                                  });
                                                                  count_animation = 0;
                                                                  rotate_one = 0;
                                                                  jQuery('.status_percent').text('79%');
                                                                  phaseOne = setInterval(function(){
                                                                    if (count_animation <= 22){
                                                                      jQuery('.draggable_v5').css({
                                                                        color: 'transparent',
                                                                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                                        opacity: 0.8
                                                                      });
                                                                      rotate_one += 1.5;
                                                                      count_animation += 1;
                                                                    } else if (count_animation <= 39) {
                                                                      count_animation += 1;
                                                                    } else {
                                                                      clearInterval(phaseOne);
                                                                      count_animation = 1;
                                                                      jQuery('.draggable_v5').css({
                                                                        color: '#FFF0C7',
                                                                        background: 'rgba(83, 35, 69, 0.4)',
                                                                        opacity: 1
                                                                      });
                                                                      count_animation = 0;
                                                                      jQuery('.status_percent').text('83%');
                                                                      rotate_one = 10;
                                                                      phaseOne = setInterval(function(){
                                                                        if (count_animation <= 53){
                                                                          jQuery('.draggable_v5').css({
                                                                            color: 'transparent',
                                                                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                                            opacity: 0.8
                                                                          });
                                                                          rotate_one += 1.5;
                                                                          count_animation += 1;
                                                                        } else if (count_animation <= 70) {
                                                                          count_animation += 1;
                                                                        } else {
                                                                          clearInterval(phaseOne);
                                                                          count_animation = 1;
                                                                          jQuery('.draggable_v5').css({
                                                                            color: '#FFF0C7',
                                                                            background: 'rgba(83, 35, 69, 0.4)',
                                                                            opacity: 1
                                                                          });
                                                                          count_animation = 0;
                                                                          jQuery('.status_percent').text('86%');
                                                                          rotate_one = 270;
                                                                          phaseOne = setInterval(function(){
                                                                            if (count_animation <= 60){
                                                                              jQuery('.draggable_v5').css({
                                                                                color: 'transparent',
                                                                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                                                opacity: 0.8
                                                                              });
                                                                              rotate_one += 1.5;
                                                                              count_animation += 1;
                                                                            } else if (count_animation <= 77) {
                                                                              count_animation += 1;
                                                                            } else {
                                                                              clearInterval(phaseOne);
                                                                              count_animation = 1;
                                                                              jQuery('.draggable_v5').css({
                                                                                color: '#FFF0C7',
                                                                                background: 'rgba(83, 35, 69, 0.4)',
                                                                                opacity: 1
                                                                              });
                                                                              count_animation = 0;
                                                                              jQuery('.status_percent').text('89%');
                                                                              rotate_one = 300;
                                                                              phaseOne = setInterval(function(){
                                                                                if (count_animation <= 40){
                                                                                  jQuery('.draggable_v5').css({
                                                                                    color: 'transparent',
                                                                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                                                    opacity: 0.8
                                                                                  });
                                                                                  rotate_one += 1.5;
                                                                                  count_animation += 1;
                                                                                } else if (count_animation <= 57) {
                                                                                  count_animation += 1;
                                                                                } else {
                                                                                  clearInterval(phaseOne);
                                                                                  count_animation = 1;
                                                                                  jQuery('.draggable_v5').css({
                                                                                    color: '#FFF0C7',
                                                                                    transform: 'scale(1)',
                                                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                                                    opacity: 1
                                                                                  });
                                                                                  count_animation = 0;
                                                                                  if (pausedStatus == true) {
                                                                                    localStorage.setItem('paused', 'universal3');
                                                                                    endNow()
                                                                                  } else {
                                                                                    universal3();
                                                                                  } 
                                                                                }
                                                                              }, 1000);
                                                                            }
                                                                          }, 1000);
                                                                        }
                                                                      }, 1000);
                                                                    }
                                                                  }, 1000);
                                                                }
                                                              }, 1000);
                                                            }
                                                          }, 1000);
                                                        }
                                                      }, 1000);
                                                    }
                                                  }, 1000); 
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000); 
}


universal = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('3');
  localStorage.setItem('pausedPhases', '3');
  localStorage.setItem('pausedProtName', 'Универсальный протокол');
  jQuery('.status_percent').text('0%');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  console.log('Фаза 1/1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 15){
      sideFormuls(count_animation, jQuery('.draggable_v1'));
      if (count_animation > 3 && count_animation <= 7) {
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation > 7 && count_animation <= 11) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation > 11 && count_animation <= 15) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v1').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('3%');
      phaseOne = setInterval(function(){
        if (count_animation <= 15){
          sideFormuls(count_animation, jQuery('.draggable_v2'));
          if (count_animation > 3 && count_animation <= 7) {
            jQuery('.draggable_v2').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation > 7 && count_animation <= 11) {
            jQuery('.draggable_v2').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation > 11 && count_animation <= 15) {
            jQuery('.draggable_v2').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('6%');
          phaseOne = setInterval(function(){
            if (count_animation <= 15){
              sideFormuls(count_animation, jQuery('.draggable_v3'));
              if (count_animation > 3 && count_animation <= 7) {
                jQuery('.draggable_v3').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation > 7 && count_animation <= 11) {
                jQuery('.draggable_v3').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation > 11 && count_animation <= 15) {
                jQuery('.draggable_v3').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              jQuery('.draggable_v3').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              count_animation = 0;
              jQuery('.status_percent').text('9%');
              phaseOne = setInterval(function(){
                if (count_animation <= 15){
                  sideFormuls(count_animation, jQuery('.draggable_v4'));
                  if (count_animation > 3 && count_animation <= 7) {
                    jQuery('.draggable_v4').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation > 7 && count_animation <= 11) {
                    jQuery('.draggable_v4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation > 11 && count_animation <= 15) {
                    jQuery('.draggable_v4').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  clearInterval(phaseOne);
                  jQuery('.draggable_v4').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  count_animation = 0;
                  jQuery('.status_percent').text('12%');
                  phaseOne = setInterval(function(){
                    if (count_animation <= 15){
                      sideFormuls(count_animation, jQuery('.draggable_v5'));
                      if (count_animation > 3 && count_animation <= 7) {
                        jQuery('.draggable_v5').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation > 7 && count_animation <= 11) {
                        jQuery('.draggable_v5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation > 11 && count_animation <= 15) {
                        jQuery('.draggable_v5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_lovushka += 2;
                    } else {
                      clearInterval(phaseOne);
                      jQuery('.draggable_v5').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      count_animation = 0;
                      if (pausedStatus == true) {
                        localStorage.setItem('paused', 'universal2');
                        endNow()
                      } else {
                        universal2();
                      } 
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}




karma_54 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '54');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('100%');
  jQuery('.status_pahaze_now').text('54');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v3'));
      jQuery('.draggable_v3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_six').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v3, .draggable_d2').removeClass('rot_d_six rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('100%');
      onEnd();
    }
  }, 250);
}
karma_53 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '53');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('97%');
  jQuery('.status_pahaze_now').text('53');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      jQuery('.draggable_v4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_five').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4, .draggable_d2').removeClass('rot_d_five rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('97%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_54');
        endNow()
      } else {
        karma_54();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_52 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '52');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('95%');
  jQuery('.status_pahaze_now').text('52');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      jQuery('.draggable_d5').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_four').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d5, .draggable_d2').removeClass('rot_d_four rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('95%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_53');
        endNow()
      } else {
        karma_53();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_51 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '51');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('93%');
  jQuery('.status_pahaze_now').text('51');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d4'));
      jQuery('.draggable_d4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_three').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d4, .draggable_d2').removeClass('rot_d_three rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('93%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_52');
        endNow()
      } else {
        karma_52();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_50 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '50');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('91%');
  jQuery('.status_pahaze_now').text('50');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      jQuery('.draggable_d3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_two').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3, .draggable_d2').removeClass('rot_d_two rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('91%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_51');
        endNow()
      } else {
        karma_51();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_49 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '49');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('90%');
  jQuery('.status_pahaze_now').text('49');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v2'));
      jQuery('.draggable_v2').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_one').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2, .draggable_d2').removeClass('rot_d_one rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('90%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_50');
        endNow()
      } else {
        karma_50();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_48 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '48');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('88%');
  jQuery('.status_pahaze_now').text('48');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v3'));
      jQuery('.draggable_v3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_six').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v3, .draggable_d2').removeClass('rot_d_six rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('88%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_49');
        endNow()
      } else {
        karma_49();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_47 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '47');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('86%');
  jQuery('.status_pahaze_now').text('47');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      jQuery('.draggable_v4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_five').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4, .draggable_d2').removeClass('rot_d_five rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('86%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_48');
        endNow()
      } else {
        karma_48();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_46 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '46');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('84%');
  jQuery('.status_pahaze_now').text('46');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      jQuery('.draggable_d5').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_four').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d5, .draggable_d2').removeClass('rot_d_four rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('84%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_47');
        endNow()
      } else {
        karma_47();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_45 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '45');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('82%');
  jQuery('.status_pahaze_now').text('45');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d4'));
      jQuery('.draggable_d4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_three').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d4, .draggable_d2').removeClass('rot_d_three rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('82%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_46');
        endNow()
      } else {
        karma_46();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_44 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '44');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('80%');
  jQuery('.status_pahaze_now').text('44');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      jQuery('.draggable_d3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_two').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3, .draggable_d2').removeClass('rot_d_two rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('80%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_45');
        endNow()
      } else {
        karma_45();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_43 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '43');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('79%');
  jQuery('.status_pahaze_now').text('43');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v2'));
      jQuery('.draggable_v2').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_one').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2, .draggable_d2').removeClass('rot_d_one rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('79%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_44');
        endNow()
      } else {
        karma_44();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_42 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '42');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('77%');
  jQuery('.status_pahaze_now').text('42');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v3'));
      jQuery('.draggable_v3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_six').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v3, .draggable_d2').removeClass('rot_d_six rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('77%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_43');
        endNow()
      } else {
        karma_43();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_41 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '41');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('75%');
  jQuery('.status_pahaze_now').text('41');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      jQuery('.draggable_v4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_five').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4, .draggable_d2').removeClass('rot_d_five rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('75%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_42');
        endNow()
      } else {
        karma_42();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_40 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '40');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('73%');
  jQuery('.status_pahaze_now').text('40');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      jQuery('.draggable_d5').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_four').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d5, .draggable_d2').removeClass('rot_d_four rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('73%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_41');
        endNow()
      } else {
        karma_41();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_39 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '39');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('71%');
  jQuery('.status_pahaze_now').text('39');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d4'));
      jQuery('.draggable_d4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_three').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d4, .draggable_d2').removeClass('rot_d_three rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('71%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_40');
        endNow()
      } else {
        karma_40();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_38 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '38');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('70%');
  jQuery('.status_pahaze_now').text('38');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      jQuery('.draggable_d3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_two').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3, .draggable_d2').removeClass('rot_d_two rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('70%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_39');
        endNow()
      } else {
        karma_39();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_37 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '37');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('68%');
  jQuery('.status_pahaze_now').text('37');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v2'));
      jQuery('.draggable_v2').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_one').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2, .draggable_d2').removeClass('rot_d_one rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('68%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_38');
        endNow()
      } else {
        karma_38();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_36 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '36');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('66%');
  jQuery('.status_pahaze_now').text('36');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v3'));
      jQuery('.draggable_v3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_six').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v3, .draggable_d2').removeClass('rot_d_six rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('66%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_37');
        endNow()
      } else {
        karma_37();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_35 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '35');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('64%');
  jQuery('.status_pahaze_now').text('35');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      jQuery('.draggable_v4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_five').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4, .draggable_d2').removeClass('rot_d_five rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('64%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_36');
        endNow()
      } else {
        karma_36();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_34 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '43');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('62%');
  jQuery('.status_pahaze_now').text('34');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      jQuery('.draggable_d5').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_four').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d5, .draggable_d2').removeClass('rot_d_four rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('62%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_35');
        endNow()
      } else {
        karma_35();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_33 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '33');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('60%');
  jQuery('.status_pahaze_now').text('33');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d4'));
      jQuery('.draggable_d4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_three').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d4, .draggable_d2').removeClass('rot_d_three rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('60%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_34');
        endNow()
      } else {
        karma_34();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_32 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '32');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('59%');
  jQuery('.status_pahaze_now').text('32');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      jQuery('.draggable_d3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_two').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3, .draggable_d2').removeClass('rot_d_two rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('59%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_33');
        endNow()
      } else {
        karma_33();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_31 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '31');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('57%');
  jQuery('.status_pahaze_now').text('31');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v2'));
      jQuery('.draggable_v2').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_one').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2, .draggable_d2').removeClass('rot_d_one rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('57%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_32');
        endNow()
      } else {
        karma_32();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_30 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '30');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('55%');
  jQuery('.status_pahaze_now').text('30');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v3'));
      jQuery('.draggable_v3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_six').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v3, .draggable_d2').removeClass('rot_d_six rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('55%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_31');
        endNow()
      } else {
        karma_31();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_29 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '29');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('53%');
  jQuery('.status_pahaze_now').text('29');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      jQuery('.draggable_v4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_five').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4, .draggable_d2').removeClass('rot_d_five rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('53%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_30');
        endNow()
      } else {
        karma_30();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_28 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '28');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('51%');
  jQuery('.status_pahaze_now').text('28');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      jQuery('.draggable_d5').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_four').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d5, .draggable_d2').removeClass('rot_d_four rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('51%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_29');
        endNow()
      } else {
        karma_29();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_27 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '27');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('50%');
  jQuery('.status_pahaze_now').text('27');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d4'));
      jQuery('.draggable_d4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_three').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d4, .draggable_d2').removeClass('rot_d_three rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('50%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_28');
        endNow()
      } else {
        karma_28();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_26 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '26');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('48%');
  jQuery('.status_pahaze_now').text('26');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      jQuery('.draggable_d3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_two').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3, .draggable_d2').removeClass('rot_d_two rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('48%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_27');
        endNow()
      } else {
        karma_27();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_25 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '25');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('46%');
  jQuery('.status_pahaze_now').text('25');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v2'));
      jQuery('.draggable_v2').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_one').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2, .draggable_d2').removeClass('rot_d_one rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('46%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_26');
        endNow()
      } else {
        karma_26();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_24 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '24');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('44%');
  jQuery('.status_pahaze_now').text('24');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v3'));
      jQuery('.draggable_v3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_six').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v3, .draggable_d2').removeClass('rot_d_six rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('44%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_25');
        endNow()
      } else {
        karma_25();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_23 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '23');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('42%');
  jQuery('.status_pahaze_now').text('23');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      jQuery('.draggable_v4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_five').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4, .draggable_d2').removeClass('rot_d_five rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('42%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_24');
        endNow()
      } else {
        karma_24();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_22 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '22');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('40%');
  jQuery('.status_pahaze_now').text('22');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      jQuery('.draggable_d5').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_four').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d5, .draggable_d2').removeClass('rot_d_four rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('40%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_23');
        endNow()
      } else {
        karma_23();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_21 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '21');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('39%');
  jQuery('.status_pahaze_now').text('21');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d4'));
      jQuery('.draggable_d4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_three').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d4, .draggable_d2').removeClass('rot_d_three rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('39%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_22');
        endNow()
      } else {
        karma_22();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_20 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '20');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('37%');
  jQuery('.status_pahaze_now').text('20');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      jQuery('.draggable_d3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_two').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3, .draggable_d2').removeClass('rot_d_two rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('37%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_21');
        endNow()
      } else {
        karma_21();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_19 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '19');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('35%');
  jQuery('.status_pahaze_now').text('19');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v2'));
      jQuery('.draggable_v2').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_one').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2, .draggable_d2').removeClass('rot_d_one rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('35%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_20');
        endNow()
      } else {
        karma_20();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_18 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '18');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('33%');
  jQuery('.status_pahaze_now').text('18');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v3'));
      jQuery('.draggable_v3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_six').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v3, .draggable_d2').removeClass('rot_d_six rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('33%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_19');
        endNow()
      } else {
        karma_19();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_17 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '17');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('31%');
  jQuery('.status_pahaze_now').text('17');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      jQuery('.draggable_v4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_five').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4, .draggable_d2').removeClass('rot_d_five rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('31%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_18');
        endNow()
      } else {
        karma_18();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_16 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '16');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('29%');
  jQuery('.status_pahaze_now').text('16');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      jQuery('.draggable_d5').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_four').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d5, .draggable_d2').removeClass('rot_d_four rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('29%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_17');
        endNow()
      } else {
        karma_17();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_15 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '15');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('28%');
  jQuery('.status_pahaze_now').text('15');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d4'));
      jQuery('.draggable_d4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_three').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d4, .draggable_d2').removeClass('rot_d_three rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('28%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_16');
        endNow()
      } else {
        karma_16();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_14 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '14');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('26%');
  jQuery('.status_pahaze_now').text('14');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      jQuery('.draggable_d3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_two').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3, .draggable_d2').removeClass('rot_d_two rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('26%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_15');
        endNow()
      } else {
        karma_15();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_13 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '13');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('24%');
  jQuery('.status_pahaze_now').text('13');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v2'));
      jQuery('.draggable_v2').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_one').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2, .draggable_d2').removeClass('rot_d_one rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('24%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_14');
        endNow()
      } else {
        karma_14();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_12 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '12');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('22%');
  jQuery('.status_pahaze_now').text('12');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v3'));
      jQuery('.draggable_v3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_six').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v3, .draggable_d2').removeClass('rot_d_six rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('22%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_13');
        endNow()
      } else {
        karma_13();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_11 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '11');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('20%');
  jQuery('.status_pahaze_now').text('11');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      jQuery('.draggable_v4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_five').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4, .draggable_d2').removeClass('rot_d_five rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('20%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_12');
        endNow()
      } else {
        karma_12();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_10 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '10');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('19%');
  jQuery('.status_pahaze_now').text('10');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      jQuery('.draggable_d5').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_four').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d5, .draggable_d2').removeClass('rot_d_four rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('19%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_11');
        endNow()
      } else {
        karma_11();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_9 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '9');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_pahaze_now').text('9');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d4'));
      jQuery('.draggable_d4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_three').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d4, .draggable_d2').removeClass('rot_d_three rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('9%');
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_10');
        endNow()
      } else {
        karma_10();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_8 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '8');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('15%');
  jQuery('.status_pahaze_now').text('8');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      jQuery('.draggable_d3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_two').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3, .draggable_d2').removeClass('rot_d_two rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_9');
        endNow()
      } else {
        karma_9();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_7 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '7');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('13%');
  jQuery('.status_pahaze_now').text('7');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v2'));
      jQuery('.draggable_v2').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_one').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2, .draggable_d2').removeClass('rot_d_one rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_8');
        endNow()
      } else {
        karma_8();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_6 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '6');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('11%');
  jQuery('.status_pahaze_now').text('6');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v3'));
      jQuery('.draggable_v3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_six').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v3, .draggable_d2').removeClass('rot_d_six rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_7');
        endNow()
      } else {
        karma_7();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_5 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '5');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('9%');
  jQuery('.status_pahaze_now').text('5');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v4'));
      jQuery('.draggable_v4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_five').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v4, .draggable_d2').removeClass('rot_d_five rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_6');
        endNow()
      } else {
        karma_6();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_4 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '4');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('8%');
  jQuery('.status_pahaze_now').text('4');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      jQuery('.draggable_d5').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_four').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d5, .draggable_d2').removeClass('rot_d_four rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_5');
        endNow()
      } else {
        karma_5();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_3 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '3');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('6%');
  jQuery('.status_pahaze_now').text('3');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d4'));
      jQuery('.draggable_d4').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_three').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d4, .draggable_d2').removeClass('rot_d_three rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_4');
        endNow()
      } else {
        karma_4();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma_2 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '2');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('4%');
  jQuery('.status_pahaze_now').text('2');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_d3'));
      jQuery('.draggable_d3').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_two').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_d3, .draggable_d2').removeClass('rot_d_two rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_3');
        endNow()
      } else {
        karma_3();
        // console.log('continue');
      } 
    }
  }, 250);
}
karma = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('54');
  localStorage.setItem('pausedPhases', '1');
  localStorage.setItem('pausedProtName', 'Кармический протокол');
  jQuery('.status_percent').text('2%');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 104){
      sideFormuls(count_animation, jQuery('.draggable_v2'));
      jQuery('.draggable_v2').addClass('rot_zone_supersolis').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/super_plod.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      jQuery('.draggable_d2').addClass('rot_d_one').css({
        color: 'transparent',
        transform: 'scale(1.3)',
        background: '#fff url(/wp-content/themes/mobile/img/d_.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v2, .draggable_d2').removeClass('rot_d_one rot_zone_supersolis').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'karma_2');
        endNow()
      } else {
        karma_2();
        // console.log('continue');
      } 
    }
  }, 250);
}




moon_1_6 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('rtrtrtrt');
  localStorage.setItem('pausedPhases', '1');
  localStorage.setItem('pausedProtName', 'Лунный протокол');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.status_percent').text('92%');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  jQuery('.draggable_v0, .draggable_v1, .draggable_s2').addClass('rot_mo_4').css({
    color: 'transparent',
    background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
    transform: 'scale(1.3)',
    opacity: 0.8
  });
  phaseOne = setInterval(function(){
    console.log(count_animation);
    if (count_animation <= 228){
      sideFormuls(count_animation, jQuery('.draggable_s2'));
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v0, .draggable_v1, .draggable_s2').removeClass('rot_mo_4').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      onEnd();
    }
  }, 250);
}

moon_1_5 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('rtrtrtrt');
  localStorage.setItem('pausedPhases', '1');
  localStorage.setItem('pausedProtName', 'Лунный протокол');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.status_percent').text('87%');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  jQuery('.draggable_v0, .draggable_v1, .draggable_s2').addClass('rot_mo_3').css({
    color: 'transparent',
    background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
    transform: 'scale(1.3)',
    opacity: 0.8
  });
  phaseOne = setInterval(function(){
    console.log(count_animation);
    if (count_animation <= 228){
      sideFormuls(count_animation, jQuery('.draggable_s2'));
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v0, .draggable_v1, .draggable_s2').removeClass('rot_mo_3').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'moon_1_6');
        endNow()
      } else {
        moon_1_6();
        // console.log('continue');
      } 
    }
  }, 250);
}

moon_1_4 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('rtrtrtrt');
  localStorage.setItem('pausedPhases', '1');
  localStorage.setItem('pausedProtName', 'Лунный протокол');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.status_percent').text('71%');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  jQuery('.draggable_v0, .draggable_v1, .draggable_s2').addClass('rot_mo_2').css({
    color: 'transparent',
    background: '#fff url(/wp-content/themes/bcwish/img/mo_left.png) center center/100% no-repeat',
    transform: 'scale(1.3)',
    opacity: 0.8
  });
  phaseOne = setInterval(function(){
    console.log(count_animation);
    if (count_animation <= 228){
      sideFormuls(count_animation, jQuery('.draggable_s2'));
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v0, .draggable_v1, .draggable_s2').removeClass('rot_mo_2').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'moon_1_5');
        endNow()
      } else {
        moon_1_5();
        // console.log('continue');
      } 
    }
  }, 250);
}

moon_1_3 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('rtrtrtrt');
  localStorage.setItem('pausedPhases', '1');
  localStorage.setItem('pausedProtName', 'Лунный протокол');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.status_percent').text('63%');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  jQuery('.draggable_v0, .draggable_v1, .draggable_s2').addClass('rot_mo_1').css({
    color: 'transparent',
    background: '#fff url(/wp-content/themes/bcwish/img/mo_right.png) center center/100% no-repeat',
    transform: 'scale(1.3)',
    opacity: 0.8
  });
  phaseOne = setInterval(function(){
    console.log(count_animation);
    if (count_animation <= 228){
      sideFormuls(count_animation, jQuery('.draggable_s2'));
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v0, .draggable_v1, .draggable_s2').removeClass('rot_mo_1').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'moon_1_4');
        endNow()
      } else {
        moon_1_4();
        // console.log('continue');
      } 
    }
  }, 250);
}

moon_1_2 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('rtrtrtrt');
  localStorage.setItem('pausedPhases', '1');
  localStorage.setItem('pausedProtName', 'Лунный протокол');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({
    color: 'transparent',
    transform: 'scale(1.3)',
    opacity: 0.8
  });
  jQuery('.draggable_v0').css({background: '#fff url(/wp-content/themes/bcwish/img/plod.png) center center/100% no-repeat'});
  phaseOne = setInterval(function(){
    if (count_animation <= 360){
      sideFormuls(count_animation, jQuery('.draggable_s2'));
      // if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
      //     reloadSound.play();
      // };
      if (count_animation > 0 && count_animation <= 120) {
        jQuery('.draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/disfunction.png) center center/100% no-repeat'});
      } else if (count_animation > 120 && count_animation <= 220) {
        jQuery('.draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/travma.png) center center/100% no-repeat'});
      } else if (count_animation > 220 && count_animation <= 360) {
        jQuery('.draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/povregdenie_demona.png) center center/100% no-repeat'});
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'moon_1_3');
        endNow()
      } else {
        moon_1_3();
        // console.log('continue');
      } 
    }
  }, 250);
}

moon_1 = function(){
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('rtrtrtrt');
  localStorage.setItem('pausedPhases', '1');
  localStorage.setItem('pausedProtName', 'Лунный протокол');
  jQuery('.status_pahaze_now').text('1');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  count_animation = 0;
  jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({
    color: 'transparent',
    transform: 'scale(1.3)',
    opacity: 0.8
  });
  phaseOne = setInterval(function(){
    if (count_animation <= 1080){
      sideFormuls(count_animation, jQuery('.draggable_s2'));
      // if (count_animation == 1 || count_animation == 120 || count_animation == 240 || count_animation == 360 || count_animation == 480 || count_animation == 600 || count_animation == 720 || count_animation == 840 || count_animation == 960 || count_animation == 1080){
      //     reloadSound.play();
      // };
      if (count_animation <= 120){
        jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
      } else if (count_animation > 120 && count_animation <= 240){
        jQuery('.status_percent').text('5%');
        jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
      } else if (count_animation > 240 && count_animation <= 360){
        jQuery('.status_percent').text('10%');
        jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
      } else if (count_animation > 360 && count_animation <= 480){
        jQuery('.status_percent').text('15%');
        jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
      } else if (count_animation > 480 && count_animation <= 600){
        jQuery('.status_percent').text('20%');
        jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
      } else if (count_animation > 600 && count_animation <= 720){
        jQuery('.status_percent').text('25%');
        jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
      } else if (count_animation > 720 && count_animation <= 840){
        jQuery('.status_percent').text('30%');
        jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
      } else if (count_animation > 840 && count_animation <= 960){
        jQuery('.status_percent').text('35%');
        jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/veter.png) center center/100% no-repeat'});
      } else if (count_animation > 960 && count_animation <= 1080){
        jQuery('.status_percent').text('40%');
        jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({background: '#fff url(/wp-content/themes/bcwish/img/life_vater.png) center center/100% no-repeat'});
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      jQuery('.draggable_v0, .draggable_v1, .draggable_s2').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      if (pausedStatus == true) {
        localStorage.setItem('paused', 'moon_1_2');
        endNow()
      } else {
        moon_1_2();
        // console.log('continue');
      } 
    }
  }, 250);
}



////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


checkPoints = function(){
  jQuery('.zone_movable').each(function() {
    if(parseFloat(jQuery(this).css('top')) < 20){
      pointsStatus = false;
      console.log('status '+' '+jQuery(this).text()+' '+jQuery(this).css('top')+' '+pointsStatus);
    }
  });
}

// curient moon day
let moonBegin = 1613032380000;
let moonMonth = 29.53059 * 24 * 60 * 60 * 1000;
let now = Date.now();
let moonDay = ((now - moonBegin) %  moonMonth)/(moonMonth/30)|0;
if (moonDay == 0) {
  moonDay = 1;
}
console.log(`Сейчас ${moonDay} лунный день`);

// START
jQuery('.btn_start').on('click', function(event) {
  checkPoints();
  // if(pointsStatus == false){
  //   swal("Не все зоны перенесены", "Перед началом процедуры необходимо перенести на фото все зоны", "info");
  //   pointsStatus = true;
  // } else {
    jQuery('.header-title').text('Программа выполняется');
    jQuery('.zone').css('background', 'rgba(83,35,69, 0.4)');
    jQuery('.btn-to_protocols').addClass('hidden');
    jQuery('.zone_x').css('background', '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat');
    jQuery('.zone_l').css('background', '#fff url(/wp-content/themes/mobile/img/x.png) 0 0/100% no-repeat');
    jQuery('.zone_x, .zone_l').css('transform', 'rotate(-90deg) scale(1.3)').removeClass('hidden');
    jQuery('.btn-to_endNow').removeClass('hidden');
    if (jQuery(this).attr('disabled')) {

    } else if (pausedStatus == true) {
      jQuery('.status').removeClass('hidden');
      jQuery('.status_pahaze_all').text(localStorage.getItem('pausedPhases'));
      jQuery('.status_title').text(localStorage.getItem('pausedProtName'));
      jQuery('.loaded_img').attr('src', localStorage.getItem('pausedPhoto'));
      console.log(localStorage.getItem('pausedPhoto'));
      protocolfromMemory = eval(localStorage.getItem('paused'))
      protocolfromMemory();
      pausedStatus = false;
      jQuery('.btn-to_endNow').css('color', '#fff');
    } else {
      protocol = localStorage.getItem('protocol');
      jQuery('.btn-to_endNow').removeClass('hidden');
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
      } else if (protocol == 'karma') {
        karma();
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
          moon_1();
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
        jQuery('.status_title').text('Протокол лунного дня');
      }
      jQuery('.header-title').text('Программа выполняется');
      jQuery('.btn_start').attr('disabled', 'disabled');
    }
  // }
});
// STOP
function hideNote() {
  jQuery('.btn-to_endNow').popover('hide');
}

jQuery('.btn-to_endNow').on('click', function(event) {
  jQuery('.btn-to_endNow').css('color', 'crimson');
  jQuery('.header-title').text('Программа останавливается');
  // endStatus = true;
  jQuery('.btn-to_endNow').popover('show');
  setTimeout(hideNote, 5000);
  localStorage.setItem('pausedPhoto', jQuery('.loaded_img').attr('src'));
  pausedStatus = true;
  console.log('pausedStatus = true');
});
