<?php

/**
*
* @package Preview Attached Images
* @copyright (c) 2014 www.phpbb-work.ru
* @license http://opensource.org/licenses/gpl-license.php GNU Public License
*
*/

namespace shredder\pai\event;

/**
* @ignore
*/
if (!defined('IN_PHPBB'))
{
	exit;
}

use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
* Event listener
*/
class listener implements EventSubscriberInterface
{
	/** @var \phpbb\config\config */
	protected $config;

	/** @var \phpbb\template */
	protected $template;

	public function __construct(\phpbb\config\config $config, \phpbb\template\template $template)
	{
		$this->config = $config;
		$this->template = $template;
	}

	/**
	* Assign functions defined in this class to event listeners in the core
	*
	* @return array
	* @static
	* @access public
	*/
	static public function getSubscribedEvents()
	{
		return array(
			'core.page_header_after'			=> 'set_pai_vars',
		);
	}

	public function set_pai_vars($event)
	{
		$this->template->assign_vars(array(
			'PAI_ENABLED'		=> $this->config['pai_enabled'],
			'PAI_MAX_WIDTH'		=> $this->config['pai_max_width'],
			'PAI_MAX_HEIGHT'	=> $this->config['pai_max_height'])
		);
	}
}
