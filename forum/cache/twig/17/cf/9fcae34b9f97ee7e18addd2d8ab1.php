<?php

/* ucp_main_front.html */
class __TwigTemplate_17cf9fcae34b9f97ee7e18addd2d8ab1 extends Twig_Template
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
<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 5
        echo $this->env->getExtension('phpbb')->lang("TITLE");
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t<p>";
        // line 9
        echo $this->env->getExtension('phpbb')->lang("UCP_WELCOME");
        echo "</p>

";
        // line 11
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow"))) {
            // line 12
            echo "\t<div class=\"panel panel-default\">
\t<div class=\"clearfix\">
\t\t<h4 class=\"col-md-9 col-sm-8 col-xs-12\">";
            // line 14
            echo $this->env->getExtension('phpbb')->lang("IMPORTANT_NEWS");
            echo "</h4>
\t\t<h5 class=\"col-md-3 col-sm-4 hidden-xs\">";
            // line 15
            echo $this->env->getExtension('phpbb')->lang("LAST_POST");
            echo "</h5>
\t</div>
\t";
            // line 17
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topicrow"));
            foreach ($context['_seq'] as $context["_key"] => $context["topicrow"]) {
                // line 18
                echo "\t\t<div class=\"clearfix icon ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_IMG_STYLE");
                if (($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_ROW_COUNT") % 2 == 1)) {
                    echo " bg1";
                } else {
                    echo " bg2";
                }
                echo "\">
\t\t\t<div class=\"folder col-md-9 col-sm-8 col-xs-12\"";
                // line 19
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ICON_IMG")) {
                    echo " style=\"background-image: url(";
                    echo (isset($context["T_ICONS_PATH"]) ? $context["T_ICONS_PATH"] : null);
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_ICON_IMG");
                    echo ");\"";
                }
                echo ">

\t\t\t";
                // line 21
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_UNREAD_TOPIC")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_NEWEST_POST");
                    echo "\" class=\"icon-link\"></a>";
                }
                // line 22
                echo "\t\t\t\t";
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "S_UNREAD")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_NEWEST_POST");
                    echo "\">";
                    echo (isset($context["NEWEST_POST_IMG"]) ? $context["NEWEST_POST_IMG"] : null);
                    echo "</a> ";
                }
                echo "<a href=\"";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_VIEW_TOPIC");
                echo "\" class=\"topictitle\">";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "TOPIC_TITLE");
                echo "</a><br />
\t\t\t\t";
                // line 23
                if (twig_length_filter($this->env, $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "pagination"))) {
                    // line 24
                    echo "\t\t\t\t<ul class=\"pagination\">
\t\t\t\t";
                    // line 25
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "pagination"));
                    foreach ($context['_seq'] as $context["_key"] => $context["pagination"]) {
                        // line 26
                        echo "\t\t\t\t\t";
                        if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_PREV")) {
                            // line 27
                            echo "\t\t\t\t\t";
                        } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_CURRENT")) {
                            echo "<li class=\"active\"><span>";
                            echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                            echo "</span></li>
\t\t\t\t\t";
                        } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_ELLIPSIS")) {
                            // line 28
                            echo "<li class=\"ellipsis disabled\"><span>";
                            echo $this->env->getExtension('phpbb')->lang("ELLIPSIS");
                            echo "</span></li>
\t\t\t\t\t";
                        } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_NEXT")) {
                            // line 30
                            echo "\t\t\t\t\t";
                        } else {
                            echo "<li><a href=\"";
                            echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                            echo "\">";
                            echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                            echo "</a></li>
\t\t\t\t\t";
                        }
                        // line 32
                        echo "\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['pagination'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 33
                    echo "\t\t\t\t</ul>
\t\t\t\t";
                }
                // line 35
                echo "\t\t\t\t<div class=\"hidden-xs\">
\t\t\t\t\t";
                // line 36
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "ATTACH_ICON_IMG")) {
                    echo "<span class=\"tip\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("TOTAL_ATTACHMENTS");
                    echo "\"><i class=\"fa fa-paperclip\"></i></span> ";
                }
                // line 37
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
                // line 40
                if ($this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "ATTACH_ICON_IMG")) {
                    echo "<span class=\"tip\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("TOTAL_ATTACHMENTS");
                    echo "\"><i class=\"fa fa-paperclip\"></i></span> ";
                }
                // line 41
                echo "\t\t\t\t\t";
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
\t\t\t\t</div>
\t\t\t</div>

\t\t\t<div class=\"col-md-3 col-sm-4 hidden-xs\">
\t\t\t\t";
                // line 46
                echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                echo " ";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_AUTHOR_FULL");
                echo "
\t\t\t\t<a href=\"";
                // line 47
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "U_LAST_POST");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("GOTO_LAST_POST");
                echo "\"><i class=\"fa fa-arrow-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\"></i></a> <br />";
                echo $this->getAttribute((isset($context["topicrow"]) ? $context["topicrow"] : null), "LAST_POST_TIME");
                echo "
\t\t\t</div>
\t\t</div>
\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['topicrow'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        }
        // line 52
        echo "\t</div>

\t<h4>";
        // line 54
        echo $this->env->getExtension('phpbb')->lang("YOUR_DETAILS");
        echo "</h4>

\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\">";
        // line 57
        echo $this->env->getExtension('phpbb')->lang("JOINED");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\">";
        // line 58
        echo (isset($context["JOINED"]) ? $context["JOINED"] : null);
        echo "</dd>
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\">";
        // line 59
        echo $this->env->getExtension('phpbb')->lang("LAST_ACTIVE");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\">";
        // line 60
        echo (isset($context["LAST_VISIT_YOU"]) ? $context["LAST_VISIT_YOU"] : null);
        echo "</dd>
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\">";
        // line 61
        echo $this->env->getExtension('phpbb')->lang("TOTAL_POSTS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\">";
        // line 62
        if ((isset($context["POSTS_PCT"]) ? $context["POSTS_PCT"] : null)) {
            echo (isset($context["POSTS"]) ? $context["POSTS"] : null);
            if ((isset($context["S_DISPLAY_SEARCH"]) ? $context["S_DISPLAY_SEARCH"] : null)) {
                echo " | <strong><a href=\"";
                echo (isset($context["U_SEARCH_USER"]) ? $context["U_SEARCH_USER"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("SEARCH_YOUR_POSTS");
                echo "</a></strong>";
            }
            echo "<br />(";
            echo (isset($context["POSTS_DAY"]) ? $context["POSTS_DAY"] : null);
            echo " / ";
            echo (isset($context["POSTS_PCT"]) ? $context["POSTS_PCT"] : null);
            echo ")";
        } else {
            echo (isset($context["POSTS"]) ? $context["POSTS"] : null);
        }
        echo "</dd>
\t\t";
        // line 63
        if (((isset($context["ACTIVE_FORUM"]) ? $context["ACTIVE_FORUM"] : null) != "")) {
            // line 64
            echo "\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\">";
            echo $this->env->getExtension('phpbb')->lang("ACTIVE_IN_FORUM");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\"><strong><a href=\"";
            // line 65
            echo (isset($context["U_ACTIVE_FORUM"]) ? $context["U_ACTIVE_FORUM"] : null);
            echo "\">";
            echo (isset($context["ACTIVE_FORUM"]) ? $context["ACTIVE_FORUM"] : null);
            echo "</a></strong><br />(";
            echo (isset($context["ACTIVE_FORUM_POSTS"]) ? $context["ACTIVE_FORUM_POSTS"] : null);
            echo " / ";
            echo (isset($context["ACTIVE_FORUM_PCT"]) ? $context["ACTIVE_FORUM_PCT"] : null);
            echo ")</dd>
\t\t";
        }
        // line 67
        echo "\t\t";
        if (((isset($context["ACTIVE_TOPIC"]) ? $context["ACTIVE_TOPIC"] : null) != "")) {
            // line 68
            echo "\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\">";
            echo $this->env->getExtension('phpbb')->lang("ACTIVE_IN_TOPIC");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\"><strong><a href=\"";
            // line 69
            echo (isset($context["U_ACTIVE_TOPIC"]) ? $context["U_ACTIVE_TOPIC"] : null);
            echo "\">";
            echo (isset($context["ACTIVE_TOPIC"]) ? $context["ACTIVE_TOPIC"] : null);
            echo "</a></strong><br />(";
            echo (isset($context["ACTIVE_TOPIC_POSTS"]) ? $context["ACTIVE_TOPIC_POSTS"] : null);
            echo " / ";
            echo (isset($context["ACTIVE_TOPIC_PCT"]) ? $context["ACTIVE_TOPIC_PCT"] : null);
            echo ")</dd>";
        }
        // line 70
        echo "\t\t";
        if ((isset($context["WARNINGS"]) ? $context["WARNINGS"] : null)) {
            // line 71
            echo "\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\">";
            echo $this->env->getExtension('phpbb')->lang("YOUR_WARNINGS");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\"><strong class=\"label label-warning\">";
            // line 72
            echo (isset($context["WARNINGS"]) ? $context["WARNINGS"] : null);
            echo "</strong></dd>
\t\t";
        }
        // line 74
        echo "\t</dl>

\t</div>
</div>

";
        // line 79
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
        return "ucp_main_front.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  334 => 79,  327 => 74,  322 => 72,  316 => 71,  313 => 70,  303 => 69,  297 => 68,  294 => 67,  283 => 65,  277 => 64,  275 => 63,  255 => 62,  250 => 61,  246 => 60,  241 => 59,  237 => 58,  232 => 57,  226 => 54,  222 => 52,  205 => 47,  199 => 46,  180 => 41,  174 => 40,  163 => 37,  157 => 36,  154 => 35,  150 => 33,  144 => 32,  134 => 30,  128 => 28,  120 => 27,  117 => 26,  113 => 25,  110 => 24,  108 => 23,  93 => 22,  87 => 21,  77 => 19,  67 => 18,  63 => 17,  58 => 15,  54 => 14,  50 => 12,  48 => 11,  43 => 9,  36 => 5,  31 => 2,  19 => 1,);
    }
}
