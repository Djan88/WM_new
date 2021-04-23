<?php

/* confirm_delete_body.html */
class __TwigTemplate_1250ce0a5bb5ee1787a9229def9b417d extends Twig_Template
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
        if ((isset($context["S_AJAX_REQUEST"]) ? $context["S_AJAX_REQUEST"] : null)) {
            // line 2
            echo "\t<form action=\"";
            echo (isset($context["S_CONFIRM_ACTION"]) ? $context["S_CONFIRM_ACTION"] : null);
            echo "\" method=\"post\">
\t\t<p>";
            // line 3
            echo (isset($context["MESSAGE_TEXT"]) ? $context["MESSAGE_TEXT"] : null);
            echo "</p>

\t\t";
            // line 5
            if ((!(isset($context["S_SHADOW_TOPICS"]) ? $context["S_SHADOW_TOPICS"] : null))) {
                // line 6
                echo "\t\t";
                if ((((!(isset($context["S_SOFTDELETED"]) ? $context["S_SOFTDELETED"] : null)) && (isset($context["S_ALLOWED_DELETE"]) ? $context["S_ALLOWED_DELETE"] : null)) && (isset($context["S_ALLOWED_SOFTDELETE"]) ? $context["S_ALLOWED_SOFTDELETE"] : null))) {
                    // line 7
                    echo "\t\t\t<label>
\t\t\t\t<strong>";
                    // line 8
                    echo $this->env->getExtension('phpbb')->lang("DELETE_PERMANENTLY");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</strong><br />
\t\t\t\t";
                    // line 9
                    if ((isset($context["S_TOPIC_MODE"]) ? $context["S_TOPIC_MODE"] : null)) {
                        echo $this->env->getExtension('phpbb')->lang("DELETE_TOPIC_PERMANENTLY");
                    } else {
                        echo $this->env->getExtension('phpbb')->lang("DELETE_POST_PERMANENTLY");
                    }
                    // line 10
                    echo "\t\t\t\t<input id=\"delete_permanent\" name=\"delete_permanent\" type=\"checkbox\" value=\"1\" ";
                    echo (isset($context["S_CHECKED_PERMANENT"]) ? $context["S_CHECKED_PERMANENT"] : null);
                    echo " />
\t\t\t</label>
\t\t";
                }
                // line 13
                echo "
\t\t<label for=\"delete_reason\">
\t\t\t<strong>";
                // line 15
                echo $this->env->getExtension('phpbb')->lang("DELETE_REASON");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</strong><br /><span class=\"help-block\">";
                echo $this->env->getExtension('phpbb')->lang("DELETE_REASON_EXPLAIN");
                echo "</span>
\t\t\t<input type=\"text\" name=\"delete_reason\" value=\"\" class=\"form-control\" maxlength=\"120\" size=\"45\" />
\t\t</label>
\t\t";
            }
            // line 19
            echo "
\t\t<fieldset class=\"text-center\">
\t\t\t<input type=\"button\" name=\"confirm\" value=\"";
            // line 21
            echo $this->env->getExtension('phpbb')->lang("YES");
            echo "\" class=\"btn btn-danger\" />&nbsp;
\t\t\t<input type=\"button\" name=\"cancel\" value=\"";
            // line 22
            echo $this->env->getExtension('phpbb')->lang("NO");
            echo "\" class=\"btn btn-primary\" />
\t\t</fieldset>
\t</form>

";
        } else {
            // line 27
            echo "
";
            // line 28
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
            // line 29
            echo "
<form id=\"confirm\" action=\"";
            // line 30
            echo (isset($context["S_CONFIRM_ACTION"]) ? $context["S_CONFIRM_ACTION"] : null);
            echo "\" method=\"post\">
<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">";
            // line 36
            echo (isset($context["MESSAGE_TITLE"]) ? $context["MESSAGE_TITLE"] : null);
            echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">

\t\t\t\t<p>";
            // line 40
            echo (isset($context["MESSAGE_TEXT"]) ? $context["MESSAGE_TEXT"] : null);
            echo "</p>

\t\t\t\t";
            // line 42
            if ((!(isset($context["S_SHADOW_TOPICS"]) ? $context["S_SHADOW_TOPICS"] : null))) {
                // line 43
                echo "\t\t\t\t<fieldset class=\"form-horizontal\">
\t\t\t\t\t";
                // line 44
                if ((((!(isset($context["S_SOFTDELETED"]) ? $context["S_SOFTDELETED"] : null)) && (isset($context["S_ALLOWED_DELETE"]) ? $context["S_ALLOWED_DELETE"] : null)) && (isset($context["S_ALLOWED_SOFTDELETE"]) ? $context["S_ALLOWED_SOFTDELETE"] : null))) {
                    // line 45
                    echo "\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"delete_permanent\">";
                    // line 46
                    echo $this->env->getExtension('phpbb')->lang("DELETE_PERMANENTLY");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\">
\t\t\t\t\t\t\t<label class=\"control-label\" for=\"delete_permanent\">
\t\t\t\t\t\t\t\t<input id=\"delete_permanent\" name=\"delete_permanent\" type=\"checkbox\" value=\"1\" ";
                    // line 49
                    echo (isset($context["S_CHECKED_PERMANENT"]) ? $context["S_CHECKED_PERMANENT"] : null);
                    echo " />
\t\t\t\t\t\t\t\t";
                    // line 50
                    if ((isset($context["S_TOPIC_MODE"]) ? $context["S_TOPIC_MODE"] : null)) {
                        echo $this->env->getExtension('phpbb')->lang("DELETE_TOPIC_PERMANENTLY");
                    } else {
                        echo $this->env->getExtension('phpbb')->lang("DELETE_POST_PERMANENTLY");
                    }
                    // line 51
                    echo "\t\t\t\t\t\t\t</label>
\t\t\t\t\t\t</dd>
\t\t\t\t\t</dl>
\t\t\t\t\t";
                }
                // line 55
                echo "
\t\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"delete_reason\">";
                // line 57
                echo $this->env->getExtension('phpbb')->lang("DELETE_REASON");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label><br /><span class=\"help-block\">";
                echo $this->env->getExtension('phpbb')->lang("DELETE_REASON_EXPLAIN");
                echo "</span></dt>
\t\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"text\" name=\"delete_reason\" id=\"delete_reason\" value=\"\" class=\"form-control autowidth\" maxlength=\"120\" size=\"45\" /></dd>
\t\t\t\t\t</dl>
\t\t\t\t</fieldset>
\t\t\t\t";
            }
            // line 62
            echo "
\t\t\t\t</div>

\t\t\t\t<fieldset class=\"panel-footer text-center\">
\t\t\t\t\t";
            // line 66
            echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
            echo "
\t\t\t\t\t<input type=\"submit\" name=\"confirm\" value=\"";
            // line 67
            echo $this->env->getExtension('phpbb')->lang("YES");
            echo "\" class=\"btn btn-danger\" />&nbsp; 
\t\t\t\t\t<input type=\"submit\" name=\"cancel\" value=\"";
            // line 68
            echo $this->env->getExtension('phpbb')->lang("NO");
            echo "\" class=\"btn btn-primary\" />
\t\t\t\t</fieldset>
\t\t\t</div>
\t\t</div>
\t</div>
</div>
</form>

";
            // line 76
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
    }

    public function getTemplateName()
    {
        return "confirm_delete_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  199 => 76,  188 => 68,  184 => 67,  180 => 66,  174 => 62,  163 => 57,  159 => 55,  153 => 51,  147 => 50,  143 => 49,  136 => 46,  133 => 45,  131 => 44,  128 => 43,  126 => 42,  121 => 40,  114 => 36,  105 => 30,  102 => 29,  90 => 28,  87 => 27,  79 => 22,  75 => 21,  71 => 19,  61 => 15,  57 => 13,  50 => 10,  44 => 9,  39 => 8,  36 => 7,  33 => 6,  31 => 5,  26 => 3,  21 => 2,  19 => 1,);
    }
}
