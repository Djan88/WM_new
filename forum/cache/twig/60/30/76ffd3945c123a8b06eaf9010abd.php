<?php

/* viewforum_body.html */
class __TwigTemplate_603076ffd3945c123a8b06eaf9010abd extends Twig_Template
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
        echo "<a href=\"";
        echo (isset($context["U_VIEW_FORUM"]) ? $context["U_VIEW_FORUM"] : null);
        echo "\">";
        echo (isset($context["FORUM_NAME"]) ? $context["FORUM_NAME"] : null);
        echo "</a>";
        echo "</h3>

<!-- NOTE: remove the \"hide\" when you want to have the forum description on the forum body -->
";
        // line 6
        if ((isset($context["FORUM_DESC"]) ? $context["FORUM_DESC"] : null)) {
            // line 7
            echo "\t<div class=\"alert alert-info hide\">";
            echo (isset($context["FORUM_DESC"]) ? $context["FORUM_DESC"] : null);
            echo "</div>
";
        }
        // line 9
        if ((isset($context["MODERATORS"]) ? $context["MODERATORS"] : null)) {
            // line 10
            echo "\t<p><strong>";
            if ((isset($context["S_SINGLE_MODERATOR"]) ? $context["S_SINGLE_MODERATOR"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("MODERATOR");
            } else {
                echo $this->env->getExtension('phpbb')->lang("MODERATORS");
            }
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</strong> ";
            echo (isset($context["MODERATORS"]) ? $context["MODERATORS"] : null);
            echo "</p>
";
        }
        // line 12
        echo "
";
        // line 13
        if ((isset($context["S_FORUM_RULES"]) ? $context["S_FORUM_RULES"] : null)) {
            // line 14
            echo "<div class=\"alert alert-warning\">
\t";
            // line 15
            if ((isset($context["U_FORUM_RULES"]) ? $context["U_FORUM_RULES"] : null)) {
                // line 16
                echo "\t\t<a href=\"";
                echo (isset($context["U_FORUM_RULES"]) ? $context["U_FORUM_RULES"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("FORUM_RULES");
                echo "</a>
\t";
            } else {
                // line 18
                echo "\t\t<strong>";
                echo $this->env->getExtension('phpbb')->lang("FORUM_RULES");
                echo "</strong><br />
\t\t";
                // line 19
                echo (isset($context["FORUM_RULES"]) ? $context["FORUM_RULES"] : null);
                echo "
\t";
            }
            // line 21
            echo "</div>
";
        }
        // line 23
        echo "
";
        // line 24
        if ((isset($context["S_HAS_SUBFORUM"]) ? $context["S_HAS_SUBFORUM"] : null)) {
            // line 25
            if (((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) && (isset($context["U_MARK_FORUMS"]) ? $context["U_MARK_FORUMS"] : null))) {
                // line 26
                echo "\t<p class=\"clearfix\">
\t\t<a href=\"";
                // line 27
                echo (isset($context["U_MARK_FORUMS"]) ? $context["U_MARK_FORUMS"] : null);
                echo "\" class=\"pull-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\" data-ajax=\"mark_forums_read\">";
                echo $this->env->getExtension('phpbb')->lang("MARK_SUBFORUMS_READ");
                echo "</a>
\t</p>
";
            }
            // line 30
            echo "\t";
            $location = "forumlist_body.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("forumlist_body.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 32
        echo "
";
        // line 33
        if (((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination")) || (isset($context["TOTAL_POSTS"]) ? $context["TOTAL_POSTS"] : null)) || (isset($context["TOTAL_TOPICS"]) ? $context["TOTAL_TOPICS"] : null))) {
            // line 34
            echo "\t<div class=\"pages clearfix\">
\t\t";
            // line 35
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                // line 36
                echo "\t\t\t";
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
                // line 37
                echo "\t\t";
            }
            // line 38
            echo "\t\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 39
            echo (isset($context["TOTAL_TOPICS"]) ? $context["TOTAL_TOPICS"] : null);
            echo "</span>
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 40
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t\t";
            // line 41
            if ((((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) && (isset($context["U_MARK_TOPICS"]) ? $context["U_MARK_TOPICS"] : null)) && twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow")))) {
                // line 42
                echo "\t\t\t<a href=\"";
                echo (isset($context["U_MARK_TOPICS"]) ? $context["U_MARK_TOPICS"] : null);
                echo "\" class=\"btn btn-default\" accesskey=\"m\" data-ajax=\"mark_topics_read\">";
                echo $this->env->getExtension('phpbb')->lang("MARK_TOPICS_READ");
                echo "</a>
\t\t";
            }
            // line 44
            echo "\t\t</div>
\t</div>
";
        }
        // line 47
        echo "
";
        // line 48
        if (((isset($context["S_DISPLAY_POST_INFO"]) ? $context["S_DISPLAY_POST_INFO"] : null) || (isset($context["S_DISPLAY_SEARCHBOX"]) ? $context["S_DISPLAY_SEARCHBOX"] : null))) {
            // line 49
            echo "\t<div class=\"well well-sm text-center clearfix\">

\t";
            // line 51
            if (((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) && (isset($context["S_DISPLAY_POST_INFO"]) ? $context["S_DISPLAY_POST_INFO"] : null))) {
                // line 52
                echo "\t\t";
                // line 53
                echo "\t\t<div class=\"big-btn pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                    echo " locked-icon";
                } else {
                    echo " post-icon";
                }
                echo "\" title=\"";
                if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                    echo $this->env->getExtension('phpbb')->lang("FORUM_LOCKED");
                } else {
                    echo $this->env->getExtension('phpbb')->lang("POST_TOPIC");
                }
                echo "\"><a href=\"";
                echo (isset($context["U_POST_NEW_TOPIC"]) ? $context["U_POST_NEW_TOPIC"] : null);
                echo "\" class=\"btn";
                if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                    echo " btn-warning";
                } else {
                    echo " btn-primary";
                }
                echo "\"><i class=\"fa";
                if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                    echo " fa-lock";
                } else {
                    echo " fa-plus";
                }
                echo "\"></i>";
                if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                    echo $this->env->getExtension('phpbb')->lang("FORUM_LOCKED");
                } else {
                    echo $this->env->getExtension('phpbb')->lang("POST_TOPIC");
                }
                echo "</a> &nbsp;</div>
\t\t";
                // line 54
                // line 55
                echo "\t";
            }
            // line 56
            echo "
\t";
            // line 57
            if ((isset($context["S_DISPLAY_SEARCHBOX"]) ? $context["S_DISPLAY_SEARCHBOX"] : null)) {
                // line 58
                echo "\t\t<form method=\"get\" id=\"forum-search\" action=\"";
                echo (isset($context["S_SEARCHBOX_ACTION"]) ? $context["S_SEARCHBOX_ACTION"] : null);
                echo "\">
\t\t<fieldset class=\"form-inline pull-";
                // line 59
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\">
\t\t\t<div class=\"input-group\">
\t\t\t\t<input type=\"search\" name=\"keywords\" id=\"search_keywords\" size=\"20\" placeholder=\"";
                // line 61
                echo $this->env->getExtension('phpbb')->lang("SEARCH_FORUM");
                echo "\" class=\"form-control\" />
\t\t\t\t<span class=\"input-group-btn\">
\t\t\t\t\t<button type=\"submit\" title=\"";
                // line 63
                echo $this->env->getExtension('phpbb')->lang("SEARCH");
                echo "\" class=\"btn btn-default\"><i class=\"fa fa-search fa-fw\"></i></button>
\t\t\t\t\t<a href=\"";
                // line 64
                echo (isset($context["U_SEARCH"]) ? $context["U_SEARCH"] : null);
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("SEARCH_ADV");
                echo "\" class=\"btn btn-default\"><i class=\"fa fa-gear fa-fw\"></i></a>
\t\t\t\t</span>
\t\t\t</div>
\t\t\t";
                // line 67
                echo (isset($context["S_SEARCH_LOCAL_HIDDEN_FIELDS"]) ? $context["S_SEARCH_LOCAL_HIDDEN_FIELDS"] : null);
                echo "
\t\t</fieldset>
\t\t</form>
\t";
            }
            // line 71
            echo "\t</div>
";
        }
        // line 73
        echo "
";
        // line 74
        if ((isset($context["S_NO_READ_ACCESS"]) ? $context["S_NO_READ_ACCESS"] : null)) {
            // line 75
            echo "
\t<div class=\"alert alert-warning\">
\t\t";
            // line 77
            echo $this->env->getExtension('phpbb')->lang("NO_READ_ACCESS");
            echo "
\t</div>

\t";
            // line 80
            if (((!(isset($context["S_USER_LOGGED_IN"]) ? $context["S_USER_LOGGED_IN"] : null)) && (!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)))) {
                // line 81
                echo "
\t<form action=\"";
                // line 82
                echo (isset($context["S_LOGIN_ACTION"]) ? $context["S_LOGIN_ACTION"] : null);
                echo "\" method=\"post\">

\t<div class=\"panel panel-default\">
\t\t<div class=\"panel-heading\">
\t\t\t<h4 class=\"panel-title\"><a href=\"";
                // line 86
                echo (isset($context["U_LOGIN_LOGOUT"]) ? $context["U_LOGIN_LOGOUT"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("LOGIN_LOGOUT");
                echo "</a>";
                if ((isset($context["S_REGISTER_ENABLED"]) ? $context["S_REGISTER_ENABLED"] : null)) {
                    echo "&nbsp; &bull; &nbsp;<a href=\"";
                    echo (isset($context["U_REGISTER"]) ? $context["U_REGISTER"] : null);
                    echo "\">";
                    echo $this->env->getExtension('phpbb')->lang("REGISTER");
                    echo "</a>";
                }
                echo "</h4>
\t\t</div>
\t\t<div class=\"panel-body\">

\t\t<fieldset class=\"form-horizontal\">
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"username\">";
                // line 92
                echo $this->env->getExtension('phpbb')->lang("USERNAME");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label></dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"text\" tabindex=\"1\" name=\"username\" id=\"username\" size=\"25\" value=\"";
                // line 93
                echo (isset($context["USERNAME"]) ? $context["USERNAME"] : null);
                echo "\" class=\"form-control\" /></dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"password\">";
                // line 96
                echo $this->env->getExtension('phpbb')->lang("PASSWORD");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label></dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"password\" tabindex=\"2\" id=\"password\" name=\"password\" size=\"25\" class=\"form-control\" /></dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12 hidden-xs\">&nbsp;</dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\">
\t\t\t";
                // line 102
                if ((isset($context["S_AUTOLOGIN_ENABLED"]) ? $context["S_AUTOLOGIN_ENABLED"] : null)) {
                    // line 103
                    echo "\t\t\t\t<label for=\"autologin\"><input type=\"checkbox\" name=\"autologin\" id=\"autologin\" tabindex=\"3\" /> ";
                    echo $this->env->getExtension('phpbb')->lang("LOG_ME_IN");
                    echo "</label><br />
\t\t\t";
                }
                // line 105
                echo "\t\t\t\t<label for=\"viewonline\"><input type=\"checkbox\" name=\"viewonline\" id=\"viewonline\" tabindex=\"4\" /> ";
                echo $this->env->getExtension('phpbb')->lang("HIDE_ME");
                echo "</label>
\t\t\t</dd>
\t\t</dl>
\t\t</fieldset>

\t\t</div>

\t\t<div class=\"panel-footer text-center\">
\t\t\t<input type=\"submit\" name=\"login\" tabindex=\"5\" value=\"";
                // line 113
                echo $this->env->getExtension('phpbb')->lang("LOGIN");
                echo "\" class=\"btn btn-success\" />
\t\t\t";
                // line 114
                echo (isset($context["S_LOGIN_REDIRECT"]) ? $context["S_LOGIN_REDIRECT"] : null);
                echo "
\t\t</div>
\t</div>

\t</form>

\t";
            }
            // line 121
            echo "
";
        }
        // line 123
        echo "
";
        // line 124
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow"));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["topicrow"]) {
            // line 125
            echo "
\t";
            // line 126
            if (((!$this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_TYPE_SWITCH")) && (!$this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_FIRST_ROW")))) {
                // line 127
                echo "\t</div>
\t";
            }
            // line 129
            echo "
\t";
            // line 130
            if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_FIRST_ROW") || (!$this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_TYPE_SWITCH")))) {
                // line 131
                echo "\t\t<div class=\"panel panel-default\">
\t\t<div class=\"clearfix";
                // line 132
                if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_TYPE_SWITCH") && ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POST_ANNOUNCE") || $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POST_GLOBAL")))) {
                    echo " text-info";
                }
                echo "\">
\t\t\t<h4 class=\"col-md-7 col-sm-8 col-xs-12\"";
                // line 133
                if ((isset($context["S_DISPLAY_ACTIVE"]) ? $context["S_DISPLAY_ACTIVE"] : null)) {
                    echo " id=\"active_topics\"";
                }
                echo ">";
                if ((isset($context["S_DISPLAY_ACTIVE"]) ? $context["S_DISPLAY_ACTIVE"] : null)) {
                    echo $this->env->getExtension('phpbb')->lang("ACTIVE_TOPICS");
                } elseif (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_TYPE_SWITCH") && ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POST_ANNOUNCE") || $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POST_GLOBAL")))) {
                    echo $this->env->getExtension('phpbb')->lang("ANNOUNCEMENTS");
                } else {
                    echo $this->env->getExtension('phpbb')->lang("TOPICS");
                }
                echo "</h4>
\t\t\t<h5 class=\"col-md-1 visible-lg visible-md text-center\">";
                // line 134
                echo $this->env->getExtension('phpbb')->lang("REPLIES");
                echo "</h5>
\t\t\t<h5 class=\"col-md-1 visible-lg visible-md text-center\">";
                // line 135
                echo $this->env->getExtension('phpbb')->lang("VIEWS");
                echo "</h5>
\t\t\t<h5 class=\"col-md-3 col-sm-4 hidden-xs\">";
                // line 136
                echo $this->env->getExtension('phpbb')->lang("LAST_POST");
                echo "</h5>
\t\t</div>
\t";
            }
            // line 139
            echo "
\t\t<div class=\"clearfix icon ";
            // line 140
            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_IMG_STYLE");
            if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_ROW_COUNT") % 2 == 0)) {
                echo " bg1";
            } else {
                echo " bg2";
            }
            if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POST_STICKY")) {
                echo " bg-info";
            }
            if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_UNAPPROVED") || $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POSTS_UNAPPROVED"))) {
                echo " bg-success";
            }
            if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_REPORTED")) {
                echo " bg-danger";
            }
            echo "\">
\t\t\t<div class=\"folder col-md-7 col-sm-8 col-xs-12\"";
            // line 141
            if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ICON_IMG") && (isset($context["S_TOPIC_ICONS"]) ? $context["S_TOPIC_ICONS"] : null))) {
                echo " style=\"background-image: url(";
                echo (isset($context["T_ICONS_PATH"]) ? $context["T_ICONS_PATH"] : null);
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ICON_IMG");
                echo ");\"";
            }
            echo " title=\"";
            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_FOLDER_IMG_ALT");
            echo "\">
\t\t\t";
            // line 142
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "pagination"))) {
                // line 143
                echo "\t\t\t\t<ul class=\"pagination pagination-sm pull-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\">
\t\t\t\t";
                // line 144
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "pagination"));
                foreach ($context['_seq'] as $context["_key"] => $context["pagination"]) {
                    // line 145
                    echo "\t\t\t\t\t";
                    if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_PREV")) {
                        // line 146
                        echo "\t\t\t\t\t";
                    } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_CURRENT")) {
                        echo "<li class=\"active\"><span>";
                        echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                        echo "</span></li>
\t\t\t\t\t";
                    } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_ELLIPSIS")) {
                        // line 147
                        echo "<li class=\"ellipsis disabled\"><span>";
                        echo $this->env->getExtension('phpbb')->lang("ELLIPSIS");
                        echo "</span></li>
\t\t\t\t\t";
                    } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_NEXT")) {
                        // line 149
                        echo "\t\t\t\t\t";
                    } else {
                        echo "<li><a href=\"";
                        echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                        echo "\">";
                        echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                        echo "</a></li>
\t\t\t\t\t";
                    }
                    // line 151
                    echo "\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['pagination'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 152
                echo "\t\t\t\t</ul>
\t\t\t";
            }
            // line 154
            echo "
\t\t\t\t";
            // line 155
            // line 156
            echo "\t\t\t\t";
            if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_UNREAD_TOPIC") && (!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)))) {
                echo "<a href=\"";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_NEWEST_POST");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("VIEW_NEWEST_POST");
                echo "\"><i class=\"fa fa-file icon_topic_newest\"></i></a> ";
            }
            echo "<a href=\"";
            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_VIEW_TOPIC");
            echo "\" class=\"topictitle\">";
            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_TITLE");
            echo "</a>
\t\t\t\t";
            // line 157
            if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_UNAPPROVED") || $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POSTS_UNAPPROVED"))) {
                echo "<a href=\"";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_MCP_QUEUE");
                echo "\" title=\"";
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_UNAPPROVED")) {
                    echo $this->env->getExtension('phpbb')->lang("TOPIC_UNAPPROVED");
                } else {
                    echo $this->env->getExtension('phpbb')->lang("POSTS_UNAPPROVED");
                }
                echo "\"><i class=\"fa fa-flag\"></i></a> ";
            }
            // line 158
            echo "\t\t\t\t";
            if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_DELETED")) {
                echo "<a href=\"";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_MCP_QUEUE");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("TOPIC_DELETED");
                echo "\"><i class=\"fa fa-recycle\"></i></a> ";
            }
            // line 159
            echo "\t\t\t\t";
            if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_REPORTED")) {
                echo "<a href=\"";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_MCP_REPORT");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("TOPIC_REPORTED");
                echo "\"><i class=\"fa fa-exclamation-triangle\"></i></a>";
            }
            echo "<br />

\t\t\t\t<div class=\"hidden-xs\">
\t\t\t\t\t";
            // line 162
            if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_HAS_POLL")) {
                echo "<i class=\"fa fa-bar-chart tip\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("TOPIC_POLL");
                echo "\"></i> ";
            }
            // line 163
            echo "\t\t\t\t\t";
            if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "ATTACH_ICON_IMG")) {
                echo "<span class=\"tip\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("TOTAL_ATTACHMENTS");
                echo "\"><i class=\"fa fa-paperclip\"></i></span> ";
            }
            // line 164
            echo "\t\t\t\t\t";
            echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
            echo " ";
            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_AUTHOR_FULL");
            echo " &raquo; ";
            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "FIRST_POST_TIME");
            echo "
\t\t\t\t\t";
            // line 165
            if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POST_GLOBAL") && ((isset($context["FORUM_ID"]) ? $context["FORUM_ID"] : null) != $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "FORUM_ID")))) {
                echo " &raquo; ";
                echo $this->env->getExtension('phpbb')->lang("IN");
                echo " <a href=\"";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_VIEW_FORUM");
                echo "\">";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "FORUM_NAME");
                echo "</a>";
            }
            // line 166
            echo "\t\t\t\t</div>

\t\t\t\t";
            // line 168
            if ((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null))) {
                // line 169
                echo "\t\t\t\t<div class=\"visible-xs\">
\t\t\t\t\t";
                // line 170
                echo $this->env->getExtension('phpbb')->lang("LAST_POST");
                echo " ";
                echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                echo " ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_AUTHOR_FULL");
                echo " &laquo; <a href=\"";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_LAST_POST");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("GOTO_LAST_POST");
                echo "\">";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_TIME");
                echo "</a>
\t\t\t\t\t";
                // line 171
                if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POST_GLOBAL") && ((isset($context["FORUM_ID"]) ? $context["FORUM_ID"] : null) != $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "FORUM_ID")))) {
                    // line 172
                    echo "\t\t\t\t\t<br />";
                    echo $this->env->getExtension('phpbb')->lang("POSTED");
                    echo " ";
                    echo $this->env->getExtension('phpbb')->lang("IN");
                    echo " <a href=\"";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_VIEW_FORUM");
                    echo "\">";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "FORUM_NAME");
                    echo "</a>
\t\t\t\t\t";
                }
                // line 174
                echo "\t\t\t\t\t";
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "REPLIES")) {
                    // line 175
                    echo "\t\t\t\t\t<br />";
                    echo $this->env->getExtension('phpbb')->lang("REPLIES");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " <strong>";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "REPLIES");
                    echo "</strong>
\t\t\t\t\t";
                }
                // line 177
                echo "\t\t\t\t</div>
\t\t\t\t";
            }
            // line 179
            echo "
\t\t\t\t";
            // line 180
            // line 181
            echo "\t\t\t</div>

\t\t\t<div class=\"col-md-1 visible-lg visible-md text-center\">";
            // line 183
            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "REPLIES");
            echo "</div>
\t\t\t<div class=\"col-md-1 visible-lg visible-md text-center\">";
            // line 184
            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "VIEWS");
            echo "</div>
\t\t\t<div class=\"col-md-3 col-sm-4 hidden-xs\">
\t\t\t\t";
            // line 186
            echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
            echo " ";
            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_AUTHOR_FULL");
            echo "
\t\t\t\t";
            // line 187
            if ((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null))) {
                echo "<a href=\"";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_LAST_POST");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("GOTO_LAST_POST");
                echo "\"><i class=\"fa fa-arrow-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\"></i></a> ";
            }
            echo "<br />";
            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_TIME");
            echo "
\t\t\t</div>
\t\t</div>

\t";
            // line 191
            if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_LAST_ROW")) {
                // line 192
                echo "\t</div>
\t";
            }
            // line 194
            echo "
";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 196
            echo "\t";
            if ((isset($context["S_IS_POSTABLE"]) ? $context["S_IS_POSTABLE"] : null)) {
                // line 197
                echo "\t<div class=\"alert alert-info\">
\t\t";
                // line 198
                echo $this->env->getExtension('phpbb')->lang("NO_TOPICS");
                echo "
\t</div>
\t";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['topicrow'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 202
        echo "
";
        // line 203
        if (((isset($context["S_SELECT_SORT_DAYS"]) ? $context["S_SELECT_SORT_DAYS"] : null) && (!(isset($context["S_DISPLAY_ACTIVE"]) ? $context["S_DISPLAY_ACTIVE"] : null)))) {
            // line 204
            echo "<form method=\"post\" action=\"";
            echo (isset($context["S_FORUM_ACTION"]) ? $context["S_FORUM_ACTION"] : null);
            echo "\">
\t<fieldset class=\"panel-group text-center\">
\t";
            // line 206
            if ((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null))) {
                // line 207
                echo "\t\t<label>";
                echo $this->env->getExtension('phpbb')->lang("DISPLAY_TOPICS");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label> ";
                echo (isset($context["S_SELECT_SORT_DAYS"]) ? $context["S_SELECT_SORT_DAYS"] : null);
                echo "
\t\t<label>";
                // line 208
                echo $this->env->getExtension('phpbb')->lang("SORT_BY");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label> ";
                echo (isset($context["S_SELECT_SORT_KEY"]) ? $context["S_SELECT_SORT_KEY"] : null);
                echo " ";
                echo (isset($context["S_SELECT_SORT_DIR"]) ? $context["S_SELECT_SORT_DIR"] : null);
                echo "
\t\t<input type=\"submit\" name=\"sort\" value=\"";
                // line 209
                echo $this->env->getExtension('phpbb')->lang("GO");
                echo "\" class=\"btn btn-default\" />
\t";
            }
            // line 211
            echo "\t</fieldset>
</form>
";
        }
        // line 214
        echo "
";
        // line 215
        if ((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow")) && (!(isset($context["S_DISPLAY_ACTIVE"]) ? $context["S_DISPLAY_ACTIVE"] : null)))) {
            // line 216
            echo "\t<div class=\"well well-sm text-center clearfix\">
\t";
            // line 217
            if (((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) && (isset($context["S_DISPLAY_POST_INFO"]) ? $context["S_DISPLAY_POST_INFO"] : null))) {
                // line 218
                echo "\t\t";
                // line 219
                echo "
\t\t<div class=\"big-btn pull-";
                // line 220
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                    echo " locked-icon";
                } else {
                    echo " post-icon";
                }
                echo "\" title=\"";
                if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                    echo $this->env->getExtension('phpbb')->lang("FORUM_LOCKED");
                } else {
                    echo $this->env->getExtension('phpbb')->lang("POST_TOPIC");
                }
                echo "\"><a href=\"";
                echo (isset($context["U_POST_NEW_TOPIC"]) ? $context["U_POST_NEW_TOPIC"] : null);
                echo "\" class=\"btn";
                if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                    echo " btn-warning";
                } else {
                    echo " btn-primary";
                }
                echo "\"><i class=\"fa";
                if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                    echo " fa-lock";
                } else {
                    echo " fa-plus";
                }
                echo "\"></i>";
                if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                    echo $this->env->getExtension('phpbb')->lang("FORUM_LOCKED");
                } else {
                    echo $this->env->getExtension('phpbb')->lang("POST_TOPIC");
                }
                echo "</a> &nbsp;</div>

\t\t";
                // line 222
                // line 223
                echo "\t";
            }
            // line 224
            echo "\t</div>
";
        }
        // line 226
        echo "
";
        // line 227
        if (((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination")) || (isset($context["TOTAL_POSTS"]) ? $context["TOTAL_POSTS"] : null)) || (isset($context["TOTAL_TOPICS"]) ? $context["TOTAL_TOPICS"] : null))) {
            // line 228
            echo "\t<div class=\"pages clearfix\">
\t\t";
            // line 229
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                // line 230
                echo "\t\t\t";
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
                // line 231
                echo "\t\t";
            }
            // line 232
            echo "\t\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 233
            echo (isset($context["TOTAL_TOPICS"]) ? $context["TOTAL_TOPICS"] : null);
            echo "</span>
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 234
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t\t";
            // line 235
            if ((((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) && (isset($context["U_MARK_TOPICS"]) ? $context["U_MARK_TOPICS"] : null)) && twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow")))) {
                // line 236
                echo "\t\t\t<a href=\"";
                echo (isset($context["U_MARK_TOPICS"]) ? $context["U_MARK_TOPICS"] : null);
                echo "\" class=\"btn btn-default\" accesskey=\"m\" data-ajax=\"mark_topics_read\">";
                echo $this->env->getExtension('phpbb')->lang("MARK_TOPICS_READ");
                echo "</a>
\t\t";
            }
            // line 238
            echo "\t\t</div>
\t</div>
";
        }
        // line 241
        echo "
";
        // line 242
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
        // line 243
        echo "
";
        // line 244
        if ((isset($context["S_DISPLAY_ONLINE_LIST"]) ? $context["S_DISPLAY_ONLINE_LIST"] : null)) {
            // line 245
            echo "<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
            // line 247
            if ((isset($context["U_VIEWONLINE"]) ? $context["U_VIEWONLINE"] : null)) {
                echo "<a href=\"";
                echo (isset($context["U_VIEWONLINE"]) ? $context["U_VIEWONLINE"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("WHO_IS_ONLINE");
                echo "</a>";
            } else {
                echo $this->env->getExtension('phpbb')->lang("WHO_IS_ONLINE");
            }
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t<p>";
            // line 250
            echo (isset($context["LOGGED_IN_USER_LIST"]) ? $context["LOGGED_IN_USER_LIST"] : null);
            echo "</p>
\t</div>
</div>
";
        }
        // line 254
        echo "
";
        // line 255
        if ((isset($context["S_DISPLAY_POST_INFO"]) ? $context["S_DISPLAY_POST_INFO"] : null)) {
            // line 256
            echo "<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
            // line 258
            echo $this->env->getExtension('phpbb')->lang("FORUM_PERMISSIONS");
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t";
            // line 261
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "rules"));
            foreach ($context['_seq'] as $context["_key"] => $context["rules"]) {
                echo $this->getAttribute((isset($context["rules"]) ? $context["rules"] : null), "RULE");
                echo "<br />";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['rules'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 262
            echo "\t</div>
</div>
";
        }
        // line 265
        echo "
";
        // line 266
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
        return "viewforum_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  964 => 266,  961 => 265,  956 => 262,  946 => 261,  940 => 258,  936 => 256,  934 => 255,  931 => 254,  924 => 250,  910 => 247,  906 => 245,  904 => 244,  901 => 243,  889 => 242,  886 => 241,  881 => 238,  873 => 236,  871 => 235,  867 => 234,  863 => 233,  858 => 232,  855 => 231,  842 => 230,  840 => 229,  837 => 228,  835 => 227,  832 => 226,  828 => 224,  825 => 223,  824 => 222,  788 => 220,  785 => 219,  783 => 218,  781 => 217,  778 => 216,  776 => 215,  773 => 214,  768 => 211,  763 => 209,  754 => 208,  746 => 207,  744 => 206,  738 => 204,  736 => 203,  733 => 202,  723 => 198,  720 => 197,  717 => 196,  711 => 194,  707 => 192,  705 => 191,  688 => 187,  682 => 186,  677 => 184,  673 => 183,  669 => 181,  668 => 180,  665 => 179,  661 => 177,  652 => 175,  649 => 174,  637 => 172,  635 => 171,  621 => 170,  618 => 169,  616 => 168,  612 => 166,  602 => 165,  593 => 164,  586 => 163,  580 => 162,  567 => 159,  558 => 158,  546 => 157,  531 => 156,  530 => 155,  527 => 154,  523 => 152,  517 => 151,  507 => 149,  501 => 147,  493 => 146,  490 => 145,  486 => 144,  481 => 143,  479 => 142,  468 => 141,  450 => 140,  447 => 139,  441 => 136,  437 => 135,  433 => 134,  419 => 133,  413 => 132,  410 => 131,  408 => 130,  405 => 129,  401 => 127,  399 => 126,  396 => 125,  391 => 124,  388 => 123,  384 => 121,  374 => 114,  370 => 113,  358 => 105,  352 => 103,  350 => 102,  340 => 96,  334 => 93,  329 => 92,  310 => 86,  303 => 82,  300 => 81,  298 => 80,  292 => 77,  288 => 75,  286 => 74,  283 => 73,  279 => 71,  272 => 67,  264 => 64,  260 => 63,  255 => 61,  250 => 59,  245 => 58,  243 => 57,  240 => 56,  237 => 55,  236 => 54,  200 => 53,  198 => 52,  196 => 51,  192 => 49,  190 => 48,  187 => 47,  182 => 44,  174 => 42,  172 => 41,  168 => 40,  164 => 39,  159 => 38,  156 => 37,  143 => 36,  141 => 35,  138 => 34,  136 => 33,  133 => 32,  119 => 30,  109 => 27,  106 => 26,  104 => 25,  102 => 24,  99 => 23,  95 => 21,  90 => 19,  85 => 18,  77 => 16,  75 => 15,  72 => 14,  70 => 13,  67 => 12,  54 => 10,  52 => 9,  46 => 7,  44 => 6,  34 => 3,  31 => 2,  19 => 1,);
    }
}
