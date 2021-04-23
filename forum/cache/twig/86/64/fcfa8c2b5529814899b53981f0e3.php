<?php

/* ucp_profile_reg_details.html */
class __TwigTemplate_8664fcfa8c2b5529814899b53981f0e3 extends Twig_Template
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

\t";
        // line 11
        if ((isset($context["S_FORCE_PASSWORD"]) ? $context["S_FORCE_PASSWORD"] : null)) {
            echo "<div class=\"alert alert-warning\">";
            echo $this->env->getExtension('phpbb')->lang("FORCE_PASSWORD_EXPLAIN");
            echo "</div>";
        }
        // line 12
        echo "
\t<fieldset class=\"form-horizontal\">
\t";
        // line 14
        if ((isset($context["ERROR"]) ? $context["ERROR"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR"]) ? $context["ERROR"] : null);
            echo "</div>";
        }
        // line 15
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" ";
        // line 16
        if ((isset($context["S_CHANGE_USERNAME"]) ? $context["S_CHANGE_USERNAME"] : null)) {
            echo "for=\"username\"";
        }
        echo ">";
        echo $this->env->getExtension('phpbb')->lang("USERNAME");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("USERNAME_EXPLAIN");
        echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
        // line 17
        if ((isset($context["S_CHANGE_USERNAME"]) ? $context["S_CHANGE_USERNAME"] : null)) {
            echo "<input type=\"text\" name=\"username\" id=\"username\" value=\"";
            echo (isset($context["USERNAME"]) ? $context["USERNAME"] : null);
            echo "\" class=\"inputbox\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("USERNAME");
            echo "\" />";
        } else {
            echo "<strong>";
            echo (isset($context["USERNAME"]) ? $context["USERNAME"] : null);
            echo "</strong>";
        }
        echo "</dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"email\">";
        // line 20
        echo $this->env->getExtension('phpbb')->lang("EMAIL_ADDRESS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
        // line 21
        if ((isset($context["S_CHANGE_EMAIL"]) ? $context["S_CHANGE_EMAIL"] : null)) {
            echo "<input type=\"email\" name=\"email\" id=\"email\" maxlength=\"100\" value=\"";
            echo (isset($context["EMAIL"]) ? $context["EMAIL"] : null);
            echo "\" class=\"inputbox\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("EMAIL_ADDRESS");
            echo "\" />";
        } else {
            echo "<strong>";
            echo (isset($context["EMAIL"]) ? $context["EMAIL"] : null);
            echo "</strong>";
        }
        echo "</dd>
\t</dl>
\t";
        // line 23
        if ((isset($context["S_CHANGE_PASSWORD"]) ? $context["S_CHANGE_PASSWORD"] : null)) {
            // line 24
            echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"new_password\">";
            // line 25
            echo $this->env->getExtension('phpbb')->lang("NEW_PASSWORD");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("CHANGE_PASSWORD_EXPLAIN");
            echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input type=\"password\" name=\"new_password\" id=\"new_password\" maxlength=\"255\" value=\"";
            // line 26
            echo (isset($context["NEW_PASSWORD"]) ? $context["NEW_PASSWORD"] : null);
            echo "\" class=\"inputbox\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("CHANGE_PASSWORD");
            echo "\" /></dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"password_confirm\">";
            // line 29
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_PASSWORD");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_PASSWORD_EXPLAIN");
            echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input type=\"password\" name=\"password_confirm\" id=\"password_confirm\" maxlength=\"255\" value=\"";
            // line 30
            echo (isset($context["PASSWORD_CONFIRM"]) ? $context["PASSWORD_CONFIRM"] : null);
            echo "\" class=\"inputbox\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_PASSWORD");
            echo "\" /></dd>
\t</dl>
\t";
        }
        // line 33
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"cur_password\">";
        // line 34
        echo $this->env->getExtension('phpbb')->lang("CURRENT_PASSWORD");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        if ((isset($context["S_CHANGE_PASSWORD"]) ? $context["S_CHANGE_PASSWORD"] : null)) {
            echo $this->env->getExtension('phpbb')->lang("CURRENT_CHANGE_PASSWORD_EXPLAIN");
        } else {
            echo $this->env->getExtension('phpbb')->lang("CURRENT_PASSWORD_EXPLAIN");
        }
        echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input type=\"password\" name=\"cur_password\" id=\"cur_password\" maxlength=\"255\" value=\"";
        // line 35
        echo (isset($context["CUR_PASSWORD"]) ? $context["CUR_PASSWORD"] : null);
        echo "\" class=\"inputbox\" title=\"";
        echo $this->env->getExtension('phpbb')->lang("CURRENT_PASSWORD");
        echo "\" /></dd>
\t</dl>
\t</fieldset>

\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t";
        // line 42
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "<input type=\"reset\" value=\"";
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp;
\t\t<input type=\"submit\" name=\"submit\" value=\"";
        // line 43
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" class=\"btn btn-success\" />
\t\t";
        // line 44
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t</fieldset>
</div>

</form>

";
        // line 50
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
        return "ucp_profile_reg_details.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  196 => 50,  187 => 44,  183 => 43,  177 => 42,  165 => 35,  154 => 34,  151 => 33,  143 => 30,  136 => 29,  128 => 26,  121 => 25,  118 => 24,  116 => 23,  101 => 21,  96 => 20,  80 => 17,  69 => 16,  66 => 15,  60 => 14,  56 => 12,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
