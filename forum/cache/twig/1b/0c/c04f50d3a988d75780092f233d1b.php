<?php

/* memberlist_view.html */
class __TwigTemplate_1b0cc04f50d3a988d75780092f233d1b extends Twig_Template
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
";
        // line 3
        // line 4
        echo "
<form method=\"post\" action=\"";
        // line 5
        echo (isset($context["S_PROFILE_ACTION"]) ? $context["S_PROFILE_ACTION"] : null);
        echo "\" id=\"viewprofile\">

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 9
        echo (isset($context["PAGE_TITLE"]) ? $context["PAGE_TITLE"] : null);
        echo "</h4>
\t</div>
\t<div class=\"post panel-body\">

\t\t<dl class=\"postprofile col-md-3 col-sm-4 col-xs-12\">
\t\t\t<dt class=\"profile-avatar\">
\t\t\t\t";
        // line 15
        if ((isset($context["S_ONLINE"]) ? $context["S_ONLINE"] : null)) {
            echo "<span class=\"online label label-success\">";
            echo $this->env->getExtension('phpbb')->lang("ONLINE");
            echo "</span>";
        }
        // line 16
        echo "\t\t\t\t";
        if ((isset($context["AVATAR_IMG"]) ? $context["AVATAR_IMG"] : null)) {
            echo "<span class=\"avatar-container hidden-xs\">";
            echo (isset($context["AVATAR_IMG"]) ? $context["AVATAR_IMG"] : null);
        } else {
            echo "<img src=\"";
            echo (isset($context["T_THEME_PATH"]) ? $context["T_THEME_PATH"] : null);
            echo "/images/no_avatar.gif\" alt=\"\" class=\"img-thumbnail\" /></span>";
        }
        // line 17
        echo "\t\t\t</dt>
\t\t\t";
        // line 18
        if ((isset($context["RANK_TITLE"]) ? $context["RANK_TITLE"] : null)) {
            echo "<dd>";
            echo (isset($context["RANK_TITLE"]) ? $context["RANK_TITLE"] : null);
            echo "</dd>";
        }
        // line 19
        echo "\t\t\t";
        if ((isset($context["RANK_IMG"]) ? $context["RANK_IMG"] : null)) {
            echo "<dd>";
            echo (isset($context["RANK_IMG"]) ? $context["RANK_IMG"] : null);
            echo "</dd>";
        }
        // line 20
        echo "
\t\t\t";
        // line 21
        if ((((isset($context["U_PM"]) ? $context["U_PM"] : null) || (isset($context["U_EMAIL"]) ? $context["U_EMAIL"] : null)) || ((isset($context["U_JABBER"]) ? $context["U_JABBER"] : null) && (isset($context["S_JABBER_ENABLED"]) ? $context["S_JABBER_ENABLED"] : null)))) {
            // line 22
            echo "\t\t\t<dd>&nbsp;</dd>
\t\t\t<dd class=\"post-buttons\">
\t\t\t\t<div class=\"btn-group\">
\t\t\t\t\t";
            // line 25
            if ((isset($context["U_PM"]) ? $context["U_PM"] : null)) {
                echo "<a class=\"btn btn-primary\" href=\"";
                echo (isset($context["U_PM"]) ? $context["U_PM"] : null);
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("PRIVATE_MESSAGE");
                echo "\"><i class=\"fa fa-user\"></i><span>";
                echo $this->env->getExtension('phpbb')->lang("SEND_PRIVATE_MESSAGE");
                echo "</span></a>";
            }
            // line 26
            echo "\t\t\t\t\t";
            if ((isset($context["U_EMAIL"]) ? $context["U_EMAIL"] : null)) {
                echo "<a class=\"btn btn-primary\" href=\"";
                echo (isset($context["U_EMAIL"]) ? $context["U_EMAIL"] : null);
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("SEND_EMAIL_USER");
                echo " ";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_AUTHOR");
                echo "\"><i class=\"fa fa-envelope\"></i><span>";
                echo $this->env->getExtension('phpbb')->lang("SEND_EMAIL_USER");
                echo "</span></a>";
            }
            // line 27
            echo "\t\t\t\t\t";
            if (((isset($context["U_JABBER"]) ? $context["U_JABBER"] : null) && (isset($context["S_JABBER_ENABLED"]) ? $context["S_JABBER_ENABLED"] : null))) {
                echo "<a class=\"btn btn-primary\" href=\"";
                echo (isset($context["U_JABBER"]) ? $context["U_JABBER"] : null);
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("SEND_JABBER_MESSAGE");
                echo "\" onclick=\"popup(this.href, 750, 320); return false;\"><i class=\"fa fa-lightbulb\"></i><span>";
                echo $this->env->getExtension('phpbb')->lang("SEND_JABBER_MESSAGE");
                echo "</span></a>";
            }
            // line 28
            echo "\t\t\t\t</div>
\t\t\t</dd>
\t\t\t";
        }
        // line 31
        echo "\t\t</dl>

\t<div class=\"col-md-9 col-sm-8 col-xs-12 form-horizontal\">
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\">";
        // line 35
        echo $this->env->getExtension('phpbb')->lang("USERNAME");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12\">
\t\t\t\t<span";
        // line 37
        if ((isset($context["USER_COLOR"]) ? $context["USER_COLOR"] : null)) {
            echo " style=\"color: ";
            echo (isset($context["USER_COLOR"]) ? $context["USER_COLOR"] : null);
            echo "; font-weight: bold;\"";
        }
        echo ">";
        echo (isset($context["USERNAME"]) ? $context["USERNAME"] : null);
        echo "</span>
\t\t\t\t";
        // line 38
        if ((isset($context["U_EDIT_SELF"]) ? $context["U_EDIT_SELF"] : null)) {
            echo "<a href=\"";
            echo (isset($context["U_EDIT_SELF"]) ? $context["U_EDIT_SELF"] : null);
            echo "\" class=\"label label-default\">";
            echo $this->env->getExtension('phpbb')->lang("EDIT_PROFILE");
            echo "</a>";
        }
        // line 39
        echo "\t\t\t\t";
        if ((isset($context["U_USER_ADMIN"]) ? $context["U_USER_ADMIN"] : null)) {
            echo "<a href=\"";
            echo (isset($context["U_USER_ADMIN"]) ? $context["U_USER_ADMIN"] : null);
            echo "\" class=\"label label-primary\">";
            echo $this->env->getExtension('phpbb')->lang("USER_ADMIN");
            echo "</a>";
        }
        // line 40
        echo "\t\t\t\t";
        if ((isset($context["U_USER_BAN"]) ? $context["U_USER_BAN"] : null)) {
            echo "<a href=\"";
            echo (isset($context["U_USER_BAN"]) ? $context["U_USER_BAN"] : null);
            echo "\" class=\"label label-danger\">";
            echo $this->env->getExtension('phpbb')->lang("USER_BAN");
            echo "</a>";
        }
        // line 41
        echo "\t\t\t\t";
        if ((isset($context["U_SWITCH_PERMISSIONS"]) ? $context["U_SWITCH_PERMISSIONS"] : null)) {
            echo "<a href=\"";
            echo (isset($context["U_SWITCH_PERMISSIONS"]) ? $context["U_SWITCH_PERMISSIONS"] : null);
            echo "\" class=\"label label-info\">";
            echo $this->env->getExtension('phpbb')->lang("USE_PERMISSIONS");
            echo "</a>";
        }
        // line 42
        echo "\t\t\t";
        if (((isset($context["S_USER_LOGGED_IN"]) ? $context["S_USER_LOGGED_IN"] : null) && (isset($context["S_ZEBRA"]) ? $context["S_ZEBRA"] : null))) {
            // line 43
            echo "\t\t\t\t";
            if ((isset($context["U_REMOVE_FRIEND"]) ? $context["U_REMOVE_FRIEND"] : null)) {
                // line 44
                echo "\t\t\t\t\t <span class=\"zebra\"><a href=\"";
                echo (isset($context["U_REMOVE_FRIEND"]) ? $context["U_REMOVE_FRIEND"] : null);
                echo "\" class=\"label label-success\" data-ajax=\"zebra\">";
                echo $this->env->getExtension('phpbb')->lang("REMOVE_FRIEND");
                echo "</a></span>
\t\t\t\t";
            } elseif ((isset($context["U_REMOVE_FOE"]) ? $context["U_REMOVE_FOE"] : null)) {
                // line 46
                echo "\t\t\t\t\t<span class=\"zebra\"><a href=\"";
                echo (isset($context["U_REMOVE_FOE"]) ? $context["U_REMOVE_FOE"] : null);
                echo "\" class=\"label label-warning\" data-ajax=\"zebra\">";
                echo $this->env->getExtension('phpbb')->lang("REMOVE_FOE");
                echo "</a></span>
\t\t\t\t";
            } else {
                // line 48
                echo "\t\t\t\t\t";
                if ((isset($context["U_ADD_FRIEND"]) ? $context["U_ADD_FRIEND"] : null)) {
                    // line 49
                    echo "\t\t\t\t\t\t<span class=\"zebra\"><a href=\"";
                    echo (isset($context["U_ADD_FRIEND"]) ? $context["U_ADD_FRIEND"] : null);
                    echo "\" class=\"label label-success\" data-ajax=\"zebra\">";
                    echo $this->env->getExtension('phpbb')->lang("ADD_FRIEND");
                    echo "</a></span>
\t\t\t\t\t";
                }
                // line 51
                echo "\t\t\t\t\t";
                if ((isset($context["U_ADD_FOE"]) ? $context["U_ADD_FOE"] : null)) {
                    // line 52
                    echo "\t\t\t\t\t\t<span class=\"zebra\"><a href=\"";
                    echo (isset($context["U_ADD_FOE"]) ? $context["U_ADD_FOE"] : null);
                    echo "\" class=\"label label-warning\" data-ajax=\"zebra\">";
                    echo $this->env->getExtension('phpbb')->lang("ADD_FOE");
                    echo "</a></span>
\t\t\t\t\t";
                }
                // line 54
                echo "\t\t\t\t";
            }
            // line 55
            echo "\t\t\t";
        }
        // line 56
        echo "\t\t</dl>

\t\t<dl class=\"form-group\">
\t\t";
        // line 59
        if ((isset($context["S_USER_INACTIVE"]) ? $context["S_USER_INACTIVE"] : null)) {
            echo "<dt class=\"col-md-4 col-sm-5 col-xs-12\">";
            echo $this->env->getExtension('phpbb')->lang("USER_IS_INACTIVE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt> <dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
            echo (isset($context["USER_INACTIVE_REASON"]) ? $context["USER_INACTIVE_REASON"] : null);
            echo "</dd>";
        }
        // line 60
        echo "\t\t";
        if (((isset($context["AGE"]) ? $context["AGE"] : null) !== "")) {
            echo "<dt class=\"col-md-4 col-sm-5 col-xs-12\">";
            echo $this->env->getExtension('phpbb')->lang("AGE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt> <dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
            echo (isset($context["AGE"]) ? $context["AGE"] : null);
            echo "</dd>";
        }
        // line 61
        echo "\t\t";
        if ((isset($context["S_GROUP_OPTIONS"]) ? $context["S_GROUP_OPTIONS"] : null)) {
            echo "<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\">";
            echo $this->env->getExtension('phpbb')->lang("USERGROUPS");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt> <dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><select name=\"g\" class=\"form-control\">";
            echo (isset($context["S_GROUP_OPTIONS"]) ? $context["S_GROUP_OPTIONS"] : null);
            echo "</select> <input type=\"submit\" name=\"submit\" value=\"";
            echo $this->env->getExtension('phpbb')->lang("GO");
            echo "\" class=\"btn btn-default\" /></dd>";
        }
        // line 62
        echo "\t\t";
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "custom_fields"));
        foreach ($context['_seq'] as $context["_key"] => $context["custom_fields"]) {
            // line 63
            echo "\t\t\t";
            if ((!$this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "S_PROFILE_CONTACT"))) {
                // line 64
                echo "\t\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\">";
                echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_NAME");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</dt> <dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
                if ($this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_VALUE")) {
                    echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_VALUE");
                } else {
                    echo "&nbsp;";
                }
                echo "</dd>
\t\t\t";
            }
            // line 66
            echo "\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_fields'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 67
        echo "\t\t</dl>
\t</div>

\t</div>
</div>

";
        // line 73
        // line 74
        echo "<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title clearfix\"><span class=\"col-md-6 col-xs-12 text-center\">";
        // line 76
        echo $this->env->getExtension('phpbb')->lang("CONTACT_USER");
        echo "</span><span class=\"col-md-6 col-xs-12 text-center\">";
        echo $this->env->getExtension('phpbb')->lang("USER_FORUM");
        echo "</span></h4>
\t</div>
\t<div class=\"panel-body\">

\t<div class=\"col-md-6 col-xs-12 form-horizontal\">
\t\t<dl class=\"form-group\">
\t\t";
        // line 82
        if ((isset($context["USER_JABBER"]) ? $context["USER_JABBER"] : null)) {
            echo "<dt class=\"col-md-4 col-sm-5 col-xs-12\">";
            echo $this->env->getExtension('phpbb')->lang("JABBER");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt> <dd class=\"col-md-8 col-sm-7 col-xs-12\">";
            echo (isset($context["USER_JABBER"]) ? $context["USER_JABBER"] : null);
            echo "</dd>";
        }
        // line 83
        echo "\t\t";
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "custom_fields"));
        foreach ($context['_seq'] as $context["_key"] => $context["custom_fields"]) {
            // line 84
            echo "\t\t\t";
            if ($this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "S_PROFILE_CONTACT")) {
                // line 85
                echo "\t\t\t\t<dt class=\"col-md-6 col-sm-6 col-xs-12\">";
                echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_NAME");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</dt>
\t\t\t\t";
                // line 86
                if ($this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_CONTACT")) {
                    // line 87
                    echo "\t\t\t\t\t<dd class=\"col-md-6 col-sm-6 col-xs-12\"><a href=\"";
                    echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_CONTACT");
                    echo "\">";
                    echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_DESC");
                    echo "</a></dd>
\t\t\t\t";
                } else {
                    // line 89
                    echo "\t\t\t\t\t<dd class=\"col-md-6 col-sm-6 col-xs-12\">";
                    if ($this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_VALUE")) {
                        echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_VALUE");
                    } else {
                        echo "&nbsp;";
                    }
                    echo "</dd>
\t\t\t\t";
                }
                // line 91
                echo "\t\t\t";
            }
            // line 92
            echo "\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_fields'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 93
        echo "\t\t";
        if ((isset($context["S_PROFILE_FIELD1"]) ? $context["S_PROFILE_FIELD1"] : null)) {
            // line 94
            echo "\t\t\t<!-- NOTE: Use a construct like this to include admin defined profile fields. Replace FIELD1 with the name of your field. -->
\t\t\t<dt class=\"col-md-6 col-sm-6 col-xs-12\">";
            // line 95
            echo (isset($context["PROFILE_FIELD1_NAME"]) ? $context["PROFILE_FIELD1_NAME"] : null);
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt> <dd class=\"col-md-4 col-xs-12\">";
            echo (isset($context["PROFILE_FIELD1_VALUE"]) ? $context["PROFILE_FIELD1_VALUE"] : null);
            echo "</dd>
\t\t";
        }
        // line 97
        echo "\t\t</dl>
\t</div>

\t<div class=\"col-md-6 col-xs-12 form-horizontal\">
\t\t<dl class=\"form-group\">
\t\t\t";
        // line 102
        // line 103
        echo "\t\t\t<dt class=\"col-md-6 col-sm-6 col-xs-12\">";
        echo $this->env->getExtension('phpbb')->lang("JOINED");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</dt> <dd class=\"col-md-6 col-sm-6 col-xs-12\">";
        echo (isset($context["JOINED"]) ? $context["JOINED"] : null);
        echo "</dd>
\t\t\t<dt class=\"col-md-6 col-sm-6 col-xs-12\">";
        // line 104
        echo $this->env->getExtension('phpbb')->lang("LAST_ACTIVE");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</dt> <dd class=\"col-md-6 col-sm-6 col-xs-12\">";
        echo (isset($context["LAST_ACTIVE"]) ? $context["LAST_ACTIVE"] : null);
        echo "</dd>
\t\t\t";
        // line 105
        if ((isset($context["S_WARNINGS"]) ? $context["S_WARNINGS"] : null)) {
            // line 106
            echo "\t\t\t<dt class=\"col-md-6 col-sm-6 col-xs-12\">";
            echo $this->env->getExtension('phpbb')->lang("WARNINGS");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " </dt>
\t\t\t<dd class=\"col-md-6 col-sm-6 col-xs-12\"><strong class=\"label label-info\">";
            // line 107
            echo (isset($context["WARNINGS"]) ? $context["WARNINGS"] : null);
            echo "</strong>";
            if (((isset($context["U_NOTES"]) ? $context["U_NOTES"] : null) || (isset($context["U_WARN"]) ? $context["U_WARN"] : null))) {
                echo " ";
                if ((isset($context["U_NOTES"]) ? $context["U_NOTES"] : null)) {
                    echo "<a href=\"";
                    echo (isset($context["U_NOTES"]) ? $context["U_NOTES"] : null);
                    echo "\" class=\"label label-warning\">";
                    echo $this->env->getExtension('phpbb')->lang("VIEW_NOTES");
                    echo "</a>";
                }
                echo " ";
                if ((isset($context["U_WARN"]) ? $context["U_WARN"] : null)) {
                    if ((isset($context["U_NOTES"]) ? $context["U_NOTES"] : null)) {
                        echo " ";
                    }
                    echo "<a href=\"";
                    echo (isset($context["U_WARN"]) ? $context["U_WARN"] : null);
                    echo "\"class=\"label label-danger\">";
                    echo $this->env->getExtension('phpbb')->lang("WARN_USER");
                    echo "</a>";
                }
            }
            echo "</dd>
\t\t\t";
        }
        // line 109
        echo "\t\t\t<dt class=\"col-md-6 col-sm-6 col-xs-12\">";
        echo $this->env->getExtension('phpbb')->lang("TOTAL_POSTS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</dt>
\t\t\t\t<dd class=\"col-md-6 col-sm-6 col-xs-12\">";
        // line 110
        echo (isset($context["POSTS"]) ? $context["POSTS"] : null);
        echo " ";
        if ((isset($context["S_DISPLAY_SEARCH"]) ? $context["S_DISPLAY_SEARCH"] : null)) {
            echo "| <strong><a href=\"";
            echo (isset($context["U_SEARCH_USER"]) ? $context["U_SEARCH_USER"] : null);
            echo "\">";
            echo $this->env->getExtension('phpbb')->lang("SEARCH_USER_POSTS");
            echo "</a></strong>";
        }
        // line 111
        echo "\t\t\t\t\t";
        if ((isset($context["POSTS_PCT"]) ? $context["POSTS_PCT"] : null)) {
            echo "<br />(";
            echo (isset($context["POSTS_PCT"]) ? $context["POSTS_PCT"] : null);
            echo " / ";
            echo (isset($context["POSTS_DAY"]) ? $context["POSTS_DAY"] : null);
            echo ")";
        }
        // line 112
        echo "\t\t\t\t\t";
        if (((isset($context["POSTS_IN_QUEUE"]) ? $context["POSTS_IN_QUEUE"] : null) && (isset($context["U_MCP_QUEUE"]) ? $context["U_MCP_QUEUE"] : null))) {
            echo "<br />(<a href=\"";
            echo (isset($context["U_MCP_QUEUE"]) ? $context["U_MCP_QUEUE"] : null);
            echo "\">";
            echo $this->env->getExtension('phpbb')->lang("POSTS_IN_QUEUE");
            echo "</a>)";
        } elseif ((isset($context["POSTS_IN_QUEUE"]) ? $context["POSTS_IN_QUEUE"] : null)) {
            echo "<br />(";
            echo $this->env->getExtension('phpbb')->lang("POSTS_IN_QUEUE");
            echo ")";
        }
        // line 113
        echo "\t\t\t\t</dd>
\t\t\t";
        // line 114
        if (((isset($context["S_SHOW_ACTIVITY"]) ? $context["S_SHOW_ACTIVITY"] : null) && (isset($context["POSTS"]) ? $context["POSTS"] : null))) {
            // line 115
            echo "\t\t\t\t<dt class=\"col-md-6 col-sm-6 col-xs-12\">";
            echo $this->env->getExtension('phpbb')->lang("ACTIVE_IN_FORUM");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt> <dd class=\"col-md-6 col-sm-6 col-xs-12\">";
            if (((isset($context["ACTIVE_FORUM"]) ? $context["ACTIVE_FORUM"] : null) != "")) {
                echo "<strong><a href=\"";
                echo (isset($context["U_ACTIVE_FORUM"]) ? $context["U_ACTIVE_FORUM"] : null);
                echo "\">";
                echo (isset($context["ACTIVE_FORUM"]) ? $context["ACTIVE_FORUM"] : null);
                echo "</a></strong><br />(";
                echo (isset($context["ACTIVE_FORUM_POSTS"]) ? $context["ACTIVE_FORUM_POSTS"] : null);
                echo " / ";
                echo (isset($context["ACTIVE_FORUM_PCT"]) ? $context["ACTIVE_FORUM_PCT"] : null);
                echo ")";
            } else {
                echo " - ";
            }
            echo "</dd>
\t\t\t\t<dt class=\"col-md-6 col-sm-6 col-xs-12\">";
            // line 116
            echo $this->env->getExtension('phpbb')->lang("ACTIVE_IN_TOPIC");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt> <dd class=\"col-md-6 col-sm-6 col-xs-12\">";
            if (((isset($context["ACTIVE_TOPIC"]) ? $context["ACTIVE_TOPIC"] : null) != "")) {
                echo "<strong><a href=\"";
                echo (isset($context["U_ACTIVE_TOPIC"]) ? $context["U_ACTIVE_TOPIC"] : null);
                echo "\">";
                echo (isset($context["ACTIVE_TOPIC"]) ? $context["ACTIVE_TOPIC"] : null);
                echo "</a></strong><br />(";
                echo (isset($context["ACTIVE_TOPIC_POSTS"]) ? $context["ACTIVE_TOPIC_POSTS"] : null);
                echo " / ";
                echo (isset($context["ACTIVE_TOPIC_PCT"]) ? $context["ACTIVE_TOPIC_PCT"] : null);
                echo ")";
            } else {
                echo " - ";
            }
            echo "</dd>
\t\t\t";
        }
        // line 118
        echo "\t\t\t";
        // line 119
        echo "\t\t</dl>
\t</div>

\t</div>
</div>
";
        // line 124
        // line 125
        echo "
";
        // line 126
        if ((isset($context["SIGNATURE"]) ? $context["SIGNATURE"] : null)) {
            // line 127
            echo "<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
            // line 129
            echo $this->env->getExtension('phpbb')->lang("SIGNATURE");
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t";
            // line 132
            echo (isset($context["SIGNATURE"]) ? $context["SIGNATURE"] : null);
            echo "
\t</div>
</div>
";
        }
        // line 136
        echo "
</form>

";
        // line 139
        // line 140
        echo "
";
        // line 141
        $location = "jumpbox.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("jumpbox.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 142
        echo "
";
        // line 143
        $location = "overall_footer.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("overall_footer.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
    }

    public function getTemplateName()
    {
        return "memberlist_view.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  592 => 143,  589 => 142,  577 => 141,  574 => 140,  573 => 139,  568 => 136,  561 => 132,  555 => 129,  551 => 127,  549 => 126,  546 => 125,  545 => 124,  538 => 119,  536 => 118,  516 => 116,  496 => 115,  494 => 114,  491 => 113,  478 => 112,  469 => 111,  459 => 110,  453 => 109,  426 => 107,  420 => 106,  418 => 105,  411 => 104,  403 => 103,  402 => 102,  395 => 97,  387 => 95,  384 => 94,  381 => 93,  375 => 92,  372 => 91,  362 => 89,  354 => 87,  352 => 86,  346 => 85,  343 => 84,  338 => 83,  329 => 82,  318 => 76,  314 => 74,  313 => 73,  305 => 67,  299 => 66,  286 => 64,  283 => 63,  278 => 62,  266 => 61,  256 => 60,  247 => 59,  242 => 56,  239 => 55,  236 => 54,  228 => 52,  225 => 51,  217 => 49,  214 => 48,  206 => 46,  198 => 44,  195 => 43,  192 => 42,  183 => 41,  174 => 40,  165 => 39,  157 => 38,  147 => 37,  141 => 35,  135 => 31,  130 => 28,  119 => 27,  106 => 26,  96 => 25,  91 => 22,  89 => 21,  86 => 20,  79 => 19,  73 => 18,  70 => 17,  60 => 16,  54 => 15,  45 => 9,  38 => 5,  35 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
