<?php

/* posting_preview.html */
class __TwigTemplate_795bf3a020347740e916efb4d8ef85e1 extends Twig_Template
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
        echo "<div class=\"panel panel-default\" id=\"preview\">

";
        // line 3
        if ((isset($context["S_HAS_POLL_OPTIONS"]) ? $context["S_HAS_POLL_OPTIONS"] : null)) {
            // line 4
            echo "\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
            // line 5
            echo $this->env->getExtension('phpbb')->lang("PREVIEW");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " ";
            echo (isset($context["POLL_QUESTION"]) ? $context["POLL_QUESTION"] : null);
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t<p class=\"author\">";
            // line 8
            if ((isset($context["L_POLL_LENGTH"]) ? $context["L_POLL_LENGTH"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("POLL_LENGTH");
                echo "<br />";
            }
            echo $this->env->getExtension('phpbb')->lang("MAX_VOTES");
            echo "</p>

\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<fieldset class=\"polls\">
\t\t\t";
            // line 12
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "poll_option"));
            foreach ($context['_seq'] as $context["_key"] => $context["poll_option"]) {
                // line 13
                echo "\t\t\t\t<span class=\"pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\">
\t\t\t\t";
                // line 14
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
                // line 15
                echo "\t\t\t\t</span>
\t\t\t\t<label for=\"vote_";
                // line 16
                echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_ID");
                echo "\">&nbsp;";
                echo $this->getAttribute((isset($context["poll_option"]) ? $context["poll_option"] : null), "POLL_OPTION_CAPTION");
                echo "</label>
\t\t\t\t<div class=\"clearfix\"></div>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['poll_option'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 19
            echo "\t\t\t</fieldset>
\t\t</div>
\t</div>

</div>

<div class=\"panel panel-default\">

";
        }
        // line 28
        echo "\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 29
        echo $this->env->getExtension('phpbb')->lang("PREVIEW");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo " ";
        echo (isset($context["PREVIEW_SUBJECT"]) ? $context["PREVIEW_SUBJECT"] : null);
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t<div class=\"postbody\">

\t\t\t<div class=\"content\">";
        // line 34
        echo (isset($context["PREVIEW_MESSAGE"]) ? $context["PREVIEW_MESSAGE"] : null);
        echo "</div>

\t\t\t";
        // line 36
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "attachment"))) {
            // line 37
            echo "\t\t\t<dl class=\"attachbox\">
\t\t\t\t<dt>";
            // line 38
            echo $this->env->getExtension('phpbb')->lang("ATTACHMENTS");
            echo "</dt>
\t\t\t\t";
            // line 39
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "attachment"));
            foreach ($context['_seq'] as $context["_key"] => $context["attachment"]) {
                // line 40
                echo "\t\t\t\t<dd class=\"panel panel-default\">";
                echo $this->getAttribute((isset($context["attachment"]) ? $context["attachment"] : null), "DISPLAY_ATTACHMENT");
                echo "</dd>
\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attachment'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 42
            echo "\t\t\t</dl>
\t\t\t";
        }
        // line 44
        echo "
\t\t\t";
        // line 45
        if ((isset($context["PREVIEW_SIGNATURE"]) ? $context["PREVIEW_SIGNATURE"] : null)) {
            echo "<div class=\"panel-footer\">";
            echo (isset($context["PREVIEW_SIGNATURE"]) ? $context["PREVIEW_SIGNATURE"] : null);
            echo "</div>";
        }
        // line 46
        echo "\t\t</div>
\t</div>
</div>
";
    }

    public function getTemplateName()
    {
        return "posting_preview.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  158 => 46,  152 => 45,  149 => 44,  145 => 42,  136 => 40,  132 => 39,  128 => 38,  125 => 37,  123 => 36,  118 => 34,  107 => 29,  104 => 28,  93 => 19,  82 => 16,  79 => 15,  57 => 14,  52 => 13,  48 => 12,  37 => 8,  28 => 5,  25 => 4,  23 => 3,  19 => 1,);
    }
}
