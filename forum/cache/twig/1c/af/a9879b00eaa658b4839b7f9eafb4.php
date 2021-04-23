<?php

/* mcp_post.html */
class __TwigTemplate_1cafa9879b00eaa658b4839b7f9eafb4 extends Twig_Template
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
        $location = "mcp_header.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("mcp_header.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 2
        echo "
";
        // line 3
        if ((isset($context["S_MCP_REPORT"]) ? $context["S_MCP_REPORT"] : null)) {
            // line 4
            echo "\t";
            if ((isset($context["S_PM"]) ? $context["S_PM"] : null)) {
                // line 5
                echo "\t<h3>";
                echo $this->env->getExtension('phpbb')->lang("PM_REPORT_DETAILS");
                echo "</h3>
\t";
            } else {
                // line 7
                echo "\t<h3>";
                echo $this->env->getExtension('phpbb')->lang("REPORT_DETAILS");
                echo "</h3>
\t";
            }
            // line 9
            echo "
\t<div id=\"report\" class=\"panel panel-default\">
\t\t<div class=\"panel-heading\">
\t\t\t<h4 class=\"panel-title\">";
            // line 12
            echo $this->env->getExtension('phpbb')->lang("REPORT_REASON");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " ";
            echo (isset($context["REPORT_REASON_TITLE"]) ? $context["REPORT_REASON_TITLE"] : null);
            echo "</h4>
\t\t</div>
\t\t<div class=\"panel-body\">

\t\t<div class=\"postbody\">
\t\t\t<p>";
            // line 17
            echo $this->env->getExtension('phpbb')->lang("REPORTED");
            echo " ";
            echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
            echo " ";
            echo (isset($context["REPORTER_FULL"]) ? $context["REPORTER_FULL"] : null);
            echo " &laquo; ";
            echo (isset($context["REPORT_DATE"]) ? $context["REPORT_DATE"] : null);
            echo "</p>
\t\t";
            // line 18
            if ((isset($context["S_REPORT_CLOSED"]) ? $context["S_REPORT_CLOSED"] : null)) {
                // line 19
                echo "\t\t\t<p class=\"alert alert-info\">";
                echo $this->env->getExtension('phpbb')->lang("REPORT_CLOSED");
                echo "</p>
\t\t";
            }
            // line 21
            echo "\t\t\t<div class=\"content\">
\t\t\t";
            // line 22
            if ((isset($context["REPORT_TEXT"]) ? $context["REPORT_TEXT"] : null)) {
                // line 23
                echo "\t\t\t\t";
                echo (isset($context["REPORT_TEXT"]) ? $context["REPORT_TEXT"] : null);
                echo "
\t\t\t";
            } else {
                // line 25
                echo "\t\t\t\t";
                echo (isset($context["REPORT_REASON_DESCRIPTION"]) ? $context["REPORT_REASON_DESCRIPTION"] : null);
                echo "
\t\t\t";
            }
            // line 27
            echo "\t\t\t</div>
\t\t</div>

\t\t</div>

\t\t<form method=\"post\" id=\"mcp_report\" action=\"";
            // line 32
            echo (isset($context["S_CLOSE_ACTION"]) ? $context["S_CLOSE_ACTION"] : null);
            echo "\">
\t\t\t<fieldset class=\"panel-footer text-center\">
\t\t\t\t";
            // line 34
            if ((!(isset($context["S_REPORT_CLOSED"]) ? $context["S_REPORT_CLOSED"] : null))) {
                // line 35
                echo "\t\t\t\t\t<input class=\"btn btn-primary\" type=\"submit\" value=\"";
                echo $this->env->getExtension('phpbb')->lang("CLOSE_REPORT");
                echo "\" name=\"action[close]\" /> &nbsp;
\t\t\t\t";
            }
            // line 37
            echo "\t\t\t\t<input class=\"btn btn-warning\" type=\"submit\" value=\"";
            echo $this->env->getExtension('phpbb')->lang("DELETE_REPORT");
            echo "\" name=\"action[delete]\" />
\t\t\t\t<input type=\"hidden\" name=\"report_id_list[]\" value=\"";
            // line 38
            echo (isset($context["REPORT_ID"]) ? $context["REPORT_ID"] : null);
            echo "\" />
\t\t\t\t";
            // line 39
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t\t\t</fieldset>
\t\t</form>
\t</div>

";
        } else {
            // line 45
            echo "\t<h3>";
            echo $this->env->getExtension('phpbb')->lang("POST_DETAILS");
            echo "</h3>
";
        }
        // line 47
        echo "
<div id=\"expand\" class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<span class=\"pull-";
        // line 50
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo "\"><a href=\"#post_details\" class=\"btn btn-default btn-xs\" onclick=\"viewableArea(getElementById('post_details'), true); var rev_text = getElementById('expand').getElementsByTagName('a').item(0).firstChild; if (rev_text.data.trim() == '";
        echo addslashes($this->env->getExtension('phpbb')->lang("EXPAND_VIEW"));
        echo "'){rev_text.data = '";
        echo addslashes($this->env->getExtension('phpbb')->lang("COLLAPSE_VIEW"));
        echo "'; } else if (rev_text.data.trim() == '";
        echo addslashes($this->env->getExtension('phpbb')->lang("COLLAPSE_VIEW"));
        echo "'){rev_text.data = '";
        echo addslashes($this->env->getExtension('phpbb')->lang("EXPAND_VIEW"));
        echo "';} return false;\">";
        echo $this->env->getExtension('phpbb')->lang("EXPAND_VIEW");
        echo "</a></span>
\t\t<h4 class=\"panel-title\"><a href=\"";
        // line 51
        echo (isset($context["U_VIEW_POST"]) ? $context["U_VIEW_POST"] : null);
        echo "\">";
        echo (isset($context["POST_SUBJECT"]) ? $context["POST_SUBJECT"] : null);
        echo "</a></h4>
\t</div>
\t<div class=\"panel-body\">

\t<div class=\"postbody\">
\t\t<div class=\"panel-group post-buttons clearfix\">
\t\t";
        // line 57
        if ((isset($context["S_PM"]) ? $context["S_PM"] : null)) {
            // line 58
            echo "\t\t\t<strong>";
            echo $this->env->getExtension('phpbb')->lang("SENT_AT");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</strong> ";
            echo (isset($context["POST_DATE"]) ? $context["POST_DATE"] : null);
            echo " <strong>";
            echo $this->env->getExtension('phpbb')->lang("PM_FROM");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</strong> ";
            echo (isset($context["POST_AUTHOR_FULL"]) ? $context["POST_AUTHOR_FULL"] : null);
            echo "
\t\t";
        } else {
            // line 60
            echo "\t\t\t<i class=\"fa fa-file-o tip\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("POST");
            echo "\"></i> ";
            echo $this->env->getExtension('phpbb')->lang("POSTED");
            echo " ";
            echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
            echo " ";
            echo (isset($context["POST_AUTHOR_FULL"]) ? $context["POST_AUTHOR_FULL"] : null);
            echo " &raquo; ";
            echo (isset($context["POST_DATE"]) ? $context["POST_DATE"] : null);
            echo "
\t\t";
        }
        // line 62
        echo "\t\t\t";
        if ((isset($context["U_EDIT"]) ? $context["U_EDIT"] : null)) {
            // line 63
            echo "\t\t\t<div class=\"btn-toolbar pull-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t\t\t<a href=\"";
            // line 64
            echo (isset($context["U_EDIT"]) ? $context["U_EDIT"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("EDIT_POST");
            echo "\" class=\"btn btn-primary\"><i class=\"fa fa-edit fa-fw\"></i><span>";
            echo $this->env->getExtension('phpbb')->lang("EDIT_POST");
            echo "</span></a>
\t\t\t</div>
\t\t\t";
        }
        // line 67
        echo "\t\t</div>

\t\t";
        // line 69
        if ((isset($context["S_PM"]) ? $context["S_PM"] : null)) {
            // line 70
            echo "\t\t<p>
\t\t\t";
            // line 71
            if ((isset($context["S_TO_RECIPIENT"]) ? $context["S_TO_RECIPIENT"] : null)) {
                echo "<strong>";
                echo $this->env->getExtension('phpbb')->lang("TO");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</strong> ";
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "to_recipient"));
                foreach ($context['_seq'] as $context["_key"] => $context["to_recipient"]) {
                    if ($this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "NAME_FULL")) {
                        echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "NAME_FULL");
                    } else {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "U_VIEW");
                        echo "\" style=\"color:";
                        if ($this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "COLOUR")) {
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "COLOUR");
                        } elseif ($this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "IS_GROUP")) {
                            echo "#0000FF";
                        }
                        echo ";\">";
                        echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "NAME");
                        echo "</a>";
                    }
                    echo "&nbsp;";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['to_recipient'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                echo "<br />";
            }
            // line 72
            echo "\t\t\t";
            if ((isset($context["S_BCC_RECIPIENT"]) ? $context["S_BCC_RECIPIENT"] : null)) {
                echo "<strong>";
                echo $this->env->getExtension('phpbb')->lang("BCC");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</strong> ";
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "bcc_recipient"));
                foreach ($context['_seq'] as $context["_key"] => $context["bcc_recipient"]) {
                    if ($this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "NAME_FULL")) {
                        echo $this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "NAME_FULL");
                    } else {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "U_VIEW");
                        echo "\" style=\"color:";
                        if ($this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "COLOUR")) {
                            echo $this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "COLOUR");
                        } elseif ($this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "IS_GROUP")) {
                            echo "#0000FF";
                        }
                        echo ";\">";
                        echo $this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "NAME");
                        echo "</a>";
                    }
                    echo "&nbsp;";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['bcc_recipient'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
            }
            // line 73
            echo "\t\t</p>
\t\t";
        }
        // line 75
        echo "
\t\t";
        // line 76
        if ((isset($context["S_POST_UNAPPROVED"]) ? $context["S_POST_UNAPPROVED"] : null)) {
            // line 77
            echo "\t\t\t<form method=\"post\" id=\"mcp_approve\" action=\"";
            echo (isset($context["U_APPROVE_ACTION"]) ? $context["U_APPROVE_ACTION"] : null);
            echo "\">

\t\t\t<div class=\"alert alert-warning\">
\t\t\t\t<input class=\"btn btn-danger\" type=\"submit\" value=\"";
            // line 80
            echo $this->env->getExtension('phpbb')->lang("DISAPPROVE");
            echo "\" name=\"action[disapprove]\" /> &nbsp;
\t\t\t\t<input class=\"btn btn-success\" type=\"submit\" value=\"";
            // line 81
            echo $this->env->getExtension('phpbb')->lang("APPROVE");
            echo "\" name=\"action[approve]\" />
\t\t\t\t";
            // line 82
            if ((!(isset($context["S_FIRST_POST"]) ? $context["S_FIRST_POST"] : null))) {
                echo "<input type=\"hidden\" name=\"mode\" value=\"unapproved_posts\" />";
            }
            // line 83
            echo "\t\t\t\t<input type=\"hidden\" name=\"post_id_list[]\" value=\"";
            echo (isset($context["POST_ID"]) ? $context["POST_ID"] : null);
            echo "\" />
\t\t\t\t";
            // line 84
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t\t\t</div>
\t\t\t</form>
\t\t";
        } elseif ((isset($context["S_POST_DELETED"]) ? $context["S_POST_DELETED"] : null)) {
            // line 88
            echo "\t\t\t<form method=\"post\" id=\"mcp_approve\" action=\"";
            echo (isset($context["U_APPROVE_ACTION"]) ? $context["U_APPROVE_ACTION"] : null);
            echo "\">

\t\t\t<div class=\"alert alert-warning\">
\t\t\t\t<input class=\"btn btn-danger\" type=\"submit\" value=\"";
            // line 91
            echo $this->env->getExtension('phpbb')->lang("DELETE");
            echo "\" name=\"action[disapprove]\" /> &nbsp;
\t\t\t\t<input class=\"btn btn-success\" type=\"submit\" value=\"";
            // line 92
            echo $this->env->getExtension('phpbb')->lang("RESTORE");
            echo "\" name=\"action[restore]\" />
\t\t\t\t";
            // line 93
            if ((!(isset($context["S_FIRST_POST"]) ? $context["S_FIRST_POST"] : null))) {
                echo "<input type=\"hidden\" name=\"mode\" value=\"unapproved_posts\" />";
            }
            // line 94
            echo "\t\t\t\t<input type=\"hidden\" name=\"post_id_list[]\" value=\"";
            echo (isset($context["POST_ID"]) ? $context["POST_ID"] : null);
            echo "\" />
\t\t\t\t";
            // line 95
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t\t\t</div>
\t\t\t</form>
\t\t";
        }
        // line 99
        echo "
\t\t";
        // line 100
        if ((isset($context["S_MESSAGE_REPORTED"]) ? $context["S_MESSAGE_REPORTED"] : null)) {
            // line 101
            echo "\t\t\t<div class=\"alert alert-danger\">
\t\t\t\t<a href=\"";
            // line 102
            echo (isset($context["U_MCP_REPORT"]) ? $context["U_MCP_REPORT"] : null);
            echo "\"><i class=\"fa fa-exclamation-triangle\"></i> <strong>";
            echo $this->env->getExtension('phpbb')->lang("MESSAGE_REPORTED");
            echo "</strong></a>
\t\t\t</div>
\t\t";
        }
        // line 105
        echo "
\t\t<div class=\"content\" id=\"post_details\">
\t\t\t";
        // line 107
        echo (isset($context["POST_PREVIEW"]) ? $context["POST_PREVIEW"] : null);
        echo "
\t\t</div>

\t\t";
        // line 110
        if ((isset($context["S_HAS_ATTACHMENTS"]) ? $context["S_HAS_ATTACHMENTS"] : null)) {
            // line 111
            echo "\t\t\t<div class=\"attachbox pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t\t<p>";
            // line 112
            echo $this->env->getExtension('phpbb')->lang("ATTACHMENTS");
            echo "</p>
\t\t\t\t";
            // line 113
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "attachment"));
            foreach ($context['_seq'] as $context["_key"] => $context["attachment"]) {
                // line 114
                echo "\t\t\t\t<div class=\"panel panel-default\">";
                echo $this->getAttribute((isset($context["attachment"]) ? $context["attachment"] : null), "DISPLAY_ATTACHMENT");
                echo "</div>
\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attachment'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 116
            echo "\t\t\t</div>
\t\t\t<div class=\"clearfix\"></div>
\t\t";
        }
        // line 119
        echo "
\t\t";
        // line 120
        if (((isset($context["DELETED_MESSAGE"]) ? $context["DELETED_MESSAGE"] : null) || (isset($context["DELETE_REASON"]) ? $context["DELETE_REASON"] : null))) {
            // line 121
            echo "\t\t\t<div class=\"alert alert-danger\">
\t\t\t\t";
            // line 122
            echo (isset($context["DELETED_MESSAGE"]) ? $context["DELETED_MESSAGE"] : null);
            echo "
\t\t\t\t";
            // line 123
            if ((isset($context["DELETE_REASON"]) ? $context["DELETE_REASON"] : null)) {
                echo "<br /><strong>";
                echo $this->env->getExtension('phpbb')->lang("REASON");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</strong> <em>";
                echo (isset($context["DELETE_REASON"]) ? $context["DELETE_REASON"] : null);
                echo "</em>";
            }
            // line 124
            echo "\t\t\t</div>
\t\t";
        }
        // line 126
        echo "
\t\t";
        // line 127
        if ((isset($context["SIGNATURE"]) ? $context["SIGNATURE"] : null)) {
            // line 128
            echo "\t\t\t<div id=\"sig";
            echo (isset($context["POST_ID"]) ? $context["POST_ID"] : null);
            echo "\" class=\"panel-footer\">";
            echo (isset($context["SIGNATURE"]) ? $context["SIGNATURE"] : null);
            echo "</div>
\t\t";
        }
        // line 130
        echo "
\t\t";
        // line 131
        if (((isset($context["S_MCP_REPORT"]) ? $context["S_MCP_REPORT"] : null) && (isset($context["S_CAN_VIEWIP"]) ? $context["S_CAN_VIEWIP"] : null))) {
            // line 132
            echo "\t\t\t<div>
\t\t\t";
            // line 133
            if ((isset($context["S_PM"]) ? $context["S_PM"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("THIS_PM_IP");
            } else {
                echo $this->env->getExtension('phpbb')->lang("THIS_POST_IP");
            }
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " ";
            if ((isset($context["U_WHOIS"]) ? $context["U_WHOIS"] : null)) {
                // line 134
                echo "\t\t\t\t<a href=\"";
                echo (isset($context["U_WHOIS"]) ? $context["U_WHOIS"] : null);
                echo "\">";
                if ((isset($context["POST_IPADDR"]) ? $context["POST_IPADDR"] : null)) {
                    echo (isset($context["POST_IPADDR"]) ? $context["POST_IPADDR"] : null);
                } else {
                    echo (isset($context["POST_IP"]) ? $context["POST_IP"] : null);
                }
                echo "</a> (";
                if ((isset($context["POST_IPADDR"]) ? $context["POST_IPADDR"] : null)) {
                    echo (isset($context["POST_IP"]) ? $context["POST_IP"] : null);
                } else {
                    echo "<a href=\"";
                    echo (isset($context["U_LOOKUP_IP"]) ? $context["U_LOOKUP_IP"] : null);
                    echo "\">";
                    echo $this->env->getExtension('phpbb')->lang("LOOKUP_IP");
                    echo "</a>";
                }
                echo ")
\t\t\t";
            } else {
                // line 136
                echo "\t\t\t\t";
                if ((isset($context["POST_IPADDR"]) ? $context["POST_IPADDR"] : null)) {
                    echo (isset($context["POST_IPADDR"]) ? $context["POST_IPADDR"] : null);
                    echo " (";
                    echo (isset($context["POST_IP"]) ? $context["POST_IP"] : null);
                    echo ")";
                } else {
                    echo (isset($context["POST_IP"]) ? $context["POST_IP"] : null);
                    if ((isset($context["U_LOOKUP_IP"]) ? $context["U_LOOKUP_IP"] : null)) {
                        echo " (<a href=\"";
                        echo (isset($context["U_LOOKUP_IP"]) ? $context["U_LOOKUP_IP"] : null);
                        echo "\">";
                        echo $this->env->getExtension('phpbb')->lang("LOOKUP_IP");
                        echo "</a>)";
                    }
                }
                // line 137
                echo "\t\t\t";
            }
            // line 138
            echo "\t\t\t</div>
\t\t";
        }
        // line 140
        echo "
\t</div>

\t</div>
</div>

";
        // line 146
        if ((((isset($context["S_CAN_LOCK_POST"]) ? $context["S_CAN_LOCK_POST"] : null) || (isset($context["S_CAN_DELETE_POST"]) ? $context["S_CAN_DELETE_POST"] : null)) || (isset($context["S_CAN_CHGPOSTER"]) ? $context["S_CAN_CHGPOSTER"] : null))) {
            // line 147
            echo "\t<div class=\"panel panel-default\">
\t\t<div class=\"panel-heading\">
\t\t\t<h4 class=\"panel-title\">";
            // line 149
            echo $this->env->getExtension('phpbb')->lang("MOD_OPTIONS");
            echo "</h4>
\t\t</div>
\t\t<div class=\"panel-body\">

\t\t";
            // line 153
            if ((isset($context["S_CAN_CHGPOSTER"]) ? $context["S_CAN_CHGPOSTER"] : null)) {
                // line 154
                echo "\t\t\t<form method=\"post\" id=\"mcp_chgposter\" action=\"";
                echo (isset($context["U_POST_ACTION"]) ? $context["U_POST_ACTION"] : null);
                echo "\">

\t\t\t<fieldset class=\"form-horizontal\">
\t\t\t";
                // line 157
                if ((isset($context["S_USER_SELECT"]) ? $context["S_USER_SELECT"] : null)) {
                    // line 158
                    echo "\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\">";
                    // line 159
                    echo $this->env->getExtension('phpbb')->lang("CHANGE_POSTER");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label></dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t\t<select name=\"u\" class=\"form-control\">";
                    // line 161
                    echo (isset($context["S_USER_SELECT"]) ? $context["S_USER_SELECT"] : null);
                    echo "</select> <input type=\"submit\" class=\"btn btn-default\" name=\"action[chgposter_ip]\" value=\"";
                    echo $this->env->getExtension('phpbb')->lang("CONFIRM");
                    echo "\" />&nbsp;
\t\t\t\t</dd>
\t\t\t</dl>
\t\t\t";
                }
                // line 165
                echo "\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\">";
                // line 166
                if ((isset($context["S_USER_SELECT"]) ? $context["S_USER_SELECT"] : null)) {
                    echo "&nbsp;";
                } else {
                    echo "<label class=\"control-label\">";
                    echo $this->env->getExtension('phpbb')->lang("CHANGE_POSTER");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label>";
                }
                echo "</dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t<div class=\"input-group\">
\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" value=\"\" />
\t\t\t\t\t<div class=\"input-group-btn\">
\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-default\" name=\"action[chgposter]\" value=\"";
                // line 171
                echo $this->env->getExtension('phpbb')->lang("CONFIRM");
                echo "\" />
\t\t\t\t\t\t<a href=\"";
                // line 172
                echo (isset($context["U_FIND_USERNAME"]) ? $context["U_FIND_USERNAME"] : null);
                echo "\" class=\"btn btn-default\" onclick=\"find_username(this.href); return false;\">";
                echo $this->env->getExtension('phpbb')->lang("FIND_USERNAME");
                echo "</a>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t</dd>
\t\t\t</dl>
\t\t\t";
                // line 177
                echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
                echo "
\t\t\t</fieldset>
\t\t\t</form>
\t\t";
            }
            // line 181
            echo "
\t\t";
            // line 182
            if (((isset($context["S_CAN_LOCK_POST"]) ? $context["S_CAN_LOCK_POST"] : null) || (isset($context["S_CAN_DELETE_POST"]) ? $context["S_CAN_DELETE_POST"] : null))) {
                // line 183
                echo "\t\t\t<form method=\"post\" id=\"mcp\" action=\"";
                echo (isset($context["U_MCP_ACTION"]) ? $context["U_MCP_ACTION"] : null);
                echo "\">

\t\t\t<fieldset class=\"form-horizontal\">
\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\">";
                // line 187
                echo $this->env->getExtension('phpbb')->lang("MOD_OPTIONS");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label></dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t\t<select name=\"action\" class=\"form-control\">
\t\t\t\t\t";
                // line 190
                if ((isset($context["S_CAN_LOCK_POST"]) ? $context["S_CAN_LOCK_POST"] : null)) {
                    if ((isset($context["S_POST_LOCKED"]) ? $context["S_POST_LOCKED"] : null)) {
                        echo "<option value=\"unlock_post\">";
                        echo $this->env->getExtension('phpbb')->lang("UNLOCK_POST");
                        echo " [";
                        echo $this->env->getExtension('phpbb')->lang("UNLOCK_POST_EXPLAIN");
                        echo "]</option>";
                    } else {
                        echo "<option value=\"lock_post\">";
                        echo $this->env->getExtension('phpbb')->lang("LOCK_POST");
                        echo " [";
                        echo $this->env->getExtension('phpbb')->lang("LOCK_POST_EXPLAIN");
                        echo "]</option>";
                    }
                }
                // line 191
                echo "\t\t\t\t\t";
                if ((isset($context["S_CAN_DELETE_POST"]) ? $context["S_CAN_DELETE_POST"] : null)) {
                    echo "<option value=\"delete_post\">";
                    echo $this->env->getExtension('phpbb')->lang("DELETE_POST");
                    echo "</option>";
                }
                // line 192
                echo "\t\t\t\t\t</select> <input class=\"btn btn-default\" type=\"submit\" value=\"";
                echo $this->env->getExtension('phpbb')->lang("SUBMIT");
                echo "\" />
\t\t\t\t</dd>
\t\t\t</dl>
\t\t\t";
                // line 195
                echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
                echo "
\t\t\t</fieldset>
\t\t\t</form>
\t\t";
            }
            // line 199
            echo "
\t\t</div>
\t</div>
";
        }
        // line 203
        echo "
";
        // line 204
        if ((((isset($context["S_MCP_QUEUE"]) ? $context["S_MCP_QUEUE"] : null) || (isset($context["S_MCP_REPORT"]) ? $context["S_MCP_REPORT"] : null)) || (isset($context["RETURN_TOPIC"]) ? $context["RETURN_TOPIC"] : null))) {
            // line 205
            echo "\t<ul class=\"breadcrumb\">
\t";
            // line 206
            if ((isset($context["S_MCP_QUEUE"]) ? $context["S_MCP_QUEUE"] : null)) {
                echo "<li>";
                echo (isset($context["RETURN_QUEUE"]) ? $context["RETURN_QUEUE"] : null);
                echo "</li><li>";
                echo (isset($context["RETURN_TOPIC_SIMPLE"]) ? $context["RETURN_TOPIC_SIMPLE"] : null);
                echo "</li><li>";
                echo (isset($context["RETURN_POST"]) ? $context["RETURN_POST"] : null);
                echo "</li>";
            } elseif ((isset($context["S_MCP_REPORT"]) ? $context["S_MCP_REPORT"] : null)) {
                echo "<li>";
                echo (isset($context["RETURN_REPORTS"]) ? $context["RETURN_REPORTS"] : null);
                echo "</li>";
                if ((!(isset($context["S_PM"]) ? $context["S_PM"] : null))) {
                    echo "<li><a href=\"";
                    echo (isset($context["U_VIEW_POST"]) ? $context["U_VIEW_POST"] : null);
                    echo "\">";
                    echo $this->env->getExtension('phpbb')->lang("VIEW_POST");
                    echo "</a></li><li><a href=\"";
                    echo (isset($context["U_VIEW_TOPIC"]) ? $context["U_VIEW_TOPIC"] : null);
                    echo "\">";
                    echo $this->env->getExtension('phpbb')->lang("VIEW_TOPIC");
                    echo "</a></li><li><a href=\"";
                    echo (isset($context["U_VIEW_FORUM"]) ? $context["U_VIEW_FORUM"] : null);
                    echo "\">";
                    echo $this->env->getExtension('phpbb')->lang("VIEW_FORUM");
                    echo "</a></li>";
                }
            } else {
                echo "<li>";
                echo (isset($context["RETURN_TOPIC"]) ? $context["RETURN_TOPIC"] : null);
                echo "</li>";
            }
            // line 207
            echo "\t</UL>
";
        }
        // line 209
        echo "
";
        // line 210
        if ((isset($context["S_MCP_QUEUE"]) ? $context["S_MCP_QUEUE"] : null)) {
        } else {
            // line 212
            echo "
\t";
            // line 213
            if ((isset($context["S_SHOW_USER_NOTES"]) ? $context["S_SHOW_USER_NOTES"] : null)) {
                // line 214
                echo "\t\t<div id=\"usernotes\">

\t\t\t<form method=\"post\" id=\"mcp_notes\" action=\"";
                // line 216
                echo (isset($context["U_POST_ACTION"]) ? $context["U_POST_ACTION"] : null);
                echo "\">

\t\t\t";
                // line 218
                if ((isset($context["S_USER_NOTES"]) ? $context["S_USER_NOTES"] : null)) {
                    // line 219
                    echo "\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">";
                    // line 221
                    echo $this->env->getExtension('phpbb')->lang("FEEDBACK");
                    echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">

\t\t\t\t";
                    // line 225
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "usernotes"));
                    foreach ($context['_seq'] as $context["_key"] => $context["usernotes"]) {
                        // line 226
                        echo "\t\t\t\t\t<strong>";
                        echo $this->env->getExtension('phpbb')->lang("REPORTED_BY");
                        echo $this->env->getExtension('phpbb')->lang("COLON");
                        echo " ";
                        echo $this->getAttribute((isset($context["usernotes"]) ? $context["usernotes"] : null), "REPORT_BY");
                        echo " &laquo; ";
                        echo $this->getAttribute((isset($context["usernotes"]) ? $context["usernotes"] : null), "REPORT_AT");
                        echo "</strong>
\t\t\t\t\t";
                        // line 227
                        if ((isset($context["S_CLEAR_ALLOWED"]) ? $context["S_CLEAR_ALLOWED"] : null)) {
                            echo "<div class=\"pull-";
                            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                            echo "\"><input type=\"checkbox\" name=\"marknote[]\" value=\"";
                            echo $this->getAttribute((isset($context["usernotes"]) ? $context["usernotes"] : null), "ID");
                            echo "\" /></div>";
                        }
                        // line 228
                        echo "\t\t\t\t\t<hr />
\t\t\t\t\t<div class=\"postbody\">";
                        // line 229
                        echo $this->getAttribute((isset($context["usernotes"]) ? $context["usernotes"] : null), "ACTION");
                        echo "</div>
\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['usernotes'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 231
                    echo "
\t\t\t\t</div>

\t\t\t\t";
                    // line 234
                    if ((isset($context["S_CLEAR_ALLOWED"]) ? $context["S_CLEAR_ALLOWED"] : null)) {
                        // line 235
                        echo "\t\t\t\t<fieldset class=\"panel-footer text-center\">
\t\t\t\t\t<input class=\"btn btn-danger\" type=\"submit\" name=\"action[del_all]\" value=\"";
                        // line 236
                        echo $this->env->getExtension('phpbb')->lang("DELETE_ALL");
                        echo "\" />&nbsp;
\t\t\t\t\t<input class=\"btn btn-warning\" type=\"submit\" name=\"action[del_marked]\" value=\"";
                        // line 237
                        echo $this->env->getExtension('phpbb')->lang("DELETE_MARKED");
                        echo "\" />
\t\t\t\t</fieldset>
\t\t\t\t";
                    }
                    // line 240
                    echo "\t\t\t</div>
\t\t\t";
                }
                // line 242
                echo "
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">";
                // line 245
                echo $this->env->getExtension('phpbb')->lang("ADD_FEEDBACK");
                echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">

\t\t\t\t<p>";
                // line 249
                echo $this->env->getExtension('phpbb')->lang("ADD_FEEDBACK_EXPLAIN");
                echo "</p>

\t\t\t\t<fieldset>
\t\t\t\t\t<textarea name=\"usernote\" rows=\"4\" cols=\"76\" class=\"form-control\"></textarea>
\t\t\t\t</fieldset>

\t\t\t\t</div>
\t\t\t\t<fieldset class=\"panel-footer text-center\">
\t\t\t\t\t<input class=\"btn btn-success\" type=\"submit\" name=\"action[add_feedback]\" value=\"";
                // line 257
                echo $this->env->getExtension('phpbb')->lang("SUBMIT");
                echo "\" />&nbsp;
\t\t\t\t\t<input class=\"btn btn-danger\" type=\"reset\" value=\"";
                // line 258
                echo $this->env->getExtension('phpbb')->lang("RESET");
                echo "\" />
\t\t\t\t\t";
                // line 259
                echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
                echo "
\t\t\t\t</fieldset>
\t\t\t</div>
\t\t\t
\t\t\t</form>

\t\t</div>
\t";
            }
            // line 267
            echo "
\t";
            // line 268
            if ((isset($context["S_SHOW_REPORTS"]) ? $context["S_SHOW_REPORTS"] : null)) {
                // line 269
                echo "\t<div id=\"reports\" class=\"panel panel-default\">
\t\t<div class=\"panel-heading\">
\t\t\t<h4 class=\"panel-title\">";
                // line 271
                echo $this->env->getExtension('phpbb')->lang("MCP_POST_REPORTS");
                echo "</h4>
\t\t</div>
\t\t<div class=\"panel-body\">
\t\t";
                // line 274
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "reports"));
                foreach ($context['_seq'] as $context["_key"] => $context["reports"]) {
                    // line 275
                    echo "\t\t\t<strong>";
                    echo $this->env->getExtension('phpbb')->lang("REPORTED_BY");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " ";
                    if ($this->getAttribute((isset($context["reports"]) ? $context["reports"] : null), "U_REPORTER")) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["reports"]) ? $context["reports"] : null), "U_REPORTER");
                        echo "\">";
                        echo $this->getAttribute((isset($context["reports"]) ? $context["reports"] : null), "REPORTER");
                        echo "</a>";
                    } else {
                        echo $this->getAttribute((isset($context["reports"]) ? $context["reports"] : null), "REPORTER");
                    }
                    echo " &laquo; ";
                    echo $this->getAttribute((isset($context["reports"]) ? $context["reports"] : null), "REPORT_TIME");
                    echo "</strong>
\t\t\t<p>";
                    // line 276
                    echo $this->getAttribute((isset($context["reports"]) ? $context["reports"] : null), "REASON_TITLE");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " ";
                    echo $this->getAttribute((isset($context["reports"]) ? $context["reports"] : null), "REASON_DESC");
                    if ($this->getAttribute((isset($context["reports"]) ? $context["reports"] : null), "REPORT_TEXT")) {
                        echo "<br />";
                        echo $this->getAttribute((isset($context["reports"]) ? $context["reports"] : null), "REPORT_TEXT");
                    }
                    echo "</p>
\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['reports'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 278
                echo "\t\t</div>
\t</div>
\t";
            }
            // line 281
            echo "
\t";
            // line 282
            if (((isset($context["S_CAN_VIEWIP"]) ? $context["S_CAN_VIEWIP"] : null) && (!(isset($context["S_MCP_REPORT"]) ? $context["S_MCP_REPORT"] : null)))) {
                // line 283
                echo "\t\t<div id=\"ip\">

\t\t\t<p>";
                // line 285
                echo $this->env->getExtension('phpbb')->lang("THIS_POST_IP");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo " ";
                if ((isset($context["U_WHOIS"]) ? $context["U_WHOIS"] : null)) {
                    // line 286
                    echo "\t\t\t\t<a href=\"";
                    echo (isset($context["U_WHOIS"]) ? $context["U_WHOIS"] : null);
                    echo "\">";
                    if ((isset($context["POST_IPADDR"]) ? $context["POST_IPADDR"] : null)) {
                        echo (isset($context["POST_IPADDR"]) ? $context["POST_IPADDR"] : null);
                    } else {
                        echo (isset($context["POST_IP"]) ? $context["POST_IP"] : null);
                    }
                    echo "</a> (";
                    if ((isset($context["POST_IPADDR"]) ? $context["POST_IPADDR"] : null)) {
                        echo (isset($context["POST_IP"]) ? $context["POST_IP"] : null);
                    } else {
                        echo "<a href=\"";
                        echo (isset($context["U_LOOKUP_IP"]) ? $context["U_LOOKUP_IP"] : null);
                        echo "\">";
                        echo $this->env->getExtension('phpbb')->lang("LOOKUP_IP");
                        echo "</a>";
                    }
                    echo ")
\t\t\t";
                } else {
                    // line 288
                    echo "\t\t\t\t";
                    if ((isset($context["POST_IPADDR"]) ? $context["POST_IPADDR"] : null)) {
                        echo (isset($context["POST_IPADDR"]) ? $context["POST_IPADDR"] : null);
                        echo " (";
                        echo (isset($context["POST_IP"]) ? $context["POST_IP"] : null);
                        echo ")";
                    } else {
                        echo (isset($context["POST_IP"]) ? $context["POST_IP"] : null);
                        if ((isset($context["U_LOOKUP_IP"]) ? $context["U_LOOKUP_IP"] : null)) {
                            echo " (<a href=\"";
                            echo (isset($context["U_LOOKUP_IP"]) ? $context["U_LOOKUP_IP"] : null);
                            echo "\">";
                            echo $this->env->getExtension('phpbb')->lang("LOOKUP_IP");
                            echo "</a>)";
                        }
                    }
                    // line 289
                    echo "\t\t\t";
                }
                echo "</p>

\t\t\t<div class=\"table-responsive\">
\t\t\t<table class=\"table table-bordered\">
\t\t\t<thead>
\t\t\t<tr>
\t\t\t\t<th>";
                // line 295
                echo $this->env->getExtension('phpbb')->lang("OTHER_USERS");
                echo "</th>
\t\t\t\t<th class=\"width-15 text-center\">";
                // line 296
                echo $this->env->getExtension('phpbb')->lang("POSTS");
                echo "</th>
\t\t\t</tr>
\t\t\t</thead>
\t\t\t<tbody>
\t\t\t";
                // line 300
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "userrow"));
                $context['_iterated'] = false;
                foreach ($context['_seq'] as $context["_key"] => $context["userrow"]) {
                    // line 301
                    echo "\t\t\t<tr class=\"";
                    if (($this->getAttribute((isset($context["userrow"]) ? $context["userrow"] : null), "S_ROW_COUNT") % 2 == 1)) {
                        echo "bg1";
                    } else {
                        echo "bg2";
                    }
                    echo "\">
\t\t\t\t<td>";
                    // line 302
                    if ($this->getAttribute((isset($context["userrow"]) ? $context["userrow"] : null), "U_PROFILE")) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["userrow"]) ? $context["userrow"] : null), "U_PROFILE");
                        echo "\">";
                        echo $this->getAttribute((isset($context["userrow"]) ? $context["userrow"] : null), "USERNAME");
                        echo "</a>";
                    } else {
                        echo $this->getAttribute((isset($context["userrow"]) ? $context["userrow"] : null), "USERNAME");
                    }
                    echo "</td>
\t\t\t\t<td class=\"width-15 text-center\"><a href=\"";
                    // line 303
                    echo $this->getAttribute((isset($context["userrow"]) ? $context["userrow"] : null), "U_SEARCHPOSTS");
                    echo "\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("SEARCH_POSTS_BY");
                    echo " ";
                    echo $this->getAttribute((isset($context["userrow"]) ? $context["userrow"] : null), "USERNAME");
                    echo "\">";
                    echo $this->getAttribute((isset($context["userrow"]) ? $context["userrow"] : null), "NUM_POSTS");
                    echo "</a></td>
\t\t\t</tr>
\t\t\t";
                    $context['_iterated'] = true;
                }
                if (!$context['_iterated']) {
                    // line 306
                    echo "\t\t\t\t<tr>
\t\t\t\t\t<td colspan=\"2\">";
                    // line 307
                    echo $this->env->getExtension('phpbb')->lang("NO_MATCHES_FOUND");
                    echo "</td>
\t\t\t\t</tr>
\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['userrow'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 310
                echo "\t\t\t</tbody>
\t\t\t</table>
\t\t\t</div>

\t\t\t<div class=\"table-responsive\">
\t\t\t<table class=\"table table-bordered\">
\t\t\t<thead>
\t\t\t<tr>
\t\t\t\t<th>";
                // line 318
                echo $this->env->getExtension('phpbb')->lang("IPS_POSTED_FROM");
                echo "</th>
\t\t\t\t<th class=\"width-15 text-center\">";
                // line 319
                echo $this->env->getExtension('phpbb')->lang("POSTS");
                echo "</th>
\t\t\t</tr>
\t\t\t</thead>
\t\t\t<tbody>
\t\t\t";
                // line 323
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "iprow"));
                $context['_iterated'] = false;
                foreach ($context['_seq'] as $context["_key"] => $context["iprow"]) {
                    // line 324
                    echo "\t\t\t<tr class=\"";
                    if (($this->getAttribute((isset($context["iprow"]) ? $context["iprow"] : null), "S_ROW_COUNT") % 2 == 1)) {
                        echo "bg1";
                    } else {
                        echo "bg2";
                    }
                    echo "\">
\t\t\t\t<td>";
                    // line 325
                    if ($this->getAttribute((isset($context["iprow"]) ? $context["iprow"] : null), "HOSTNAME")) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["iprow"]) ? $context["iprow"] : null), "U_WHOIS");
                        echo "\">";
                        echo $this->getAttribute((isset($context["iprow"]) ? $context["iprow"] : null), "HOSTNAME");
                        echo "</a> (";
                        echo $this->getAttribute((isset($context["iprow"]) ? $context["iprow"] : null), "IP");
                        echo ")";
                    } else {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["iprow"]) ? $context["iprow"] : null), "U_WHOIS");
                        echo "\">";
                        echo $this->getAttribute((isset($context["iprow"]) ? $context["iprow"] : null), "IP");
                        echo "</a> (<a href=\"";
                        echo $this->getAttribute((isset($context["iprow"]) ? $context["iprow"] : null), "U_LOOKUP_IP");
                        echo "\">";
                        echo $this->env->getExtension('phpbb')->lang("LOOKUP_IP");
                        echo "</a>)";
                    }
                    echo "</td>
\t\t\t\t<td class=\"width-15 text-center\">";
                    // line 326
                    echo $this->getAttribute((isset($context["iprow"]) ? $context["iprow"] : null), "NUM_POSTS");
                    echo "</td>
\t\t\t</tr>
\t\t\t";
                    $context['_iterated'] = true;
                }
                if (!$context['_iterated']) {
                    // line 329
                    echo "\t\t\t\t<tr>
\t\t\t\t\t<td colspan=\"2\">";
                    // line 330
                    echo $this->env->getExtension('phpbb')->lang("NO_MATCHES_FOUND");
                    echo "</td>
\t\t\t\t</tr>
\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['iprow'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 333
                echo "\t\t\t</tbody>
\t\t\t</table>
\t\t\t</div>

\t\t\t<p><a href=\"";
                // line 337
                echo (isset($context["U_LOOKUP_ALL"]) ? $context["U_LOOKUP_ALL"] : null);
                echo "#ip\">";
                echo $this->env->getExtension('phpbb')->lang("LOOKUP_ALL");
                echo "</a></p>

\t\t</div>
\t";
            }
            // line 341
            echo "
";
        }
        // line 343
        echo "
";
        // line 344
        if ((isset($context["S_TOPIC_REVIEW"]) ? $context["S_TOPIC_REVIEW"] : null)) {
            $location = "posting_topic_review.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("posting_topic_review.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 345
        echo "
";
        // line 346
        $location = "mcp_footer.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("mcp_footer.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
    }

    public function getTemplateName()
    {
        return "mcp_post.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  1150 => 346,  1147 => 345,  1133 => 344,  1130 => 343,  1126 => 341,  1117 => 337,  1111 => 333,  1102 => 330,  1099 => 329,  1091 => 326,  1069 => 325,  1060 => 324,  1055 => 323,  1048 => 319,  1044 => 318,  1034 => 310,  1025 => 307,  1022 => 306,  1008 => 303,  996 => 302,  987 => 301,  982 => 300,  975 => 296,  971 => 295,  961 => 289,  944 => 288,  922 => 286,  917 => 285,  913 => 283,  911 => 282,  908 => 281,  903 => 278,  888 => 276,  870 => 275,  866 => 274,  860 => 271,  856 => 269,  854 => 268,  851 => 267,  840 => 259,  836 => 258,  832 => 257,  821 => 249,  814 => 245,  809 => 242,  805 => 240,  799 => 237,  795 => 236,  792 => 235,  790 => 234,  785 => 231,  777 => 229,  774 => 228,  766 => 227,  756 => 226,  752 => 225,  745 => 221,  741 => 219,  739 => 218,  734 => 216,  730 => 214,  728 => 213,  725 => 212,  722 => 210,  719 => 209,  715 => 207,  682 => 206,  679 => 205,  677 => 204,  674 => 203,  668 => 199,  661 => 195,  654 => 192,  647 => 191,  631 => 190,  624 => 187,  616 => 183,  614 => 182,  611 => 181,  604 => 177,  594 => 172,  590 => 171,  575 => 166,  572 => 165,  563 => 161,  557 => 159,  554 => 158,  552 => 157,  545 => 154,  543 => 153,  536 => 149,  532 => 147,  530 => 146,  522 => 140,  518 => 138,  515 => 137,  498 => 136,  476 => 134,  467 => 133,  464 => 132,  462 => 131,  459 => 130,  451 => 128,  449 => 127,  446 => 126,  442 => 124,  433 => 123,  429 => 122,  426 => 121,  424 => 120,  421 => 119,  416 => 116,  407 => 114,  403 => 113,  399 => 112,  394 => 111,  392 => 110,  386 => 107,  382 => 105,  374 => 102,  371 => 101,  369 => 100,  366 => 99,  359 => 95,  354 => 94,  350 => 93,  346 => 92,  342 => 91,  335 => 88,  328 => 84,  323 => 83,  319 => 82,  315 => 81,  311 => 80,  304 => 77,  302 => 76,  299 => 75,  295 => 73,  264 => 72,  233 => 71,  230 => 70,  228 => 69,  224 => 67,  214 => 64,  209 => 63,  206 => 62,  192 => 60,  178 => 58,  176 => 57,  165 => 51,  151 => 50,  146 => 47,  140 => 45,  131 => 39,  127 => 38,  122 => 37,  116 => 35,  114 => 34,  109 => 32,  102 => 27,  96 => 25,  90 => 23,  88 => 22,  85 => 21,  79 => 19,  77 => 18,  67 => 17,  56 => 12,  51 => 9,  45 => 7,  39 => 5,  36 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
