<?php

/* navbar_footer.html */
class __TwigTemplate_4888dc5a6afc01d6f50e13cca750b117 extends Twig_Template
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
        echo "<div class=\"navbar navbar-default\" role=\"navigation\">
\t<div class=\"navbar-header\">
\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-footer\">
\t\t\t<span class=\"icon-bar\"></span>
\t\t\t<span class=\"icon-bar\"></span>
\t\t\t<span class=\"icon-bar\"></span>
\t\t</button>
\t</div>

\t<div class=\"collapse navbar-collapse\" id=\"navbar-collapse-footer\">
\t\t<ul class=\"nav navbar-nav navbar-";
        // line 11
        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
        echo "\" role=\"menubar\">
\t\t";
        // line 12
        if ((isset($context["U_SITE_HOME"]) ? $context["U_SITE_HOME"] : null)) {
            // line 13
            echo "\t\t\t<li><a href=\"";
            echo (isset($context["U_SITE_HOME"]) ? $context["U_SITE_HOME"] : null);
            echo "\" data-navbar-reference=\"home\"><i class=\"fa fa-home\"></i> ";
            echo $this->env->getExtension('phpbb')->lang("SITE_HOME");
            echo "</a></li>
\t\t";
        }
        // line 15
        echo "\t\t";
        // line 16
        echo "\t\t\t<li><a href=\"";
        echo (isset($context["U_INDEX"]) ? $context["U_INDEX"] : null);
        echo "\" data-navbar-reference=\"index\">";
        if ((!(isset($context["U_SITE_HOME"]) ? $context["U_SITE_HOME"] : null))) {
            echo "<i class=\"fa fa-home\"></i> ";
        }
        echo $this->env->getExtension('phpbb')->lang("INDEX");
        echo "</a></li>
\t\t";
        // line 17
        // line 18
        echo "\t\t\t
\t\t";
        // line 19
        if (((isset($context["U_WATCH_FORUM_LINK"]) ? $context["U_WATCH_FORUM_LINK"] : null) && (!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)))) {
            // line 20
            echo "\t\t\t<li class=\"icon-";
            if ((isset($context["S_WATCHING_FORUM"]) ? $context["S_WATCHING_FORUM"] : null)) {
                echo "unsubscribe";
            } else {
                echo "subscribe";
            }
            echo "\"><a href=\"";
            echo (isset($context["U_WATCH_FORUM_LINK"]) ? $context["U_WATCH_FORUM_LINK"] : null);
            echo "\" title=\"";
            echo (isset($context["S_WATCH_FORUM_TITLE"]) ? $context["S_WATCH_FORUM_TITLE"] : null);
            echo "\" data-ajax=\"toggle_link\" data-toggle-class=\"small-icon icon-";
            if ((!(isset($context["S_WATCHING_FORUM"]) ? $context["S_WATCHING_FORUM"] : null))) {
                echo "unsubscribe";
            } else {
                echo "subscribe";
            }
            echo "\" data-toggle-text=\"";
            echo (isset($context["S_WATCH_FORUM_TOGGLE"]) ? $context["S_WATCH_FORUM_TOGGLE"] : null);
            echo "\" data-toggle-url=\"";
            echo (isset($context["U_WATCH_FORUM_TOGGLE"]) ? $context["U_WATCH_FORUM_TOGGLE"] : null);
            echo "\">";
            echo (isset($context["S_WATCH_FORUM_TITLE"]) ? $context["S_WATCH_FORUM_TITLE"] : null);
            echo "</a></li>
\t\t";
        }
        // line 22
        echo "\t\t</ul>

\t\t<ul class=\"nav navbar-nav dropup navbar-";
        // line 24
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo "\" role=\"menubar\">
\t\t\t<li>
\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span> ";
        // line 26
        echo $this->env->getExtension('phpbb')->lang("QUICK_LINKS");
        echo "</a>
\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-";
        // line 27
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo "\" role=\"menu\">
\t\t\t\t";
        // line 28
        if ((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null))) {
            // line 29
            echo "\t\t\t\t\t<li><a href=\"";
            echo (isset($context["U_DELETE_COOKIES"]) ? $context["U_DELETE_COOKIES"] : null);
            echo "\" data-ajax=\"true\" data-refresh=\"true\" role=\"menuitem\">";
            echo $this->env->getExtension('phpbb')->lang("DELETE_COOKIES");
            echo "</a></li>
\t\t\t\t";
            // line 30
            if ((isset($context["S_DISPLAY_MEMBERLIST"]) ? $context["S_DISPLAY_MEMBERLIST"] : null)) {
                // line 31
                echo "\t\t\t\t\t<li><a href=\"";
                echo (isset($context["U_MEMBERLIST"]) ? $context["U_MEMBERLIST"] : null);
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("MEMBERLIST_EXPLAIN");
                echo "\" role=\"menuitem\">";
                echo $this->env->getExtension('phpbb')->lang("MEMBERLIST");
                echo "</a></li>
\t\t\t\t";
            }
            // line 33
            echo "\t\t\t\t";
        }
        // line 34
        echo "\t\t\t\t";
        // line 35
        echo "\t\t\t\t";
        if (((isset($context["S_REGISTERED_USER"]) ? $context["S_REGISTERED_USER"] : null) && (isset($context["U_TEAM"]) ? $context["U_TEAM"] : null))) {
            // line 36
            echo "\t\t\t\t\t<li><a href=\"";
            echo (isset($context["U_TEAM"]) ? $context["U_TEAM"] : null);
            echo "\" role=\"menuitem\">";
            echo $this->env->getExtension('phpbb')->lang("THE_TEAM");
            echo "</a></li>
\t\t\t\t";
        }
        // line 38
        echo "\t\t\t\t";
        // line 39
        echo "\t\t\t\t";
        if ((isset($context["U_CONTACT_US"]) ? $context["U_CONTACT_US"] : null)) {
            // line 40
            echo "\t\t\t\t\t<li><a href=\"";
            echo (isset($context["U_CONTACT_US"]) ? $context["U_CONTACT_US"] : null);
            echo "\" role=\"menuitem\">";
            echo $this->env->getExtension('phpbb')->lang("CONTACT_US");
            echo "</a></li>
\t\t\t\t";
        }
        // line 42
        echo "\t\t\t\t</ul>
\t\t\t</li>

\t\t\t";
        // line 45
        // line 46
        echo "\t\t\t<li class=\"navbar-text hidden-xs\">";
        echo (isset($context["S_TIMEZONE"]) ? $context["S_TIMEZONE"] : null);
        echo "</li>
\t\t\t";
        // line 47
        // line 48
        echo "\t\t</ul>
\t</div>
</div>
";
    }

    public function getTemplateName()
    {
        return "navbar_footer.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  167 => 47,  162 => 46,  143 => 38,  135 => 36,  127 => 33,  89 => 22,  61 => 19,  47 => 16,  45 => 15,  212 => 56,  198 => 55,  191 => 52,  176 => 51,  139 => 48,  94 => 29,  90 => 27,  80 => 22,  71 => 21,  63 => 20,  58 => 18,  51 => 15,  41 => 7,  29 => 6,  25 => 4,  130 => 34,  79 => 13,  77 => 12,  74 => 11,  119 => 20,  72 => 13,  37 => 13,  28 => 3,  120 => 34,  98 => 26,  92 => 27,  86 => 26,  69 => 12,  26 => 5,  166 => 37,  148 => 40,  145 => 39,  129 => 45,  126 => 25,  122 => 24,  97 => 19,  93 => 24,  66 => 11,  64 => 13,  50 => 14,  43 => 10,  36 => 5,  33 => 5,  413 => 130,  397 => 121,  391 => 118,  386 => 117,  384 => 116,  375 => 112,  368 => 109,  359 => 105,  352 => 102,  341 => 97,  329 => 93,  321 => 91,  308 => 85,  299 => 83,  295 => 81,  294 => 80,  285 => 78,  274 => 76,  273 => 75,  262 => 73,  239 => 69,  223 => 64,  199 => 60,  196 => 59,  194 => 53,  189 => 57,  187 => 56,  173 => 52,  160 => 49,  157 => 48,  156 => 42,  147 => 46,  141 => 25,  137 => 28,  134 => 39,  125 => 44,  114 => 22,  112 => 35,  109 => 34,  102 => 27,  88 => 29,  68 => 24,  65 => 20,  54 => 20,  49 => 18,  48 => 7,  40 => 15,  24 => 3,  21 => 2,  451 => 122,  448 => 121,  439 => 118,  434 => 116,  429 => 113,  418 => 109,  417 => 132,  404 => 107,  403 => 123,  400 => 105,  396 => 104,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 99,  345 => 90,  337 => 96,  333 => 84,  319 => 90,  291 => 70,  284 => 68,  277 => 77,  259 => 60,  253 => 59,  247 => 71,  237 => 52,  233 => 50,  232 => 49,  227 => 47,  224 => 46,  219 => 62,  216 => 44,  208 => 42,  206 => 41,  203 => 40,  195 => 54,  193 => 37,  188 => 35,  183 => 54,  179 => 32,  177 => 31,  171 => 30,  161 => 45,  155 => 20,  153 => 19,  150 => 18,  132 => 35,  117 => 31,  106 => 28,  95 => 17,  84 => 14,  62 => 10,  35 => 12,  22 => 2,  1491 => 400,  1488 => 399,  1481 => 395,  1467 => 392,  1463 => 390,  1461 => 389,  1458 => 388,  1446 => 387,  1442 => 385,  1441 => 384,  1438 => 383,  1433 => 380,  1425 => 378,  1423 => 377,  1419 => 376,  1415 => 375,  1410 => 374,  1407 => 373,  1394 => 372,  1392 => 371,  1389 => 370,  1387 => 369,  1383 => 367,  1378 => 364,  1363 => 362,  1359 => 361,  1355 => 360,  1350 => 358,  1343 => 357,  1341 => 356,  1338 => 355,  1326 => 354,  1323 => 353,  1322 => 352,  1319 => 351,  1282 => 349,  1280 => 348,  1277 => 347,  1276 => 346,  1272 => 344,  1271 => 343,  1268 => 342,  1263 => 339,  1258 => 337,  1249 => 336,  1241 => 335,  1239 => 334,  1233 => 332,  1231 => 331,  1228 => 330,  1214 => 328,  1212 => 327,  1209 => 326,  1204 => 324,  1196 => 321,  1188 => 315,  1187 => 314,  1184 => 313,  1175 => 312,  1173 => 311,  1167 => 310,  1164 => 309,  1160 => 307,  1151 => 306,  1147 => 305,  1144 => 304,  1140 => 302,  1131 => 301,  1127 => 300,  1124 => 299,  1121 => 298,  1114 => 297,  1113 => 296,  1110 => 295,  1105 => 292,  1096 => 290,  1092 => 289,  1088 => 288,  1083 => 287,  1081 => 286,  1076 => 284,  1073 => 283,  1065 => 280,  1062 => 279,  1060 => 278,  1057 => 277,  1050 => 273,  1046 => 272,  1042 => 271,  1038 => 270,  1034 => 269,  1028 => 267,  1021 => 263,  1017 => 262,  1013 => 261,  1009 => 260,  1005 => 259,  999 => 257,  997 => 256,  992 => 254,  988 => 252,  985 => 251,  980 => 248,  979 => 247,  976 => 246,  964 => 244,  961 => 243,  951 => 241,  948 => 240,  938 => 238,  935 => 237,  925 => 235,  922 => 234,  912 => 232,  909 => 231,  899 => 229,  897 => 228,  894 => 227,  893 => 226,  887 => 224,  884 => 223,  882 => 222,  857 => 220,  846 => 219,  839 => 214,  837 => 213,  831 => 209,  825 => 208,  792 => 204,  782 => 203,  779 => 202,  776 => 201,  772 => 200,  767 => 198,  762 => 195,  759 => 194,  758 => 193,  755 => 192,  753 => 191,  747 => 190,  737 => 188,  734 => 187,  729 => 186,  728 => 185,  725 => 184,  717 => 182,  714 => 181,  712 => 180,  709 => 179,  699 => 178,  689 => 177,  672 => 176,  669 => 175,  659 => 174,  655 => 172,  647 => 171,  644 => 170,  642 => 169,  639 => 168,  626 => 167,  623 => 166,  622 => 165,  619 => 164,  613 => 163,  599 => 162,  595 => 161,  588 => 159,  575 => 157,  571 => 156,  550 => 155,  547 => 154,  542 => 151,  537 => 149,  532 => 148,  527 => 146,  522 => 145,  520 => 144,  514 => 142,  511 => 141,  501 => 139,  498 => 138,  496 => 137,  492 => 136,  489 => 135,  481 => 130,  477 => 129,  473 => 128,  470 => 127,  466 => 125,  458 => 123,  455 => 122,  449 => 120,  447 => 119,  444 => 118,  442 => 117,  436 => 117,  427 => 112,  425 => 111,  422 => 109,  416 => 108,  414 => 107,  410 => 105,  390 => 104,  387 => 103,  385 => 102,  380 => 99,  374 => 101,  367 => 95,  364 => 94,  342 => 93,  338 => 92,  334 => 95,  331 => 94,  327 => 88,  320 => 87,  314 => 89,  309 => 86,  306 => 75,  304 => 83,  300 => 72,  286 => 79,  280 => 76,  272 => 63,  270 => 74,  265 => 68,  258 => 72,  250 => 61,  246 => 70,  241 => 58,  236 => 56,  231 => 55,  229 => 66,  226 => 65,  214 => 52,  211 => 51,  210 => 50,  207 => 61,  170 => 51,  168 => 48,  165 => 45,  164 => 44,  159 => 35,  154 => 33,  146 => 49,  144 => 35,  140 => 41,  136 => 22,  131 => 46,  128 => 31,  115 => 30,  113 => 18,  110 => 34,  108 => 29,  105 => 26,  101 => 24,  96 => 22,  91 => 21,  83 => 19,  81 => 17,  78 => 16,  76 => 23,  73 => 22,  60 => 9,  57 => 17,  55 => 12,  52 => 19,  46 => 8,  44 => 10,  34 => 6,  31 => 11,  19 => 1,);
    }
}
