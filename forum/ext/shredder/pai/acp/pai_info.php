<?php

/**
*
* @package Preview Attached Images
* @copyright (c) 2014 www.phpbb-work.ru
* @license http://opensource.org/licenses/gpl-license.php GNU Public License
*
*/

namespace shredder\pai\acp;

/**
* @ignore
*/
if (!defined('IN_PHPBB'))
{
	exit;
}

class pai_info
{
	function module()
	{
		return array(
			'filename'	=> '\shredder\pai\acp\pai_module',
			'title'		=> 'PAI_EXT',
			'modes'		=> array(
				'settings'		=> array('title' => 'SETTINGS', 'auth' => 'ext_shredder/pai && acl_a_board', 'cat' => array('PAI_EXT')),
			),
		);
	}
}