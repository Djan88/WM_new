<?php

/* ucp_header.html */
class __TwigTemplate_6d486d742de6dca54d05f175b101e40c extends Twig_Template
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
        $location = "overall_header.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("overall_header.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 2
        echo "
<h3>";
        // line 3
        echo $this->env->getExtension('phpbb')->lang("UCP");
        echo "</h3>

<ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">
\t";
        // line 6
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "t_block1"));
        foreach ($context['_seq'] as $context["_key"] => $context["t_block1"]) {
            // line 7
            echo "\t<li class=\"tab";
            if ($this->getAttribute((isset($context["t_block1"]) ? $context["t_block1"] : null), "S_SELECTED")) {
                echo " active";
            }
            echo "\"><a href=\"";
            echo $this->getAttribute((isset($context["t_block1"]) ? $context["t_block1"] : null), "U_TITLE");
            echo "\">";
            echo $this->getAttribute((isset($context["t_block1"]) ? $context["t_block1"] : null), "L_TITLE");
            echo "</a></li>
\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['t_block1'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 9
        echo "</ul>

";
        // line 11
        if ((isset($context["S_COMPOSE_PM"]) ? $context["S_COMPOSE_PM"] : null)) {
            // line 12
            echo "<form id=\"postform\" method=\"post\" action=\"";
            echo (isset($context["S_POST_ACTION"]) ? $context["S_POST_ACTION"] : null);
            echo "\"";
            echo (isset($context["S_FORM_ENCTYPE"]) ? $context["S_FORM_ENCTYPE"] : null);
            echo ">
";
        }
        // line 14
        echo "
\t<div id=\"cp-menu\">
\t\t<ul id=\"navigation\" class=\"nav nav-pills\" role=\"menu\">

\t\t";
        // line 18
        if ((isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null)) {
            // line 19
            echo "\t\t\t";
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "t_block2"));
            foreach ($context['_seq'] as $context["_key"] => $context["t_block2"]) {
                // line 20
                echo "\t\t\t\t";
                if (((isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null) && (!$this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "S_LAST_ROW")))) {
                    // line 21
                    echo "\t\t\t\t\t";
                    if ($this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "S_SELECTED")) {
                        // line 22
                        echo "\t\t\t\t\t\t<li class=\"active\"><a href=\"";
                        echo $this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "U_TITLE");
                        echo "\">";
                        echo $this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "L_TITLE");
                        echo "</a></li>
\t\t\t\t\t";
                    } else {
                        // line 24
                        echo "\t\t\t\t\t\t<li><a href=\"";
                        echo $this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "U_TITLE");
                        echo "\">";
                        echo $this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "L_TITLE");
                        echo "</a></li>
\t\t\t\t\t";
                    }
                    // line 26
                    echo "\t\t\t\t";
                }
                // line 27
                echo "\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['t_block2'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 28
            echo "
\t\t\t";
            // line 29
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "folder"));
            foreach ($context['_seq'] as $context["_key"] => $context["folder"]) {
                // line 30
                echo "\t\t\t\t";
                if ($this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "S_CUR_FOLDER")) {
                    // line 31
                    echo "\t\t\t\t\t<li class=\"active\"><a href=\"";
                    echo $this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "U_FOLDER");
                    echo "\">";
                    if (($this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "UNREAD_MESSAGES") > 0)) {
                        echo $this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "FOLDER_NAME");
                        echo " <span class=\"badge\">";
                        echo $this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "UNREAD_MESSAGES");
                        echo "</span>";
                    } else {
                        echo $this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "FOLDER_NAME");
                    }
                    echo "</a></li>
\t\t\t\t";
                } else {
                    // line 33
                    echo "\t\t\t\t\t<li><a href=\"";
                    echo $this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "U_FOLDER");
                    echo "\">";
                    if (($this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "UNREAD_MESSAGES") > 0)) {
                        echo $this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "FOLDER_NAME");
                        echo " <span class=\"badge\">";
                        echo $this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "UNREAD_MESSAGES");
                        echo "</span>";
                    } else {
                        echo $this->getAttribute((isset($context["folder"]) ? $context["folder"] : null), "FOLDER_NAME");
                    }
                    echo "</a></li>
\t\t\t\t";
                }
                // line 35
                echo "\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['folder'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 36
            echo "\t\t";
        }
        // line 37
        echo "
\t\t";
        // line 38
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "t_block2"));
        foreach ($context['_seq'] as $context["_key"] => $context["t_block2"]) {
            // line 39
            echo "\t\t\t";
            if ((((isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null) && $this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "S_LAST_ROW")) || (!(isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null)))) {
                // line 40
                echo "\t\t\t\t";
                if ($this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "S_SELECTED")) {
                    // line 41
                    echo "\t\t\t\t\t<li class=\"active\"><a href=\"";
                    echo $this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "U_TITLE");
                    echo "\">";
                    echo $this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "L_TITLE");
                    echo "</a></li>
\t\t\t\t";
                } else {
                    // line 43
                    echo "\t\t\t\t\t<li><a href=\"";
                    echo $this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "U_TITLE");
                    echo "\">";
                    echo $this->getAttribute((isset($context["t_block2"]) ? $context["t_block2"] : null), "L_TITLE");
                    echo "</a></li>
\t\t\t\t";
                }
                // line 45
                echo "\t\t\t";
            }
            // line 46
            echo "\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['t_block2'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 47
        echo "\t\t</ul>

\t";
        // line 49
        if ((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "friends_online")) || twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "friends_offline")))) {
            // line 50
            echo "\t\t";
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "friends_online"))) {
                // line 51
                echo "\t\t<div class=\"friends-list\">
\t\t\t<strong>";
                // line 52
                echo $this->env->getExtension('phpbb')->lang("FRIENDS");
                echo "</strong> <span class=\"label label-success\">";
                echo $this->env->getExtension('phpbb')->lang("FRIENDS_ONLINE");
                echo "</span>
\t\t\t";
                // line 53
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "friends_online"));
                foreach ($context['_seq'] as $context["_key"] => $context["friends_online"]) {
                    // line 54
                    echo "\t\t\t<div class=\"btn-group recipients\">
\t\t\t\t<span class=\"btn btn-default btn-sm tip\" title=\"";
                    // line 55
                    echo $this->env->getExtension('phpbb')->lang("FRIENDS_ONLINE");
                    echo "\">";
                    echo $this->getAttribute((isset($context["friends_online"]) ? $context["friends_online"] : null), "USERNAME_FULL");
                    echo "</span>";
                    if ((isset($context["S_SHOW_PM_BOX"]) ? $context["S_SHOW_PM_BOX"] : null)) {
                        echo "<input type=\"submit\" name=\"add_to[";
                        echo $this->getAttribute((isset($context["friends_online"]) ? $context["friends_online"] : null), "USER_ID");
                        echo "]\" value=\"";
                        echo $this->env->getExtension('phpbb')->lang("ADD");
                        echo "\" class=\"btn btn-sm btn-success\" />";
                    }
                    // line 56
                    echo "\t\t\t</div>
\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['friends_online'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 58
                echo "\t\t</div>
\t\t";
            }
            // line 60
            echo "
\t\t";
            // line 61
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "friends_offline"))) {
                // line 62
                echo "\t\t<div class=\"friends-list\">
\t\t\t<strong>";
                // line 63
                echo $this->env->getExtension('phpbb')->lang("FRIENDS");
                echo "</strong> <span class=\"label label-danger\">";
                echo $this->env->getExtension('phpbb')->lang("FRIENDS_OFFLINE");
                echo "</span> &nbsp;
\t\t\t";
                // line 64
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "friends_offline"));
                foreach ($context['_seq'] as $context["_key"] => $context["friends_offline"]) {
                    // line 65
                    echo "\t\t\t<div class=\"btn-group recipients\">
\t\t\t\t<span class=\"btn btn-default btn-sm tip\" title=\"";
                    // line 66
                    echo $this->env->getExtension('phpbb')->lang("FRIENDS_OFFLINE");
                    echo "\">";
                    echo $this->getAttribute((isset($context["friends_offline"]) ? $context["friends_offline"] : null), "USERNAME_FULL");
                    echo "</span>";
                    if ((isset($context["S_SHOW_PM_BOX"]) ? $context["S_SHOW_PM_BOX"] : null)) {
                        echo "<input type=\"submit\" name=\"add_to[";
                        echo $this->getAttribute((isset($context["friends_offline"]) ? $context["friends_offline"] : null), "USER_ID");
                        echo "]\" value=\"";
                        echo $this->env->getExtension('phpbb')->lang("ADD");
                        echo "\" class=\"btn btn-sm btn-success\" />";
                    }
                    // line 67
                    echo "\t\t\t</div>
\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['friends_offline'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 69
                echo "\t\t</div>
\t\t";
            }
            // line 71
            echo "\t";
        }
        // line 72
        echo "
\t\t";
        // line 73
        if ((isset($context["S_SHOW_COLOUR_LEGEND"]) ? $context["S_SHOW_COLOUR_LEGEND"] : null)) {
            // line 74
            echo "\t\t<ul class=\"list-inline\">
\t\t\t<li><strong>";
            // line 75
            echo $this->env->getExtension('phpbb')->lang("MESSAGE_COLOURS");
            echo "</strong></li>
\t\t\t";
            // line 76
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pm_colour_info"));
            foreach ($context['_seq'] as $context["_key"] => $context["pm_colour_info"]) {
                // line 77
                echo "\t\t\t\t<li class=\"pm-legend\"><i class=\"label";
                if ($this->getAttribute((isset($context["pm_colour_info"]) ? $context["pm_colour_info"] : null), "CLASS")) {
                    echo " ";
                    echo $this->getAttribute((isset($context["pm_colour_info"]) ? $context["pm_colour_info"] : null), "CLASS");
                }
                echo "\">&nbsp;&nbsp;</i> ";
                echo $this->getAttribute((isset($context["pm_colour_info"]) ? $context["pm_colour_info"] : null), "LANG");
                echo "</li>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['pm_colour_info'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 79
            echo "\t\t</ul>
\t\t";
        }
        // line 81
        echo "
\t</div>

\t<div id=\"cp-main\" class=\"ucp-main panel-container\">
";
    }

    public function getTemplateName()
    {
        return "ucp_header.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  333 => 81,  329 => 79,  315 => 77,  311 => 76,  307 => 75,  304 => 74,  302 => 73,  299 => 72,  296 => 71,  292 => 69,  285 => 67,  273 => 66,  270 => 65,  266 => 64,  257 => 62,  255 => 61,  252 => 60,  248 => 58,  222 => 53,  216 => 52,  213 => 51,  210 => 50,  208 => 49,  198 => 46,  187 => 43,  179 => 41,  176 => 40,  173 => 39,  169 => 38,  166 => 37,  163 => 36,  157 => 35,  127 => 31,  124 => 30,  120 => 29,  111 => 27,  108 => 26,  92 => 22,  89 => 21,  86 => 20,  81 => 19,  79 => 18,  73 => 14,  65 => 12,  63 => 11,  59 => 9,  44 => 7,  40 => 6,  480 => 141,  467 => 139,  461 => 135,  455 => 132,  451 => 131,  442 => 130,  435 => 129,  432 => 128,  430 => 127,  427 => 126,  420 => 122,  416 => 121,  411 => 120,  408 => 119,  396 => 118,  392 => 117,  384 => 112,  380 => 111,  375 => 109,  364 => 106,  349 => 105,  346 => 104,  344 => 103,  341 => 102,  337 => 100,  331 => 98,  328 => 97,  321 => 96,  319 => 95,  316 => 94,  312 => 92,  297 => 89,  293 => 87,  290 => 86,  279 => 85,  277 => 84,  274 => 83,  265 => 81,  263 => 80,  260 => 63,  258 => 78,  253 => 75,  241 => 56,  229 => 55,  226 => 54,  220 => 70,  217 => 69,  209 => 67,  204 => 47,  197 => 64,  195 => 45,  192 => 62,  186 => 61,  172 => 60,  162 => 59,  158 => 58,  152 => 55,  148 => 54,  144 => 52,  142 => 33,  139 => 50,  131 => 47,  128 => 46,  126 => 45,  123 => 44,  117 => 28,  114 => 40,  112 => 39,  109 => 38,  100 => 24,  95 => 30,  83 => 22,  75 => 18,  68 => 14,  62 => 11,  55 => 8,  53 => 7,  50 => 6,  36 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
