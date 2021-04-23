<?php

/* search_results.html */
class __TwigTemplate_d905459c6f24eedf8e542e3487e561b7 extends Twig_Template
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
<h4>";
        // line 3
        if ((isset($context["SEARCH_TITLE"]) ? $context["SEARCH_TITLE"] : null)) {
            echo (isset($context["SEARCH_TITLE"]) ? $context["SEARCH_TITLE"] : null);
        } else {
            echo (isset($context["SEARCH_MATCHES"]) ? $context["SEARCH_MATCHES"] : null);
        }
        if ((isset($context["SEARCH_WORDS"]) ? $context["SEARCH_WORDS"] : null)) {
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " <a href=\"";
            echo (isset($context["U_SEARCH_WORDS"]) ? $context["U_SEARCH_WORDS"] : null);
            echo "\">";
            echo (isset($context["SEARCH_WORDS"]) ? $context["SEARCH_WORDS"] : null);
            echo "</a>";
        }
        echo "</h4>
";
        // line 4
        if ((isset($context["SEARCHED_QUERY"]) ? $context["SEARCHED_QUERY"] : null)) {
            echo " <p>";
            echo $this->env->getExtension('phpbb')->lang("SEARCHED_QUERY");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " <strong>";
            echo (isset($context["SEARCHED_QUERY"]) ? $context["SEARCHED_QUERY"] : null);
            echo "</strong></p>";
        }
        // line 5
        if ((isset($context["IGNORED_WORDS"]) ? $context["IGNORED_WORDS"] : null)) {
            echo " <p>";
            echo $this->env->getExtension('phpbb')->lang("IGNORED_TERMS");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " <strong>";
            echo (isset($context["IGNORED_WORDS"]) ? $context["IGNORED_WORDS"] : null);
            echo "</strong></p>";
        }
        // line 6
        if ((isset($context["PHRASE_SEARCH_DISABLED"]) ? $context["PHRASE_SEARCH_DISABLED"] : null)) {
            echo " <p><strong>";
            echo $this->env->getExtension('phpbb')->lang("PHRASE_SEARCH_DISABLED");
            echo "</strong></p>";
        }
        // line 7
        echo "
\t<div class=\"panel-group clearfix\">
\t";
        // line 9
        if ((isset($context["SEARCH_TOPIC"]) ? $context["SEARCH_TOPIC"] : null)) {
            // line 10
            echo "\t\t<a class=\"btn btn-default pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\" href=\"";
            echo (isset($context["U_SEARCH_TOPIC"]) ? $context["U_SEARCH_TOPIC"] : null);
            echo "\"><i class=\"fa fa-angle-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\"></i> ";
            echo $this->env->getExtension('phpbb')->lang("RETURN_TO_TOPIC");
            echo "</a>
\t";
        } else {
            // line 12
            echo "\t\t<a class=\"btn btn-default pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\" href=\"";
            echo (isset($context["U_SEARCH"]) ? $context["U_SEARCH"] : null);
            echo "\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("SEARCH_ADV");
            echo "\"><i class=\"fa fa-angle-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\"></i> ";
            echo $this->env->getExtension('phpbb')->lang("GO_TO_SEARCH_ADV");
            echo "</a>
\t";
        }
        // line 14
        echo "
\t\t";
        // line 15
        if (((isset($context["TOTAL_MATCHES"]) ? $context["TOTAL_MATCHES"] : null) > 0)) {
            // line 16
            echo "\t\t<form method=\"post\" action=\"";
            echo (isset($context["S_SEARCH_ACTION"]) ? $context["S_SEARCH_ACTION"] : null);
            echo "\">
\t\t\t<fieldset class=\"form-inline pull-";
            // line 17
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t\t\t<div class=\"input-group\">
\t\t\t\t\t<input class=\"form-control\" type=\"search\" name=\"add_keywords\" id=\"add_keywords\" value=\"\" placeholder=\"";
            // line 19
            echo $this->env->getExtension('phpbb')->lang("SEARCH_IN_RESULTS");
            echo "\" />
\t\t\t\t\t<div class=\"input-group-btn\">
\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"submit\" title=\"";
            // line 21
            echo $this->env->getExtension('phpbb')->lang("SEARCH");
            echo "\"><i class=\"fa fa-search fa-fw\"></i></button>
\t\t\t\t\t\t<a href=\"";
            // line 22
            echo (isset($context["U_SEARCH"]) ? $context["U_SEARCH"] : null);
            echo "\" class=\"btn btn-default\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("SEARCH_ADV");
            echo "\"><i class=\"fa fa-gear fa-fw\"></i></a>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</fieldset>
\t\t</form>
\t\t";
        }
        // line 28
        echo "\t</div>

\t<div class=\"pages clearfix\">
\t\t";
        // line 31
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
            // line 32
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
            // line 33
            echo "\t\t";
        }
        // line 34
        echo "\t\t<div class=\"btn-group pull-";
        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
        echo "\">
\t\t\t<span class=\"btn btn-default disabled\">";
        // line 35
        echo (isset($context["SEARCH_MATCHES"]) ? $context["SEARCH_MATCHES"] : null);
        echo "</span>
\t\t\t<span class=\"btn btn-default disabled\">";
        // line 36
        echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
        echo "</span>
\t\t</div>
\t</div>

";
        // line 40
        if ((isset($context["S_SHOW_TOPICS"]) ? $context["S_SHOW_TOPICS"] : null)) {
            // line 41
            echo "
\t";
            // line 42
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "searchresults"))) {
                // line 43
                echo "\t<div class=\"panel panel-default\">
\t<div class=\"clearfix\">
\t\t<h4 class=\"col-md-7 col-sm-8 col-xs-12\">";
                // line 45
                echo $this->env->getExtension('phpbb')->lang("TOPICS");
                echo "</h4>
\t\t<h5 class=\"col-md-1 visible-lg visible-md text-center\">";
                // line 46
                echo $this->env->getExtension('phpbb')->lang("REPLIES");
                echo "</h5>
\t\t<h5 class=\"col-md-1 visible-lg visible-md text-center\">";
                // line 47
                echo $this->env->getExtension('phpbb')->lang("VIEWS");
                echo "</h5>
\t\t<h5 class=\"col-md-3 col-sm-4 hidden-xs\">";
                // line 48
                echo $this->env->getExtension('phpbb')->lang("LAST_POST");
                echo "</h5>
\t</div>

\t";
                // line 51
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "searchresults"));
                foreach ($context['_seq'] as $context["_key"] => $context["searchresults"]) {
                    // line 52
                    echo "\t\t";
                    // line 53
                    echo "\t\t<div class=\"clearfix icon ";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_IMG_STYLE");
                    if (($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_ROW_COUNT") % 2 == 0)) {
                        echo " bg1";
                    } else {
                        echo " bg2";
                    }
                    echo "\">
\t\t\t<div class=\"folder col-md-7 col-sm-8 col-xs-12\"";
                    // line 54
                    if ($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_ICON_IMG")) {
                        echo " style=\"background-image: url(";
                        echo (isset($context["T_ICONS_PATH"]) ? $context["T_ICONS_PATH"] : null);
                        echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_ICON_IMG");
                        echo ");\"";
                    }
                    echo " title=\"";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_FOLDER_IMG_ALT");
                    echo "\">
\t\t\t";
                    // line 55
                    if (($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_UNREAD_TOPIC") && (!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)))) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_NEWEST_POST");
                        echo "\" class=\"icon-link\"></a>";
                    }
                    // line 56
                    echo "\t\t\t\t";
                    // line 57
                    echo "\t\t\t\t";
                    if (twig_length_filter($this->env, $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "pagination"))) {
                        // line 58
                        echo "\t\t\t\t\t<ul class=\"pagination pagination-sm pull-";
                        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                        echo "\">
\t\t\t\t\t";
                        // line 59
                        $context['_parent'] = (array) $context;
                        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "pagination"));
                        foreach ($context['_seq'] as $context["_key"] => $context["pagination"]) {
                            // line 60
                            echo "\t\t\t\t\t\t";
                            if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_PREV")) {
                                // line 61
                                echo "\t\t\t\t\t\t";
                            } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_CURRENT")) {
                                echo "<li class=\"active\"><span>";
                                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                                echo "</span></li>
\t\t\t\t\t\t";
                            } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_ELLIPSIS")) {
                                // line 62
                                echo "<li class=\"ellipsis disabled\"><span>";
                                echo $this->env->getExtension('phpbb')->lang("ELLIPSIS");
                                echo "</span></li>
\t\t\t\t\t\t";
                            } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_NEXT")) {
                                // line 64
                                echo "\t\t\t\t\t\t";
                            } else {
                                echo "<li><a href=\"";
                                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                                echo "\">";
                                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                                echo "</a></li>
\t\t\t\t\t\t";
                            }
                            // line 66
                            echo "\t\t\t\t\t";
                        }
                        $_parent = $context['_parent'];
                        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['pagination'], $context['_parent'], $context['loop']);
                        $context = array_intersect_key($context, $_parent) + $_parent;
                        // line 67
                        echo "\t\t\t\t\t</ul>
\t\t\t\t";
                    }
                    // line 69
                    echo "            
\t\t\t\t";
                    // line 70
                    if (($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_UNREAD_TOPIC") && (!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)))) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_NEWEST_POST");
                        echo "\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("VIEW_NEWEST_POST");
                        echo "\"><i class=\"fa fa-file icon_topic_newest\"></i></a> ";
                    }
                    // line 71
                    echo "\t\t\t\t<a href=\"";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_VIEW_TOPIC");
                    echo "\" class=\"topictitle\">";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_TITLE");
                    echo "</a> ";
                    if ($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "ATTACH_ICON_IMG")) {
                        echo "<span class=\"tip\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("TOTAL_ATTACHMENTS");
                        echo "\"><i class=\"fa fa-paperclip\"></i></span> ";
                    }
                    // line 72
                    echo "\t\t\t\t";
                    if (($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_TOPIC_UNAPPROVED") || $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_POSTS_UNAPPROVED"))) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_MCP_QUEUE");
                        echo "\" title=\"";
                        if ($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_TOPIC_UNAPPROVED")) {
                            echo $this->env->getExtension('phpbb')->lang("TOPIC_UNAPPROVED");
                        } else {
                            echo $this->env->getExtension('phpbb')->lang("POSTS_UNAPPROVED");
                        }
                        echo "\"><i class=\"fa fa-flag\"></i></a> ";
                    }
                    // line 73
                    echo "\t\t\t\t";
                    if ($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_TOPIC_DELETED")) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_MCP_QUEUE");
                        echo "\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("TOPIC_DELETED");
                        echo "\"><i class=\"fa fa-recycle\"></i></a> ";
                    }
                    // line 74
                    echo "\t\t\t\t";
                    if ($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_TOPIC_REPORTED")) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_MCP_REPORT");
                        echo "\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("TOPIC_REPORTED");
                        echo "\"><i class=\"fa fa-exclamation-triangle\"></i></a>";
                    }
                    echo "<br />
            
\t\t\t\t";
                    // line 76
                    if ($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_HAS_POLL")) {
                        echo "<i class=\"fa fa-bar-chart tip\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("TOPIC_POLL");
                        echo "\"></i> ";
                    }
                    // line 77
                    echo "\t\t\t\t";
                    echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                    echo " ";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_AUTHOR_FULL");
                    echo " &raquo; ";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "FIRST_POST_TIME");
                    echo " &raquo; ";
                    echo $this->env->getExtension('phpbb')->lang("IN");
                    echo " <a href=\"";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_VIEW_FORUM");
                    echo "\">";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "FORUM_TITLE");
                    echo "</a>
\t\t\t\t";
                    // line 78
                    // line 79
                    echo "
\t\t\t</div>

\t\t\t<div class=\"col-md-1 visible-lg visible-md text-center\">";
                    // line 82
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_REPLIES");
                    echo "</div>
\t\t\t<div class=\"col-md-1 visible-lg visible-md text-center\">";
                    // line 83
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_VIEWS");
                    echo "</div>
\t\t\t<div class=\"col-md-3 col-sm-4 hidden-xs\">
\t\t\t\t";
                    // line 85
                    echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                    echo " ";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "LAST_POST_AUTHOR_FULL");
                    echo "
\t\t\t\t";
                    // line 86
                    if ((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null))) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_LAST_POST");
                        echo "\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("GOTO_LAST_POST");
                        echo "\"><i class=\"fa fa-arrow-";
                        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                        echo "\"></i></a> ";
                    }
                    echo "<br />";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "LAST_POST_TIME");
                    echo "
\t\t\t</div>
\t\t</div>
\t\t";
                    // line 89
                    // line 90
                    echo "\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['searchresults'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 91
                echo "\t</div>
\t";
            } else {
                // line 93
                echo "\t\t<div class=\"alert alert-info\">
\t\t\t";
                // line 94
                echo $this->env->getExtension('phpbb')->lang("NO_SEARCH_RESULTS");
                echo "
\t\t</div>
\t";
            }
            // line 97
            echo "
";
        } else {
            // line 99
            echo "
\t";
            // line 100
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "searchresults"));
            $context['_iterated'] = false;
            foreach ($context['_seq'] as $context["_key"] => $context["searchresults"]) {
                // line 101
                echo "\t\t";
                // line 102
                echo "\t";
                if ($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_IGNORE_POST")) {
                    // line 103
                    echo "\t<div class=\"panel panel-default\">
\t\t<div class=\"panel-body\">
\t\t\t";
                    // line 105
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "L_IGNORE_POST");
                    echo "
\t\t</div>
\t</div>
\t";
                } else {
                    // line 109
                    echo "
\t<div class=\"panel panel-primary\">
\t\t<div class=\"panel-heading\">
\t\t\t<h4 class=\"panel-title\"><a href=\"";
                    // line 112
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_VIEW_POST");
                    echo "\">";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "POST_SUBJECT");
                    echo "</a></h4>
\t\t</div>
\t\t<div class=\"post panel-body";
                    // line 114
                    if ($this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "S_POST_REPORTED")) {
                        echo " alert-danger";
                    }
                    echo "\">

\t\t<dl class=\"postprofile col-md-3 col-sm-4 col-xs-12\">
\t\t\t";
                    // line 117
                    // line 118
                    echo "\t\t\t<dt class=\"author\">";
                    echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                    echo " ";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "POST_AUTHOR_FULL");
                    echo "</dt>
\t\t\t<dd class=\"search-result-date\">";
                    // line 119
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "POST_DATE");
                    echo "</dd>
\t\t\t<dd>";
                    // line 120
                    echo $this->env->getExtension('phpbb')->lang("FORUM");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " <a href=\"";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_VIEW_FORUM");
                    echo "\">";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "FORUM_TITLE");
                    echo "</a></dd>
\t\t\t<dd>";
                    // line 121
                    echo $this->env->getExtension('phpbb')->lang("TOPIC");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " <a href=\"";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_VIEW_TOPIC");
                    echo "\">";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_TITLE");
                    echo "</a></dd>
\t\t\t<dd>";
                    // line 122
                    echo $this->env->getExtension('phpbb')->lang("REPLIES");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " <strong>";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_REPLIES");
                    echo "</strong></dd>
\t\t\t<dd>";
                    // line 123
                    echo $this->env->getExtension('phpbb')->lang("VIEWS");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " <strong>";
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "TOPIC_VIEWS");
                    echo "</strong></dd>
\t\t\t";
                    // line 124
                    // line 125
                    echo "\t\t</dl>

\t\t<div class=\"postbody col-md-9 col-sm-8 col-xs-12\">
\t\t\t<div class=\"content\">";
                    // line 128
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "MESSAGE");
                    echo "</div>
\t\t</div>

\t\t</div>

\t\t<div class=\"panel-footer text-";
                    // line 133
                    echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                    echo "\">
\t\t\t<a href=\"";
                    // line 134
                    echo $this->getAttribute((isset($context["searchresults"]) ? $context["searchresults"] : null), "U_VIEW_POST");
                    echo "\" class=\"arrow-";
                    echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                    echo "\">";
                    echo $this->env->getExtension('phpbb')->lang("JUMP_TO_POST");
                    echo " <i class=\"fa fa-angle-";
                    echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                    echo "\"></i></a>
\t\t</div>
\t</div>

\t";
                }
                // line 139
                echo "\t\t";
                // line 140
                echo "\t";
                $context['_iterated'] = true;
            }
            if (!$context['_iterated']) {
                // line 141
                echo "\t\t<div class=\"alert alert-info\">
\t\t\t";
                // line 142
                echo $this->env->getExtension('phpbb')->lang("NO_SEARCH_RESULTS");
                echo "
\t\t</div>
\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['searchresults'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        }
        // line 146
        echo "
";
        // line 147
        if ((((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination")) || twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "searchresults"))) || (isset($context["S_SELECT_SORT_KEY"]) ? $context["S_SELECT_SORT_KEY"] : null)) || (isset($context["S_SELECT_SORT_DAYS"]) ? $context["S_SELECT_SORT_DAYS"] : null))) {
            // line 148
            echo "\t<form method=\"post\" action=\"";
            echo (isset($context["S_SEARCH_ACTION"]) ? $context["S_SEARCH_ACTION"] : null);
            echo "\">

\t<fieldset class=\"panel-group text-center\">
\t\t";
            // line 151
            if (((isset($context["S_SELECT_SORT_DAYS"]) ? $context["S_SELECT_SORT_DAYS"] : null) || (isset($context["S_SELECT_SORT_KEY"]) ? $context["S_SELECT_SORT_KEY"] : null))) {
                // line 152
                echo "\t\t\t<label>";
                if ((isset($context["S_SHOW_TOPICS"]) ? $context["S_SHOW_TOPICS"] : null)) {
                    echo $this->env->getExtension('phpbb')->lang("DISPLAY_POSTS");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                } else {
                    echo $this->env->getExtension('phpbb')->lang("SORT_BY");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                }
                echo "</label> ";
                echo (isset($context["S_SELECT_SORT_DAYS"]) ? $context["S_SELECT_SORT_DAYS"] : null);
                if ((isset($context["S_SELECT_SORT_KEY"]) ? $context["S_SELECT_SORT_KEY"] : null)) {
                    echo " ";
                    echo (isset($context["S_SELECT_SORT_KEY"]) ? $context["S_SELECT_SORT_KEY"] : null);
                    echo " ";
                    echo (isset($context["S_SELECT_SORT_DIR"]) ? $context["S_SELECT_SORT_DIR"] : null);
                }
                // line 153
                echo "\t\t\t<input type=\"submit\" name=\"sort\" value=\"";
                echo $this->env->getExtension('phpbb')->lang("GO");
                echo "\" class=\"btn btn-default\" />
\t\t";
            }
            // line 155
            echo "\t</fieldset>

\t</form>
";
        }
        // line 159
        echo "
";
        // line 160
        if (((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination")) || twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "searchresults"))) || (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null))) {
            // line 161
            echo "\t<div class=\"pages clearfix\">
\t\t";
            // line 162
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                // line 163
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
                // line 164
                echo "\t\t";
            }
            // line 165
            echo "\t\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 166
            echo (isset($context["SEARCH_MATCHES"]) ? $context["SEARCH_MATCHES"] : null);
            echo "</span>
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 167
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t\t</div>
\t</div>
";
        }
        // line 171
        echo "
";
        // line 172
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
        // line 173
        echo "
";
        // line 174
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
        return "search_results.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  674 => 174,  671 => 173,  659 => 172,  656 => 171,  649 => 167,  645 => 166,  640 => 165,  637 => 164,  624 => 163,  622 => 162,  619 => 161,  617 => 160,  614 => 159,  608 => 155,  602 => 153,  585 => 152,  583 => 151,  576 => 148,  574 => 147,  571 => 146,  561 => 142,  558 => 141,  553 => 140,  551 => 139,  537 => 134,  533 => 133,  525 => 128,  520 => 125,  519 => 124,  512 => 123,  505 => 122,  496 => 121,  487 => 120,  483 => 119,  476 => 118,  475 => 117,  467 => 114,  460 => 112,  455 => 109,  448 => 105,  444 => 103,  441 => 102,  439 => 101,  434 => 100,  431 => 99,  427 => 97,  421 => 94,  418 => 93,  414 => 91,  408 => 90,  407 => 89,  391 => 86,  385 => 85,  380 => 83,  376 => 82,  371 => 79,  370 => 78,  355 => 77,  349 => 76,  337 => 74,  328 => 73,  315 => 72,  304 => 71,  296 => 70,  293 => 69,  289 => 67,  283 => 66,  273 => 64,  267 => 62,  259 => 61,  256 => 60,  252 => 59,  247 => 58,  244 => 57,  242 => 56,  236 => 55,  225 => 54,  215 => 53,  213 => 52,  209 => 51,  203 => 48,  199 => 47,  195 => 46,  191 => 45,  187 => 43,  185 => 42,  182 => 41,  180 => 40,  173 => 36,  169 => 35,  164 => 34,  161 => 33,  148 => 32,  146 => 31,  141 => 28,  130 => 22,  126 => 21,  121 => 19,  116 => 17,  111 => 16,  109 => 15,  106 => 14,  92 => 12,  80 => 10,  78 => 9,  74 => 7,  68 => 6,  59 => 5,  50 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
