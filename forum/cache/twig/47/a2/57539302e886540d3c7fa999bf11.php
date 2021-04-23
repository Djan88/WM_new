<?php

/* ucp_attachments.html */
class __TwigTemplate_47a257539302e886540d3c7fa999bf11 extends Twig_Template
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
\t
\t<p>";
        // line 11
        echo $this->env->getExtension('phpbb')->lang("ATTACHMENTS_EXPLAIN");
        echo "</p>

\t";
        // line 13
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "attachrow"))) {
            // line 14
            echo "\t<div class=\"pages clearfix\">
\t\t";
            // line 15
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                echo " 
\t\t\t";
                // line 16
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
                // line 17
                echo "\t\t";
            }
            // line 18
            echo "\t\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 19
            echo (isset($context["TOTAL_ATTACHMENTS"]) ? $context["TOTAL_ATTACHMENTS"] : null);
            echo " ";
            echo $this->env->getExtension('phpbb')->lang("TITLE");
            echo "</span>
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 20
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t\t</div>
\t</div>

\t<div class=\"panel panel-default\">
\t\t<div class=\"clearfix\">
\t\t\t<h4 class=\"col-md-7 col-sm-6 col-xs-8\">";
            // line 26
            echo $this->env->getExtension('phpbb')->lang("FILENAME");
            echo "</h4>
\t\t\t<h5 class=\"col-md-2 col-sm-2 col-xs-2 text-center\">";
            // line 27
            echo $this->env->getExtension('phpbb')->lang("DOWNLOADS");
            echo "</h5>
\t\t\t<h5 class=\"col-md-2 col-sm-3 hidden-xs\">";
            // line 28
            echo $this->env->getExtension('phpbb')->lang("POST_TIME");
            echo "</h5>
\t\t\t<h5 class=\"col-md-1 col-sm-1 col-xs-2 text-center\">";
            // line 29
            echo $this->env->getExtension('phpbb')->lang("MARK");
            echo "</h5>
\t\t</div>

\t\t";
            // line 32
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "attachrow"));
            foreach ($context['_seq'] as $context["_key"] => $context["attachrow"]) {
                // line 33
                echo "\t\t<div class=\"clearfix icon";
                if (($this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "S_ROW_COUNT") % 2 == 1)) {
                    echo " bg1";
                } else {
                    echo " bg2";
                }
                echo "\">
\t\t\t<div class=\"col-md-7 col-sm-6 col-xs-8\">
\t\t\t\t<a href=\"";
                // line 35
                echo $this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "U_VIEW_ATTACHMENT");
                echo "\" class=\"topictitle attachment-filename ellipsis-text\" title=\"";
                echo $this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "FILENAME");
                echo "\">";
                echo $this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "FILENAME");
                echo "</a> (";
                echo $this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "SIZE");
                echo ")<br />
\t\t\t\t";
                // line 36
                if ($this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "S_IN_MESSAGE")) {
                    echo $this->env->getExtension('phpbb')->lang("PM");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " ";
                } else {
                    echo $this->env->getExtension('phpbb')->lang("TOPIC");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " ";
                }
                echo "<a href=\"";
                echo $this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "U_VIEW_TOPIC");
                echo "\">";
                echo $this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "TOPIC_TITLE");
                echo "</a>
\t\t\t</div>

\t\t\t<div class=\"col-md-2 col-sm-2 col-xs-2 text-center\">";
                // line 39
                echo $this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "DOWNLOAD_COUNT");
                echo "</div>
\t\t\t<div class=\"col-md-2 col-sm-3 hidden-xs\">";
                // line 40
                echo $this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "POST_TIME");
                echo "</div>
\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-2 text-center\"><input type=\"checkbox\" name=\"attachment[";
                // line 41
                echo $this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "ATTACH_ID");
                echo "]\" value=\"1\" /></div>
\t\t</div>
\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attachrow'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 44
            echo "\t</div>

\t<fieldset class=\"panel-group text-center\">
\t\t<label for=\"sk\">";
            // line 47
            echo $this->env->getExtension('phpbb')->lang("SORT_BY");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label>  <select name=\"sk\" id=\"sk\">";
            echo (isset($context["S_SORT_OPTIONS"]) ? $context["S_SORT_OPTIONS"] : null);
            echo "</select>&nbsp;
\t\t<select name=\"sd\" id=\"sd\">";
            // line 48
            echo (isset($context["S_ORDER_SELECT"]) ? $context["S_ORDER_SELECT"] : null);
            echo "</select>&nbsp;
\t\t<input class=\"btn btn-default\" type=\"submit\" name=\"sort\" value=\"";
            // line 49
            echo $this->env->getExtension('phpbb')->lang("SORT");
            echo "\" />
\t\t";
            // line 50
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t</fieldset>

\t";
        } else {
            // line 54
            echo "\t\t<div class=\"alert alert-info\">
\t\t\t";
            // line 55
            echo $this->env->getExtension('phpbb')->lang("UCP_NO_ATTACHMENTS");
            echo "
\t\t</div>
\t";
        }
        // line 58
        echo "\t
";
        // line 59
        if ((isset($context["S_ATTACHMENT_ROWS"]) ? $context["S_ATTACHMENT_ROWS"] : null)) {
            // line 60
            echo "\t<fieldset class=\"panel-group text-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t<div class=\"btn-group\">
\t\t\t<a href=\"#\" onclick=\"marklist('ucp', 'attachment', false); return false;\" class=\"btn btn-warning\">";
            // line 62
            echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
            echo "</a>
\t\t\t<input type=\"submit\" name=\"delete\" value=\"";
            // line 63
            echo $this->env->getExtension('phpbb')->lang("DELETE_MARKED");
            echo "\" class=\"btn btn-default\" />
\t\t\t<a href=\"#\" onclick=\"marklist('ucp', 'attachment', true); return false;\" class=\"btn btn-info\">";
            // line 64
            echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
            echo "</a>
\t\t</div>
\t\t";
            // line 66
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t</fieldset>

\t<div class=\"pages clearfix\">
\t\t";
            // line 70
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                echo " 
\t\t\t";
                // line 71
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
                // line 72
                echo "\t\t";
            }
            // line 73
            echo "\t\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 74
            echo (isset($context["TOTAL_ATTACHMENTS"]) ? $context["TOTAL_ATTACHMENTS"] : null);
            echo " ";
            echo $this->env->getExtension('phpbb')->lang("TITLE");
            echo "</span>
\t\t\t<span class=\"btn btn-default disabled\">";
            // line 75
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t\t</div>
\t</div>
";
        }
        // line 79
        echo "
\t</div>
</div>

</form>

";
        // line 85
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
        return "ucp_attachments.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  288 => 85,  280 => 79,  273 => 75,  267 => 74,  262 => 73,  259 => 72,  247 => 71,  243 => 70,  236 => 66,  231 => 64,  227 => 63,  223 => 62,  217 => 60,  215 => 59,  212 => 58,  206 => 55,  203 => 54,  196 => 50,  192 => 49,  188 => 48,  181 => 47,  176 => 44,  167 => 41,  163 => 40,  159 => 39,  141 => 36,  131 => 35,  121 => 33,  117 => 32,  111 => 29,  107 => 28,  103 => 27,  99 => 26,  90 => 20,  84 => 19,  79 => 18,  76 => 17,  64 => 16,  60 => 15,  57 => 14,  55 => 13,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
