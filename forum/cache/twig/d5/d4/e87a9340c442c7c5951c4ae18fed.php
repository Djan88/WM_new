<?php

/* ucp_pm_history.html */
class __TwigTemplate_d5d4e87a9340c442c7c5951c4ae18fed extends Twig_Template
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
        echo "
<div id=\"review\" class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<span class=\"pull-";
        // line 4
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
        // line 5
        echo $this->env->getExtension('phpbb')->lang("MESSAGE_HISTORY");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</h4>
\t</div>

\t<div id=\"topicreview\" class=\"panel-body\">
\t\t<script type=\"text/javascript\">
\t\t// <![CDATA[
\t\t\tbbcodeEnabled = ";
        // line 11
        echo (isset($context["S_BBCODE_ALLOWED"]) ? $context["S_BBCODE_ALLOWED"] : null);
        echo ";
\t\t// ]]>
\t\t</script>
\t\t";
        // line 14
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "history_row"));
        foreach ($context['_seq'] as $context["_key"] => $context["history_row"]) {
            // line 15
            echo "\t\t<div class=\"panel panel-default\">
\t\t\t<div class=\"panel-heading\">
\t\t\t\t<h4 class=\"panel-title\"><a href=\"";
            // line 17
            echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "U_VIEW_MESSAGE");
            echo "\" ";
            if ($this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "S_CURRENT_MSG")) {
                echo "class=\"label label-info\"";
            }
            echo ">";
            echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "SUBJECT");
            echo "</a></h4>
\t\t\t</div>
\t\t\t<div class=\"panel-body\">

\t\t\t<div class=\"postbody\" id=\"pr";
            // line 21
            echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "MSG_ID");
            echo "\">

\t\t\t<div class=\"panel-group post-buttons clearfix\">
\t\t\t\t";
            // line 24
            echo $this->env->getExtension('phpbb')->lang("MESSAGE_BY_AUTHOR");
            echo " ";
            echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "MESSAGE_AUTHOR_FULL");
            echo " &raquo; ";
            echo $this->env->getExtension('phpbb')->lang("SENT_AT");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " <strong>";
            echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "SENT_DATE");
            echo "</strong>

\t\t\t\t";
            // line 26
            if (($this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "U_QUOTE") || $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "MESSAGE_AUTHOR_QUOTE"))) {
                // line 27
                echo "\t\t\t\t<div class=\"btn-toolbar pull-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\">
\t\t\t\t\t<div class=\"btn-group\">
\t\t\t\t\t\t<a ";
                // line 29
                if ($this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "U_QUOTE")) {
                    echo "href=\"";
                    echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "U_QUOTE");
                    echo "\"";
                } else {
                    echo "href=\"#postingbox\" onclick=\"addquote(";
                    echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "MSG_ID");
                    echo ", '";
                    echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "MESSAGE_AUTHOR_QUOTE");
                    echo "', '";
                    echo addslashes($this->env->getExtension('phpbb')->lang("WROTE"));
                    echo "');\"";
                }
                echo " title=\"";
                echo $this->env->getExtension('phpbb')->lang("QUOTE");
                echo " ";
                echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "MESSAGE_AUTHOR");
                echo "\" class=\"btn btn-success\"><i class=\"fa fa-quote-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo " fa-fw\"></i><span>";
                echo $this->env->getExtension('phpbb')->lang("QUOTE");
                echo " ";
                echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "MESSAGE_AUTHOR");
                echo "</span></a>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t";
            }
            // line 33
            echo "\t\t\t</div>

\t\t\t\t<div class=\"content\">";
            // line 35
            if ($this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "MESSAGE")) {
                echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "MESSAGE");
            } else {
                echo "<span class=\"alert alert-warning\">";
                echo $this->env->getExtension('phpbb')->lang("MESSAGE_REMOVED_FROM_OUTBOX");
                echo "</span>";
            }
            echo "</div>
\t\t\t\t<div id=\"message_";
            // line 36
            echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "MSG_ID");
            echo "\" style=\"display: none;\">";
            echo $this->getAttribute((isset($context["history_row"]) ? $context["history_row"] : null), "DECODED_MESSAGE");
            echo "</div>
\t\t\t</div>

\t\t\t</div>
\t\t</div>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['history_row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 42
        echo "\t</div>

\t<div class=\"panel-footer text-";
        // line 44
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo "\">
\t\t<a href=\"#cp-main\" title=\"";
        // line 45
        echo $this->env->getExtension('phpbb')->lang("BACK_TO_TOP");
        echo "\"><i class=\"fa fa-chevron-up\"></i></a>
\t</div>
</div>
";
    }

    public function getTemplateName()
    {
        return "ucp_pm_history.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  166 => 45,  162 => 44,  158 => 42,  144 => 36,  134 => 35,  130 => 33,  101 => 29,  95 => 27,  93 => 26,  81 => 24,  62 => 17,  58 => 15,  54 => 14,  48 => 11,  285 => 83,  281 => 81,  278 => 80,  273 => 77,  266 => 75,  257 => 74,  245 => 73,  242 => 72,  238 => 71,  232 => 69,  229 => 68,  226 => 67,  219 => 62,  211 => 61,  207 => 60,  201 => 56,  199 => 55,  194 => 54,  191 => 53,  188 => 52,  183 => 49,  176 => 47,  167 => 46,  155 => 45,  152 => 44,  148 => 43,  142 => 41,  139 => 40,  136 => 39,  131 => 36,  124 => 34,  115 => 33,  100 => 31,  96 => 30,  90 => 28,  87 => 27,  82 => 25,  76 => 21,  75 => 21,  68 => 19,  67 => 18,  59 => 16,  52 => 13,  43 => 10,  37 => 7,  32 => 6,  29 => 5,  27 => 4,  180 => 32,  177 => 31,  163 => 30,  160 => 29,  146 => 28,  143 => 27,  129 => 26,  123 => 22,  110 => 21,  107 => 20,  103 => 32,  91 => 17,  85 => 26,  80 => 11,  66 => 10,  63 => 17,  49 => 12,  46 => 11,  41 => 5,  36 => 4,  34 => 3,  31 => 2,  38 => 5,  24 => 4,  22 => 2,  19 => 1,);
    }
}
