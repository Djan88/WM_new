<?php

/* confirm_body.html */
class __TwigTemplate_b8d26d83e825316dff8c3c9d9f1efe36 extends Twig_Template
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
        if ((isset($context["S_AJAX_REQUEST"]) ? $context["S_AJAX_REQUEST"] : null)) {
            // line 2
            echo "\t<form action=\"";
            echo (isset($context["S_CONFIRM_ACTION"]) ? $context["S_CONFIRM_ACTION"] : null);
            echo "\" method=\"post\">
\t\t<h3>";
            // line 3
            echo (isset($context["MESSAGE_TITLE"]) ? $context["MESSAGE_TITLE"] : null);
            echo "</h3>
\t\t<p>";
            // line 4
            echo (isset($context["MESSAGE_TEXT"]) ? $context["MESSAGE_TEXT"] : null);
            echo "</p>

\t\t<fieldset class=\"text-center\">
\t\t\t<input type=\"button\" name=\"confirm\" value=\"";
            // line 7
            echo $this->env->getExtension('phpbb')->lang("YES");
            echo "\" class=\"btn btn-danger\" />&nbsp;
\t\t\t<input type=\"button\" name=\"cancel\" value=\"";
            // line 8
            echo $this->env->getExtension('phpbb')->lang("NO");
            echo "\" class=\"btn btn-primary\" />
\t\t</fieldset>
\t</form>

";
        } else {
            // line 13
            echo "
";
            // line 14
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
            // line 15
            echo "
<form id=\"confirm\" action=\"";
            // line 16
            echo (isset($context["S_CONFIRM_ACTION"]) ? $context["S_CONFIRM_ACTION"] : null);
            echo "\" method=\"post\">

<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">";
            // line 23
            echo (isset($context["MESSAGE_TITLE"]) ? $context["MESSAGE_TITLE"] : null);
            echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">
\t\t\t\t\t<p>";
            // line 26
            echo (isset($context["MESSAGE_TEXT"]) ? $context["MESSAGE_TEXT"] : null);
            echo "</p>
\t\t\t\t</div>

\t\t\t\t<fieldset class=\"panel-footer text-center\">
\t\t\t\t\t";
            // line 30
            echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
            echo "
\t\t\t\t\t<input type=\"submit\" name=\"confirm\" value=\"";
            // line 31
            echo $this->env->getExtension('phpbb')->lang("YES");
            echo "\" class=\"btn btn-danger\" />&nbsp;
\t\t\t\t\t<input type=\"submit\" name=\"cancel\" value=\"";
            // line 32
            echo $this->env->getExtension('phpbb')->lang("NO");
            echo "\" class=\"btn btn-primary\" />
\t\t\t\t</fieldset>
\t\t\t</div>
\t\t</div>
\t</div>
</div>

</form>

";
            // line 41
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
            // line 42
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "confirm_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  121 => 42,  109 => 41,  97 => 32,  93 => 31,  89 => 30,  82 => 26,  76 => 23,  66 => 16,  63 => 15,  51 => 14,  48 => 13,  40 => 8,  36 => 7,  30 => 4,  26 => 3,  21 => 2,  19 => 1,);
    }
}
