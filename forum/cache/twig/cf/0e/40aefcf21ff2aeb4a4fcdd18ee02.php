<?php

/* ucp_profile_profile_info.html */
class __TwigTemplate_cf0e40aefcf21ff2aeb4a4fcdd18ee02 extends Twig_Template
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
        echo " &nbsp; <a href=\"";
        echo (isset($context["U_USER_PROFILE"]) ? $context["U_USER_PROFILE"] : null);
        echo "\" title=\"";
        echo $this->env->getExtension('phpbb')->lang("VIEW_PROFILE");
        echo "\" class=\"btn btn-default btn-xs\">";
        echo $this->env->getExtension('phpbb')->lang("VIEW_PROFILE");
        echo "</a></h4>
\t</div>
\t<div class=\"panel-body\">

\t<p>";
        // line 11
        echo $this->env->getExtension('phpbb')->lang("PROFILE_INFO_NOTICE");
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
        if ((isset($context["S_BIRTHDAYS_ENABLED"]) ? $context["S_BIRTHDAYS_ENABLED"] : null)) {
            // line 16
            echo "\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"bday_day\">";
            // line 17
            echo $this->env->getExtension('phpbb')->lang("BIRTHDAY");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("BIRTHDAY_EXPLAIN");
            echo "</span></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t\t";
            // line 19
            echo $this->env->getExtension('phpbb')->lang("DAY");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " <select name=\"bday_day\" id=\"bday_day\">";
            echo (isset($context["S_BIRTHDAY_DAY_OPTIONS"]) ? $context["S_BIRTHDAY_DAY_OPTIONS"] : null);
            echo "</select>&nbsp;
\t\t\t\t";
            // line 20
            echo $this->env->getExtension('phpbb')->lang("MONTH");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " <select name=\"bday_month\" id=\"bday_month\">";
            echo (isset($context["S_BIRTHDAY_MONTH_OPTIONS"]) ? $context["S_BIRTHDAY_MONTH_OPTIONS"] : null);
            echo "</select>&nbsp;
\t\t\t\t";
            // line 21
            echo $this->env->getExtension('phpbb')->lang("YEAR");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " <select name=\"bday_year\" id=\"bday_year\">";
            echo (isset($context["S_BIRTHDAY_YEAR_OPTIONS"]) ? $context["S_BIRTHDAY_YEAR_OPTIONS"] : null);
            echo "</select>
\t\t\t</dd>
\t\t</dl>
\t";
        }
        // line 25
        echo "\t";
        if ((isset($context["S_JABBER_ENABLED"]) ? $context["S_JABBER_ENABLED"] : null)) {
            // line 26
            echo "\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"jabber\">";
            // line 27
            echo $this->env->getExtension('phpbb')->lang("UCP_JABBER");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input type=\"email\" name=\"jabber\" id=\"jabber\" maxlength=\"255\" value=\"";
            // line 28
            echo (isset($context["JABBER"]) ? $context["JABBER"] : null);
            echo "\" class=\"form-control\" /></dd>
\t\t</dl>
\t";
        }
        // line 31
        echo "\t";
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "profile_fields"));
        foreach ($context['_seq'] as $context["_key"] => $context["profile_fields"]) {
            // line 32
            echo "\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\"";
            // line 33
            if ($this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "FIELD_ID")) {
                echo " for=\"";
                echo $this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "FIELD_ID");
                echo "\"";
            }
            echo ">";
            if ($this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "S_REQUIRED")) {
                echo "<i class=\"fa fa-asterisk text-info\"></i>&nbsp; ";
            }
            echo $this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "LANG_NAME");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label>
\t\t\t";
            // line 34
            if ($this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "LANG_EXPLAIN")) {
                echo "<br /><span class=\"help-block\">";
                echo $this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "LANG_EXPLAIN");
                echo "</span>";
            }
            echo "</dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
            // line 35
            echo $this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "FIELD");
            if ($this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "ERROR")) {
                echo "<br /><span class=\"text-danger\">";
                echo $this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "ERROR");
                echo "</span>";
            }
            echo "</dd>
\t\t</dl>
\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['profile_fields'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 38
        echo "\t</fieldset>

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
        return "ucp_profile_profile_info.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  192 => 50,  183 => 44,  179 => 43,  173 => 42,  167 => 38,  153 => 35,  145 => 34,  131 => 33,  128 => 32,  123 => 31,  117 => 28,  112 => 27,  109 => 26,  106 => 25,  96 => 21,  89 => 20,  82 => 19,  74 => 17,  71 => 16,  68 => 15,  62 => 14,  56 => 11,  43 => 7,  34 => 3,  31 => 2,  23 => 2,  19 => 1,);
    }
}
