<?php

/* index_body.html */
class __TwigTemplate_4796a0e0355e10ebe0cc0e678e6e33d1 extends Twig_Template
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
<div class=\"hidden-xs clearfix\">
\t<p";
        // line 4
        if ((isset($context["S_USER_LOGGED_IN"]) ? $context["S_USER_LOGGED_IN"] : null)) {
            echo " class=\"pull-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\"";
        }
        echo ">";
        if ((isset($context["S_USER_LOGGED_IN"]) ? $context["S_USER_LOGGED_IN"] : null)) {
            echo (isset($context["LAST_VISIT_DATE"]) ? $context["LAST_VISIT_DATE"] : null);
        } else {
            echo (isset($context["CURRENT_TIME"]) ? $context["CURRENT_TIME"] : null);
        }
        echo "</p>
\t";
        // line 5
        if ((isset($context["S_USER_LOGGED_IN"]) ? $context["S_USER_LOGGED_IN"] : null)) {
            // line 6
            echo "\t<p class=\"pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">";
            echo (isset($context["CURRENT_TIME"]) ? $context["CURRENT_TIME"] : null);
            echo "</p>
\t";
        }
        // line 8
        echo "</div>

";
        // line 10
        // line 11
        if ((isset($context["U_MARK_FORUMS"]) ? $context["U_MARK_FORUMS"] : null)) {
            // line 12
            echo "\t<p class=\"text-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t<a href=\"";
            // line 13
            echo (isset($context["U_MARK_FORUMS"]) ? $context["U_MARK_FORUMS"] : null);
            echo "\" accesskey=\"m\" data-ajax=\"mark_forums_read\">";
            echo $this->env->getExtension('phpbb')->lang("MARK_FORUMS_READ");
            echo "</a>
\t</p>
";
        }
        // line 16
        // line 17
        echo "
";
        // line 18
        $location = "forumlist_body.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("forumlist_body.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 19
        echo "
";
        // line 20
        // line 21
        echo "
";
        // line 22
        // line 23
        echo "
";
        // line 24
        if ((isset($context["S_DISPLAY_ONLINE_LIST"]) ? $context["S_DISPLAY_ONLINE_LIST"] : null)) {
            // line 25
            echo "<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
            // line 27
            if ((isset($context["U_VIEWONLINE"]) ? $context["U_VIEWONLINE"] : null)) {
                echo "<a href=\"";
                echo (isset($context["U_VIEWONLINE"]) ? $context["U_VIEWONLINE"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("WHO_IS_ONLINE");
                echo "</a>";
            } else {
                echo $this->env->getExtension('phpbb')->lang("WHO_IS_ONLINE");
            }
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t";
            // line 30
            // line 31
            echo "\t\t";
            echo (isset($context["TOTAL_USERS_ONLINE"]) ? $context["TOTAL_USERS_ONLINE"] : null);
            echo " (";
            echo $this->env->getExtension('phpbb')->lang("ONLINE_EXPLAIN");
            echo ")<br />";
            echo (isset($context["RECORD_USERS"]) ? $context["RECORD_USERS"] : null);
            echo "<br /><br />";
            echo (isset($context["LOGGED_IN_USER_LIST"]) ? $context["LOGGED_IN_USER_LIST"] : null);
            echo "
\t\t";
            // line 32
            if ((isset($context["LEGEND"]) ? $context["LEGEND"] : null)) {
                echo "<br />";
                echo $this->env->getExtension('phpbb')->lang("LEGEND");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo " ";
                echo (isset($context["LEGEND"]) ? $context["LEGEND"] : null);
            }
            // line 33
            echo "\t\t";
            // line 34
            echo "\t</div>
</div>
";
        }
        // line 37
        echo "
";
        // line 38
        if ((isset($context["S_DISPLAY_BIRTHDAY_LIST"]) ? $context["S_DISPLAY_BIRTHDAY_LIST"] : null)) {
            // line 39
            echo "<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
            // line 41
            echo $this->env->getExtension('phpbb')->lang("BIRTHDAYS");
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t";
            // line 44
            // line 45
            echo "\t\t";
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "birthdays"))) {
                echo $this->env->getExtension('phpbb')->lang("CONGRATULATIONS");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo " <strong>";
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "birthdays"));
                foreach ($context['_seq'] as $context["_key"] => $context["birthdays"]) {
                    echo $this->getAttribute((isset($context["birthdays"]) ? $context["birthdays"] : null), "USERNAME");
                    if (($this->getAttribute((isset($context["birthdays"]) ? $context["birthdays"] : null), "AGE") !== "")) {
                        echo " (";
                        echo $this->getAttribute((isset($context["birthdays"]) ? $context["birthdays"] : null), "AGE");
                        echo ")";
                    }
                    if ((!$this->getAttribute((isset($context["birthdays"]) ? $context["birthdays"] : null), "S_LAST_ROW"))) {
                        echo ", ";
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['birthdays'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                echo "</strong>";
            } else {
                echo $this->env->getExtension('phpbb')->lang("NO_BIRTHDAYS");
            }
            // line 46
            echo "\t\t";
            // line 47
            echo "\t</div>
</div>
";
        }
        // line 50
        echo "
";
        // line 51
        if ((isset($context["NEWEST_USER"]) ? $context["NEWEST_USER"] : null)) {
            // line 52
            echo "<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
            // line 54
            echo $this->env->getExtension('phpbb')->lang("STATISTICS");
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t";
            // line 57
            // line 58
            echo "\t\t";
            echo (isset($context["TOTAL_POSTS"]) ? $context["TOTAL_POSTS"] : null);
            echo " &bull; ";
            echo (isset($context["TOTAL_TOPICS"]) ? $context["TOTAL_TOPICS"] : null);
            echo " &bull; ";
            echo (isset($context["TOTAL_USERS"]) ? $context["TOTAL_USERS"] : null);
            echo " &bull; ";
            echo (isset($context["NEWEST_USER"]) ? $context["NEWEST_USER"] : null);
            echo "
\t\t";
            // line 59
            // line 60
            echo "\t</div>
</div>
";
        }
        // line 63
        echo "
";
        // line 64
        // line 65
        echo "
";
        // line 66
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
        return "index_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  242 => 66,  239 => 65,  238 => 64,  235 => 63,  230 => 60,  229 => 59,  218 => 58,  217 => 57,  211 => 54,  207 => 52,  205 => 51,  202 => 50,  197 => 47,  195 => 46,  169 => 45,  168 => 44,  162 => 41,  158 => 39,  156 => 38,  153 => 37,  148 => 34,  146 => 33,  138 => 32,  127 => 31,  126 => 30,  112 => 27,  108 => 25,  106 => 24,  103 => 23,  102 => 22,  99 => 21,  98 => 20,  95 => 19,  83 => 18,  80 => 17,  79 => 16,  71 => 13,  66 => 12,  64 => 11,  63 => 10,  59 => 8,  51 => 6,  49 => 5,  35 => 4,  31 => 2,  19 => 1,);
    }
}
