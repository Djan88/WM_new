<?php

/* @derky_sortablescaptcha/event/overall_header_head_append.html */
class __TwigTemplate_02fc1e4e253213f16c68b884d73f3521 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        if ((isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null)) {
            // line 2
            echo "<!-- This event is needed because INCLUDECSS can't be used in the sortables template file https://tracker.phpbb.com/browse/PHPBB3-13717 -->
";
            // line 3
            $asset_file = "sortablescaptcha.css";
            $asset = new \phpbb\template\asset($asset_file, $this->getEnvironment()->get_path_helper());
            if (substr($asset_file, 0, 2) !== './' && $asset->is_relative()) {
                $asset_path = $asset->get_path();                $local_file = $this->getEnvironment()->get_phpbb_root_path() . $asset_path;
                if (!file_exists($local_file)) {
                    $local_file = $this->getEnvironment()->findTemplate($asset_path);
                    $asset->set_path($local_file, true);
                $asset->add_assets_version('38');
                $asset_file = $asset->get_url();
                }
            }
            $context['definition']->append('STYLESHEETS', '<link href="' . $asset_file . '" rel="stylesheet" type="text/css" media="screen, projection" />
');
        }
    }

    public function getTemplateName()
    {
        return "@derky_sortablescaptcha/event/overall_header_head_append.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  24 => 3,  21 => 2,  451 => 122,  448 => 121,  439 => 118,  436 => 117,  434 => 116,  429 => 113,  427 => 112,  425 => 111,  418 => 109,  417 => 108,  404 => 107,  403 => 106,  400 => 105,  396 => 104,  387 => 103,  385 => 102,  374 => 101,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 91,  345 => 90,  337 => 85,  333 => 84,  319 => 83,  314 => 80,  306 => 75,  300 => 72,  291 => 70,  284 => 68,  270 => 62,  259 => 60,  253 => 59,  247 => 55,  237 => 52,  232 => 49,  227 => 47,  224 => 46,  219 => 45,  208 => 42,  206 => 41,  203 => 40,  195 => 38,  193 => 37,  179 => 32,  177 => 31,  171 => 30,  161 => 22,  155 => 20,  153 => 19,  150 => 18,  132 => 16,  117 => 15,  106 => 14,  84 => 12,  73 => 11,  60 => 9,  35 => 7,  22 => 2,  277 => 64,  272 => 63,  255 => 86,  246 => 54,  240 => 77,  233 => 50,  231 => 71,  220 => 63,  216 => 44,  212 => 61,  207 => 58,  204 => 57,  190 => 56,  188 => 35,  183 => 34,  175 => 48,  169 => 46,  167 => 45,  162 => 42,  159 => 41,  156 => 40,  142 => 39,  138 => 38,  135 => 37,  130 => 34,  122 => 32,  119 => 31,  111 => 29,  109 => 28,  104 => 25,  102 => 24,  95 => 13,  88 => 21,  78 => 18,  71 => 17,  68 => 16,  62 => 10,  50 => 10,  34 => 3,  31 => 6,  19 => 1,);
    }
}
