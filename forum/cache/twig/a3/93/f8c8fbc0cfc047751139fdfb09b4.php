<?php

/* message_body.html */
class __TwigTemplate_a393f8c8fbc0cfc047751139fdfb09b4 extends Twig_Template
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
        if ((isset($context["S_SIMPLE_MESSAGE"]) ? $context["S_SIMPLE_MESSAGE"] : null)) {
            // line 2
            echo "\t";
            $location = "simple_header.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("simple_header.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        } else {
            // line 4
            echo "\t";
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
        }
        // line 6
        echo "
<div class=\"container\">
\t<div class=\"row\" id=\"message\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">";
        // line 12
        echo (isset($context["MESSAGE_TITLE"]) ? $context["MESSAGE_TITLE"] : null);
        echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">
\t\t\t\t\t<p>";
        // line 15
        echo (isset($context["MESSAGE_TEXT"]) ? $context["MESSAGE_TEXT"] : null);
        echo "</p>
\t\t\t\t";
        // line 16
        if ((((((isset($context["SCRIPT_NAME"]) ? $context["SCRIPT_NAME"] : null) == "search") && (!(isset($context["S_BOARD_DISABLED"]) ? $context["S_BOARD_DISABLED"] : null))) && (!(isset($context["S_NO_SEARCH"]) ? $context["S_NO_SEARCH"] : null))) && (isset($context["L_RETURN_TO_SEARCH_ADV"]) ? $context["L_RETURN_TO_SEARCH_ADV"] : null))) {
            // line 17
            echo "\t\t\t\t\t<p><a href=\"";
            echo (isset($context["U_SEARCH"]) ? $context["U_SEARCH"] : null);
            echo "\" class=\"arrow-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">";
            echo $this->env->getExtension('phpbb')->lang("GO_TO_SEARCH_ADV");
            echo "</a></p>
\t\t\t\t";
        }
        // line 19
        echo "\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>
</div>

";
        // line 25
        if ((isset($context["S_SIMPLE_MESSAGE"]) ? $context["S_SIMPLE_MESSAGE"] : null)) {
            // line 26
            echo "\t";
            $location = "simple_footer.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("simple_footer.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        } else {
            // line 28
            echo "\t";
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
    }

    public function getTemplateName()
    {
        return "message_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  103 => 28,  89 => 26,  87 => 25,  79 => 19,  69 => 17,  67 => 16,  63 => 15,  57 => 12,  49 => 6,  35 => 4,  21 => 2,  19 => 1,);
    }
}
