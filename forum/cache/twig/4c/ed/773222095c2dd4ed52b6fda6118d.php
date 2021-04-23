<?php

/* ucp_pm_viewmessage.html */
class __TwigTemplate_4ced773222095c2dd4ed52b6fda6118d extends Twig_Template
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
        // line 4
        echo "
\t</div>
</div>

";
        // line 8
        if (((isset($context["S_DISPLAY_HISTORY"]) ? $context["S_DISPLAY_HISTORY"] : null) && ((isset($context["U_VIEW_PREVIOUS_HISTORY"]) ? $context["U_VIEW_PREVIOUS_HISTORY"] : null) || (isset($context["U_VIEW_NEXT_HISTORY"]) ? $context["U_VIEW_NEXT_HISTORY"] : null)))) {
            // line 9
            echo "\t<fieldset class=\"panel-group\">
\t\t<div class=\"btn-group pull-";
            // line 10
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t";
            // line 11
            if ((isset($context["U_VIEW_PREVIOUS_HISTORY"]) ? $context["U_VIEW_PREVIOUS_HISTORY"] : null)) {
                echo "<a href=\"";
                echo (isset($context["U_VIEW_PREVIOUS_HISTORY"]) ? $context["U_VIEW_PREVIOUS_HISTORY"] : null);
                echo "\" class=\"btn btn-default\"><i class=\"fa fa-chevron-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\"></i> ";
                echo $this->env->getExtension('phpbb')->lang("VIEW_PREVIOUS_HISTORY");
                echo "</a>";
            }
            // line 12
            echo "\t\t";
            if ((isset($context["U_VIEW_NEXT_HISTORY"]) ? $context["U_VIEW_NEXT_HISTORY"] : null)) {
                echo "<a href=\"";
                echo (isset($context["U_VIEW_NEXT_HISTORY"]) ? $context["U_VIEW_NEXT_HISTORY"] : null);
                echo "\" class=\"btn btn-default\">";
                echo $this->env->getExtension('phpbb')->lang("VIEW_NEXT_HISTORY");
                echo " <i class=\"fa fa-chevron-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\"></i></a>";
            }
            // line 13
            echo "\t\t</div>
\t</fieldset>
";
        }
        // line 16
        echo "
<div class=\"panel panel-primary\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 19
        echo (isset($context["SUBJECT"]) ? $context["SUBJECT"] : null);
        echo "</h4>
\t</div>
\t<div class=\"post panel-body\">

\t<div id=\"post-";
        // line 23
        echo (isset($context["MESSAGE_ID"]) ? $context["MESSAGE_ID"] : null);
        echo "\" class=\"post pm has-profile";
        if (((isset($context["S_POST_UNAPPROVED"]) ? $context["S_POST_UNAPPROVED"] : null) || (isset($context["S_POST_REPORTED"]) ? $context["S_POST_REPORTED"] : null))) {
            echo " reported";
        }
        echo "\">

\t\t<dl class=\"postprofile col-md-3 col-sm-4 col-xs-12\" id=\"profile";
        // line 25
        echo (isset($context["MESSAGE_ID"]) ? $context["MESSAGE_ID"] : null);
        echo "\">
\t\t\t<dt class=\"";
        // line 26
        if (((isset($context["RANK_TITLE"]) ? $context["RANK_TITLE"] : null) || (isset($context["RANK_IMG"]) ? $context["RANK_IMG"] : null))) {
            echo "has-profile-rank";
        } else {
            echo "no-profile-rank";
        }
        echo " ";
        if ((isset($context["AUTHOR_AVATAR"]) ? $context["AUTHOR_AVATAR"] : null)) {
            echo "has-avatar";
        } else {
            echo "no-avatar";
        }
        echo "\">
\t\t\t\t";
        // line 27
        if ((isset($context["S_ONLINE"]) ? $context["S_ONLINE"] : null)) {
            echo "<span class=\"online label label-success\">";
            echo $this->env->getExtension('phpbb')->lang("ONLINE");
            echo "</span>";
        }
        // line 28
        echo "\t\t\t\t<div class=\"avatar-container hidden-xs\">
\t\t\t\t\t";
        // line 29
        // line 30
        echo "\t\t\t\t\t";
        if ((isset($context["AUTHOR_AVATAR"]) ? $context["AUTHOR_AVATAR"] : null)) {
            echo "<a href=\"";
            echo (isset($context["U_MESSAGE_AUTHOR"]) ? $context["U_MESSAGE_AUTHOR"] : null);
            echo "\" class=\"avatar\">";
            echo (isset($context["AUTHOR_AVATAR"]) ? $context["AUTHOR_AVATAR"] : null);
            echo "</a>";
        }
        // line 31
        echo "\t\t\t\t\t";
        // line 32
        echo "\t\t\t\t</div>
\t\t\t\t";
        // line 33
        echo (isset($context["MESSAGE_AUTHOR_FULL"]) ? $context["MESSAGE_AUTHOR_FULL"] : null);
        echo "
\t\t\t</dt>

\t\t\t";
        // line 36
        if (((isset($context["RANK_TITLE"]) ? $context["RANK_TITLE"] : null) || (isset($context["RANK_IMG"]) ? $context["RANK_IMG"] : null))) {
            echo "<dd class=\"profile-rank\">";
            echo (isset($context["RANK_TITLE"]) ? $context["RANK_TITLE"] : null);
            if (((isset($context["RANK_TITLE"]) ? $context["RANK_TITLE"] : null) && (isset($context["RANK_IMG"]) ? $context["RANK_IMG"] : null))) {
                echo "<br />";
            }
            echo (isset($context["RANK_IMG"]) ? $context["RANK_IMG"] : null);
            echo "</dd>";
        }
        // line 37
        echo "
\t\t\t<dd class=\"profile-posts\"><strong>";
        // line 38
        echo $this->env->getExtension('phpbb')->lang("POSTS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</strong> ";
        if (((isset($context["U_AUTHOR_POSTS"]) ? $context["U_AUTHOR_POSTS"] : null) != "")) {
            echo "<a href=\"";
            echo (isset($context["U_AUTHOR_POSTS"]) ? $context["U_AUTHOR_POSTS"] : null);
            echo "\">";
            echo (isset($context["AUTHOR_POSTS"]) ? $context["AUTHOR_POSTS"] : null);
            echo "</a>";
        } else {
            echo (isset($context["AUTHOR_POSTS"]) ? $context["AUTHOR_POSTS"] : null);
        }
        echo "</dd>
\t\t\t";
        // line 39
        if ((isset($context["AUTHOR_JOINED"]) ? $context["AUTHOR_JOINED"] : null)) {
            echo "<dd class=\"profile-joined\"><strong>";
            echo $this->env->getExtension('phpbb')->lang("JOINED");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</strong> ";
            echo (isset($context["AUTHOR_JOINED"]) ? $context["AUTHOR_JOINED"] : null);
            echo "</dd>";
        }
        // line 40
        echo "
\t\t\t";
        // line 41
        // line 42
        echo "\t\t\t";
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "custom_fields"));
        foreach ($context['_seq'] as $context["_key"] => $context["custom_fields"]) {
            // line 43
            echo "\t\t\t\t";
            if ((!$this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "S_PROFILE_CONTACT"))) {
                // line 44
                echo "\t\t\t\t\t<dd class=\"profile-custom-field profile-";
                echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_IDENT");
                echo "\"><strong>";
                echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_NAME");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</strong> ";
                echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_VALUE");
                echo "</dd>
\t\t\t\t";
            }
            // line 46
            echo "\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_fields'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 47
        echo "\t\t\t";
        // line 48
        echo "
\t\t\t";
        // line 49
        // line 50
        echo "\t\t\t\t";
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "contact"))) {
            // line 51
            echo "\t\t\t\t\t<dd>&nbsp;</dd>
\t\t\t\t\t<dd>
\t\t\t\t\t<div class=\"btn-group dropup\">
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">";
            // line 54
            echo $this->env->getExtension('phpbb')->lang("CONTACT");
            echo " <span class=\"caret\"></span></button>
\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-contents\">
\t\t\t\t\t\t";
            // line 56
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "contact"));
            foreach ($context['_seq'] as $context["_key"] => $context["contact"]) {
                // line 57
                echo "\t\t\t\t\t\t\t";
                if ($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "U_CONTACT")) {
                    // line 58
                    echo "\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t<a href=\"";
                    // line 59
                    echo $this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "U_CONTACT");
                    echo "\" title=\"";
                    echo $this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "NAME");
                    echo "\"";
                    if (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "jabber")) {
                        echo " onclick=\"popup(this.href, 750, 320); return false;\"";
                    }
                    echo ">
\t\t\t\t\t\t\t\t\t<span class=\"";
                    // line 60
                    echo $this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID");
                    echo "-icon\"><i class=\"fa fa-";
                    if (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "pm")) {
                        echo "user";
                    } elseif (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "email")) {
                        echo "envelope";
                    } elseif (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "phpbb_website")) {
                        echo "globe";
                    } elseif (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "icon_contact_jabber")) {
                        echo "lightbulb-o";
                    } elseif (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "phpbb_yahoo")) {
                        echo "yahoo";
                    } elseif (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "phpbb_facebook")) {
                        echo "facebook-square";
                    } elseif (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "phpbb_twitter")) {
                        echo "twitter";
                    } elseif (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "phpbb_skype")) {
                        echo "skype";
                    } elseif (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "phpbb_youtube")) {
                        echo "youtube-play";
                    } elseif (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "phpbb_googleplus")) {
                        echo "google-plus";
                    } else {
                        echo "comments";
                    }
                    echo " fa-fw\"></i> ";
                    echo $this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "NAME");
                    echo "</span>
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t";
                }
                // line 64
                echo "\t\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['contact'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 65
            echo "\t\t\t\t\t\t</ul>
\t\t\t\t\t</div>
\t\t\t\t\t</dd>
\t\t\t\t";
        }
        // line 69
        echo "\t\t\t";
        // line 70
        echo "\t\t</dl>

\t\t<div class=\"postbody col-md-9 col-sm-8 col-xs-12\">

\t\t\t<div class=\"panel-group post-buttons clearfix\">
\t\t\t\t<strong>";
        // line 75
        echo $this->env->getExtension('phpbb')->lang("SENT_AT");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</strong> ";
        echo (isset($context["SENT_DATE"]) ? $context["SENT_DATE"] : null);
        echo "

\t\t\t";
        // line 77
        if (((((isset($context["U_DELETE"]) ? $context["U_DELETE"] : null) || (isset($context["U_EDIT"]) ? $context["U_EDIT"] : null)) || (isset($context["U_QUOTE"]) ? $context["U_QUOTE"] : null)) || (isset($context["U_REPORT"]) ? $context["U_REPORT"] : null))) {
            // line 78
            echo "\t\t\t\t<div class=\"btn-toolbar pull-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t\t\t\t<div class=\"btn-group\">
\t\t\t\t\t\t";
            // line 80
            // line 81
            echo "\t\t\t\t\t\t";
            if ((isset($context["U_EDIT"]) ? $context["U_EDIT"] : null)) {
                // line 82
                echo "\t\t\t\t\t\t\t<a href=\"";
                echo (isset($context["U_EDIT"]) ? $context["U_EDIT"] : null);
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("POST_EDIT_PM");
                echo "\" class=\"btn btn-primary\"><i class=\"fa fa-edit fa-fw\"></i><span>";
                echo $this->env->getExtension('phpbb')->lang("POST_EDIT_PM");
                echo "</span></a>
\t\t\t\t\t\t";
            }
            // line 84
            echo "\t\t\t\t\t\t";
            if ((isset($context["U_DELETE"]) ? $context["U_DELETE"] : null)) {
                // line 85
                echo "\t\t\t\t\t\t\t<a href=\"";
                echo (isset($context["U_DELETE"]) ? $context["U_DELETE"] : null);
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("DELETE_MESSAGE");
                echo "\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o fa-fw\"></i><span>";
                echo $this->env->getExtension('phpbb')->lang("DELETE_MESSAGE");
                echo "</span></a>
\t\t\t\t\t\t";
            }
            // line 87
            echo "\t\t\t\t\t\t";
            if ((isset($context["U_REPORT"]) ? $context["U_REPORT"] : null)) {
                // line 88
                echo "\t\t\t\t\t\t\t<a href=\"";
                echo (isset($context["U_REPORT"]) ? $context["U_REPORT"] : null);
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("REPORT_PM");
                echo "\" class=\"btn btn-warning\"><i class=\"fa fa-exclamation fa-fw\"></i><span>";
                echo $this->env->getExtension('phpbb')->lang("REPORT_PM");
                echo "</span></a>
\t\t\t\t\t\t";
            }
            // line 90
            echo "\t\t\t\t\t\t";
            if ((isset($context["U_QUOTE"]) ? $context["U_QUOTE"] : null)) {
                // line 91
                echo "\t\t\t\t\t\t\t<a href=\"";
                echo (isset($context["U_QUOTE"]) ? $context["U_QUOTE"] : null);
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("POST_QUOTE_PM");
                echo "\" class=\"btn btn-success\"><i class=\"fa fa-quote-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo " fa-fw\"></i><span>";
                echo $this->env->getExtension('phpbb')->lang("POST_QUOTE_PM");
                echo "</span></a>
\t\t\t\t\t\t";
            }
            // line 93
            echo "\t\t\t\t\t\t";
            // line 94
            echo "\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t";
        }
        // line 97
        echo "\t\t\t</div>

\t\t\t<p class=\"author\">
\t\t\t\t<strong>";
        // line 100
        echo $this->env->getExtension('phpbb')->lang("PM_FROM");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</strong> ";
        echo (isset($context["MESSAGE_AUTHOR_FULL"]) ? $context["MESSAGE_AUTHOR_FULL"] : null);
        echo "
\t\t\t\t";
        // line 101
        if ((isset($context["S_TO_RECIPIENT"]) ? $context["S_TO_RECIPIENT"] : null)) {
            echo "<br /><strong>";
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
        }
        // line 102
        echo "\t\t\t\t";
        if ((isset($context["S_BCC_RECIPIENT"]) ? $context["S_BCC_RECIPIENT"] : null)) {
            echo "<br /><strong>";
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
        // line 103
        echo "\t\t\t</p>

\t\t\t<div class=\"content\">";
        // line 105
        echo (isset($context["MESSAGE"]) ? $context["MESSAGE"] : null);
        echo "</div>

\t\t\t";
        // line 107
        if ((isset($context["S_HAS_ATTACHMENTS"]) ? $context["S_HAS_ATTACHMENTS"] : null)) {
            // line 108
            echo "\t\t\t\t<div class=\"attachbox pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t\t\t<p>";
            // line 109
            echo $this->env->getExtension('phpbb')->lang("ATTACHMENTS");
            echo "</p>
\t\t\t\t\t";
            // line 110
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "attachment"));
            foreach ($context['_seq'] as $context["_key"] => $context["attachment"]) {
                // line 111
                echo "\t\t\t\t\t<div class=\"panel panel-default\">";
                echo $this->getAttribute((isset($context["attachment"]) ? $context["attachment"] : null), "DISPLAY_ATTACHMENT");
                echo "</div>
\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attachment'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 113
            echo "\t\t\t\t</div>
\t\t\t\t<div class=\"clearfix\"></div>
\t\t\t";
        }
        // line 116
        echo "
\t\t\t";
        // line 117
        if ((isset($context["S_DISPLAY_NOTICE"]) ? $context["S_DISPLAY_NOTICE"] : null)) {
            // line 118
            echo "\t\t\t\t<div class=\"alert alert-warning\">";
            echo $this->env->getExtension('phpbb')->lang("DOWNLOAD_NOTICE");
            echo "</div>
\t\t\t";
        }
        // line 120
        echo "
\t\t\t";
        // line 121
        if (((isset($context["EDITED_MESSAGE"]) ? $context["EDITED_MESSAGE"] : null) || (isset($context["EDIT_REASON"]) ? $context["EDIT_REASON"] : null))) {
            // line 122
            echo "\t\t\t<div class=\"alert alert-info\">
\t\t\t\t";
            // line 123
            echo (isset($context["EDITED_MESSAGE"]) ? $context["EDITED_MESSAGE"] : null);
            echo "
\t\t\t\t";
            // line 124
            if ((isset($context["EDIT_REASON"]) ? $context["EDIT_REASON"] : null)) {
                echo "<br /><strong>";
                echo $this->env->getExtension('phpbb')->lang("REASON");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</strong> <em>";
                echo (isset($context["EDIT_REASON"]) ? $context["EDIT_REASON"] : null);
                echo "</em>";
            }
            // line 125
            echo "\t\t\t</div>
\t\t\t";
        }
        // line 127
        echo "
\t\t\t";
        // line 128
        if ((isset($context["SIGNATURE"]) ? $context["SIGNATURE"] : null)) {
            // line 129
            echo "\t\t\t\t<div id=\"sig";
            echo (isset($context["MESSAGE_ID"]) ? $context["MESSAGE_ID"] : null);
            echo "\" class=\"panel-footer\">";
            echo (isset($context["SIGNATURE"]) ? $context["SIGNATURE"] : null);
            echo "</div>
\t\t\t";
        }
        // line 131
        echo "\t\t</div>

\t\t</div>

\t</div>

\t<div class=\"panel-footer text-";
        // line 137
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo "\"><a href=\"#top\" title=\"";
        echo $this->env->getExtension('phpbb')->lang("BACK_TO_TOP");
        echo "\"><i class=\"fa fa-chevron-up\"></i></a></div>
</div>

";
        // line 140
        if ((isset($context["S_VIEW_MESSAGE"]) ? $context["S_VIEW_MESSAGE"] : null)) {
            // line 141
            echo "<fieldset class=\"panel-group text-center\">
\t";
            // line 142
            if ((isset($context["U_PREVIOUS_PM"]) ? $context["U_PREVIOUS_PM"] : null)) {
                echo "<a href=\"";
                echo (isset($context["U_PREVIOUS_PM"]) ? $context["U_PREVIOUS_PM"] : null);
                echo "\" class=\"pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo " btn btn-default\"><i class=\"fa fa-chevron-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\"></i> ";
                echo $this->env->getExtension('phpbb')->lang("VIEW_PREVIOUS_PM");
                echo "</a>";
            }
            // line 143
            echo "\t";
            if ((isset($context["U_NEXT_PM"]) ? $context["U_NEXT_PM"] : null)) {
                echo "<a href=\"";
                echo (isset($context["U_NEXT_PM"]) ? $context["U_NEXT_PM"] : null);
                echo "\" class=\"pull-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo " btn btn-default\">";
                echo $this->env->getExtension('phpbb')->lang("VIEW_NEXT_PM");
                echo " <i class=\"fa fa-chevron-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\"></i></a>";
            }
            // line 144
            echo "
\t";
            // line 145
            if ((isset($context["S_MARK_OPTIONS"]) ? $context["S_MARK_OPTIONS"] : null)) {
                echo "<select name=\"mark_option\" id=\"mark_option\">";
                echo (isset($context["S_MARK_OPTIONS"]) ? $context["S_MARK_OPTIONS"] : null);
                echo "</select> <input type=\"submit\" name=\"submit_mark\" value=\"";
                echo $this->env->getExtension('phpbb')->lang("GO");
                echo "\" class=\"btn btn-default\" />";
            }
            // line 146
            echo "\t";
            if (((!(isset($context["S_UNREAD"]) ? $context["S_UNREAD"] : null)) && (!(isset($context["S_SPECIAL_FOLDER"]) ? $context["S_SPECIAL_FOLDER"] : null)))) {
                echo "<label for=\"dest_folder\">";
                if ((isset($context["S_VIEW_MESSAGE"]) ? $context["S_VIEW_MESSAGE"] : null)) {
                    echo $this->env->getExtension('phpbb')->lang("MOVE_TO_FOLDER");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " ";
                } else {
                    echo $this->env->getExtension('phpbb')->lang("MOVE_MARKED_TO_FOLDER");
                }
                echo "</label> <select name=\"dest_folder\" id=\"dest_folder\">";
                echo (isset($context["S_TO_FOLDER_OPTIONS"]) ? $context["S_TO_FOLDER_OPTIONS"] : null);
                echo "</select> <input type=\"submit\" name=\"move_pm\" value=\"";
                echo $this->env->getExtension('phpbb')->lang("GO");
                echo "\" class=\"btn btn-default\" />";
            }
            // line 147
            echo "\t<input type=\"hidden\" name=\"marked_msg_id[]\" value=\"";
            echo (isset($context["MSG_ID"]) ? $context["MSG_ID"] : null);
            echo "\" />
\t<input type=\"hidden\" name=\"cur_folder_id\" value=\"";
            // line 148
            echo (isset($context["CUR_FOLDER_ID"]) ? $context["CUR_FOLDER_ID"] : null);
            echo "\" />
\t<input type=\"hidden\" name=\"p\" value=\"";
            // line 149
            echo (isset($context["MSG_ID"]) ? $context["MSG_ID"] : null);
            echo "\" />
</fieldset>
";
        }
        // line 152
        echo "
";
        // line 153
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
        // line 154
        echo "
";
        // line 155
        if ((isset($context["S_DISPLAY_HISTORY"]) ? $context["S_DISPLAY_HISTORY"] : null)) {
            $location = "ucp_pm_history.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("ucp_pm_history.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 156
        echo "
";
        // line 157
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
        return "ucp_pm_viewmessage.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  677 => 157,  674 => 156,  660 => 155,  657 => 154,  645 => 153,  642 => 152,  636 => 149,  632 => 148,  627 => 147,  610 => 146,  602 => 145,  599 => 144,  586 => 143,  574 => 142,  571 => 141,  569 => 140,  561 => 137,  553 => 131,  545 => 129,  543 => 128,  540 => 127,  536 => 125,  527 => 124,  523 => 123,  520 => 122,  518 => 121,  515 => 120,  509 => 118,  507 => 117,  504 => 116,  499 => 113,  490 => 111,  486 => 110,  482 => 109,  477 => 108,  475 => 107,  470 => 105,  466 => 103,  435 => 102,  405 => 101,  398 => 100,  393 => 97,  388 => 94,  386 => 93,  374 => 91,  371 => 90,  361 => 88,  358 => 87,  348 => 85,  345 => 84,  335 => 82,  332 => 81,  331 => 80,  325 => 78,  323 => 77,  315 => 75,  308 => 70,  306 => 69,  300 => 65,  294 => 64,  261 => 60,  251 => 59,  248 => 58,  245 => 57,  241 => 56,  236 => 54,  231 => 51,  228 => 50,  227 => 49,  224 => 48,  222 => 47,  216 => 46,  205 => 44,  202 => 43,  197 => 42,  196 => 41,  193 => 40,  184 => 39,  169 => 38,  166 => 37,  156 => 36,  150 => 33,  147 => 32,  145 => 31,  136 => 30,  135 => 29,  132 => 28,  126 => 27,  112 => 26,  108 => 25,  99 => 23,  92 => 19,  87 => 16,  82 => 13,  71 => 12,  61 => 11,  57 => 10,  54 => 9,  52 => 8,  46 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
