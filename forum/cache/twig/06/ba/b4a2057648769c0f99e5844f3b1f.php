<?php

/* ucp_profile_autologin_keys.html */
class __TwigTemplate_06bab4a2057648769c0f99e5844f3b1f extends Twig_Template
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

\t\t<p>";
        // line 11
        echo $this->env->getExtension('phpbb')->lang("PROFILE_AUTOLOGIN_KEYS");
        echo "</p>
\t\t";
        // line 12
        if ((isset($context["ERROR"]) ? $context["ERROR"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR"]) ? $context["ERROR"] : null);
            echo "</div>";
        }
        // line 13
        echo "\t\t<div class=\"table-responsive\">
\t\t\t<table class=\"table table-bordered\">
\t\t\t\t<thead>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<th class=\"width-35\">";
        // line 17
        echo $this->env->getExtension('phpbb')->lang("LOGIN_KEY");
        echo "</th>
\t\t\t\t\t\t<th class=\"width-15 text-center\">";
        // line 18
        echo $this->env->getExtension('phpbb')->lang("IP");
        echo "</th>
\t\t\t\t\t\t<th class=\"width-35 text-center\">";
        // line 19
        echo $this->env->getExtension('phpbb')->lang("LOGIN_TIME");
        echo "</th>
\t\t\t\t\t\t<th class=\"text-center\">";
        // line 20
        echo $this->env->getExtension('phpbb')->lang("MARK");
        echo "</th>
\t\t\t\t\t</tr>
\t\t\t\t</thead>
\t\t\t\t<tbody>
\t\t\t\t";
        // line 24
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "sessions"));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["sessions"]) {
            // line 25
            echo "\t\t\t\t\t";
            if (($this->getAttribute((isset($context["sessions"]) ? $context["sessions"] : null), "S_ROW_COUNT") % 2 == 0)) {
                echo "<tr class=\"bg1\">";
            } else {
                echo "<tr class=\"bg2\">";
            }
            // line 26
            echo "\t\t\t\t\t\t<td class=\"width-35\"><label for=\"";
            echo $this->getAttribute((isset($context["sessions"]) ? $context["sessions"] : null), "KEY");
            echo "\">";
            echo $this->getAttribute((isset($context["sessions"]) ? $context["sessions"] : null), "KEY");
            echo "</label></td>
\t\t\t\t\t\t<td class=\"width-15 text-center\">";
            // line 27
            echo $this->getAttribute((isset($context["sessions"]) ? $context["sessions"] : null), "IP");
            echo "</td>
\t\t\t\t\t\t<td class=\"width-35 text-center\">";
            // line 28
            echo $this->getAttribute((isset($context["sessions"]) ? $context["sessions"] : null), "LOGIN_TIME");
            echo "</td>
\t\t\t\t\t\t<td class=\"text-center\"><input type=\"checkbox\" name=\"keys[]\" value=\"";
            // line 29
            echo $this->getAttribute((isset($context["sessions"]) ? $context["sessions"] : null), "KEY");
            echo "\" id=\"";
            echo $this->getAttribute((isset($context["sessions"]) ? $context["sessions"] : null), "KEY");
            echo "\" /></td>
\t\t\t\t\t</tr>
\t\t\t\t";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 32
            echo "\t\t\t\t\t<tr><td colspan=\"4\" class=\"bg1\" style=\"text-align: center\">";
            echo $this->env->getExtension('phpbb')->lang("PROFILE_NO_AUTOLOGIN_KEYS");
            echo "</td></tr>
\t\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['sessions'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 34
        echo "\t\t\t\t</tbody>
\t\t\t</table>
\t\t</div>

\t\t";
        // line 38
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "sessions"))) {
            // line 39
            echo "\t\t<fieldset class=\"text-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t\t";
            // line 40
            echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
            echo "
\t\t\t<div class=\"btn-group\">
\t\t\t\t<a href=\"#\" onclick=\"\$('#ucp input:checkbox').prop('checked', false); return false;\" class=\"btn btn-warning\">";
            // line 42
            echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
            echo "</a>
\t\t\t\t<input type=\"submit\" name=\"submit\" value=\"";
            // line 43
            echo $this->env->getExtension('phpbb')->lang("DELETE_MARKED");
            echo "\" class=\"btn btn-danger\" />
\t\t\t\t<a href=\"#\" onclick=\"\$('#ucp input:checkbox').prop('checked', true); return false;\" class=\"btn btn-info\">";
            // line 44
            echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
            echo "</a>
\t\t\t</div>
\t\t\t";
            // line 46
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t\t</fieldset>
\t\t";
        }
        // line 49
        echo "\t</div>
</div>

</form>

";
        // line 54
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
        return "ucp_profile_autologin_keys.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  175 => 54,  168 => 49,  162 => 46,  157 => 44,  153 => 43,  149 => 42,  144 => 40,  139 => 39,  137 => 38,  131 => 34,  122 => 32,  112 => 29,  108 => 28,  104 => 27,  97 => 26,  90 => 25,  85 => 24,  78 => 20,  74 => 19,  70 => 18,  66 => 17,  60 => 13,  54 => 12,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
