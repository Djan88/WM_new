<?php

/* ucp_agreement.html */
class __TwigTemplate_95751e9e9709d98eb36dd18a40500f50 extends Twig_Template
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
";
        // line 3
        if (((isset($context["S_SHOW_COPPA"]) ? $context["S_SHOW_COPPA"] : null) || (isset($context["S_REGISTRATION"]) ? $context["S_REGISTRATION"] : null))) {
            // line 4
            echo "
";
            // line 5
            if ((isset($context["S_LANG_OPTIONS"]) ? $context["S_LANG_OPTIONS"] : null)) {
                // line 6
                echo "<script type=\"text/javascript\">
// <![CDATA[
\t/**
\t* Change language
\t*/
\tfunction change_language(lang_iso)
\t{
\t\tdocument.cookie = '";
                // line 13
                echo (isset($context["COOKIE_NAME"]) ? $context["COOKIE_NAME"] : null);
                echo "_lang=' + lang_iso + '; path=";
                echo (isset($context["COOKIE_PATH"]) ? $context["COOKIE_PATH"] : null);
                echo "';
\t\tdocument.forms['register'].change_lang.value = lang_iso;
\t\tdocument.forms['register'].submit();
\t}

// ]]>
</script>
<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<form method=\"post\" action=\"";
                // line 23
                echo (isset($context["S_UCP_ACTION"]) ? $context["S_UCP_ACTION"] : null);
                echo "\" id=\"register\">
\t\t\t\t<p class=\"pull-";
                // line 24
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\">
\t\t\t\t\t<label for=\"lang\">";
                // line 25
                echo $this->env->getExtension('phpbb')->lang("LANGUAGE");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label> <select name=\"lang\" id=\"lang\" onchange=\"change_language(this.value); return false;\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("LANGUAGE");
                echo "\">";
                echo (isset($context["S_LANG_OPTIONS"]) ? $context["S_LANG_OPTIONS"] : null);
                echo "</select>
\t\t\t\t\t";
                // line 26
                echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
                echo "
\t\t\t\t</p>
\t\t\t</form>
\t\t</div>
\t</div>
</div>

";
            }
            // line 34
            echo "
<form method=\"post\" action=\"";
            // line 35
            echo (isset($context["S_UCP_ACTION"]) ? $context["S_UCP_ACTION"] : null);
            echo "\" id=\"agreement\">

<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4>";
            // line 42
            echo (isset($context["SITENAME"]) ? $context["SITENAME"] : null);
            echo " - ";
            echo $this->env->getExtension('phpbb')->lang("REGISTRATION");
            echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">
\t\t\t\t";
            // line 45
            // line 46
            echo "\t\t\t\t<p>";
            if ((isset($context["S_SHOW_COPPA"]) ? $context["S_SHOW_COPPA"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("COPPA_BIRTHDAY");
            } else {
                echo $this->env->getExtension('phpbb')->lang("TERMS_OF_USE");
            }
            echo "</p>
\t\t\t\t";
            // line 47
            // line 48
            echo "\t\t\t\t</div>

\t\t\t\t<fieldset class=\"panel-footer text-center\">
\t\t\t\t\t<div class=\"btn-group\">
\t\t\t\t\t\t";
            // line 52
            if ((isset($context["S_SHOW_COPPA"]) ? $context["S_SHOW_COPPA"] : null)) {
                // line 53
                echo "\t\t\t\t\t\t<a href=\"";
                echo (isset($context["U_COPPA_NO"]) ? $context["U_COPPA_NO"] : null);
                echo "\" class=\"btn btn-info\">";
                echo $this->env->getExtension('phpbb')->lang("COPPA_NO");
                echo "</a><a href=\"";
                echo (isset($context["U_COPPA_YES"]) ? $context["U_COPPA_YES"] : null);
                echo "\" class=\"btn btn-warning\">";
                echo $this->env->getExtension('phpbb')->lang("COPPA_YES");
                echo "</a>
\t\t\t\t\t\t";
            } else {
                // line 55
                echo "\t\t\t\t\t\t<input type=\"submit\" name=\"agreed\" id=\"agreed\" value=\"";
                echo $this->env->getExtension('phpbb')->lang("AGREE");
                echo "\" class=\"btn btn-info\" />
\t\t\t\t\t\t<input type=\"submit\" name=\"not_agreed\" value=\"";
                // line 56
                echo $this->env->getExtension('phpbb')->lang("NOT_AGREE");
                echo "\" class=\"btn btn-warning\" />
\t\t\t\t\t\t";
            }
            // line 58
            echo "\t\t\t\t\t</div>
\t\t\t\t\t";
            // line 59
            echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
            echo "
\t\t\t\t\t";
            // line 60
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t\t\t\t</fieldset>
\t\t\t</div>
\t\t</div>
\t</div>
</div>

</form>

";
        } elseif ((isset($context["S_AGREEMENT"]) ? $context["S_AGREEMENT"] : null)) {
            // line 70
            echo "
<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4>";
            // line 76
            echo (isset($context["SITENAME"]) ? $context["SITENAME"] : null);
            echo " - ";
            echo (isset($context["AGREEMENT_TITLE"]) ? $context["AGREEMENT_TITLE"] : null);
            echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">
\t\t\t\t<p>";
            // line 79
            echo (isset($context["AGREEMENT_TEXT"]) ? $context["AGREEMENT_TEXT"] : null);
            echo "</p>

\t\t\t\t</div>

\t\t\t\t<div class=\"panel-footer text-center\">
\t\t\t\t\t<a href=\"";
            // line 84
            echo (isset($context["U_BACK"]) ? $context["U_BACK"] : null);
            echo "\" class=\"btn btn-default\">";
            echo $this->env->getExtension('phpbb')->lang("BACK");
            echo "</a>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>
</div>

";
        }
        // line 92
        echo "
";
        // line 93
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
        return "ucp_agreement.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  215 => 93,  212 => 92,  199 => 84,  191 => 79,  183 => 76,  175 => 70,  162 => 60,  158 => 59,  155 => 58,  150 => 56,  145 => 55,  133 => 53,  131 => 52,  125 => 48,  124 => 47,  115 => 46,  114 => 45,  106 => 42,  96 => 35,  93 => 34,  82 => 26,  73 => 25,  69 => 24,  65 => 23,  50 => 13,  41 => 6,  39 => 5,  36 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
