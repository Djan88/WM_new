<?php

/* ucp_pm_message_header.html */
class __TwigTemplate_757bc9f6d79749c392283c424c848860 extends Twig_Template
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
        echo "<form id=\"viewfolder\" method=\"post\" action=\"";
        echo (isset($context["S_PM_ACTION"]) ? $context["S_PM_ACTION"] : null);
        echo "\">

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 5
        echo $this->env->getExtension('phpbb')->lang("TITLE");
        if ((isset($context["CUR_FOLDER_NAME"]) ? $context["CUR_FOLDER_NAME"] : null)) {
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo " ";
            echo (isset($context["CUR_FOLDER_NAME"]) ? $context["CUR_FOLDER_NAME"] : null);
        }
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t";
        // line 8
        if (((isset($context["FOLDER_STATUS"]) ? $context["FOLDER_STATUS"] : null) && ((isset($context["FOLDER_MAX_MESSAGES"]) ? $context["FOLDER_MAX_MESSAGES"] : null) != 0))) {
            echo "<p>";
            echo (isset($context["FOLDER_STATUS"]) ? $context["FOLDER_STATUS"] : null);
            echo "</p>";
        }
        // line 9
        echo "
\t<div class=\"well well-sm form-inline text-center clearfix\">
\t\t";
        // line 11
        if ((((isset($context["U_POST_REPLY_PM"]) ? $context["U_POST_REPLY_PM"] : null) || (isset($context["U_POST_NEW_TOPIC"]) ? $context["U_POST_NEW_TOPIC"] : null)) || (isset($context["U_FORWARD_PM"]) ? $context["U_FORWARD_PM"] : null))) {
            // line 12
            echo "\t\t";
            if ((isset($context["U_POST_REPLY_PM"]) ? $context["U_POST_REPLY_PM"] : null)) {
                // line 13
                echo "\t\t<div class=\"big-btn pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo " reply-icon\"><a href=\"";
                echo (isset($context["U_POST_REPLY_PM"]) ? $context["U_POST_REPLY_PM"] : null);
                echo "\" class=\"btn btn-primary\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("POST_REPLY_PM");
                echo "\"><i class=\"fa fa-reply\"></i>";
                echo $this->env->getExtension('phpbb')->lang("POST_REPLY_PM");
                echo "</a> &nbsp;</div>
\t\t";
            } elseif ((isset($context["U_POST_NEW_TOPIC"]) ? $context["U_POST_NEW_TOPIC"] : null)) {
                // line 15
                echo "\t\t<div class=\"big-btn pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo " post-icon\"><a href=\"";
                echo (isset($context["U_POST_NEW_TOPIC"]) ? $context["U_POST_NEW_TOPIC"] : null);
                echo "\" accesskey=\"n\" class=\"btn btn-primary\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("UCP_PM_COMPOSE");
                echo "\"><i class=\"fa fa-plus\"></i>";
                echo $this->env->getExtension('phpbb')->lang("UCP_PM_COMPOSE");
                echo "</a> &nbsp;</div>
\t\t";
            }
            // line 17
            echo "\t\t";
            if ((isset($context["U_FORWARD_PM"]) ? $context["U_FORWARD_PM"] : null)) {
                // line 18
                echo "\t\t<div class=\"big-btn pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo " forward-icon\"><a href=\"";
                echo (isset($context["U_FORWARD_PM"]) ? $context["U_FORWARD_PM"] : null);
                echo "\" class=\"btn btn-primary\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("POST_FORWARD_PM");
                echo "\"><i class=\"fa fa-forward\"></i>";
                echo $this->env->getExtension('phpbb')->lang("FORWARD_PM");
                echo "</a> &nbsp;</div>
\t\t";
            }
            // line 20
            echo "\t\t";
            if (((isset($context["U_POST_REPLY_PM"]) ? $context["U_POST_REPLY_PM"] : null) && ((isset($context["S_PM_RECIPIENTS"]) ? $context["S_PM_RECIPIENTS"] : null) > 1))) {
                // line 21
                echo "\t\t<div class=\"big-btn pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo " reply-all\"><a href=\"";
                echo (isset($context["U_POST_REPLY_ALL"]) ? $context["U_POST_REPLY_ALL"] : null);
                echo "\" class=\"btn btn-primary\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("REPLY_TO_ALL");
                echo "\"><i class=\"fa fa-reply-all\"></i>";
                echo $this->env->getExtension('phpbb')->lang("REPLY_TO_ALL");
                echo "</a> &nbsp;</div>
\t\t";
            }
            // line 23
            echo "\t\t";
        }
        // line 24
        echo "\t</div>

\t";
        // line 26
        if (((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null)) && (isset($context["U_PRINT_PM"]) ? $context["U_PRINT_PM"] : null))) {
            // line 27
            echo "\t\t<div class=\"dropdown-container dropdown-button-control topic-tools\">
\t\t\t<span title=\"";
            // line 28
            echo $this->env->getExtension('phpbb')->lang("PM_TOOLS");
            echo "\" class=\"dropdown-trigger dropdown-select button icon-button tools-icon\"></span>
\t\t\t<div class=\"dropdown hidden\">
\t\t\t\t<div class=\"pointer\"><div class=\"pointer-inner\"></div></div>
\t\t\t\t<ul class=\"dropdown-contents\">
\t\t\t\t\t";
            // line 32
            if ((isset($context["U_PRINT_PM"]) ? $context["U_PRINT_PM"] : null)) {
                echo "<li class=\"small-icon icon-print\"><a href=\"";
                echo (isset($context["U_PRINT_PM"]) ? $context["U_PRINT_PM"] : null);
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("PRINT_PM");
                echo "\" accesskey=\"p\">";
                echo $this->env->getExtension('phpbb')->lang("PRINT_PM");
                echo "</a></li>";
            }
            // line 33
            echo "\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>
\t";
        }
        // line 37
        echo "
\t";
        // line 38
        if (((isset($context["TOTAL_MESSAGES"]) ? $context["TOTAL_MESSAGES"] : null) || (isset($context["S_VIEW_MESSAGE"]) ? $context["S_VIEW_MESSAGE"] : null))) {
            // line 39
            echo "\t\t<div class=\"pages clearfix\">
\t\t";
            // line 40
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                // line 41
                echo "\t\t\t";
                $location = "pagination.html";
                $namespace = false;
                if (strpos($location, '@') === 0) {
                    $namespace = substr($location, 1, strpos($location, '/') - 1);
                    $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                    $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
                }
                $this->env->loadTemplate("pagination.html")->display($context);
                if ($namespace) {
                    $this->env->setNamespaceLookUpOrder($previous_look_up_order);
                }
                // line 42
                echo "\t\t";
            }
            // line 43
            echo "\t\t";
            if ((isset($context["S_VIEW_MESSAGE"]) ? $context["S_VIEW_MESSAGE"] : null)) {
                // line 44
                echo "\t\t\t<a class=\"btn btn-default pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\" href=\"";
                echo (isset($context["U_CURRENT_FOLDER"]) ? $context["U_CURRENT_FOLDER"] : null);
                echo "\"><i class=\"fa fa-angle-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\"></i> ";
                echo $this->env->getExtension('phpbb')->lang("RETURN_TO_FOLDER");
                echo "</a>
\t\t";
            } elseif (((isset($context["FOLDER_CUR_MESSAGES"]) ? $context["FOLDER_CUR_MESSAGES"] : null) != 0)) {
                // line 46
                echo "\t\t\t<div class=\"btn-group pull-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\">
\t\t\t\t<span class=\"btn btn-default disabled\">";
                // line 47
                echo (isset($context["TOTAL_MESSAGES"]) ? $context["TOTAL_MESSAGES"] : null);
                echo "</span>
\t\t\t\t<span class=\"btn btn-default disabled\">";
                // line 48
                echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
                echo "</span>
\t\t\t\t";
                // line 49
                if ((isset($context["U_MARK_ALL"]) ? $context["U_MARK_ALL"] : null)) {
                    // line 50
                    echo "\t\t\t\t<a href=\"";
                    echo (isset($context["U_MARK_ALL"]) ? $context["U_MARK_ALL"] : null);
                    echo "\" class=\"btn btn-default\">";
                    echo $this->env->getExtension('phpbb')->lang("PM_MARK_ALL_READ");
                    echo "</a>
\t\t\t\t";
                }
                // line 52
                echo "\t\t\t</div>
\t\t";
            }
            // line 54
            echo "\t\t</div>
\t";
        }
    }

    public function getTemplateName()
    {
        return "ucp_pm_message_header.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  206 => 52,  196 => 49,  188 => 47,  183 => 46,  171 => 44,  168 => 43,  165 => 42,  150 => 40,  147 => 39,  145 => 38,  136 => 33,  119 => 28,  116 => 27,  110 => 24,  107 => 23,  80 => 18,  77 => 17,  48 => 11,  38 => 8,  27 => 5,  333 => 81,  329 => 79,  315 => 77,  311 => 76,  307 => 75,  304 => 74,  302 => 73,  299 => 72,  296 => 71,  292 => 69,  285 => 67,  273 => 66,  270 => 65,  266 => 64,  257 => 62,  255 => 61,  252 => 60,  248 => 58,  222 => 53,  216 => 52,  213 => 51,  210 => 54,  208 => 49,  198 => 50,  187 => 43,  179 => 41,  176 => 40,  173 => 39,  169 => 38,  166 => 37,  163 => 36,  157 => 35,  127 => 31,  124 => 30,  120 => 29,  111 => 27,  108 => 26,  92 => 20,  89 => 21,  86 => 20,  81 => 19,  79 => 18,  73 => 14,  65 => 15,  63 => 11,  59 => 9,  44 => 9,  40 => 6,  480 => 141,  467 => 139,  461 => 135,  455 => 132,  451 => 131,  442 => 130,  435 => 129,  432 => 128,  430 => 127,  427 => 126,  420 => 122,  416 => 121,  411 => 120,  408 => 119,  396 => 118,  392 => 117,  384 => 112,  380 => 111,  375 => 109,  364 => 106,  349 => 105,  346 => 104,  344 => 103,  341 => 102,  337 => 100,  331 => 98,  328 => 97,  321 => 96,  319 => 95,  316 => 94,  312 => 92,  297 => 89,  293 => 87,  290 => 86,  279 => 85,  277 => 84,  274 => 83,  265 => 81,  263 => 80,  260 => 63,  258 => 78,  253 => 75,  241 => 56,  229 => 55,  226 => 54,  220 => 70,  217 => 69,  209 => 67,  204 => 47,  197 => 64,  195 => 45,  192 => 48,  186 => 61,  172 => 60,  162 => 59,  158 => 58,  152 => 41,  148 => 54,  144 => 52,  142 => 37,  139 => 50,  131 => 47,  128 => 46,  126 => 32,  123 => 44,  117 => 28,  114 => 26,  112 => 39,  109 => 38,  100 => 24,  95 => 21,  83 => 22,  75 => 18,  68 => 14,  62 => 11,  55 => 8,  53 => 13,  50 => 12,  36 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
