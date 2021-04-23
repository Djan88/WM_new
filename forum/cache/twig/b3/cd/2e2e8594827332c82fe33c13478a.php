<?php

/* posting_pm_header.html */
class __TwigTemplate_b3cd2e2e8594827332c82fe33c13478a extends Twig_Template
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
        echo "<fieldset class=\"form-horizontal\">
\t";
        // line 2
        if ((!(isset($context["S_SHOW_DRAFTS"]) ? $context["S_SHOW_DRAFTS"] : null))) {
            // line 3
            echo "
\t\t";
            // line 4
            if ((isset($context["S_GROUP_OPTIONS"]) ? $context["S_GROUP_OPTIONS"] : null)) {
                // line 5
                echo "\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"group_list\">";
                // line 6
                echo $this->env->getExtension('phpbb')->lang("TO_ADD_GROUPS");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label></dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><select name=\"group_list[]\" id=\"group_list\" multiple=\"multiple\" size=\"3\" class=\"form-control\">";
                // line 7
                echo (isset($context["S_GROUP_OPTIONS"]) ? $context["S_GROUP_OPTIONS"] : null);
                echo "</select></dd>
\t\t\t</dl>
\t\t";
            }
            // line 10
            echo "\t\t";
            if ((isset($context["S_ALLOW_MASS_PM"]) ? $context["S_ALLOW_MASS_PM"] : null)) {
                // line 11
                echo "\t\t\t";
                if ((!(isset($context["S_EDIT_POST"]) ? $context["S_EDIT_POST"] : null))) {
                    // line 12
                    echo "\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\">";
                    // line 13
                    echo $this->env->getExtension('phpbb')->lang("TO_ADD_MASS");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label></dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><textarea id=\"username_list\" name=\"username_list\" cols=\"50\" rows=\"2\" tabindex=\"1\" class=\"form-control\"></textarea>&nbsp;
\t\t\t\t<div class=\"btn-group\">
\t\t\t\t\t<input type=\"submit\" name=\"add_to\" value=\"";
                    // line 16
                    echo $this->env->getExtension('phpbb')->lang("ADD");
                    echo "\" tabindex=\"1\" class=\"btn btn-default\" />
\t\t\t\t\t<input type=\"submit\" name=\"add_bcc\" value=\"";
                    // line 17
                    echo $this->env->getExtension('phpbb')->lang("ADD_BCC");
                    echo "\" tabindex=\"1\" class=\"btn btn-default\" />
\t\t\t\t";
                    // line 18
                    // line 19
                    echo "\t\t\t\t\t<a href=\"";
                    echo (isset($context["U_FIND_USERNAME"]) ? $context["U_FIND_USERNAME"] : null);
                    echo "\" onclick=\"find_username(this.href); return false;\" class=\"btn btn-default\">";
                    echo $this->env->getExtension('phpbb')->lang("FIND_USERNAME");
                    echo "</a>
\t\t\t\t";
                    // line 20
                    // line 21
                    echo "\t\t\t\t</div>
\t\t\t\t</dd>
\t\t\t</dl>
\t\t\t";
                }
                // line 25
                echo "
\t\t\t";
                // line 26
                if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "to_recipient"))) {
                    // line 27
                    echo "\t\t\t\t<dl class=\"form-group form-group-sm\">
\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\">";
                    // line 28
                    echo $this->env->getExtension('phpbb')->lang("TO_MASS");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label></dt>
\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t\t\t";
                    // line 30
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "to_recipient"));
                    foreach ($context['_seq'] as $context["_key"] => $context["to_recipient"]) {
                        // line 31
                        echo "\t\t\t\t\t\t<div class=\"btn-group recipients\">
\t\t\t\t\t\t\t";
                        // line 32
                        if ($this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "IS_GROUP")) {
                            echo "<a href=\"";
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "U_VIEW");
                            echo "\" class=\"btn btn-default btn-sm\"><strong>";
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "NAME");
                            echo "</strong></a>";
                        } else {
                            echo "<span class=\"btn btn-default btn-sm tip\">";
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "NAME_FULL");
                            echo "</span>";
                        }
                        // line 33
                        echo "\t\t\t\t\t\t\t";
                        if ((!(isset($context["S_EDIT_POST"]) ? $context["S_EDIT_POST"] : null))) {
                            echo "<input type=\"submit\" name=\"remove_";
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "TYPE");
                            echo "[";
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "UG_ID");
                            echo "]\" value=\"&nbsp;x&nbsp;\" class=\"btn btn-sm btn-danger\" />";
                        }
                        // line 34
                        echo "\t\t\t\t\t\t</div>
\t\t\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['to_recipient'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 36
                    echo "\t\t\t\t\t</dd>
\t\t\t\t</dl>
\t\t\t";
                }
                // line 39
                echo "\t\t\t";
                if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "bcc_recipient"))) {
                    // line 40
                    echo "\t\t\t\t<dl class=\"form-group form-group-sm\">
\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\">";
                    // line 41
                    echo $this->env->getExtension('phpbb')->lang("BCC");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label></dt>
\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t\t\t";
                    // line 43
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "bcc_recipient"));
                    foreach ($context['_seq'] as $context["_key"] => $context["bcc_recipient"]) {
                        // line 44
                        echo "\t\t\t\t\t\t<div class=\"btn-group recipients\">
\t\t\t\t\t\t\t";
                        // line 45
                        if ($this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "IS_GROUP")) {
                            echo "<a href=\"";
                            echo $this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "U_VIEW");
                            echo "\" class=\"btn btn-default btn-sm\"><strong>";
                            echo $this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "NAME");
                            echo "</strong></a>";
                        } else {
                            echo "<span class=\"btn btn-default btn-sm tip\">";
                            echo $this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "NAME_FULL");
                            echo "</span>";
                        }
                        // line 46
                        echo "\t\t\t\t\t\t\t";
                        if ((!(isset($context["S_EDIT_POST"]) ? $context["S_EDIT_POST"] : null))) {
                            echo "<input type=\"submit\" name=\"remove_";
                            echo $this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "TYPE");
                            echo "[";
                            echo $this->getAttribute((isset($context["bcc_recipient"]) ? $context["bcc_recipient"] : null), "UG_ID");
                            echo "]\" value=\"&nbsp;x&nbsp;\" class=\"btn btn-sm btn-danger\" />";
                        }
                        // line 47
                        echo "\t\t\t\t\t\t</div>
\t\t\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['bcc_recipient'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 49
                    echo "\t\t\t\t\t</dd>
\t\t\t\t</dl>
\t\t\t";
                }
                // line 52
                echo "\t\t";
            } else {
                // line 53
                echo "\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"username_list\">";
                // line 54
                echo $this->env->getExtension('phpbb')->lang("TO_ADD");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label></dt>
\t\t\t\t";
                // line 55
                if ((!(isset($context["S_EDIT_POST"]) ? $context["S_EDIT_POST"] : null))) {
                    // line 56
                    echo "\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t\t<div class=\"input-group\">
\t\t\t\t\t<input type=\"text\" name=\"username_list\" id=\"username_list\" size=\"20\" value=\"\" class=\"form-control\" />
\t\t\t\t\t<span class=\"input-group-btn\">
\t\t\t\t\t\t<input type=\"submit\" name=\"add_to\" value=\"";
                    // line 60
                    echo $this->env->getExtension('phpbb')->lang("ADD");
                    echo "\" class=\"btn btn-default\" />
\t\t\t\t\t\t";
                    // line 61
                    if ((!(isset($context["S_EDIT_POST"]) ? $context["S_EDIT_POST"] : null))) {
                        echo "<a href=\"";
                        echo (isset($context["U_FIND_USERNAME"]) ? $context["U_FIND_USERNAME"] : null);
                        echo "\" onclick=\"find_username(this.href); return false\" class=\"btn btn-default\">";
                        echo $this->env->getExtension('phpbb')->lang("FIND_USERNAME");
                        echo "</a>";
                    }
                    // line 62
                    echo "\t\t\t\t\t</span>
\t\t\t\t\t</div>
\t\t\t\t</dd>
\t\t\t</dl>
\t\t\t\t";
                }
                // line 67
                echo "\t\t\t";
                if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "to_recipient"))) {
                    // line 68
                    echo "\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"username_list\">";
                    // line 69
                    echo $this->env->getExtension('phpbb')->lang("TO");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label></dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t\t";
                    // line 71
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "to_recipient"));
                    foreach ($context['_seq'] as $context["_key"] => $context["to_recipient"]) {
                        // line 72
                        echo "\t\t\t\t\t<div class=\"btn-group recipients\">
\t\t\t\t\t\t";
                        // line 73
                        if ($this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "IS_GROUP")) {
                            echo "<a href=\"";
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "U_VIEW");
                            echo "\" class=\"btn btn-default btn-sm\"><strong>";
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "NAME");
                            echo "</strong></a>";
                        } else {
                            echo "<span class=\"btn btn-default btn-sm tip\">";
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "NAME_FULL");
                            echo "</span>";
                        }
                        // line 74
                        echo "\t\t\t\t\t\t";
                        if ((!(isset($context["S_EDIT_POST"]) ? $context["S_EDIT_POST"] : null))) {
                            echo "<input type=\"submit\" name=\"remove_";
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "TYPE");
                            echo "[";
                            echo $this->getAttribute((isset($context["to_recipient"]) ? $context["to_recipient"] : null), "UG_ID");
                            echo "]\" value=\"&nbsp;x&nbsp;\" class=\"btn btn-sm btn-danger\" />";
                        }
                        // line 75
                        echo "\t\t\t\t\t</div>
\t\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['to_recipient'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 77
                    echo "\t\t\t\t</dd>
\t\t\t</dl>
\t\t\t";
                }
                // line 80
                echo "\t\t";
            }
            // line 81
            echo "
\t";
        }
        // line 83
        echo "\t</fieldset>
";
    }

    public function getTemplateName()
    {
        return "posting_pm_header.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  285 => 83,  281 => 81,  278 => 80,  273 => 77,  266 => 75,  257 => 74,  245 => 73,  242 => 72,  238 => 71,  232 => 69,  229 => 68,  226 => 67,  219 => 62,  211 => 61,  207 => 60,  201 => 56,  199 => 55,  194 => 54,  191 => 53,  188 => 52,  183 => 49,  176 => 47,  167 => 46,  155 => 45,  152 => 44,  148 => 43,  142 => 41,  139 => 40,  136 => 39,  131 => 36,  124 => 34,  115 => 33,  100 => 31,  96 => 30,  90 => 28,  87 => 27,  82 => 25,  76 => 21,  75 => 20,  68 => 19,  67 => 18,  59 => 16,  52 => 13,  43 => 10,  37 => 7,  32 => 6,  29 => 5,  27 => 4,  180 => 32,  177 => 31,  163 => 30,  160 => 29,  146 => 28,  143 => 27,  129 => 26,  123 => 22,  110 => 21,  107 => 20,  103 => 32,  91 => 17,  85 => 26,  80 => 11,  66 => 10,  63 => 17,  49 => 12,  46 => 11,  41 => 5,  36 => 4,  34 => 3,  31 => 2,  38 => 5,  24 => 3,  22 => 2,  19 => 1,);
    }
}
