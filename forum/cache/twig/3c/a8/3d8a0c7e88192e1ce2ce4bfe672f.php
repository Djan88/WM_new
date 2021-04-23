<?php

/* timezone_option.html */
class __TwigTemplate_3ca83d8a0c7e88192e1ce2ce4bfe672f extends Twig_Template
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
        echo "<dl class=\"form-group\">
\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"timezone\">";
        // line 2
        echo $this->env->getExtension('phpbb')->lang("BOARD_TIMEZONE");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t";
        // line 3
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "timezone_date"))) {
            // line 4
            echo "\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\" id=\"tz_select_date\" style=\"display: none;\">
\t\t<select name=\"tz_date\" id=\"tz_date\" class=\"form-control tz_select\">
\t\t\t<option value=\"\">";
            // line 6
            echo $this->env->getExtension('phpbb')->lang("SELECT_CURRENT_TIME");
            echo "</option>
\t\t\t";
            // line 7
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "timezone_date"));
            foreach ($context['_seq'] as $context["_key"] => $context["timezone_date"]) {
                // line 8
                echo "\t\t\t\t<option value=\"";
                echo $this->getAttribute((isset($context["timezone_date"]) ? $context["timezone_date"] : null), "VALUE");
                echo "\"";
                if ($this->getAttribute((isset($context["timezone_date"]) ? $context["timezone_date"] : null), "SELECTED")) {
                    echo " selected=\"selected\"";
                }
                echo ">";
                echo $this->getAttribute((isset($context["timezone_date"]) ? $context["timezone_date"] : null), "TITLE");
                echo "</option>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['timezone_date'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 10
            echo "\t\t</select>
\t\t<input type=\"button\" id=\"tz_select_date_suggest\" class=\"btn btn-default\" style=\"display: none;\" timezone-preselect=\"";
            // line 11
            if ((isset($context["S_TZ_PRESELECT"]) ? $context["S_TZ_PRESELECT"] : null)) {
                echo "true";
            } else {
                echo "false";
            }
            echo "\" data-l-suggestion=\"";
            echo $this->env->getExtension('phpbb')->lang("TIMEZONE_DATE_SUGGESTION");
            echo "\" value=\"";
            echo $this->env->getExtension('phpbb')->lang("TIMEZONE_DATE_SUGGESTION");
            echo "\" />
\t</dd>
\t";
        }
        // line 14
        echo "</dl>
<dl class=\"form-group\">
\t<dt class=\"col-md-4 col-sm-5 col-xs-12\">&nbsp;</dt>
\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t<select name=\"tz\" id=\"timezone\" class=\"form-control tz_select\">
\t\t\t<option value=\"\">";
        // line 19
        echo $this->env->getExtension('phpbb')->lang("SELECT_TIMEZONE");
        echo "</option>
\t\t\t";
        // line 20
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "timezone_select"));
        foreach ($context['_seq'] as $context["_key"] => $context["timezone_select"]) {
            // line 21
            echo "\t\t\t<optgroup label=\"";
            echo $this->getAttribute((isset($context["timezone_select"]) ? $context["timezone_select"] : null), "LABEL");
            echo "\" data-tz-value=\"";
            echo $this->getAttribute((isset($context["timezone_select"]) ? $context["timezone_select"] : null), "VALUE");
            echo "\">
\t\t\t\t";
            // line 22
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["timezone_select"]) ? $context["timezone_select"] : null), "timezone_options"));
            foreach ($context['_seq'] as $context["_key"] => $context["timezone_options"]) {
                // line 23
                echo "\t\t\t\t<option title=\"";
                echo $this->getAttribute((isset($context["timezone_options"]) ? $context["timezone_options"] : null), "TITLE");
                echo "\" value=\"";
                echo $this->getAttribute((isset($context["timezone_options"]) ? $context["timezone_options"] : null), "VALUE");
                echo "\"";
                if ($this->getAttribute((isset($context["timezone_options"]) ? $context["timezone_options"] : null), "SELECTED")) {
                    echo " selected=\"selected\"";
                }
                echo ">";
                echo $this->getAttribute((isset($context["timezone_options"]) ? $context["timezone_options"] : null), "LABEL");
                echo "</option>
\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['timezone_options'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 25
            echo "\t\t\t</optgroup>
\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['timezone_select'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 27
        echo "\t\t</select>

\t\t";
        // line 29
        $asset_file = "timezone.js";
        $asset = new \phpbb\template\asset($asset_file, $this->getEnvironment()->get_path_helper());
        if (substr($asset_file, 0, 2) !== './' && $asset->is_relative()) {
            $asset_path = $asset->get_path();            $local_file = $this->getEnvironment()->get_phpbb_root_path() . $asset_path;
            if (!file_exists($local_file)) {
                $local_file = $this->getEnvironment()->findTemplate($asset_path);
                $asset->set_path($local_file, true);
            $asset->add_assets_version('38');
            $asset_file = $asset->get_url();
            }
        }
        $context['definition']->append('SCRIPTS', '<script type="text/javascript" src="' . $asset_file. '"></script>

');
        // line 30
        echo "\t</dd>
</dl>
";
    }

    public function getTemplateName()
    {
        return "timezone_option.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  142 => 30,  127 => 29,  99 => 23,  84 => 20,  80 => 19,  73 => 14,  59 => 11,  56 => 10,  37 => 7,  33 => 6,  29 => 4,  27 => 3,  22 => 2,  317 => 103,  309 => 98,  305 => 97,  301 => 96,  297 => 95,  293 => 93,  285 => 88,  279 => 85,  274 => 82,  272 => 81,  269 => 80,  254 => 78,  250 => 77,  248 => 76,  242 => 72,  241 => 71,  238 => 70,  235 => 69,  221 => 66,  218 => 65,  212 => 64,  198 => 63,  194 => 61,  190 => 60,  185 => 59,  182 => 58,  181 => 57,  178 => 56,  166 => 55,  158 => 52,  153 => 51,  150 => 50,  149 => 49,  145 => 47,  144 => 46,  136 => 43,  131 => 42,  123 => 27,  116 => 25,  108 => 35,  103 => 34,  95 => 22,  88 => 21,  85 => 29,  83 => 28,  76 => 27,  70 => 26,  60 => 21,  53 => 17,  41 => 8,  31 => 2,  52 => 5,  25 => 3,  23 => 2,  19 => 1,);
    }
}
