<?php get_header(); ?>
<?php if(is_page(183)) { ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<div class="col col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 protocols">
		<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">

			<section class="entry-content cf">
				<?php the_content(); ?>
			</section>

		</article>
	</div>

	<?php endwhile; ?>

	<?php else : ?>

			<article id="post-not-found" class="hentry cf">
					<header class="article-header">
						<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
				</header>
					<section class="entry-content">
						<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
				</section>
				<footer class="article-footer">
						<p><?php _e( 'This is the error message in the index.php template.', 'bonestheme' ); ?></p>
				</footer>
			</article>

	<?php endif; ?>
<?php } else { ?>
	<div class="col col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 protocols">
		<?php if(is_user_logged_in()){ ?>

			<?php
		    if($_POST['mci_magic']){
	        $sImage = uploadImageFile();
	        echo '<img class="cropped_img" src="'.$sImage.'" />';
		    }
			?>
			<?php if(current_user_can('contributor') || current_user_can('administrator')) { ?>
			<!-- load photo -->
			<div class="mobile_screen mobile_screen_load">
				<div class="row">
					<div class="col protocols_info text_center">
						<div class="current_protocol_img">
							<i class="fas fa-user-plus"></i>
						</div>
						<form id="upload_form" action="/wizard/" enctype="multipart/form-data" method="post"><!-- hidden crop params -->
						<input id="x1" name="mci_x1" type="hidden" />
						<input id="y1" name="mci_y1" type="hidden" />
						<input id="x2" name="mci_x2" type="hidden" />
						<input id="y2" name="mci_y2" type="hidden" />
						<!-- <h2>Выберите изображение</h2> -->
						<div>
							<input style="display: none;" id="image_file" class="btn btn-primary" name="mci_image_file" type="file" />
							<label class="btn btn-success photo_upload" for="image_file"><i class="fas fa-upload"></i> Выберите файл</label>
						</div>
						<div class="error"></div>
						<div class="step2">
						<h4>Выделите область для обрезки</h4>
						<img id="preview" alt="" />
						<!--<canvas id="preview-canvas" style="border: 3px red solid;/*position: absolute; visibility: hidden; /*left: -20000px*/"></canvas>-->
						<div class="info hidden"><label>Размер файла</label> <input id="filesize" name="mci_filesize" type="text" />
						<label>Тип</label> <input id="filetype" name="mci_filetype" type="text" />
						<label>Разрешение изображения</label> <input id="filedim" name="mci_filedim" type="text" />
						<label>Ширина</label> <input id="w" name="mci_w" type="text" />
						<label>Высота</label> <input id="h" name="mci_h" type="text" /></div>
						<input type="submit" class="crop_photo btn btn-primary" value="Редактировать фото" name="mci_magic" />
						</div>
						</form>
					</div>
				</div>
			</div>
			<!-- what way -->
			<div class="mobile_screen mobile_screen_what_way hidden">
				<div class="row protocols_info">
					<div class="col text_center">
						<div class="row">
							<div class="col-1 col-md-3 col-lg-1 text_center"></div>
							<div class="col-10 col-md-6 col-lg-4 text_center mode-item mode-item_protocol">
								<span class="mode-item_title">Выбор протокола</span>
								<div class="mode-item_img">
									<i class="far fa-check-square"></i>
								</div>
							</div>
							<div class="col-1 text_center"></div>
							<div class="col-1 col-md-3 col-lg-1 text_center"></div>
							<div class="col-10 col-md-6 col-lg-4 text_center mode-item mode-item_manual">
								<span class="mode-item_title">Ручная диагностика</span>
								<div class="mode-item_img">
									<i class="fas fa-fingerprint"></i>
								</div>
							</div>
							<div class="col-1 text_center"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- protocols -->
			<div class="mobile_screen mobile_screen_protocols hidden">
				<div class="row">
					<div class="col protocols_info text_center">
						<div class="current_protocol_img">
							<i class="fas fa-user-md"></i>
						</div>
						<h3 class="current_protocol_title">Выберите протокол</h3>
						<p class="current_protocol_content">Здесь появится его описание</p>
						<button class="btn hidden btn-success choice_protocol">Активировать <span class="current_protocol_title_2"></span></button>
					</div>
				</div>
				<div class="row">
			    <div data-protocol="v1" class="col protocols_item protocols_item_1 text_center">
			      <span class="protocols_item_title">V1</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-brain"></i>
			      </div>
			      <div class="protocols_item_content hidden">«Краниальный протокол» - применяем при флюэдической нагрузке головы, а также пространства над головой и под ногами. Терапия типичных последствий магии или несовсем экологичного занятия энергетическими практиками. Последствия посещения «мест силы» в экзотических странах, а также приема внутрь всяких психоактивных гадостей, будь то грибы или айаваска.</div>
			    </div>
			    <div data-protocol="v2" class="col protocols_item protocols_item_2 text_center">
			      <span class="protocols_item_title">V2—V5</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-users"></i>
			      </div>
			      <div class="protocols_item_content hidden">Коррекция ситуации «Горе от ума» с вторичным подавлением восходящего потока Ресурса жизненной Силы. Дилемм, проблем выбора цели или предметов. Вовлечения во что-либо и вожделения. Регулярных состояний недостижения результата, событийного вектора «Потеря», особенно повторяющихся по типу «дня сурка». Отсутствие поддержки Отца.</div>
			    </div>
			    <div data-protocol="v3" class="col protocols_item protocols_item_3 text_center">
			      <span class="protocols_item_title">V3—V4</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-tired"></i>
			      </div>
			      <div class="protocols_item_content hidden">Коррекция переживаний, основанных на неприятии себя, ощущении, что «живу не своей жизнью». Саморазрушительных тенденций, основанных на внешнем гиперконтроле Матери и подавлении, исходящем от нее.<br>Чувства непереносимости ситуации либо отношений. Несправедливости. Избыточного Действия по преодолению сложностей в делах.</div>
			    </div>
			  </div>
				<div class="row">
			    <div data-protocol="v4" class="col protocols_item protocols_item_4 text_center">
			      <span class="protocols_item_title">V4—V3</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-theater-masks"></i>
			      </div>
			      <div class="protocols_item_content hidden">Коррекция переживаний основанных на раздражительной злости, беспокойстве, тревожности, суеты, торопливости и заниженной самооценки. Негативных влияний сновидений и прочих насад на пуповину Рода. Проблем поведенческой наследственности с передачей по женской линии.</div>
			    </div>
			    <div data-protocol="v5" class="col protocols_item protocols_item_5 text_center">
			      <span class="protocols_item_title">V5—V2</span>
			      <div class="protocols_item_img">
			      	<i class="fab fa-medapps"></i>
			      </div>
			      <div class="protocols_item_content hidden">Коррекция блокировки восходящего потока жизненной Силы -  невротических переживаний нехватки воздуха, страхов закрытого пространства, высоты, навязчивого мытья рук и прочих обсессий и компульсий. Синдрома хронической усталости, отсутствия желаний, либидо и прочей хандры. Проблем поведенческой наследственности с передачей по мужской линии, последствий депривации детского возраста.</div>
			    </div>
			    <div data-protocol="drenag" class="col protocols_item protocols_item_6 text_center">
			      <span class="protocols_item_title">Дренаж</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-recycle"></i>
			      </div>
			      <div class="protocols_item_content hidden">Реактивация ресурсов организма через устранение негативного флюида из зон DSV с последующим наполнением зон позитивным флюидом. Рекомендован при хронических либо кармически отягощенных, а также гипоресурсных состояниях. Можно применять сразу дополнительно после основного протокола либо самостоятельно.</div>
			    </div>
			  </div>
				<div class="row">
			    <div data-protocol="solis" class="col protocols_item protocols_item_7 text_center">
			      <span class="protocols_item_title">Solis</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-sun"></i>
			      </div>
			      <div class="protocols_item_content hidden">Протокол для коррекции энергетического баланса на Полнолуние. Способствует наилучшему  продольному прохождению через тело и систему  DSV восходящего потока жизненной Силы с последующим формированием порции высокопотенциированного позитивного флюида (Плода) используемого в последующем для успешной реализации наших добрых Намерений и Дел.<br>Работает только в дни Полнолуния!</div>
			    </div>
			    <div data-protocol="universal" class="col protocols_item protocols_item_8 text_center">
			      <span class="protocols_item_title">Универсальный</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-hands"></i>
			      </div>
			      <div class="protocols_item_content hidden">Универсальный протокол подходит для большинства типичных дисфункций. Если вы затрудняетесь с выбором типа протокола - смело выбирайте универсальный!</div>
			    </div>
			    <div data-protocol="visceral" class="col protocols_item protocols_item_9 text_center">
			      <span class="protocols_item_title">Висцеральный</span>
			      <div class="protocols_item_img">
			      	<i class="fab fa-stumbleupon"></i>
			      </div>
			      <div class="protocols_item_content hidden">Предназначен для оптимального энергетического баланса внутренних органов, включая нормализацию обмена веществ, иммунитета и гормонов! Может быть использован в комбинации с другими DSV протоколами либо самостоятельно.</div>
			    </div>
			  </div>
			  <?php 
			    $cur_user_id = get_current_user_id();
			    $testing_user = 212;
			  ?>
			  <?php if (current_user_can('administrator')|| $cur_user_id === $testing_user) { ?>
			  		<div class="row">
			  	    <div data-protocol="karma" class="col protocols_item protocols_item_10 text_center">
			  	      <span class="protocols_item_title">Кармический</span>
			  	      <div class="protocols_item_img">
			  	      	<i class="fas fa-eye"></i>
			  	      </div>
			  	      <div class="protocols_item_content hidden">Протокол предназначен для очистки накопленной личной истории (Кармы). Рекомендуем использовать не чаще раза в месяц</div>
			  	    </div>
			  	    <div data-protocol="moon" class="col protocols_item protocols_item_11 text_center">
			  	      <span class="protocols_item_title">Лунный</span>
			  	      <div class="protocols_item_img">
			  	      	<i class="fas fa-moon"></i>
			  	      </div>
			  	      <div class="protocols_item_content hidden">Протокол Лунного дня учитывает напряжение зон DSV в зависимости от фазы Луны. Подходит для ежедневного применения</div>
			  	    </div>
			  	  </div>
			  <?php } ?>
			</div>
			<!-- manual diagnostic -->
			<div class="mobile_screen mobile_screen_manual hidden">
				<div class="row protocols_info">
					<div class="col text_center">
						<div class="row">
							<div class="col">
								
							</div>
						</div>
						<div class="row">
							<?php 
							  $cur_user_id = get_current_user_id();
							  $testing_user = 212;
							?>
							<?php if (current_user_can('administrator')|| $cur_user_id === $testing_user) { ?>
							<div class="testing_mode col-12">
								<div class="btn-group" role="group" aria-label="Testing Mode">
								  <button type="button" class="btn testing_mode_item testing_mode_item_p btn-primary active">P 300</button>
								  <button type="button" class="btn testing_mode_item testing_mode_item_g btn-primary">График</button>
								</div>
							</div>
							<?php } ?>
						</div>
						<div class="row">
							<div class="col-2 text_center diagnostic_container">
								<div class="zone zone_diag draggable_y">
									<i class="fas fa-arrows-alt-v"></i>
								</div>
							</div>
							<div class="col-10 text_center zone_diag diagnostic_rezult">
								<img class="loaded_img" src="" alt="">
								<?php if (current_user_can('administrator')|| $cur_user_id === $testing_user) { ?>
								<div class="zone-testing">
								  <div class="zone-testing_item zone-testing_item_1 zone-testing_item__check"><span class="zone-testing_item_n">1</span></div>
								  <div class="zone-testing_item zone-testing_item_2 zone-testing_item__check"><span class="zone-testing_item_n">2</span></div>
								  <div class="zone-testing_item zone-testing_item_3 zone-testing_item__check"><span class="zone-testing_item_n">3</span></div>
								  <div class="zone-testing_item zone-testing_item_4 zone-testing_item__check"><span class="zone-testing_item_n">4</span></div>
								  <div class="zone-testing_item zone-testing_item_5 zone-testing_item__check"><span class="zone-testing_item_n">5</span></div>
								  <div class="zone-testing_item zone-testing_item_6 zone-testing_item__check"><span class="zone-testing_item_n">6</span></div>
								  <div class="zone-testing_item zone-testing_item_7 zone-testing_item__check"><span class="zone-testing_item_n">7</span></div>
								</div>
								<?php } ?>
							</div>
							<?php if (current_user_can('administrator')|| $cur_user_id === $testing_user) { ?>
							<div class="col-sm-12 zone_recommend hidden">
							  <span class="zone_recommend_text"></span><button type="button" class="zones_reset btn btn-sm btn-warning" style="margin-right: 5px;">Сбросить <i class="fa fa-trash"></i></button><button type="button" class="btn_test_accept btn btn-sm btn-success">Применить <i class="fa fa-check"></i></button>
							</div>
							<?php } ?>
						</div>
					</div>
				</div>
			</div>
			<!-- final screen -->
			<div class="mobile_screen mobile_screen_final hidden">
				<div class="row protocols_info">
					<div class="col text_center">
						<div class="row justify-content-center">
							<div class="col-12 text_center zones">
								<div class="row">
									<div class="col zone_holder">
										<div class="status status_percent_wrap hidden">
											Выполнено: <span class="status_percent">0%</span>
										</div>
										<div class="zone zone_movable draggable draggable_lovushka"></div>
										<div class="zone zone_movable draggable draggable_d2">D2</div>
										<div class="zone zone_movable draggable draggable_d3">D3</div>
										<div class="zone zone_movable draggable draggable_d4">D4</div>
										<div class="zone zone_movable draggable draggable_d5">D5</div>
										<div class="zone zone_movable draggable draggable_d6">D6</div>
										<div class="zone zone_final zone_x hidden"></div>
									</div>
									<div class="col zone_holder">
										<div class="status status_title hidden"></div>
										<div class="zone zone_movable draggable draggable_v0">V0</div>
										<div class="zone zone_movable draggable draggable_v1">V1</div>
										<div class="zone zone_movable draggable draggable_v2">V2</div>
										<div class="zone zone_movable draggable draggable_v3">V3</div>
										<div class="zone zone_movable draggable draggable_v4">V4</div>
										<div class="zone zone_movable draggable draggable_v5">V5</div>
										<div class="zone zone_movable draggable draggable_v-">V-</div>
									</div>
									<div class="col zone_holder">
										<div class="status status_pahaze hidden">
											Фаза: 
											<span class="status_pahaze_now">0</span>
											<span class="status_pahaze_to"> из </span>
											<span class="status_pahaze_all">0</span>
										</div>
										<div class="zone zone_movable draggable draggable_s2">S2</div>
										<div class="zone zone_movable draggable draggable_s3">S3</div>
										<div class="zone zone_movable draggable draggable_s4">S4</div>
										<div class="zone zone_movable draggable draggable_s5">S5</div>
										<div class="zone zone_movable draggable draggable_s6">S6</div>
										<div class="zone zone_movable zone_final zone_l hidden"></div>
									</div>
								</div>
							</div>
							<div class="col-12 text_center zone_diag">
								<img class="loaded_img" src="" alt="">
								<div class="paranja"></div>
							</div>
							<div class="col-12 text_center">
								<button class="btn btn-primary btn_start"><i class="fab fa-react"></i> Выполнить</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<?php } else { ?>
				<div class="subscriber_info">Вы видите это сообщение, потому, что зарегистрированы в <a href="http://wizardmachine.ru/">"WizardMachine"</a> но на данный момент не имеете действующего доступа к программе.
	        <p>
	        	Для новых пользователей доступен бесплатный 3-х дневный доступ к протоколу "Универсальный". Для того чтоб воcпользоваться тестовым доступом перейдите полную версию программы.
	        </p>
	        <p>
	          Преобрести доступ к <b>"WizardMachine"</b> вы можете из <a href="/kabinet/">личного кабинета</a> пользователя (вкладка <b>"Все доступы"</b>). Напоминаем что действующие пользователи могут продлить доступ к <b>"WizardMachine"</b> со скидкой <b>30%</b>, для этого перейдите в <a href="/kabinet/">личный кабинет</a> пользователя, во вкладку <b>"Текущий доступ"</b> (доcтупно при наличии действующиего доступа к программе). Если Вы не успели продлить доступ до окончания срока действия лицензии не страшно! Вы все еще можете получить <b>продление со скидкой</b>. Для этого обратитесь в техподдержку — <a href="mailto:chikurovstudio@gmail.com">chikurovstudio@gmail.com</a>. Вам оперативно ответят.
	        </p>
	        <p>
	          Если у Вас есть вопросы, их так же можно задать службе технической поддержки пользователей написав на <a href="mailto:chikurovstudio@gmail.com">chikurovstudio@gmail.com</a>
	        </p>
	      </div>
			<?php } ?>


		<?php } else { ?>
			<div class="row">
				<div class="col protocols_info text_center form-group form-group_login">
					<div class="current_protocol_img">
						<i class="fas fa-lock"></i>
					</div>
				  <form name="loginform" id="loginform" action="<?php echo esc_url( site_url( 'wp-login.php', 'login_post' ) ); ?>" method="post">
				    <p>
				      <label for="user_login"><?php _e('Username') ?><br />
				      <input type="text" name="log" id="user_login" class="input form-control" value="<?php echo esc_attr($user_login); ?>" size="20" /></label>
				    </p>
				    <p>
				      <label for="user_pass"><?php _e('Password') ?><br />
				      <input type="password" name="pwd" id="user_pass" class="input form-control" value="" size="20" /></label>
				    </p>
				    <?php
				    /**
				     * Fires following the 'Password' field in the login form.
				     *
				     * @since 2.1.0
				     */
				    do_action( 'login_form' );
				    ?>
				    <!-- <p class="note_small">Что бы получить доступ </p> -->
				    <p class="forgetmenot"><label class="form-check-label" for="rememberme"><input class="form-check-input" name="rememberme" type="checkbox" id="rememberme" value="forever" <?php checked( $rememberme ); ?> /> <?php esc_attr_e('Remember Me'); ?></label></p>
				    <p class="submit">
				      <input type="submit" name="wp-submit" id="wp-submit" class="btn btn-primary" value="<?php esc_attr_e('Log In'); ?>" />
				<?php if ( $interim_login ) { ?>
				      <input type="hidden" name="interim-login" value="1" />
				<?php } else { ?>
				      <input type="hidden" name="redirect_to" value="<?php echo esc_attr($redirect_to); ?>" />
				<?php } ?>
				<?php if ( $customize_login ) : ?>
				      <input type="hidden" name="customize-login" value="1" />
				<?php endif; ?>
				      <input type="hidden" name="testcookie" value="1" />
				    </p>
				    <p>
				    	<p class="note_small">У Вас еще нет учетной записи? <span class="toRegistration">Зарегистрируйтесь</span> в "WizardMachine" и узнайте как получить доступ</p>
				    </p>
				  </form>
				</div>
				<div class="col protocols_info text_center form-group form-group_register hidden">
					<div class="current_protocol_img">
						<i class="fas fa-lock"></i>
					</div>
				  <form name="registerform" id="registerform" action="<?php echo site_url('wp-login.php?action=register'); ?>" method="post">
				    <p>
				      <label for="user_login">Придумайте логин<br />
				      <input type="text" name="user_login" id="user_login" class="input form-control" value="" size="20" style=""></label>
				    </p>
				    <p>
				      <label for="user_email">E-mail<br>
				      <input type="email" name="user_email" id="user_email" class="input form-control" value="" size="25">
				      </label>
				    </p>
				    
				    <p id="reg_passmail">Подтверждение регистрации будет отправлено на ваш e-mail.</p>
				    <br class="clear">
				    <input type="hidden" name="redirect_to" value="">
				    <p class="submit"><input type="submit" name="wp-submit" id="wp-submit" class="btn btn-primary" value="Регистрация"></p>
				    <p class="note_small">У Вас уже есть учетная запись? <span class="toLogin">Войдите</span> в "WizardMachine" используя свои логин и пароль</p>
				  </form>
				</div>
			</div>
		<?php } ?>
	</div>
<?php } ?>	

<?php get_footer(); ?>
