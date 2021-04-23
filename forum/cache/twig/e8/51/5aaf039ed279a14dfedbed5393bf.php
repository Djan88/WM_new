<?php

/* overall_footer.html */
class __TwigTemplate_e8515aaf039ed279a14dfedbed5393bf extends Twig_Template
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
        return array (  212 => 56,  198 => 55,  191 => 52,  176 => 51,  139 => 48,  94 => 29,  90 => 27,  80 => 22,  71 => 21,  63 => 19,  58 => 18,  51 => 15,  41 => 7,  29 => 6,  25 => 4,  130 => 21,  79 => 13,  77 => 12,  74 => 11,  119 => 20,  72 => 13,  37 => 7,  28 => 3,  120 => 34,  98 => 29,  92 => 27,  86 => 26,  69 => 12,  26 => 5,  166 => 37,  148 => 32,  145 => 31,  129 => 45,  126 => 25,  122 => 24,  97 => 19,  93 => 18,  66 => 11,  64 => 13,  50 => 14,  43 => 10,  36 => 5,  33 => 5,  413 => 130,  397 => 121,  391 => 118,  386 => 117,  384 => 116,  375 => 112,  368 => 109,  359 => 105,  352 => 102,  341 => 97,  329 => 93,  321 => 91,  308 => 85,  299 => 83,  295 => 81,  294 => 80,  285 => 78,  274 => 76,  273 => 75,  262 => 73,  239 => 69,  223 => 64,  199 => 60,  196 => 59,  194 => 53,  189 => 57,  187 => 56,  173 => 52,  160 => 49,  157 => 48,  156 => 34,  147 => 46,  141 => 25,  137 => 28,  134 => 39,  125 => 44,  114 => 22,  112 => 35,  109 => 34,  102 => 15,  88 => 29,  68 => 24,  65 => 20,  54 => 20,  49 => 18,  48 => 7,  40 => 15,  24 => 3,  21 => 2,  451 => 122,  448 => 121,  439 => 118,  434 => 116,  429 => 113,  418 => 109,  417 => 132,  404 => 107,  403 => 123,  400 => 105,  396 => 104,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 99,  345 => 90,  337 => 96,  333 => 84,  319 => 90,  291 => 70,  284 => 68,  277 => 77,  259 => 60,  253 => 59,  247 => 71,  237 => 52,  233 => 50,  232 => 49,  227 => 47,  224 => 46,  219 => 62,  216 => 44,  208 => 42,  206 => 41,  203 => 40,  195 => 54,  193 => 37,  188 => 35,  183 => 54,  179 => 32,  177 => 31,  171 => 30,  161 => 50,  155 => 20,  153 => 19,  150 => 18,  132 => 16,  117 => 19,  106 => 16,  95 => 17,  84 => 14,  62 => 10,  35 => 7,  22 => 2,  1491 => 400,  1488 => 399,  1481 => 395,  1467 => 392,  1463 => 390,  1461 => 389,  1458 => 388,  1446 => 387,  1442 => 385,  1441 => 384,  1438 => 383,  1433 => 380,  1425 => 378,  1423 => 377,  1419 => 376,  1415 => 375,  1410 => 374,  1407 => 373,  1394 => 372,  1392 => 371,  1389 => 370,  1387 => 369,  1383 => 367,  1378 => 364,  1363 => 362,  1359 => 361,  1355 => 360,  1350 => 358,  1343 => 357,  1341 => 356,  1338 => 355,  1326 => 354,  1323 => 353,  1322 => 352,  1319 => 351,  1282 => 349,  1280 => 348,  1277 => 347,  1276 => 346,  1272 => 344,  1271 => 343,  1268 => 342,  1263 => 339,  1258 => 337,  1249 => 336,  1241 => 335,  1239 => 334,  1233 => 332,  1231 => 331,  1228 => 330,  1214 => 328,  1212 => 327,  1209 => 326,  1204 => 324,  1196 => 321,  1188 => 315,  1187 => 314,  1184 => 313,  1175 => 312,  1173 => 311,  1167 => 310,  1164 => 309,  1160 => 307,  1151 => 306,  1147 => 305,  1144 => 304,  1140 => 302,  1131 => 301,  1127 => 300,  1124 => 299,  1121 => 298,  1114 => 297,  1113 => 296,  1110 => 295,  1105 => 292,  1096 => 290,  1092 => 289,  1088 => 288,  1083 => 287,  1081 => 286,  1076 => 284,  1073 => 283,  1065 => 280,  1062 => 279,  1060 => 278,  1057 => 277,  1050 => 273,  1046 => 272,  1042 => 271,  1038 => 270,  1034 => 269,  1028 => 267,  1021 => 263,  1017 => 262,  1013 => 261,  1009 => 260,  1005 => 259,  999 => 257,  997 => 256,  992 => 254,  988 => 252,  985 => 251,  980 => 248,  979 => 247,  976 => 246,  964 => 244,  961 => 243,  951 => 241,  948 => 240,  938 => 238,  935 => 237,  925 => 235,  922 => 234,  912 => 232,  909 => 231,  899 => 229,  897 => 228,  894 => 227,  893 => 226,  887 => 224,  884 => 223,  882 => 222,  857 => 220,  846 => 219,  839 => 214,  837 => 213,  831 => 209,  825 => 208,  792 => 204,  782 => 203,  779 => 202,  776 => 201,  772 => 200,  767 => 198,  762 => 195,  759 => 194,  758 => 193,  755 => 192,  753 => 191,  747 => 190,  737 => 188,  734 => 187,  729 => 186,  728 => 185,  725 => 184,  717 => 182,  714 => 181,  712 => 180,  709 => 179,  699 => 178,  689 => 177,  672 => 176,  669 => 175,  659 => 174,  655 => 172,  647 => 171,  644 => 170,  642 => 169,  639 => 168,  626 => 167,  623 => 166,  622 => 165,  619 => 164,  613 => 163,  599 => 162,  595 => 161,  588 => 159,  575 => 157,  571 => 156,  550 => 155,  547 => 154,  542 => 151,  537 => 149,  532 => 148,  527 => 146,  522 => 145,  520 => 144,  514 => 142,  511 => 141,  501 => 139,  498 => 138,  496 => 137,  492 => 136,  489 => 135,  481 => 130,  477 => 129,  473 => 128,  470 => 127,  466 => 125,  458 => 123,  455 => 122,  449 => 120,  447 => 119,  444 => 118,  442 => 117,  436 => 117,  427 => 112,  425 => 111,  422 => 109,  416 => 108,  414 => 107,  410 => 105,  390 => 104,  387 => 103,  385 => 102,  380 => 99,  374 => 101,  367 => 95,  364 => 94,  342 => 93,  338 => 92,  334 => 95,  331 => 94,  327 => 88,  320 => 87,  314 => 89,  309 => 86,  306 => 75,  304 => 83,  300 => 72,  286 => 79,  280 => 76,  272 => 63,  270 => 74,  265 => 68,  258 => 72,  250 => 61,  246 => 70,  241 => 58,  236 => 56,  231 => 55,  229 => 66,  226 => 65,  214 => 52,  211 => 51,  210 => 50,  207 => 61,  170 => 51,  168 => 46,  165 => 45,  164 => 44,  159 => 35,  154 => 33,  146 => 49,  144 => 35,  140 => 41,  136 => 22,  131 => 46,  128 => 31,  115 => 30,  113 => 18,  110 => 34,  108 => 31,  105 => 26,  101 => 24,  96 => 22,  91 => 21,  83 => 19,  81 => 17,  78 => 16,  76 => 23,  73 => 22,  60 => 9,  57 => 21,  55 => 12,  52 => 19,  46 => 8,  44 => 10,  34 => 6,  31 => 4,  19 => 1,);
    }
}
