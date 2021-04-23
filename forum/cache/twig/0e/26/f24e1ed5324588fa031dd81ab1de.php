<?php

/* pagination.html */
class __TwigTemplate_0e26f24e1ed5324588fa031dd81ab1de extends Twig_Template
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
 \t<a href=\"#\" onclick=\"jumpto(); return false;\" title=\"";
        // line 2
        echo $this->env->getExtension('phpbb')->lang("JUMP_TO_PAGE_CLICK");
        echo "\">";
        echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
        echo "</a> &bull; 
\t<ul>
\t";
        // line 4
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"));
        foreach ($context['_seq'] as $context["_key"] => $context["pagination"]) {
            // line 5
            echo "\t\t";
            if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_PREV")) {
                echo "<li><a href=\"";
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("PREVIOUS");
                echo "</a></li>
\t\t";
            } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_CURRENT")) {
                // line 6
                echo "<li class=\"active\"><span>";
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                echo "</span></li>
\t\t";
            } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_ELLIPSIS")) {
                // line 7
                echo "<li class=\"ellipsis\"><span>";
                echo $this->env->getExtension('phpbb')->lang("ELLIPSIS");
                echo "</span></li>
\t\t";
            } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_NEXT")) {
                // line 8
                echo "<li><a href=\"";
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("NEXT");
                echo "</a></li>
\t\t";
            } else {
                // line 9
                echo "<li><a href=\"";
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                echo "\">";
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                echo "</a></li>
\t\t";
            }
            // line 11
            echo "\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['pagination'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 12
        echo "\t</ul>
";
    }

    public function getTemplateName()
    {
        return "pagination.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  77 => 12,  71 => 11,  63 => 9,  55 => 8,  49 => 7,  43 => 6,  33 => 5,  29 => 4,  22 => 2,  19 => 1,);
    }
}
