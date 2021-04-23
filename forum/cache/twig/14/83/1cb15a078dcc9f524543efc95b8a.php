<?php

/* overall_header.html */
class __TwigTemplate_14831cb15a078dcc9f524543efc95b8a extends Twig_Template
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
        echo "<!DOCTYPE html>
<html dir=\"";
        // line 2
        echo (isset($context["S_CONTENT_DIRECTION"]) ? $context["S_CONTENT_DIRECTION"] : null);
        echo "\" lang=\"";
        echo (isset($context["S_USER_LANG"]) ? $context["S_USER_LANG"] : null);
        echo "\">
<head>
<meta charset=\"utf-8\">
<meta name=\"viewport\" content=\"width=device-width\" />
";
        // line 6
        echo (isset($context["META"]) ? $context["META"] : null);
        echo "
<title>";
        // line 7
        if ((isset($context["UNREAD_NOTIFICATIONS_COUNT"]) ? $context["UNREAD_NOTIFICATIONS_COUNT"] : null)) {
            echo "(";
            echo (isset($context["UNREAD_NOTIFICATIONS_COUNT"]) ? $context["UNREAD_NOTIFICATIONS_COUNT"] : null);
            echo ") ";
        }
        if (((!(isset($context["S_VIEWTOPIC"]) ? $context["S_VIEWTOPIC"] : null)) && (!(isset($context["S_VIEWFORUM"]) ? $context["S_VIEWFORUM"] : null)))) {
            echo (isset($context["SITENAME"]) ? $context["SITENAME"] : null);
            echo " - ";
        }
        if ((isset($context["S_IN_MCP"]) ? $context["S_IN_MCP"] : null)) {
            echo $this->env->getExtension('phpbb')->lang("MCP");
            echo " - ";
        } elseif ((isset($context["S_IN_UCP"]) ? $context["S_IN_UCP"] : null)) {
            echo $this->env->getExtension('phpbb')->lang("UCP");
            echo " - ";
        }
        echo (isset($context["PAGE_TITLE"]) ? $context["PAGE_TITLE"] : null);
        if (((isset($context["S_VIEWTOPIC"]) ? $context["S_VIEWTOPIC"] : null) || (isset($context["S_VIEWFORUM"]) ? $context["S_VIEWFORUM"] : null))) {
            echo " - ";
            echo (isset($context["SITENAME"]) ? $context["SITENAME"] : null);
        }
        echo "</title>

";
        // line 9
        if ((isset($context["S_ENABLE_FEEDS"]) ? $context["S_ENABLE_FEEDS"] : null)) {
            // line 10
            echo "\t";
            if ((isset($context["S_ENABLE_FEEDS_OVERALL"]) ? $context["S_ENABLE_FEEDS_OVERALL"] : null)) {
                echo "<link rel=\"alternate\" type=\"application/atom+xml\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("FEED");
                echo " - ";
                echo (isset($context["SITENAME"]) ? $context["SITENAME"] : null);
                echo "\" href=\"";
                echo (isset($context["U_FEED"]) ? $context["U_FEED"] : null);
                echo "\" />";
            }
            // line 11
            echo "\t";
            if ((isset($context["S_ENABLE_FEEDS_NEWS"]) ? $context["S_ENABLE_FEEDS_NEWS"] : null)) {
                echo "<link rel=\"alternate\" type=\"application/atom+xml\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("FEED");
                echo " - ";
                echo $this->env->getExtension('phpbb')->lang("FEED_NEWS");
                echo "\" href=\"";
                echo (isset($context["U_FEED"]) ? $context["U_FEED"] : null);
                echo "?mode=news\" />";
            }
            // line 12
            echo "\t";
            if ((isset($context["S_ENABLE_FEEDS_FORUMS"]) ? $context["S_ENABLE_FEEDS_FORUMS"] : null)) {
                echo "<link rel=\"alternate\" type=\"application/atom+xml\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("FEED");
                echo " - ";
                echo $this->env->getExtension('phpbb')->lang("ALL_FORUMS");
                echo "\" href=\"";
                echo (isset($context["U_FEED"]) ? $context["U_FEED"] : null);
                echo "?mode=forums\" />";
            }
            // line 13
            echo "\t";
            if ((isset($context["S_ENABLE_FEEDS_TOPICS"]) ? $context["S_ENABLE_FEEDS_TOPICS"] : null)) {
                echo "<link rel=\"alternate\" type=\"application/atom+xml\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("FEED");
                echo " - ";
                echo $this->env->getExtension('phpbb')->lang("FEED_TOPICS_NEW");
                echo "\" href=\"";
                echo (isset($context["U_FEED"]) ? $context["U_FEED"] : null);
                echo "?mode=topics\" />";
            }
            // line 14
            echo "\t";
            if ((isset($context["S_ENABLE_FEEDS_TOPICS_ACTIVE"]) ? $context["S_ENABLE_FEEDS_TOPICS_ACTIVE"] : null)) {
                echo "<link rel=\"alternate\" type=\"application/atom+xml\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("FEED");
                echo " - ";
                echo $this->env->getExtension('phpbb')->lang("FEED_TOPICS_ACTIVE");
                echo "\" href=\"";
                echo (isset($context["U_FEED"]) ? $context["U_FEED"] : null);
                echo "?mode=topics_active\" />";
            }
            // line 15
            echo "\t";
            if (((isset($context["S_ENABLE_FEEDS_FORUM"]) ? $context["S_ENABLE_FEEDS_FORUM"] : null) && (isset($context["S_FORUM_ID"]) ? $context["S_FORUM_ID"] : null))) {
                echo "<link rel=\"alternate\" type=\"application/atom+xml\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("FEED");
                echo " - ";
                echo $this->env->getExtension('phpbb')->lang("FORUM");
                echo " - ";
                echo (isset($context["FORUM_NAME"]) ? $context["FORUM_NAME"] : null);
                echo "\" href=\"";
                echo (isset($context["U_FEED"]) ? $context["U_FEED"] : null);
                echo "?f=";
                echo (isset($context["S_FORUM_ID"]) ? $context["S_FORUM_ID"] : null);
                echo "\" />";
            }
            // line 16
            echo "\t";
            if (((isset($context["S_ENABLE_FEEDS_TOPIC"]) ? $context["S_ENABLE_FEEDS_TOPIC"] : null) && (isset($context["S_TOPIC_ID"]) ? $context["S_TOPIC_ID"] : null))) {
                echo "<link rel=\"alternate\" type=\"application/atom+xml\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("FEED");
                echo " - ";
                echo $this->env->getExtension('phpbb')->lang("TOPIC");
                echo " - ";
                echo (isset($context["TOPIC_TITLE"]) ? $context["TOPIC_TITLE"] : null);
                echo "\" href=\"";
                echo (isset($context["U_FEED"]) ? $context["U_FEED"] : null);
                echo "?f=";
                echo (isset($context["S_FORUM_ID"]) ? $context["S_FORUM_ID"] : null);
                echo "&amp;t=";
                echo (isset($context["S_TOPIC_ID"]) ? $context["S_TOPIC_ID"] : null);
                echo "\" />";
            }
        }
        // line 18
        echo "
";
        // line 19
        if ((isset($context["U_CANONICAL"]) ? $context["U_CANONICAL"] : null)) {
            // line 20
            echo "\t<link rel=\"canonical\" href=\"";
            echo (isset($context["U_CANONICAL"]) ? $context["U_CANONICAL"] : null);
            echo "\" />
";
        }
        // line 22
        echo "
<!--
\tphpBB style name: bootlike
\tBased on style:   prosilver (this is the default phpBB3 style)
\tOriginal author:  Tom Beddard ( http://www.subBlue.com/ )
\tModified by:\t  pit
-->

<link href=\"";
        // line 30
        echo (isset($context["T_THEME_PATH"]) ? $context["T_THEME_PATH"] : null);
        echo "/print.css?assets_version=";
        echo (isset($context["T_ASSETS_VERSION"]) ? $context["T_ASSETS_VERSION"] : null);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"print\" title=\"printonly\" />
";
        // line 31
        if ((isset($context["S_ALLOW_CDN"]) ? $context["S_ALLOW_CDN"] : null)) {
            // line 32
            echo "<link href=\"//fonts.googleapis.com/css?family=Open+Sans:600&amp;subset=latin,cyrillic-ext,latin-ext,cyrillic,greek-ext,greek,vietnamese\" rel=\"stylesheet\" type=\"text/css\" media=\"screen, projection\" />
";
        }
        // line 34
        echo "<link href=\"";
        echo (isset($context["T_STYLESHEET_LINK"]) ? $context["T_STYLESHEET_LINK"] : null);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"screen, projection\" />
<link href=\"";
        // line 35
        echo (isset($context["T_THEME_PATH"]) ? $context["T_THEME_PATH"] : null);
        echo "/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\" media=\"screen, projection\" />

";
        // line 37
        if (((isset($context["S_CONTENT_DIRECTION"]) ? $context["S_CONTENT_DIRECTION"] : null) == "rtl")) {
            // line 38
            echo "<link href=\"";
            echo (isset($context["T_THEME_PATH"]) ? $context["T_THEME_PATH"] : null);
            echo "/bidi.css?assets_version=";
            echo (isset($context["T_ASSETS_VERSION"]) ? $context["T_ASSETS_VERSION"] : null);
            echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"screen, projection\" />
";
        }
        // line 40
        echo "
";
        // line 41
        if ((isset($context["S_PLUPLOAD"]) ? $context["S_PLUPLOAD"] : null)) {
            // line 42
            echo "<link href=\"";
            echo (isset($context["T_THEME_PATH"]) ? $context["T_THEME_PATH"] : null);
            echo "/plupload.css?assets_version=";
            echo (isset($context["T_ASSETS_VERSION"]) ? $context["T_ASSETS_VERSION"] : null);
            echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"screen, projection\" />
";
        }
        // line 44
        echo "
";
        // line 45
        $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
        $this->env->setNamespaceLookUpOrder(array('derky_sortablescaptcha', '__main__'));
        $this->env->loadTemplate('@derky_sortablescaptcha/event/overall_header_head_append.html')->display($context);
        $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        // line 46
        echo "
";
        // line 47
        echo $this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "STYLESHEETS");
        echo "

";
        // line 49
        // line 50
        echo "
</head>
<body id=\"phpbb\" class=\"nojs notouch section-";
        // line 52
        echo (isset($context["SCRIPT_NAME"]) ? $context["SCRIPT_NAME"] : null);
        echo " ";
        echo (isset($context["S_CONTENT_DIRECTION"]) ? $context["S_CONTENT_DIRECTION"] : null);
        echo " ";
        echo (isset($context["BODY_CLASS"]) ? $context["BODY_CLASS"] : null);
        echo "\">

";
        // line 54
        // line 55
        echo "<div id=\"page-header\">
<a id=\"top\" class=\"hide\" accesskey=\"t\"></a>

<div class=\"top-bar clearfix\">
\t<h1 class=\"site-name pull-";
        // line 59
        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
        echo " text-muted hidden-xs\">";
        echo (isset($context["SITENAME"]) ? $context["SITENAME"] : null);
        echo "</h1>
\t<h1 class=\"site-name text-center visible-xs\"><a href=\"";
        // line 60
        if ((isset($context["U_SITE_HOME"]) ? $context["U_SITE_HOME"] : null)) {
            echo (isset($context["U_SITE_HOME"]) ? $context["U_SITE_HOME"] : null);
        } else {
            echo (isset($context["U_INDEX"]) ? $context["U_INDEX"] : null);
        }
        echo "\">";
        echo (isset($context["SITENAME"]) ? $context["SITENAME"] : null);
        echo "</a></h1>

\t";
        // line 62
        if (((isset($context["S_DISPLAY_SEARCH"]) ? $context["S_DISPLAY_SEARCH"] : null) && (!(isset($context["S_IN_SEARCH"]) ? $context["S_IN_SEARCH"] : null)))) {
            // line 63
            echo "\t<form action=\"";
            echo (isset($context["U_SEARCH"]) ? $context["U_SEARCH"] : null);
            echo "\" method=\"get\" id=\"search\">
\t\t<div id=\"search-box\" class=\"pull-";
            // line 64
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo " hidden-xs\">
\t\t\t<fieldset class=\"form-inline\">
\t\t\t<div class=\"input-group\">
\t\t\t\t<div class=\"input-group-btn\">
\t\t\t\t\t<a href=\"";
            // line 68
            echo (isset($context["U_SEARCH"]) ? $context["U_SEARCH"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("SEARCH_ADV");
            echo "\" class=\"btn btn-default\"><i class=\"fa fa-gear fa-fw\"></i></a>
\t\t\t\t</div>
\t\t\t\t<input name=\"keywords\" id=\"keywords\" type=\"search\" maxlength=\"128\" title=\"";
            // line 70
            echo $this->env->getExtension('phpbb')->lang("SEARCH_KEYWORDS");
            echo "\" size=\"20\" value=\"";
            echo (isset($context["SEARCH_WORDS"]) ? $context["SEARCH_WORDS"] : null);
            echo "\" placeholder=\"";
            echo $this->env->getExtension('phpbb')->lang("SEARCH_MINI");
            echo "\" class=\"form-control\" />
\t\t\t\t<div class=\"input-group-btn\">
\t\t\t\t\t<button type=\"submit\" title=\"";
            // line 72
            echo $this->env->getExtension('phpbb')->lang("SEARCH");
            echo "\" class=\"btn btn-default\"><i class=\"fa fa-search fa-fw\"></i></button>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t";
            // line 75
            echo (isset($context["S_SEARCH_HIDDEN_FIELDS"]) ? $context["S_SEARCH_HIDDEN_FIELDS"] : null);
            echo "
\t\t\t</fieldset>
\t\t</div>
\t</form>
\t";
        }
        // line 80
        echo "</div>

<div class=\"page-header text-center hidden-xs\">
\t<a id=\"logo\" href=\"";
        // line 83
        if ((isset($context["U_SITE_HOME"]) ? $context["U_SITE_HOME"] : null)) {
            echo (isset($context["U_SITE_HOME"]) ? $context["U_SITE_HOME"] : null);
        } else {
            echo (isset($context["U_INDEX"]) ? $context["U_INDEX"] : null);
        }
        echo "\" title=\"";
        if ((isset($context["U_SITE_HOME"]) ? $context["U_SITE_HOME"] : null)) {
            echo $this->env->getExtension('phpbb')->lang("SITE_HOME");
        } else {
            echo $this->env->getExtension('phpbb')->lang("INDEX");
        }
        echo "\"></a>
\t<div>";
        // line 84
        echo (isset($context["SITE_DESCRIPTION"]) ? $context["SITE_DESCRIPTION"] : null);
        echo "</div>
\t<p class=\"hide\"><a href=\"#start_here\">";
        // line 85
        echo $this->env->getExtension('phpbb')->lang("SKIP");
        echo "</a></p>
</div>

</div>

";
        // line 90
        // line 91
        echo "
<div id=\"wrap\" class=\"container\">
\t<a id=\"start_here\" class=\"anchor\"></a>
\t<div class=\"row\">
\t
\t";
        // line 96
        $location = "navbar_header.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("navbar_header.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 97
        echo "
\t<ul id=\"nav-breadcrumbs\" class=\"breadcrumb\" role=\"menubar\">
\t";
        // line 99
        $value = " itemtype=\"http://data-vocabulary.org/Breadcrumb\" itemscope=\"\"";
        $context['definition']->set('MICRODATA', $value);
        // line 100
        echo "\t";
        // line 101
        echo "\t";
        if ((isset($context["U_SITE_HOME"]) ? $context["U_SITE_HOME"] : null)) {
            echo "<li><a href=\"";
            echo (isset($context["U_SITE_HOME"]) ? $context["U_SITE_HOME"] : null);
            echo "\"";
            echo $this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "MICRODATA");
            echo " data-navbar-reference=\"home\">";
            echo $this->env->getExtension('phpbb')->lang("SITE_HOME");
            echo "</a></li>";
        }
        // line 102
        echo "\t";
        // line 103
        echo "\t<li><a href=\"";
        echo (isset($context["U_INDEX"]) ? $context["U_INDEX"] : null);
        echo "\" accesskey=\"h\"";
        echo $this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "MICRODATA");
        echo " data-navbar-reference=\"index\">";
        echo $this->env->getExtension('phpbb')->lang("INDEX");
        echo "</a></li>
\t";
        // line 104
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "navlinks"));
        foreach ($context['_seq'] as $context["_key"] => $context["navlinks"]) {
            // line 105
            echo "\t\t<li>
\t\t\t";
            // line 106
            // line 107
            echo "\t\t\t<a href=\"";
            echo $this->getAttribute((isset($context["navlinks"]) ? $context["navlinks"] : null), "U_VIEW_FORUM");
            echo "\"";
            echo $this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "MICRODATA");
            if ($this->getAttribute((isset($context["navlinks"]) ? $context["navlinks"] : null), "MICRODATA")) {
                echo " ";
                echo $this->getAttribute((isset($context["navlinks"]) ? $context["navlinks"] : null), "MICRODATA");
            }
            echo ">";
            echo $this->getAttribute((isset($context["navlinks"]) ? $context["navlinks"] : null), "FORUM_NAME");
            echo "</a>
\t\t\t";
            // line 108
            // line 109
            echo "\t\t</li>
\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['navlinks'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 111
        echo "\t";
        // line 112
        echo "\t";
        // line 113
        echo "\t</ul>

\t<div id=\"page-body\">
\t\t";
        // line 116
        if ((((isset($context["S_BOARD_DISABLED"]) ? $context["S_BOARD_DISABLED"] : null) && (isset($context["S_USER_LOGGED_IN"]) ? $context["S_USER_LOGGED_IN"] : null)) && ((isset($context["U_MCP"]) ? $context["U_MCP"] : null) || (isset($context["U_ACP"]) ? $context["U_ACP"] : null)))) {
            // line 117
            echo "\t\t<div id=\"information\" class=\"alert alert-warning\">
\t\t\t<strong>";
            // line 118
            echo $this->env->getExtension('phpbb')->lang("INFORMATION");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</strong> ";
            echo $this->env->getExtension('phpbb')->lang("BOARD_DISABLED");
            echo "
\t\t</div>
\t\t";
        }
        // line 121
        echo "
\t\t";
        // line 122
    }

    public function getTemplateName()
    {
        return "overall_header.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  451 => 122,  448 => 121,  439 => 118,  434 => 116,  429 => 113,  418 => 109,  417 => 108,  404 => 107,  403 => 106,  400 => 105,  396 => 104,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 91,  345 => 90,  337 => 85,  333 => 84,  319 => 83,  291 => 70,  284 => 68,  277 => 64,  259 => 60,  253 => 59,  247 => 55,  237 => 52,  233 => 50,  232 => 49,  227 => 47,  224 => 46,  219 => 45,  216 => 44,  208 => 42,  206 => 41,  203 => 40,  195 => 38,  193 => 37,  188 => 35,  183 => 34,  179 => 32,  177 => 31,  171 => 30,  161 => 22,  155 => 20,  153 => 19,  150 => 18,  132 => 16,  117 => 15,  106 => 14,  95 => 13,  84 => 12,  62 => 10,  35 => 7,  22 => 2,  1491 => 400,  1488 => 399,  1481 => 395,  1467 => 392,  1463 => 390,  1461 => 389,  1458 => 388,  1446 => 387,  1442 => 385,  1441 => 384,  1438 => 383,  1433 => 380,  1425 => 378,  1423 => 377,  1419 => 376,  1415 => 375,  1410 => 374,  1407 => 373,  1394 => 372,  1392 => 371,  1389 => 370,  1387 => 369,  1383 => 367,  1378 => 364,  1363 => 362,  1359 => 361,  1355 => 360,  1350 => 358,  1343 => 357,  1341 => 356,  1338 => 355,  1326 => 354,  1323 => 353,  1322 => 352,  1319 => 351,  1282 => 349,  1280 => 348,  1277 => 347,  1276 => 346,  1272 => 344,  1271 => 343,  1268 => 342,  1263 => 339,  1258 => 337,  1249 => 336,  1241 => 335,  1239 => 334,  1233 => 332,  1231 => 331,  1228 => 330,  1214 => 328,  1212 => 327,  1209 => 326,  1204 => 324,  1196 => 321,  1188 => 315,  1187 => 314,  1184 => 313,  1175 => 312,  1173 => 311,  1167 => 310,  1164 => 309,  1160 => 307,  1151 => 306,  1147 => 305,  1144 => 304,  1140 => 302,  1131 => 301,  1127 => 300,  1124 => 299,  1121 => 298,  1114 => 297,  1113 => 296,  1110 => 295,  1105 => 292,  1096 => 290,  1092 => 289,  1088 => 288,  1083 => 287,  1081 => 286,  1076 => 284,  1073 => 283,  1065 => 280,  1062 => 279,  1060 => 278,  1057 => 277,  1050 => 273,  1046 => 272,  1042 => 271,  1038 => 270,  1034 => 269,  1028 => 267,  1021 => 263,  1017 => 262,  1013 => 261,  1009 => 260,  1005 => 259,  999 => 257,  997 => 256,  992 => 254,  988 => 252,  985 => 251,  980 => 248,  979 => 247,  976 => 246,  964 => 244,  961 => 243,  951 => 241,  948 => 240,  938 => 238,  935 => 237,  925 => 235,  922 => 234,  912 => 232,  909 => 231,  899 => 229,  897 => 228,  894 => 227,  893 => 226,  887 => 224,  884 => 223,  882 => 222,  857 => 220,  846 => 219,  839 => 214,  837 => 213,  831 => 209,  825 => 208,  792 => 204,  782 => 203,  779 => 202,  776 => 201,  772 => 200,  767 => 198,  762 => 195,  759 => 194,  758 => 193,  755 => 192,  753 => 191,  747 => 190,  737 => 188,  734 => 187,  729 => 186,  728 => 185,  725 => 184,  717 => 182,  714 => 181,  712 => 180,  709 => 179,  699 => 178,  689 => 177,  672 => 176,  669 => 175,  659 => 174,  655 => 172,  647 => 171,  644 => 170,  642 => 169,  639 => 168,  626 => 167,  623 => 166,  622 => 165,  619 => 164,  613 => 163,  599 => 162,  595 => 161,  588 => 159,  575 => 157,  571 => 156,  550 => 155,  547 => 154,  542 => 151,  537 => 149,  532 => 148,  527 => 146,  522 => 145,  520 => 144,  514 => 142,  511 => 141,  501 => 139,  498 => 138,  496 => 137,  492 => 136,  489 => 135,  481 => 130,  477 => 129,  473 => 128,  470 => 127,  466 => 125,  458 => 123,  455 => 122,  449 => 120,  447 => 119,  444 => 118,  442 => 117,  436 => 117,  427 => 112,  425 => 111,  422 => 109,  416 => 108,  414 => 107,  410 => 105,  390 => 104,  387 => 103,  385 => 102,  380 => 99,  374 => 101,  367 => 95,  364 => 94,  342 => 93,  338 => 92,  334 => 91,  331 => 90,  327 => 88,  320 => 87,  314 => 80,  309 => 85,  306 => 75,  304 => 83,  300 => 72,  286 => 79,  280 => 76,  272 => 63,  270 => 62,  265 => 68,  258 => 64,  250 => 61,  246 => 54,  241 => 58,  236 => 56,  231 => 55,  229 => 54,  226 => 53,  214 => 52,  211 => 51,  210 => 50,  207 => 49,  170 => 47,  168 => 46,  165 => 45,  164 => 44,  159 => 41,  154 => 38,  146 => 36,  144 => 35,  140 => 34,  136 => 33,  131 => 32,  128 => 31,  115 => 30,  113 => 29,  110 => 28,  108 => 27,  105 => 26,  101 => 24,  96 => 22,  91 => 21,  83 => 19,  81 => 18,  78 => 17,  76 => 16,  73 => 11,  60 => 9,  57 => 11,  55 => 10,  52 => 9,  46 => 7,  44 => 6,  34 => 3,  31 => 6,  19 => 1,);
    }
}
