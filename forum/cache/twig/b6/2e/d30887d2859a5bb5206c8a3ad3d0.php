<?php

/* search_body.html */
class __TwigTemplate_b62ed30887d2859a5bb5206c8a3ad3d0 extends Twig_Template
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
<form method=\"get\" action=\"";
        // line 3
        echo (isset($context["S_SEARCH_ACTION"]) ? $context["S_SEARCH_ACTION"] : null);
        echo "\" data-focus=\"keywords\">

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 7
        echo $this->env->getExtension('phpbb')->lang("SEARCH");
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t\t<fieldset class=\"form-horizontal\">
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-5 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"keywords\">";
        // line 13
        echo $this->env->getExtension('phpbb')->lang("SEARCH_KEYWORDS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("SEARCH_KEYWORDS_EXPLAIN");
        echo "</span></dt>
\t\t\t<dd class=\"col-md-7 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t<input type=\"search\" class=\"inputbox\" name=\"keywords\" id=\"keywords\" size=\"40\" title=\"";
        // line 15
        echo $this->env->getExtension('phpbb')->lang("SEARCH_KEYWORDS");
        echo "\" /><br />
\t\t\t\t<label for=\"terms1\"><input type=\"radio\" name=\"terms\" id=\"terms1\" value=\"all\" checked=\"checked\" /> ";
        // line 16
        echo $this->env->getExtension('phpbb')->lang("SEARCH_ALL_TERMS");
        echo "</label><br />
\t\t\t\t<label for=\"terms2\"><input type=\"radio\" name=\"terms\" id=\"terms2\" value=\"any\" /> ";
        // line 17
        echo $this->env->getExtension('phpbb')->lang("SEARCH_ANY_TERMS");
        echo "</label>
\t\t\t</dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-5 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"author\">";
        // line 21
        echo $this->env->getExtension('phpbb')->lang("SEARCH_AUTHOR");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("SEARCH_AUTHOR_EXPLAIN");
        echo "</span></dt>
\t\t\t<dd class=\"col-md-7 col-sm-8 col-xs-12 form-inline\"><input type=\"search\" class=\"inputbox\" name=\"author\" id=\"author\" size=\"40\" title=\"";
        // line 22
        echo $this->env->getExtension('phpbb')->lang("SEARCH_AUTHOR");
        echo "\" /></dd>
\t\t</dl>
\t\t</fieldset>

\t<hr />

\t\t<fieldset class=\"form-horizontal\">
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-5 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"search_forum\">";
        // line 30
        echo $this->env->getExtension('phpbb')->lang("SEARCH_FORUMS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label><br /><span class=\"help-block\">";
        echo $this->env->getExtension('phpbb')->lang("SEARCH_FORUMS_EXPLAIN");
        echo "</span></dt>
\t\t\t<dd class=\"col-md-7 col-sm-8 col-xs-12 form-inline\"><select name=\"fid[]\" id=\"search_forum\" multiple=\"multiple\" size=\"8\" title=\"";
        // line 31
        echo $this->env->getExtension('phpbb')->lang("SEARCH_FORUMS");
        echo "\">";
        echo (isset($context["S_FORUM_OPTIONS"]) ? $context["S_FORUM_OPTIONS"] : null);
        echo "</select></dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-5 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"search_child1\">";
        // line 34
        echo $this->env->getExtension('phpbb')->lang("SEARCH_SUBFORUMS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t<dd class=\"col-md-7 col-sm-8 col-xs-12\">
\t\t\t\t<label class=\"control-label\" for=\"search_child1\"><input type=\"radio\" name=\"sc\" id=\"search_child1\" value=\"1\" checked=\"checked\" /> ";
        // line 36
        echo $this->env->getExtension('phpbb')->lang("YES");
        echo "</label>
\t\t\t\t<label class=\"control-label\" for=\"search_child2\"><input type=\"radio\" name=\"sc\" id=\"search_child2\" value=\"0\" /> ";
        // line 37
        echo $this->env->getExtension('phpbb')->lang("NO");
        echo "</label>
\t\t\t</dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-5 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"sf1\">";
        // line 41
        echo $this->env->getExtension('phpbb')->lang("SEARCH_WITHIN");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t<dd class=\"col-md-7 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t<label class=\"control-label\" for=\"sf1\"><input type=\"radio\" name=\"sf\" id=\"sf1\" value=\"all\" checked=\"checked\" /> ";
        // line 43
        echo $this->env->getExtension('phpbb')->lang("SEARCH_TITLE_MSG");
        echo "</label><br />
\t\t\t\t<label class=\"control-label\" for=\"sf2\"><input type=\"radio\" name=\"sf\" id=\"sf2\" value=\"msgonly\" /> ";
        // line 44
        echo $this->env->getExtension('phpbb')->lang("SEARCH_MSG_ONLY");
        echo "</label><br />
\t\t\t\t<label class=\"control-label\" for=\"sf3\"><input type=\"radio\" name=\"sf\" id=\"sf3\" value=\"titleonly\" /> ";
        // line 45
        echo $this->env->getExtension('phpbb')->lang("SEARCH_TITLE_ONLY");
        echo "</label><br />
\t\t\t\t<label class=\"control-label\" for=\"sf4\"><input type=\"radio\" name=\"sf\" id=\"sf4\" value=\"firstpost\" /> ";
        // line 46
        echo $this->env->getExtension('phpbb')->lang("SEARCH_FIRST_POST");
        echo "</label>
\t\t\t</dd>
\t\t</dl>

\t<hr />

\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-5 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"show_results1\">";
        // line 53
        echo $this->env->getExtension('phpbb')->lang("DISPLAY_RESULTS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t<dd class=\"col-md-7 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t<label class=\"control-label\" for=\"show_results1\"><input type=\"radio\" name=\"sr\" id=\"show_results1\" value=\"posts\" checked=\"checked\" /> ";
        // line 55
        echo $this->env->getExtension('phpbb')->lang("POSTS");
        echo "</label>
\t\t\t\t<label class=\"control-label\" for=\"show_results2\"><input type=\"radio\" name=\"sr\" id=\"show_results2\" value=\"topics\" /> ";
        // line 56
        echo $this->env->getExtension('phpbb')->lang("TOPICS");
        echo "</label>
\t\t\t</dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-5 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"sd\">";
        // line 60
        echo $this->env->getExtension('phpbb')->lang("RESULT_SORT");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t<dd class=\"col-md-7 col-sm-8 col-xs-12 form-inline\">";
        // line 61
        echo (isset($context["S_SELECT_SORT_KEY"]) ? $context["S_SELECT_SORT_KEY"] : null);
        echo "&nbsp;
\t\t\t\t<label for=\"sa\"><input type=\"radio\" name=\"sd\" id=\"sa\" value=\"a\" /> ";
        // line 62
        echo $this->env->getExtension('phpbb')->lang("SORT_ASCENDING");
        echo "</label>
\t\t\t\t<label for=\"sd\"><input type=\"radio\" name=\"sd\" id=\"sd\" value=\"d\" checked=\"checked\" /> ";
        // line 63
        echo $this->env->getExtension('phpbb')->lang("SORT_DESCENDING");
        echo "</label>
\t\t\t</dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-5 col-sm-4 col-xs-12\"><label class=\"control-label\">";
        // line 67
        echo $this->env->getExtension('phpbb')->lang("RESULT_DAYS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t<dd class=\"col-md-7 col-sm-8 col-xs-12 form-inline\">";
        // line 68
        echo (isset($context["S_SELECT_SORT_DAYS"]) ? $context["S_SELECT_SORT_DAYS"] : null);
        echo "</dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-5 col-sm-4 col-xs-12\"><label class=\"control-label\">";
        // line 71
        echo $this->env->getExtension('phpbb')->lang("RETURN_FIRST");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t\t<dd class=\"col-md-7 col-sm-8 col-xs-12 form-inline\"><select name=\"ch\" title=\"";
        // line 72
        echo $this->env->getExtension('phpbb')->lang("RETURN_FIRST");
        echo "\">";
        echo (isset($context["S_CHARACTER_OPTIONS"]) ? $context["S_CHARACTER_OPTIONS"] : null);
        echo "</select> ";
        echo $this->env->getExtension('phpbb')->lang("POST_CHARACTERS");
        echo "</dd>
\t\t</dl>
\t\t</fieldset>

\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t";
        // line 79
        echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
        echo "<input type=\"reset\" value=\"";
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp;
\t\t<input type=\"submit\" name=\"submit\" value=\"";
        // line 80
        echo $this->env->getExtension('phpbb')->lang("SEARCH");
        echo "\" class=\"btn btn-success\" />
\t</fieldset>
</div>

</form>

";
        // line 86
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "recentsearch"))) {
            // line 87
            echo "<div class=\"container\">
\t<div class=\"row\">
\t\t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1\">
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">";
            // line 92
            echo $this->env->getExtension('phpbb')->lang("RECENT_SEARCHES");
            echo "</h4>
\t\t\t\t</div>
\t\t\t\t<div class=\"panel-body\">
\t\t\t\t";
            // line 95
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "recentsearch"));
            $context['_iterated'] = false;
            foreach ($context['_seq'] as $context["_key"] => $context["recentsearch"]) {
                // line 96
                echo "\t\t\t\t\t<p><a href=\"";
                echo $this->getAttribute((isset($context["recentsearch"]) ? $context["recentsearch"] : null), "U_KEYWORDS");
                echo "\">";
                echo $this->getAttribute((isset($context["recentsearch"]) ? $context["recentsearch"] : null), "KEYWORDS");
                echo "</a><span class=\"pull-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\">";
                echo $this->getAttribute((isset($context["recentsearch"]) ? $context["recentsearch"] : null), "TIME");
                echo "</span></p>
\t\t\t\t\t";
                // line 97
                if ((!$this->getAttribute((isset($context["recentsearch"]) ? $context["recentsearch"] : null), "S_LAST_ROW"))) {
                    echo "<hr />";
                }
                // line 98
                echo "\t\t\t\t";
                $context['_iterated'] = true;
            }
            if (!$context['_iterated']) {
                // line 99
                echo "\t\t\t\t\t<p class=\"text-info\"><strong>";
                echo $this->env->getExtension('phpbb')->lang("NO_RECENT_SEARCHES");
                echo "</strong></p>
\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['recentsearch'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 101
            echo "\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</div>
</div>
";
        }
        // line 107
        echo "
";
        // line 108
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
        return "search_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  293 => 108,  290 => 107,  282 => 101,  273 => 99,  268 => 98,  264 => 97,  253 => 96,  248 => 95,  242 => 92,  235 => 87,  233 => 86,  224 => 80,  218 => 79,  204 => 72,  199 => 71,  193 => 68,  188 => 67,  181 => 63,  177 => 62,  173 => 61,  168 => 60,  161 => 56,  157 => 55,  151 => 53,  141 => 46,  137 => 45,  133 => 44,  129 => 43,  123 => 41,  116 => 37,  112 => 36,  106 => 34,  98 => 31,  91 => 30,  80 => 22,  73 => 21,  66 => 17,  62 => 16,  58 => 15,  50 => 13,  41 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
