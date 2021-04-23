            <div class="col col-md-2 col-lg-3 col-xl-3"></div>
          </div>
          <?php if(is_user_logged_in()) { ?>
          <div id="menu" class="row hidden">
            <ul class="main_menu">
              <li>
                <a href="/" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-user-plus"></i></span>В начало
                </a>
              </li>
              <li>
                <a href="/kabinet" class="row align-items-center user_avatar">
                  <span class="menu_item_img"><?php echo get_avatar( $user_ID, 40 ); ?></span>Личный кабинет
                </a>
              </li>
              <?php if(current_user_can('administrator')) { ?>
              <li>
                <a href="/wp-admin" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-screwdriver"></i></span>Панель
                </a>
              </li>
              <?php } ?>
              <li style="padding-left: 16px;text-align: center;background: #795371;height: 60px;position: relative;">
              <span class="menu_item_img" style="position: absolute;left: 35px;"><i class="fas fa-sync"></i></span>
                <?php echo do_shortcode( '[theme_switcha_select text="Выберите версию"]' ); ?>
              </li>
              <li>
                <a href="<?php echo home_url(); ?>/wp-login.php?action=logout&amp;_wpnonce=a6cad512ba" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-sign-out-alt"></i></span>Выход
                </a>
              </li>
            </ul>
            <div class="credits">
              <div class="credits_heading">Юрий Чикуров</div>
              <div><a href="https://chikurov.com" target="_blank" class="btn btn-outline-info btn-lg">www.chikurov.com</a></div>
              <div>Все права защищены</div>
            </div>
          </div>
          <?php } ?>
        </div>
      </div>
    </div>
<?php wp_footer(); ?>
    <script src="<?php echo get_template_directory_uri(); ?>/fonts/js/all.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/superslide-std.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.Jcrop.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/exif.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/canvas.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-ui.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.ui.touch-punch.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/popper.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/sweet-alert.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/protocols.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
    <div class="modal" id="zones_template" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Система DSV</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src="<?php echo get_template_directory_uri(); ?>/img/zones.png" alt="zones">
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
