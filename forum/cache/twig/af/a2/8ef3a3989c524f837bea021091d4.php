<?php

/* profilefields/bool.html */
class __TwigTemplate_afa28ef3a3989c524f837bea021091d4 extends Twig_Template
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
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "bool"));
        foreach ($context['_seq'] as $context["_key"] => $context["bool"]) {
            // line 2
            if (($this->getAttribute((isset($context["bool"]) ? $context["bool"] : null), "FIELD_LENGTH") == 1)) {
                // line 3
                echo "\t";
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["bool"]) ? $context["bool"] : null), "options"));
                foreach ($context['_seq'] as $context["_key"] => $context["options"]) {
                    echo "<label for=\"";
                    echo $this->getAttribute((isset($context["bool"]) ? $context["bool"] : null), "FIELD_IDENT");
                    echo "_";
                    echo $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "OPTION_ID");
                    echo "\"><input type=\"radio\" name=\"";
                    echo $this->getAttribute((isset($context["bool"]) ? $context["bool"] : null), "FIELD_IDENT");
                    echo "\" id=\"";
                    echo $this->getAttribute((isset($context["bool"]) ? $context["bool"] : null), "FIELD_IDENT");
                    echo "_";
                    echo $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "OPTION_ID");
                    echo "\" value=\"";
                    echo $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "OPTION_ID");
                    echo "\"";
                    echo $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "CHECKED");
                    echo " /> ";
                    echo $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "VALUE");
                    echo "</label> ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['options'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
            } else {
                // line 5
                echo "\t<input type=\"checkbox\" class=\"radio\" name=\"";
                echo $this->getAttribute((isset($context["bool"]) ? $context["bool"] : null), "FIELD_IDENT");
                echo "\" id=\"";
                echo $this->getAttribute((isset($context["bool"]) ? $context["bool"] : null), "FIELD_IDENT");
                echo "\"";
                if ($this->getAttribute((isset($context["bool"]) ? $context["bool"] : null), "FIELD_VALUE")) {
                    echo " checked=\"checked\"";
                }
                echo " />
";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['bool'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "profilefields/bool.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  52 => 5,  25 => 3,  23 => 2,  19 => 1,);
    }
}
