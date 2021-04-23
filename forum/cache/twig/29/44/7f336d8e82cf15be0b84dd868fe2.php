<?php

/* ucp_remind.html */
class __TwigTemplate_29447f336d8e82cf15be0b84dd868fe2 extends Twig_Template
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
<form action=\"";
        // line 3
        echo (isset($context["S_PROFILE_ACTION"]) ? $context["S_PROFILE_ACTION"] : null);
        echo "\" method=\"post\" id=\"remind\">

<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">";
        // line 10
        echo $this->env->getExtension('phpbb')->lang("SEND_PASSWORD");
        echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">

\t\t\t\t<fieldset class=\"form-horizontal\">
\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"username\">";
        // line 16
        echo $this->env->getExtension('phpbb')->lang("USERNAME");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"text\" name=\"username\" id=\"username\" size=\"25\" /></dd>
\t\t\t\t</dl>
\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"email\">";
        // line 20
        echo $this->env->getExtension('phpbb')->lang("EMAIL_ADDRESS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"email\" name=\"email\" id=\"email\" size=\"25\" maxlength=\"100\" /><br /><span class=\"help-block\">";
        // line 21
        echo $this->env->getExtension('phpbb')->lang("EMAIL_REMIND");
        echo "</span></dd>
\t\t\t\t</dl>
\t\t\t\t</fieldset>

\t\t\t\t</div>

\t\t\t\t<div class=\"panel-footer text-center\">
\t\t\t\t";
        // line 28
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "
\t\t\t\t\t<input type=\"submit\" name=\"submit\" id=\"submit\" value=\"";
        // line 29
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" tabindex=\"2\" class=\"btn btn-success\" />&nbsp; <input type=\"reset\" value=\"";
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" name=\"reset\" class=\"btn btn-danger\" />
\t\t\t\t";
        // line 30
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>
</div>

</form>

";
        // line 39
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
        return "ucp_remind.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  98 => 39,  86 => 30,  80 => 29,  76 => 28,  66 => 21,  61 => 20,  53 => 16,  44 => 10,  34 => 3,  31 => 2,  19 => 1,);
    }
}
