<!DOCTYPE html>
<html lang="ru-RU">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/img/fav180.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/img/fav32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/img/fav16.png">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico">
    <title>WizardMachine(Mobile)</title>
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/jquery.Jcrop.min.css" type="text/css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/sweet-alert.css" type="text/css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css" type="text/css">
  </head>
  <body>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col wrapper">
          <div class="header master_header row align-items-center">
            <div class="col-4" style="padding: 0;">
              <?php if(is_user_logged_in()) { ?>
                <button type="button" class="btn btn-lg btn-link side_menu"><i class="fas fa-bars"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-to_img hidden"><i class="far fa-arrow-alt-circle-left"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-to_mode hidden"><i class="far fa-arrow-alt-circle-left"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-to_protocols hidden"><i class="far fa-arrow-alt-circle-left"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-paused hidden"><i class="far fa-pause-circle"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-played hidden"><i class="far fa-play-circle"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-to_manual hidden"><i class="far fa-arrow-alt-circle-left"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-to_endNow hidden" data-toggle="popover" data-placement="bottom" title="Протокол остановлен!" data-content="Выполнение протокола будет приостановлено по окончании текущей фазы. Все данные будут сохранены"><i class="far fa-stop-circle"></i></button>
              <?php } ?>
            </div>
            <div class="col-4 header-title">
              <?php if(is_user_logged_in()) { ?>
                <?php if(current_user_can('contributor') || current_user_can('administrator')) { ?>
                  Загрузите фото
                <?php } else { ?>
                  Приветствуем в "WizardMachine"
                <?php } ?>
              <?php } else { ?>
                Вход
              <?php } ?>
              
            </div>
            <div class="col-4" style="text-align: right; padding: 0;">
              <button type="button" class="btn btn-lg btn-link justify-content-end btn_crop hidden">
                <i class="fas fa-crop-alt"></i>
              </button>
              <button type="button" data-toggle="modal" data-target="#zones_template" class="btn btn-lg btn-link btn_man_with_zones hidden justify-content-end">
                <i class="fas fa-diagnoses"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link btn_start hidden justify-content-end">
                <i class="fab fa-react"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link clear_graph hidden justify-content-end">
                <i class="fas fa-broom"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link btn_protocols hidden justify-content-end">
                <i class="far fa-check-square"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link btn_return hidden justify-content-end">
                <i class="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
          <div id="content" class="content row">
            <div class="col col-md-2 col-lg-3 col-xl-3"></div>
