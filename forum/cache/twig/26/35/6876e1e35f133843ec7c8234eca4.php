<?php

/* captcha_default.html */
class __TwigTemplate_26356876e1e35f133843ec7c8234eca4 extends Twig_Template
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
        if (((isset($context["S_TYPE"]) ? $context["S_TYPE"] : null) == 1)) {
            // line 2
            echo "<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4>";
            // line 4
            echo $this->env->getExtension('phpbb')->lang("CONFIRMATION");
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t<p>";
            // line 7
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_EXPLAIN");
            echo "</p>

\t\t<fieldset class=\"form-horizontal\">
\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"confirm_code\">";
            // line 11
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_CODE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_CODE_EXPLAIN");
            echo "</span></dt>
\t\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><img src=\"";
            // line 12
            echo (isset($context["CONFIRM_IMAGE_LINK"]) ? $context["CONFIRM_IMAGE_LINK"] : null);
            echo "\" alt=\"";
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_CODE");
            echo "\" /></dd>
\t\t\t</dl>
\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12 hidden-xs\">&nbsp;</dt>
\t\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t\t\t<div class=\"input-group\">
\t\t\t\t\t\t<input type=\"text\" name=\"confirm_code\" id=\"confirm_code\" size=\"8\" maxlength=\"8\" tabindex=\"";
            // line 18
            echo $this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "CAPTCHA_TAB_INDEX");
            echo "\" class=\"form-control\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_CODE");
            echo "\" />
\t\t\t\t\t\t";
            // line 19
            if ((isset($context["S_CONFIRM_REFRESH"]) ? $context["S_CONFIRM_REFRESH"] : null)) {
                // line 20
                echo "\t\t\t\t\t\t<div class=\"input-group-btn\">
\t\t\t\t\t\t\t<input type=\"submit\" name=\"refresh_vc\" id=\"refresh_vc\" class=\"btn btn-default\" value=\"";
                // line 21
                echo $this->env->getExtension('phpbb')->lang("VC_REFRESH");
                echo "\" />
\t\t\t\t\t\t</div>
\t\t\t\t\t\t";
            }
            // line 24
            echo "\t\t\t\t\t</div>
\t\t\t\t\t<input type=\"hidden\" name=\"confirm_id\" id=\"confirm_id\" value=\"";
            // line 25
            echo (isset($context["CONFIRM_ID"]) ? $context["CONFIRM_ID"] : null);
            echo "\" />
\t\t\t\t</dd>
\t\t\t</dl>
\t\t</fieldset>
\t</div>
</div>
";
        } else {
            // line 32
            echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"confirm_code\">";
            // line 33
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_CODE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_CODE_EXPLAIN");
            echo "</span></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><img src=\"";
            // line 34
            echo (isset($context["CONFIRM_IMAGE_LINK"]) ? $context["CONFIRM_IMAGE_LINK"] : null);
            echo "\" alt=\"";
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_CODE");
            echo "\" /></dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12 hidden-xs\">&nbsp;</dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t<input type=\"text\" name=\"confirm_code\" id=\"confirm_code\" size=\"8\" maxlength=\"8\" tabindex=\"";
            // line 39
            echo $this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "CAPTCHA_TAB_INDEX");
            echo "\" class=\"form-control\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("CONFIRM_CODE");
            echo "\" />
\t\t\t<input type=\"hidden\" name=\"confirm_id\" id=\"confirm_id\" value=\"";
            // line 40
            echo (isset($context["CONFIRM_ID"]) ? $context["CONFIRM_ID"] : null);
            echo "\" />
\t\t</dd>
\t</dl>
";
        }
    }

    public function getTemplateName()
    {
        return "captcha_default.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  112 => 40,  106 => 39,  96 => 34,  89 => 33,  86 => 32,  67 => 21,  64 => 20,  62 => 19,  45 => 12,  38 => 11,  21 => 2,  142 => 30,  127 => 29,  99 => 23,  84 => 20,  80 => 19,  73 => 24,  59 => 11,  56 => 18,  37 => 7,  33 => 6,  29 => 4,  27 => 3,  22 => 2,  317 => 103,  309 => 98,  305 => 97,  301 => 96,  297 => 95,  293 => 93,  285 => 88,  279 => 85,  274 => 82,  272 => 81,  269 => 80,  254 => 78,  250 => 77,  248 => 76,  242 => 72,  241 => 71,  238 => 70,  235 => 69,  221 => 66,  218 => 65,  212 => 64,  198 => 63,  194 => 61,  190 => 60,  185 => 59,  182 => 58,  181 => 57,  178 => 56,  166 => 55,  158 => 52,  153 => 51,  150 => 50,  149 => 49,  145 => 47,  144 => 46,  136 => 43,  131 => 42,  123 => 27,  116 => 25,  108 => 35,  103 => 34,  95 => 22,  88 => 21,  85 => 29,  83 => 28,  76 => 25,  70 => 26,  60 => 21,  53 => 17,  41 => 8,  31 => 7,  52 => 5,  25 => 4,  23 => 2,  19 => 1,);
    }
}
