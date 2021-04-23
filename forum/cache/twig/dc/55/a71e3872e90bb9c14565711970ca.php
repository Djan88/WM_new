<?php

/* faq_body.html */
class __TwigTemplate_dc55a71e3872e90bb9c14565711970ca extends Twig_Template
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
<div id=\"faqlinks\" class=\"panel panel-default clearfix\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 5
        echo $this->env->getExtension('phpbb')->lang("FAQ_TITLE");
        echo "</h4>
\t</div>

\t\t<div class=\"panel-body col-md-6\">
\t\t";
        // line 9
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "faq_block"));
        foreach ($context['_seq'] as $context["_key"] => $context["faq_block"]) {
            // line 10
            echo "\t\t\t";
            if (($this->getAttribute((isset($context["faq_block"]) ? $context["faq_block"] : null), "SWITCH_COLUMN") || ((isset($context["SWITCH_COLUMN_MANUALLY"]) ? $context["SWITCH_COLUMN_MANUALLY"] : null) && ($this->getAttribute((isset($context["faq_block"]) ? $context["faq_block"] : null), "S_ROW_COUNT") == 4)))) {
                // line 11
                echo "\t\t</div>

\t\t<div class=\"panel-body col-md-6\">
\t\t\t";
            }
            // line 15
            echo "\t\t\t<dl>
\t\t\t\t<dt><strong>";
            // line 16
            echo $this->getAttribute((isset($context["faq_block"]) ? $context["faq_block"] : null), "BLOCK_TITLE");
            echo "</strong></dt>
\t\t\t\t";
            // line 17
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["faq_block"]) ? $context["faq_block"] : null), "faq_row"));
            foreach ($context['_seq'] as $context["_key"] => $context["faq_row"]) {
                // line 18
                echo "\t\t\t\t\t<dd><a href=\"#f";
                echo $this->getAttribute((isset($context["faq_block"]) ? $context["faq_block"] : null), "S_ROW_COUNT");
                echo "r";
                echo $this->getAttribute((isset($context["faq_row"]) ? $context["faq_row"] : null), "S_ROW_COUNT");
                echo "\">";
                echo $this->getAttribute((isset($context["faq_row"]) ? $context["faq_row"] : null), "FAQ_QUESTION");
                echo "</a></dd>
\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['faq_row'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 20
            echo "\t\t\t</dl>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['faq_block'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 22
        echo "\t\t</div>
</div>

";
        // line 25
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "faq_block"));
        foreach ($context['_seq'] as $context["_key"] => $context["faq_block"]) {
            // line 26
            echo "<div class=\"panel panel-default clearfix\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
            // line 28
            echo $this->getAttribute((isset($context["faq_block"]) ? $context["faq_block"] : null), "BLOCK_TITLE");
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t\t";
            // line 31
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["faq_block"]) ? $context["faq_block"] : null), "faq_row"));
            foreach ($context['_seq'] as $context["_key"] => $context["faq_row"]) {
                // line 32
                echo "\t\t\t\t<dl>
\t\t\t\t\t<dt id=\"f";
                // line 33
                echo $this->getAttribute((isset($context["faq_block"]) ? $context["faq_block"] : null), "S_ROW_COUNT");
                echo "r";
                echo $this->getAttribute((isset($context["faq_row"]) ? $context["faq_row"] : null), "S_ROW_COUNT");
                echo "\"><strong>";
                echo $this->getAttribute((isset($context["faq_row"]) ? $context["faq_row"] : null), "FAQ_QUESTION");
                echo "</strong></dt>
\t\t\t\t\t<dd>";
                // line 34
                echo $this->getAttribute((isset($context["faq_row"]) ? $context["faq_row"] : null), "FAQ_ANSWER");
                echo "</dd>
\t\t\t\t</dl>
\t\t\t\t";
                // line 36
                if ((!$this->getAttribute((isset($context["faq_row"]) ? $context["faq_row"] : null), "S_LAST_ROW"))) {
                    echo "<hr />";
                }
                // line 37
                echo "\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['faq_row'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 38
            echo "\t</div>

\t<div class=\"panel-footer text-";
            // line 40
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t<a href=\"#faqlinks\" title=\"";
            // line 41
            echo $this->env->getExtension('phpbb')->lang("BACK_TO_TOP");
            echo "\"><i class=\"fa fa-chevron-up\"></i></a>
\t</div>
</div>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['faq_block'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 45
        echo "
";
        // line 46
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
        // line 47
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
        return "faq_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  169 => 47,  157 => 46,  154 => 45,  144 => 41,  140 => 40,  136 => 38,  130 => 37,  126 => 36,  121 => 34,  113 => 33,  110 => 32,  106 => 31,  100 => 28,  96 => 26,  92 => 25,  87 => 22,  80 => 20,  67 => 18,  63 => 17,  59 => 16,  56 => 15,  50 => 11,  47 => 10,  43 => 9,  36 => 5,  31 => 2,  19 => 1,);
    }
}
