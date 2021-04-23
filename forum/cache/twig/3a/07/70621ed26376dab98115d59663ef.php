<?php

/* posting_buttons.html */
class __TwigTemplate_3a0770621ed26376dab98115d59663ef extends Twig_Template
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
<script type=\"text/javascript\">
// <![CDATA[
\tvar form_name = 'postform';
\tvar text_name = ";
        // line 5
        if ($this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "SIG_EDIT")) {
            echo "'signature'";
        } else {
            echo "'message'";
        }
        echo ";
\tvar load_draft = false;
\tvar upload = false;

\t// Define the bbCode tags
\tvar bbcode = new Array();
\tvar bbtags = new Array('[b]','[/b]','[i]','[/i]','[u]','[/u]','[quote]','[/quote]','[code]','[/code]','[list]','[/list]','[list=]','[/list]','[img]','[/img]','[url]','[/url]','[flash=]', '[/flash]','[size=]','[/size]'";
        // line 11
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "custom_tags"));
        foreach ($context['_seq'] as $context["_key"] => $context["custom_tags"]) {
            echo ", ";
            echo $this->getAttribute((isset($context["custom_tags"]) ? $context["custom_tags"] : null), "BBCODE_NAME");
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_tags'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        echo ");
\tvar imageTag = false;

\t// Helpline messages
\tvar help_line = {
\t\tb: '";
        // line 16
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_B_HELP"));
        echo "',
\t\ti: '";
        // line 17
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_I_HELP"));
        echo "',
\t\tu: '";
        // line 18
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_U_HELP"));
        echo "',
\t\tq: '";
        // line 19
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_Q_HELP"));
        echo "',
\t\tc: '";
        // line 20
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_C_HELP"));
        echo "',
\t\tl: '";
        // line 21
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_L_HELP"));
        echo "',
\t\to: '";
        // line 22
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_O_HELP"));
        echo "',
\t\tp: '";
        // line 23
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_P_HELP"));
        echo "',
\t\tw: '";
        // line 24
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_W_HELP"));
        echo "',
\t\ta: '";
        // line 25
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_A_HELP"));
        echo "',
\t\ts: '";
        // line 26
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_S_HELP"));
        echo "',
\t\tf: '";
        // line 27
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_F_HELP"));
        echo "',
\t\ty: '";
        // line 28
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_Y_HELP"));
        echo "',
\t\td: '";
        // line 29
        echo addslashes($this->env->getExtension('phpbb')->lang("BBCODE_D_HELP"));
        echo "'
\t\t";
        // line 30
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "custom_tags"));
        foreach ($context['_seq'] as $context["_key"] => $context["custom_tags"]) {
            // line 31
            echo "\t\t\t,cb_";
            echo $this->getAttribute((isset($context["custom_tags"]) ? $context["custom_tags"] : null), "BBCODE_ID");
            echo ": '";
            echo $this->getAttribute((isset($context["custom_tags"]) ? $context["custom_tags"] : null), "A_BBCODE_HELPLINE");
            echo "'
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_tags'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 33
        echo "\t}

\tfunction change_palette()
\t{
\t\tphpbb.toggleDisplay('colour_palette');
\t\te = document.getElementById('colour_palette');

\t\tif (e.style.display == 'block')
\t\t{
\t\t\tdocument.getElementById('bbpalette').value = '";
        // line 42
        echo addslashes($this->env->getExtension('phpbb')->lang("FONT_COLOR_HIDE"));
        echo "';
\t\t}
\t\telse
\t\t{
\t\t\tdocument.getElementById('bbpalette').value = '";
        // line 46
        echo addslashes($this->env->getExtension('phpbb')->lang("FONT_COLOR"));
        echo "';
\t\t}
\t}

// ]]>
</script>
";
        // line 52
        $asset_file = (("" . (isset($context["T_ASSETS_PATH"]) ? $context["T_ASSETS_PATH"] : null)) . "/javascript/editor.js");
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
        // line 53
        echo "
";
        // line 54
        if ((isset($context["S_BBCODE_ALLOWED"]) ? $context["S_BBCODE_ALLOWED"] : null)) {
            // line 55
            echo "<div id=\"colour_palette\" style=\"display: none;\">
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\">";
            // line 57
            echo $this->env->getExtension('phpbb')->lang("FONT_COLOR");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-19 col-sm-8 col-xs-12 form-inline\" id=\"color_palette_placeholder\" data-orientation=\"h\" data-height=\"12\" data-width=\"15\" data-bbcode=\"true\"></dd>
\t</dl>
</div>

";
            // line 62
            // line 63
            echo "<div id=\"format-buttons\">
\t<div class=\"btn-group\">
\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"b\" name=\"addbbcode0\" onclick=\"bbstyle(0)\" title=\"";
            // line 65
            echo $this->env->getExtension('phpbb')->lang("BBCODE_B_HELP");
            echo "\"><i class=\"fa fa-bold\"></i></button>
\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"i\" name=\"addbbcode2\" onclick=\"bbstyle(2)\" title=\"";
            // line 66
            echo $this->env->getExtension('phpbb')->lang("BBCODE_I_HELP");
            echo "\"><i class=\"fa fa-italic\"></i></button>
\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"u\" name=\"addbbcode4\" onclick=\"bbstyle(4)\" title=\"";
            // line 67
            echo $this->env->getExtension('phpbb')->lang("BBCODE_U_HELP");
            echo "\"><i class=\"fa fa-underline\"></i></button>
\t\t";
            // line 68
            if ((isset($context["S_BBCODE_QUOTE"]) ? $context["S_BBCODE_QUOTE"] : null)) {
                // line 69
                echo "\t\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"q\" name=\"addbbcode6\" onclick=\"bbstyle(6)\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("BBCODE_Q_HELP");
                echo "\"><i class=\"fa fa-quote-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\"></i></button>
\t\t";
            }
            // line 71
            echo "\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"c\" name=\"addbbcode8\" onclick=\"bbstyle(8)\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("BBCODE_C_HELP");
            echo "\"><i class=\"fa fa-code\"></i></button>
\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"l\" name=\"addbbcode10\" onclick=\"bbstyle(10)\" title=\"";
            // line 72
            echo $this->env->getExtension('phpbb')->lang("BBCODE_L_HELP");
            echo "\"><i class=\"fa fa-list-ul\"></i></button>
\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"o\" name=\"addbbcode12\" onclick=\"bbstyle(12)\" title=\"";
            // line 73
            echo $this->env->getExtension('phpbb')->lang("BBCODE_O_HELP");
            echo "\"><i class=\"fa fa-list-ol\"></i></button>
\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"y\" name=\"addlistitem\" onclick=\"bbstyle(-1)\" title=\"";
            // line 74
            echo $this->env->getExtension('phpbb')->lang("BBCODE_LISTITEM_HELP");
            echo "\"><i class=\"fa fa-asterisk\"></i></button>
\t\t";
            // line 75
            if ((isset($context["S_BBCODE_IMG"]) ? $context["S_BBCODE_IMG"] : null)) {
                // line 76
                echo "\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"p\" name=\"addbbcode14\" onclick=\"bbstyle(14)\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("BBCODE_P_HELP");
                echo "\"><i class=\"fa fa-picture-o\"></i></button>
\t\t";
            }
            // line 78
            echo "\t\t";
            if ((isset($context["S_LINKS_ALLOWED"]) ? $context["S_LINKS_ALLOWED"] : null)) {
                // line 79
                echo "\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"w\" name=\"addbbcode16\" onclick=\"bbstyle(16)\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("BBCODE_W_HELP");
                echo "\"><i class=\"fa fa-link\"></i></button>
\t\t";
            }
            // line 81
            echo "\t\t";
            if ((isset($context["S_BBCODE_FLASH"]) ? $context["S_BBCODE_FLASH"] : null)) {
                // line 82
                echo "\t\t<button type=\"button\" class=\"btn btn-default\" accesskey=\"d\" name=\"addbbcode18\" onclick=\"bbstyle(18)\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("BBCODE_D_HELP");
                echo "\"><i class=\"fa fa-flash\"></i></button>
\t\t";
            }
            // line 84
            echo "\t\t<button type=\"button\" class=\"btn btn-default\" name=\"bbpalette\" id=\"bbpalette\" value=\"";
            echo $this->env->getExtension('phpbb')->lang("FONT_COLOR");
            echo "\" onclick=\"change_palette();\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("BBCODE_S_HELP");
            echo "\"><i class=\"fa fa-paint-brush\"></i></button>
\t</div>

\t<div class=\"btn-group\">
\t\t<select name=\"addbbcode20\" class=\"form-control\" onchange=\"bbfontstyle('[size=' + this.form.addbbcode20.options[this.form.addbbcode20.selectedIndex].value + ']', '[/size]');this.form.addbbcode20.selectedIndex = 2;\" title=\"";
            // line 88
            echo $this->env->getExtension('phpbb')->lang("BBCODE_F_HELP");
            echo "\">
\t\t\t<option value=\"50\">";
            // line 89
            echo $this->env->getExtension('phpbb')->lang("FONT_TINY");
            echo "</option>
\t\t\t<option value=\"85\">";
            // line 90
            echo $this->env->getExtension('phpbb')->lang("FONT_SMALL");
            echo "</option>
\t\t\t<option value=\"100\" selected=\"selected\">";
            // line 91
            echo $this->env->getExtension('phpbb')->lang("FONT_NORMAL");
            echo "</option>
\t\t\t";
            // line 92
            if (((!(isset($context["MAX_FONT_SIZE"]) ? $context["MAX_FONT_SIZE"] : null)) || ((isset($context["MAX_FONT_SIZE"]) ? $context["MAX_FONT_SIZE"] : null) >= 150))) {
                // line 93
                echo "\t\t\t\t<option value=\"150\">";
                echo $this->env->getExtension('phpbb')->lang("FONT_LARGE");
                echo "</option>
\t\t\t\t";
                // line 94
                if (((!(isset($context["MAX_FONT_SIZE"]) ? $context["MAX_FONT_SIZE"] : null)) || ((isset($context["MAX_FONT_SIZE"]) ? $context["MAX_FONT_SIZE"] : null) >= 200))) {
                    // line 95
                    echo "\t\t\t\t\t<option value=\"200\">";
                    echo $this->env->getExtension('phpbb')->lang("FONT_HUGE");
                    echo "</option>
\t\t\t\t";
                }
                // line 97
                echo "\t\t\t";
            }
            // line 98
            echo "\t\t</select>
\t</div>

\t";
            // line 101
            // line 102
            echo "
\t";
            // line 103
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "custom_tags"))) {
                // line 104
                echo "\t<div class=\"btn-group\">
\t";
                // line 105
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "custom_tags"));
                foreach ($context['_seq'] as $context["_key"] => $context["custom_tags"]) {
                    // line 106
                    echo "\t\t<button type=\"button\" class=\"btn btn-default\" name=\"addbbcode";
                    echo $this->getAttribute((isset($context["custom_tags"]) ? $context["custom_tags"] : null), "BBCODE_ID");
                    echo "\" onclick=\"bbstyle(";
                    echo $this->getAttribute((isset($context["custom_tags"]) ? $context["custom_tags"] : null), "BBCODE_ID");
                    echo ")\" title=\"";
                    echo $this->getAttribute((isset($context["custom_tags"]) ? $context["custom_tags"] : null), "BBCODE_HELPLINE");
                    echo "\">";
                    echo $this->getAttribute((isset($context["custom_tags"]) ? $context["custom_tags"] : null), "BBCODE_TAG");
                    echo "</button>
\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_tags'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 108
                echo "\t</div>
\t";
            }
            // line 110
            echo "</div>
";
            // line 111
        }
    }

    public function getTemplateName()
    {
        return "posting_buttons.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  339 => 111,  336 => 110,  332 => 108,  317 => 106,  313 => 105,  304 => 101,  296 => 97,  290 => 95,  288 => 94,  283 => 93,  281 => 92,  273 => 90,  269 => 89,  265 => 88,  255 => 84,  246 => 81,  240 => 79,  229 => 75,  225 => 74,  221 => 73,  217 => 72,  204 => 69,  202 => 68,  198 => 67,  194 => 66,  190 => 65,  186 => 63,  185 => 62,  176 => 57,  172 => 55,  170 => 54,  167 => 53,  152 => 52,  143 => 46,  125 => 33,  114 => 31,  106 => 29,  102 => 28,  98 => 27,  94 => 26,  86 => 24,  78 => 22,  74 => 21,  70 => 20,  66 => 19,  62 => 18,  58 => 17,  54 => 16,  25 => 5,  649 => 192,  645 => 190,  639 => 187,  634 => 186,  631 => 185,  629 => 184,  626 => 183,  621 => 180,  615 => 178,  613 => 177,  607 => 176,  602 => 175,  598 => 173,  596 => 172,  593 => 171,  586 => 167,  580 => 166,  574 => 164,  571 => 163,  569 => 162,  566 => 161,  560 => 157,  537 => 156,  526 => 153,  523 => 152,  521 => 151,  518 => 150,  514 => 148,  512 => 147,  509 => 146,  499 => 144,  496 => 143,  488 => 141,  485 => 140,  477 => 138,  474 => 137,  466 => 135,  463 => 134,  455 => 132,  452 => 131,  444 => 129,  441 => 128,  433 => 126,  430 => 125,  429 => 124,  419 => 120,  417 => 119,  414 => 118,  409 => 115,  403 => 112,  400 => 111,  397 => 110,  390 => 106,  386 => 104,  384 => 103,  380 => 102,  370 => 100,  368 => 99,  365 => 98,  360 => 95,  353 => 91,  344 => 90,  337 => 89,  331 => 88,  327 => 87,  323 => 86,  316 => 85,  314 => 84,  310 => 104,  308 => 103,  305 => 102,  303 => 79,  299 => 98,  298 => 76,  292 => 72,  289 => 71,  280 => 70,  277 => 91,  270 => 68,  262 => 67,  249 => 82,  244 => 65,  237 => 78,  231 => 76,  212 => 71,  208 => 53,  203 => 51,  199 => 49,  197 => 48,  183 => 45,  179 => 43,  178 => 42,  175 => 41,  163 => 40,  160 => 39,  159 => 38,  156 => 37,  153 => 36,  150 => 35,  136 => 42,  132 => 33,  130 => 32,  113 => 29,  110 => 30,  108 => 27,  104 => 25,  95 => 21,  90 => 25,  87 => 19,  85 => 18,  82 => 23,  53 => 12,  45 => 11,  38 => 11,  35 => 7,  33 => 6,  30 => 5,  24 => 3,  22 => 2,  158 => 49,  148 => 41,  140 => 39,  137 => 38,  129 => 36,  126 => 35,  118 => 30,  116 => 32,  109 => 28,  105 => 26,  101 => 24,  97 => 25,  93 => 24,  89 => 22,  76 => 13,  73 => 20,  68 => 18,  65 => 17,  59 => 14,  55 => 13,  52 => 12,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
