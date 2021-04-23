<?php
/* редирект с login на /wp-login.php  и с admin на /wp-admin */
add_action('template_redirect', 'kama_login_redirect');
function kama_login_redirect(){
    if(!is_user_logged_in()){
  if( strpos($_SERVER['REQUEST_URI'], 'login')!==false )
    $loc = '/';
  elseif( strpos($_SERVER['REQUEST_URI'], 'wp-login')!==false )
    $loc = '/';
  elseif( strpos($_SERVER['REQUEST_URI'], 'admin')!==false )
    $loc = '/wp-admin/';
        elseif( strpos($_SERVER['REQUEST_URI'], 'registration')!==false )
    $loc = 'wp-login.php?action=register';
  if( $loc ){
    header( 'Location: '.get_option('site_url').$loc, true, 303 );
    exit;
  }
    }
}

add_filter("login_redirect", "sp_login_redirect", 10, 3);

function sp_login_redirect($redirect_to, $request, $user){
    if(is_array($user->roles))
        if(in_array('administrator', $user->roles))
            return home_url('/wp-admin/');
    return home_url();
}

//fix for cookie error while login.
setcookie(TEST_COOKIE, 'WP Cookie check', 0, COOKIEPATH, COOKIE_DOMAIN); 
if ( SITECOOKIEPATH != COOKIEPATH ) 
setcookie(TEST_COOKIE, 'WP Cookie check', 0, SITECOOKIEPATH, COOKIE_DOMAIN); Источник: http://jkeks.ru/jkeks.ru/archives/8175

/* Отключаем админ панель для всех, кроме администраторов. */
if (!current_user_can('administrator')):
  show_admin_bar(false);
endif;

function uploadImageFile() { // Note: GD library is required for this function

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        //$iWidth = $iHeight = 200; // desired image result dimensions
        $iJpgQuality = 90;

        if ($_FILES) {

            // if no errors and size less than 250kb
            if (! $_FILES['mci_image_file']['error'] && $_FILES['mci_image_file']['size'] < 15 * 1024 * 1024) {
                if (is_uploaded_file($_FILES['mci_image_file']['tmp_name'])) {

                    // new unique filename
                    $sTempFileName = 'wp-content/uploads/cropped/' . md5(time().rand());

                    // move uploaded file into cache folder
                    move_uploaded_file($_FILES['mci_image_file']['tmp_name'], $sTempFileName);



                    // change file permission to 644
                    @chmod($sTempFileName, 0644);

                    if (file_exists($sTempFileName) && filesize($sTempFileName) > 0) {
                        $aSize = getimagesize($sTempFileName); // try to obtain image info
                        if (!$aSize) {
                            @unlink($sTempFileName);
                            return;
                        }

                        // check for image type
                        switch($aSize[2]) {
                            case IMAGETYPE_JPEG:
                                $sExt = '.jpg';

                                // create a new image from file 
                                $vImg = @imagecreatefromjpeg($sTempFileName);
                                break;
                            case IMAGETYPE_PNG:
                                $sExt = '.png';

                                // create a new image from file 
                                $vImg = @imagecreatefrompng($sTempFileName);
                                break;
                            default:
                                @unlink($sTempFileName);
                                return;
                        }

                        //exif only supports jpg in our supported file types
                        if ($sExt == ".jpg") {
                            $exif = @exif_read_data($sTempFileName);
                            // print_r ($exif);

                            //get the orientation
                            if(isset($exif['Orientation'])) $orientation = $exif['Orientation'];
                            elseif(isset($exif['COMPUTED']) && isset($exif['COMPUTED']['Orientation'])) $orientation = $exif['COMPUTED']['Orientation'];
                            elseif(isset($exif['IFD0']) && isset($exif['IFD0']['Orientation'])) $orientation = $exif['IFD0']['Orientation'];

                            switch($orientation){
                                case 8:
                                    $vImg = imagerotate($vImg, 90, 0);
                                    $tmp = $aSize[0];
                                    $aSize[0] = $aSize[1];
                                    $aSize[1] = $tmp;
                                    break;
                                case 3:
                                    $vImg = imagerotate($vImg, 180, 0);
                                    break;
                                case 6:
                                    $vImg = imagerotate($vImg, -90, 0);
                                    $tmp = $aSize[0];
                                    $aSize[0] = $aSize[1];
                                    $aSize[1] = $tmp;
                                    break;
                            }
                        }

                        if($aSize[0] <= 800 && $_POST['mci_w']){
                            $k = 1;
                        }else{
                            $k = $aSize[0] / 800;
                        }

                        if(!$_POST['mci_x1']) $_POST['mci_x1'] = 0;
                        if(!$_POST['mci_y1']) $_POST['mci_y1'] = 0;
                        if(!$_POST['mci_w']) $_POST['mci_w'] = 800;
                        if(!$_POST['mci_h']) $_POST['mci_h'] = $aSize[1] / $k;

                        $iWidth = (int)$_POST['mci_w'];
                        $iHeight = (int)$_POST['mci_h'];

                        // create a new true color image
                        $vDstImg = @imagecreatetruecolor( $iWidth, $iHeight );

                        // copy and resize part of an image with resampling
                        imagecopyresampled($vDstImg, $vImg, 0, 0, (int)($_POST['mci_x1'] * $k), (int)($_POST['mci_y1'] * $k), $iWidth, $iHeight, (int)($_POST['mci_w'] * $k), (int)($_POST['mci_h'] * $k));

                        // define a result image filename
                        $sResultFileName = $sTempFileName . '.jpg';

                        // output image to file
                        imagejpeg($vDstImg, $sResultFileName, $iJpgQuality);
                        @unlink($sTempFileName);

                        return '/' . $sResultFileName;
                    }
                }
            }
        }
    }
}

?>
