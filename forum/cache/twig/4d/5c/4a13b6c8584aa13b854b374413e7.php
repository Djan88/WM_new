<?php

/* navbar_header.html */
class __TwigTemplate_4d5c4a13b6c8584aa13b854b374413e7 extends Twig_Template
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
\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-header\">
\t\t<span class=\"icon-bar\"></span>
\t\t<span class=\"icon-bar\"></span>
\t\t<span class=\"icon-bar\"></span>
\t\t</button>
\t</div>

\t<div class=\"collapse navbar-collapse\" id=\"navbar-collapse-header\">

\t<ul id=\"nav-main\" class=\"nav navbar-nav\" role=\"menubar\">

\t\t<li id=\"quick-links\"";
        // line 14
        if (((!(isset($context["S_DISPLAY_QUICK_LINKS"]) ? $context["S_DISPLAY_QUICK_LINKS"] : null)) && (!(isset($context["S_DISPLAY_SEARCH"]) ? $context["S_DISPLAY_SEARCH"] : null)))) {
            echo " class=\"hiden\"";
        }
        echo ">
\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span> ";
        // line 15
        echo $this->env->getExtension('phpbb')->lang("QUICK_LINKS");
        echo "</a>
\t\t\t<ul class=\"dropdown-menu dropdown-menu-";
        // line 16
        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
        echo "\" role=\"menu\">
\t\t\t";
        // line 17
        // line 18
        echo "
\t\t\t";
        // line 19
        if ((isset($context["S_DISPLAY_SEARCH"]) ? $context["S_DISPLAY_SEARCH"] : null)) {
            // line 20
            echo "\t\t\t\t";
            if ((isset($context["S_REGISTERED_USER"]) ? $context["S_REGISTERED_USER"] : null)) {
                // line 21
                echo "\t\t\t\t<li><a href=\"";
                echo (isset($context["U_SEARCH_SELF"]) ? $context["U_SEARCH_SELF"] : null);
                echo "\" role=\"menuitem\">";
                echo $this->env->getExtension('phpbb')->lang("SEARCH_SELF");
                echo "</a></li>
\t\t\t\t";
            }
            // line 23
            echo "\t\t\t\t";
            if ((isset($context["S_USER_LOGGED_IN"]) ? $context["S_USER_LOGGED_IN"] : null)) {
                // line 24
                echo "\t\t\t\t<li><a href=\"";
                echo (isset($context["U_SEARCH_NEW"]) ? $context["U_SEARCH_NEW"] : null);
                echo "\" role=\"menuitem\">";
                echo $this->env->getExtension('phpbb')->lang("SEARCH_NEW");
                echo "</a></li>
\t\t\t\t";
            }
            // line 26
            echo "\t\t\t\t";
            if ((isset($context["S_LOAD_UNREADS"]) ? $context["S_LOAD_UNREADS"] : null)) {
                echo " 
\t\t\t\t<li><a href=\"";
                // line 27
                echo (isset($context["U_SEARCH_UNREAD"]) ? $context["U_SEARCH_UNREAD"] : null);
                echo "\" role=\"menuitem\">";
                echo $this->env->getExtension('phpbb')->lang("SEARCH_UNREAD");
                echo "</a></li>
\t\t\t\t";
            }
            // line 29
            echo "\t\t\t\t<li><a href=\"";
            echo (isset($context["U_SEARCH_UNANSWERED"]) ? $context["U_SEARCH_UNANSWERED"] : null);
            echo "\" role=\"menuitem\">";
            echo $this->env->getExtension('phpbb')->lang("SEARCH_UNANSWERED");
            echo "</a></li>
\t\t\t\t<li><a href=\"";
            // line 30
            echo (isset($context["U_SEARCH_ACTIVE_TOPICS"]) ? $context["U_SEARCH_ACTIVE_TOPICS"] : null);
            echo "\" role=\"menuitem\">";
            echo $this->env->getExtension('phpbb')->lang("SEARCH_ACTIVE_TOPICS");
            echo "</a></li>
\t\t\t\t<li class=\"divider\"></li>
\t\t\t\t<li><a href=\"";
            // line 32
            echo (isset($context["U_SEARCH"]) ? $context["U_SEARCH"] : null);
            echo "\" role=\"menuitem\">";
            echo $this->env->getExtension('phpbb')->lang("SEARCH");
            echo "</a></li>
\t\t\t";
        }
        // line 34
        echo "
\t\t\t";
        // line 35
        if (((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) && ((isset($context["S_DISPLAY_MEMBERLIST"]) ? $context["S_DISPLAY_MEMBERLIST"] : null) || ((isset($context["S_REGISTERED_USER"]) ? $context["S_REGISTERED_USER"] : null) && (isset($context["U_TEAM"]) ? $context["U_TEAM"] : null))))) {
            // line 36
            echo "\t\t\t\t<li class=\"divider\"></li>
\t\t\t\t";
            // line 37
            if ((isset($context["S_DISPLAY_MEMBERLIST"]) ? $context["S_DISPLAY_MEMBERLIST"] : null)) {
                echo "<li><a href=\"";
                echo (isset($context["U_MEMBERLIST"]) ? $context["U_MEMBERLIST"] : null);
                echo "\" role=\"menuitem\">";
                echo $this->env->getExtension('phpbb')->lang("MEMBERLIST");
                echo "</a></li>";
            }
            // line 38
            echo "\t\t\t\t";
            if (((isset($context["S_REGISTERED_USER"]) ? $context["S_REGISTERED_USER"] : null) && (isset($context["U_TEAM"]) ? $context["U_TEAM"] : null))) {
                echo "<li><a href=\"";
                echo (isset($context["U_TEAM"]) ? $context["U_TEAM"] : null);
                echo "\" role=\"menuitem\">";
                echo $this->env->getExtension('phpbb')->lang("THE_TEAM");
                echo "</a></li>";
            }
            // line 39
            echo "\t\t\t";
        }
        // line 40
        echo "
\t\t\t";
        // line 41
        // line 42
        echo "\t\t\t</ul>
\t\t</li>

\t\t";
        // line 45
        // line 46
        echo "\t\t<li><a href=\"";
        echo (isset($context["U_FAQ"]) ? $context["U_FAQ"] : null);
        echo "\" rel=\"help\" title=\"";
        echo $this->env->getExtension('phpbb')->lang("FAQ_EXPLAIN");
        echo "\" role=\"menuitem\"><i class=\"fa fa-question\"></i> ";
        echo $this->env->getExtension('phpbb')->lang("FAQ");
        echo "</a></li>
\t\t";
        // line 47
        // line 48
        echo "\t\t";
        if ((isset($context["U_ACP"]) ? $context["U_ACP"] : null)) {
            // line 49
            echo "\t\t<li><a href=\"";
            echo (isset($context["U_ACP"]) ? $context["U_ACP"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("ACP");
            echo "\" role=\"menuitem\"><i class=\"fa fa-cogs\"></i> ";
            echo $this->env->getExtension('phpbb')->lang("ACP_SHORT");
            echo "</a></li>
\t\t";
        }
        // line 51
        echo "\t\t";
        if ((isset($context["U_MCP"]) ? $context["U_MCP"] : null)) {
            // line 52
            echo "\t\t<li><a href=\"";
            echo (isset($context["U_MCP"]) ? $context["U_MCP"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("MCP");
            echo "\" role=\"menuitem\"><i class=\"fa fa-gavel\"></i> ";
            echo $this->env->getExtension('phpbb')->lang("MCP_SHORT");
            echo "</a></li>
\t\t";
        }
        // line 54
        echo "\t</ul>

\t";
        // line 56
        if ((isset($context["S_REGISTERED_USER"]) ? $context["S_REGISTERED_USER"] : null)) {
            // line 57
            echo "\t<ul class=\"nav navbar-nav navbar-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\" role=\"menubar\">
\t\t";
            // line 58
            if ((isset($context["S_NOTIFICATIONS_DISPLAY"]) ? $context["S_NOTIFICATIONS_DISPLAY"] : null)) {
                // line 59
                echo "\t\t<li>
\t\t\t<a href=\"";
                // line 60
                echo (isset($context["U_VIEW_ALL_NOTIFICATIONS"]) ? $context["U_VIEW_ALL_NOTIFICATIONS"] : null);
                echo "\" id=\"notification_list_button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span> ";
                echo $this->env->getExtension('phpbb')->lang("NOTIFICATIONS");
                echo " <strong class=\"badge\">";
                echo (isset($context["NOTIFICATIONS_COUNT"]) ? $context["NOTIFICATIONS_COUNT"] : null);
                echo "</strong></a>
\t\t\t";
                // line 61
                $location = "notification_dropdown.html";
                $namespace = false;
                if (strpos($location, '@') === 0) {
                    $namespace = substr($location, 1, strpos($location, '/') - 1);
                    $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                    $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
                }
                $this->env->loadTemplate("notification_dropdown.html")->display($context);
                if ($namespace) {
                    $this->env->setNamespaceLookUpOrder($previous_look_up_order);
                }
                // line 62
                echo "\t\t</li>
\t\t";
            }
            // line 64
            echo "\t\t";
            if ((isset($context["S_DISPLAY_PM"]) ? $context["S_DISPLAY_PM"] : null)) {
                // line 65
                echo "\t\t<li>
\t\t\t<a href=\"";
                // line 66
                echo (isset($context["U_PRIVATEMSGS"]) ? $context["U_PRIVATEMSGS"] : null);
                echo "\" role=\"menuitem\"><i class=\"fa fa-user\"></i> ";
                echo $this->env->getExtension('phpbb')->lang("PRIVATE_MESSAGES");
                echo " <strong class=\"badge\">";
                echo (isset($context["PRIVATE_MESSAGE_COUNT"]) ? $context["PRIVATE_MESSAGE_COUNT"] : null);
                echo "</strong></a>
\t\t</li>
\t\t";
            }
            // line 69
            echo "\t\t<li id=\"username_logged_in\" class=\"rightside ";
            if ((isset($context["CURRENT_USER_AVATAR"]) ? $context["CURRENT_USER_AVATAR"] : null)) {
                echo " no-bulletin";
            }
            echo "\" data-skip-responsive=\"true\">
\t\t\t";
            // line 70
            // line 71
            echo "\t\t\t<a href=\"";
            echo (isset($context["U_PROFILE"]) ? $context["U_PROFILE"] : null);
            echo "\" class=\"header-avatar dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span> ";
            if ((isset($context["CURRENT_USER_AVATAR"]) ? $context["CURRENT_USER_AVATAR"] : null)) {
                echo (isset($context["CURRENT_USER_AVATAR"]) ? $context["CURRENT_USER_AVATAR"] : null);
                echo " ";
            }
            echo (isset($context["CURRENT_USERNAME_SIMPLE"]) ? $context["CURRENT_USERNAME_SIMPLE"] : null);
            echo "</a>
\t\t\t<ul class=\"dropdown-menu dropdown-menu-";
            // line 72
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\" role=\"menu\">
\t\t\t\t";
            // line 73
            if ((isset($context["U_RESTORE_PERMISSIONS"]) ? $context["U_RESTORE_PERMISSIONS"] : null)) {
                echo "<li><a href=\"";
                echo (isset($context["U_RESTORE_PERMISSIONS"]) ? $context["U_RESTORE_PERMISSIONS"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("RESTORE_PERMISSIONS");
                echo "</a></li>";
            }
            // line 74
            echo "\t
\t\t\t\t";
            // line 75
            // line 76
            echo "\t
\t\t\t\t<li><a href=\"";
            // line 77
            echo (isset($context["U_PROFILE"]) ? $context["U_PROFILE"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("PROFILE");
            echo "\" role=\"menuitem\">";
            echo $this->env->getExtension('phpbb')->lang("PROFILE");
            echo "</a></li>
\t\t\t\t<li><a href=\"";
            // line 78
            echo (isset($context["U_USER_PROFILE"]) ? $context["U_USER_PROFILE"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("READ_PROFILE");
            echo "\" role=\"menuitem\">";
            echo $this->env->getExtension('phpbb')->lang("READ_PROFILE");
            echo "</a></li>
\t
\t\t\t\t";
            // line 80
            // line 81
            echo "\t
\t\t\t\t<li class=\"divider\"></li>
\t\t\t\t<li><a href=\"";
            // line 83
            echo (isset($context["U_LOGIN_LOGOUT"]) ? $context["U_LOGIN_LOGOUT"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("LOGIN_LOGOUT");
            echo "\" accesskey=\"x\" role=\"menuitem\">";
            echo $this->env->getExtension('phpbb')->lang("LOGIN_LOGOUT");
            echo "</a></li>
\t\t\t</ul>
\t\t\t";
            // line 85
            // line 86
            echo "\t\t</li>
\t</ul>
\t";
        } else {
            // line 89
            echo "\t<ul class=\"nav navbar-nav navbar-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\" role=\"menubar\">
\t\t";
            // line 90
            if (((isset($context["S_REGISTER_ENABLED"]) ? $context["S_REGISTER_ENABLED"] : null) && (!((isset($context["S_SHOW_COPPA"]) ? $context["S_SHOW_COPPA"] : null) || (isset($context["S_REGISTRATION"]) ? $context["S_REGISTRATION"] : null))))) {
                // line 91
                echo "\t\t<li><a href=\"";
                echo (isset($context["U_REGISTER"]) ? $context["U_REGISTER"] : null);
                echo "\" role=\"menuitem\">";
                echo $this->env->getExtension('phpbb')->lang("REGISTER");
                echo "</a></li>
\t\t";
            }
            // line 93
            echo "\t\t";
            // line 94
            echo "\t\t";
            if ((!((isset($context["S_IN_UCP"]) ? $context["S_IN_UCP"] : null) || ((isset($context["SCRIPT_NAME"]) ? $context["SCRIPT_NAME"] : null) == "posting")))) {
                // line 95
                echo "\t\t<li class=\"dropdown\">
\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span> ";
                // line 96
                echo $this->env->getExtension('phpbb')->lang("LOGIN_LOGOUT");
                echo "</a>
\t\t\t<ul class=\"dropdown-menu dropdown-menu-";
                // line 97
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\" role=\"menu\">
\t\t\t\t<li style=\"min-width: 250px;\">
\t\t\t\t\t<form method=\"post\" action=\"";
                // line 99
                echo (isset($context["S_LOGIN_ACTION"]) ? $context["S_LOGIN_ACTION"] : null);
                echo "\">
\t\t\t\t\t\t<fieldset class=\"panel-body form-group-sm\">
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"username\">";
                // line 102
                echo $this->env->getExtension('phpbb')->lang("USERNAME");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label>
\t\t\t\t\t\t\t\t<div class=\"input-group\">
\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa-fw\"></i></span>
\t\t\t\t\t\t\t\t\t<input name=\"username\" id=\"username\" size=\"10\" placeholder=\"";
                // line 105
                echo $this->env->getExtension('phpbb')->lang("USERNAME");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("USERNAME");
                echo "\" class=\"form-control\" />
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t<label for=\"password\">";
                // line 109
                echo $this->env->getExtension('phpbb')->lang("PASSWORD");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label>
\t\t\t\t\t\t\t\t<div class=\"input-group\">
\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-key fa-fw\"></i></span>
\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\" size=\"10\" placeholder=\"";
                // line 112
                echo $this->env->getExtension('phpbb')->lang("PASSWORD");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("PASSWORD");
                echo "\" class=\"form-control\" />
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t";
                // line 116
                if ((isset($context["S_AUTOLOGIN_ENABLED"]) ? $context["S_AUTOLOGIN_ENABLED"] : null)) {
                    // line 117
                    echo "\t\t\t\t\t\t\t<div class=\"form-group\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("LOG_ME_IN");
                    echo "\" data-toggle=\"buttons\">
\t\t\t\t\t\t\t\t<label for=\"autologin\" class=\"btn btn-default btn-sm btn-block\">";
                    // line 118
                    echo $this->env->getExtension('phpbb')->lang("LOG_ME_IN");
                    echo " <input type=\"checkbox\" name=\"autologin\" id=\"autologin\" /></label>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t";
                }
                // line 121
                echo "\t\t\t\t\t\t\t<input type=\"submit\" name=\"login\" value=\"";
                echo $this->env->getExtension('phpbb')->lang("LOGIN");
                echo "\" class=\"btn btn-primary btn-sm btn-block\" />

\t\t\t\t\t\t\t";
                // line 123
                echo (isset($context["S_LOGIN_REDIRECT"]) ? $context["S_LOGIN_REDIRECT"] : null);
                echo "
\t\t\t\t\t\t</fieldset>
\t\t\t\t\t</form>
\t\t\t\t</li>
\t\t\t</ul>
\t\t</li>
\t\t";
            }
            // line 130
            echo "\t</ul>
\t";
        }
        // line 132
        echo "
\t</div>

</div>
";
    }

    public function getTemplateName()
    {
        return "navbar_header.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  413 => 130,  397 => 121,  391 => 118,  386 => 117,  384 => 116,  375 => 112,  368 => 109,  359 => 105,  352 => 102,  341 => 97,  334 => 95,  331 => 94,  329 => 93,  321 => 91,  309 => 86,  308 => 85,  299 => 83,  295 => 81,  294 => 80,  285 => 78,  274 => 76,  273 => 75,  262 => 73,  258 => 72,  239 => 69,  229 => 66,  226 => 65,  223 => 64,  199 => 60,  196 => 59,  194 => 58,  189 => 57,  187 => 56,  173 => 52,  170 => 51,  160 => 49,  157 => 48,  147 => 46,  146 => 45,  141 => 42,  140 => 41,  137 => 40,  134 => 39,  125 => 38,  114 => 36,  112 => 35,  81 => 27,  76 => 26,  65 => 23,  57 => 21,  54 => 20,  52 => 19,  49 => 18,  48 => 17,  44 => 16,  40 => 15,  24 => 3,  21 => 2,  451 => 122,  448 => 121,  439 => 118,  436 => 117,  434 => 116,  429 => 113,  427 => 112,  425 => 111,  418 => 109,  417 => 132,  404 => 107,  403 => 123,  400 => 105,  396 => 104,  387 => 103,  385 => 102,  374 => 101,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 99,  345 => 90,  337 => 96,  333 => 84,  319 => 90,  314 => 89,  306 => 75,  300 => 72,  291 => 70,  284 => 68,  270 => 74,  259 => 60,  253 => 59,  247 => 71,  237 => 52,  232 => 49,  227 => 47,  224 => 46,  219 => 62,  208 => 42,  206 => 41,  203 => 40,  195 => 38,  193 => 37,  179 => 32,  177 => 31,  171 => 30,  161 => 22,  155 => 20,  153 => 19,  150 => 18,  132 => 16,  117 => 37,  106 => 14,  84 => 12,  73 => 11,  60 => 9,  35 => 7,  22 => 2,  277 => 77,  272 => 63,  255 => 86,  246 => 70,  240 => 77,  233 => 50,  231 => 71,  220 => 63,  216 => 44,  212 => 61,  207 => 61,  204 => 57,  190 => 56,  188 => 35,  183 => 54,  175 => 48,  169 => 46,  167 => 45,  162 => 42,  159 => 41,  156 => 47,  142 => 39,  138 => 38,  135 => 37,  130 => 34,  122 => 32,  119 => 31,  111 => 29,  109 => 34,  104 => 25,  102 => 32,  95 => 30,  88 => 29,  78 => 18,  71 => 17,  68 => 24,  62 => 10,  50 => 10,  34 => 14,  31 => 6,  19 => 1,);
    }
}
