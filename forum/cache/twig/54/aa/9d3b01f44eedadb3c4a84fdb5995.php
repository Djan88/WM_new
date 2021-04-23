<?php

/* ucp_zebra_friends.html */
class __TwigTemplate_54aa9d3b01f44eedadb3c4a84fdb5995 extends Twig_Template
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
<form id=\"ucp\" method=\"post\" action=\"";
        // line 3
        echo (isset($context["S_UCP_ACTION"]) ? $context["S_UCP_ACTION"] : null);
        echo "\"";
        echo (isset($context["S_FORM_ENCTYPE"]) ? $context["S_FORM_ENCTYPE"] : null);
        echo ">

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 7
        echo $this->env->getExtension('phpbb')->lang("TITLE");
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t<p>";
        // line 11
        echo $this->env->getExtension('phpbb')->lang("FRIENDS_EXPLAIN");
        echo "</p>

\t<fieldset class=\"form-horizontal\">
\t";
        // line 14
        if ((isset($context["ERROR"]) ? $context["ERROR"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR"]) ? $context["ERROR"] : null);
            echo "</div>";
        }
        // line 15
        echo "\t";
        // line 16
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\"";
        // line 17
        if ((isset($context["S_USERNAME_OPTIONS"]) ? $context["S_USERNAME_OPTIONS"] : null)) {
            echo " for=\"usernames\"";
        }
        echo ">";
        echo $this->env->getExtension('phpbb')->lang("YOUR_FRIENDS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("YOUR_FRIENDS_EXPLAIN");
        echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t";
        // line 19
        if ((isset($context["S_USERNAME_OPTIONS"]) ? $context["S_USERNAME_OPTIONS"] : null)) {
            // line 20
            echo "\t\t\t\t<select name=\"usernames[]\" id=\"usernames\" multiple=\"multiple\" size=\"5\" class=\"form-control\">";
            echo (isset($context["S_USERNAME_OPTIONS"]) ? $context["S_USERNAME_OPTIONS"] : null);
            echo "</select>
\t\t\t";
        } else {
            // line 22
            echo "\t\t\t\t<label class=\"control-label\">";
            echo $this->env->getExtension('phpbb')->lang("NO_FRIENDS");
            echo "</label>
\t\t\t";
        }
        // line 24
        echo "\t\t</dd>
\t</dl>
\t";
        // line 26
        // line 27
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"add\">";
        // line 28
        echo $this->env->getExtension('phpbb')->lang("ADD_FRIENDS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("ADD_FRIENDS_EXPLAIN");
        echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<textarea name=\"add\" id=\"add\" rows=\"3\" cols=\"30\" class=\"form-control\">";
        // line 30
        echo (isset($context["USERNAMES"]) ? $context["USERNAMES"] : null);
        echo "</textarea>&nbsp;
\t\t\t<a href=\"";
        // line 31
        echo (isset($context["U_FIND_USERNAME"]) ? $context["U_FIND_USERNAME"] : null);
        echo "\" onclick=\"find_username(this.href); return false;\" class=\"btn btn-default\">";
        echo $this->env->getExtension('phpbb')->lang("FIND_USERNAME");
        echo "</a>
\t\t</dd>
\t</dl>
\t</fieldset>

\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t";
        // line 39
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "<input type=\"reset\" value=\"";
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp; 
\t\t<input type=\"submit\" name=\"submit\" value=\"";
        // line 40
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" class=\"btn btn-success\" />
\t\t";
        // line 41
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t</fieldset>
</div>

</form>

";
        // line 47
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
        return "ucp_zebra_friends.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  145 => 47,  136 => 41,  132 => 40,  126 => 39,  113 => 31,  109 => 30,  101 => 28,  98 => 27,  97 => 26,  93 => 24,  87 => 22,  81 => 20,  79 => 19,  67 => 17,  64 => 16,  62 => 15,  56 => 14,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
