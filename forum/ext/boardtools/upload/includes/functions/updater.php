<?php
/**
*
* @package Upload Extensions
* @copyright (c) 2014 John Peskens (http://ForumHulp.com) and Igor Lavrov (https://github.com/LavIgor)
* @license http://opensource.org/licenses/gpl-2.0.php GNU General Public License v2
*
*/

namespace boardtools\upload\includes\functions;

use \boardtools\upload\includes\objects;

class updater
{
	/**
	* The function that gets extension metadata manager for Upload Extensions.
	*/
	public static function get_manager()
	{
		objects::$md_manager = new \phpbb\extension\metadata_manager(objects::$upload_ext_name, objects::$config, objects::$phpbb_extension_manager, objects::$template, objects::$user, objects::$phpbb_root_path);
		try
		{
			$metadata = objects::$md_manager->get_metadata('all');
		}
		catch(\phpbb\extension\exception $e)
		{
			files::catch_errors($e);
		}

		$upload_extensions_download = false;
		try
		{
			$updates_available = extensions::version_check(objects::$md_manager, objects::$request->variable('versioncheck_force', false));

			objects::$template->assign_vars(array(
				'UPLOAD_EXT_NEW_UPDATE'	=> !empty($updates_available),
				'S_UPLOAD_UP_TO_DATE'	=> empty($updates_available),
				'S_UPLOAD_VERSIONCHECK'	=> true,
				'UPLOAD_UP_TO_DATE_MSG'	=> objects::$user->lang(empty($updates_available) ? 'UP_TO_DATE' : 'NOT_UP_TO_DATE', objects::$md_manager->get_metadata('display-name')),
			));

			foreach ($updates_available as $branch => $version_data)
			{
				objects::$template->assign_block_vars('upload_updates_available', $version_data);
				$upload_extensions_download = $version_data['download'];
			}
		}
		catch (\RuntimeException $e)
		{
			objects::$template->assign_vars(array(
				'S_UPLOAD_VERSIONCHECK_STATUS'			=> $e->getCode(),
				'UPLOAD_VERSIONCHECK_FAIL_REASON'		=> ($e->getMessage() !== objects::$user->lang('VERSIONCHECK_FAIL')) ? $e->getMessage() : '',
			));
		}
		objects::$self_update = $upload_extensions_download;
	}

	/**
	* The function that checks available updates for Upload Extensions.
	*/
	public static function check()
	{
	}
}
