<?php

/* mcp_forum.html */
class __TwigTemplate_08ecda265287e21d7339284d0bfdb550 extends Twig_Template
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
        // line 4
        echo "
<h3><a href=\"";
        // line 5
        echo (isset($context["U_VIEW_FORUM"]) ? $context["U_VIEW_FORUM"] : null);
        echo "\">";
        echo $this->env->getExtension('phpbb')->lang("FORUM");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo " ";
        echo (isset($context["FORUM_NAME"]) ? $context["FORUM_NAME"] : null);
        echo "</a></h3>

<form method=\"post\" id=\"mcp\" action=\"";
        // line 7
        echo (isset($context["S_MCP_ACTION"]) ? $context["S_MCP_ACTION"] : null);
        echo "\">

\t<div class=\"pages clearfix\">
\t\t";
        // line 10
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
            // line 11
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
            // line 12
            echo "\t\t";
        }
        // line 13
        echo "\t\t<div class=\"btn-group pull-";
        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
        echo "\">
\t\t\t<span class=\"btn btn-default disabled\">";
        // line 14
        echo (isset($context["TOTAL_TOPICS"]) ? $context["TOTAL_TOPICS"] : null);
        echo "</span>
\t\t\t<span class=\"btn btn-default disabled\">";
        // line 15
        echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
        echo "</span>
\t\t</div>
\t</div>

\t";
        // line 19
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow"))) {
            // line 20
            echo "\t\t<div class=\"panel panel-default\">
\t\t\t<div class=\"clearfix\">
\t\t\t\t<h4 class=\"";
            // line 22
            if ((isset($context["S_MERGE_SELECT"]) ? $context["S_MERGE_SELECT"] : null)) {
                echo "col-md-8 col-sm-6";
            } else {
                echo "col-md-7 col-sm-5";
            }
            echo " col-xs-10\">";
            echo $this->env->getExtension('phpbb')->lang("TOPICS");
            echo "</h4>
\t\t\t\t<h5 class=\"col-md-1 col-sm-2 text-center hidden-xs\">";
            // line 23
            echo $this->env->getExtension('phpbb')->lang("REPLIES");
            echo "</h5>
\t\t\t\t<h5 class=\"col-md-3 col-sm-4 hidden-xs\">";
            // line 24
            echo $this->env->getExtension('phpbb')->lang("LAST_POST");
            echo "</h5>
\t\t\t\t";
            // line 25
            if ((!(isset($context["S_MERGE_SELECT"]) ? $context["S_MERGE_SELECT"] : null))) {
                // line 26
                echo "\t\t\t\t<h5 class=\"col-md-1 col-sm-1 col-xs-2 text-center\">";
                echo $this->env->getExtension('phpbb')->lang("MARK");
                echo "</h5>
\t\t\t\t";
            }
            // line 28
            echo "\t\t\t</div>

\t\t";
            // line 30
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow"));
            foreach ($context['_seq'] as $context["_key"] => $context["topicrow"]) {
                // line 31
                echo "\t\t<div class=\"clearfix icon ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_IMG_STYLE");
                if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_ROW_COUNT") % 2 == 1)) {
                    echo " bg1";
                } else {
                    echo " bg2";
                }
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_REPORTED")) {
                    echo " bg-danger";
                }
                echo "\">
\t\t\t<div class=\"folder";
                // line 32
                if ((isset($context["S_MERGE_SELECT"]) ? $context["S_MERGE_SELECT"] : null)) {
                    echo " col-md-8 col-sm-6";
                } else {
                    echo " col-md-7 col-sm-5";
                }
                echo " col-xs-10\"";
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ICON_IMG")) {
                    echo " style=\"background-image: url(";
                    echo (isset($context["T_ICONS_PATH"]) ? $context["T_ICONS_PATH"] : null);
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ICON_IMG");
                    echo ");\"";
                }
                echo ">
\t\t\t\t";
                // line 33
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_UNREAD_TOPIC")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_NEWEST_POST");
                    echo "\" class=\"icon-link\"></a>";
                }
                // line 34
                echo "\t\t\t\t";
                if (twig_length_filter($this->env, $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "pagination"))) {
                    // line 35
                    echo "\t\t\t\t<ul class=\"pagination pagination-sm pull-";
                    echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                    echo "\">
\t\t\t\t";
                    // line 36
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "pagination"));
                    foreach ($context['_seq'] as $context["_key"] => $context["pagination"]) {
                        // line 37
                        echo "\t\t\t\t\t";
                        if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_PREV")) {
                            // line 38
                            echo "\t\t\t\t\t";
                        } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_CURRENT")) {
                            echo "<li class=\"active\"><span>";
                            echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                            echo "</span></li>
\t\t\t\t\t";
                        } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_ELLIPSIS")) {
                            // line 39
                            echo "<li class=\"ellipsis disabled\"><span>";
                            echo $this->env->getExtension('phpbb')->lang("ELLIPSIS");
                            echo "</span></li>
\t\t\t\t\t";
                        } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_NEXT")) {
                            // line 41
                            echo "\t\t\t\t\t";
                        } else {
                            echo "<li><a href=\"";
                            echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                            echo "\">";
                            echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                            echo "</a></li>
\t\t\t\t\t";
                        }
                        // line 43
                        echo "\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['pagination'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 44
                    echo "\t\t\t\t</ul>
\t\t\t\t";
                }
                // line 46
                echo "
\t\t\t\t";
                // line 47
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_SELECT_TOPIC")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_SELECT_TOPIC");
                    echo "\" class=\"label label-info\">";
                    echo $this->env->getExtension('phpbb')->lang("SELECT_MERGE");
                    echo "</a>&nbsp;&nbsp; ";
                }
                // line 48
                echo "\t\t\t\t<a href=\"";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_VIEW_TOPIC");
                echo "\" class=\"topictitle\">";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_TITLE");
                echo "</a>
\t\t\t\t";
                // line 49
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
                // line 50
                echo "\t\t\t\t";
                if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_DELETED") || $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POSTS_DELETED"))) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_MCP_QUEUE");
                    echo "\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("TOPIC_DELETED");
                    echo "\"><i class=\"fa fa-recycle\"></i></a> ";
                }
                // line 51
                echo "\t\t\t\t";
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_REPORTED")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_MCP_REPORT");
                    echo "\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("TOPIC_REPORTED");
                    echo "\"><i class=\"fa fa-exclamation-triangle\"></i></a>";
                }
                // line 52
                echo "\t\t\t\t";
                if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_MOVED_TOPIC") && (isset($context["S_CAN_DELETE"]) ? $context["S_CAN_DELETE"] : null))) {
                    echo "&nbsp;<a href=\"";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_DELETE_TOPIC");
                    echo "\" class=\"topictitle\">[ ";
                    echo $this->env->getExtension('phpbb')->lang("DELETE_SHADOW_TOPIC");
                    echo " ]</a>";
                }
                // line 53
                echo "\t\t\t\t<br />

\t\t\t\t<div class=\"visible-xs\">
\t\t\t\t\t";
                // line 56
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "ATTACH_ICON_IMG")) {
                    echo "<span class=\"tip\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("TOTAL_ATTACHMENTS");
                    echo "\"><i class=\"fa fa-paperclip\"></i></span> ";
                }
                // line 57
                echo "\t\t\t\t\t";
                echo $this->env->getExtension('phpbb')->lang("LAST_POST");
                echo " ";
                echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                echo " ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_AUTHOR_FULL");
                echo " &laquo; ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_TIME");
                echo "<br />
\t\t\t\t\t";
                // line 58
                echo $this->env->getExtension('phpbb')->lang("REPLIES");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo " <strong>";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "REPLIES");
                echo "</strong>
\t\t\t\t</div>

\t\t\t\t<div class=\"hidden-xs\">
\t\t\t\t\t";
                // line 62
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "ATTACH_ICON_IMG")) {
                    echo "<span class=\"tip\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("TOTAL_ATTACHMENTS");
                    echo "\"><i class=\"fa fa-paperclip\"></i></span> ";
                }
                // line 63
                echo "\t\t\t\t\t";
                echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                echo " ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_AUTHOR_FULL");
                echo " &raquo; ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "FIRST_POST_TIME");
                echo "
\t\t\t\t</div>

\t\t\t</div>

\t\t\t<div class=\"col-md-1 col-sm-2 text-center hidden-xs\">";
                // line 68
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "REPLIES");
                echo "</div>
\t\t\t<div class=\"col-md-3 col-sm-4 hidden-xs\">";
                // line 69
                echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                echo " ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_AUTHOR_FULL");
                echo "<br />";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_TIME");
                echo "</div>
\t\t\t";
                // line 70
                if ((!(isset($context["S_MERGE_SELECT"]) ? $context["S_MERGE_SELECT"] : null))) {
                    // line 71
                    echo "\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-2 text-center\">
\t\t\t\t";
                    // line 72
                    if ((!$this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_MOVED_TOPIC"))) {
                        echo "<input type=\"checkbox\" name=\"topic_id_list[]\" value=\"";
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ID");
                        echo "\"";
                        if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_CHECKED")) {
                            echo " checked=\"checked\"";
                        }
                        echo " />";
                    } else {
                        echo "&nbsp;";
                    }
                    // line 73
                    echo "\t\t\t</div>
\t\t\t";
                }
                // line 75
                echo "\t\t</div>
\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['topicrow'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 77
            echo "\t\t</div>
\t";
        } else {
            // line 79
            echo "\t\t<div class=\"alert alert-info\">
\t\t\t";
            // line 80
            echo $this->env->getExtension('phpbb')->lang("NO_TOPICS");
            echo "
\t\t</div>
\t";
        }
        // line 83
        echo "
\t<fieldset class=\"panel-group text-center\">
\t\t<label>";
        // line 85
        echo $this->env->getExtension('phpbb')->lang("DISPLAY_TOPICS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label> ";
        echo (isset($context["S_SELECT_SORT_DAYS"]) ? $context["S_SELECT_SORT_DAYS"] : null);
        echo "
\t\t<label>";
        // line 86
        echo $this->env->getExtension('phpbb')->lang("SORT_BY");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label> ";
        echo (isset($context["S_SELECT_SORT_KEY"]) ? $context["S_SELECT_SORT_KEY"] : null);
        echo " ";
        echo (isset($context["S_SELECT_SORT_DIR"]) ? $context["S_SELECT_SORT_DIR"] : null);
        echo "
\t\t<input type=\"submit\" name=\"sort\" value=\"";
        // line 87
        echo $this->env->getExtension('phpbb')->lang("GO");
        echo "\" class=\"btn btn-default\" />
\t</fieldset>

\t<fieldset class=\"panel-group\">
\t\t";
        // line 91
        if ((!(isset($context["S_MERGE_SELECT"]) ? $context["S_MERGE_SELECT"] : null))) {
            // line 92
            echo "\t\t<div class=\"form-inline pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t<select name=\"action\" class=\"form-control\">
\t\t\t\t<option value=\"\" selected=\"selected\">";
            // line 94
            echo $this->env->getExtension('phpbb')->lang("SELECT_ACTION");
            echo "</option>
\t\t\t\t";
            // line 95
            if ((isset($context["S_CAN_DELETE"]) ? $context["S_CAN_DELETE"] : null)) {
                echo "<option value=\"delete_topic\">";
                echo $this->env->getExtension('phpbb')->lang("DELETE");
                echo "</option>";
            }
            // line 96
            echo "\t\t\t\t";
            if ((isset($context["S_CAN_RESTORE"]) ? $context["S_CAN_RESTORE"] : null)) {
                echo "<option value=\"restore_topic\">";
                echo $this->env->getExtension('phpbb')->lang("RESTORE");
                echo "</option>";
            }
            // line 97
            echo "\t\t\t\t";
            if ((isset($context["S_CAN_MERGE"]) ? $context["S_CAN_MERGE"] : null)) {
                echo "<option value=\"merge_topics\">";
                echo $this->env->getExtension('phpbb')->lang("MERGE");
                echo "</option>";
            }
            // line 98
            echo "\t\t\t\t";
            if ((isset($context["S_CAN_MOVE"]) ? $context["S_CAN_MOVE"] : null)) {
                echo "<option value=\"move\">";
                echo $this->env->getExtension('phpbb')->lang("MOVE");
                echo "</option>";
            }
            // line 99
            echo "\t\t\t\t";
            if ((isset($context["S_CAN_FORK"]) ? $context["S_CAN_FORK"] : null)) {
                echo "<option value=\"fork\">";
                echo $this->env->getExtension('phpbb')->lang("FORK");
                echo "</option>";
            }
            // line 100
            echo "\t\t\t\t";
            if ((isset($context["S_CAN_LOCK"]) ? $context["S_CAN_LOCK"] : null)) {
                echo "<option value=\"lock\">";
                echo $this->env->getExtension('phpbb')->lang("LOCK");
                echo "</option><option value=\"unlock\">";
                echo $this->env->getExtension('phpbb')->lang("UNLOCK");
                echo "</option>";
            }
            // line 101
            echo "\t\t\t\t";
            if ((isset($context["S_CAN_SYNC"]) ? $context["S_CAN_SYNC"] : null)) {
                echo "<option value=\"resync\">";
                echo $this->env->getExtension('phpbb')->lang("RESYNC");
                echo "</option>";
            }
            // line 102
            echo "\t\t\t\t";
            if ((isset($context["S_CAN_MAKE_NORMAL"]) ? $context["S_CAN_MAKE_NORMAL"] : null)) {
                echo "<option value=\"make_normal\">";
                echo $this->env->getExtension('phpbb')->lang("MAKE_NORMAL");
                echo "</option>";
            }
            // line 103
            echo "\t\t\t\t";
            if ((isset($context["S_CAN_MAKE_STICKY"]) ? $context["S_CAN_MAKE_STICKY"] : null)) {
                echo "<option value=\"make_sticky\">";
                echo $this->env->getExtension('phpbb')->lang("MAKE_STICKY");
                echo "</option>";
            }
            // line 104
            echo "\t\t\t\t";
            if ((isset($context["S_CAN_MAKE_ANNOUNCE"]) ? $context["S_CAN_MAKE_ANNOUNCE"] : null)) {
                // line 105
                echo "\t\t\t\t\t<option value=\"make_announce\">";
                echo $this->env->getExtension('phpbb')->lang("MAKE_ANNOUNCE");
                echo "</option>
\t\t\t\t\t<option value=\"make_global\">";
                // line 106
                echo $this->env->getExtension('phpbb')->lang("MAKE_GLOBAL");
                echo "</option>
\t\t\t\t";
            }
            // line 108
            echo "\t\t\t</select>
\t\t\t<input class=\"btn btn-default\" type=\"submit\" value=\"";
            // line 109
            echo $this->env->getExtension('phpbb')->lang("SUBMIT");
            echo "\" />
\t\t</div>

\t\t<div class=\"btn-group pull-";
            // line 112
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t\t<a href=\"#\" onclick=\"marklist('mcp', 'topic_id_list', false); return false;\" class=\"btn btn-warning\">";
            // line 113
            echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
            echo "</a>
\t\t\t<a href=\"#\" onclick=\"marklist('mcp', 'topic_id_list', true); return false;\" class=\"btn btn-info\">";
            // line 114
            echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
            echo "</a>
\t\t</div>
\t\t";
        }
        // line 117
        echo "\t\t";
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t</fieldset>

\t<div class=\"pages clearfix\">
\t\t";
        // line 121
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
            // line 122
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
            // line 123
            echo "\t\t";
        }
        // line 124
        echo "\t\t<div class=\"btn-group pull-";
        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
        echo "\">
\t\t\t<span class=\"btn btn-default disabled\">";
        // line 125
        echo (isset($context["TOTAL_TOPICS"]) ? $context["TOTAL_TOPICS"] : null);
        echo "</span>
\t\t\t<span class=\"btn btn-default disabled\">";
        // line 126
        echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
        echo "</span>
\t\t</div>
\t</div>

</form>

";
        // line 132
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
        return "mcp_forum.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  566 => 132,  557 => 126,  553 => 125,  548 => 124,  545 => 123,  532 => 122,  530 => 121,  522 => 117,  516 => 114,  512 => 113,  508 => 112,  502 => 109,  499 => 108,  494 => 106,  489 => 105,  486 => 104,  479 => 103,  472 => 102,  465 => 101,  456 => 100,  449 => 99,  442 => 98,  435 => 97,  428 => 96,  422 => 95,  418 => 94,  412 => 92,  410 => 91,  403 => 87,  394 => 86,  387 => 85,  383 => 83,  377 => 80,  374 => 79,  370 => 77,  363 => 75,  359 => 73,  347 => 72,  344 => 71,  342 => 70,  334 => 69,  330 => 68,  317 => 63,  311 => 62,  301 => 58,  290 => 57,  284 => 56,  279 => 53,  270 => 52,  261 => 51,  252 => 50,  240 => 49,  233 => 48,  225 => 47,  222 => 46,  218 => 44,  212 => 43,  202 => 41,  196 => 39,  188 => 38,  185 => 37,  181 => 36,  176 => 35,  173 => 34,  167 => 33,  152 => 32,  139 => 31,  135 => 30,  131 => 28,  125 => 26,  123 => 25,  119 => 24,  115 => 23,  105 => 22,  101 => 20,  99 => 19,  92 => 15,  88 => 14,  83 => 13,  80 => 12,  67 => 11,  65 => 10,  59 => 7,  49 => 5,  46 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
