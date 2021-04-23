<?php

/* posting_topic_review.html */
class __TwigTemplate_09b1d42b911496c0b4c0eebda96befdf extends Twig_Template
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
        echo "<div id=\"review\" class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<span class=\"pull-";
        // line 3
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
        // line 4
        echo $this->env->getExtension('phpbb')->lang("TOPIC_REVIEW");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo " ";
        echo (isset($context["TOPIC_TITLE"]) ? $context["TOPIC_TITLE"] : null);
        echo "</h4>
\t</div>

\t<div id=\"topicreview\" class=\"panel-body\">
\t<script type=\"text/javascript\">
\t// <![CDATA[
\t\tbbcodeEnabled = ";
        // line 10
        echo (isset($context["S_BBCODE_ALLOWED"]) ? $context["S_BBCODE_ALLOWED"] : null);
        echo ";
\t// ]]>
\t</script>
\t\t";
        // line 13
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topic_review_row"));
        foreach ($context['_seq'] as $context["_key"] => $context["topic_review_row"]) {
            // line 14
            echo "
\t\t";
            // line 15
            if ($this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "S_IGNORE_POST")) {
                // line 16
                echo "\t\t<div class=\"panel panel-default post-ignore\">
\t\t\t<div class=\"panel-body\">
\t\t\t\t";
                // line 18
                echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "L_IGNORE_POST");
                echo "
\t\t\t</div>
\t\t</div>
\t\t";
            } else {
                // line 22
                echo "\t\t<div class=\"panel panel-default";
                if (($this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POST_ID") == (isset($context["REPORTED_POST_ID"]) ? $context["REPORTED_POST_ID"] : null))) {
                    echo " panel-warning";
                }
                echo "\">
\t\t\t<div class=\"panel-heading\">
\t\t\t\t<h4 class=\"panel-title\"><a href=\"#pr";
                // line 24
                echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POST_ID");
                echo "\">";
                echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POST_SUBJECT");
                echo "</a></h4>
\t\t\t</div>
\t\t\t<div class=\"panel-body\">

\t\t\t\t<div class=\"postbody\" id=\"pr";
                // line 28
                echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POST_ID");
                echo "\">
\t\t\t\t\t<div class=\"panel-group post-buttons clearfix\">
\t\t\t\t\t\t";
                // line 30
                if ((isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) {
                    echo "<i class=\"fa fa-file-o\"></i>";
                } else {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "U_MINI_POST");
                    echo "\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("POST");
                    echo "\"><i class=\"fa fa-file-o\"></i></a>";
                }
                echo " ";
                echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                echo " <strong>";
                echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POST_AUTHOR_FULL");
                echo "</strong> &raquo; ";
                echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POST_DATE");
                echo "

\t\t\t\t\t\t";
                // line 32
                if ((($this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POSTER_QUOTE") && $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "DECODED_MESSAGE")) || $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "U_MCP_DETAILS"))) {
                    // line 33
                    echo "\t\t\t\t\t\t<div class=\"btn-toolbar pull-";
                    echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                    echo "\">
\t\t\t\t\t\t\t<div class=\"btn-group\">
\t\t\t\t\t\t";
                    // line 35
                    if ($this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "U_MCP_DETAILS")) {
                        // line 36
                        echo "\t\t\t\t\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "U_MCP_DETAILS");
                        echo "\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("POST_DETAILS");
                        echo "\" class=\"btn btn-info\"><i class=\"fa fa-info fa-fw\"></i><span>";
                        echo $this->env->getExtension('phpbb')->lang("POST_DETAILS");
                        echo "</span></a>
\t\t\t\t\t\t";
                    }
                    // line 38
                    echo "\t\t\t\t\t\t";
                    if (($this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POSTER_QUOTE") && $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "DECODED_MESSAGE"))) {
                        // line 39
                        echo "\t\t\t\t\t\t\t\t<a href=\"#postingbox\" onclick=\"addquote(";
                        echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POST_ID");
                        echo ", '";
                        echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POSTER_QUOTE");
                        echo "', '";
                        echo addslashes($this->env->getExtension('phpbb')->lang("WROTE"));
                        echo "');\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("QUOTE");
                        echo " ";
                        echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POST_AUTHOR");
                        echo "\" class=\"btn btn-success\"><i class=\"fa fa-quote-";
                        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                        echo " fa-fw\"></i><span>";
                        echo $this->env->getExtension('phpbb')->lang("QUOTE");
                        echo " ";
                        echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POST_AUTHOR");
                        echo "</span></a>
\t\t\t\t\t\t";
                    }
                    // line 41
                    echo "\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t";
                }
                // line 44
                echo "\t\t\t\t\t</div>

\t\t\t\t\t<div class=\"content\">";
                // line 46
                echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "MESSAGE");
                echo "</div>

\t\t\t\t\t";
                // line 48
                if ($this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "S_HAS_ATTACHMENTS")) {
                    // line 49
                    echo "\t\t\t\t\t\t<div class=\"attachbox pull-";
                    echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                    echo "\">
\t\t\t\t\t\t\t<p>";
                    // line 50
                    echo $this->env->getExtension('phpbb')->lang("ATTACHMENTS");
                    echo "</p>
\t\t\t\t\t\t\t";
                    // line 51
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "attachment"));
                    foreach ($context['_seq'] as $context["_key"] => $context["attachment"]) {
                        // line 52
                        echo "\t\t\t\t\t\t\t<div class=\"panel panel-default\">";
                        echo $this->getAttribute((isset($context["attachment"]) ? $context["attachment"] : null), "DISPLAY_ATTACHMENT");
                        echo "</div>
\t\t\t\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attachment'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 54
                    echo "\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"clearfix\"></div>
\t\t\t\t\t";
                }
                // line 57
                echo "
\t\t\t\t\t";
                // line 58
                if (($this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POSTER_QUOTE") && $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "DECODED_MESSAGE"))) {
                    // line 59
                    echo "\t\t\t\t\t\t<div id=\"message_";
                    echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "POST_ID");
                    echo "\" style=\"display: none;\">";
                    echo $this->getAttribute((isset($context["topic_review_row"]) ? $context["topic_review_row"] : null), "DECODED_MESSAGE");
                    echo "</div>
\t\t\t\t\t";
                }
                // line 61
                echo "\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t";
            }
            // line 65
            echo "\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['topic_review_row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 66
        echo "\t</div>

\t<div class=\"panel-footer text-";
        // line 68
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo "\">
\t";
        // line 69
        if ((isset($context["S_MCP_REPORT"]) ? $context["S_MCP_REPORT"] : null)) {
            // line 70
            echo "\t\t<a href=\"#report\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("BACK_TO_TOP");
            echo "\"><i class=\"fa fa-chevron-up\"></i></a>
\t";
        } else {
            // line 72
            echo "\t\t<a href=\"#postingbox\"><i class=\"fa fa-chevron-up\"></i></a>
\t";
        }
        // line 74
        echo "\t</div>
</div>
";
    }

    public function getTemplateName()
    {
        return "posting_topic_review.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  247 => 74,  243 => 72,  237 => 70,  235 => 69,  227 => 66,  221 => 65,  207 => 59,  205 => 58,  202 => 57,  197 => 54,  188 => 52,  180 => 50,  175 => 49,  173 => 48,  168 => 46,  139 => 39,  136 => 38,  124 => 35,  118 => 33,  116 => 32,  97 => 30,  92 => 28,  83 => 24,  68 => 18,  64 => 16,  59 => 14,  49 => 10,  37 => 4,  23 => 3,  171 => 72,  165 => 69,  148 => 63,  142 => 62,  135 => 60,  129 => 58,  125 => 57,  105 => 40,  90 => 31,  86 => 30,  82 => 29,  78 => 28,  69 => 24,  63 => 21,  50 => 15,  43 => 11,  39 => 10,  33 => 8,  24 => 4,  291 => 74,  286 => 71,  272 => 70,  269 => 69,  255 => 68,  252 => 67,  238 => 66,  231 => 68,  228 => 61,  215 => 61,  212 => 59,  206 => 56,  201 => 53,  187 => 52,  184 => 51,  172 => 44,  164 => 44,  159 => 41,  154 => 36,  150 => 35,  145 => 32,  143 => 31,  140 => 30,  126 => 36,  123 => 28,  109 => 27,  106 => 26,  101 => 39,  96 => 23,  94 => 22,  87 => 20,  84 => 19,  80 => 17,  75 => 22,  70 => 14,  62 => 15,  60 => 11,  57 => 10,  55 => 13,  52 => 8,  44 => 6,  36 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
