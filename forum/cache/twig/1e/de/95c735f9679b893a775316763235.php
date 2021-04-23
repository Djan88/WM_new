<?php

/* navbar_footer.html */
class __TwigTemplate_1ede95c735f9679b893a775316763235 extends Twig_Template
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
        return array (  168 => 48,  143 => 38,  127 => 33,  115 => 30,  98 => 26,  89 => 22,  61 => 19,  47 => 16,  45 => 15,  37 => 13,  198 => 55,  191 => 52,  176 => 51,  139 => 48,  131 => 46,  110 => 34,  94 => 29,  90 => 27,  86 => 26,  80 => 22,  63 => 20,  58 => 18,  51 => 15,  41 => 7,  29 => 6,  26 => 5,  25 => 4,  166 => 37,  154 => 33,  148 => 40,  145 => 39,  129 => 45,  126 => 25,  108 => 29,  97 => 19,  93 => 24,  66 => 14,  64 => 13,  46 => 11,  43 => 10,  36 => 6,  33 => 5,  413 => 130,  397 => 121,  391 => 118,  386 => 117,  384 => 116,  375 => 112,  368 => 109,  359 => 105,  352 => 102,  341 => 97,  334 => 95,  331 => 94,  329 => 93,  321 => 91,  309 => 86,  308 => 85,  299 => 83,  295 => 81,  294 => 80,  285 => 78,  274 => 76,  273 => 75,  262 => 73,  258 => 72,  239 => 69,  229 => 66,  226 => 65,  223 => 64,  199 => 60,  196 => 59,  194 => 53,  189 => 57,  187 => 56,  173 => 52,  170 => 51,  160 => 49,  157 => 48,  147 => 46,  146 => 49,  141 => 42,  140 => 41,  137 => 28,  134 => 39,  125 => 44,  114 => 22,  112 => 35,  81 => 17,  76 => 26,  65 => 20,  57 => 17,  54 => 20,  52 => 19,  49 => 18,  48 => 17,  44 => 16,  40 => 15,  24 => 2,  21 => 2,  451 => 122,  448 => 121,  439 => 118,  436 => 117,  434 => 116,  429 => 113,  427 => 112,  425 => 111,  418 => 109,  417 => 132,  404 => 107,  403 => 123,  400 => 105,  396 => 104,  387 => 103,  385 => 102,  374 => 101,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 99,  345 => 90,  337 => 96,  333 => 84,  319 => 90,  314 => 89,  306 => 75,  300 => 72,  291 => 70,  284 => 68,  270 => 74,  259 => 60,  253 => 59,  247 => 71,  237 => 52,  232 => 49,  227 => 47,  224 => 46,  219 => 62,  208 => 42,  206 => 41,  203 => 40,  195 => 54,  193 => 37,  179 => 32,  177 => 31,  171 => 30,  161 => 45,  155 => 20,  153 => 19,  150 => 18,  132 => 35,  117 => 31,  106 => 28,  84 => 12,  73 => 11,  60 => 9,  35 => 12,  22 => 2,  277 => 77,  272 => 63,  255 => 86,  246 => 70,  240 => 77,  233 => 50,  231 => 71,  220 => 63,  216 => 44,  212 => 56,  207 => 61,  204 => 57,  190 => 56,  188 => 35,  183 => 54,  175 => 48,  169 => 46,  167 => 47,  162 => 46,  159 => 35,  156 => 42,  142 => 39,  138 => 38,  135 => 36,  130 => 34,  122 => 24,  119 => 31,  111 => 29,  109 => 34,  104 => 25,  102 => 27,  95 => 30,  88 => 29,  78 => 16,  71 => 21,  68 => 24,  62 => 10,  50 => 14,  34 => 14,  31 => 11,  19 => 1,);
    }
}
