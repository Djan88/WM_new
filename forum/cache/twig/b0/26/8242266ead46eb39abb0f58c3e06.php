<?php

/* ucp_register.html */
class __TwigTemplate_b0268242266ead46eb39abb0f58c3e06 extends Twig_Template
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
<script type=\"text/javascript\">
// <![CDATA[
\t/**
\t* Change language
\t*/
\tfunction change_language(lang_iso)
\t{
\t\tdocument.cookie = '";
        // line 10
        echo (isset($context["COOKIE_NAME"]) ? $context["COOKIE_NAME"] : null);
        echo "_lang=' + lang_iso + '; path=";
        echo (isset($context["COOKIE_PATH"]) ? $context["COOKIE_PATH"] : null);
        echo "';
\t\tdocument.forms['register'].change_lang.value = lang_iso;
\t\tdocument.forms['register'].submit.click();
\t}
// ]]>
</script>

<form method=\"post\" action=\"";
        // line 17
        echo (isset($context["S_UCP_ACTION"]) ? $context["S_UCP_ACTION"] : null);
        echo "\" id=\"register\">

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4>";
        // line 21
        echo (isset($context["SITENAME"]) ? $context["SITENAME"] : null);
        echo " - ";
        echo $this->env->getExtension('phpbb')->lang("REGISTRATION");
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t<fieldset class=\"form-horizontal\">
\t";
        // line 26
        if ((isset($context["ERROR"]) ? $context["ERROR"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR"]) ? $context["ERROR"] : null);
            echo "</div>";
        }
        // line 27
        echo "\t";
        if ((isset($context["L_REG_COND"]) ? $context["L_REG_COND"] : null)) {
            echo "<div class=\"alert alert-info\">";
            echo $this->env->getExtension('phpbb')->lang("REG_COND");
            echo "</div>";
        }
        // line 28
        echo "\t";
        // line 29
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"username\">";
        // line 30
        echo $this->env->getExtension('phpbb')->lang("USERNAME");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("USERNAME_EXPLAIN");
        echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input type=\"text\" tabindex=\"1\" name=\"username\" id=\"username\" size=\"25\" value=\"";
        // line 31
        echo (isset($context["USERNAME"]) ? $context["USERNAME"] : null);
        echo "\" class=\"form-control\" title=\"";
        echo $this->env->getExtension('phpbb')->lang("USERNAME");
        echo "\" /></dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"email\">";
        // line 34
        echo $this->env->getExtension('phpbb')->lang("EMAIL_ADDRESS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input type=\"email\" tabindex=\"2\" name=\"email\" id=\"email\" size=\"25\" maxlength=\"100\" value=\"";
        // line 35
        echo (isset($context["EMAIL"]) ? $context["EMAIL"] : null);
        echo "\" class=\"form-control\" title=\"";
        echo $this->env->getExtension('phpbb')->lang("EMAIL_ADDRESS");
        echo "\" /></dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"new_password\">";
        // line 38
        echo $this->env->getExtension('phpbb')->lang("PASSWORD");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("PASSWORD_EXPLAIN");
        echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input type=\"password\" tabindex=\"4\" name=\"new_password\" id=\"new_password\" size=\"25\" value=\"";
        // line 39
        echo (isset($context["PASSWORD"]) ? $context["PASSWORD"] : null);
        echo "\" class=\"form-control\" title=\"";
        echo $this->env->getExtension('phpbb')->lang("NEW_PASSWORD");
        echo "\" /></dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"password_confirm\">";
        // line 42
        echo $this->env->getExtension('phpbb')->lang("CONFIRM_PASSWORD");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input type=\"password\"  tabindex=\"5\" name=\"password_confirm\" id=\"password_confirm\" size=\"25\" value=\"";
        // line 43
        echo (isset($context["PASSWORD_CONFIRM"]) ? $context["PASSWORD_CONFIRM"] : null);
        echo "\" class=\"form-control\" title=\"";
        echo $this->env->getExtension('phpbb')->lang("CONFIRM_PASSWORD");
        echo "\" /></dd>
\t</dl>

\t";
        // line 46
        // line 47
        echo "\t<hr />

\t";
        // line 49
        // line 50
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"lang\">";
        // line 51
        echo $this->env->getExtension('phpbb')->lang("LANGUAGE");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><select name=\"lang\" id=\"lang\" onchange=\"change_language(this.value); return false;\" tabindex=\"6\" class=\"form-control\" title=\"";
        // line 52
        echo $this->env->getExtension('phpbb')->lang("LANGUAGE");
        echo "\">";
        echo (isset($context["S_LANG_OPTIONS"]) ? $context["S_LANG_OPTIONS"] : null);
        echo "</select></dd>
\t</dl>

\t";
        // line 55
        $location = "timezone_option.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("timezone_option.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 56
        echo "
\t";
        // line 57
        // line 58
        echo "\t";
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "profile_fields"))) {
            // line 59
            echo "\t\t<div class=\"alert alert-info\">";
            echo $this->env->getExtension('phpbb')->lang("ITEMS_REQUIRED");
            echo "</div>
\t";
            // line 60
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "profile_fields"));
            foreach ($context['_seq'] as $context["_key"] => $context["profile_fields"]) {
                // line 61
                echo "\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\">
\t\t\t\t<label class=\"control-label\"";
                // line 63
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
\t\t\t\t";
                // line 64
                if ($this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "LANG_EXPLAIN")) {
                    echo "<br /><span class=\"help-block\">";
                    echo $this->getAttribute((isset($context["profile_fields"]) ? $context["profile_fields"] : null), "LANG_EXPLAIN");
                    echo "</span>";
                }
                // line 65
                echo "\t\t\t</dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
                // line 66
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
            // line 69
            echo "\t";
        }
        // line 70
        echo "
\t";
        // line 71
        // line 72
        echo "\t</fieldset>

\t</div>
</div>
";
        // line 76
        if ((isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null)) {
            // line 77
            echo "\t";
            $value = 8;
            $context['definition']->set('CAPTCHA_TAB_INDEX', $value);
            // line 78
            echo "\t";
            $location = (("" . (isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null)) . "");
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $template = $this->env->resolveTemplate((("" . (isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null)) . ""));
            $template->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 80
        echo "
";
        // line 81
        if ((isset($context["S_COPPA"]) ? $context["S_COPPA"] : null)) {
            // line 82
            echo "
<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4>";
            // line 85
            echo $this->env->getExtension('phpbb')->lang("COPPA_COMPLIANCE");
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t<p>";
            // line 88
            echo $this->env->getExtension('phpbb')->lang("COPPA_EXPLAIN");
            echo "</p>
\t</div>
</div>

";
        }
        // line 93
        echo "
<fieldset class=\"well well-sm text-center\">
\t";
        // line 95
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "
\t<input type=\"reset\" value=\"";
        // line 96
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp;
\t<input type=\"submit\" tabindex=\"9\" name=\"submit\" id=\"submit\" value=\"";
        // line 97
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" class=\"btn btn-success default-submit-action\" />
\t";
        // line 98
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
</fieldset>

</form>

";
        // line 103
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
        return "ucp_register.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  317 => 103,  309 => 98,  305 => 97,  301 => 96,  297 => 95,  293 => 93,  285 => 88,  279 => 85,  274 => 82,  272 => 81,  269 => 80,  254 => 78,  250 => 77,  248 => 76,  242 => 72,  241 => 71,  238 => 70,  235 => 69,  221 => 66,  218 => 65,  212 => 64,  198 => 63,  194 => 61,  190 => 60,  185 => 59,  182 => 58,  181 => 57,  178 => 56,  166 => 55,  158 => 52,  153 => 51,  150 => 50,  149 => 49,  145 => 47,  144 => 46,  136 => 43,  131 => 42,  123 => 39,  116 => 38,  108 => 35,  103 => 34,  95 => 31,  88 => 30,  85 => 29,  83 => 28,  76 => 27,  70 => 26,  60 => 21,  53 => 17,  41 => 10,  31 => 2,  52 => 5,  25 => 3,  23 => 2,  19 => 1,);
    }
}
