<?php

/* overall_header.html */
class __TwigTemplate_32b8f5f3915235282cfc9f74cabc1527 extends Twig_Template
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
        return array (  451 => 122,  448 => 121,  439 => 118,  436 => 117,  434 => 116,  429 => 113,  427 => 112,  425 => 111,  418 => 109,  417 => 108,  404 => 107,  403 => 106,  400 => 105,  396 => 104,  387 => 103,  385 => 102,  374 => 101,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 91,  345 => 90,  337 => 85,  333 => 84,  319 => 83,  314 => 80,  306 => 75,  300 => 72,  291 => 70,  284 => 68,  270 => 62,  259 => 60,  253 => 59,  247 => 55,  237 => 52,  232 => 49,  227 => 47,  224 => 46,  219 => 45,  208 => 42,  206 => 41,  203 => 40,  195 => 38,  193 => 37,  179 => 32,  177 => 31,  171 => 30,  161 => 22,  155 => 20,  153 => 19,  150 => 18,  132 => 16,  117 => 15,  106 => 14,  84 => 12,  73 => 11,  60 => 9,  35 => 7,  22 => 2,  277 => 64,  272 => 63,  255 => 86,  246 => 54,  240 => 77,  233 => 50,  231 => 71,  220 => 63,  216 => 44,  212 => 61,  207 => 58,  204 => 57,  190 => 56,  188 => 35,  183 => 34,  175 => 48,  169 => 46,  167 => 45,  162 => 42,  159 => 41,  156 => 40,  142 => 39,  138 => 38,  135 => 37,  130 => 34,  122 => 32,  119 => 31,  111 => 29,  109 => 28,  104 => 25,  102 => 24,  95 => 13,  88 => 21,  78 => 18,  71 => 17,  68 => 16,  62 => 10,  50 => 10,  34 => 3,  31 => 6,  19 => 1,);
    }
}
