<?php

/* viewtopic_body.html */
class __TwigTemplate_8a0ac7ac050ed2d5da52608299c1ebe4 extends Twig_Template
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
        echo (isset($context["U_VIEW_TOPIC"]) ? $context["U_VIEW_TOPIC"] : null);
        echo "\">";
        echo (isset($context["TOPIC_TITLE"]) ? $context["TOPIC_TITLE"] : null);
        echo "</a>";
        echo "</h3>

<!-- NOTE: remove the \"hide\" when you want to have the forum description on the topic body -->
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
        echo "
";
        // line 10
        if ((isset($context["MODERATORS"]) ? $context["MODERATORS"] : null)) {
            // line 11
            echo "<p>
\t<strong>";
            // line 12
            if ((isset($context["S_SINGLE_MODERATOR"]) ? $context["S_SINGLE_MODERATOR"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("MODERATOR");
            } else {
                echo $this->env->getExtension('phpbb')->lang("MODERATORS");
            }
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</strong> ";
            echo (isset($context["MODERATORS"]) ? $context["MODERATORS"] : null);
            echo "
</p>
";
        }
        // line 15
        echo "
";
        // line 16
        if ((isset($context["S_FORUM_RULES"]) ? $context["S_FORUM_RULES"] : null)) {
            // line 17
            echo "<div class=\"alert alert-warning\">
";
            // line 18
            if ((isset($context["U_FORUM_RULES"]) ? $context["U_FORUM_RULES"] : null)) {
                // line 19
                echo "\t<a href=\"";
                echo (isset($context["U_FORUM_RULES"]) ? $context["U_FORUM_RULES"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("FORUM_RULES");
                echo "</a>
";
            } else {
                // line 21
                echo "\t<strong>";
                echo $this->env->getExtension('phpbb')->lang("FORUM_RULES");
                echo "</strong><br />
\t";
                // line 22
                echo (isset($context["FORUM_RULES"]) ? $context["FORUM_RULES"] : null);
                echo "
";
            }
            // line 24
            echo "</div>
";
        }
        // line 26
        echo "
";
        // line 27
        if ((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination")) || (isset($context["TOTAL_POSTS"]) ? $context["TOTAL_POSTS"] : null))) {
            // line 28
            echo "<div class=\"pages clearfix\">
\t";
            // line 29
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                // line 30
                echo "\t\t";
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
                // line 31
                echo "\t";
            }
            // line 32
            echo "\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t<span class=\"btn btn-default disabled\">";
            // line 33
            echo (isset($context["TOTAL_POSTS"]) ? $context["TOTAL_POSTS"] : null);
            echo "</span>
\t\t<span class=\"btn btn-default disabled\">";
            // line 34
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t";
            // line 35
            if (((isset($context["U_VIEW_UNREAD_POST"]) ? $context["U_VIEW_UNREAD_POST"] : null) && (!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)))) {
                // line 36
                echo "\t\t<a href=\"";
                echo (isset($context["U_VIEW_UNREAD_POST"]) ? $context["U_VIEW_UNREAD_POST"] : null);
                echo "\" class=\"btn btn-default\">";
                echo $this->env->getExtension('phpbb')->lang("VIEW_UNREAD_POST");
                echo "</a>
\t";
            }
            // line 38
            echo "\t</div>
</div>
";
        }
        // line 41
        echo "
<div class=\"well well-sm text-center clearfix\">

\t";
        // line 44
        // line 45
        echo "
\t";
        // line 46
        if (((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) && (isset($context["S_DISPLAY_REPLY_INFO"]) ? $context["S_DISPLAY_REPLY_INFO"] : null))) {
            // line 47
            echo "\t\t<div class=\"big-btn pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                echo " locked-icon";
            } else {
                echo " reply-icon";
            }
            echo "\"><a href=\"";
            echo (isset($context["U_POST_REPLY_TOPIC"]) ? $context["U_POST_REPLY_TOPIC"] : null);
            echo "\" class=\"btn";
            if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                echo " btn-warning";
            } else {
                echo " btn-primary";
            }
            echo "\" title=\"";
            if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("TOPIC_LOCKED");
            } else {
                echo $this->env->getExtension('phpbb')->lang("POST_REPLY");
            }
            echo "\"><i class=\"fa";
            if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                echo " fa-lock";
            } else {
                echo " fa-reply";
            }
            echo "\"></i>";
            if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("TOPIC_LOCKED_SHORT");
            } else {
                echo $this->env->getExtension('phpbb')->lang("POST_REPLY");
            }
            echo "</a> &nbsp;</div>
\t";
        }
        // line 49
        echo "
\t";
        // line 50
        // line 51
        echo "
\t";
        // line 52
        $location = "viewtopic_topic_tools.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("viewtopic_topic_tools.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 53
        echo "
\t";
        // line 54
        if ((isset($context["S_DISPLAY_SEARCHBOX"]) ? $context["S_DISPLAY_SEARCHBOX"] : null)) {
            // line 55
            echo "\t\t<form method=\"get\" id=\"topic-search\" action=\"";
            echo (isset($context["S_SEARCHBOX_ACTION"]) ? $context["S_SEARCHBOX_ACTION"] : null);
            echo "\">
\t\t<fieldset class=\"form-inline pull-";
            // line 56
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t\t<div class=\"input-group\">
\t\t\t\t<input  type=\"search\" name=\"keywords\" id=\"search_keywords\" size=\"20\" placeholder=\"";
            // line 58
            echo $this->env->getExtension('phpbb')->lang("SEARCH_TOPIC");
            echo "\" class=\"form-control\" />
\t\t\t\t<span class=\"input-group-btn\">
\t\t\t\t\t<button type=\"submit\" title=\"";
            // line 60
            echo $this->env->getExtension('phpbb')->lang("SEARCH");
            echo "\" class=\"btn btn-default\"><i class=\"fa fa-search fa-fw\"></i></button>
\t\t\t\t\t<a href=\"";
            // line 61
            echo (isset($context["U_SEARCH"]) ? $context["U_SEARCH"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("SEARCH_ADV");
            echo "\" class=\"btn btn-default\"><i class=\"fa fa-gear fa-fw\"></i></a>
\t\t\t\t</span>
\t\t\t</div>
\t\t\t";
            // line 64
            echo (isset($context["S_SEARCH_LOCAL_HIDDEN_FIELDS"]) ? $context["S_SEARCH_LOCAL_HIDDEN_FIELDS"] : null);
            echo "
\t\t</fieldset>
\t\t</form>
\t";
        }
        // line 68
        echo "
</div>

";
        // line 71
        if ((isset($context["S_HAS_POLL"]) ? $context["S_HAS_POLL"] : null)) {
            // line 72
            echo "\t<form method=\"post\" action=\"";
            echo (isset($context["S_POLL_ACTION"]) ? $context["S_POLL_ACTION"] : null);
            echo "\" data-ajax=\"vote_poll\" class=\"topic_poll\">

\t<div class=\"panel panel-primary\">
\t\t<div class=\"panel-heading\">
\t\t\t<h4 class=\"panel-title\">";
            // line 76
            echo (isset($context["POLL_QUESTION"]) ? $context["POLL_QUESTION"] : null);
            echo "</h4>
\t\t</div>
\t\t<div class=\"panel-body\">
\t\t\t<p>";
            // line 79
            echo $this->env->getExtension('phpbb')->lang("POLL_LENGTH");
            if (((isset($context["S_CAN_VOTE"]) ? $context["S_CAN_VOTE"] : null) && (isset($context["L_POLL_LENGTH"]) ? $context["L_POLL_LENGTH"] : null))) {
                echo "<br />";
            }
            if ((isset($context["S_CAN_VOTE"]) ? $context["S_CAN_VOTE"] : null)) {
                echo "<span class=\"poll_max_votes\">";
                echo $this->env->getExtension('phpbb')->lang("MAX_VOTES");
                echo "</span>";
            }
            echo "</p>

\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t";
            // line 82
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "poll_option"));
            foreach ($context['_seq'] as $context["_key"] => $context["poll_option"]) {
                // line 83
                echo "\t\t\t\t";
                // line 84
                echo "\t\t\t\t";
                if ((isset($context["S_DISPLAY_RESULTS"]) ? $context["S_DISPLAY_RESULTS"] : null)) {
                    // line 85
                    echo "\t\t\t\t<span class=\"pull-";
                    echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                    echo "\">
\t\t\t\t";
                    // line 86
                    if ($this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_VOTED")) {
                        echo "<i class=\"fa fa-check tip\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("POLL_VOTED_OPTION");
                        echo "\"></i> &nbsp;";
                    }
                    // line 87
                    echo "\t\t\t\t";
                    if (($this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_RESULT") == 0)) {
                        echo $this->env->getExtension('phpbb')->lang("NO_VOTES");
                    } else {
                        echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_PERCENT");
                    }
                    // line 88
                    echo "\t\t\t\t</span>
\t\t\t\t";
                }
                // line 90
                echo "
\t\t\t\t";
                // line 91
                if ((isset($context["S_CAN_VOTE"]) ? $context["S_CAN_VOTE"] : null)) {
                    echo "\t\t\t\t\t
\t\t\t\t<span class=\"pull-";
                    // line 92
                    echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                    echo "\">
\t\t\t\t";
                    // line 93
                    if ((isset($context["S_IS_MULTI_CHOICE"]) ? $context["S_IS_MULTI_CHOICE"] : null)) {
                        echo "<input type=\"checkbox\" name=\"vote_id[]\" id=\"vote_";
                        echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_ID");
                        echo "\" value=\"";
                        echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_ID");
                        echo "\"";
                        if ($this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_VOTED")) {
                            echo " checked=\"checked\"";
                        }
                        echo " />";
                    } else {
                        echo "<input type=\"radio\" name=\"vote_id[]\" id=\"vote_";
                        echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_ID");
                        echo "\" value=\"";
                        echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_ID");
                        echo "\"";
                        if ($this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_VOTED")) {
                            echo " checked=\"checked\"";
                        }
                        echo " />";
                    }
                    // line 94
                    echo "\t\t\t\t</span>
\t\t\t\t<label for=\"vote_";
                    // line 95
                    echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_ID");
                    echo "\">&nbsp;";
                    echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_CAPTION");
                    echo "</label>
\t\t\t\t";
                } else {
                    // line 97
                    echo "\t\t\t\t";
                    echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_CAPTION");
                    echo "
\t\t\t\t";
                }
                // line 99
                echo "
\t\t\t\t<div class=\"clearfix\"></div>

\t\t\t\t";
                // line 102
                if ((isset($context["S_DISPLAY_RESULTS"]) ? $context["S_DISPLAY_RESULTS"] : null)) {
                    // line 103
                    echo "\t\t\t\t<div class=\"progress\">
\t\t\t\t";
                    // line 104
                    if (($this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_RESULT") != 0)) {
                        echo "<div class=\"progress-bar";
                        if (($this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_PCT") < 20)) {
                            echo " ";
                        } elseif (($this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_PCT") < 40)) {
                            echo " progress-bar-success";
                        } elseif (($this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_PCT") < 60)) {
                            echo " progress-bar-info";
                        } elseif (($this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_PCT") < 80)) {
                            echo " progress-bar-warning";
                        } else {
                            echo " progress-bar-danger progress-bar-striped  active";
                        }
                        echo "\" style=\"width:";
                        echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_PERCENT");
                        echo ";\">";
                        echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_RESULT");
                        echo "</div>";
                    }
                    // line 105
                    echo "\t\t\t\t</div>
\t\t\t\t";
                }
                // line 107
                echo "\t\t\t\t";
                // line 108
                echo "\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['poll_option'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 109
            echo "
\t\t\t";
            // line 110
            if ((isset($context["S_DISPLAY_RESULTS"]) ? $context["S_DISPLAY_RESULTS"] : null)) {
                // line 111
                echo "\t\t\t\t<p class=\"text-center\">";
                echo $this->env->getExtension('phpbb')->lang("TOTAL_VOTES");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo " ";
                echo (isset($context["TOTAL_VOTES"]) ? $context["TOTAL_VOTES"] : null);
                echo "</p>
\t\t\t";
            }
            // line 113
            echo "
\t\t\t</div>
\t\t</div>

\t\t";
            // line 117
            if (((isset($context["S_CAN_VOTE"]) ? $context["S_CAN_VOTE"] : null) || (!(isset($context["S_DISPLAY_RESULTS"]) ? $context["S_DISPLAY_RESULTS"] : null)))) {
                // line 118
                echo "\t\t<div class=\"panel-footer text-center\">
\t\t\t";
                // line 119
                if ((isset($context["S_CAN_VOTE"]) ? $context["S_CAN_VOTE"] : null)) {
                    // line 120
                    echo "\t\t\t<input type=\"submit\" name=\"update\" value=\"";
                    echo $this->env->getExtension('phpbb')->lang("SUBMIT_VOTE");
                    echo "\" class=\"btn btn-success\" />
\t\t\t";
                }
                // line 122
                echo "\t\t\t";
                if ((!(isset($context["S_DISPLAY_RESULTS"]) ? $context["S_DISPLAY_RESULTS"] : null))) {
                    // line 123
                    echo "\t\t\t&nbsp;<a href=\"";
                    echo (isset($context["U_VIEW_RESULTS"]) ? $context["U_VIEW_RESULTS"] : null);
                    echo "\" class=\"btn btn-info\">";
                    echo $this->env->getExtension('phpbb')->lang("VIEW_RESULTS");
                    echo "</a>
\t\t\t";
                }
                // line 125
                echo "\t\t</div>
\t\t";
            }
            // line 127
            echo "
\t\t<div class=\"vote-submitted hidden\">";
            // line 128
            echo $this->env->getExtension('phpbb')->lang("VOTE_SUBMITTED");
            echo "</div>
\t\t";
            // line 129
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t\t";
            // line 130
            echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
            echo "
\t</div>

\t</form>
";
        }
        // line 135
        echo "
";
        // line 136
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "postrow"));
        foreach ($context['_seq'] as $context["_key"] => $context["postrow"]) {
            // line 137
            echo "\t";
            // line 138
            echo "\t";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_FIRST_UNREAD")) {
                // line 139
                echo "\t\t<a id=\"unread\" class=\"anchor\"";
                if ((isset($context["S_UNREAD_VIEW"]) ? $context["S_UNREAD_VIEW"] : null)) {
                    echo " data-url=\"";
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_MINI_POST");
                    echo "\"";
                }
                echo "></a>
\t";
            }
            // line 141
            echo "\t";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_HIDDEN")) {
                // line 142
                echo "\t\t<div id=\"post_hidden";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
                echo "\" class=\"panel panel-default\">
\t\t<div class=\"panel-body\">
\t\t";
                // line 144
                if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_DELETED")) {
                    // line 145
                    echo "\t\t\t";
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "L_POST_DELETED_MESSAGE");
                    echo "<br />
\t\t\t";
                    // line 146
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "L_POST_DISPLAY");
                    echo "
\t\t";
                } elseif ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_IGNORE_POST")) {
                    // line 148
                    echo "\t\t\t";
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "L_IGNORE_POST");
                    echo "<br />
\t\t\t";
                    // line 149
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "L_POST_DISPLAY");
                    echo "
\t\t";
                }
                // line 151
                echo "\t\t</div>
\t\t</div>
\t";
            }
            // line 154
            echo "\t
\t<div id=\"p";
            // line 155
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
            echo "\" class=\"panel panel-primary";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_UNREAD_POST")) {
                echo " panel-info";
            }
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_UNAPPROVED")) {
                echo " panel-success";
            }
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_REPORTED")) {
                echo " panel-warning";
            }
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_WARNINGS")) {
                echo " panel-danger";
            }
            echo "\"";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_HIDDEN")) {
                echo " style=\"display: none;\"";
            }
            echo ">
\t\t<div id=\"post";
            // line 156
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
            echo "\" class=\"panel-heading\">
\t\t\t<h4 class=\"panel-title\">";
            // line 157
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_SUBJECT")) {
                echo "<a href=\"#p";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
                echo "\">";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_SUBJECT");
                echo "</a>";
            } else {
                echo "&nbsp;";
            }
            echo "</h4>
\t\t</div>
\t\t<div class=\"post panel-body";
            // line 159
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_HIDDEN")) {
                echo " bg1";
            }
            echo "\">

\t\t<dl class=\"postprofile col-md-3 col-sm-4 col-xs-12\" id=\"profile";
            // line 161
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
            echo "\">
\t\t\t<dt class=\"";
            // line 162
            if (($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "RANK_TITLE") || $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "RANK_IMG"))) {
                echo "has-profile-rank";
            } else {
                echo "no-profile-rank";
            }
            echo " ";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_AVATAR")) {
                echo "has-avatar";
            } else {
                echo "no-avatar";
            }
            echo "\">
\t\t\t\t";
            // line 163
            if (($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_ONLINE") && (!$this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_HIDDEN")))) {
                echo "<span class=\"online label label-success\">";
                echo $this->env->getExtension('phpbb')->lang("ONLINE");
                echo "</span>";
            }
            // line 164
            echo "\t\t\t\t<div class=\"avatar-container hidden-xs\">
\t\t\t\t\t";
            // line 165
            // line 166
            echo "\t\t\t\t\t";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_AVATAR")) {
                // line 167
                echo "\t\t\t\t\t\t";
                if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_POST_AUTHOR")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_POST_AUTHOR");
                    echo "\" class=\"avatar\">";
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_AVATAR");
                    echo "</a>";
                } else {
                    echo "<span class=\"avatar\">";
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_AVATAR");
                    echo "</span>";
                }
                // line 168
                echo "\t\t\t\t\t";
            }
            // line 169
            echo "\t\t\t\t\t";
            // line 170
            echo "\t\t\t\t</div>
\t\t\t\t";
            // line 171
            if ((!$this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_POST_AUTHOR"))) {
                echo "<strong>";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_AUTHOR_FULL");
                echo "</strong>";
            } else {
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_AUTHOR_FULL");
            }
            // line 172
            echo "\t\t\t</dt>

\t\t";
            // line 174
            if (($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "RANK_TITLE") || $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "RANK_IMG"))) {
                echo "<dd class=\"profile-rank\">";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "RANK_TITLE");
                if (($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "RANK_TITLE") && $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "RANK_IMG"))) {
                    echo "<br />";
                }
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "RANK_IMG");
                echo "</dd>";
            }
            // line 175
            echo "
\t\t";
            // line 176
            if (($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_POSTS") != "")) {
                echo "<dd class=\"profile-posts\"><strong>";
                echo $this->env->getExtension('phpbb')->lang("POSTS");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</strong> ";
                if (($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_SEARCH") !== "")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_SEARCH");
                    echo "\">";
                }
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_POSTS");
                if (($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_SEARCH") !== "")) {
                    echo "</a>";
                }
                echo "</dd>";
            }
            // line 177
            echo "\t\t";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_JOINED")) {
                echo "<dd class=\"profile-joined\"><strong>";
                echo $this->env->getExtension('phpbb')->lang("JOINED");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</strong> ";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_JOINED");
                echo "</dd>";
            }
            // line 178
            echo "\t\t";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_WARNINGS")) {
                echo "<dd class=\"profile-warnings\"><strong>";
                echo $this->env->getExtension('phpbb')->lang("WARNINGS");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</strong> ";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POSTER_WARNINGS");
                echo "</dd>";
            }
            // line 179
            echo "
\t\t";
            // line 180
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_PROFILE_FIELD1")) {
                // line 181
                echo "\t\t\t<!-- Use a construct like this to include admin defined profile fields. Replace FIELD1 with the name of your field. -->
\t\t\t<dd><strong>";
                // line 182
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "PROFILE_FIELD1_NAME");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</strong> ";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "PROFILE_FIELD1_VALUE");
                echo "</dd>
\t\t";
            }
            // line 184
            echo "
\t\t";
            // line 185
            // line 186
            echo "\t\t";
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "custom_fields"));
            foreach ($context['_seq'] as $context["_key"] => $context["custom_fields"]) {
                // line 187
                echo "\t\t\t";
                if ((!$this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "S_PROFILE_CONTACT"))) {
                    // line 188
                    echo "\t\t\t\t<dd class=\"profile-custom-field profile-";
                    echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_IDENT");
                    echo "\"><strong class=\"status btn ";
                    echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_NAME");
                    echo "\">";
                    echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_NAME");
                    echo "</strong></dd>
\t\t\t";
                }
                // line 190
                echo "\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_fields'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 191
            echo "\t\t";
            // line 192
            echo "
\t\t";
            // line 193
            // line 194
            echo "\t\t";
            if (((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) && twig_length_filter($this->env, $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "contact")))) {
                // line 195
                echo "\t\t\t<dd>&nbsp;</dd>
\t\t\t<dd>
\t\t\t<div class=\"btn-group dropup\">
\t\t\t\t<button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">";
                // line 198
                echo $this->env->getExtension('phpbb')->lang("CONTACT");
                echo " <span class=\"caret\"></span></button>
\t\t\t\t<ul class=\"dropdown-menu dropdown-contents\">
\t\t\t\t";
                // line 200
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "contact"));
                foreach ($context['_seq'] as $context["_key"] => $context["contact"]) {
                    // line 201
                    echo "\t\t\t\t\t";
                    if ($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "U_CONTACT")) {
                        // line 202
                        echo "\t\t\t\t\t<li>
\t\t\t\t\t\t<a href=\"";
                        // line 203
                        echo $this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "U_CONTACT");
                        echo "\" title=\"";
                        echo $this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "NAME");
                        echo "\"";
                        if (($this->getAttribute((isset($context["contact"]) ? $context["contact"] : null), "ID") == "jabber")) {
                            echo " onclick=\"popup(this.href, 750, 320); return false;\"";
                        }
                        echo ">
\t\t\t\t\t\t\t<span class=\"";
                        // line 204
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
\t\t\t\t\t\t</a>
\t\t\t\t\t</li>
\t\t\t\t\t";
                    }
                    // line 208
                    echo "\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['contact'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 209
                echo "\t\t\t\t</ul>
\t\t\t</div>
\t\t\t</dd>
\t\t";
            }
            // line 213
            echo "\t\t";
            // line 214
            echo "\t\t</dl>

\t\t<div class=\"postbody col-md-9 col-sm-8 col-xs-12\">

\t\t\t<div class=\"panel-group post-buttons clearfix\">
\t\t\t";
            // line 219
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ICON_IMG")) {
                echo "<img src=\"";
                echo (isset($context["T_ICONS_PATH"]) ? $context["T_ICONS_PATH"] : null);
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ICON_IMG");
                echo "\" width=\"";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ICON_IMG_WIDTH");
                echo "\" height=\"";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ICON_IMG_HEIGHT");
                echo "\" alt=\"\" />&nbsp; ";
            }
            // line 220
            echo "\t\t\t";
            if ((isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) {
                echo "<i class=\"fa fa-file-o\"></i>";
            } else {
                echo "<a href=\"";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_MINI_POST");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("POST");
                echo "\"><i class=\"fa";
                if ((isset($context["U_VIEW_UNREAD_POST"]) ? $context["U_VIEW_UNREAD_POST"] : null)) {
                    echo " fa-file";
                } else {
                    echo " fa-file-o";
                }
                echo "\"></i></a> ";
            }
            echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
            echo " <strong>";
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_AUTHOR_FULL");
            echo "</strong> &raquo; ";
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_DATE");
            echo "

\t\t";
            // line 222
            if ((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null))) {
                // line 223
                echo "\t\t\t";
                if (((((($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_EDIT") || $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_DELETE")) || $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_REPORT")) || $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_WARN")) || $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_INFO")) || $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_QUOTE"))) {
                    // line 224
                    echo "\t\t\t<div class=\"btn-toolbar pull-";
                    echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                    echo "\">
\t\t\t\t<div class=\"btn-group\">
\t\t\t\t";
                    // line 226
                    // line 227
                    echo "
\t\t\t\t";
                    // line 228
                    if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_EDIT")) {
                        // line 229
                        echo "\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_EDIT");
                        echo "\" class=\"btn btn-primary\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("EDIT_POST");
                        echo "\"><i class=\"fa fa-edit fa-fw\"></i><span>";
                        echo $this->env->getExtension('phpbb')->lang("EDIT_POST");
                        echo "</span></a>
\t\t\t\t";
                    }
                    // line 231
                    echo "\t\t\t\t";
                    if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_DELETE")) {
                        // line 232
                        echo "\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_DELETE");
                        echo "\" class=\"btn btn-danger\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("DELETE_POST");
                        echo "\"><i class=\"fa fa-trash-o fa-fw\"></i><span>";
                        echo $this->env->getExtension('phpbb')->lang("DELETE_POST");
                        echo "</span></a>
\t\t\t\t";
                    }
                    // line 234
                    echo "\t\t\t\t";
                    if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_INFO")) {
                        // line 235
                        echo "\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_INFO");
                        echo "\" class=\"btn btn-info\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("INFORMATION");
                        echo "\"><i class=\"fa fa-info fa-fw\"></i><span>";
                        echo $this->env->getExtension('phpbb')->lang("INFORMATION");
                        echo "</span></a>
\t\t\t\t";
                    }
                    // line 237
                    echo "\t\t\t\t";
                    if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_REPORT")) {
                        // line 238
                        echo "\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_REPORT");
                        echo "\" class=\"btn btn-warning\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("REPORT_POST");
                        echo "\"><i class=\"fa fa-exclamation fa-fw\"></i><span>";
                        echo $this->env->getExtension('phpbb')->lang("REPORT_POST");
                        echo "</span></a>
\t\t\t\t";
                    }
                    // line 240
                    echo "\t\t\t\t";
                    if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_WARN")) {
                        // line 241
                        echo "\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_WARN");
                        echo "\" class=\"btn btn-danger\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("WARN_USER");
                        echo "\"><i class=\"fa fa-warning fa-fw\"></i><span>";
                        echo $this->env->getExtension('phpbb')->lang("WARN_USER");
                        echo "</span></a>
\t\t\t\t";
                    }
                    // line 243
                    echo "\t\t\t\t";
                    if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_QUOTE")) {
                        // line 244
                        echo "\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_QUOTE");
                        echo "\" class=\"btn btn-success\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("REPLY_WITH_QUOTE");
                        echo "\"><i class=\"fa fa-quote-";
                        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                        echo " fa-fw\"></i><span>";
                        echo $this->env->getExtension('phpbb')->lang("REPLY_WITH_QUOTE");
                        echo "</span></a>
\t\t\t\t";
                    }
                    // line 246
                    echo "
\t\t\t\t";
                    // line 247
                    // line 248
                    echo "\t\t\t\t</div>
\t\t\t</div>
\t\t\t";
                }
                // line 251
                echo "\t\t";
            }
            // line 252
            echo "\t\t\t</div>

\t\t\t<div id=\"post_content";
            // line 254
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
            echo "\">

\t\t\t";
            // line 256
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_UNAPPROVED")) {
                // line 257
                echo "\t\t\t<form method=\"post\" class=\"mcp_approve\" action=\"";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_APPROVE_ACTION");
                echo "\">
\t\t\t\t<div class=\"alert alert-warning\">
\t\t\t\t\t<strong>";
                // line 259
                echo $this->env->getExtension('phpbb')->lang("POST_UNAPPROVED_ACTION");
                echo "</strong>
\t\t\t\t\t<input class=\"btn btn-danger\" type=\"submit\" value=\"";
                // line 260
                echo $this->env->getExtension('phpbb')->lang("DISAPPROVE");
                echo "\" name=\"action[disapprove]\" />
\t\t\t\t\t<input class=\"btn btn-success\" type=\"submit\" value=\"";
                // line 261
                echo $this->env->getExtension('phpbb')->lang("APPROVE");
                echo "\" name=\"action[approve]\" />
\t\t\t\t\t<input type=\"hidden\" name=\"post_id_list[]\" value=\"";
                // line 262
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
                echo "\" />
\t\t\t\t\t";
                // line 263
                echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
                echo "
\t\t\t\t</div>
\t\t\t</form>
\t\t\t";
            } elseif ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_DELETED")) {
                // line 267
                echo "\t\t\t<form method=\"post\" class=\"mcp_approve\" action=\"";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_APPROVE_ACTION");
                echo "\">
\t\t\t\t<div class=\"alert alert-warning\">
\t\t\t\t\t<strong>";
                // line 269
                echo $this->env->getExtension('phpbb')->lang("POST_DELETED_ACTION");
                echo "</strong>
\t\t\t\t\t<input class=\"btn btn-danger\" type=\"submit\" value=\"";
                // line 270
                echo $this->env->getExtension('phpbb')->lang("DELETE");
                echo "\" name=\"action[disapprove]\" />
\t\t\t\t\t<input class=\"btn btn-success\" type=\"submit\" value=\"";
                // line 271
                echo $this->env->getExtension('phpbb')->lang("RESTORE");
                echo "\" name=\"action[restore]\" />
\t\t\t\t\t<input type=\"hidden\" name=\"post_id_list[]\" value=\"";
                // line 272
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
                echo "\" />
\t\t\t\t\t";
                // line 273
                echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
                echo "
\t\t\t\t</div>
\t\t\t</form>
\t\t\t";
            }
            // line 277
            echo "
\t\t\t";
            // line 278
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_REPORTED")) {
                // line 279
                echo "\t\t\t<div class=\"alert alert-warning\">
\t\t\t\t<a href=\"";
                // line 280
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_MCP_REPORT");
                echo "\"><strong>";
                echo $this->env->getExtension('phpbb')->lang("POST_REPORTED");
                echo "</strong></a>
\t\t\t</div>
\t\t\t";
            }
            // line 283
            echo "
\t\t\t<div class=\"content\">";
            // line 284
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "MESSAGE");
            echo "</div>

\t\t\t";
            // line 286
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_HAS_ATTACHMENTS")) {
                // line 287
                echo "\t\t\t\t<div class=\"attachbox pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\">
\t\t\t\t\t<p>";
                // line 288
                echo $this->env->getExtension('phpbb')->lang("ATTACHMENTS");
                echo "</p>
\t\t\t\t\t";
                // line 289
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "attachment"));
                foreach ($context['_seq'] as $context["_key"] => $context["attachment"]) {
                    // line 290
                    echo "\t\t\t\t\t<div class=\"panel panel-default\">";
                    echo $this->getAttribute((isset($context["attachment"]) ? $context["attachment"] : null), "DISPLAY_ATTACHMENT");
                    echo "</div>
\t\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attachment'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 292
                echo "\t\t\t\t</div>
\t\t\t\t<div class=\"clearfix\"></div>
\t\t\t";
            }
            // line 295
            echo "
\t\t\t";
            // line 296
            // line 297
            echo "\t\t\t";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_DISPLAY_NOTICE")) {
                echo "<div class=\"rules\">";
                echo $this->env->getExtension('phpbb')->lang("DOWNLOAD_NOTICE");
                echo "</div>";
            }
            // line 298
            echo "\t\t\t";
            if (($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "DELETED_MESSAGE") || $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "DELETE_REASON"))) {
                // line 299
                echo "\t\t\t\t<div class=\"alert alert-danger\">
\t\t\t\t\t";
                // line 300
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "DELETED_MESSAGE");
                echo "
\t\t\t\t\t";
                // line 301
                if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "DELETE_REASON")) {
                    echo "<br /><strong>";
                    echo $this->env->getExtension('phpbb')->lang("REASON");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</strong> <em>";
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "DELETE_REASON");
                    echo "</em>";
                }
                // line 302
                echo "\t\t\t\t</div>
\t\t\t";
            } elseif (($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "EDITED_MESSAGE") || $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "EDIT_REASON"))) {
                // line 304
                echo "\t\t\t\t<div class=\"alert alert-info\">
\t\t\t\t\t";
                // line 305
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "EDITED_MESSAGE");
                echo "
\t\t\t\t\t";
                // line 306
                if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "EDIT_REASON")) {
                    echo "<br /><strong>";
                    echo $this->env->getExtension('phpbb')->lang("REASON");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</strong> <em>";
                    echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "EDIT_REASON");
                    echo "</em>";
                }
                // line 307
                echo "\t\t\t\t</div>
\t\t\t";
            }
            // line 309
            echo "
\t\t\t";
            // line 310
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "BUMPED_MESSAGE")) {
                echo "<div class=\"alert alert-info\">";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "BUMPED_MESSAGE");
                echo "</div>";
            }
            // line 311
            echo "\t\t\t";
            // line 312
            echo "\t\t\t";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "SIGNATURE")) {
                echo "<div id=\"sig";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
                echo "\" class=\"panel-footer\">";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "SIGNATURE");
                echo "</div>";
            }
            // line 313
            echo "
\t\t\t";
            // line 314
            // line 315
            echo "\t\t\t</div>

\t\t</div>

\t\t</div>

\t\t<div class=\"panel-footer text-";
            // line 321
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\"><a href=\"#wrap\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("BACK_TO_TOP");
            echo "\"><i class=\"fa fa-chevron-up\"></i></a></div>
\t</div>

\t";
            // line 324
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['postrow'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 326
        echo "
";
        // line 327
        if ((isset($context["S_QUICK_REPLY"]) ? $context["S_QUICK_REPLY"] : null)) {
            // line 328
            echo "\t";
            $location = "quickreply_editor.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("quickreply_editor.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 330
        echo "
";
        // line 331
        if ((((isset($context["S_NUM_POSTS"]) ? $context["S_NUM_POSTS"] : null) > 1) || twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination")))) {
            // line 332
            echo "<form id=\"viewtopic\" method=\"post\" action=\"";
            echo (isset($context["S_TOPIC_ACTION"]) ? $context["S_TOPIC_ACTION"] : null);
            echo "\">
\t<fieldset class=\"panel-group text-center\">
\t\t";
            // line 334
            if ((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null))) {
                // line 335
                echo "\t\t<label>";
                echo $this->env->getExtension('phpbb')->lang("DISPLAY_POSTS");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label> ";
                echo (isset($context["S_SELECT_SORT_DAYS"]) ? $context["S_SELECT_SORT_DAYS"] : null);
                echo "
\t\t<label>";
                // line 336
                echo $this->env->getExtension('phpbb')->lang("SORT_BY");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label> ";
                echo (isset($context["S_SELECT_SORT_KEY"]) ? $context["S_SELECT_SORT_KEY"] : null);
                echo " ";
                echo (isset($context["S_SELECT_SORT_DIR"]) ? $context["S_SELECT_SORT_DIR"] : null);
                echo "
\t\t<input type=\"submit\" name=\"sort\" value=\"";
                // line 337
                echo $this->env->getExtension('phpbb')->lang("GO");
                echo "\" class=\"btn btn-default\" />
\t\t";
            }
            // line 339
            echo "\t</fieldset>
</form>
";
        }
        // line 342
        echo "
";
        // line 343
        // line 344
        echo "
<div class=\"well well-sm text-center clearfix\">
\t";
        // line 346
        // line 347
        echo "
\t";
        // line 348
        if (((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) && (isset($context["S_DISPLAY_REPLY_INFO"]) ? $context["S_DISPLAY_REPLY_INFO"] : null))) {
            // line 349
            echo "\t\t<div class=\"big-btn pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                echo " locked-icon";
            } else {
                echo " reply-icon";
            }
            echo "\"><a href=\"";
            echo (isset($context["U_POST_REPLY_TOPIC"]) ? $context["U_POST_REPLY_TOPIC"] : null);
            echo "\" class=\"btn";
            if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                echo " btn-warning";
            } else {
                echo " btn-primary";
            }
            echo "\" title=\"";
            if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("TOPIC_LOCKED");
            } else {
                echo $this->env->getExtension('phpbb')->lang("POST_REPLY");
            }
            echo "\"><i class=\"fa";
            if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                echo " fa-lock";
            } else {
                echo " fa-reply";
            }
            echo "\"></i>";
            if ((isset($context["S_IS_LOCKED"]) ? $context["S_IS_LOCKED"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("TOPIC_LOCKED_SHORT");
            } else {
                echo $this->env->getExtension('phpbb')->lang("POST_REPLY");
            }
            echo "</a> &nbsp;</div>
\t";
        }
        // line 351
        echo "
\t";
        // line 352
        // line 353
        echo "
\t";
        // line 354
        $location = "viewtopic_topic_tools.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("viewtopic_topic_tools.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 355
        echo "
\t";
        // line 356
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "quickmod"))) {
            // line 357
            echo "\t\t<div id=\"quickmod\" class=\"btn-group dropup pull-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("QUICK_MOD");
            echo "\">
\t\t\t<button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">";
            // line 358
            echo $this->env->getExtension('phpbb')->lang("QUICK_MOD");
            echo " <span class=\"caret\"></span></button>
\t\t\t<ul class=\"dropdown-menu dropdown-contents\">
\t\t\t";
            // line 360
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "quickmod"));
            foreach ($context['_seq'] as $context["_key"] => $context["quickmod"]) {
                // line 361
                echo "\t\t\t\t";
                $value = twig_in_filter($this->getAttribute((isset($context["quickmod"]) ? $context["quickmod"] : null), "VALUE"), array(0 => "lock", 1 => "unlock", 2 => "delete_topic", 3 => "restore_topic", 4 => "make_normal", 5 => "make_sticky", 6 => "make_announce", 7 => "make_global"));
                $context['definition']->set('QUICKMOD_AJAX', $value);
                // line 362
                echo "\t\t\t\t<li><a href=\"";
                echo $this->getAttribute((isset($context["quickmod"]) ? $context["quickmod"] : null), "LINK");
                echo "\"";
                if ($this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "QUICKMOD_AJAX")) {
                    echo " data-ajax=\"true\" data-refresh=\"true\"";
                }
                echo ">";
                echo $this->getAttribute((isset($context["quickmod"]) ? $context["quickmod"] : null), "TITLE");
                echo "</a></li>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['quickmod'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 364
            echo "\t\t\t</ul>
\t\t</div>
\t";
        }
        // line 367
        echo "</div>

";
        // line 369
        if ((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination")) || (isset($context["TOTAL_POSTS"]) ? $context["TOTAL_POSTS"] : null))) {
            // line 370
            echo "<div class=\"pages clearfix\">
\t";
            // line 371
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                // line 372
                echo "\t\t";
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
                // line 373
                echo "\t";
            }
            // line 374
            echo "\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t<span class=\"btn btn-default disabled\">";
            // line 375
            echo (isset($context["TOTAL_POSTS"]) ? $context["TOTAL_POSTS"] : null);
            echo "</span>
\t\t<span class=\"btn btn-default disabled\">";
            // line 376
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t";
            // line 377
            if (((isset($context["U_VIEW_UNREAD_POST"]) ? $context["U_VIEW_UNREAD_POST"] : null) && (!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)))) {
                // line 378
                echo "\t\t<a href=\"";
                echo (isset($context["U_VIEW_UNREAD_POST"]) ? $context["U_VIEW_UNREAD_POST"] : null);
                echo "\" class=\"btn btn-default\">";
                echo $this->env->getExtension('phpbb')->lang("VIEW_UNREAD_POST");
                echo "</a>
\t";
            }
            // line 380
            echo "\t</div>
</div>
";
        }
        // line 383
        echo "
";
        // line 384
        // line 385
        echo "<style>.kuchnia { display: none; }</style><a href=\"http://www.youtube.com/watch?v=VP9o-j23DH0\" class=\"kuchnia\">kuchnie kraków</a>
<br>
";
        // line 387
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
        // line 388
        echo "
";
        // line 389
        if ((isset($context["S_DISPLAY_ONLINE_LIST"]) ? $context["S_DISPLAY_ONLINE_LIST"] : null)) {
            // line 390
            echo "<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
            // line 392
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
\t\t";
            // line 395
            echo (isset($context["LOGGED_IN_USER_LIST"]) ? $context["LOGGED_IN_USER_LIST"] : null);
            echo "
\t</div>
</div>
";
        }
        // line 399
        echo "
";
        // line 400
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
        return "viewtopic_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  1491 => 400,  1488 => 399,  1481 => 395,  1467 => 392,  1463 => 390,  1461 => 389,  1458 => 388,  1446 => 387,  1442 => 385,  1441 => 384,  1438 => 383,  1433 => 380,  1425 => 378,  1423 => 377,  1419 => 376,  1415 => 375,  1410 => 374,  1407 => 373,  1394 => 372,  1392 => 371,  1389 => 370,  1387 => 369,  1383 => 367,  1378 => 364,  1363 => 362,  1359 => 361,  1355 => 360,  1350 => 358,  1343 => 357,  1341 => 356,  1338 => 355,  1326 => 354,  1323 => 353,  1322 => 352,  1319 => 351,  1282 => 349,  1280 => 348,  1277 => 347,  1276 => 346,  1272 => 344,  1271 => 343,  1268 => 342,  1263 => 339,  1258 => 337,  1249 => 336,  1241 => 335,  1239 => 334,  1233 => 332,  1231 => 331,  1228 => 330,  1214 => 328,  1212 => 327,  1209 => 326,  1204 => 324,  1196 => 321,  1188 => 315,  1187 => 314,  1184 => 313,  1175 => 312,  1173 => 311,  1167 => 310,  1164 => 309,  1160 => 307,  1151 => 306,  1147 => 305,  1144 => 304,  1140 => 302,  1131 => 301,  1127 => 300,  1124 => 299,  1121 => 298,  1114 => 297,  1113 => 296,  1110 => 295,  1105 => 292,  1096 => 290,  1092 => 289,  1088 => 288,  1083 => 287,  1081 => 286,  1076 => 284,  1073 => 283,  1065 => 280,  1062 => 279,  1060 => 278,  1057 => 277,  1050 => 273,  1046 => 272,  1042 => 271,  1038 => 270,  1034 => 269,  1028 => 267,  1021 => 263,  1017 => 262,  1013 => 261,  1009 => 260,  1005 => 259,  999 => 257,  997 => 256,  992 => 254,  988 => 252,  985 => 251,  980 => 248,  979 => 247,  976 => 246,  964 => 244,  961 => 243,  951 => 241,  948 => 240,  938 => 238,  935 => 237,  925 => 235,  922 => 234,  912 => 232,  909 => 231,  899 => 229,  897 => 228,  894 => 227,  893 => 226,  887 => 224,  884 => 223,  882 => 222,  857 => 220,  846 => 219,  839 => 214,  837 => 213,  831 => 209,  825 => 208,  792 => 204,  782 => 203,  779 => 202,  776 => 201,  772 => 200,  767 => 198,  762 => 195,  759 => 194,  758 => 193,  755 => 192,  753 => 191,  747 => 190,  737 => 188,  734 => 187,  729 => 186,  728 => 185,  725 => 184,  717 => 182,  714 => 181,  712 => 180,  709 => 179,  699 => 178,  689 => 177,  672 => 176,  669 => 175,  659 => 174,  655 => 172,  647 => 171,  644 => 170,  642 => 169,  639 => 168,  626 => 167,  623 => 166,  622 => 165,  619 => 164,  613 => 163,  599 => 162,  595 => 161,  588 => 159,  575 => 157,  571 => 156,  550 => 155,  547 => 154,  542 => 151,  537 => 149,  532 => 148,  527 => 146,  522 => 145,  520 => 144,  514 => 142,  511 => 141,  501 => 139,  498 => 138,  496 => 137,  492 => 136,  489 => 135,  481 => 130,  477 => 129,  473 => 128,  470 => 127,  466 => 125,  458 => 123,  455 => 122,  449 => 120,  447 => 119,  444 => 118,  442 => 117,  436 => 113,  427 => 111,  425 => 110,  422 => 109,  416 => 108,  414 => 107,  410 => 105,  390 => 104,  387 => 103,  385 => 102,  380 => 99,  374 => 97,  367 => 95,  364 => 94,  342 => 93,  338 => 92,  334 => 91,  331 => 90,  327 => 88,  320 => 87,  314 => 86,  309 => 85,  306 => 84,  304 => 83,  300 => 82,  286 => 79,  280 => 76,  272 => 72,  270 => 71,  265 => 68,  258 => 64,  250 => 61,  246 => 60,  241 => 58,  236 => 56,  231 => 55,  229 => 54,  226 => 53,  214 => 52,  211 => 51,  210 => 50,  207 => 49,  170 => 47,  168 => 46,  165 => 45,  164 => 44,  159 => 41,  154 => 38,  146 => 36,  144 => 35,  140 => 34,  136 => 33,  131 => 32,  128 => 31,  115 => 30,  113 => 29,  110 => 28,  108 => 27,  105 => 26,  101 => 24,  96 => 22,  91 => 21,  83 => 19,  81 => 18,  78 => 17,  76 => 16,  73 => 15,  60 => 12,  57 => 11,  55 => 10,  52 => 9,  46 => 7,  44 => 6,  34 => 3,  31 => 2,  19 => 1,);
    }
}
