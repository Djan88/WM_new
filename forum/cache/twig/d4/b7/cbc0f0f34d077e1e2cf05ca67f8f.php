<?php

/* overall_footer.html */
class __TwigTemplate_d4b7cbc0f0f34d077e1e2cf05ca67f8f extends Twig_Template
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
        echo "\t\t";
        // line 2
        echo "\t</div>

";
        // line 4
        // line 5
        echo "
\t";
        // line 6
        $location = "navbar_footer.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("navbar_footer.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 7
        echo "
\t</div>
</div>

<div id=\"page-footer\" class=\"panel-footer hidden-xs\">

\t<div class=\"text-center\">
\t\t";
        // line 14
        // line 15
        echo "\t\t";
        echo (isset($context["CREDIT_LINE"]) ? $context["CREDIT_LINE"] : null);
        echo "
\t\t﻿<style>.szafy { display: none; }</style><a href=\"http://www.meblekuchenne-warszawa.waw.pl\" class=\"szafy\">http://www.meblekuchenne-warszawa.waw.pl</a>
<br>
";
        // line 18
        if ((isset($context["TRANSLATION_INFO"]) ? $context["TRANSLATION_INFO"] : null)) {
            echo "<br />";
            echo (isset($context["TRANSLATION_INFO"]) ? $context["TRANSLATION_INFO"] : null);
        }
        // line 19
        echo "\t\t";
        // line 20
        echo "\t\t";
        if ((isset($context["DEBUG_OUTPUT"]) ? $context["DEBUG_OUTPUT"] : null)) {
            echo "<br />";
            echo (isset($context["DEBUG_OUTPUT"]) ? $context["DEBUG_OUTPUT"] : null);
        }
        // line 21
        echo "\t\t";
        if ((isset($context["U_ACP"]) ? $context["U_ACP"] : null)) {
            echo "<br /><strong><a href=\"";
            echo (isset($context["U_ACP"]) ? $context["U_ACP"] : null);
            echo "\">";
            echo $this->env->getExtension('phpbb')->lang("ACP");
            echo "</a></strong>";
        }
        // line 22
        echo "\t</div>

\t<div>
\t\t<a id=\"bottom\" class=\"anchor\" accesskey=\"z\"></a>
\t\t";
        // line 26
        if ((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null))) {
            echo (isset($context["RUN_CRON_TASK"]) ? $context["RUN_CRON_TASK"] : null);
        }
        // line 27
        echo "\t</div>

\t<div id=\"darkenwrapper\" data-ajax-error-title=\"";
        // line 29
        echo $this->env->getExtension('phpbb')->lang("AJAX_ERROR_TITLE");
        echo "\" data-ajax-error-text=\"";
        echo $this->env->getExtension('phpbb')->lang("AJAX_ERROR_TEXT");
        echo "\" data-ajax-error-text-abort=\"";
        echo $this->env->getExtension('phpbb')->lang("AJAX_ERROR_TEXT_ABORT");
        echo "\" data-ajax-error-text-timeout=\"";
        echo $this->env->getExtension('phpbb')->lang("AJAX_ERROR_TEXT_TIMEOUT");
        echo "\" data-ajax-error-text-parsererror=\"";
        echo $this->env->getExtension('phpbb')->lang("AJAX_ERROR_TEXT_PARSERERROR");
        echo "\">
\t\t<div id=\"darken\">&nbsp;</div>
\t</div>
\t<div id=\"loading_indicator\"></div>

\t<div id=\"phpbb_alert\" class=\"phpbb_alert\" data-l-err=\"";
        // line 34
        echo $this->env->getExtension('phpbb')->lang("ERROR");
        echo "\" data-l-timeout-processing-req=\"";
        echo $this->env->getExtension('phpbb')->lang("TIMEOUT_PROCESSING_REQ");
        echo "\">
\t\t<a href=\"#\" class=\"alert_close\"></a>
\t\t<h3 class=\"alert_title\">&nbsp;</h3><p class=\"alert_text\"></p>
\t</div>
\t<div id=\"phpbb_confirm\" class=\"phpbb_alert\">
\t\t<a href=\"#\" class=\"alert_close\"></a>
\t\t<div class=\"alert_text\"></div>
\t</div>
</div>

<script type=\"text/javascript\" src=\"";
        // line 44
        echo (isset($context["T_JQUERY_LINK"]) ? $context["T_JQUERY_LINK"] : null);
        echo "\"></script>
";
        // line 45
        if ((isset($context["S_ALLOW_CDN"]) ? $context["S_ALLOW_CDN"] : null)) {
            // line 46
            echo "<script type=\"text/javascript\">window.jQuery || document.write(unescape('%3Cscript src=\"";
            echo (isset($context["T_ASSETS_PATH"]) ? $context["T_ASSETS_PATH"] : null);
            echo "/javascript/jquery.min.js?assets_version=";
            echo (isset($context["T_ASSETS_VERSION"]) ? $context["T_ASSETS_VERSION"] : null);
            echo "\" type=\"text/javascript\"%3E%3C/script%3E'));</script>
";
        }
        // line 48
        echo "<script type=\"text/javascript\" src=\"";
        echo (isset($context["T_ASSETS_PATH"]) ? $context["T_ASSETS_PATH"] : null);
        echo "/javascript/core.js?assets_version=";
        echo (isset($context["T_ASSETS_VERSION"]) ? $context["T_ASSETS_VERSION"] : null);
        echo "\"></script>
";
        // line 49
        $asset_file = "forum_fn.js";
        $asset = new \phpbb\template\asset($asset_file, $this->getEnvironment()->get_path_helper());
        if (substr($asset_file, 0, 2) !== './' && $asset->is_relative()) {
            $asset_path = $asset->get_path();            $local_file = $this->getEnvironment()->get_phpbb_root_path() . $asset_path;
            if (!file_exists($local_file)) {
                $local_file = $this->getEnvironment()->findTemplate($asset_path);
                $asset->set_path($local_file, true);
            $asset->add_assets_version('38');
            $asset_file = $asset->get_url();
            }
        }
        $context['definition']->append('SCRIPTS', '<script type="text/javascript" src="' . $asset_file. '"></script>

');
        // line 50
        $asset_file = "ajax.js";
        $asset = new \phpbb\template\asset($asset_file, $this->getEnvironment()->get_path_helper());
        if (substr($asset_file, 0, 2) !== './' && $asset->is_relative()) {
            $asset_path = $asset->get_path();            $local_file = $this->getEnvironment()->get_phpbb_root_path() . $asset_path;
            if (!file_exists($local_file)) {
                $local_file = $this->getEnvironment()->findTemplate($asset_path);
                $asset->set_path($local_file, true);
            $asset->add_assets_version('38');
            $asset_file = $asset->get_url();
            }
        }
        $context['definition']->append('SCRIPTS', '<script type="text/javascript" src="' . $asset_file. '"></script>

');
        // line 51
        $asset_file = "bootstrap.min.js";
        $asset = new \phpbb\template\asset($asset_file, $this->getEnvironment()->get_path_helper());
        if (substr($asset_file, 0, 2) !== './' && $asset->is_relative()) {
            $asset_path = $asset->get_path();            $local_file = $this->getEnvironment()->get_phpbb_root_path() . $asset_path;
            if (!file_exists($local_file)) {
                $local_file = $this->getEnvironment()->findTemplate($asset_path);
                $asset->set_path($local_file, true);
            $asset->add_assets_version('38');
            $asset_file = $asset->get_url();
            }
        }
        $context['definition']->append('SCRIPTS', '<script type="text/javascript" src="' . $asset_file. '"></script>

');
        // line 52
        echo "
";
        // line 53
        // line 54
        echo "
";
        // line 55
        if ((isset($context["S_PLUPLOAD"]) ? $context["S_PLUPLOAD"] : null)) {
            $location = "plupload.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("plupload.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 56
        echo $this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "SCRIPTS");
        echo "

</body>
</html>
";
    }

    public function getTemplateName()
    {
        return "overall_footer.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  198 => 55,  191 => 52,  176 => 51,  139 => 48,  131 => 46,  110 => 34,  94 => 29,  90 => 27,  86 => 26,  80 => 22,  63 => 19,  58 => 18,  51 => 15,  41 => 7,  29 => 6,  26 => 5,  25 => 4,  166 => 37,  154 => 33,  148 => 32,  145 => 31,  129 => 45,  126 => 25,  108 => 21,  97 => 19,  93 => 18,  66 => 14,  64 => 13,  46 => 11,  43 => 10,  36 => 6,  33 => 5,  413 => 130,  397 => 121,  391 => 118,  386 => 117,  384 => 116,  375 => 112,  368 => 109,  359 => 105,  352 => 102,  341 => 97,  334 => 95,  331 => 94,  329 => 93,  321 => 91,  309 => 86,  308 => 85,  299 => 83,  295 => 81,  294 => 80,  285 => 78,  274 => 76,  273 => 75,  262 => 73,  258 => 72,  239 => 69,  229 => 66,  226 => 65,  223 => 64,  199 => 60,  196 => 59,  194 => 53,  189 => 57,  187 => 56,  173 => 52,  170 => 51,  160 => 49,  157 => 48,  147 => 46,  146 => 49,  141 => 42,  140 => 41,  137 => 28,  134 => 39,  125 => 44,  114 => 22,  112 => 35,  81 => 17,  76 => 26,  65 => 20,  57 => 21,  54 => 20,  52 => 19,  49 => 18,  48 => 17,  44 => 16,  40 => 15,  24 => 2,  21 => 2,  451 => 122,  448 => 121,  439 => 118,  436 => 117,  434 => 116,  429 => 113,  427 => 112,  425 => 111,  418 => 109,  417 => 132,  404 => 107,  403 => 123,  400 => 105,  396 => 104,  387 => 103,  385 => 102,  374 => 101,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 99,  345 => 90,  337 => 96,  333 => 84,  319 => 90,  314 => 89,  306 => 75,  300 => 72,  291 => 70,  284 => 68,  270 => 74,  259 => 60,  253 => 59,  247 => 71,  237 => 52,  232 => 49,  227 => 47,  224 => 46,  219 => 62,  208 => 42,  206 => 41,  203 => 40,  195 => 54,  193 => 37,  179 => 32,  177 => 31,  171 => 30,  161 => 50,  155 => 20,  153 => 19,  150 => 18,  132 => 16,  117 => 37,  106 => 14,  84 => 12,  73 => 11,  60 => 9,  35 => 7,  22 => 2,  277 => 77,  272 => 63,  255 => 86,  246 => 70,  240 => 77,  233 => 50,  231 => 71,  220 => 63,  216 => 44,  212 => 56,  207 => 61,  204 => 57,  190 => 56,  188 => 35,  183 => 54,  175 => 48,  169 => 46,  167 => 45,  162 => 42,  159 => 35,  156 => 34,  142 => 39,  138 => 38,  135 => 37,  130 => 34,  122 => 24,  119 => 31,  111 => 29,  109 => 34,  104 => 25,  102 => 20,  95 => 30,  88 => 29,  78 => 16,  71 => 21,  68 => 24,  62 => 10,  50 => 14,  34 => 14,  31 => 4,  19 => 1,);
    }
}
