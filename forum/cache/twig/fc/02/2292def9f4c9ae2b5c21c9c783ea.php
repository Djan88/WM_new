<?php

/* ucp_profile_signature.html */
class __TwigTemplate_fc022292def9f4c9ae2b5c21c9c783ea extends Twig_Template
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
<form id=\"postform\" method=\"post\" action=\"";
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

";
        // line 11
        if (((isset($context["SIGNATURE_PREVIEW"]) ? $context["SIGNATURE_PREVIEW"] : null) != "")) {
            // line 12
            echo "\t<div class=\"panel\">
\t\t<p>";
            // line 13
            echo $this->env->getExtension('phpbb')->lang("SIGNATURE_PREVIEW");
            echo "</p>
\t\t<div class=\"panel-footer\">";
            // line 14
            echo (isset($context["SIGNATURE_PREVIEW"]) ? $context["SIGNATURE_PREVIEW"] : null);
            echo "</div>
\t</div>
";
        }
        // line 17
        echo "
\t<p>";
        // line 18
        echo $this->env->getExtension('phpbb')->lang("SIGNATURE_EXPLAIN");
        echo "</p>

\t";
        // line 20
        $value = 1;
        $context['definition']->set('SIG_EDIT', $value);
        // line 21
        echo "\t";
        $location = "posting_editor.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("posting_editor.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 22
        echo "
\t<fieldset class=\"text-center\">
\t\t";
        // line 24
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "
\t\t<input type=\"reset\" name=\"reset\" value=\"";
        // line 25
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" class=\"btn btn-danger\" />&nbsp;
\t\t<input type=\"submit\" name=\"preview\" value=\"";
        // line 26
        echo $this->env->getExtension('phpbb')->lang("PREVIEW");
        echo "\" class=\"btn btn-info\" />&nbsp;
\t\t<input type=\"submit\" name=\"submit\" value=\"";
        // line 27
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" class=\"btn btn-success\" />
\t\t";
        // line 28
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t</fieldset>

\t<fieldset class=\"form-horizontal\">
\t";
        // line 32
        if ((isset($context["S_BBCODE_ALLOWED"]) ? $context["S_BBCODE_ALLOWED"] : null)) {
            // line 33
            echo "\t\t<div><label for=\"disable_bbcode\"><input type=\"checkbox\" name=\"disable_bbcode\" id=\"disable_bbcode\"";
            echo (isset($context["S_BBCODE_CHECKED"]) ? $context["S_BBCODE_CHECKED"] : null);
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("DISABLE_BBCODE");
            echo "</label></div>
\t";
        }
        // line 35
        echo "\t";
        if ((isset($context["S_SMILIES_ALLOWED"]) ? $context["S_SMILIES_ALLOWED"] : null)) {
            // line 36
            echo "\t\t<div><label for=\"disable_smilies\"><input type=\"checkbox\" name=\"disable_smilies\" id=\"disable_smilies\"";
            echo (isset($context["S_SMILIES_CHECKED"]) ? $context["S_SMILIES_CHECKED"] : null);
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("DISABLE_SMILIES");
            echo "</label></div>
\t";
        }
        // line 38
        echo "\t";
        if ((isset($context["S_LINKS_ALLOWED"]) ? $context["S_LINKS_ALLOWED"] : null)) {
            // line 39
            echo "\t\t<div><label for=\"disable_magic_url\"><input type=\"checkbox\" name=\"disable_magic_url\" id=\"disable_magic_url\"";
            echo (isset($context["S_MAGIC_URL_CHECKED"]) ? $context["S_MAGIC_URL_CHECKED"] : null);
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("DISABLE_MAGIC_URL");
            echo "</label></div>
\t";
        }
        // line 41
        echo "\t</fieldset>

\t</div>

</div>

</form>

";
        // line 49
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
        return "ucp_profile_signature.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  158 => 49,  148 => 41,  140 => 39,  137 => 38,  129 => 36,  126 => 35,  118 => 33,  116 => 32,  109 => 28,  105 => 27,  101 => 26,  97 => 25,  93 => 24,  89 => 22,  76 => 21,  73 => 20,  68 => 18,  65 => 17,  59 => 14,  55 => 13,  52 => 12,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
