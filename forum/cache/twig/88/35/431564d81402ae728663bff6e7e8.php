<?php

/* memberlist_email.html */
class __TwigTemplate_8835431564d81402ae728663bff6e7e8 extends Twig_Template
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
<form method=\"post\" action=\"";
        // line 3
        echo (isset($context["S_POST_ACTION"]) ? $context["S_POST_ACTION"] : null);
        echo "\" id=\"post\">

<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">";
        // line 10
        if ((isset($context["S_CONTACT_ADMIN"]) ? $context["S_CONTACT_ADMIN"] : null)) {
            echo $this->env->getExtension('phpbb')->lang("CONTACT_ADMIN");
        } elseif ((isset($context["S_SEND_USER"]) ? $context["S_SEND_USER"] : null)) {
            echo $this->env->getExtension('phpbb')->lang("SEND_EMAIL_USER");
        } else {
            echo $this->env->getExtension('phpbb')->lang("EMAIL_TOPIC");
        }
        echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">

\t\t\t\t";
        // line 14
        if ((isset($context["CONTACT_INFO"]) ? $context["CONTACT_INFO"] : null)) {
            // line 15
            echo "\t\t\t\t<div class=\"alert alert-info\">";
            echo (isset($context["CONTACT_INFO"]) ? $context["CONTACT_INFO"] : null);
            echo "</div>
\t\t\t\t";
        }
        // line 17
        echo "
\t\t\t\t";
        // line 18
        if ((isset($context["ERROR_MESSAGE"]) ? $context["ERROR_MESSAGE"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR_MESSAGE"]) ? $context["ERROR_MESSAGE"] : null);
            echo "</div>";
        }
        // line 19
        echo "\t\t\t\t<fieldset class=\"form-horizontal\">
\t\t\t\t";
        // line 20
        if ((isset($context["S_SEND_USER"]) ? $context["S_SEND_USER"] : null)) {
            // line 21
            echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\">";
            // line 22
            echo $this->env->getExtension('phpbb')->lang("RECIPIENT");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\"><label class=\"control-label\">";
            // line 23
            echo (isset($context["USERNAME_FULL"]) ? $context["USERNAME_FULL"] : null);
            echo "</label></dd>
\t\t\t\t\t</dl>
\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"subject\">";
            // line 26
            echo $this->env->getExtension('phpbb')->lang("SUBJECT");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"text\" name=\"subject\" id=\"subject\" size=\"50\" tabindex=\"1\" value=\"";
            // line 27
            echo (isset($context["SUBJECT"]) ? $context["SUBJECT"] : null);
            echo "\" /></dd>
\t\t\t\t\t</dl>
\t\t\t\t";
        } elseif ((isset($context["S_CONTACT_ADMIN"]) ? $context["S_CONTACT_ADMIN"] : null)) {
            // line 30
            echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\">";
            // line 31
            echo $this->env->getExtension('phpbb')->lang("RECIPIENT");
            echo ":</label></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\"><label class=\"control-label\">";
            // line 32
            echo $this->env->getExtension('phpbb')->lang("ADMINISTRATOR");
            echo "</label></dd>
\t\t\t\t\t</dl>
\t\t\t\t\t";
            // line 34
            if ((!(isset($context["S_IS_REGISTERED"]) ? $context["S_IS_REGISTERED"] : null))) {
                // line 35
                echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"email\">";
                // line 36
                echo $this->env->getExtension('phpbb')->lang("SENDER_EMAIL_ADDRESS");
                echo ":</label></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"text\" name=\"email\" id=\"email\" size=\"50\" maxlength=\"100\" tabindex=\"1\" value=\"";
                // line 37
                echo (isset($context["EMAIL"]) ? $context["EMAIL"] : null);
                echo "\" /></dd>
\t\t\t\t\t</dl>
\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"name\">";
                // line 40
                echo $this->env->getExtension('phpbb')->lang("SENDER_NAME");
                echo ":</label></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"text\" name=\"name\" id=\"name\" size=\"50\" tabindex=\"2\" value=\"";
                // line 41
                echo (isset($context["NAME"]) ? $context["NAME"] : null);
                echo "\" /></dd>
\t\t\t\t\t</dl>
\t\t\t\t\t";
            }
            // line 44
            echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"subject\">";
            // line 45
            echo $this->env->getExtension('phpbb')->lang("SUBJECT");
            echo ":</label></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"text\" name=\"subject\" id=\"subject\" size=\"50\" tabindex=\"3\" value=\"";
            // line 46
            echo (isset($context["SUBJECT"]) ? $context["SUBJECT"] : null);
            echo "\" /></dd>
\t\t\t\t\t</dl>
\t\t\t\t";
        } else {
            // line 49
            echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"email\">";
            // line 50
            echo $this->env->getExtension('phpbb')->lang("EMAIL_ADDRESS");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"email\" name=\"email\" id=\"email\" size=\"50\" maxlength=\"100\" tabindex=\"2\" value=\"";
            // line 51
            echo (isset($context["EMAIL"]) ? $context["EMAIL"] : null);
            echo "\" /></dd>
\t\t\t\t\t</dl>
\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"name\">";
            // line 54
            echo $this->env->getExtension('phpbb')->lang("REAL_NAME");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"text\" name=\"name\" id=\"name\" size=\"50\" tabindex=\"3\" value=\"";
            // line 55
            echo (isset($context["NAME"]) ? $context["NAME"] : null);
            echo "\" /></dd>
\t\t\t\t\t</dl>
\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"lang\">";
            // line 58
            echo $this->env->getExtension('phpbb')->lang("DEST_LANG");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("DEST_LANG_EXPLAIN");
            echo "</span></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><select name=\"lang\">";
            // line 59
            echo (isset($context["S_LANG_OPTIONS"]) ? $context["S_LANG_OPTIONS"] : null);
            echo "</select></dd>
\t\t\t\t\t</dl>
\t\t\t\t";
        }
        // line 62
        echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"message\">";
        // line 63
        echo $this->env->getExtension('phpbb')->lang("MESSAGE_BODY");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("EMAIL_BODY_EXPLAIN");
        echo "</span></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\"><textarea class=\"form-control\" name=\"message\" id=\"message\" rows=\"15\" cols=\"76\" tabindex=\"4\">";
        // line 64
        echo (isset($context["MESSAGE"]) ? $context["MESSAGE"] : null);
        echo "</textarea></dd>
\t\t\t\t\t</dl>
\t\t\t\t";
        // line 66
        if ((isset($context["S_REGISTERED_USER"]) ? $context["S_REGISTERED_USER"] : null)) {
            // line 67
            echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12 hidden-xs\">&nbsp;</dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><label for=\"cc_sender\"><input type=\"checkbox\" name=\"cc_sender\" id=\"cc_sender\" value=\"1\" checked=\"checked\" tabindex=\"5\" /> ";
            // line 69
            echo $this->env->getExtension('phpbb')->lang("CC_SENDER");
            echo "</label></dd>
\t\t\t\t\t</dl>
\t\t\t\t";
        }
        // line 72
        echo "\t\t\t\t</fieldset>

\t\t\t\t</div>

\t\t\t\t<div class=\"panel-footer text-center\">
\t\t\t\t\t<input type=\"submit\" tabindex=\"6\" name=\"submit\" value=\"";
        // line 77
        echo $this->env->getExtension('phpbb')->lang("SEND_EMAIL");
        echo "\" class=\"btn btn-success\" />
\t\t\t\t";
        // line 78
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>
</div>

</form>

";
        // line 87
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
        return "memberlist_email.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  242 => 87,  230 => 78,  226 => 77,  219 => 72,  213 => 69,  209 => 67,  207 => 66,  202 => 64,  195 => 63,  192 => 62,  186 => 59,  179 => 58,  173 => 55,  168 => 54,  162 => 51,  157 => 50,  154 => 49,  148 => 46,  144 => 45,  141 => 44,  135 => 41,  131 => 40,  125 => 37,  121 => 36,  118 => 35,  116 => 34,  111 => 32,  107 => 31,  104 => 30,  98 => 27,  93 => 26,  87 => 23,  82 => 22,  79 => 21,  77 => 20,  74 => 19,  68 => 18,  65 => 17,  59 => 15,  57 => 14,  44 => 10,  34 => 3,  31 => 2,  19 => 1,);
    }
}
