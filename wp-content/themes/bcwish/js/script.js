jQuery(function() {
  var croppedImg,
      w_block_wrap,
      device_w = screen.width,
      testing_val,
      testing_sum = {},
      testing_sum_size,
      testing,
      testing_result,
      testing_status = 2,
      testing_result_title,
      mode = 'foto',
      returned_img,
      nextSound = new Howl({
          urls: ['/sounds/Cancel_2.mp3'],
          autoplay: false,
          loop: false,
          buffer: true
      }),
      prevSound = new Howl({
          urls: ['/sounds/button.mp3'],
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
  jQuery('.toLogin').on('click', function(event) {
    jQuery('.register_form').addClass('hidden').removeClass('bounceInUp');
    jQuery('.login_form').removeClass('hidden').addClass('bounceInUp');
  });
  jQuery('.toRegistration').on('click', function(event) {
    jQuery('.login_form').addClass('hidden').removeClass('bounceInUp');
    jQuery('.register_form').removeClass('hidden').addClass('bounceInUp');
  });

  // Контроль ширины экрана
  console.log(device_w);
  jQuery('.w_width').text(device_w);
  if (device_w < 600) {
    jQuery('#w_error').modal('show');
  }
  w_block_wrap = jQuery('.arrow_in_popup').css('height');
  jQuery('.screen_value').css('lineHeight', w_block_wrap);



  jQuery('.btn-get-started').on('click', function(event) {
    localStorage.removeItem('paused');
    localStorage.removeItem('pausedPhoto'); 
    pausedStatus = false;
    console.log('pausedStatus = false');
  });

//Скрываем возможно загруженное изображение
  jQuery('.wizard_returned').find('img:first-child').addClass('returned hidden');
  croppedImg = jQuery('.wizard_returned').children()[0];

  mode = localStorage.getItem('mode');
  console.log(mode);

// Если фото уже загружено
  if (croppedImg && croppedImg.hasAttribute('src')) {
    if (mode == 'foto') {
      jQuery('.machine_screen, #intro').addClass('hidden');
      jQuery('.wizard_way').removeClass('hidden');
      jQuery('.wizard_returned').attr('src', croppedImg.src);
      jQuery('.wizard_heading').text('Провести диагностику, тестирование или перейти к выбору протокола?');
      jQuery('.wizard_to_start').fadeIn(500).removeClass('hidden');
      jQuery('.wm_start').removeClass('unopacity');
      jQuery('.wm_start').removeAttr('style');
    } else {
      jQuery('.machine_screen, #intro').addClass('hidden');
      jQuery('.wizard_estate').removeClass('hidden');
      jQuery('.wizard_returned_estate').attr('src', croppedImg.src);
      jQuery('.wizard_heading').text('Отметьте специальной точкой центр помещения, за тем - точки входа электричества и скопления розеток, двери, сан узлы и внутренние углы.');
      jQuery('.wizard_to_start').fadeIn(500).removeClass('hidden');
      jQuery('.wm_start').removeClass('unopacity');
      jQuery('.wm_start').removeAttr('style');
    }
  }

// Вторая кнопка обрезки
  jQuery('.wizard_crop').on('click', function(event) {
    jQuery('.crop_photo').click();
  });

  jQuery('.photo_upload').on('click', function(event) {
    jQuery('.template_load').addClass('hidden');
  });


  // НАЧАТЬ
  jQuery('.wm_init').on('click', function(event) {
    jQuery('.wm_start').removeClass('unopacity');
    jQuery('.wizard_heading').text('Загрузите фото в полный рост по аналогии с примером ниже и отредактируйте его');
    localStorage.setItem('mode', 'foto');
    jQuery('.template_load_human').removeClass('hidden');
    jQuery('.template_load_estate').addClass('hidden');
    mode = 'foto';
    nextSound.play();
  });

  jQuery('.wm_init_estate').on('click', function(event) {
    nextSound.play();
    swal({
      title: "Перед началом чистки помещения необходимо проработать владельца.",
      text: 'для этого нажмите "Загрузить фото", или "Продолжить", если это уже сделано.',
      type: "info",
      showCancelButton: true,
      confirmButtonClass: "btn-success",
      cancelButtonClass: "btn-warning",
      cancelButtonText: "Загрузить фото",
      confirmButtonText: "Продолжить",
      closeOnConfirm: false
    },
    function(isConfirm) {
      if (isConfirm) {
        swal.close();
        setTimeout(function(){
          const el = document.getElementById('services');
          el.scrollIntoView();
        },100);
      } else {
        jQuery('.wm_start').removeClass('unopacity');
        jQuery('.wizard_heading').text('Загрузите фото в полный рост по аналогии с примером ниже и отредактируйте его');
        localStorage.setItem('mode', 'foto');
        jQuery('.template_load_human').removeClass('hidden');
        jQuery('.template_load_estate').addClass('hidden');
        mode = 'foto';
        nextSound.play();
        setTimeout(function(){
          const el = document.getElementById('services');
          el.scrollIntoView();
        },100);
      }
    });
    jQuery('.wm_start').removeClass('unopacity');
    localStorage.setItem('mode', 'estate');
    jQuery('.template_load_human').addClass('hidden');
    jQuery('.template_load_estate').removeClass('hidden');
    jQuery('.wizard_heading').text('Загрузите план помещения или рисунок по аналогии с примером.');
    mode = 'estate';
  });

  jQuery('.mobile-nav-toggle, .mobile-nav a, .photo_upload, .crop_photo, .btn_diag, .btn_prot_choice, .btn_test, .btn_test_fromDiag, .wizard_clean_graf, .btn_prot_choice_fromDiag, #faq-list li a, .wizard_protocol, .wizard_play, .wizard_starter_alt, .wizard_stop, body .cancel, body .confirm, .wizard_continue, .mobile-nav select, .wpcf7-submit, .btn-get-started').on('click', function(event) {
    nextSound.play();
  });
  jQuery('.wizard_to_protList, .wizard_to_what_way, .wizard_to_start').on('click', function(event) {
    prevSound.play();
  });


  // К протоколам
  jQuery('.btn_prot_choice').on('click', function(event) {
    jQuery('.wizard_way, .wizard_test').addClass('hidden');
    jQuery('.wizard_to_start').addClass('hidden');
    jQuery('.wizard_to_what_way').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_prots').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_heading').text('Выберите протокол');
  });
  // К протоколам с ножа
  jQuery('.btn_prot_choice_fromDiag').on('click', function(event) {
    jQuery('.wizard_diag, .wizard_test').addClass('hidden');
    jQuery('.wizard_to_what_way, .wizard_clean_graf').addClass('hidden');
    jQuery('.wizard_to_protDiag').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_prots').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_heading').text('Выберите протокол');
  });
  // К выполнению протокола с Р 300
  jQuery('.btn_test_accept').on('click', function(event) {
    cur_protocol = jQuery(this).data('protocol');
    cur_protocol_name = jQuery(this).data('protocol_name');
    localStorage.setItem('protocol', cur_protocol);
    localStorage.setItem('protocolName', cur_protocol_name);
    jQuery('.wizard_diag, .wizard_test').addClass('hidden');
    jQuery('.wizard_to_what_way, .wizard_clean_graf').addClass('hidden');
    jQuery('.wizard_to_protDiag').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_main_screen').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.wizard_heading').text('Осталось перенести зоны на фото и можно начинать!');
    


  });
  // К диагностике
  jQuery('.btn_diag').on('click', function(event) {
    jQuery('.wizard_way, .wizard_test').addClass('hidden');
    jQuery('.wizard_to_start').addClass('hidden');
    jQuery('.wizard_to_what_way').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_diag').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.wizard_heading').text('Определите актуальную зону.');
  });
  // К тестированию
  jQuery('.btn_test').on('click', function(event) {
    jQuery('.wizard_way').addClass('hidden');
    jQuery('.wizard_to_start').addClass('hidden');
    jQuery('.wizard_to_what_way').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_test').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.wizard_heading').text('Тестирование поможет выбрать протокол.');
    jQuery('.test_level_2, .test_level_3, .test_level_4').addClass('hidden');
    jQuery('.test_level_1').fadeIn(500).removeClass('hidden');
    jQuery('.test_heading_2').text('Кого лечим?');
    jQuery('.test_item').removeClass('btn-warning').addClass('btn-primary');
    testing_sum = {};
    testing_status = 2;
    jQuery('.test_item_1_1_19').removeClass('hidden');
  });

  //Назад. К выбору режимов
  jQuery('.wizard_to_what_way').on('click', function(event) {
    jQuery('.wizard_prots, .wizard_diag, .wizard_test').addClass('hidden');
    jQuery('.wizard_to_what_way, .wizard_clean_graf').addClass('hidden');
    jQuery('.wizard_to_start').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_way').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_heading').text('Провести диагностику, тестирование или перейти к выбору протокола?');
  });

  //Назад. К выбору режимов
  jQuery('.wizard_back_to_test').on('click', function(event) {
    jQuery('.wizard_prots, .wizard_diag').addClass('hidden');
    jQuery('.wizard_back_to_test').addClass('hidden');
    jQuery('.wizard_to_what_way').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_test').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_heading').text('Тестирование поможет выбрать протокол');
    jQuery('.test_level_2, .test_level_3, .test_level_4').addClass('hidden');
    jQuery('.test_level_1').fadeIn(500).removeClass('hidden');
    jQuery('.test_heading_2').text('Кого лечим?');
    jQuery('.test_item').removeClass('btn-warning').addClass('btn-primary');
    testing_sum = {};
    testing_status = 2;
    jQuery('.test_item_1_1_19').removeClass('hidden');
  });
  //Назад. К диагностике
  jQuery('.wizard_to_protDiag, .diag_btn_alt').on('click', function(event) {
    jQuery('.wizard_prots, .wizard_test, .wizard_main_screen').addClass('hidden');
    jQuery('.wizard_to_protDiag').addClass('hidden');
    if (jQuery('.wizard_diag').hasClass('testing_g') && jQuery('.knife_rate').length) {
      jQuery('.wizard_clean_graf').fadeIn(500).removeClass('hidden');
    }
    jQuery('.wizard_to_what_way').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_diag').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.wizard_heading').text('Определите актуальную зону.');
  });
  //Назад. К тестированию
  jQuery('.wizard_to_test, .test_btn_alt').on('click', function(event) {
    jQuery('.wizard_prots').addClass('hidden');
    jQuery('.wizard_to_test').addClass('hidden');
    jQuery('.wizard_to_what_way').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_test').fadeIn(500).removeClass('hidden').css('display', 'flex');
    jQuery('.wizard_heading').text('Тестирование поможет выбрать протокол');
    jQuery('.test_level_2, .test_level_3, .test_level_4').addClass('hidden');
    jQuery('.test_level_1').fadeIn(500).removeClass('hidden');
    jQuery('.test_heading_2').text('Кого лечим?');
    jQuery('.test_item').removeClass('btn-warning').addClass('btn-primary');
    testing_sum = {};
    testing_status = 2;
    jQuery('.test_item_1_1_19').removeClass('hidden');
  });
  // К тестированию с ножа
  jQuery('.test_btn_fromDiag').on('click', function(event) {
    jQuery('.wizard_diag').addClass('hidden');
    jQuery('.wizard_to_what_way, .wizard_clean_graf').addClass('hidden');
    jQuery('.wizard_to_protDiag').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_test').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_heading').text('Кого лечим?');
  });

   //Назад. К списку протоколов
  jQuery('.wizard_to_protList').on('click', function(event) {
    if (jQuery(this).hasClass('prot_in_progress')) {

    } else {
      jQuery('.wizard_main_screen').addClass('hidden');
      jQuery('.wizard_to_protList, .wizard_play, .wizard_starter_alt').addClass('hidden');
      jQuery('.wizard_prots').fadeIn(500).removeClass('hidden');
      jQuery('.wizard_operation').fadeIn(500).removeClass('hidden');
      jQuery('.wizard_heading').text('Выберите протокол');
    }
  });

  jQuery('.wizard_clean_graf').on('click', function(event) {
    jQuery('.knife_rate').detach();
    jQuery(this).addClass('hidden');
    jQuery('.marakata').css('top', '0');
  });


  jQuery('.zone_estate').draggable({
    containment: '#main',
    drag: function() {
      jQuery(this).removeClass('zone_default');
    }
  });


// Сброс зон на плане
  jQuery('.zone_estate').on('dblclick', function(event) {
    jQuery(this).addClass('zone_default').removeAttr('style');
  });
  jQuery('.zone_estate').on('doubletap', function(event) {
    jQuery(this).addClass('zone_default').removeAttr('style');
  });

  jQuery('.estate_clean').on('click', function(event) {
    jQuery('.zone_estate').addClass('zone_default').removeAttr('style');
  });

  // Алгоритм тестирования

  jQuery('.btn_test__other').on('click', function(event) {
    swal({
      title: "Работа с другим человеком.",
      text: 'При работе другими с людьми мы советуем определять актуальность ножом или из описанных ими жалоб.',
      type: "info",
      showCancelButton: true,
      confirmButtonClass: "btn-success",
      cancelButtonClass: "btn-warning",
      cancelButtonText: "Назад",
      confirmButtonText: "Определить актуальность",
      closeOnConfirm: true
    },
    function(isConfirm) {
      if (isConfirm) {
        swal.close();
        jQuery('.wizard_test').addClass('hidden');
        jQuery('.wizard_to_what_way, .wizard_clean_graf').addClass('hidden');
        jQuery('.wizard_back_to_test').fadeIn(500).removeClass('hidden');
        jQuery('.wizard_diag').fadeIn(500).removeClass('hidden').css('display', 'flex');
        jQuery('.wizard_heading').text('Определите актуальную зону');
      } else {
        swal.close();
      }
    });
  });

  jQuery('.btn_test__self').on('click', function(event) {
    jQuery('.test_level_1').addClass('hidden');
    jQuery('.test_level_2').fadeIn(500).removeClass('hidden');
    jQuery('.test_heading_2').text('Выберите для подродлжения.');
  });

  jQuery('.btn_test__to_prot').on('click', function(event) {
    jQuery('.wizard_test').addClass('hidden');
    jQuery('.wizard_to_what_way').addClass('hidden');
    jQuery('.wizard_back_to_test').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_prots').fadeIn(500).removeClass('hidden');
    jQuery('.wizard_heading').text('Выберите протокол');
  });

  jQuery('.btn_test__to_list').on('click', function(event) {
    jQuery('.test_level_2').addClass('hidden');
    jQuery('.test_level_3').fadeIn(500).removeClass('hidden');
    jQuery('.test_heading_2').text('Выберите из списка проблемы описывающие Ваше текущее состояние. Можно несколько.');
  });

// testing

testing = function(){
  if (testing_sum_size >= 6 || "1_1_19" in testing_sum) {
    testing_result = 'universal';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Универсальный протокол"';
    testing_status = 1;
  } else if (testing_sum_size < 6 && "1_1_10" in testing_sum) {
    testing_result = 'v3';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Протокол V3"';
    testing_status = 1;
  } else if ("1_1_11" in testing_sum && "1_1_15" in testing_sum) {
    testing_result = 'visceral';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Висцеральный протокол"';
    testing_status = 1;
  } else if ("1_1_2" in testing_sum && "1_1_3" in testing_sum) {
    testing_result = 'v1';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Протокол V1"';
    testing_status = 1;
  } else if ("1_1_14" in testing_sum && "1_1_16" in testing_sum) {
    testing_result = 'drenag';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Дренажный протокол"';
    testing_status = 1;
  } else if ("1_1_7" in testing_sum) {
    testing_result = 'v2';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Протокол V2"';
    testing_status = 1;
  } else if ("1_1_17" in testing_sum) {
    testing_result = 'v5';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Протокол V5"';
    testing_status = 1;
  } else if ("1_1_18" in testing_sum) {
    testing_result = 'solis';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Протокол Solis"';
    testing_status = 1;
  } else if ("1_1_4" in testing_sum) {
    testing_result = 'v4';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Протокол V4"';
    testing_status = 1;
  } else if ("1_1_14" in testing_sum) {
    testing_result = 'carma';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Кармический протокол"';
    testing_status = 1;
  } else {
    testing_status = 2;
  }
  if (testing_status == 1) {
    swal({
      title: testing_result_title,
      text: 'Для запуска протокола нажмите "Применить". Для повтора тестирования нажмите "Назад".',
      type: "success",
      showCancelButton: true,
      confirmButtonClass: "btn-success",
      cancelButtonClass: "btn-warning",
      cancelButtonText: "Назад",
      confirmButtonText: "Применить",
      closeOnConfirm: true
    },
    function(isConfirm) {
      if (isConfirm) {
        swal.close();
        jQuery('.wizard_test').addClass('hidden');
        jQuery('.wizard_to_what_way').addClass('hidden');
        jQuery('.wizard_back_to_test, .wizard_play, .wizard_starter_alt').fadeIn(500).removeClass('hidden');
        jQuery('.wizard_main_screen').fadeIn(500).removeClass('hidden').css('display', 'flex');
        jQuery('.wizard_heading').text('Осталось перенести зоны на фото и можно начинать!');
      } else {
        swal.close();
      }
    });
  } else {
      swal("Недостаточно данных", "Для определения протокола нужно выбрать больше пунктов из списка", "info");
      alert_altSound.play();
      pointsStatus = true;
  }
}

jQuery('.test_item').on('click', function(event) {
  if (!jQuery(this).hasClass('test_item_1_1_19')) {
    jQuery('.test_item_1_1_19').addClass('hidden');
  } else if (jQuery('.test_item_1_1_19').hasClass('btn-warning')) {
    jQuery('.test_item_1_1_19').removeClass('btn-warning');
    delete testing_sum['1_1_19'];
  } else {
    testing_status = 1;
    testing_result = 'universal';
    localStorage.setItem('cur_protocol', testing_result);
    testing_result_title = 'Рекомендуется "Универсальный протокол"';
    swal({
      title: testing_result_title,
      text: 'Для запуска протокола нажмите "Применить". Для повтора тестирования нажмите "Назад".',
      type: "success",
      showCancelButton: true,
      confirmButtonClass: "btn-success",
      cancelButtonClass: "btn-warning",
      cancelButtonText: "Назад",
      confirmButtonText: "Применить",
      closeOnConfirm: true
    },
    function(isConfirm) {
      if (isConfirm) {
        swal.close();
        jQuery('.wizard_test').addClass('hidden');
        jQuery('.wizard_to_what_way').addClass('hidden');
        jQuery('.wizard_back_to_test, .wizard_play, .wizard_starter_alt').fadeIn(500).removeClass('hidden');
        jQuery('.wizard_main_screen').fadeIn(500).removeClass('hidden').css('display', 'flex');
        jQuery('.wizard_heading').text('Осталось перенести зоны на фото и можно начинать!');
      } else {
        swal.close();
      }
    });
  }
  testing_val = jQuery(this).data('index');
  if (jQuery(this).hasClass('btn-warning')) {
    jQuery(this).removeClass('btn-warning').addClass('btn-primary');
    delete testing_sum[testing_val];
  } else {
    jQuery(this).addClass('btn-warning').removeClass('btn-primary');
    testing_sum[testing_val] = testing_val;
  }
  console.log(testing_sum);
  testing_sum_size = Object.keys(testing_sum).length;
  console.log(testing_sum_size);
  if (testing_sum_size >= 1) {
    jQuery('.test_level_4').fadeIn(500).removeClass('hidden');
  } else {
    jQuery('.test_level_4').addClass('hidden');
    jQuery('.test_item_1_1_19').removeClass('hidden');
  }
});

jQuery('.btn_test__result').on('click', function(event) {
  testing();
});

jQuery('.btn_test__restart').on('click', function(event) {
  jQuery('.test_level_2, .test_level_3, .test_level_4').addClass('hidden');
  jQuery('.test_level_1').fadeIn(500).removeClass('hidden');
  jQuery('.test_heading_2').text('Кого лечим?');
  jQuery('.test_item').removeClass('btn-warning').addClass('btn-primary');
  testing_sum = {};
  testing_status = 2;
  jQuery('.test_item_1_1_19').removeClass('hidden');
});
jQuery('.btn_test__reset').on('click', function(event) {
  jQuery('.test_level_4').addClass('hidden');
  jQuery('.test_item').removeClass('btn-warning').addClass('btn-primary');
  testing_sum = {};
  testing_status = 2;
  jQuery('.test_item_1_1_19').removeClass('hidden');
});


//CROPPING SCRIPT
  // convert bytes into friendly format
  function bytesToSize(bytes) {
      var sizes = ['Bytes', 'KB', 'MB'];
      if (bytes == 0) return 'n/a';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
  };

  // check for selected crop region
  function checkForm() {
      if (parseInt(jQuery('#w').val())) return true;
      jQuery('.error').html('Пожалуйста выделите область').show();
      return false;
  };

  // update info by cropping (onChange and onSelect events handler)
  function updateInfo(e) {
      jQuery('#x1').val(e.x);
      jQuery('#y1').val(e.y);
      jQuery('#x2').val(e.x2);
      jQuery('#y2').val(e.y2);
      jQuery('#w').val(e.w);
      jQuery('#h').val(e.h);
  };

  // clear info by cropping (onRelease event handler)
  function clearInfo() {
      jQuery('.info #w').val('');
      jQuery('.info #h').val('');
  };

  // Create variables (in this scope) to hold the Jcrop API and image size
  var jcrop_api, boundx, boundy;

  function fileSelectHandler() {

      // get selected file
      var oFile = jQuery('#image_file')[0].files[0];
      // console.log(oFile);
      // hide all errors
      jQuery('.error').hide();

      // check for image type (jpg and png are allowed)
      var rFilter = /^(image\/jpeg|image\/png)$/i;
      if (! rFilter.test(oFile.type)) {
          jQuery('.error').html('Доспустимы изображения только в формате ".jpg" и ".png"').show();
          return;
      }

      // check for file size
      if (oFile.size > 15 * 1024 * 1024) {
          jQuery('.error').html('Вы выбрали слишком большой файл, пожалуйста выберите изображение меньшего размера.').show();
          return;
      }

      // preview element
      var oImage = document.getElementById('preview');

      // prepare HTML5 FileReader
      var oReader = new FileReader();

      oReader.onload = function(e) {

          EXIF.getData(oFile, function(){

              var ort = this.exifdata.Orientation;

              // e.target.result contains the DataURL which we can use as a source of the image
              oImage.src = e.target.result;
              oImage.onload = function () {

                  var rotateImg = function(rad, rotateCanvas, cx, cy){
                      var canvas = document.createElement('canvas'),
//                        var canvas = document.getElementById('preview-canvas'),
                          ctx = canvas.getContext('2d');

                      if(rotateCanvas){
                          canvas.setAttribute('width', oImage.naturalHeight);
                          canvas.setAttribute('height', oImage.naturalWidth);
                      }else{
                          canvas.setAttribute('width', oImage.naturalWidth);
                          canvas.setAttribute('height', oImage.naturalHeight);
                      }

                      ctx.rotate(rad);
                      ctx.drawImage(oImage, cx, cy);

                      ort = 1;

                      oImage.src = canvas.toDataURL("image/png");
                  };

                  switch(ort){
                     case 6:
                         // rotateImg(90 * Math.PI / 180, true, 0, oImage.naturalHeight * -1);
                         break;
                     case 3:
                         rotateImg(180 * Math.PI / 180, false, oImage.naturalWidth * -1, oImage.naturalHeight * -1);
                         break;
                     case 8:
                         rotateImg(-90 * Math.PI / 180, true, oImage.naturalWidth * -1, 0);
                         break;
                  }


                  // display step 2
                  jQuery('.step2').fadeIn(500);
                  jQuery('.wm_start').removeAttr('style');
                  jQuery('.wizard_crop').fadeIn(500);
                  jQuery('.wizard_crop').removeClass('hidden');
                  // display some basic image info
                  var sResultFileSize = bytesToSize(oFile.size);
                  jQuery('#filesize').val(sResultFileSize);
                  jQuery('#filetype').val(oFile.type);
                  jQuery('#filedim').val(oImage.naturalWidth + ' x ' + oImage.naturalHeight);

                  // destroy Jcrop if it is existed
                  if (typeof jcrop_api != 'undefined') {
                      jcrop_api.destroy();
                      jcrop_api = null;
                      jQuery('#preview').width(oImage.naturalWidth);
                      jQuery('#preview').height(oImage.naturalHeight);
                  }

                  if (mode == 'foto') {
                    setTimeout(function(){
                        // initialize Jcrop
                        console.log(jQuery('.step2').width());
                        jQuery('#preview').Jcrop({
                            minSize: [32, 32],// keep aspect ratio 1:1
                            bgFade: true, // use fade effect
                            bgOpacity: .3, // fade opacity
                            aspectRatio: 1/1.5,
                            boxWidth: jQuery('.step2').width(),
                            onChange: updateInfo,
                            onSelect: updateInfo,
                            onRelease: clearInfo
                        }, function(){

                            // use the Jcrop API to get the real image size
                            var bounds = this.getBounds();
                            boundx = bounds[0];
                            boundy = bounds[1];

                            // Store the Jcrop API in the jcrop_api variable
                            jcrop_api = this;
                        });
                    },3000);
                  } else {
                    setTimeout(function(){
                        // initialize Jcrop
                        console.log(jQuery('.step2').width());
                        jQuery('#preview').Jcrop({
                            minSize: [32, 32],// keep aspect ratio 1:1
                            bgFade: true, // use fade effect
                            bgOpacity: .3, // fade opacity
                            boxWidth: jQuery('.step2').width(),
                            onChange: updateInfo,
                            onSelect: updateInfo,
                            onRelease: clearInfo
                        }, function(){

                            // use the Jcrop API to get the real image size
                            var bounds = this.getBounds();
                            boundx = bounds[0];
                            boundy = bounds[1];

                            // Store the Jcrop API in the jcrop_api variable
                            jcrop_api = this;
                        });
                    },3000);
                  }
              };
          });
      };

      // read selected file as DataURL
      oReader.readAsDataURL(oFile);
  }
  jQuery('#image_file').on('change', fileSelectHandler);

  // zone testing
  const zone_testing = document.querySelectorAll('.zone-testing_item');
  let zones_time = [0,0,0,0,0,0,0]
  let zone_time_start = 0;
  let zone_time_end = 0;
  let max_val = 0;
  let max_zone = 0;
  const zone_recommend = document.querySelector('.zone_recommend_text');
  let zoneTimeDiff = function(){
    return zone_time_end - zone_time_start;
  }
  let zones_satus = function (){
    if (document.querySelectorAll('.zone-testing_item__check').length <= 0) {
      max_val = Math.max.apply(null, zones_time);
      max_zone = zones_time.indexOf(max_val);
      console.log(zones_time);
      console.log('elems not exist ' + ' max position '+ max_zone);
      if (max_zone === 0) {
        zone_recommend.innerHTML = 'Рекомендуется протокол V1';
        document.querySelector('.btn_test_accept').dataset.protocol = 'v1';
        document.querySelector('.btn_test_accept').dataset.protocol_name = 'V1';
      } else if (max_zone === 1) {
        zone_recommend.innerHTML = 'Рекомендуется протокол V2-V5';
        document.querySelector('.btn_test_accept').dataset.protocol = 'v2';
        document.querySelector('.btn_test_accept').dataset.protocol_name = 'V2-V5';
      } else if (max_zone === 2) {
        zone_recommend.innerHTML = 'Рекомендуется протокол V3-V4';
        document.querySelector('.btn_test_accept').dataset.protocol = 'v3';
        document.querySelector('.btn_test_accept').dataset.protocol_name = 'V3-V4';
      } else if (max_zone === 3) {
        zone_recommend.innerHTML = 'Рекомендуется протокол V4-V3';
        document.querySelector('.btn_test_accept').dataset.protocol = 'v4';
        document.querySelector('.btn_test_accept').dataset.protocol_name = 'V4-V3';
      } else if (max_zone === 4) {
        zone_recommend.innerHTML = 'Рекомендуется протокол V5-V2';
        document.querySelector('.btn_test_accept').dataset.protocol = 'v5';
        document.querySelector('.btn_test_accept').dataset.protocol_name = 'V5-V2';
      } else if (max_zone === 5) {
        zone_recommend.innerHTML = 'Рекомендуется протокол V5-V2';
        document.querySelector('.btn_test_accept').dataset.protocol = 'v5';
        document.querySelector('.btn_test_accept').dataset.protocol_name = 'V5-V2';
      } else if (max_zone === 6) {
        zone_recommend.innerHTML = 'Рекомендуется протокол V5-V2';
        document.querySelector('.btn_test_accept').dataset.protocol = 'v5';
        document.querySelector('.btn_test_accept').dataset.protocol_name = 'V5-V2';
      }
      document.querySelector('.zone_recommend').classList.remove('hidden');
      max_val = 0;
      max_zone = 0;
      zone_time_start = 0;
      zone_time_end = 0;
    }
  }


  document.querySelector('.testing_mode_item_p').onclick = function(){
    document.querySelector('.testing_mode_item_p').classList.add('active');
    document.querySelector('.wizard_grafic_photo').classList.remove('col-sm-6');
    document.querySelector('.wizard_grafic_photo').classList.add('col-sm-12');
    document.querySelector('.wizard_diag').classList.remove('testing_g');
    document.querySelector('.wizard_diag').classList.add('testing_p');
    document.querySelector('.testing_mode_item_g').classList.remove('active');
  }
  document.querySelector('.testing_mode_item_g').onclick = function(){
    if (jQuery('.knife_rate').length) {
      jQuery('.wizard_clean_graf').fadeIn(500).removeClass('hidden');
    }
    document.querySelector('.testing_mode_item_g').classList.add('active');
    document.querySelector('.wizard_grafic_photo').classList.add('col-sm-6');
    document.querySelector('.wizard_grafic_photo').classList.remove('col-sm-12');
    document.querySelector('.wizard_diag').classList.remove('testing_p');
    document.querySelector('.wizard_diag').classList.add('testing_g');
    document.querySelector('.testing_mode_item_p').classList.remove('active');
  }


  for (var i = 0; i < zone_testing.length; i++) {
    zone_testing[i].onmousedown = function(){
      if (event.target.classList.contains('zone-testing_item__check')) {
        zone_time_start = new Date();
      }
    };
    zone_testing[i].onmouseup = function(){
      if (event.target.classList.contains('zone-testing_item__check')) {
        zone_time_end = new Date();
        if (event.target.classList.contains('zone-testing_item_1')) {
          zones_time[0] = zoneTimeDiff()
        } else if (event.target.classList.contains('zone-testing_item_2')) {
          zones_time[1] = zoneTimeDiff()
        } else if (event.target.classList.contains('zone-testing_item_3')) {
          zones_time[2] = zoneTimeDiff()
        } else if (event.target.classList.contains('zone-testing_item_4')) {
          zones_time[3] = zoneTimeDiff()
        } else if (event.target.classList.contains('zone-testing_item_5')) {
          zones_time[4] = zoneTimeDiff()
        } else if (event.target.classList.contains('zone-testing_item_6')) {
          zones_time[5] = zoneTimeDiff()
        } else if (event.target.classList.contains('zone-testing_item_7')) {
          zones_time[6] = zoneTimeDiff()
        }
        event.target.classList.remove('zone-testing_item__check');
        zones_satus();
      }
    };
  }

  document.querySelector('.zones_reset').onclick = function(){
    zones_time = [0,0,0,0,0,0,0];
    document.querySelector('.zone_recommend').classList.add('hidden');
    zone_recommend.innerHTML = '';
    for (var i = 0; i < zone_testing.length; i++) {
      zone_testing[i].classList.add('zone-testing_item__check');
    }
  }
});
