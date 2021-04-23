<?php

/* ucp_main_bookmarks.html */
class __TwigTemplate_aa47d8b33b2800174651190d877585f4 extends Twig_Template
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

\t<p>";
        // line 11
        echo $this->env->getExtension('phpbb')->lang("BOOKMARKS_EXPLAIN");
        echo "</p>

";
        // line 13
        if ((isset($context["S_NO_DISPLAY_BOOKMARKS"]) ? $context["S_NO_DISPLAY_BOOKMARKS"] : null)) {
            // line 14
            echo "\t<div class=\"alert alert-warning\">";
            echo $this->env->getExtension('phpbb')->lang("BOOKMARKS_DISABLED");
            echo "</div>
";
        } else {
            // line 16
            echo "
";
            // line 17
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow"))) {
                // line 18
                echo "\t<div class=\"panel panel-default\">
\t\t<div class=\"clearfix\">
\t\t\t<h4 class=\"col-md-8 col-sm-7 col-xs-10\">";
                // line 20
                echo $this->env->getExtension('phpbb')->lang("BOOKMARKS");
                echo "</h4>
\t\t";
                // line 21
                if ((!$this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_DELETED_TOPIC"))) {
                    // line 22
                    echo "\t\t\t<h5 class=\"col-md-3 col-sm-4 hidden-xs\">";
                    echo $this->env->getExtension('phpbb')->lang("LAST_POST");
                    echo "</h5>
\t\t";
                }
                // line 24
                echo "\t\t\t<h5 class=\"col-md-1 col-sm-1 col-xs-2 text-center\">";
                echo $this->env->getExtension('phpbb')->lang("MARK");
                echo "</h5>
\t\t</div>

\t";
                // line 27
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow"));
                foreach ($context['_seq'] as $context["_key"] => $context["topicrow"]) {
                    // line 28
                    echo "\t\t<div class=\"clearfix icon ";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_IMG_STYLE");
                    if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_REPORTED")) {
                        echo " alert-danger";
                    } elseif (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_ROW_COUNT") % 2 == 1)) {
                        echo " bg1";
                    } else {
                        echo " bg2";
                    }
                    echo "\">
\t\t\t";
                    // line 29
                    if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_DELETED_TOPIC")) {
                        // line 30
                        echo "\t\t\t<div class=\"icon alert-warning\">
\t\t\t\t<div class=\"col-md-11 pull-";
                        // line 31
                        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                        echo "\">
\t\t\t\t\t";
                        // line 32
                        echo $this->env->getExtension('phpbb')->lang("DELETED_TOPIC");
                        echo "
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-1 text-center\"><input type=\"checkbox\" name=\"t[";
                        // line 34
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ID");
                        echo "]\" id=\"t";
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ID");
                        echo "\" /></div>
\t\t\t</div>
\t\t\t";
                    } else {
                        // line 37
                        echo "\t\t\t<div class=\"folder col-md-8 col-sm-7 col-xs-10\"";
                        if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ICON_IMG")) {
                            echo " style=\"background-image: url(";
                            echo (isset($context["T_ICONS_PATH"]) ? $context["T_ICONS_PATH"] : null);
                            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ICON_IMG");
                            echo ");\"";
                        }
                        echo " title=\"";
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_FOLDER_IMG_ALT");
                        echo "\">
\t\t\t\t";
                        // line 38
                        if (twig_length_filter($this->env, $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "pagination"))) {
                            // line 39
                            echo "\t\t\t\t<ul class=\"pagination pull-";
                            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                            echo "\">
\t\t\t\t";
                            // line 40
                            $context['_parent'] = (array) $context;
                            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "pagination"));
                            foreach ($context['_seq'] as $context["_key"] => $context["pagination"]) {
                                // line 41
                                echo "\t\t\t\t\t";
                                if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_PREV")) {
                                    // line 42
                                    echo "\t\t\t\t\t";
                                } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_CURRENT")) {
                                    echo "<li class=\"active\"><span>";
                                    echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                                    echo "</span></li>
\t\t\t\t\t";
                                } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_ELLIPSIS")) {
                                    // line 43
                                    echo "<li class=\"ellipsis disabled\"><span>";
                                    echo $this->env->getExtension('phpbb')->lang("ELLIPSIS");
                                    echo "</span></li>
\t\t\t\t\t";
                                } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_NEXT")) {
                                    // line 45
                                    echo "\t\t\t\t\t";
                                } else {
                                    echo "<li><a href=\"";
                                    echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                                    echo "\">";
                                    echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                                    echo "</a></li>
\t\t\t\t\t";
                                }
                                // line 47
                                echo "\t\t\t\t";
                            }
                            $_parent = $context['_parent'];
                            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['pagination'], $context['_parent'], $context['loop']);
                            $context = array_intersect_key($context, $_parent) + $_parent;
                            // line 48
                            echo "\t\t\t\t</ul>
\t\t\t\t";
                        }
                        // line 50
                        echo "\t\t\t\t";
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
\t\t\t\t";
                        // line 51
                        if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_TOPIC_UNAPPROVED") || $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_POSTS_UNAPPROVED"))) {
                            echo "<a href=\"";
                            echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_MCP_QUEUE");
                            echo "\" title=\"";
                            echo $this->env->getExtension('phpbb')->lang("TOPIC_UNAPPROVED");
                            echo "\"><i class=\"fa fa-flag\"></i></a> ";
                        }
                        // line 52
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
                        // line 55
                        if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "ATTACH_ICON_IMG")) {
                            echo "<span class=\"tip\" title=\"";
                            echo $this->env->getExtension('phpbb')->lang("TOTAL_ATTACHMENTS");
                            echo "\"><i class=\"fa fa-paperclip\"></i></span> ";
                        }
                        // line 56
                        echo "\t\t\t\t\t";
                        echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                        echo " ";
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_AUTHOR_FULL");
                        echo " &raquo; ";
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "FIRST_POST_TIME");
                        echo "
\t\t\t\t</div>
\t\t\t\t<div class=\"visible-xs\">
\t\t\t\t\t";
                        // line 59
                        if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "ATTACH_ICON_IMG")) {
                            echo "<span class=\"tip\" title=\"";
                            echo $this->env->getExtension('phpbb')->lang("TOTAL_ATTACHMENTS");
                            echo "\"><i class=\"fa fa-paperclip\"></i></span> ";
                        }
                        // line 60
                        echo "\t\t\t\t\t";
                        echo $this->env->getExtension('phpbb')->lang("LAST_POST");
                        echo " ";
                        echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                        echo " ";
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_AUTHOR_FULL");
                        echo " &laquo;
\t\t\t\t\t<a href=\"";
                        // line 61
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_LAST_POST");
                        echo "\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("GOTO_LAST_POST");
                        echo "\">";
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_TIME");
                        echo "</a>
\t\t\t\t</div>
\t\t\t</div>

\t\t\t<div class=\"col-md-3 col-sm-4 hidden-xs\">
\t\t\t\t";
                        // line 66
                        echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                        echo " ";
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_AUTHOR_FULL");
                        echo "
\t\t\t\t<a href=\"";
                        // line 67
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_LAST_POST");
                        echo "\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("GOTO_LAST_POST");
                        echo "\"><i class=\"fa fa-arrow-";
                        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                        echo "\"></i></a> <br />";
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_TIME");
                        echo "
\t\t\t</div>
\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-2 text-center\">
\t\t\t\t<input type=\"checkbox\" name=\"t[";
                        // line 70
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ID");
                        echo "]\" id=\"t";
                        echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ID");
                        echo "\" />
\t\t\t</div>
\t\t\t";
                    }
                    // line 73
                    echo "\t\t</div>
\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['topicrow'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 75
                echo "\t</div>

";
            } else {
                // line 78
                echo "\t<div class=\"alert alert-info\">
\t\t";
                // line 79
                echo $this->env->getExtension('phpbb')->lang("NO_BOOKMARKS");
                echo "
\t</div>
";
            }
            // line 82
            echo "
";
        }
        // line 84
        echo "
";
        // line 85
        if ((twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow")) && (!(isset($context["S_NO_DISPLAY_BOOKMARKS"]) ? $context["S_NO_DISPLAY_BOOKMARKS"] : null)))) {
            // line 86
            echo "\t<fieldset class=\"panel-group text-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t<div class=\"btn-group\">
\t\t\t<a href=\"#\" onclick=\"marklist('ucp', '', false); return false;\" class=\"btn btn-warning\">";
            // line 88
            echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
            echo "</a>
\t\t\t<input type=\"submit\" name=\"unbookmark\" value=\"";
            // line 89
            echo $this->env->getExtension('phpbb')->lang("REMOVE_BOOKMARK_MARKED");
            echo "\" class=\"btn btn-default\" />
\t\t\t<a href=\"#\" onclick=\"marklist('ucp', '', true); return false;\" class=\"btn btn-info\">";
            // line 90
            echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
            echo "</a>
\t\t</div>
\t\t";
            // line 92
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t</fieldset>

\t<div class=\"pages clearfix\">
\t\t";
            // line 96
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                echo " 
\t\t\t";
                // line 97
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
                // line 98
                echo "\t\t";
            }
            // line 99
            echo "\t\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 100
            echo (isset($context["TOTAL_TOPICS"]) ? $context["TOTAL_TOPICS"] : null);
            echo "</span>
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 101
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t\t</div>
\t</div>
";
        }
        // line 105
        echo "
\t</div>

</div>
</form>

";
        // line 111
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
        return "ucp_main_bookmarks.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  394 => 111,  386 => 105,  379 => 101,  375 => 100,  370 => 99,  367 => 98,  355 => 97,  351 => 96,  344 => 92,  339 => 90,  335 => 89,  331 => 88,  325 => 86,  323 => 85,  320 => 84,  316 => 82,  310 => 79,  307 => 78,  302 => 75,  295 => 73,  287 => 70,  275 => 67,  269 => 66,  257 => 61,  248 => 60,  242 => 59,  231 => 56,  225 => 55,  212 => 52,  204 => 51,  189 => 50,  185 => 48,  179 => 47,  169 => 45,  163 => 43,  155 => 42,  152 => 41,  148 => 40,  143 => 39,  141 => 38,  129 => 37,  121 => 34,  116 => 32,  112 => 31,  109 => 30,  107 => 29,  95 => 28,  91 => 27,  84 => 24,  78 => 22,  76 => 21,  72 => 20,  68 => 18,  66 => 17,  63 => 16,  57 => 14,  55 => 13,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
