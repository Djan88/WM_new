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

class v_1_0_2 extends \phpbb\db\migration\migration
{
	public function effectively_installed()
	{
		return isset($this->config['pai_version']) && version_compare($this->config['pai_version'], '1.0.2', '>=');
	}

	static public function depends_on()
	{
		return array('\shredder\pai\migrations\v_1_0_0');
	}

	public function update_data()
	{
		return array(
			// Current version
			array('config.update', array('pai_version', '1.0.2')),
		);
	}
}
