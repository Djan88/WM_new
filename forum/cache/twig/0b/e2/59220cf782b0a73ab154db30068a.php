<?php

/* navbar_header.html */
class __TwigTemplate_0be259220cf782b0a73ab154db30068a extends Twig_Template
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
        return array (  413 => 130,  397 => 121,  391 => 118,  386 => 117,  384 => 116,  375 => 112,  368 => 109,  359 => 105,  352 => 102,  341 => 97,  329 => 93,  321 => 91,  308 => 85,  299 => 83,  295 => 81,  294 => 80,  285 => 78,  274 => 76,  273 => 75,  262 => 73,  239 => 69,  223 => 64,  199 => 60,  196 => 59,  194 => 58,  189 => 57,  187 => 56,  173 => 52,  160 => 49,  157 => 48,  156 => 47,  147 => 46,  141 => 42,  137 => 40,  134 => 39,  125 => 38,  114 => 36,  112 => 35,  109 => 34,  102 => 32,  88 => 29,  68 => 24,  65 => 23,  54 => 20,  49 => 18,  48 => 17,  40 => 15,  24 => 3,  21 => 2,  451 => 122,  448 => 121,  439 => 118,  434 => 116,  429 => 113,  418 => 109,  417 => 132,  404 => 107,  403 => 123,  400 => 105,  396 => 104,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 99,  345 => 90,  337 => 96,  333 => 84,  319 => 90,  291 => 70,  284 => 68,  277 => 77,  259 => 60,  253 => 59,  247 => 71,  237 => 52,  233 => 50,  232 => 49,  227 => 47,  224 => 46,  219 => 62,  216 => 44,  208 => 42,  206 => 41,  203 => 40,  195 => 38,  193 => 37,  188 => 35,  183 => 54,  179 => 32,  177 => 31,  171 => 30,  161 => 22,  155 => 20,  153 => 19,  150 => 18,  132 => 16,  117 => 37,  106 => 14,  95 => 30,  84 => 12,  62 => 10,  35 => 7,  22 => 2,  1491 => 400,  1488 => 399,  1481 => 395,  1467 => 392,  1463 => 390,  1461 => 389,  1458 => 388,  1446 => 387,  1442 => 385,  1441 => 384,  1438 => 383,  1433 => 380,  1425 => 378,  1423 => 377,  1419 => 376,  1415 => 375,  1410 => 374,  1407 => 373,  1394 => 372,  1392 => 371,  1389 => 370,  1387 => 369,  1383 => 367,  1378 => 364,  1363 => 362,  1359 => 361,  1355 => 360,  1350 => 358,  1343 => 357,  1341 => 356,  1338 => 355,  1326 => 354,  1323 => 353,  1322 => 352,  1319 => 351,  1282 => 349,  1280 => 348,  1277 => 347,  1276 => 346,  1272 => 344,  1271 => 343,  1268 => 342,  1263 => 339,  1258 => 337,  1249 => 336,  1241 => 335,  1239 => 334,  1233 => 332,  1231 => 331,  1228 => 330,  1214 => 328,  1212 => 327,  1209 => 326,  1204 => 324,  1196 => 321,  1188 => 315,  1187 => 314,  1184 => 313,  1175 => 312,  1173 => 311,  1167 => 310,  1164 => 309,  1160 => 307,  1151 => 306,  1147 => 305,  1144 => 304,  1140 => 302,  1131 => 301,  1127 => 300,  1124 => 299,  1121 => 298,  1114 => 297,  1113 => 296,  1110 => 295,  1105 => 292,  1096 => 290,  1092 => 289,  1088 => 288,  1083 => 287,  1081 => 286,  1076 => 284,  1073 => 283,  1065 => 280,  1062 => 279,  1060 => 278,  1057 => 277,  1050 => 273,  1046 => 272,  1042 => 271,  1038 => 270,  1034 => 269,  1028 => 267,  1021 => 263,  1017 => 262,  1013 => 261,  1009 => 260,  1005 => 259,  999 => 257,  997 => 256,  992 => 254,  988 => 252,  985 => 251,  980 => 248,  979 => 247,  976 => 246,  964 => 244,  961 => 243,  951 => 241,  948 => 240,  938 => 238,  935 => 237,  925 => 235,  922 => 234,  912 => 232,  909 => 231,  899 => 229,  897 => 228,  894 => 227,  893 => 226,  887 => 224,  884 => 223,  882 => 222,  857 => 220,  846 => 219,  839 => 214,  837 => 213,  831 => 209,  825 => 208,  792 => 204,  782 => 203,  779 => 202,  776 => 201,  772 => 200,  767 => 198,  762 => 195,  759 => 194,  758 => 193,  755 => 192,  753 => 191,  747 => 190,  737 => 188,  734 => 187,  729 => 186,  728 => 185,  725 => 184,  717 => 182,  714 => 181,  712 => 180,  709 => 179,  699 => 178,  689 => 177,  672 => 176,  669 => 175,  659 => 174,  655 => 172,  647 => 171,  644 => 170,  642 => 169,  639 => 168,  626 => 167,  623 => 166,  622 => 165,  619 => 164,  613 => 163,  599 => 162,  595 => 161,  588 => 159,  575 => 157,  571 => 156,  550 => 155,  547 => 154,  542 => 151,  537 => 149,  532 => 148,  527 => 146,  522 => 145,  520 => 144,  514 => 142,  511 => 141,  501 => 139,  498 => 138,  496 => 137,  492 => 136,  489 => 135,  481 => 130,  477 => 129,  473 => 128,  470 => 127,  466 => 125,  458 => 123,  455 => 122,  449 => 120,  447 => 119,  444 => 118,  442 => 117,  436 => 117,  427 => 112,  425 => 111,  422 => 109,  416 => 108,  414 => 107,  410 => 105,  390 => 104,  387 => 103,  385 => 102,  380 => 99,  374 => 101,  367 => 95,  364 => 94,  342 => 93,  338 => 92,  334 => 95,  331 => 94,  327 => 88,  320 => 87,  314 => 89,  309 => 86,  306 => 75,  304 => 83,  300 => 72,  286 => 79,  280 => 76,  272 => 63,  270 => 74,  265 => 68,  258 => 72,  250 => 61,  246 => 70,  241 => 58,  236 => 56,  231 => 55,  229 => 66,  226 => 65,  214 => 52,  211 => 51,  210 => 50,  207 => 61,  170 => 51,  168 => 46,  165 => 45,  164 => 44,  159 => 41,  154 => 38,  146 => 45,  144 => 35,  140 => 41,  136 => 33,  131 => 32,  128 => 31,  115 => 30,  113 => 29,  110 => 28,  108 => 27,  105 => 26,  101 => 24,  96 => 22,  91 => 21,  83 => 19,  81 => 27,  78 => 17,  76 => 26,  73 => 11,  60 => 9,  57 => 21,  55 => 10,  52 => 19,  46 => 7,  44 => 16,  34 => 14,  31 => 6,  19 => 1,);
    }
}
