<?php

/* ucp_avatar_options.html */
class __TwigTemplate_a19d1fac56500a4d84675166db5ebd3e extends Twig_Template
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
        echo "
\t";
        // line 2
        if ((!(isset($context["S_AVATARS_ENABLED"]) ? $context["S_AVATARS_ENABLED"] : null))) {
            // line 3
            echo "\t\t<div class=\"alert alert-warning\">";
            echo $this->env->getExtension('phpbb')->lang("AVATAR_FEATURES_DISABLED");
            echo "</div>
\t";
        }
        // line 5
        echo "
\t<fieldset class=\"form-horizontal\">
\t";
        // line 7
        if ((isset($context["ERROR"]) ? $context["ERROR"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR"]) ? $context["ERROR"] : null);
            echo "</div>";
        }
        // line 8
        echo "\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\">";
        // line 9
        echo $this->env->getExtension('phpbb')->lang("CURRENT_IMAGE");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("AVATAR_EXPLAIN");
        echo "</span></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t\t";
        // line 11
        if ((isset($context["AVATAR"]) ? $context["AVATAR"] : null)) {
            echo (isset($context["AVATAR"]) ? $context["AVATAR"] : null);
        } else {
            echo "<img src=\"";
            echo (isset($context["T_THEME_PATH"]) ? $context["T_THEME_PATH"] : null);
            echo "/images/no_avatar.gif\" alt=\"\" class=\"img-thumbnail\" />";
        }
        echo "<br />
\t\t\t\t<label for=\"avatar_delete\"><input type=\"checkbox\" name=\"avatar_delete\" id=\"avatar_delete\" /> ";
        // line 12
        echo $this->env->getExtension('phpbb')->lang("DELETE_AVATAR");
        echo "</label>
\t\t\t</dd>
\t\t</dl>
\t</fieldset>
\t<hr />
\t<h4>";
        // line 17
        echo $this->env->getExtension('phpbb')->lang("AVATAR_SELECT");
        echo "</h4>
\t<fieldset class=\"form-horizontal\">
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\">";
        // line 20
        echo $this->env->getExtension('phpbb')->lang("AVATAR_TYPE");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><select class=\"form-control\" name=\"avatar_driver\" id=\"avatar_driver\" data-togglable-settings=\"true\">
\t\t\t\t";
        // line 22
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "avatar_drivers"));
        foreach ($context['_seq'] as $context["_key"] => $context["avatar_drivers"]) {
            // line 23
            echo "\t\t\t\t<option value=\"";
            echo $this->getAttribute((isset($context["avatar_drivers"]) ? $context["avatar_drivers"] : null), "DRIVER");
            echo "\"";
            if ($this->getAttribute((isset($context["avatar_drivers"]) ? $context["avatar_drivers"] : null), "SELECTED")) {
                echo " selected=\"selected\"";
            }
            echo " data-toggle-setting=\"#avatar_option_";
            echo $this->getAttribute((isset($context["avatar_drivers"]) ? $context["avatar_drivers"] : null), "DRIVER");
            echo "\">";
            echo $this->getAttribute((isset($context["avatar_drivers"]) ? $context["avatar_drivers"] : null), "L_TITLE");
            echo "</option>
\t\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['avatar_drivers'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 25
        echo "\t\t\t</select></dd>
\t\t</dl>
\t</fieldset>
\t<div id=\"avatar_options\">
";
        // line 29
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "avatar_drivers"));
        foreach ($context['_seq'] as $context["_key"] => $context["avatar_drivers"]) {
            // line 30
            echo "\t<div id=\"avatar_option_";
            echo $this->getAttribute((isset($context["avatar_drivers"]) ? $context["avatar_drivers"] : null), "DRIVER");
            echo "\">
\t<noscript>
\t<h3 class=\"avatar_section_header\">";
            // line 32
            echo $this->getAttribute((isset($context["avatar_drivers"]) ? $context["avatar_drivers"] : null), "L_TITLE");
            echo "</h3>
\t</noscript>
\t<p class=\"alert alert-info\">";
            // line 34
            echo $this->getAttribute((isset($context["avatar_drivers"]) ? $context["avatar_drivers"] : null), "L_EXPLAIN");
            echo "</p>

\t<fieldset class=\"form-horizontal\">
\t";
            // line 37
            echo $this->getAttribute((isset($context["avatar_drivers"]) ? $context["avatar_drivers"] : null), "OUTPUT");
            echo "
\t</fieldset>
\t</div>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['avatar_drivers'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 41
        echo "\t</div>

\t</div>
";
        // line 44
        if ((!(isset($context["S_GROUP_MANAGE"]) ? $context["S_GROUP_MANAGE"] : null))) {
            // line 45
            echo "\t<fieldset class=\"panel-footer text-center\">
\t\t<input type=\"reset\" value=\"";
            // line 46
            echo $this->env->getExtension('phpbb')->lang("RESET");
            echo "\" name=\"reset\" class=\"btn btn-danger\" /> &nbsp;
\t\t<input type=\"submit\" name=\"submit\" value=\"";
            // line 47
            echo $this->env->getExtension('phpbb')->lang("SUBMIT");
            echo "\" class=\"btn btn-success\" />
\t</fieldset>
";
        }
        // line 50
        echo "
</div>";
    }

    public function getTemplateName()
    {
        return "ucp_avatar_options.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  159 => 50,  153 => 47,  149 => 46,  146 => 45,  144 => 44,  139 => 41,  129 => 37,  123 => 34,  118 => 32,  112 => 30,  108 => 29,  102 => 25,  85 => 23,  81 => 22,  75 => 20,  61 => 12,  51 => 11,  40 => 8,  30 => 5,  24 => 3,  76 => 18,  69 => 17,  65 => 13,  62 => 12,  50 => 11,  43 => 9,  34 => 7,  31 => 2,  38 => 8,  35 => 7,  33 => 6,  27 => 3,  22 => 2,  19 => 1,);
    }
}
