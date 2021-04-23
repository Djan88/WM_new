<?php

/* ucp_prefs_post.html */
class __TwigTemplate_d2f794d099a6572fd24e4987e7146f63 extends Twig_Template
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

\t<fieldset class=\"form-horizontal\">
\t";
        // line 12
        if ((isset($context["ERROR"]) ? $context["ERROR"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR"]) ? $context["ERROR"] : null);
            echo "</div>";
        }
        // line 13
        echo "\t";
        // line 14
        echo "\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"bbcode1\">";
        // line 15
        echo $this->env->getExtension('phpbb')->lang("DEFAULT_BBCODE");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"bbcode1\"><input type=\"radio\" name=\"bbcode\" id=\"bbcode1\" value=\"1\"";
        // line 18
        if ((isset($context["S_BBCODE"]) ? $context["S_BBCODE"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label> 
\t\t\t\t<label class=\"btn btn-default\" for=\"bbcode0\"><input type=\"radio\" name=\"bbcode\" id=\"bbcode0\" value=\"0\"";
        // line 19
        if ((!(isset($context["S_BBCODE"]) ? $context["S_BBCODE"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"smilies1\">";
        // line 24
        echo $this->env->getExtension('phpbb')->lang("DEFAULT_SMILIES");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"smilies1\"><input type=\"radio\" name=\"smilies\" id=\"smilies1\" value=\"1\"";
        // line 27
        if ((isset($context["S_SMILIES"]) ? $context["S_SMILIES"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label> 
\t\t\t\t<label class=\"btn btn-default\" for=\"smilies0\"><input type=\"radio\" name=\"smilies\" id=\"smilies0\" value=\"0\"";
        // line 28
        if ((!(isset($context["S_SMILIES"]) ? $context["S_SMILIES"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"sig1\">";
        // line 33
        echo $this->env->getExtension('phpbb')->lang("DEFAULT_ADD_SIG");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"sig1\"><input type=\"radio\" name=\"sig\" id=\"sig1\" value=\"1\"";
        // line 36
        if ((isset($context["S_SIG"]) ? $context["S_SIG"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label> 
\t\t\t\t<label class=\"btn btn-default\" for=\"sig0\"><input type=\"radio\" name=\"sig\" id=\"sig0\" value=\"0\"";
        // line 37
        if ((!(isset($context["S_SIG"]) ? $context["S_SIG"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"notify1\">";
        // line 42
        echo $this->env->getExtension('phpbb')->lang("DEFAULT_NOTIFY");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default\" for=\"notify1\"><input type=\"radio\" name=\"notify\" id=\"notify1\" value=\"1\"";
        // line 45
        if ((isset($context["S_NOTIFY"]) ? $context["S_NOTIFY"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label> 
\t\t\t\t<label class=\"btn btn-default active\" for=\"notify0\"><input type=\"radio\" name=\"notify\" id=\"notify0\" value=\"0\"";
        // line 46
        if ((!(isset($context["S_NOTIFY"]) ? $context["S_NOTIFY"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t";
        // line 50
        // line 51
        echo "\t</fieldset>

\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t";
        // line 56
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "
\t\t<input type=\"reset\" value=\"";
        // line 57
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp; 
\t\t<input type=\"submit\" name=\"submit\" value=\"";
        // line 58
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" class=\"btn btn-success\" />
\t\t";
        // line 59
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t</fieldset>
</div>

</form>

";
        // line 65
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
        return "ucp_prefs_post.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  198 => 65,  189 => 59,  185 => 58,  181 => 57,  177 => 56,  170 => 51,  169 => 50,  158 => 46,  150 => 45,  143 => 42,  131 => 37,  123 => 36,  116 => 33,  104 => 28,  96 => 27,  89 => 24,  77 => 19,  69 => 18,  62 => 15,  59 => 14,  57 => 13,  51 => 12,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
