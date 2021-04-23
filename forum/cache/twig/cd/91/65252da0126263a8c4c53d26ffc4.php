<?php

/* mcp_ban.html */
class __TwigTemplate_cd9165252da0126263a8c4c53d26ffc4 extends Twig_Template
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
        $location = "mcp_header.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("mcp_header.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 2
        echo "
<script type=\"text/javascript\">
// <![CDATA[

\tvar ban_length = new Array();
\t\tban_length[-1] = '';
\tvar ban_reason = new Array();
\t\tban_reason[-1] = '';
\tvar ban_give_reason = new Array();
\t\tban_give_reason[-1] = '';

\t";
        // line 13
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "bans"));
        foreach ($context['_seq'] as $context["_key"] => $context["bans"]) {
            // line 14
            echo "\t\tban_length['";
            echo $this->getAttribute((isset($context["bans"]) ? $context["bans"] : null), "BAN_ID");
            echo "'] = '";
            echo $this->getAttribute((isset($context["bans"]) ? $context["bans"] : null), "A_LENGTH");
            echo "';
\t\t";
            // line 15
            if ($this->getAttribute((isset($context["bans"]) ? $context["bans"] : null), "A_REASON")) {
                // line 16
                echo "\t\t\tban_reason['";
                echo $this->getAttribute((isset($context["bans"]) ? $context["bans"] : null), "BAN_ID");
                echo "'] = '";
                echo $this->getAttribute((isset($context["bans"]) ? $context["bans"] : null), "A_REASON");
                echo "';
\t\t";
            }
            // line 18
            echo "\t\t";
            if ($this->getAttribute((isset($context["bans"]) ? $context["bans"] : null), "A_GIVE_REASON")) {
                // line 19
                echo "\t\t\tban_give_reason['";
                echo $this->getAttribute((isset($context["bans"]) ? $context["bans"] : null), "BAN_ID");
                echo "'] = '";
                echo $this->getAttribute((isset($context["bans"]) ? $context["bans"] : null), "A_GIVE_REASON");
                echo "';
\t\t";
            }
            // line 21
            echo "\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['bans'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 22
        echo "
\tfunction display_details(option)
\t{
\t\tdocument.getElementById('unbanlength').innerHTML = ban_length[option];
\t\tif (option in ban_reason) {
\t\t\tdocument.getElementById('unbanreason').innerHTML = ban_reason[option];
\t\t} else {
\t\t\tdocument.getElementById('unbanreason').innerHTML = '';
\t\t}
\t\tif (option in ban_give_reason) {
\t\t\tdocument.getElementById('unbangivereason').innerHTML = ban_give_reason[option];
\t\t} else {
\t\t\tdocument.getElementById('unbangivereason').innerHTML = '';
\t\t}
\t}

// ]]>
</script>

<form id=\"mcp_ban\" method=\"post\" action=\"";
        // line 41
        echo (isset($context["U_ACTION"]) ? $context["U_ACTION"] : null);
        echo "\">

<h3>";
        // line 43
        echo $this->env->getExtension('phpbb')->lang("TITLE");
        echo "</h3>

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 47
        echo $this->env->getExtension('phpbb')->lang("TITLE");
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t<p>";
        // line 51
        echo $this->env->getExtension('phpbb')->lang("EXPLAIN");
        echo "</p>

\t<fieldset class=\"form-horizontal\">
\t";
        // line 54
        // line 55
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"ban\">";
        // line 56
        echo $this->env->getExtension('phpbb')->lang("BAN_CELL");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<textarea name=\"ban\" id=\"ban\" class=\"form-control\" cols=\"40\" rows=\"3\">";
        // line 58
        echo (isset($context["BAN_QUANTIFIER"]) ? $context["BAN_QUANTIFIER"] : null);
        echo "</textarea>&nbsp;
\t\t\t";
        // line 59
        if ((isset($context["S_USERNAME_BAN"]) ? $context["S_USERNAME_BAN"] : null)) {
            echo "<a href=\"";
            echo (isset($context["U_FIND_USERNAME"]) ? $context["U_FIND_USERNAME"] : null);
            echo "\" onclick=\"find_username(this.href); return false;\" class=\"btn btn-default\">";
            echo $this->env->getExtension('phpbb')->lang("FIND_USERNAME");
            echo "</a>";
        }
        // line 60
        echo "\t\t</dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"banlength\">";
        // line 63
        echo $this->env->getExtension('phpbb')->lang("BAN_LENGTH");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><select class=\"form-control\" name=\"banlength\" id=\"banlength\" onchange=\"if(this.value==-1){document.getElementById('banlengthother').style.display = 'block';}else{document.getElementById('banlengthother').style.display='none';}\">";
        // line 64
        echo (isset($context["S_BAN_END_OPTIONS"]) ? $context["S_BAN_END_OPTIONS"] : null);
        echo "</select></dd>
\t\t<dd id=\"banlengthother\" style=\"display: none;\"><label><input type=\"text\" name=\"banlengthother\" class=\"inputbox\" /><br /><span>";
        // line 65
        echo $this->env->getExtension('phpbb')->lang("YEAR_MONTH_DAY");
        echo "</span></label></dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"banreason\">";
        // line 68
        echo $this->env->getExtension('phpbb')->lang("BAN_REASON");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input name=\"banreason\" id=\"banreason\" type=\"text\" class=\"form-control\" maxlength=\"255\" /></dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"bangivereason\">";
        // line 72
        echo $this->env->getExtension('phpbb')->lang("BAN_GIVE_REASON");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input name=\"bangivereason\" id=\"bangivereason\" type=\"text\" class=\"form-control\" maxlength=\"255\" /></dd>
\t</dl>

\t<hr />

\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"banexclude0\">";
        // line 79
        echo $this->env->getExtension('phpbb')->lang("BAN_EXCLUDE");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("BAN_EXCLUDE_EXPLAIN");
        echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12\">
\t\t\t<label for=\"banexclude1\"><input type=\"radio\" name=\"banexclude\" id=\"banexclude1\" value=\"1\" /> ";
        // line 81
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label> 
\t\t\t<label for=\"banexclude0\"><input type=\"radio\" name=\"banexclude\" id=\"banexclude0\" value=\"0\" checked=\"checked\" /> ";
        // line 82
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t</dd>
\t</dl>
\t";
        // line 85
        // line 86
        echo "\t</fieldset>

\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t";
        // line 91
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "<input type=\"reset\" value=\"";
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp; 
\t\t<input type=\"submit\" name=\"bansubmit\" value=\"";
        // line 92
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" class=\"btn btn-success\" />
\t\t";
        // line 93
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t</fieldset>
</div>

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 99
        echo $this->env->getExtension('phpbb')->lang("UNBAN_TITLE");
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t<p>";
        // line 103
        echo $this->env->getExtension('phpbb')->lang("UNBAN_EXPLAIN");
        echo "</p>

\t";
        // line 105
        if ((isset($context["S_BANNED_OPTIONS"]) ? $context["S_BANNED_OPTIONS"] : null)) {
            // line 106
            echo "\t\t<fieldset class=\"form-horizontal\">
\t\t";
            // line 107
            // line 108
            echo "\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"unban\">";
            // line 109
            echo $this->env->getExtension('phpbb')->lang("BAN_CELL");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><select class=\"form-control\" name=\"unban[]\" id=\"unban\" multiple=\"multiple\" size=\"5\" onchange=\"if (this.selectedIndex != -1) {display_details(this.options[this.selectedIndex].value);}\">";
            // line 110
            echo (isset($context["BANNED_OPTIONS"]) ? $context["BANNED_OPTIONS"] : null);
            echo "</select></dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\">";
            // line 113
            echo $this->env->getExtension('phpbb')->lang("BAN_LENGTH");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12\"><strong id=\"unbanlength\"></strong></dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\">";
            // line 117
            echo $this->env->getExtension('phpbb')->lang("BAN_REASON");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12\"><strong id=\"unbanreason\"></strong></dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\">";
            // line 121
            echo $this->env->getExtension('phpbb')->lang("BAN_GIVE_REASON");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12\"><strong id=\"unbangivereason\"></strong></dd>
\t\t</dl>
\t\t";
            // line 124
            // line 125
            echo "\t\t</fieldset>

\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t";
            // line 130
            echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
            echo "<input type=\"reset\" value=\"";
            echo $this->env->getExtension('phpbb')->lang("RESET");
            echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp; 
\t\t<input type=\"submit\" name=\"unbansubmit\" value=\"";
            // line 131
            echo $this->env->getExtension('phpbb')->lang("SUBMIT");
            echo "\" class=\"btn btn-success\" />
\t</fieldset>
</div>
\t";
        } else {
            // line 135
            echo "
\t<div class=\"alert alert-info\">
\t\t";
            // line 137
            echo $this->env->getExtension('phpbb')->lang("NO_BAN_CELL");
            echo "
\t</div>

\t</div>
</div>

\t";
        }
        // line 144
        echo "</form>

";
        // line 146
        $location = "mcp_footer.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("mcp_footer.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
    }

    public function getTemplateName()
    {
        return "mcp_ban.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  328 => 146,  324 => 144,  314 => 137,  310 => 135,  303 => 131,  297 => 130,  290 => 125,  289 => 124,  282 => 121,  274 => 117,  266 => 113,  260 => 110,  255 => 109,  252 => 108,  251 => 107,  248 => 106,  246 => 105,  241 => 103,  234 => 99,  225 => 93,  221 => 92,  215 => 91,  208 => 86,  207 => 85,  201 => 82,  197 => 81,  189 => 79,  178 => 72,  170 => 68,  164 => 65,  160 => 64,  155 => 63,  150 => 60,  142 => 59,  138 => 58,  132 => 56,  129 => 55,  128 => 54,  122 => 51,  115 => 47,  108 => 43,  103 => 41,  82 => 22,  76 => 21,  68 => 19,  65 => 18,  57 => 16,  55 => 15,  48 => 14,  44 => 13,  31 => 2,  19 => 1,);
    }
}
