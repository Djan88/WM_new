<?php

/* memberlist_search.html */
class __TwigTemplate_538b4f7cc0eb1c0aee02b70e7e187dea extends Twig_Template
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
        echo "
<form method=\"post\" action=\"";
        // line 2
        echo (isset($context["S_MODE_ACTION"]) ? $context["S_MODE_ACTION"] : null);
        echo "\" id=\"search_memberlist\">

\t<div class=\"panel panel-default\">
\t\t<div class=\"panel-heading\">
\t\t\t<h4 class=\"panel-title\">";
        // line 6
        echo $this->env->getExtension('phpbb')->lang("FIND_USERNAME");
        echo "</h4>
\t\t</div>
\t\t<div class=\"panel-body\">

\t\t<p>";
        // line 10
        echo $this->env->getExtension('phpbb')->lang("FIND_USERNAME_EXPLAIN");
        echo "</p>

\t";
        // line 12
        // line 13
        echo "\t<fieldset class=\"col-md-6 form-horizontal\">
\t<dl class=\"form-group\" style=\"overflow: visible;\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"username\">";
        // line 15
        echo $this->env->getExtension('phpbb')->lang("USERNAME");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t<input type=\"text\" name=\"username\" id=\"username\" value=\"";
        // line 17
        echo (isset($context["USERNAME"]) ? $context["USERNAME"] : null);
        echo "\" class=\"form-control\"";
        if ((isset($context["U_LIVE_SEARCH"]) ? $context["U_LIVE_SEARCH"] : null)) {
            echo " autocomplete=\"off\" data-filter=\"phpbb.search.filter\" data-ajax=\"member_search\" data-min-length=\"3\" data-url=\"";
            echo (isset($context["U_LIVE_SEARCH"]) ? $context["U_LIVE_SEARCH"] : null);
            echo "\" data-results=\"#user-search\" data-overlay=\"false\"";
        }
        echo " />
\t\t\t";
        // line 18
        if ((isset($context["U_LIVE_SEARCH"]) ? $context["U_LIVE_SEARCH"] : null)) {
            // line 19
            echo "\t\t\t\t<div id=\"user-search\" style=\"display: none;\">
\t\t\t\t\t<ol class=\"dropdown-contents search-results\">
\t\t\t\t\t\t<li class=\"search-result-tpl\"><span class=\"search-result\"></span></li>
\t\t\t\t\t</ol>
\t\t\t\t</div>
\t\t\t";
        }
        // line 25
        echo "\t\t</dd>
\t</dl>
";
        // line 27
        if ((isset($context["S_EMAIL_SEARCH_ALLOWED"]) ? $context["S_EMAIL_SEARCH_ALLOWED"] : null)) {
            // line 28
            echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"email\">";
            // line 29
            echo $this->env->getExtension('phpbb')->lang("EMAIL");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"text\" name=\"email\" id=\"email\" value=\"";
            // line 30
            echo (isset($context["EMAIL"]) ? $context["EMAIL"] : null);
            echo "\" class=\"form-control\" /></dd>
\t</dl>
";
        }
        // line 33
        if ((isset($context["S_JABBER_ENABLED"]) ? $context["S_JABBER_ENABLED"] : null)) {
            // line 34
            echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"jabber\">";
            // line 35
            echo $this->env->getExtension('phpbb')->lang("JABBER");
            echo ":</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"text\" name=\"jabber\" id=\"jabber\" value=\"";
            // line 36
            echo (isset($context["JABBER"]) ? $context["JABBER"] : null);
            echo "\" class=\"form-control\" /></dd>
\t</dl>
";
        }
        // line 39
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"search_group_id\">";
        // line 40
        echo $this->env->getExtension('phpbb')->lang("GROUP");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><select name=\"search_group_id\" id=\"search_group_id\">";
        // line 41
        echo (isset($context["S_GROUP_SELECT"]) ? $context["S_GROUP_SELECT"] : null);
        echo "</select></dd>
\t</dl>
\t";
        // line 43
        // line 44
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"sk\">";
        // line 45
        echo $this->env->getExtension('phpbb')->lang("SORT_BY");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><select name=\"sk\" id=\"sk\">";
        // line 46
        echo (isset($context["S_SORT_OPTIONS"]) ? $context["S_SORT_OPTIONS"] : null);
        echo "</select> <select name=\"sd\">";
        echo (isset($context["S_ORDER_SELECT"]) ? $context["S_ORDER_SELECT"] : null);
        echo "</select></dd>
\t</dl>
\t</fieldset>

\t<fieldset class=\"col-md-6 form-horizontal\">
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"joined\">";
        // line 52
        echo $this->env->getExtension('phpbb')->lang("JOINED");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><select name=\"joined_select\">";
        // line 53
        echo (isset($context["S_JOINED_TIME_OPTIONS"]) ? $context["S_JOINED_TIME_OPTIONS"] : null);
        echo "</select> <input class=\"form-control\" type=\"text\" name=\"joined\" id=\"joined\" value=\"";
        echo (isset($context["JOINED"]) ? $context["JOINED"] : null);
        echo "\" /></dd>
\t</dl>
";
        // line 55
        if ((isset($context["S_VIEWONLINE"]) ? $context["S_VIEWONLINE"] : null)) {
            // line 56
            echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"active\">";
            // line 57
            echo $this->env->getExtension('phpbb')->lang("LAST_ACTIVE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><select name=\"active_select\">";
            // line 58
            echo (isset($context["S_ACTIVE_TIME_OPTIONS"]) ? $context["S_ACTIVE_TIME_OPTIONS"] : null);
            echo "</select> <input class=\"form-control\" type=\"text\" name=\"active\" id=\"active\" value=\"";
            echo (isset($context["ACTIVE"]) ? $context["ACTIVE"] : null);
            echo "\" /></dd>
\t</dl>
";
        }
        // line 61
        echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"count\">";
        // line 62
        echo $this->env->getExtension('phpbb')->lang("POSTS");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><select name=\"count_select\">";
        // line 63
        echo (isset($context["S_COUNT_OPTIONS"]) ? $context["S_COUNT_OPTIONS"] : null);
        echo "</select> <input class=\"form-control\" type=\"number\" min=\"0\" name=\"count\" id=\"count\" value=\"";
        echo (isset($context["COUNT"]) ? $context["COUNT"] : null);
        echo "\" /></dd>
\t</dl>
";
        // line 65
        if ((isset($context["S_IP_SEARCH_ALLOWED"]) ? $context["S_IP_SEARCH_ALLOWED"] : null)) {
            // line 66
            echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"ip\">";
            // line 67
            echo $this->env->getExtension('phpbb')->lang("POST_IP");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input class=\"form-control\" type=\"text\" name=\"ip\" id=\"ip\" value=\"";
            // line 68
            echo (isset($context["IP"]) ? $context["IP"] : null);
            echo "\" /></dd>
\t</dl>
";
        }
        // line 71
        echo "\t";
        // line 72
        echo "\t</fieldset>

\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t<input type=\"reset\" value=\"";
        // line 77
        echo $this->env->getExtension('phpbb')->lang("RESET");
        echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp;
\t\t<input type=\"submit\" name=\"submit\" value=\"";
        // line 78
        echo $this->env->getExtension('phpbb')->lang("SEARCH");
        echo "\" class=\"btn btn-success\" />
\t\t";
        // line 79
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t</fieldset>
</div>

</form>
";
    }

    public function getTemplateName()
    {
        return "memberlist_search.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  218 => 79,  214 => 78,  210 => 77,  203 => 72,  195 => 68,  190 => 67,  187 => 66,  185 => 65,  178 => 63,  173 => 62,  170 => 61,  162 => 58,  157 => 57,  154 => 56,  152 => 55,  145 => 53,  140 => 52,  129 => 46,  124 => 45,  121 => 44,  120 => 43,  115 => 41,  110 => 40,  107 => 39,  101 => 36,  97 => 35,  94 => 34,  92 => 33,  86 => 30,  81 => 29,  76 => 27,  72 => 25,  64 => 19,  62 => 18,  52 => 17,  46 => 15,  42 => 13,  41 => 12,  36 => 10,  29 => 6,  22 => 2,  732 => 161,  719 => 160,  705 => 158,  703 => 157,  696 => 153,  692 => 152,  687 => 151,  684 => 150,  672 => 149,  668 => 148,  662 => 144,  656 => 141,  650 => 140,  643 => 139,  640 => 138,  638 => 137,  635 => 136,  630 => 134,  627 => 133,  625 => 132,  622 => 131,  615 => 127,  611 => 126,  607 => 125,  601 => 123,  599 => 122,  593 => 118,  578 => 115,  575 => 114,  569 => 112,  563 => 111,  559 => 110,  541 => 109,  527 => 108,  498 => 107,  490 => 106,  487 => 105,  484 => 104,  481 => 103,  478 => 102,  473 => 99,  470 => 98,  464 => 97,  460 => 96,  445 => 95,  441 => 94,  436 => 93,  433 => 92,  425 => 91,  419 => 90,  404 => 89,  398 => 88,  377 => 87,  375 => 86,  369 => 82,  363 => 78,  361 => 77,  351 => 74,  348 => 73,  345 => 72,  342 => 71,  339 => 70,  333 => 69,  327 => 65,  319 => 64,  313 => 63,  298 => 62,  292 => 61,  268 => 60,  262 => 56,  260 => 55,  257 => 54,  250 => 50,  246 => 49,  241 => 48,  238 => 47,  226 => 46,  222 => 45,  217 => 42,  206 => 40,  201 => 71,  183 => 38,  168 => 35,  163 => 32,  155 => 30,  147 => 27,  142 => 24,  135 => 23,  128 => 22,  122 => 21,  119 => 20,  117 => 19,  104 => 16,  102 => 15,  99 => 14,  93 => 11,  90 => 10,  78 => 28,  71 => 8,  58 => 7,  47 => 4,  34 => 3,  21 => 2,  19 => 1,);
    }
}
