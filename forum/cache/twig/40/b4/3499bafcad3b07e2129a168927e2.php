<?php

/* mcp_topic.html */
class __TwigTemplate_40b43499bafcad3b07e2129a168927e2 extends Twig_Template
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
<h3><a href=\"";
        // line 3
        echo (isset($context["U_VIEW_TOPIC"]) ? $context["U_VIEW_TOPIC"] : null);
        echo "\">";
        echo $this->env->getExtension('phpbb')->lang("TOPIC");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo " ";
        echo (isset($context["TOPIC_TITLE"]) ? $context["TOPIC_TITLE"] : null);
        echo "</a></h3>

";
        // line 5
        if ((isset($context["S_MERGE_VIEW"]) ? $context["S_MERGE_VIEW"] : null)) {
            // line 6
            echo "\t";
            $value = "merge-panel";
            $context['definition']->set('SHOW_PANEL', $value);
        } elseif ((isset($context["S_SPLIT_VIEW"]) ? $context["S_SPLIT_VIEW"] : null)) {
            // line 8
            echo "\t";
            $value = "split-panel";
            $context['definition']->set('SHOW_PANEL', $value);
        } else {
            // line 10
            echo "\t";
            $value = "display-panel";
            $context['definition']->set('SHOW_PANEL', $value);
        }
        // line 12
        echo "
<div class=\"sub-panels clearfix\" data-show-panel=\"";
        // line 13
        echo $this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "SHOW_PANEL");
        echo "\" role=\"tablist\">
\t\t<ul class=\"nav nav-pills pull-";
        // line 14
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo "\">
\t\t<li id=\"display-panel-tab\"";
        // line 15
        if ((!(isset($context["S_MERGE_VIEW"]) ? $context["S_MERGE_VIEW"] : null))) {
            echo " class=\" active\"";
        }
        echo ">
\t\t\t<a href=\"#minitabs\" data-subpanel=\"display-panel\" role=\"tab\" aria-controls=\"display-panel\">";
        // line 16
        echo $this->env->getExtension('phpbb')->lang("DISPLAY_OPTIONS");
        echo "</a>
\t\t</li>
\t\t<li id=\"split-panel-tab\">
\t\t\t<a href=\"#minitabs\" data-subpanel=\"split-panel\" role=\"tab\" aria-controls=\"split-panel\">";
        // line 19
        echo $this->env->getExtension('phpbb')->lang("SPLIT_TOPIC");
        echo "</a>
\t\t</li>
\t\t<li id=\"merge-panel-tab\"";
        // line 21
        if ((!(isset($context["S_MERGE_VIEW"]) ? $context["S_MERGE_VIEW"] : null))) {
            echo " class=\" active\"";
        }
        echo ">
\t\t\t<a href=\"#minitabs\" data-subpanel=\"merge-panel\" role=\"tab\" aria-controls=\"merge-panel\">";
        // line 22
        echo $this->env->getExtension('phpbb')->lang("MERGE_POSTS");
        echo "</a>
\t\t</li>
\t</ul>
</div>

<form id=\"mcp\" method=\"post\" action=\"";
        // line 27
        echo (isset($context["S_MCP_ACTION"]) ? $context["S_MCP_ACTION"] : null);
        echo "\">

<div class=\"panel panel-default\">
\t<div class=\"panel-body\">

\t<fieldset id=\"display-panel\" class=\"form-horizontal\" role=\"tabpanel\">
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"posts_per_page\">";
        // line 34
        echo $this->env->getExtension('phpbb')->lang("POSTS_PER_PAGE");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("POSTS_PER_PAGE_EXPLAIN");
        echo "</span></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"number\" min=\"0\" name=\"posts_per_page\" id=\"posts_per_page\" size=\"6\" value=\"";
        // line 35
        echo (isset($context["POSTS_PER_PAGE"]) ? $context["POSTS_PER_PAGE"] : null);
        echo "\" /></dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\">";
        // line 38
        echo $this->env->getExtension('phpbb')->lang("DISPLAY_POSTS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">";
        // line 39
        echo (isset($context["S_SELECT_SORT_DAYS"]) ? $context["S_SELECT_SORT_DAYS"] : null);
        echo " <label>";
        echo $this->env->getExtension('phpbb')->lang("SORT_BY");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label> ";
        echo (isset($context["S_SELECT_SORT_KEY"]) ? $context["S_SELECT_SORT_KEY"] : null);
        echo " ";
        echo (isset($context["S_SELECT_SORT_DIR"]) ? $context["S_SELECT_SORT_DIR"] : null);
        echo " <input type=\"submit\" name=\"sort\" value=\"";
        echo $this->env->getExtension('phpbb')->lang("GO");
        echo "\" class=\"btn btn-default\" /></dd>
\t</dl>
\t</fieldset>

";
        // line 43
        if ((isset($context["S_CAN_SPLIT"]) ? $context["S_CAN_SPLIT"] : null)) {
            // line 44
            echo "\t<fieldset id=\"split-panel\" class=\"form-horizontal\" role=\"tabpanel\">
\t\t<p>";
            // line 45
            echo $this->env->getExtension('phpbb')->lang("SPLIT_TOPIC_EXPLAIN");
            echo "</p>

\t";
            // line 47
            if ((isset($context["S_SHOW_TOPIC_ICONS"]) ? $context["S_SHOW_TOPIC_ICONS"] : null)) {
                // line 48
                echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"icon\">";
                // line 49
                echo $this->env->getExtension('phpbb')->lang("TOPIC_ICON");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group\" data-toggle=\"buttons\">
\t\t\t\t<label for=\"icon\" class=\"btn btn-default active\"><input type=\"radio\" name=\"icon\" id=\"icon\" value=\"0\" checked=\"checked\" /> ";
                // line 52
                echo $this->env->getExtension('phpbb')->lang("NO_TOPIC_ICON");
                echo "</label>
\t\t\t\t";
                // line 53
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topic_icon"));
                foreach ($context['_seq'] as $context["_key"] => $context["topic_icon"]) {
                    echo "<label for=\"icon-";
                    echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_ID");
                    echo "\" class=\"btn btn-default\"><input type=\"radio\" name=\"icon\" id=\"icon-";
                    echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_ID");
                    echo "\" value=\"";
                    echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_ID");
                    echo "\" ";
                    echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "S_ICON_CHECKED");
                    echo " /><img src=\"";
                    echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_IMG");
                    echo "\" width=\"";
                    echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_WIDTH");
                    echo "\" height=\"";
                    echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_HEIGHT");
                    echo "\" alt=\"\" title=\"\" /></label>";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['topic_icon'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 54
                echo "\t\t\t</div>
\t\t</dd>
\t</dl>
\t";
            }
            // line 58
            echo "
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"subject\">";
            // line 60
            echo $this->env->getExtension('phpbb')->lang("SPLIT_SUBJECT");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"text\" name=\"subject\" id=\"subject\" size=\"45\" maxlength=\"124\" tabindex=\"2\" value=\"";
            // line 61
            echo (isset($context["SPLIT_SUBJECT"]) ? $context["SPLIT_SUBJECT"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("SPLIT_SUBJECT");
            echo "\" class=\"form-control\" /></dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\">";
            // line 64
            echo $this->env->getExtension('phpbb')->lang("SPLIT_FORUM");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><select name=\"to_forum_id\" class=\"form-control\">";
            // line 65
            echo (isset($context["S_FORUM_SELECT"]) ? $context["S_FORUM_SELECT"] : null);
            echo "</select></dd>
\t</dl>
\t</fieldset>
";
        }
        // line 69
        echo "
";
        // line 70
        if ((isset($context["S_CAN_MERGE"]) ? $context["S_CAN_MERGE"] : null)) {
            // line 71
            echo "\t<fieldset id=\"merge-panel\" class=\"form-horizontal\" role=\"tabpanel\">
\t\t<p>";
            // line 72
            echo $this->env->getExtension('phpbb')->lang("MERGE_TOPIC_EXPLAIN");
            echo "</p>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"to_topic_id\">";
            // line 74
            echo $this->env->getExtension('phpbb')->lang("MERGE_TOPIC_ID");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t<div class=\"input-group\">
\t\t\t\t<input class=\"form-control\" type=\"number\" min=\"0\" size=\"6\" name=\"to_topic_id\" id=\"to_topic_id\" value=\"";
            // line 77
            echo (isset($context["TO_TOPIC_ID"]) ? $context["TO_TOPIC_ID"] : null);
            echo "\" />
\t\t\t\t<div class=\"input-group-btn\">
\t\t\t\t\t<a href=\"";
            // line 79
            echo (isset($context["U_SELECT_TOPIC"]) ? $context["U_SELECT_TOPIC"] : null);
            echo "\" class=\"btn btn-default\">";
            echo $this->env->getExtension('phpbb')->lang("SELECT_TOPIC");
            echo "</a>
\t\t\t\t</div>
\t\t\t</div>
\t\t";
            // line 82
            if ((isset($context["TO_TOPIC_INFO"]) ? $context["TO_TOPIC_INFO"] : null)) {
                echo "<br />";
                echo (isset($context["TO_TOPIC_INFO"]) ? $context["TO_TOPIC_INFO"] : null);
            }
            // line 83
            echo "\t\t</dd>
\t</dl>
\t</fieldset>
";
        }
        // line 87
        echo "
\t</div>
</div>

<div id=\"review\" class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<span class=\"pull-";
        // line 93
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo "\"><a href=\"#review\" class=\"btn btn-default btn-xs\" onclick=\"viewableArea(getElementById('topicreview'), true); var rev_text = getElementById('review').getElementsByTagName('a').item(0).firstChild; if (rev_text.data == '";
        echo addslashes($this->env->getExtension('phpbb')->lang("EXPAND_VIEW"));
        echo "'){rev_text.data = '";
        echo addslashes($this->env->getExtension('phpbb')->lang("COLLAPSE_VIEW"));
        echo "'; } else if (rev_text.data == '";
        echo addslashes($this->env->getExtension('phpbb')->lang("COLLAPSE_VIEW"));
        echo "'){rev_text.data = '";
        echo addslashes($this->env->getExtension('phpbb')->lang("EXPAND_VIEW"));
        echo "'};\">";
        echo $this->env->getExtension('phpbb')->lang("EXPAND_VIEW");
        echo "</a></span>
\t\t<h4 class=\"panel-title\">";
        // line 94
        echo $this->env->getExtension('phpbb')->lang("TOPIC_REVIEW");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo " ";
        echo (isset($context["TOPIC_TITLE"]) ? $context["TOPIC_TITLE"] : null);
        echo "</h4>
\t</div>

\t<div id=\"topicreview\" class=\"panel-body\">
\t\t";
        // line 98
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "postrow"));
        foreach ($context['_seq'] as $context["_key"] => $context["postrow"]) {
            // line 99
            echo "\t\t<div class=\"panel panel-default";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_UNAPPROVED")) {
                echo " panel-success";
            }
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_REPORTED")) {
                echo " panel-warning";
            }
            echo "\">
\t\t\t<div class=\"panel-heading\">
\t\t\t\t<h4 class=\"panel-title\"><a href=\"";
            // line 101
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_POST_DETAILS");
            echo "\">";
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_SUBJECT");
            echo "</a></h4>
\t\t\t</div>
\t\t\t<div class=\"panel-body";
            // line 103
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_DELETED")) {
                echo " bg2";
            }
            echo "\">

\t\t\t<div class=\"postbody\" id=\"pr";
            // line 105
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
            echo "\">
\t\t\t\t<div class=\"panel-group post-buttons clearfix\">
\t\t\t\t\t<a href=\"#pr";
            // line 107
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("POST");
            echo "\"><i class=\"fa fa-file-o\"></i></a> ";
            echo $this->env->getExtension('phpbb')->lang("POSTED");
            echo " ";
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_DATE");
            echo " ";
            echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
            echo " <strong>";
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_AUTHOR_FULL");
            echo "</strong>";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_MCP_DETAILS")) {
                echo " [ <a href=\"";
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_MCP_DETAILS");
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("POST_DETAILS");
                echo "</a> ]";
            }
            // line 108
            echo "
\t\t\t\t\t<div class=\"btn-toolbar pull-";
            // line 109
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t\t\t\t\t<label for=\"post_id_list_select_";
            // line 110
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
            echo "\" class=\"btn btn-default btn-sm\">";
            echo $this->env->getExtension('phpbb')->lang("SELECT");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " <input type=\"checkbox\" id=\"post_id_list_select_";
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
            echo "\" name=\"post_id_list[]\" value=\"";
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
            echo "\"";
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_CHECKED")) {
                echo " checked=\"checked\"";
            }
            echo " /></label>
\t\t\t\t\t\t<a href=\"";
            // line 111
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_POST_DETAILS");
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("POST_DETAILS");
            echo "\" class=\"btn btn-info\"><i class=\"fa fa-info fa-fw\"></i><span>";
            echo $this->env->getExtension('phpbb')->lang("POST_DETAILS");
            echo "</span></a>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t\t";
            // line 115
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_UNAPPROVED")) {
                // line 116
                echo "\t\t\t\t<div class=\"alert alert-warning\">
\t\t\t\t\t<a href=\"";
                // line 117
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_MCP_APPROVE");
                echo "\"><strong>";
                echo $this->env->getExtension('phpbb')->lang("POST_UNAPPROVED");
                echo "</strong></a>
\t\t\t\t</div>
\t\t\t\t";
            }
            // line 120
            echo "
\t\t\t\t";
            // line 121
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_DELETED")) {
                // line 122
                echo "\t\t\t\t<div class=\"alert alert-warning\">
\t\t\t\t\t<a href=\"";
                // line 123
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_MCP_APPROVE");
                echo "\"><strong>";
                echo $this->env->getExtension('phpbb')->lang("POST_DELETED");
                echo "</strong></a>
\t\t\t\t</div>
\t\t\t\t";
            }
            // line 126
            echo "
\t\t\t\t";
            // line 127
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_POST_REPORTED")) {
                // line 128
                echo "\t\t\t\t<div class=\"alert alert-warning\">
\t\t\t\t\t<a href=\"";
                // line 129
                echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "U_MCP_REPORT");
                echo "\"><strong>";
                echo $this->env->getExtension('phpbb')->lang("POST_REPORTED");
                echo "</strong></a>
\t\t\t\t</div>
\t\t\t\t";
            }
            // line 132
            echo "
\t\t\t\t<div class=\"content\" id=\"message_";
            // line 133
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "POST_ID");
            echo "\">";
            echo $this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "MESSAGE");
            echo "</div>

\t\t\t\t";
            // line 135
            if ($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "S_HAS_ATTACHMENTS")) {
                // line 136
                echo "\t\t\t\t\t<div class=\"attachbox pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\">
\t\t\t\t\t\t<p>";
                // line 137
                echo $this->env->getExtension('phpbb')->lang("ATTACHMENTS");
                echo "</p>
\t\t\t\t\t\t";
                // line 138
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["postrow"]) ? $context["postrow"] : null), "attachment"));
                foreach ($context['_seq'] as $context["_key"] => $context["attachment"]) {
                    // line 139
                    echo "\t\t\t\t\t\t<div class=\"panel panel-default\">";
                    echo $this->getAttribute((isset($context["attachment"]) ? $context["attachment"] : null), "DISPLAY_ATTACHMENT");
                    echo "</div>
\t\t\t\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attachment'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 141
                echo "\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"clearfix\"></div>
\t\t\t\t";
            }
            // line 144
            echo "
\t\t\t</div>

\t\t\t</div>
\t\t</div>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['postrow'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 150
        echo "\t</div>
</div>

<fieldset class=\"panel-group\">
\t<div class=\"form-inline pull-";
        // line 154
        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
        echo "\">
\t\t<select name=\"action\" class=\"form-control\">
\t\t\t<option value=\"\" selected=\"selected\">";
        // line 156
        echo $this->env->getExtension('phpbb')->lang("SELECT_ACTION");
        echo "</option>
\t\t\t";
        // line 157
        if ((isset($context["S_CAN_APPROVE"]) ? $context["S_CAN_APPROVE"] : null)) {
            echo "<option value=\"approve\">";
            echo $this->env->getExtension('phpbb')->lang("APPROVE_POSTS");
            echo "</option>";
        }
        // line 158
        echo "\t\t\t";
        if ((isset($context["S_CAN_LOCK"]) ? $context["S_CAN_LOCK"] : null)) {
            echo "<option value=\"lock_post\">";
            echo $this->env->getExtension('phpbb')->lang("LOCK_POST_POSTS");
            echo " [ ";
            echo $this->env->getExtension('phpbb')->lang("LOCK_POST_EXPLAIN");
            echo " ]</option><option value=\"unlock_post\">";
            echo $this->env->getExtension('phpbb')->lang("UNLOCK_POST_POSTS");
            echo "</option>";
        }
        // line 159
        echo "\t\t\t";
        if ((isset($context["S_CAN_DELETE"]) ? $context["S_CAN_DELETE"] : null)) {
            echo "<option value=\"delete_post\">";
            echo $this->env->getExtension('phpbb')->lang("DELETE_POSTS");
            echo "</option>";
        }
        // line 160
        echo "\t\t\t";
        if ((isset($context["S_CAN_RESTORE"]) ? $context["S_CAN_RESTORE"] : null)) {
            echo "<option value=\"restore\">";
            echo $this->env->getExtension('phpbb')->lang("RESTORE_POSTS");
            echo "</option>";
        }
        // line 161
        echo "\t\t\t";
        if ((isset($context["S_CAN_MERGE"]) ? $context["S_CAN_MERGE"] : null)) {
            echo "<option value=\"merge_posts\"";
            if ((isset($context["S_MERGE_VIEW"]) ? $context["S_MERGE_VIEW"] : null)) {
                echo " selected=\"selected\"";
            }
            echo ">";
            echo $this->env->getExtension('phpbb')->lang("MERGE_POSTS");
            echo "</option>";
        }
        // line 162
        echo "\t\t\t";
        if ((isset($context["S_CAN_SPLIT"]) ? $context["S_CAN_SPLIT"] : null)) {
            echo "<option value=\"split_all\"";
            if ((isset($context["S_SPLIT_VIEW"]) ? $context["S_SPLIT_VIEW"] : null)) {
                echo " selected=\"selected\"";
            }
            echo ">";
            echo $this->env->getExtension('phpbb')->lang("SPLIT_POSTS");
            echo "</option><option value=\"split_beyond\">";
            echo $this->env->getExtension('phpbb')->lang("SPLIT_AFTER");
            echo "</option>";
        }
        // line 163
        echo "\t\t\t";
        if ((isset($context["S_CAN_SYNC"]) ? $context["S_CAN_SYNC"] : null)) {
            echo "<option value=\"resync\">";
            echo $this->env->getExtension('phpbb')->lang("RESYNC");
            echo "</option>";
        }
        // line 164
        echo "\t\t</select>
\t\t<input class=\"btn btn-default\" type=\"submit\" name=\"mcp_topic_submit\" value=\"";
        // line 165
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" />
\t</div>

\t<div class=\"btn-group pull-";
        // line 168
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo "\">
\t\t<a href=\"#\" onclick=\"marklist('mcp', 'post', false); return false;\" class=\"btn btn-warning\">";
        // line 169
        echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
        echo "</a>
\t\t<a href=\"#\" onclick=\"marklist('mcp', 'post', true); return false;\" class=\"btn btn-info\">";
        // line 170
        echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
        echo "</a>
\t</div>
";
        // line 172
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "
";
        // line 173
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
</fieldset>

<div class=\"pages clearfix\">
\t";
        // line 177
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
            echo " 
\t\t";
            // line 178
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
            // line 179
            echo "\t";
        }
        // line 180
        echo "\t<div class=\"btn-group pull-";
        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
        echo "\">
\t\t<span class=\"btn btn-default disabled\">";
        // line 181
        echo (isset($context["TOTAL_POSTS"]) ? $context["TOTAL_POSTS"] : null);
        echo "</span>
\t\t<span class=\"btn btn-default disabled\">";
        // line 182
        echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
        echo "</span>
\t</div>
</div>

</form>

";
        // line 188
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
        return "mcp_topic.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  636 => 188,  627 => 182,  623 => 181,  618 => 180,  615 => 179,  603 => 178,  599 => 177,  592 => 173,  588 => 172,  583 => 170,  579 => 169,  575 => 168,  569 => 165,  566 => 164,  559 => 163,  546 => 162,  535 => 161,  528 => 160,  521 => 159,  510 => 158,  504 => 157,  500 => 156,  495 => 154,  489 => 150,  478 => 144,  473 => 141,  464 => 139,  460 => 138,  456 => 137,  451 => 136,  449 => 135,  442 => 133,  439 => 132,  431 => 129,  428 => 128,  426 => 127,  423 => 126,  415 => 123,  412 => 122,  410 => 121,  407 => 120,  399 => 117,  396 => 116,  394 => 115,  383 => 111,  368 => 110,  364 => 109,  361 => 108,  341 => 107,  336 => 105,  329 => 103,  322 => 101,  311 => 99,  307 => 98,  297 => 94,  283 => 93,  275 => 87,  269 => 83,  264 => 82,  256 => 79,  251 => 77,  244 => 74,  239 => 72,  236 => 71,  234 => 70,  231 => 69,  224 => 65,  219 => 64,  211 => 61,  206 => 60,  202 => 58,  196 => 54,  173 => 53,  169 => 52,  162 => 49,  159 => 48,  157 => 47,  152 => 45,  149 => 44,  147 => 43,  131 => 39,  126 => 38,  120 => 35,  113 => 34,  103 => 27,  95 => 22,  89 => 21,  84 => 19,  78 => 16,  72 => 15,  68 => 14,  64 => 13,  61 => 12,  56 => 10,  51 => 8,  46 => 6,  44 => 5,  34 => 3,  31 => 2,  19 => 1,);
    }
}
