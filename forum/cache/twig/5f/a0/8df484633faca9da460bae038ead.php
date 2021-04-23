<?php

/* login_body.html */
class __TwigTemplate_5fa08df484633faca9da460bae038ead extends Twig_Template
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
<form action=\"";
        // line 3
        echo (isset($context["S_LOGIN_ACTION"]) ? $context["S_LOGIN_ACTION"] : null);
        echo "\" method=\"post\" id=\"login\" data-focus=\"";
        if ((isset($context["S_ADMIN_AUTH"]) ? $context["S_ADMIN_AUTH"] : null)) {
            echo (isset($context["PASSWORD_CREDENTIAL"]) ? $context["PASSWORD_CREDENTIAL"] : null);
        } else {
            echo (isset($context["USERNAME_CREDENTIAL"]) ? $context["USERNAME_CREDENTIAL"] : null);
        }
        echo "\">

<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4>";
        // line 10
        if ((isset($context["LOGIN_EXPLAIN"]) ? $context["LOGIN_EXPLAIN"] : null)) {
            echo (isset($context["LOGIN_EXPLAIN"]) ? $context["LOGIN_EXPLAIN"] : null);
        } else {
            echo $this->env->getExtension('phpbb')->lang("LOGIN");
        }
        echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">

\t\t\t\t<fieldset class=\"form-horizontal\">
\t\t\t\t";
        // line 15
        if ((isset($context["LOGIN_ERROR"]) ? $context["LOGIN_ERROR"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["LOGIN_ERROR"]) ? $context["LOGIN_ERROR"] : null);
            echo "</div>";
        }
        // line 16
        echo "\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"";
        // line 17
        echo (isset($context["USERNAME_CREDENTIAL"]) ? $context["USERNAME_CREDENTIAL"] : null);
        echo "\">";
        echo $this->env->getExtension('phpbb')->lang("USERNAME");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"text\" tabindex=\"1\" name=\"";
        // line 18
        echo (isset($context["USERNAME_CREDENTIAL"]) ? $context["USERNAME_CREDENTIAL"] : null);
        echo "\" id=\"";
        echo (isset($context["USERNAME_CREDENTIAL"]) ? $context["USERNAME_CREDENTIAL"] : null);
        echo "\" size=\"25\" value=\"";
        echo (isset($context["USERNAME"]) ? $context["USERNAME"] : null);
        echo "\" class=\"form-control\" /></dd>
\t\t\t\t</dl>
\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"";
        // line 21
        echo (isset($context["PASSWORD_CREDENTIAL"]) ? $context["PASSWORD_CREDENTIAL"] : null);
        echo "\">";
        echo $this->env->getExtension('phpbb')->lang("PASSWORD");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"password\" tabindex=\"2\" id=\"";
        // line 22
        echo (isset($context["PASSWORD_CREDENTIAL"]) ? $context["PASSWORD_CREDENTIAL"] : null);
        echo "\" name=\"";
        echo (isset($context["PASSWORD_CREDENTIAL"]) ? $context["PASSWORD_CREDENTIAL"] : null);
        echo "\" size=\"25\" class=\"form-control\" /></dd>
\t\t\t\t</dl>
\t\t\t\t";
        // line 24
        if (((isset($context["S_DISPLAY_FULL_LOGIN"]) ? $context["S_DISPLAY_FULL_LOGIN"] : null) && ((isset($context["U_SEND_PASSWORD"]) ? $context["U_SEND_PASSWORD"] : null) || (isset($context["U_RESEND_ACTIVATION"]) ? $context["U_RESEND_ACTIVATION"] : null)))) {
            // line 25
            echo "\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12 hidden-xs\">&nbsp;</dt>
\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\">
\t\t\t\t\t";
            // line 28
            if ((isset($context["U_RESEND_ACTIVATION"]) ? $context["U_RESEND_ACTIVATION"] : null)) {
                // line 29
                echo "\t\t\t\t\t\t<a href=\"";
                echo (isset($context["U_RESEND_ACTIVATION"]) ? $context["U_RESEND_ACTIVATION"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("RESEND_ACTIVATION");
                echo "</a>
\t\t\t\t\t";
            }
            // line 31
            echo "\t\t\t\t\t";
            if ((isset($context["U_SEND_PASSWORD"]) ? $context["U_SEND_PASSWORD"] : null)) {
                // line 32
                echo "\t\t\t\t\t\t<a href=\"";
                echo (isset($context["U_SEND_PASSWORD"]) ? $context["U_SEND_PASSWORD"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("FORGOT_PASS");
                echo "</a>
\t\t\t\t\t";
            }
            // line 34
            echo "\t\t\t\t\t</dd>
\t\t\t\t</dl>
\t\t\t\t";
        }
        // line 37
        echo "\t\t\t\t";
        if (((isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null) && (isset($context["S_CONFIRM_CODE"]) ? $context["S_CONFIRM_CODE"] : null))) {
            // line 38
            echo "\t\t\t\t\t";
            $value = 3;
            $context['definition']->set('CAPTCHA_TAB_INDEX', $value);
            // line 39
            echo "\t\t\t\t\t";
            $location = (("" . (isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null)) . "");
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $template = $this->env->resolveTemplate((("" . (isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null)) . ""));
            $template->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
            // line 40
            echo "\t\t\t\t";
        }
        // line 41
        echo "\t\t\t\t";
        if ((isset($context["S_DISPLAY_FULL_LOGIN"]) ? $context["S_DISPLAY_FULL_LOGIN"] : null)) {
            // line 42
            echo "\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12 hidden-xs\">&nbsp;</dt>
\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t\t";
            // line 45
            if ((isset($context["S_AUTOLOGIN_ENABLED"]) ? $context["S_AUTOLOGIN_ENABLED"] : null)) {
                // line 46
                echo "\t\t\t\t\t\t<label for=\"autologin\"><input type=\"checkbox\" name=\"autologin\" id=\"autologin\" tabindex=\"4\" /> ";
                echo $this->env->getExtension('phpbb')->lang("LOG_ME_IN");
                echo "</label><br />
\t\t\t\t\t";
            }
            // line 48
            echo "\t\t\t\t\t\t<label for=\"viewonline\"><input type=\"checkbox\" name=\"viewonline\" id=\"viewonline\" tabindex=\"5\" /> ";
            echo $this->env->getExtension('phpbb')->lang("HIDE_ME");
            echo "</label>
\t\t\t\t\t</dd>
\t\t\t\t</dl>
\t\t\t\t";
        }
        // line 52
        echo "
\t\t\t\t</fieldset>

\t\t\t\t";
        // line 55
        if (((!(isset($context["S_ADMIN_AUTH"]) ? $context["S_ADMIN_AUTH"] : null)) && (isset($context["PROVIDER_TEMPLATE_FILE"]) ? $context["PROVIDER_TEMPLATE_FILE"] : null))) {
            // line 56
            echo "\t\t\t\t\t";
            $location = (("" . (isset($context["PROVIDER_TEMPLATE_FILE"]) ? $context["PROVIDER_TEMPLATE_FILE"] : null)) . "");
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $template = $this->env->resolveTemplate((("" . (isset($context["PROVIDER_TEMPLATE_FILE"]) ? $context["PROVIDER_TEMPLATE_FILE"] : null)) . ""));
            $template->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
            // line 57
            echo "\t\t\t\t";
        }
        // line 58
        echo "\t\t\t\t</div>

\t\t\t\t<div class=\"panel-footer text-center\">
\t\t\t\t\t";
        // line 61
        echo (isset($context["S_LOGIN_REDIRECT"]) ? $context["S_LOGIN_REDIRECT"] : null);
        echo "
\t\t\t\t\t";
        // line 62
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "
\t\t\t\t\t<input type=\"submit\" name=\"login\" tabindex=\"6\" value=\"";
        // line 63
        echo $this->env->getExtension('phpbb')->lang("LOGIN");
        echo "\" class=\"btn btn-success\" />
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>
</div>


";
        // line 71
        if (((!(isset($context["S_ADMIN_AUTH"]) ? $context["S_ADMIN_AUTH"] : null)) && (isset($context["S_REGISTER_ENABLED"]) ? $context["S_REGISTER_ENABLED"] : null))) {
            // line 72
            echo "<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4>";
            // line 77
            echo $this->env->getExtension('phpbb')->lang("REGISTER");
            echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">
\t\t\t\t<p>";
            // line 80
            echo $this->env->getExtension('phpbb')->lang("LOGIN_INFO");
            echo "</p>

\t\t\t\t</div>

\t\t\t\t<div class=\"panel-footer text-center\">
\t\t\t\t\t<div class=\"btn-group\">
\t\t\t\t\t\t<a href=\"";
            // line 86
            echo (isset($context["U_TERMS_USE"]) ? $context["U_TERMS_USE"] : null);
            echo "\" class=\"btn btn-default\">";
            echo $this->env->getExtension('phpbb')->lang("TERMS_USE");
            echo "</a><a href=\"";
            echo (isset($context["U_PRIVACY"]) ? $context["U_PRIVACY"] : null);
            echo "\" class=\"btn btn-default\">";
            echo $this->env->getExtension('phpbb')->lang("PRIVACY");
            echo "</a>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>
</div>
";
        }
        // line 94
        echo "
</form>

";
        // line 97
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
        return "login_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  277 => 97,  272 => 94,  255 => 86,  246 => 80,  240 => 77,  233 => 72,  231 => 71,  220 => 63,  216 => 62,  212 => 61,  207 => 58,  204 => 57,  190 => 56,  188 => 55,  183 => 52,  175 => 48,  169 => 46,  167 => 45,  162 => 42,  159 => 41,  156 => 40,  142 => 39,  138 => 38,  135 => 37,  130 => 34,  122 => 32,  119 => 31,  111 => 29,  109 => 28,  104 => 25,  102 => 24,  95 => 22,  88 => 21,  78 => 18,  71 => 17,  68 => 16,  62 => 15,  50 => 10,  34 => 3,  31 => 2,  19 => 1,);
    }
}
