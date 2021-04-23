<?php

/* report_body.html */
class __TwigTemplate_e928bac40791df27cc3466fa5bfd9d01 extends Twig_Template
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
        echo (isset($context["S_REPORT_ACTION"]) ? $context["S_REPORT_ACTION"] : null);
        echo "\" id=\"report\">

<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">";
        // line 10
        if ((isset($context["S_REPORT_POST"]) ? $context["S_REPORT_POST"] : null)) {
            echo $this->env->getExtension('phpbb')->lang("REPORT_POST");
        } else {
            echo $this->env->getExtension('phpbb')->lang("REPORT_MESSAGE");
        }
        echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">

\t\t\t\t\t<p>";
        // line 14
        if ((isset($context["S_REPORT_POST"]) ? $context["S_REPORT_POST"] : null)) {
            echo $this->env->getExtension('phpbb')->lang("REPORT_POST_EXPLAIN");
        } else {
            echo $this->env->getExtension('phpbb')->lang("REPORT_MESSAGE_EXPLAIN");
        }
        echo "</p>
\t\t\t\t\t
\t\t\t\t\t<fieldset class=\"form-horizontal\">
\t\t\t\t\t";
        // line 17
        if ((isset($context["ERROR"]) ? $context["ERROR"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR"]) ? $context["ERROR"] : null);
            echo "</div>";
        }
        // line 18
        echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"reason_id\">";
        // line 19
        echo $this->env->getExtension('phpbb')->lang("REASON");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><select name=\"reason_id\" id=\"reason_id\" class=\"form-control\">";
        // line 20
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "reason"));
        foreach ($context['_seq'] as $context["_key"] => $context["reason"]) {
            echo "<option value=\"";
            echo $this->getAttribute((isset($context["reason"]) ? $context["reason"] : null), "ID");
            echo "\"";
            if ($this->getAttribute((isset($context["reason"]) ? $context["reason"] : null), "S_SELECTED")) {
                echo " selected=\"selected\"";
            }
            echo ">";
            echo $this->getAttribute((isset($context["reason"]) ? $context["reason"] : null), "DESCRIPTION");
            echo "</option>";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['reason'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        echo "</select></dd>
\t\t\t\t\t</dl>
\t\t\t\t\t";
        // line 22
        if ((isset($context["S_CAN_NOTIFY"]) ? $context["S_CAN_NOTIFY"] : null)) {
            // line 23
            echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"notify1\">";
            // line 24
            echo $this->env->getExtension('phpbb')->lang("REPORT_NOTIFY");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("REPORT_NOTIFY_EXPLAIN");
            echo "</span></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\">
\t\t\t\t\t\t\t<label class=\"control-label\" for=\"notify1\"><input type=\"radio\" name=\"notify\" id=\"notify1\" value=\"1\" ";
            // line 26
            if ((!(isset($context["S_NOTIFY"]) ? $context["S_NOTIFY"] : null))) {
                echo "checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("YES");
            echo "</label> 
\t\t\t\t\t\t\t<label class=\"control-label\" for=\"notify0\"><input type=\"radio\" name=\"notify\" id=\"notify0\" value=\"0\" ";
            // line 27
            if ((isset($context["S_NOTIFY"]) ? $context["S_NOTIFY"] : null)) {
                echo "checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("NO");
            echo "</label>
\t\t\t\t\t\t</dd>
\t\t\t\t\t</dl>
\t\t\t\t\t";
        }
        // line 31
        echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"report_text\">";
        // line 32
        echo $this->env->getExtension('phpbb')->lang("MORE_INFO");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("CAN_LEAVE_BLANK");
        echo "</span></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><textarea name=\"report_text\" id=\"report_text\" rows=\"10\" cols=\"76\" class=\"form-control\">";
        // line 33
        echo (isset($context["REPORT_TEXT"]) ? $context["REPORT_TEXT"] : null);
        echo "</textarea></dd>
\t\t\t\t\t</dl>
\t\t\t\t\t";
        // line 35
        if ((isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null)) {
            // line 36
            echo "\t\t\t\t\t\t";
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
            // line 37
            echo "\t\t\t\t\t";
        }
        // line 38
        echo "\t\t\t\t\t</fieldset>

\t\t\t\t</div>

\t\t\t\t<fieldset class=\"panel-footer text-center\">
\t\t\t\t\t<input type=\"submit\" name=\"submit\" class=\"btn btn-success\" value=\"";
        // line 43
        echo $this->env->getExtension('phpbb')->lang("SUBMIT");
        echo "\" />&nbsp;
\t\t\t\t\t<input type=\"submit\" name=\"cancel\" class=\"btn btn-danger\" value=\"";
        // line 44
        echo $this->env->getExtension('phpbb')->lang("CANCEL");
        echo "\" />
\t\t\t\t\t";
        // line 45
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t\t\t\t</fieldset>
\t\t\t</div>
\t\t</div>
\t</div>
</div>

</form>

";
        // line 54
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
        return "report_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  192 => 54,  180 => 45,  176 => 44,  172 => 43,  165 => 38,  162 => 37,  148 => 36,  146 => 35,  141 => 33,  134 => 32,  131 => 31,  120 => 27,  112 => 26,  104 => 24,  101 => 23,  99 => 22,  79 => 20,  74 => 19,  71 => 18,  65 => 17,  55 => 14,  44 => 10,  34 => 3,  31 => 2,  19 => 1,);
    }
}
