<?php

/* notification_dropdown.html */
class __TwigTemplate_5ba99aa1d80f3e43a5ebf79a48bbb9ca extends Twig_Template
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
        echo "<ul id=\"notification_list\" class=\"dropdown-menu dropdown-menu-";
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo " dropdown-contents\">
\t<li><a href=\"";
        // line 2
        echo (isset($context["U_NOTIFICATION_SETTINGS"]) ? $context["U_NOTIFICATION_SETTINGS"] : null);
        echo "\">";
        echo $this->env->getExtension('phpbb')->lang("SETTINGS");
        echo "</a></li>
\t<li class=\"divider\"></li>
\t";
        // line 4
        if ((!twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "notifications")))) {
            // line 5
            echo "\t\t<li style=\"padding: 5px 20px;\">
\t\t\t";
            // line 6
            echo $this->env->getExtension('phpbb')->lang("NO_NOTIFICATIONS");
            echo "
\t\t</li>
\t\t<li class=\"divider\"></li>
\t";
        }
        // line 10
        echo "
\t";
        // line 11
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "notifications"));
        foreach ($context['_seq'] as $context["_key"] => $context["notifications"]) {
            // line 12
            echo "\t<li class=\"notification-block";
            if ($this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "UNREAD")) {
                echo " bg-info";
            }
            if ($this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "STYLING")) {
                echo " ";
                echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "STYLING");
            }
            if ((!$this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "URL"))) {
                echo " no-url";
            }
            echo "\">
\t\t";
            // line 13
            if ($this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "URL")) {
                // line 14
                echo "\t\t\t<a href=\"";
                if ($this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "UNREAD")) {
                    echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "U_MARK_READ");
                    echo "\" data-real-url=\"";
                    echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "URL");
                } else {
                    echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "URL");
                }
                echo "\">
\t\t";
            }
            // line 16
            echo "\t\t\t<div class=\"notification-text\">
\t\t\t\t<span class=\"pull-";
            // line 17
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">";
            if ($this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "AVATAR")) {
                echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "AVATAR");
            } else {
                echo "<img src=\"";
                echo (isset($context["T_THEME_PATH"]) ? $context["T_THEME_PATH"] : null);
                echo "/images/no_avatar.gif\" alt=\"\" class=\"img-thumbnail\" />";
            }
            echo "</span>
\t\t\t\t";
            // line 18
            echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "FORMATTED_TITLE");
            echo "<br />
\t\t\t\t";
            // line 19
            if ($this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "REFERENCE")) {
                echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "REFERENCE");
                echo "<br />";
            }
            // line 20
            echo "\t\t\t\t";
            if ($this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "FORUM")) {
                echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "FORUM");
                echo "<br />";
            }
            // line 21
            echo "\t\t\t\t";
            if ($this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "REASON")) {
                echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "REASON");
                echo "<br />";
            }
            // line 22
            echo "\t\t\t\t<div class=\"small text-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">";
            echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "TIME");
            echo "</div>
\t\t\t</div>
\t\t";
            // line 24
            if ($this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "URL")) {
                echo "</a>";
            }
            // line 25
            echo "\t\t";
            if ($this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "UNREAD")) {
                // line 26
                echo "\t\t\t<a href=\"";
                echo $this->getAttribute((isset($context["notifications"]) ? $context["notifications"] : null), "U_MARK_READ");
                echo "\" class=\"mark_read icon-mark\" data-ajax=\"notification.mark_read\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("MARK_READ");
                echo "\"><i class=\"fa fa-check fa-2x\"></i></a>
\t\t";
            }
            // line 28
            echo "\t</li>
\t<li class=\"divider\"></li>
\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['notifications'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 31
        echo "
\t<li><a href=\"";
        // line 32
        echo (isset($context["U_VIEW_ALL_NOTIFICATIONS"]) ? $context["U_VIEW_ALL_NOTIFICATIONS"] : null);
        echo "\">";
        echo $this->env->getExtension('phpbb')->lang("SEE_ALL");
        echo "</a></li>
\t";
        // line 33
        if ((isset($context["NOTIFICATIONS_COUNT"]) ? $context["NOTIFICATIONS_COUNT"] : null)) {
            // line 34
            echo "\t<li class=\"divider\"></li>
\t<li id=\"mark_all_notifications\"><a href=\"";
            // line 35
            echo (isset($context["U_MARK_ALL_NOTIFICATIONS"]) ? $context["U_MARK_ALL_NOTIFICATIONS"] : null);
            echo "\" data-ajax=\"notification.mark_all_read\">";
            echo $this->env->getExtension('phpbb')->lang("MARK_ALL_READ");
            echo "</a></li>
\t";
        }
        // line 37
        echo "</ul>
";
    }

    public function getTemplateName()
    {
        return "notification_dropdown.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  166 => 37,  154 => 33,  148 => 32,  145 => 31,  129 => 26,  126 => 25,  108 => 21,  97 => 19,  93 => 18,  66 => 14,  64 => 13,  46 => 11,  43 => 10,  36 => 6,  33 => 5,  413 => 130,  397 => 121,  391 => 118,  386 => 117,  384 => 116,  375 => 112,  368 => 109,  359 => 105,  352 => 102,  341 => 97,  334 => 95,  331 => 94,  329 => 93,  321 => 91,  309 => 86,  308 => 85,  299 => 83,  295 => 81,  294 => 80,  285 => 78,  274 => 76,  273 => 75,  262 => 73,  258 => 72,  239 => 69,  229 => 66,  226 => 65,  223 => 64,  199 => 60,  196 => 59,  194 => 58,  189 => 57,  187 => 56,  173 => 52,  170 => 51,  160 => 49,  157 => 48,  147 => 46,  146 => 45,  141 => 42,  140 => 41,  137 => 28,  134 => 39,  125 => 38,  114 => 22,  112 => 35,  81 => 17,  76 => 26,  65 => 23,  57 => 21,  54 => 20,  52 => 19,  49 => 18,  48 => 17,  44 => 16,  40 => 15,  24 => 2,  21 => 2,  451 => 122,  448 => 121,  439 => 118,  436 => 117,  434 => 116,  429 => 113,  427 => 112,  425 => 111,  418 => 109,  417 => 132,  404 => 107,  403 => 123,  400 => 105,  396 => 104,  387 => 103,  385 => 102,  374 => 101,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 99,  345 => 90,  337 => 96,  333 => 84,  319 => 90,  314 => 89,  306 => 75,  300 => 72,  291 => 70,  284 => 68,  270 => 74,  259 => 60,  253 => 59,  247 => 71,  237 => 52,  232 => 49,  227 => 47,  224 => 46,  219 => 62,  208 => 42,  206 => 41,  203 => 40,  195 => 38,  193 => 37,  179 => 32,  177 => 31,  171 => 30,  161 => 22,  155 => 20,  153 => 19,  150 => 18,  132 => 16,  117 => 37,  106 => 14,  84 => 12,  73 => 11,  60 => 9,  35 => 7,  22 => 2,  277 => 77,  272 => 63,  255 => 86,  246 => 70,  240 => 77,  233 => 50,  231 => 71,  220 => 63,  216 => 44,  212 => 61,  207 => 61,  204 => 57,  190 => 56,  188 => 35,  183 => 54,  175 => 48,  169 => 46,  167 => 45,  162 => 42,  159 => 35,  156 => 34,  142 => 39,  138 => 38,  135 => 37,  130 => 34,  122 => 24,  119 => 31,  111 => 29,  109 => 34,  104 => 25,  102 => 20,  95 => 30,  88 => 29,  78 => 16,  71 => 17,  68 => 24,  62 => 10,  50 => 12,  34 => 14,  31 => 4,  19 => 1,);
    }
}
