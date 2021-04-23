<?php

/* admin_welcome_inactive.txt */
class __TwigTemplate_168d2308422777855b01b8c68e90082d extends Twig_Template
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
        echo "Subject: Добро пожаловать на конференцию «";
        echo (isset($context["SITENAME"]) ? $context["SITENAME"] : null);
        echo "»

";
        // line 3
        echo (isset($context["WELCOME_MSG"]) ? $context["WELCOME_MSG"] : null);
        echo "

Пожалуйста, сохраните это сообщение. Параметры вашей учётной записи таковы:

----------------------------
Имя пользователя: ";
        // line 8
        echo (isset($context["USERNAME"]) ? $context["USERNAME"] : null);
        echo "

Адрес конференции: ";
        // line 10
        echo (isset($context["U_BOARD"]) ? $context["U_BOARD"] : null);
        echo "
----------------------------

Ваша учётная запись в настоящее время неактивна и должна быть одобрена администратором прежде, чем вы сможете войти на конференцию. После активации вашей учётной записи вам придёт ещё одно сообщение.

Ваш пароль надёжно сохранён в нашей базе данных и не может быть извлечён из неё. Если вы всё же забудете свой пароль, то вы сможете восстановить его, используя для этого адрес электронной почты, связанный с вашей учётной записью.

Благодарим за регистрацию!

";
        // line 19
        echo (isset($context["EMAIL_SIG"]) ? $context["EMAIL_SIG"] : null);
        echo "
";
    }

    public function getTemplateName()
    {
        return "admin_welcome_inactive.txt";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  50 => 19,  38 => 10,  33 => 8,  25 => 3,  19 => 1,);
    }
}
