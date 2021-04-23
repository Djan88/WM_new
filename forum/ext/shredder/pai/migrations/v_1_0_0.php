<?php

/**
*
* @package Preview Attached Images
* @copyright (c) 2014 www.phpbb-work.ru
* @license http://opensource.org/licenses/gpl-license.php GNU Public License
*
*/

namespace shredder\pai\migrations;

/**
* @ignore
*/
if (!defined('IN_PHPBB'))
{
    exit;
}

class v_1_0_0 extends \phpbb\db\migration\migration
{
	public function effectively_installed()
	{
		return isset($this->config['pai_version']) && version_compare($this->config['pai_version'], '1.0.0', '>=');
	}

	static public function depends_on()
	{
		return array('\phpbb\db\migration\data\v310\dev');
	}

	public function update_data()
	{
		global $user;

		$user->add_lang_ext('shredder/pai', 'info_acp_pai');

		return array(
			// Add configs
			array('config.add', array('pai_enabled', 1)),
			array('config.add', array('pai_max_width', 120)),
			array('config.add', array('pai_max_height', 180)),

			// Current version
			array('config.add', array('pai_version', '1.0.0')),

			// Add ACP modules
			array('module.add', array('acp', 'ACP_CAT_DOT_MODS', 'PAI_EXT')),
			array('module.add', array('acp', 'PAI_EXT', array(
					'module_basename'	=> '\shredder\pai\acp\pai_module',
					'module_langname'	=> 'SETTINGS',
					'module_mode'		=> 'settings',
					'module_auth'		=> 'ext_shredder/pai && acl_a_board',
			))),
		);
	}
}
