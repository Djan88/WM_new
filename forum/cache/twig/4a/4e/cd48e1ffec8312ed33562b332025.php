<?php

/* ucp_main_drafts.html */
class __TwigTemplate_4a4ecd48e1ffec8312ed33562b332025 extends Twig_Template
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
<form id=\"postform\" method=\"post\" action=\"";
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

\t<p>";
        // line 11
        echo $this->env->getExtension('phpbb')->lang("DRAFTS_EXPLAIN");
        echo "</p>

";
        // line 13
        if ((isset($context["S_EDIT_DRAFT"]) ? $context["S_EDIT_DRAFT"] : null)) {
            // line 14
            echo "
\t\t";
            // line 15
            $location = "posting_editor.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("posting_editor.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
            // line 16
            echo "\t\t</div>

\t\t\t<fieldset class=\"panel-footer text-center\">
\t\t\t";
            // line 19
            echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
            echo "<input type=\"reset\" value=\"";
            echo $this->env->getExtension('phpbb')->lang("RESET");
            echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp;
\t\t\t<input type=\"submit\" name=\"submit\" value=\"";
            // line 20
            echo $this->env->getExtension('phpbb')->lang("SAVE");
            echo "\" class=\"btn btn-success\" />
\t\t\t";
            // line 21
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t\t</fieldset>
\t</div>

";
        } else {
            // line 26
            echo "
\t";
            // line 27
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "draftrow"))) {
                // line 28
                echo "\t<div class=\"panel panel-default\">
\t\t<div class=\"clearfix\">
\t\t\t<h4 class=\"col-md-8 col-sm-7 col-xs-10\">";
                // line 30
                echo $this->env->getExtension('phpbb')->lang("DRAFT_TITLE");
                echo "</h4>
\t\t\t<h5 class=\"col-md-3 col-sm-4 hidden-xs\">";
                // line 31
                echo $this->env->getExtension('phpbb')->lang("SAVE_DATE");
                echo "</h5>
\t\t\t<h5 class=\"col-md-1 col-sm-1 col-xs-2 text-center\">";
                // line 32
                echo $this->env->getExtension('phpbb')->lang("MARK");
                echo "</h5>
\t\t</div>

\t\t";
                // line 35
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "draftrow"));
                foreach ($context['_seq'] as $context["_key"] => $context["draftrow"]) {
                    // line 36
                    echo "\t\t\t<div class=\"clearfix icon";
                    if (($this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "S_ROW_COUNT") % 2 == 1)) {
                        echo " bg1";
                    } else {
                        echo " bg2";
                    }
                    echo "\">
\t\t\t\t<div class=\"col-md-8 col-sm-7 col-xs-10\">
\t\t\t\t\t<a class=\"topictitle\" href=\"";
                    // line 38
                    echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "U_VIEW_EDIT");
                    echo "\">";
                    echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "DRAFT_SUBJECT");
                    echo "</a><br />
\t\t\t\t\t";
                    // line 39
                    if ($this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "S_LINK_TOPIC")) {
                        echo $this->env->getExtension('phpbb')->lang("TOPIC");
                        echo $this->env->getExtension('phpbb')->lang("COLON");
                        echo " <a href=\"";
                        echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "U_VIEW");
                        echo "\">";
                        echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "TITLE");
                        echo "</a>
\t\t\t\t\t";
                    } elseif ($this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "S_LINK_FORUM")) {
                        // line 40
                        echo $this->env->getExtension('phpbb')->lang("FORUM");
                        echo $this->env->getExtension('phpbb')->lang("COLON");
                        echo " <a href=\"";
                        echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "U_VIEW");
                        echo "\">";
                        echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "TITLE");
                        echo "</a>
\t\t\t\t\t";
                    } elseif ((isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null)) {
                        // line 42
                        echo "\t\t\t\t\t";
                    } else {
                        echo $this->env->getExtension('phpbb')->lang("NO_TOPIC_FORUM");
                    }
                    // line 43
                    echo "
\t\t\t\t\t<div class=\"visible-xs\">
\t\t\t\t\t\t";
                    // line 45
                    echo $this->env->getExtension('phpbb')->lang("SAVE_DATE");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " <strong>";
                    echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "DATE");
                    echo "</strong><br />
\t\t\t\t\t\t";
                    // line 46
                    if ($this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "U_INSERT")) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "U_INSERT");
                        echo "\">";
                        echo $this->env->getExtension('phpbb')->lang("LOAD_DRAFT");
                        echo "</a> &bull; ";
                    }
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "U_VIEW_EDIT");
                    echo "\">";
                    echo $this->env->getExtension('phpbb')->lang("VIEW_EDIT");
                    echo "</a>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t\t<div class=\"col-md-3 col-sm-4 hidden-xs\">
\t\t\t\t\t";
                    // line 51
                    echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "DATE");
                    echo "<br />";
                    if ($this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "U_INSERT")) {
                        echo "<a href=\"";
                        echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "U_INSERT");
                        echo "\">";
                        echo $this->env->getExtension('phpbb')->lang("LOAD_DRAFT");
                        echo "</a> &bull; ";
                    }
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "U_VIEW_EDIT");
                    echo "\">";
                    echo $this->env->getExtension('phpbb')->lang("VIEW_EDIT");
                    echo "</a>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-md-1 col-sm-1 col-xs-2 text-center\">
\t\t\t\t\t<input type=\"checkbox\" name=\"d[";
                    // line 54
                    echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "DRAFT_ID");
                    echo "]\" id=\"d";
                    echo $this->getAttribute((isset($context["draftrow"]) ? $context["draftrow"] : null), "DRAFT_ID");
                    echo "\" />
\t\t\t\t</div>
\t\t\t</div>
\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['draftrow'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 58
                echo "\t\t</div>
\t";
            } else {
                // line 60
                echo "\t\t<div class=\"alert alert-info\">
\t\t\t";
                // line 61
                echo $this->env->getExtension('phpbb')->lang("NO_SAVED_DRAFTS");
                echo "
\t\t</div>
\t";
            }
            // line 64
            echo "
\t";
            // line 65
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "draftrow"))) {
                // line 66
                echo "\t\t<fieldset class=\"text-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\">
\t\t\t<div class=\"btn-group\">
\t\t\t\t<a href=\"#\" onclick=\"marklist('postform', '', false); return false;\" class=\"btn btn-warning\">";
                // line 68
                echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
                echo "</a>
\t\t\t\t<input type=\"submit\" name=\"delete\" value=\"";
                // line 69
                echo $this->env->getExtension('phpbb')->lang("DELETE_MARKED");
                echo "\" class=\"btn btn-default\" />
\t\t\t\t<a href=\"#\" onclick=\"marklist('postform', '', true); return false;\" class=\"btn btn-info\">";
                // line 70
                echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
                echo "</a>
\t\t\t</div>
\t\t\t";
                // line 72
                echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
                echo "
\t\t</fieldset>
\t";
            }
            // line 75
            echo "
";
        }
        // line 77
        echo "
\t</div>
</div>

</form>

";
        // line 83
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
        return "ucp_main_drafts.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  278 => 83,  270 => 77,  266 => 75,  260 => 72,  255 => 70,  251 => 69,  247 => 68,  241 => 66,  239 => 65,  236 => 64,  230 => 61,  227 => 60,  223 => 58,  211 => 54,  193 => 51,  175 => 46,  168 => 45,  164 => 43,  159 => 42,  149 => 40,  138 => 39,  132 => 38,  122 => 36,  118 => 35,  112 => 32,  108 => 31,  104 => 30,  100 => 28,  98 => 27,  95 => 26,  87 => 21,  83 => 20,  77 => 19,  72 => 16,  60 => 15,  57 => 14,  55 => 13,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
