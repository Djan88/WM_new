<?php

/* ucp_pm_viewfolder.html */
class __TwigTemplate_54e339eab97fd4e6466769b84860ca9a extends Twig_Template
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
";
        // line 3
        if ((!(isset($context["PROMPT"]) ? $context["PROMPT"] : null))) {
            // line 4
            echo "\t";
            $location = "ucp_pm_message_header.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("ucp_pm_message_header.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 6
        echo "
";
        // line 7
        if ((isset($context["PROMPT"]) ? $context["PROMPT"] : null)) {
            // line 8
            echo "\t<form id=\"viewfolder\" method=\"post\" action=\"";
            echo (isset($context["S_PM_ACTION"]) ? $context["S_PM_ACTION"] : null);
            echo "\">
\t<div class=\"panel panel-default\">
\t\t<div class=\"panel-heading\">
\t\t\t<h4 class=\"panel-title\">";
            // line 11
            echo $this->env->getExtension('phpbb')->lang("EXPORT_AS_CSV");
            echo "</h4>
\t\t</div>
\t\t<div class=\" panel-body\">
\t\t<h4>";
            // line 14
            echo $this->env->getExtension('phpbb')->lang("OPTIONS");
            echo "</h4>

\t\t<fieldset class=\"form-horizontal\">
\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"delimiter\">";
            // line 18
            echo $this->env->getExtension('phpbb')->lang("DELIMITER");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"text\" id=\"delimiter\" name=\"delimiter\" value=\",\" /></dd>
\t\t\t</dl>
\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"enclosure\">";
            // line 22
            echo $this->env->getExtension('phpbb')->lang("ENCLOSURE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"text\" id=\"enclosure\" name=\"enclosure\" value=\"&#034;\" /></dd>
\t\t\t</dl>
\t\t</fieldset>

\t\t</div>
\t\t<fieldset class=\"panel-footer text-center\">
\t\t\t<input type=\"hidden\" name=\"export_option\" value=\"CSV\" />
\t\t\t<input class=\"btn btn-success\" type=\"submit\" name=\"submit_export\" value=\"";
            // line 30
            echo $this->env->getExtension('phpbb')->lang("EXPORT_FOLDER");
            echo "\" />&nbsp;
\t\t\t<input class=\"btn btn-danger\" type=\"reset\" value=\"Reset\" name=\"reset\" />&nbsp;
\t\t\t";
            // line 32
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t\t</fieldset>
\t</div>
\t</form>

";
        } else {
            // line 38
            echo "
\t";
            // line 39
            if ((isset($context["NUM_REMOVED"]) ? $context["NUM_REMOVED"] : null)) {
                // line 40
                echo "\t\t<div class=\"alert calert-info\">
\t\t\t";
                // line 41
                echo (isset($context["RULE_REMOVED_MESSAGES"]) ? $context["RULE_REMOVED_MESSAGES"] : null);
                echo "
\t\t</div>
\t";
            }
            // line 44
            echo "
\t";
            // line 45
            if ((isset($context["NUM_NOT_MOVED"]) ? $context["NUM_NOT_MOVED"] : null)) {
                // line 46
                echo "\t\t<div class=\"alert calert-info\">
\t\t\t";
                // line 47
                echo (isset($context["NOT_MOVED_MESSAGES"]) ? $context["NOT_MOVED_MESSAGES"] : null);
                echo "<br />";
                echo (isset($context["RELEASE_MESSAGE_INFO"]) ? $context["RELEASE_MESSAGE_INFO"] : null);
                echo "
\t\t</div>
\t";
            }
            // line 50
            echo "
\t";
            // line 51
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "messagerow"))) {
                // line 52
                echo "\t\t<div class=\"panel panel-default\">
\t\t\t<div class=\"clearfix\">
\t\t\t\t<h4 class=\"col-md-11 col-sm-10 col-xs-10\">";
                // line 54
                echo $this->env->getExtension('phpbb')->lang("MESSAGE");
                echo "</h4>
\t\t\t\t<h5 class=\"col-md-1 col-sm-2 col-xs-2 text-center\">";
                // line 55
                echo $this->env->getExtension('phpbb')->lang("MARK");
                echo "</h5>
\t\t\t</div>

\t\t";
                // line 58
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "messagerow"));
                foreach ($context['_seq'] as $context["_key"] => $context["messagerow"]) {
                    // line 59
                    echo "\t\t\t<div class=\"clearfix icon ";
                    echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "FOLDER_IMG_STYLE");
                    if (($this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "S_ROW_COUNT") % 2 == 1)) {
                        echo " bg1";
                    } else {
                        echo " bg2";
                    }
                    echo "\">
\t\t\t\t<div class=\"folder";
                    // line 60
                    if (((isset($context["S_SHOW_RECIPIENTS"]) ? $context["S_SHOW_RECIPIENTS"] : null) || (isset($context["S_UNREAD"]) ? $context["S_UNREAD"] : null))) {
                        echo " col-md-8 col-sm-7 ";
                    } else {
                        echo " col-md-11 col-sm-10 ";
                    }
                    echo "col-xs-10\"";
                    if (($this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "PM_ICON_URL") && (isset($context["S_PM_ICONS"]) ? $context["S_PM_ICONS"] : null))) {
                        echo " style=\"background-image: url(";
                        echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "PM_ICON_URL");
                        echo ");\"";
                    }
                    echo ">
\t\t\t\t";
                    // line 61
                    if (($this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "S_PM_UNREAD") && (!$this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "S_PM_DELETED")))) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "U_VIEW_PM");
                        echo "\" class=\"icon-link\"></a>";
                    }
                    // line 62
                    echo "                
\t\t\t\t";
                    // line 63
                    if ($this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "S_PM_DELETED")) {
                        // line 64
                        echo "\t\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "U_REMOVE_PM");
                        echo "\" class=\"topictitle\">";
                        echo $this->env->getExtension('phpbb')->lang("DELETE_MESSAGE");
                        echo "</a><br />
\t\t\t\t\t<span class=\"text-danger\">";
                        // line 65
                        echo $this->env->getExtension('phpbb')->lang("MESSAGE_REMOVED_FROM_OUTBOX");
                        echo "</span>
\t\t\t\t";
                    } else {
                        // line 67
                        echo "\t\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "U_VIEW_PM");
                        echo "\" class=\"topictitle\">";
                        echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "SUBJECT");
                        echo "</a>
\t\t\t\t";
                    }
                    // line 69
                    echo "\t\t\t\t";
                    if ($this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "S_AUTHOR_DELETED")) {
                        // line 70
                        echo "\t\t\t\t\t<br /><span class=\"text-warning\">";
                        echo $this->env->getExtension('phpbb')->lang("PM_FROM_REMOVED_AUTHOR");
                        echo "</span>
\t\t\t\t";
                    }
                    // line 72
                    echo "                
\t\t\t\t";
                    // line 73
                    if ($this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "S_PM_REPORTED")) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "U_MCP_REPORT");
                        echo "\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("PM_REPORTED");
                        echo "\"><i class=\"fa fa-exclamation-triangle\"></i></a>";
                    }
                    echo " ";
                    echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "ATTACH_ICON_IMG");
                    echo "<br />
\t\t\t\t";
                    // line 74
                    if ((isset($context["S_SHOW_RECIPIENTS"]) ? $context["S_SHOW_RECIPIENTS"] : null)) {
                        echo $this->env->getExtension('phpbb')->lang("MESSAGE_TO");
                        echo " ";
                        echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "RECIPIENTS");
                    } else {
                        echo $this->env->getExtension('phpbb')->lang("MESSAGE_BY_AUTHOR");
                        echo " ";
                        echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "MESSAGE_AUTHOR_FULL");
                        echo " &raquo; ";
                        echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "SENT_TIME");
                    }
                    // line 75
                    echo "
\t\t\t\t</div>

\t\t\t\t";
                    // line 78
                    if (((isset($context["S_SHOW_RECIPIENTS"]) ? $context["S_SHOW_RECIPIENTS"] : null) || (isset($context["S_UNREAD"]) ? $context["S_UNREAD"] : null))) {
                        // line 79
                        echo "\t\t\t\t<div class=\"col-md-3 col-sm-3 hidden-xs\">
\t\t\t\t\t";
                        // line 80
                        if ((isset($context["S_SHOW_RECIPIENTS"]) ? $context["S_SHOW_RECIPIENTS"] : null)) {
                            // line 81
                            echo "\t\t\t\t\t\t";
                            echo $this->env->getExtension('phpbb')->lang("SENT_AT");
                            echo $this->env->getExtension('phpbb')->lang("COLON");
                            echo " ";
                            echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "SENT_TIME");
                            echo "<br />
\t\t\t\t\t";
                        }
                        // line 83
                        echo "
\t\t\t\t\t";
                        // line 84
                        if ((isset($context["S_UNREAD"]) ? $context["S_UNREAD"] : null)) {
                            // line 85
                            echo "\t\t\t\t\t\t";
                            if ($this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "FOLDER")) {
                                echo "<a href=\"";
                                echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "U_FOLDER");
                                echo "\">";
                                echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "FOLDER");
                                echo "</a>";
                            } else {
                                echo $this->env->getExtension('phpbb')->lang("UNKNOWN_FOLDER");
                            }
                            // line 86
                            echo "\t\t\t\t\t";
                        }
                        // line 87
                        echo "\t\t\t\t</div>
\t\t\t\t";
                    }
                    // line 89
                    echo "\t\t\t\t<div class=\"col-md-1 col-sm-2 col-xs-2 text-center";
                    if ($this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "PM_CLASS")) {
                        echo " ";
                        echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "PM_CLASS");
                    }
                    echo "\"><input type=\"checkbox\" name=\"marked_msg_id[]\" value=\"";
                    echo $this->getAttribute((isset($context["messagerow"]) ? $context["messagerow"] : null), "MESSAGE_ID");
                    echo "\" /></div>
\t\t\t</div>
\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['messagerow'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 92
                echo "\t\t</div>
\t";
            } else {
                // line 94
                echo "\t\t<div class=\"alert alert-info\">
\t\t\t";
                // line 95
                if (((isset($context["S_COMPOSE_PM_VIEW"]) ? $context["S_COMPOSE_PM_VIEW"] : null) && (isset($context["S_NO_AUTH_SEND_MESSAGE"]) ? $context["S_NO_AUTH_SEND_MESSAGE"] : null))) {
                    // line 96
                    echo "\t\t\t\t";
                    if ((isset($context["S_USER_NEW"]) ? $context["S_USER_NEW"] : null)) {
                        echo $this->env->getExtension('phpbb')->lang("USER_NEW_PERMISSION_DISALLOWED");
                    } else {
                        echo $this->env->getExtension('phpbb')->lang("NO_AUTH_SEND_MESSAGE");
                    }
                    // line 97
                    echo "\t\t\t";
                } else {
                    // line 98
                    echo "\t\t\t\t";
                    echo $this->env->getExtension('phpbb')->lang("NO_MESSAGES");
                    echo "
\t\t\t";
                }
                // line 100
                echo "\t\t</div>
\t";
            }
            // line 102
            echo "
\t";
            // line 103
            if (((isset($context["FOLDER_CUR_MESSAGES"]) ? $context["FOLDER_CUR_MESSAGES"] : null) != 0)) {
                // line 104
                echo "\t\t<fieldset class=\"panel-group\">
\t\t\t<div class=\"pull-";
                // line 105
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\"><label for=\"export_option\">";
                echo $this->env->getExtension('phpbb')->lang("EXPORT_FOLDER");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label> <select name=\"export_option\" id=\"export_option\"><option value=\"CSV\">";
                echo $this->env->getExtension('phpbb')->lang("EXPORT_AS_CSV");
                echo "</option><option value=\"CSV_EXCEL\">";
                echo $this->env->getExtension('phpbb')->lang("EXPORT_AS_CSV_EXCEL");
                echo "</option><option value=\"XML\">";
                echo $this->env->getExtension('phpbb')->lang("EXPORT_AS_XML");
                echo "</option></select> <input class=\"btn btn-default\" type=\"submit\" name=\"submit_export\" value=\"";
                echo $this->env->getExtension('phpbb')->lang("GO");
                echo "\" /></div>
\t\t\t<div class=\"pull-";
                // line 106
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\"><select name=\"mark_option\">";
                echo (isset($context["S_MARK_OPTIONS"]) ? $context["S_MARK_OPTIONS"] : null);
                echo (isset($context["S_MOVE_MARKED_OPTIONS"]) ? $context["S_MOVE_MARKED_OPTIONS"] : null);
                echo "</select> <input class=\"btn btn-default\" type=\"submit\" name=\"submit_mark\" value=\"";
                echo $this->env->getExtension('phpbb')->lang("GO");
                echo "\" /></div>
\t\t</fieldset>

\t\t<div class=\"panel-group text-";
                // line 109
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\">
\t\t\t<div class=\"btn-group\">
\t\t\t\t<a href=\"#\" onclick=\"marklist('viewfolder', 'marked_msg', false); return false;\" class=\"btn btn-warning\">";
                // line 111
                echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
                echo "</a>
\t\t\t\t<a href=\"#\" onclick=\"marklist('viewfolder', 'marked_msg', true); return false;\" class=\"btn btn-info\">";
                // line 112
                echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
                echo "</a>
\t\t\t</div>
\t\t</div>

\t\t<div class=\"pages clearfix\">
\t\t\t";
                // line 117
                if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                    echo " 
\t\t\t\t";
                    // line 118
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
                    // line 119
                    echo "\t\t\t";
                }
                // line 120
                echo "\t\t\t<div class=\"btn-group pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\">
\t\t\t\t<span class=\"btn btn-default disabled\">";
                // line 121
                echo (isset($context["TOTAL_MESSAGES"]) ? $context["TOTAL_MESSAGES"] : null);
                echo "</span>
\t\t\t\t<span class=\"btn btn-default disabled\">";
                // line 122
                echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
                echo "</span>
\t\t\t</div>
\t\t</div>
\t";
            }
            // line 126
            echo "
\t\t";
            // line 127
            if (((isset($context["FOLDER_CUR_MESSAGES"]) ? $context["FOLDER_CUR_MESSAGES"] : null) != 0)) {
                // line 128
                echo "\t\t<fieldset class=\"panel-group text-center\">
\t\t\t<label>";
                // line 129
                echo $this->env->getExtension('phpbb')->lang("DISPLAY");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label> ";
                echo (isset($context["S_SELECT_SORT_DAYS"]) ? $context["S_SELECT_SORT_DAYS"] : null);
                echo "
\t\t\t<label>";
                // line 130
                echo $this->env->getExtension('phpbb')->lang("SORT_BY");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label> ";
                echo (isset($context["S_SELECT_SORT_KEY"]) ? $context["S_SELECT_SORT_KEY"] : null);
                echo " ";
                echo (isset($context["S_SELECT_SORT_DIR"]) ? $context["S_SELECT_SORT_DIR"] : null);
                echo "
\t\t\t<input type=\"submit\" name=\"sort\" value=\"";
                // line 131
                echo $this->env->getExtension('phpbb')->lang("GO");
                echo "\" class=\"btn btn-default\" />
\t\t\t<input type=\"hidden\" name=\"cur_folder_id\" value=\"";
                // line 132
                echo (isset($context["CUR_FOLDER_ID"]) ? $context["CUR_FOLDER_ID"] : null);
                echo "\" />
\t\t</fieldset>
\t\t";
            }
            // line 135
            echo "
\t\t</div>
\t</div>

\t";
            // line 139
            $location = "ucp_pm_message_footer.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("ucp_pm_message_footer.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 141
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
        return "ucp_pm_viewfolder.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  480 => 141,  467 => 139,  461 => 135,  455 => 132,  451 => 131,  442 => 130,  435 => 129,  432 => 128,  430 => 127,  427 => 126,  420 => 122,  416 => 121,  411 => 120,  408 => 119,  396 => 118,  392 => 117,  384 => 112,  380 => 111,  375 => 109,  364 => 106,  349 => 105,  346 => 104,  344 => 103,  341 => 102,  337 => 100,  331 => 98,  328 => 97,  321 => 96,  319 => 95,  316 => 94,  312 => 92,  297 => 89,  293 => 87,  290 => 86,  279 => 85,  277 => 84,  274 => 83,  265 => 81,  263 => 80,  260 => 79,  258 => 78,  253 => 75,  241 => 74,  229 => 73,  226 => 72,  220 => 70,  217 => 69,  209 => 67,  204 => 65,  197 => 64,  195 => 63,  192 => 62,  186 => 61,  172 => 60,  162 => 59,  158 => 58,  152 => 55,  148 => 54,  144 => 52,  142 => 51,  139 => 50,  131 => 47,  128 => 46,  126 => 45,  123 => 44,  117 => 41,  114 => 40,  112 => 39,  109 => 38,  100 => 32,  95 => 30,  83 => 22,  75 => 18,  68 => 14,  62 => 11,  55 => 8,  53 => 7,  50 => 6,  36 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
