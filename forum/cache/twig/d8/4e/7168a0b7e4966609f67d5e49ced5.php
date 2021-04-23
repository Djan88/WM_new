<?php

/* ucp_prefs_personal.html */
class __TwigTemplate_d84e7168a0b7e4966609f67d5e49ced5 extends Twig_Template
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
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t<fieldset class=\"form-horizontal\">
\t";
        // line 12
        if ((isset($context["ERROR"]) ? $context["ERROR"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR"]) ? $context["ERROR"] : null);
            echo "</div>";
        }
        // line 13
        echo "\t";
        // line 14
        echo "\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"viewemail0\">";
        // line 15
        echo $this->env->getExtension('phpbb')->lang("SHOW_EMAIL");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"viewemail1\"><input type=\"radio\" name=\"viewemail\" id=\"viewemail1\" value=\"1\"";
        // line 18
        if ((isset($context["S_VIEW_EMAIL"]) ? $context["S_VIEW_EMAIL"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label>
\t\t\t\t<label class=\"btn btn-default\" for=\"viewemail0\"><input type=\"radio\" name=\"viewemail\" id=\"viewemail0\" value=\"0\"";
        // line 19
        if ((!(isset($context["S_VIEW_EMAIL"]) ? $context["S_VIEW_EMAIL"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"massemail1\">";
        // line 24
        echo $this->env->getExtension('phpbb')->lang("ADMIN_EMAIL");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"massemail1\"><input type=\"radio\" name=\"massemail\" id=\"massemail1\" value=\"1\"";
        // line 27
        if ((isset($context["S_MASS_EMAIL"]) ? $context["S_MASS_EMAIL"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label>
\t\t\t\t<label class=\"btn btn-default\" for=\"massemail0\"><input type=\"radio\" name=\"massemail\" id=\"massemail0\" value=\"0\"";
        // line 28
        if ((!(isset($context["S_MASS_EMAIL"]) ? $context["S_MASS_EMAIL"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"allowpm1\">";
        // line 33
        echo $this->env->getExtension('phpbb')->lang("ALLOW_PM");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("ALLOW_PM_EXPLAIN");
        echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"allowpm1\"><input type=\"radio\" name=\"allowpm\" id=\"allowpm1\" value=\"1\"";
        // line 36
        if ((isset($context["S_ALLOW_PM"]) ? $context["S_ALLOW_PM"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label>
\t\t\t\t<label class=\"btn btn-default\" for=\"allowpm0\"><input type=\"radio\" name=\"allowpm\" id=\"allowpm0\" value=\"0\"";
        // line 37
        if ((!(isset($context["S_ALLOW_PM"]) ? $context["S_ALLOW_PM"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t";
        // line 41
        if ((isset($context["S_CAN_HIDE_ONLINE"]) ? $context["S_CAN_HIDE_ONLINE"] : null)) {
            // line 42
            echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"hideonline0\">";
            // line 43
            echo $this->env->getExtension('phpbb')->lang("HIDE_ONLINE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("HIDE_ONLINE_EXPLAIN");
            echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default\" for=\"hideonline1\"><input type=\"radio\" name=\"hideonline\" id=\"hideonline1\" value=\"1\"";
            // line 46
            if ((isset($context["S_HIDE_ONLINE"]) ? $context["S_HIDE_ONLINE"] : null)) {
                echo " checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("YES");
            echo "</label>
\t\t\t\t<label class=\"btn btn-default active\" for=\"hideonline0\"><input type=\"radio\" name=\"hideonline\" id=\"hideonline0\" value=\"0\"";
            // line 47
            if ((!(isset($context["S_HIDE_ONLINE"]) ? $context["S_HIDE_ONLINE"] : null))) {
                echo " checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("NO");
            echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t";
        }
        // line 52
        echo "
\t<hr />

\t";
        // line 55
        if ((isset($context["S_SELECT_NOTIFY"]) ? $context["S_SELECT_NOTIFY"] : null)) {
            // line 56
            echo "\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"notifymethod0\">";
            // line 57
            echo $this->env->getExtension('phpbb')->lang("NOTIFY_METHOD");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t\t<label for=\"notifymethod0\"><input type=\"radio\" name=\"notifymethod\" id=\"notifymethod0\" value=\"0\"";
            // line 59
            if ((isset($context["S_NOTIFY_EMAIL"]) ? $context["S_NOTIFY_EMAIL"] : null)) {
                echo " checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("NOTIFY_METHOD_EMAIL");
            echo "</label>
\t\t\t\t<label for=\"notifymethod1\"><input type=\"radio\" name=\"notifymethod\" id=\"notifymethod1\" value=\"1\"";
            // line 60
            if ((isset($context["S_NOTIFY_IM"]) ? $context["S_NOTIFY_IM"] : null)) {
                echo " checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("NOTIFY_METHOD_IM");
            echo "</label>
\t\t\t\t<label for=\"notifymethod2\"><input type=\"radio\" name=\"notifymethod\" id=\"notifymethod2\" value=\"2\"";
            // line 61
            if ((isset($context["S_NOTIFY_BOTH"]) ? $context["S_NOTIFY_BOTH"] : null)) {
                echo " checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("NOTIFY_METHOD_BOTH");
            echo "</label>
\t\t\t</dd>
\t\t</dl>
\t";
        }
        // line 65
        echo "\t";
        if ((isset($context["S_MORE_LANGUAGES"]) ? $context["S_MORE_LANGUAGES"] : null)) {
            // line 66
            echo "\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"lang\">";
            // line 67
            echo $this->env->getExtension('phpbb')->lang("BOARD_LANGUAGE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><select name=\"lang\" id=\"lang\">";
            // line 68
            echo (isset($context["S_LANG_OPTIONS"]) ? $context["S_LANG_OPTIONS"] : null);
            echo "</select></dd>
\t\t</dl>
\t";
        }
        // line 71
        echo "\t";
        if (((isset($context["S_STYLE_OPTIONS"]) ? $context["S_STYLE_OPTIONS"] : null) && (isset($context["S_MORE_STYLES"]) ? $context["S_MORE_STYLES"] : null))) {
            // line 72
            echo "\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"user_style\">";
            // line 73
            echo $this->env->getExtension('phpbb')->lang("BOARD_STYLE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><select name=\"user_style\" id=\"user_style\">";
            // line 74
            echo (isset($context["S_STYLE_OPTIONS"]) ? $context["S_STYLE_OPTIONS"] : null);
            echo "</select></dd>
\t\t</dl>
\t";
        }
        // line 77
        echo "\t";
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
        // line 78
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"dateformat\">";
        // line 79
        echo $this->env->getExtension('phpbb')->lang("BOARD_DATE_FORMAT");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("BOARD_DATE_FORMAT_EXPLAIN");
        echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<select class=\"form-control\" name=\"dateoptions\" id=\"dateoptions\" onchange=\"if(this.value=='custom'){phpbb.toggleDisplay('custom_date',1);}else{phpbb.toggleDisplay('custom_date',-1);} if (this.value == 'custom') { document.getElementById('dateformat').value = default_dateformat; } else { document.getElementById('dateformat').value = this.value; }\">
\t\t\t\t";
        // line 82
        echo (isset($context["S_DATEFORMAT_OPTIONS"]) ? $context["S_DATEFORMAT_OPTIONS"] : null);
        echo "
\t\t\t</select>
\t\t</dd>
\t\t<dd id=\"custom_date\" style=\"display:none;\"><input type=\"text\" name=\"dateformat\" id=\"dateformat\" value=\"";
        // line 85
        echo (isset($context["DATE_FORMAT"]) ? $context["DATE_FORMAT"] : null);
        echo "\" maxlength=\"30\" class=\"inputbox narrow\" style=\"margin-top: 3px;\" /></dd>
\t</dl>
\t";
        // line 87
        // line 88
        echo "\t</fieldset>

\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t";
        // line 93
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "<input type=\"reset\" value=\"";
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp;
\t\t<input type=\"submit\" name=\"submit\" value=\"";
        // line 94
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" class=\"btn btn-success\" />
\t\t";
        // line 95
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t</fieldset>
</div>

</form>

<script type=\"text/javascript\">
// <![CDATA[
\tvar date_format = '";
        // line 103
        echo (isset($context["A_DATE_FORMAT"]) ? $context["A_DATE_FORMAT"] : null);
        echo "';
\tvar default_dateformat = '";
        // line 104
        echo (isset($context["A_DEFAULT_DATEFORMAT"]) ? $context["A_DEFAULT_DATEFORMAT"] : null);
        echo "';

\tfunction customDates()
\t{
\t\tvar e = document.getElementById('dateoptions');

\t\te.selectedIndex = e.length - 1;

\t\t// Loop and match date_format in menu
\t\tfor (var i = 0; i < e.length; i++)
\t\t{
\t\t\tif (e.options[i].value == date_format)
\t\t\t{
\t\t\t\te.selectedIndex = i;
\t\t\t\tbreak;
\t\t\t}
\t\t}

\t\t// Show/hide custom field
\t\tif (e.selectedIndex == e.length - 1)
\t\t{
\t\t\tphpbb.toggleDisplay('custom_date',1);
\t\t}
\t\telse
\t\t{
\t\t\tphpbb.toggleDisplay('custom_date',-1);
\t\t}
\t}

\twindow.onload = customDates;
// ]]>
</script>

";
        // line 137
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
        return "ucp_prefs_personal.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  360 => 137,  324 => 104,  320 => 103,  309 => 95,  305 => 94,  299 => 93,  292 => 88,  291 => 87,  286 => 85,  280 => 82,  271 => 79,  268 => 78,  255 => 77,  249 => 74,  244 => 73,  241 => 72,  238 => 71,  232 => 68,  227 => 67,  224 => 66,  221 => 65,  210 => 61,  202 => 60,  194 => 59,  188 => 57,  185 => 56,  183 => 55,  178 => 52,  166 => 47,  158 => 46,  149 => 43,  146 => 42,  144 => 41,  133 => 37,  125 => 36,  116 => 33,  104 => 28,  96 => 27,  89 => 24,  77 => 19,  69 => 18,  62 => 15,  59 => 14,  57 => 13,  51 => 12,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
