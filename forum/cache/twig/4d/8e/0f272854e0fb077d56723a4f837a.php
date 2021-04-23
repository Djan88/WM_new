<?php

/* ucp_notifications.html */
class __TwigTemplate_4d8e0f272854e0fb077d56723a4f837a extends Twig_Template
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
        $location = "ucp_header.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("ucp_header.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 2
        echo "
<form id=\"ucp\" method=\"post\" action=\"";
        // line 3
        echo (isset($context["S_UCP_ACTION"]) ? $context["S_UCP_ACTION"] : null);
        echo "\"";
        echo (isset($context["S_FORM_ENCTYPE"]) ? $context["S_FORM_ENCTYPE"] : null);
        echo ">

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 7
        echo (isset($context["TITLE"]) ? $context["TITLE"] : null);
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t\t<p>";
        // line 11
        echo (isset($context["TITLE_EXPLAIN"]) ? $context["TITLE_EXPLAIN"] : null);
        echo "</p>

\t\t";
        // line 13
        if (((isset($context["MODE"]) ? $context["MODE"] : null) == "notification_options")) {
            // line 14
            echo "\t\t<div class=\"table-responsive\">
\t\t\t<table class=\"table table-bordered\">
\t\t\t\t<thead>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<th>";
            // line 18
            echo $this->env->getExtension('phpbb')->lang("NOTIFICATION_TYPE");
            echo "</th>
\t\t\t\t\t\t";
            // line 19
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "notification_methods"));
            foreach ($context['_seq'] as $context["_key"] => $context["notification_methods"]) {
                // line 20
                echo "\t\t\t\t\t\t\t<th class=\"text-center\">";
                echo $this->getAttribute((isset($context["notification_methods"]) ? $context["notification_methods"] : null), "NAME");
                echo "</th>
\t\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['notification_methods'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 22
            echo "\t\t\t\t\t\t<th class=\"text-center\">";
            echo $this->env->getExtension('phpbb')->lang("NOTIFICATIONS");
            echo "</th>
\t\t\t\t\t</tr>
\t\t\t\t</thead>
\t\t\t\t<tbody>
\t\t\t\t";
            // line 26
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "notification_types"));
            foreach ($context['_seq'] as $context["_key"] => $context["notification_types"]) {
                // line 27
                echo "\t\t\t\t\t";
                if ($this->getAttribute((isset($context["notification_types"]) ? $context["notification_types"] : null), "GROUP_NAME")) {
                    // line 28
                    echo "\t\t\t\t\t\t<tr class=\"bg3\">
\t\t\t\t\t\t\t<td colspan=\"";
                    // line 29
                    echo (isset($context["NOTIFICATION_TYPES_COLS"]) ? $context["NOTIFICATION_TYPES_COLS"] : null);
                    echo "\">";
                    echo $this->getAttribute((isset($context["notification_types"]) ? $context["notification_types"] : null), "GROUP_NAME");
                    echo "</td>
\t\t\t\t\t\t</tr>
\t\t\t\t\t";
                } else {
                    // line 32
                    echo "\t\t\t\t\t\t<tr class=\"";
                    if (($this->getAttribute((isset($context["notification_types"]) ? $context["notification_types"] : null), "S_ROW_COUNT") % 2 == 1)) {
                        echo "bg1";
                    } else {
                        echo "bg2";
                    }
                    echo "\">
\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t";
                    // line 34
                    echo $this->getAttribute((isset($context["notification_types"]) ? $context["notification_types"] : null), "NAME");
                    echo "
\t\t\t\t\t\t\t\t";
                    // line 35
                    if ($this->getAttribute((isset($context["notification_types"]) ? $context["notification_types"] : null), "EXPLAIN")) {
                        echo "<br />&nbsp; &nbsp;";
                        echo $this->getAttribute((isset($context["notification_types"]) ? $context["notification_types"] : null), "EXPLAIN");
                    }
                    // line 36
                    echo "\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t";
                    // line 37
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["notification_types"]) ? $context["notification_types"] : null), "notification_methods"));
                    foreach ($context['_seq'] as $context["_key"] => $context["notification_methods"]) {
                        // line 38
                        echo "\t\t\t\t\t\t\t\t<td class=\"text-center\"><input type=\"checkbox\" name=\"";
                        echo $this->getAttribute((isset($context["notification_types"]) ? $context["notification_types"] : null), "TYPE");
                        echo "_";
                        echo $this->getAttribute((isset($context["notification_methods"]) ? $context["notification_methods"] : null), "METHOD");
                        echo "\"";
                        if ($this->getAttribute((isset($context["notification_methods"]) ? $context["notification_methods"] : null), "SUBSCRIBED")) {
                            echo " checked=\"checked\"";
                        }
                        echo " /></td>
\t\t\t\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['notification_methods'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 40
                    echo "\t\t\t\t\t\t\t<td class=\"text-center\"><input type=\"checkbox\" name=\"";
                    echo $this->getAttribute((isset($context["notification_types"]) ? $context["notification_types"] : null), "TYPE");
                    echo "_notification\"";
                    if ($this->getAttribute((isset($context["notification_types"]) ? $context["notification_types"] : null), "SUBSCRIBED")) {
                        echo " checked=\"checked\"";
                    }
                    echo " /></td>
\t\t\t\t\t\t</tr>
\t\t\t\t\t";
                }
                // line 43
                echo "\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['notification_types'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 44
            echo "\t\t\t\t</tbody>
\t\t\t</table>
\t\t</div>
\t\t";
        } else {
            // line 48
            echo "
\t\t\t";
            // line 49
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "notification_list"))) {
                // line 50
                echo "\t\t\t<div class=\"pages clearfix\">
\t\t\t\t";
                // line 51
                if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                    // line 52
                    echo "\t\t\t\t\t";
                    $location = "pagination.html";
                    $namespace = false;
                    if (strpos($location, '@') === 0) {
                        $namespace = substr($location, 1, strpos($location, '/') - 1);
                        $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                        $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
                    }
                    $this->env->loadTemplate("pagination.html")->display($context);
                    if ($namespace) {
                        $this->env->setNamespaceLookUpOrder($previous_look_up_order);
                    }
                    // line 53
                    echo "\t\t\t\t";
                }
                // line 54
                echo "\t\t\t\t<div class=\"btn-group pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\">
\t\t\t\t\t<span class=\"btn btn-default disabled\">";
                // line 55
                echo $this->env->getExtension('phpbb')->lang("NOTIFICATIONS");
                echo " [<strong>";
                echo (isset($context["TOTAL_COUNT"]) ? $context["TOTAL_COUNT"] : null);
                echo "</strong>]</span>
\t\t\t\t\t<span class=\"btn btn-default disabled\">";
                // line 56
                echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
                echo "</span>
\t\t\t\t\t";
                // line 57
                if ((isset($context["U_MARK_ALL"]) ? $context["U_MARK_ALL"] : null)) {
                    // line 58
                    echo "\t\t\t\t\t<a href=\"";
                    echo (isset($context["U_MARK_ALL"]) ? $context["U_MARK_ALL"] : null);
                    echo "\" class=\"btn btn-default\">";
                    echo $this->env->getExtension('phpbb')->lang("NOTIFICATIONS_MARK_ALL_READ");
                    echo "</a>
\t\t\t\t\t";
                }
                // line 60
                echo "\t\t\t\t</div>
\t\t\t</div>

\t\t<div class=\"panel panel-default\">
\t\t\t<div class=\"clearfix\">
\t\t\t\t<h4 class=\"col-md-10 col-sm-10 col-xs-9\">";
                // line 65
                echo $this->env->getExtension('phpbb')->lang("NOTIFICATIONS");
                echo "</h4>
\t\t\t\t<h5 class=\"col-md-2 col-sm-2 col-xs-3 text-center\">";
                // line 66
                echo $this->env->getExtension('phpbb')->lang("MARK_READ");
                echo "</h5>
\t\t\t</div>
\t\t\t";
                // line 68
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "notification_list"));
                foreach ($context['_seq'] as $context["_key"] => $context["notification_list"]) {
                    // line 69
                    echo "\t\t\t\t<div class=\"clearfix icon notification-text";
                    if ($this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "UNREAD")) {
                        echo " alert-info";
                    } else {
                        if (($this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "S_ROW_COUNT") % 2 == 1)) {
                            echo " bg1";
                        } else {
                            echo " bg2";
                        }
                    }
                    if ($this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "STYLING")) {
                        echo " ";
                        echo $this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "STYLING");
                    }
                    echo "\">
\t\t\t\t\t<div class=\"col-md-1 col-sm-1 hidden-xs\">
\t\t\t\t\t\t";
                    // line 71
                    if ($this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "AVATAR")) {
                        echo $this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "AVATAR");
                    } else {
                        echo "<img src=\"";
                        echo (isset($context["T_THEME_PATH"]) ? $context["T_THEME_PATH"] : null);
                        echo "/images/no_avatar.gif\" alt=\"\" class=\"img-thumbnail\" />";
                    }
                    // line 72
                    echo "\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-md-9 col-sm-9 col-xs-9\">
\t\t\t\t\t\t";
                    // line 74
                    if ($this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "URL")) {
                        echo "<a href=\"";
                        if ($this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "UNREAD")) {
                            echo $this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "U_MARK_READ");
                        } else {
                            echo $this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "URL");
                        }
                        echo "\">";
                    }
                    // line 75
                    echo "\t\t\t\t\t\t";
                    echo $this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "FORMATTED_TITLE");
                    if ($this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "REFERENCE")) {
                        echo " ";
                        echo $this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "REFERENCE");
                    }
                    echo "<br />
\t\t\t\t\t\t";
                    // line 76
                    if ($this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "URL")) {
                        echo "</a>";
                    }
                    echo "\t\t\t\t
\t\t\t\t\t\t";
                    // line 77
                    if ($this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "FORUM")) {
                        echo $this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "FORUM");
                        echo "<br />";
                    }
                    // line 78
                    echo "\t\t\t\t\t\t";
                    if ($this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "REASON")) {
                        echo $this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "REASON");
                        echo "<br />";
                    }
                    // line 79
                    echo "\t\t\t\t\t\t";
                    echo $this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "TIME");
                    echo "
\t\t\t\t\t</div>
            
\t\t\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-3 text-center\">
\t\t\t\t\t\t<input type=\"checkbox\" name=\"mark[]\" value=\"";
                    // line 83
                    echo $this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "NOTIFICATION_ID");
                    echo "\"";
                    if ((!$this->getAttribute((isset($context["notification_list"]) ? $context["notification_list"] : null), "UNREAD"))) {
                        echo " disabled=\"disabled\"";
                    }
                    echo " />
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['notification_list'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 87
                echo "\t\t\t</div>

\t\t\t";
            } else {
                // line 90
                echo "\t\t\t\t<div class=\"alert alert-info\">
\t\t\t\t\t";
                // line 91
                echo $this->env->getExtension('phpbb')->lang("NO_NOTIFICATIONS");
                echo "
\t\t\t\t</div>
\t\t\t";
            }
            // line 94
            echo "
\t\t";
        }
        // line 96
        echo "
\t\t";
        // line 97
        if ((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "notification_types")) || twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "notification_list")))) {
            // line 98
            echo "\t\t<fieldset class=\"panel-group text-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t\t<input type=\"hidden\" name=\"form_time\" value=\"";
            // line 99
            echo (isset($context["FORM_TIME"]) ? $context["FORM_TIME"] : null);
            echo "\" />
\t\t\t";
            // line 100
            echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
            echo "
\t\t\t<div class=\"btn-group\">
\t\t\t\t<a href=\"#\" onclick=\"\$('#ucp input:checkbox').prop('checked', false); return false;\" class=\"btn btn-warning\">";
            // line 102
            echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
            echo "</a>
\t\t\t\t<input type=\"submit\" name=\"submit\" value=\"";
            // line 103
            if (((isset($context["MODE"]) ? $context["MODE"] : null) == "notification_options")) {
                echo $this->env->getExtension('phpbb')->lang("SUBMIT");
            } else {
                echo $this->env->getExtension('phpbb')->lang("MARK_READ");
            }
            echo "\" class=\"btn btn-default\" />
\t\t\t\t<a href=\"#\" onclick=\"\$('#ucp input:checkbox').prop('checked', true); return false;\" class=\"btn btn-info\">";
            // line 104
            echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
            echo "</a>
\t\t\t</div>
\t\t\t";
            // line 106
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t\t</fieldset>

\t\t<div class=\"pages clearfix\">
\t\t\t";
            // line 110
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                // line 111
                echo "\t\t\t\t";
                $location = "pagination.html";
                $namespace = false;
                if (strpos($location, '@') === 0) {
                    $namespace = substr($location, 1, strpos($location, '/') - 1);
                    $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                    $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
                }
                $this->env->loadTemplate("pagination.html")->display($context);
                if ($namespace) {
                    $this->env->setNamespaceLookUpOrder($previous_look_up_order);
                }
                // line 112
                echo "\t\t\t";
            }
            // line 113
            echo "\t\t\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t\t<span class=\"btn btn-default disabled\">";
            // line 114
            echo $this->env->getExtension('phpbb')->lang("NOTIFICATIONS");
            echo " [<strong>";
            echo (isset($context["TOTAL_COUNT"]) ? $context["TOTAL_COUNT"] : null);
            echo "</strong>]</span>
\t\t\t\t<span class=\"btn btn-default disabled\">";
            // line 115
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t\t\t\t";
            // line 116
            if ((isset($context["U_MARK_ALL"]) ? $context["U_MARK_ALL"] : null)) {
                // line 117
                echo "\t\t\t\t<a href=\"";
                echo (isset($context["U_MARK_ALL"]) ? $context["U_MARK_ALL"] : null);
                echo "\" class=\"btn btn-default\">";
                echo $this->env->getExtension('phpbb')->lang("NOTIFICATIONS_MARK_ALL_READ");
                echo "</a>
\t\t\t\t";
            }
            // line 119
            echo "\t\t\t</div>
\t\t</div>
\t\t";
        }
        // line 122
        echo "
\t</div>
</div>

</form>

";
        // line 128
        $location = "ucp_footer.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("ucp_footer.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
    }

    public function getTemplateName()
    {
        return "ucp_notifications.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  446 => 128,  438 => 122,  433 => 119,  425 => 117,  423 => 116,  419 => 115,  413 => 114,  408 => 113,  405 => 112,  392 => 111,  390 => 110,  383 => 106,  378 => 104,  370 => 103,  366 => 102,  361 => 100,  357 => 99,  352 => 98,  350 => 97,  347 => 96,  343 => 94,  337 => 91,  334 => 90,  329 => 87,  315 => 83,  307 => 79,  301 => 78,  296 => 77,  290 => 76,  281 => 75,  271 => 74,  267 => 72,  259 => 71,  241 => 69,  237 => 68,  232 => 66,  228 => 65,  221 => 60,  213 => 58,  211 => 57,  207 => 56,  201 => 55,  196 => 54,  193 => 53,  180 => 52,  178 => 51,  175 => 50,  173 => 49,  170 => 48,  164 => 44,  158 => 43,  147 => 40,  132 => 38,  128 => 37,  125 => 36,  120 => 35,  116 => 34,  106 => 32,  98 => 29,  95 => 28,  92 => 27,  88 => 26,  80 => 22,  71 => 20,  67 => 19,  63 => 18,  57 => 14,  55 => 13,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
