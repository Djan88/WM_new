<?php

/**
*
* info_acp_pai [Russian]
*
* @package Preview Attached Images
* @copyright (c) 2014 www.phpbb-work.ru
* @license http://opensource.org/licenses/gpl-license.php GNU Public License
*
*/

if (!defined('IN_PHPBB'))
{
	exit;
}
if (empty($lang) || !is_array($lang))
{
	$lang = array();
}

$lang = array_merge($lang, array(
	'PAI_EXT'						=> 'Preview Attached Images',
	'PAI_EXT_EXPLAIN'				=> 'Выводит миниатюры для загруженных изображений в списке опубликованных вложений во время размещения или редактирования сообщений.',
	'PAI_SETTINGS'					=> 'Настройки Preview Attached Images',
	'PAI_SETTINGS_UPDATED'			=> '<strong>Изменены настройки Preview Attached Images</strong>',
	'PAI_VERSION'					=> 'Версия: <strong>%s</strong>',
	'PAI_ENABLED'					=> 'Включить миниатюры',
	'PAI_MAX_WIDTH'					=> 'Максимальная ширина миниатюр',
	'PAI_MAX_WIDTH_EXPLAIN'			=> 'Ширина миниатюр не будет превышать указанную здесь величину.',
	'PAI_MAX_HEIGHT'				=> 'Максимальная высота миниатюр',
	'PAI_MAX_HEIGHT_EXPLAIN'		=> 'Высота миниатюр не будет превышать указанную здесь величину.',
	'PAI_EXT_SUPPORT'				=> 'Новые версии и поддержку вы можете найти <a style="font-weight: bold;" href="http://www.phpbb-work.ru/preview-attachments-ext-t91.html" onclick="window.open(this.href);return false;">на странице расширения на сайте автора</a>.',
));
