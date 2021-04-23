<?php

/* ucp_groups_membership.html */
class __TwigTemplate_0ea57b82d1fdaab95f5032af853264f8 extends Twig_Template
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
        echo $this->env->getExtension('phpbb')->lang("USERGROUPS");
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t<p>";
        // line 11
        echo $this->env->getExtension('phpbb')->lang("GROUPS_EXPLAIN");
        echo "</p>
\t";
        // line 12
        $value = 0;
        $context['definition']->set('SHOW_BUTTONS', $value);
        // line 13
        echo "\t";
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "leader"))) {
            // line 14
            echo "\t<div class=\"panel panel-default\">
\t\t<div class=\"clearfix\">
\t\t\t<h4 class=\"col-md-11 col-sm-10 col-xs-10\">";
            // line 16
            echo $this->env->getExtension('phpbb')->lang("GROUP_LEADER");
            echo "</h4>
\t\t\t<h5 class=\"col-md-1 col-sm-2 col-xs-2 text-center\">";
            // line 17
            echo $this->env->getExtension('phpbb')->lang("SELECT");
            echo "</h5>
\t\t</div>

\t\t";
            // line 20
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "leader"));
            foreach ($context['_seq'] as $context["_key"] => $context["leader"]) {
                // line 21
                echo "\t\t";
                if ((!$this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_SPECIAL"))) {
                    // line 22
                    echo "\t\t\t";
                    $value = 1;
                    $context['definition']->set('SHOW_BUTTONS', $value);
                    // line 23
                    echo "\t\t";
                }
                // line 24
                echo "\t\t<div class=\"clearfix icon";
                if (($this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "S_ROW_COUNT") % 2 == 1)) {
                    echo " bg1";
                } else {
                    echo " bg2";
                }
                echo "\">
\t\t\t<div class=\"col-md-11 col-sm-10 col-xs-10\">
\t\t\t\t";
                // line 26
                if ((isset($context["S_CHANGE_DEFAULT"]) ? $context["S_CHANGE_DEFAULT"] : null)) {
                    echo "<input title=\"";
                    echo $this->env->getExtension('phpbb')->lang("CHANGE_DEFAULT_GROUP");
                    echo "\" type=\"radio\" name=\"default\"";
                    if ($this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "S_GROUP_DEFAULT")) {
                        echo " checked=\"checked\"";
                    }
                    echo " value=\"";
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_ID");
                    echo "\" /> ";
                }
                // line 27
                echo "\t\t\t\t<a href=\"";
                echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "U_VIEW_GROUP");
                echo "\" class=\"forumtitle\"";
                if ($this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_COLOUR")) {
                    echo " style=\"color:#";
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_COLOUR");
                    echo "\"";
                }
                echo ">";
                echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_NAME");
                echo "</a>
\t\t\t\t";
                // line 28
                if ($this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_DESC")) {
                    echo "<br />";
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_DESC");
                }
                // line 29
                echo "\t\t\t\t";
                if ((!$this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_SPECIAL"))) {
                    echo "<br /><i>";
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_STATUS");
                    echo "</i>";
                }
                // line 30
                echo "\t\t\t</div>

\t\t\t<div class=\"col-md-1 col-sm-2 col-xs-2 text-center\"><input type=\"radio\" name=\"selected\" value=\"";
                // line 32
                echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_ID");
                echo "\" ";
                if ($this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_SPECIAL")) {
                    echo "disabled=\"disabled\"";
                }
                echo " /></div>
\t\t</div>
\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['leader'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 35
            echo "\t</div>
\t";
        }
        // line 37
        echo "
\t";
        // line 38
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "member"))) {
            // line 39
            echo "\t<div class=\"panel panel-default\">
\t\t<div class=\"clearfix\">
\t\t\t<h4 class=\"col-md-11 col-sm-10 col-xs-10\">";
            // line 41
            echo $this->env->getExtension('phpbb')->lang("GROUP_MEMBER");
            echo "</h4>
\t\t\t<h5 class=\"col-md-1 col-sm-2 col-xs-2 text-center\">";
            // line 42
            echo $this->env->getExtension('phpbb')->lang("SELECT");
            echo "</h5>
\t\t</div>

\t\t";
            // line 45
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "member"));
            foreach ($context['_seq'] as $context["_key"] => $context["member"]) {
                // line 46
                echo "\t\t";
                if ((!$this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_SPECIAL"))) {
                    // line 47
                    echo "\t\t\t";
                    $value = 1;
                    $context['definition']->set('SHOW_BUTTONS', $value);
                    // line 48
                    echo "\t\t";
                }
                echo "\t\t
\t\t<div class=\"clearfix icon";
                // line 49
                if (($this->getAttribute((isset($context["member"]) ? $context["member"] : null), "S_ROW_COUNT") % 2 == 1)) {
                    echo " bg1";
                } else {
                    echo " bg2";
                }
                echo "\">
\t\t\t<div class=\"col-md-11 col-sm-10 col-xs-10\">
\t\t\t\t";
                // line 51
                if ((isset($context["S_CHANGE_DEFAULT"]) ? $context["S_CHANGE_DEFAULT"] : null)) {
                    echo "<input title=\"";
                    echo $this->env->getExtension('phpbb')->lang("CHANGE_DEFAULT_GROUP");
                    echo "\" type=\"radio\" name=\"default\"";
                    if ($this->getAttribute((isset($context["member"]) ? $context["member"] : null), "S_GROUP_DEFAULT")) {
                        echo " checked=\"checked\"";
                    }
                    echo " value=\"";
                    echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_ID");
                    echo "\" /> ";
                }
                // line 52
                echo "\t\t\t\t<a href=\"";
                echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "U_VIEW_GROUP");
                echo "\" class=\"forumtitle\"";
                if ($this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_COLOUR")) {
                    echo " style=\"color:#";
                    echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_COLOUR");
                    echo "\"";
                }
                echo ">";
                echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_NAME");
                echo "</a>
\t\t\t\t";
                // line 53
                if ($this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_DESC")) {
                    echo "<br />";
                    echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_DESC");
                }
                // line 54
                echo "\t\t\t\t";
                if ((!$this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_SPECIAL"))) {
                    echo "<br /><i>";
                    echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_STATUS");
                    echo "</i>";
                }
                // line 55
                echo "\t\t\t</div>

\t\t\t<div class=\"col-md-1 col-sm-2 col-xs-2 text-center\"><input type=\"radio\" name=\"selected\" value=\"";
                // line 57
                echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_ID");
                echo "\" ";
                if ($this->getAttribute((isset($context["member"]) ? $context["member"] : null), "GROUP_SPECIAL")) {
                    echo "disabled=\"disabled\"";
                }
                echo " /></div>
\t\t</div>
\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['member'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 60
            echo "\t</div>
\t";
        }
        // line 62
        echo "
";
        // line 63
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pending"))) {
            // line 64
            echo "\t<div class=\"panel panel-default\">
\t\t<div class=\"clearfix\">
\t\t\t<h4 class=\"col-md-11 col-sm-10 col-xs-10\">";
            // line 66
            echo $this->env->getExtension('phpbb')->lang("GROUP_PENDING");
            echo "</h4>
\t\t\t<h5 class=\"col-md-1 col-sm-2 col-xs-2 text-center\">";
            // line 67
            echo $this->env->getExtension('phpbb')->lang("SELECT");
            echo "</h5>
\t\t</div>

\t\t";
            // line 70
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pending"));
            foreach ($context['_seq'] as $context["_key"] => $context["pending"]) {
                // line 71
                echo "\t\t";
                if ((!$this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "GROUP_SPECIAL"))) {
                    // line 72
                    echo "\t\t\t";
                    $value = 1;
                    $context['definition']->set('SHOW_BUTTONS', $value);
                    // line 73
                    echo "\t\t";
                }
                echo "\t\t\t
\t\t<div class=\"clearfix icon";
                // line 74
                if (($this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "S_ROW_COUNT") % 2 == 1)) {
                    echo " bg1";
                } else {
                    echo " bg2";
                }
                echo "\">
\t\t\t<div class=\"col-md-11 col-sm-10 col-xs-10\">
\t\t\t\t<a href=\"";
                // line 76
                echo $this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "U_VIEW_GROUP");
                echo "\" class=\"forumtitle\"";
                if ($this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "GROUP_COLOUR")) {
                    echo " style=\"color:#";
                    echo $this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "GROUP_COLOUR");
                    echo "\"";
                }
                echo ">";
                echo $this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "GROUP_NAME");
                echo "</a>
\t\t\t\t";
                // line 77
                if ($this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "GROUP_DESC")) {
                    echo "<br />";
                    echo $this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "GROUP_DESC");
                }
                // line 78
                echo "\t\t\t\t";
                if ((!$this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "GROUP_SPECIAL"))) {
                    echo "<br /><i>";
                    echo $this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "GROUP_STATUS");
                    echo "</i>";
                }
                // line 79
                echo "\t\t\t</div>

\t\t\t<div class=\"col-md-1 col-sm-2 col-xs-2 text-center\"><input type=\"radio\" name=\"selected\" value=\"";
                // line 81
                echo $this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "GROUP_ID");
                echo "\" ";
                if ($this->getAttribute((isset($context["pending"]) ? $context["pending"] : null), "GROUP_SPECIAL")) {
                    echo "disabled=\"disabled\"";
                }
                echo " /></div>
\t\t</div>
\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['pending'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 84
            echo "\t</div>
";
        }
        // line 86
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "nonmember"))) {
            // line 87
            echo "\t<div class=\"panel panel-default\">
\t\t<div class=\"clearfix\">
\t\t\t<h4 class=\"col-md-11 col-sm-10 col-xs-10\">";
            // line 89
            echo $this->env->getExtension('phpbb')->lang("GROUP_NONMEMBER");
            echo "</h4>
\t\t\t<h5 class=\"col-md-1 col-sm-2 col-xs-2 text-center\">";
            // line 90
            echo $this->env->getExtension('phpbb')->lang("SELECT");
            echo "</h5>
\t\t</div>

\t\t";
            // line 93
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "nonmember"));
            foreach ($context['_seq'] as $context["_key"] => $context["nonmember"]) {
                // line 94
                echo "\t\t";
                if ($this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "S_CAN_JOIN")) {
                    // line 95
                    echo "\t\t\t";
                    $value = 1;
                    $context['definition']->set('SHOW_BUTTONS', $value);
                    // line 96
                    echo "\t\t";
                }
                echo "\t\t
\t\t<div class=\"clearfix icon";
                // line 97
                if (($this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "S_ROW_COUNT") % 2 == 1)) {
                    echo " bg1";
                } else {
                    echo " bg2";
                }
                echo "\">
\t\t\t<div class=\"col-md-11 col-sm-10 col-xs-10\">
\t\t\t\t<a href=\"";
                // line 99
                echo $this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "U_VIEW_GROUP");
                echo "\" class=\"forumtitle\"";
                if ($this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "GROUP_COLOUR")) {
                    echo " style=\"color:#";
                    echo $this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "GROUP_COLOUR");
                    echo "\"";
                }
                echo ">";
                echo $this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "GROUP_NAME");
                echo "</a>
\t\t\t\t";
                // line 100
                if ($this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "GROUP_DESC")) {
                    echo "<br />";
                    echo $this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "GROUP_DESC");
                }
                // line 101
                echo "\t\t\t\t";
                if ((!$this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "GROUP_SPECIAL"))) {
                    echo "<br /><i>";
                    echo $this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "GROUP_STATUS");
                    echo "</i>";
                }
                // line 102
                echo "\t\t\t</div>

\t\t\t<div class=\"col-md-1 col-sm-2 col-xs-2 text-center\"><input type=\"radio\" name=\"selected\" value=\"";
                // line 104
                echo $this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "GROUP_ID");
                echo "\" ";
                if ((!$this->getAttribute((isset($context["nonmember"]) ? $context["nonmember"] : null), "S_CAN_JOIN"))) {
                    echo "disabled=\"disabled\"";
                }
                echo " /></div>
\t\t</div>
\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['nonmember'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 107
            echo "\t</div>
";
        }
        // line 109
        echo "
\t";
        // line 110
        if (((isset($context["S_CHANGE_DEFAULT"]) ? $context["S_CHANGE_DEFAULT"] : null) || ($this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "SHOW_BUTTONS") == 1))) {
            // line 111
            echo "\t<fieldset class=\"panel-group\">
\t\t";
            // line 112
            if ((isset($context["S_CHANGE_DEFAULT"]) ? $context["S_CHANGE_DEFAULT"] : null)) {
                // line 113
                echo "\t\t<div class=\"pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\">
\t\t\t<input class=\"btn btn-default\" type=\"submit\" name=\"change_default\" value=\"";
                // line 114
                echo $this->env->getExtension('phpbb')->lang("CHANGE_DEFAULT_GROUP");
                echo "\" />
\t\t\t";
                // line 115
                echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
                echo "
\t\t</div>
\t\t";
            }
            // line 118
            echo "
\t\t";
            // line 119
            if (($this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "SHOW_BUTTONS") == 1)) {
                // line 120
                echo "\t\t<div class=\"pull-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\">
\t\t\t<label for=\"action\">";
                // line 121
                echo $this->env->getExtension('phpbb')->lang("SELECT");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label> 
\t\t\t<select name=\"action\" id=\"action\">
\t\t\t\t<option value=\"join\">";
                // line 123
                echo $this->env->getExtension('phpbb')->lang("JOIN_SELECTED");
                echo "</option>
\t\t\t\t<option value=\"resign\">";
                // line 124
                echo $this->env->getExtension('phpbb')->lang("RESIGN_SELECTED");
                echo "</option>
\t\t\t\t<option value=\"demote\">";
                // line 125
                echo $this->env->getExtension('phpbb')->lang("DEMOTE_SELECTED");
                echo "</option>
\t\t\t</select>&nbsp;
\t\t\t<input class=\"btn btn-default\" type=\"submit\" name=\"submit\" value=\"";
                // line 127
                echo $this->env->getExtension('phpbb')->lang("SUBMIT");
                echo "\" />
\t\t\t";
                // line 128
                echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
                echo "
\t\t</div>
\t\t";
            }
            // line 131
            echo "\t</fieldset>
\t";
        }
        // line 133
        echo "
\t</div>
</div>\t

</form>

";
        // line 139
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
        return "ucp_groups_membership.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  509 => 139,  501 => 133,  497 => 131,  491 => 128,  487 => 127,  482 => 125,  478 => 124,  474 => 123,  468 => 121,  463 => 120,  461 => 119,  458 => 118,  452 => 115,  448 => 114,  443 => 113,  441 => 112,  438 => 111,  436 => 110,  433 => 109,  429 => 107,  416 => 104,  412 => 102,  405 => 101,  400 => 100,  388 => 99,  379 => 97,  374 => 96,  370 => 95,  367 => 94,  363 => 93,  357 => 90,  353 => 89,  349 => 87,  347 => 86,  343 => 84,  330 => 81,  326 => 79,  319 => 78,  314 => 77,  302 => 76,  293 => 74,  288 => 73,  284 => 72,  281 => 71,  277 => 70,  271 => 67,  267 => 66,  263 => 64,  261 => 63,  258 => 62,  254 => 60,  241 => 57,  237 => 55,  230 => 54,  225 => 53,  212 => 52,  200 => 51,  191 => 49,  186 => 48,  182 => 47,  179 => 46,  175 => 45,  169 => 42,  165 => 41,  161 => 39,  159 => 38,  156 => 37,  152 => 35,  139 => 32,  135 => 30,  128 => 29,  123 => 28,  110 => 27,  98 => 26,  88 => 24,  85 => 23,  81 => 22,  78 => 21,  74 => 20,  68 => 17,  64 => 16,  60 => 14,  57 => 13,  54 => 12,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
