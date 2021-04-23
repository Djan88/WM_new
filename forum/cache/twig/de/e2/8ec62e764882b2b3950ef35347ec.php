<?php

/* ucp_prefs_view.html */
class __TwigTemplate_dee28ec62e764882b2b3950ef35347ec extends Twig_Template
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
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"images1\">";
        // line 15
        echo $this->env->getExtension('phpbb')->lang("VIEW_IMAGES");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"images1\"><input type=\"radio\" name=\"images\" id=\"images1\" value=\"1\"";
        // line 18
        if ((isset($context["S_IMAGES"]) ? $context["S_IMAGES"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label> 
\t\t\t\t<label class=\"btn btn-default\" for=\"images0\"><input type=\"radio\" name=\"images\" id=\"images0\" value=\"0\"";
        // line 19
        if ((!(isset($context["S_IMAGES"]) ? $context["S_IMAGES"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"flash0\">";
        // line 24
        echo $this->env->getExtension('phpbb')->lang("VIEW_FLASH");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"flash1\"><input type=\"radio\" name=\"flash\" id=\"flash1\" value=\"1\"";
        // line 27
        if ((isset($context["S_FLASH"]) ? $context["S_FLASH"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label> 
\t\t\t\t<label class=\"btn btn-default\" for=\"flash0\"><input type=\"radio\" name=\"flash\" id=\"flash0\" value=\"0\"";
        // line 28
        if ((!(isset($context["S_FLASH"]) ? $context["S_FLASH"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"smilies1\">";
        // line 33
        echo $this->env->getExtension('phpbb')->lang("VIEW_SMILIES");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"smilies1\"><input type=\"radio\" name=\"smilies\" id=\"smilies1\" value=\"1\"";
        // line 36
        if ((isset($context["S_SMILIES"]) ? $context["S_SMILIES"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label> 
\t\t\t\t<label class=\"btn btn-default\" for=\"smilies0\"><input type=\"radio\" name=\"smilies\" id=\"smilies0\" value=\"0\"";
        // line 37
        if ((!(isset($context["S_SMILIES"]) ? $context["S_SMILIES"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"sigs1\">";
        // line 42
        echo $this->env->getExtension('phpbb')->lang("VIEW_SIGS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"sigs1\"><input type=\"radio\" name=\"sigs\" id=\"sigs1\" value=\"1\"";
        // line 45
        if ((isset($context["S_SIGS"]) ? $context["S_SIGS"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label> 
\t\t\t\t<label class=\"btn btn-default\" for=\"sigs0\"><input type=\"radio\" name=\"sigs\" id=\"sigs0\" value=\"0\"";
        // line 46
        if ((!(isset($context["S_SIGS"]) ? $context["S_SIGS"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"avatars1\">";
        // line 51
        echo $this->env->getExtension('phpbb')->lang("VIEW_AVATARS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"avatars1\"><input type=\"radio\" name=\"avatars\" id=\"avatars1\" value=\"1\"";
        // line 54
        if ((isset($context["S_AVATARS"]) ? $context["S_AVATARS"] : null)) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label> 
\t\t\t\t<label class=\"btn btn-default\" for=\"avatars0\"><input type=\"radio\" name=\"avatars\" id=\"avatars0\" value=\"0\"";
        // line 55
        if ((!(isset($context["S_AVATARS"]) ? $context["S_AVATARS"] : null))) {
            echo " checked=\"checked\"";
        }
        echo " /> ";
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</div>
\t\t</dd>
\t</dl>
\t";
        // line 59
        if ((isset($context["S_CHANGE_CENSORS"]) ? $context["S_CHANGE_CENSORS"] : null)) {
            // line 60
            echo "\t<dl class=\"form-group form-group-sm\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"wordcensor1\">";
            // line 61
            echo $this->env->getExtension('phpbb')->lang("DISABLE_CENSORS");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">
\t\t\t\t<label class=\"btn btn-default active\" for=\"wordcensor1\"><input type=\"radio\" name=\"wordcensor\" id=\"wordcensor1\" value=\"1\"";
            // line 64
            if ((isset($context["S_DISABLE_CENSORS"]) ? $context["S_DISABLE_CENSORS"] : null)) {
                echo " checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("YES");
            echo "</label> 
\t\t\t\t<label class=\"btn btn-default\" for=\"wordcensor0\"><input type=\"radio\" name=\"wordcensor\" id=\"wordcensor0\" value=\"0\"";
            // line 65
            if ((!(isset($context["S_DISABLE_CENSORS"]) ? $context["S_DISABLE_CENSORS"] : null))) {
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
        // line 70
        echo "\t";
        // line 71
        echo "\t<hr />
\t";
        // line 72
        // line 73
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\">";
        // line 74
        echo $this->env->getExtension('phpbb')->lang("VIEW_TOPICS_DAYS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
        // line 75
        echo (isset($context["S_TOPIC_SORT_DAYS"]) ? $context["S_TOPIC_SORT_DAYS"] : null);
        echo "</dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\">";
        // line 78
        echo $this->env->getExtension('phpbb')->lang("VIEW_TOPICS_KEY");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
        // line 79
        echo (isset($context["S_TOPIC_SORT_KEY"]) ? $context["S_TOPIC_SORT_KEY"] : null);
        echo "</dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\">";
        // line 82
        echo $this->env->getExtension('phpbb')->lang("VIEW_TOPICS_DIR");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
        // line 83
        echo (isset($context["S_TOPIC_SORT_DIR"]) ? $context["S_TOPIC_SORT_DIR"] : null);
        echo "</dd>
\t</dl>
\t<hr />
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\">";
        // line 87
        echo $this->env->getExtension('phpbb')->lang("VIEW_POSTS_DAYS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
        // line 88
        echo (isset($context["S_POST_SORT_DAYS"]) ? $context["S_POST_SORT_DAYS"] : null);
        echo "</dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\">";
        // line 91
        echo $this->env->getExtension('phpbb')->lang("VIEW_POSTS_KEY");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
        // line 92
        echo (isset($context["S_POST_SORT_KEY"]) ? $context["S_POST_SORT_KEY"] : null);
        echo "</dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\">";
        // line 95
        echo $this->env->getExtension('phpbb')->lang("VIEW_POSTS_DIR");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
        // line 96
        echo (isset($context["S_POST_SORT_DIR"]) ? $context["S_POST_SORT_DIR"] : null);
        echo "</dd>
\t</dl>
\t";
        // line 98
        // line 99
        echo "\t</fieldset>

\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t";
        // line 104
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "
\t\t<input type=\"reset\" value=\"";
        // line 105
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp; 
\t\t<input type=\"submit\" name=\"submit\" value=\"";
        // line 106
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" class=\"btn btn-success\" />
\t\t";
        // line 107
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t</fieldset>
</div>

</form>

";
        // line 113
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
        return "ucp_prefs_view.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  332 => 113,  323 => 107,  319 => 106,  315 => 105,  311 => 104,  304 => 99,  303 => 98,  298 => 96,  293 => 95,  287 => 92,  282 => 91,  276 => 88,  271 => 87,  264 => 83,  259 => 82,  253 => 79,  248 => 78,  242 => 75,  237 => 74,  234 => 73,  233 => 72,  230 => 71,  228 => 70,  216 => 65,  208 => 64,  201 => 61,  198 => 60,  196 => 59,  185 => 55,  177 => 54,  170 => 51,  158 => 46,  150 => 45,  143 => 42,  131 => 37,  123 => 36,  116 => 33,  104 => 28,  96 => 27,  89 => 24,  77 => 19,  69 => 18,  62 => 15,  59 => 14,  57 => 13,  51 => 12,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
