<?php

/* ucp_main_subscribed.html */
class __TwigTemplate_499b557f43f9bd6b4304dd9d13818577 extends Twig_Template
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
        echo $this->env->getExtension('phpbb')->lang("TITLE");
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t\t<p>";
        // line 11
        echo $this->env->getExtension('phpbb')->lang("WATCHED_EXPLAIN");
        echo "</p>

\t";
        // line 13
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "forumrow"))) {
            // line 14
            echo "\t\t<div class=\"panel panel-default\">
\t\t\t<div class=\"clearfix\">
\t\t\t\t<h4 class=\"col-md-8 col-sm-7 col-xs-10\">";
            // line 16
            echo $this->env->getExtension('phpbb')->lang("WATCHED_FORUMS");
            echo "</h4>
\t\t\t\t<h5 class=\"col-md-3 col-sm-4 hidden-xs\">";
            // line 17
            echo $this->env->getExtension('phpbb')->lang("LAST_POST");
            echo "</h5>
\t\t\t\t<h5 class=\"col-md-1 col-sm-1 col-xs-2 text-center\">";
            // line 18
            echo $this->env->getExtension('phpbb')->lang("MARK");
            echo "</h5>
\t\t\t</div>

\t\t";
            // line 21
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "forumrow"));
            foreach ($context['_seq'] as $context["_key"] => $context["forumrow"]) {
                // line 22
                echo "\t\t\t<div class=\"clearfix icon ";
                echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_IMG_STYLE");
                if (($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_ROW_COUNT") % 2 == 1)) {
                    echo " bg1";
                } else {
                    echo " bg2";
                }
                echo "\">
\t\t\t\t<div class=\"folder col-md-8 col-sm-7 col-xs-10\">
\t\t\t\t\t";
                // line 24
                if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_UNREAD_FORUM")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_VIEWFORUM");
                    echo "\" class=\"icon-link\"></a>";
                }
                // line 25
                echo "\t\t\t\t\t<a href=\"";
                echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_VIEWFORUM");
                echo "\" class=\"forumtitle\">";
                echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_NAME");
                echo "</a><br />
\t\t\t\t\t";
                // line 26
                echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_DESC");
                echo "
\t\t\t\t\t";
                // line 27
                if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POST_TIME")) {
                    // line 28
                    echo "\t\t\t\t\t<div class=\"visible-xs\">
\t\t\t\t\t\t";
                    // line 29
                    echo $this->env->getExtension('phpbb')->lang("LAST_POST");
                    echo " ";
                    echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                    echo " ";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POST_AUTHOR_FULL");
                    echo " &laquo; <a href=\"";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_LAST_POST");
                    echo "\">";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POST_TIME");
                    echo "</a>
\t\t\t\t\t</div>
\t\t\t\t\t";
                }
                // line 32
                echo "\t\t\t\t</div>

\t\t\t\t<div class=\"col-md-3 col-sm-4 hidden-xs\">
\t\t\t\t";
                // line 35
                if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POST_TIME")) {
                    // line 36
                    echo "\t\t\t\t\t";
                    echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                    echo " ";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POST_AUTHOR_FULL");
                    echo "
\t\t\t\t\t<a href=\"";
                    // line 37
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_LAST_POST");
                    echo "\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("GOTO_LAST_POST");
                    echo "\"><i class=\"fa fa-arrow-";
                    echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                    echo "\"></i></a><br />";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POST_TIME");
                    echo "
\t\t\t\t";
                } else {
                    // line 39
                    echo "\t\t\t\t\t";
                    echo $this->env->getExtension('phpbb')->lang("NO_POSTS");
                    echo "
\t\t\t\t";
                }
                // line 41
                echo "\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-2 text-center\">
\t\t\t\t\t<input type=\"checkbox\" name=\"f[";
                // line 43
                echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_ID");
                echo "]\" id=\"f";
                echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_ID");
                echo "\" />
\t\t\t\t</div>
\t\t\t</div>
\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['forumrow'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 47
            echo "\t\t</div>
\t";
        } elseif ((isset($context["S_FORUM_NOTIFY"]) ? $context["S_FORUM_NOTIFY"] : null)) {
            // line 49
            echo "\t\t<div class=\"alert alert-info\">
\t\t\t";
            // line 50
            echo $this->env->getExtension('phpbb')->lang("NO_WATCHED_FORUMS");
            echo "
\t\t</div>
\t";
        }
        // line 53
        echo "
\t";
        // line 54
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow"))) {
            // line 55
            echo "\t\t<div class=\"panel panel-default\">
\t\t\t<div class=\"clearfix\">
\t\t\t\t<h4 class=\"col-md-8 col-sm-7 col-xs-10\">";
            // line 57
            echo $this->env->getExtension('phpbb')->lang("WATCHED_TOPICS");
            echo "</h4>
\t\t\t\t<h5 class=\"col-md-3 col-sm-4 hidden-xs\">";
            // line 58
            echo $this->env->getExtension('phpbb')->lang("LAST_POST");
            echo "</h5>
\t\t\t\t<h5 class=\"col-md-1 col-sm-1 col-xs-2 text-center\">";
            // line 59
            echo $this->env->getExtension('phpbb')->lang("MARK");
            echo "</h5>
\t\t\t</div>

\t\t";
            // line 62
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow"));
            foreach ($context['_seq'] as $context["_key"] => $context["topicrow"]) {
                // line 63
                echo "\t\t\t<div class=\"clearfix icon ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_IMG_STYLE");
                if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_ROW_COUNT") % 2 == 0)) {
                    echo " bg1";
                } else {
                    echo " bg2";
                }
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_REPORTED")) {
                    echo " bg-danger";
                }
                echo "\">
\t\t\t\t<div class=\"folder col-md-8 col-sm-7 col-xs-10\"";
                // line 64
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ICON_IMG")) {
                    echo " style=\"background-image: url(";
                    echo (isset($context["T_ICONS_PATH"]) ? $context["T_ICONS_PATH"] : null);
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ICON_IMG");
                    echo ");\"";
                }
                echo " title=\"";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_FOLDER_IMG_ALT");
                echo "\">
\t\t\t\t\t";
                // line 65
                if (twig_length_filter($this->env, $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "pagination"))) {
                    // line 66
                    echo "\t\t\t\t\t<ul class=\"pagination pull-";
                    echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                    echo "\">
\t\t\t\t\t";
                    // line 67
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "pagination"));
                    foreach ($context['_seq'] as $context["_key"] => $context["pagination"]) {
                        // line 68
                        echo "\t\t\t\t\t\t";
                        if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_PREV")) {
                            // line 69
                            echo "\t\t\t\t\t\t";
                        } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_CURRENT")) {
                            echo "<li class=\"active\"><span>";
                            echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                            echo "</span></li>
\t\t\t\t\t\t";
                        } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_ELLIPSIS")) {
                            // line 70
                            echo "<li class=\"ellipsis disabled\"><span>";
                            echo $this->env->getExtension('phpbb')->lang("ELLIPSIS");
                            echo "</span></li>
\t\t\t\t\t\t";
                        } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_NEXT")) {
                            // line 72
                            echo "\t\t\t\t\t\t";
                        } else {
                            echo "<li><a href=\"";
                            echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                            echo "\">";
                            echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                            echo "</a></li>
\t\t\t\t\t\t";
                        }
                        // line 74
                        echo "\t\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['pagination'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 75
                    echo "\t\t\t\t\t</ul>
\t\t\t\t\t";
                }
                // line 77
                echo "\t\t\t\t\t";
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_UNREAD_TOPIC")) {
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
\t\t\t\t\t";
                // line 78
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
                // line 79
                echo "\t\t\t\t\t";
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_REPORTED")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_MCP_REPORT");
                    echo "\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("TOPIC_REPORTED");
                    echo "\"><i class=\"fa fa-exclamation-triangle\"></i></a>";
                }
                echo "<br />

\t\t\t\t\t<div class=\"hidden-xs\">
\t\t\t\t\t\t";
                // line 82
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "ATTACH_ICON_IMG")) {
                    echo "<span class=\"tip\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("TOTAL_ATTACHMENTS");
                    echo "\"><i class=\"fa fa-paperclip\"></i></span> ";
                }
                // line 83
                echo "\t\t\t\t\t\t";
                echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                echo " ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_AUTHOR_FULL");
                echo " &raquo; ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "FIRST_POST_TIME");
                echo "
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"visible-xs\">
\t\t\t\t\t\t";
                // line 86
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "ATTACH_ICON_IMG")) {
                    echo "<span class=\"tip\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("TOTAL_ATTACHMENTS");
                    echo "\"><i class=\"fa fa-paperclip\"></i></span> ";
                }
                // line 87
                echo "\t\t\t\t\t\t";
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
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t\t<div class=\"col-md-3 col-sm-4 hidden-xs\">
\t\t\t\t\t";
                // line 92
                echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                echo " ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_AUTHOR_FULL");
                echo "
\t\t\t\t\t<a href=\"";
                // line 93
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_LAST_POST");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("GOTO_LAST_POST");
                echo "\"><i class=\"fa fa-arrow-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\"></i></a><br />";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_TIME");
                echo "
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-2 text-center\">
\t\t\t\t\t<input type=\"checkbox\" name=\"t[";
                // line 96
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ID");
                echo "]\" id=\"t";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ID");
                echo "\" />
\t\t\t\t</div>
\t\t\t</div>
\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['topicrow'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 100
            echo "\t\t</div>

\t";
        } elseif ((isset($context["S_TOPIC_NOTIFY"]) ? $context["S_TOPIC_NOTIFY"] : null)) {
            // line 103
            echo "\t\t<div class=\"alert alert-info\">
\t\t\t";
            // line 104
            echo $this->env->getExtension('phpbb')->lang("NO_WATCHED_TOPICS");
            echo "
\t\t</div>
\t";
        }
        // line 107
        echo "
\t";
        // line 108
        if ((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow")) || twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "forumrow")))) {
            // line 109
            echo "\t<fieldset class=\"panel-group text-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t<div class=\"btn-group\">
\t\t\t<a href=\"#\" onclick=\"marklist('ucp', 't', false); marklist('ucp', 'f', false); return false;\" class=\"btn btn-warning\">";
            // line 111
            echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
            echo "</a>
\t\t\t<input type=\"submit\" name=\"unwatch\" value=\"";
            // line 112
            echo $this->env->getExtension('phpbb')->lang("UNWATCH_MARKED");
            echo "\" class=\"btn btn-default\" />
\t\t\t<a href=\"#\" onclick=\"marklist('ucp', 't', true); marklist('ucp', 'f', true); return false;\" class=\"btn btn-info\">";
            // line 113
            echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
            echo "</a>
\t\t</div>
\t\t";
            // line 115
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t</fieldset>

\t<div class=\"pages clearfix\">
\t\t";
            // line 119
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                echo " 
\t\t\t";
                // line 120
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
                // line 121
                echo "\t\t";
            }
            // line 122
            echo "\t\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 123
            echo (isset($context["TOTAL_TOPICS"]) ? $context["TOTAL_TOPICS"] : null);
            echo "</span>
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 124
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t\t</div>
\t</div>
\t";
        }
        // line 128
        echo "
\t</div>

</div>
</form>

";
        // line 134
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
        return "ucp_main_subscribed.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  485 => 134,  477 => 128,  470 => 124,  466 => 123,  461 => 122,  458 => 121,  446 => 120,  442 => 119,  435 => 115,  430 => 113,  426 => 112,  422 => 111,  416 => 109,  414 => 108,  411 => 107,  405 => 104,  402 => 103,  397 => 100,  385 => 96,  373 => 93,  367 => 92,  348 => 87,  342 => 86,  331 => 83,  325 => 82,  312 => 79,  300 => 78,  285 => 77,  281 => 75,  275 => 74,  265 => 72,  259 => 70,  251 => 69,  248 => 68,  244 => 67,  239 => 66,  237 => 65,  226 => 64,  213 => 63,  209 => 62,  203 => 59,  199 => 58,  195 => 57,  191 => 55,  189 => 54,  186 => 53,  180 => 50,  177 => 49,  173 => 47,  161 => 43,  157 => 41,  151 => 39,  140 => 37,  133 => 36,  131 => 35,  126 => 32,  112 => 29,  109 => 28,  107 => 27,  103 => 26,  96 => 25,  90 => 24,  79 => 22,  75 => 21,  69 => 18,  65 => 17,  61 => 16,  57 => 14,  55 => 13,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
