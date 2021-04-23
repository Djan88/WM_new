<?php

/* posting_layout.html */
class __TwigTemplate_b8b123820d3deadd6f207544bf9fe427 extends Twig_Template
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
";
        // line 3
        if ((isset($context["TOPIC_TITLE"]) ? $context["TOPIC_TITLE"] : null)) {
            // line 4
            echo "\t<h3><a href=\"";
            echo (isset($context["U_VIEW_TOPIC"]) ? $context["U_VIEW_TOPIC"] : null);
            echo "\">";
            echo (isset($context["TOPIC_TITLE"]) ? $context["TOPIC_TITLE"] : null);
            echo "</a></h3>
";
        } else {
            // line 6
            echo "\t<h3><a href=\"";
            echo (isset($context["U_VIEW_FORUM"]) ? $context["U_VIEW_FORUM"] : null);
            echo "\">";
            echo (isset($context["FORUM_NAME"]) ? $context["FORUM_NAME"] : null);
            echo "</a></h3>
 ";
        }
        // line 8
        echo "
";
        // line 9
        if ((isset($context["S_FORUM_RULES"]) ? $context["S_FORUM_RULES"] : null)) {
            // line 10
            echo "\t<div class=\"alert alert-warning\">
\t\t";
            // line 11
            if ((isset($context["U_FORUM_RULES"]) ? $context["U_FORUM_RULES"] : null)) {
                // line 12
                echo "\t\t<a href=\"";
                echo (isset($context["U_FORUM_RULES"]) ? $context["U_FORUM_RULES"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("FORUM_RULES");
                echo "</a>
\t";
            } else {
                // line 14
                echo "\t\t<strong>";
                echo $this->env->getExtension('phpbb')->lang("FORUM_RULES");
                echo "</strong><br />
\t\t";
                // line 15
                echo (isset($context["FORUM_RULES"]) ? $context["FORUM_RULES"] : null);
                echo "
\t";
            }
            // line 17
            echo "\t</div>
";
        }
        // line 19
        echo "
<form id=\"postform\" method=\"post\" action=\"";
        // line 20
        echo (isset($context["S_POST_ACTION"]) ? $context["S_POST_ACTION"] : null);
        echo "\"";
        echo (isset($context["S_FORM_ENCTYPE"]) ? $context["S_FORM_ENCTYPE"] : null);
        echo ">

";
        // line 22
        if ((isset($context["S_DRAFT_LOADED"]) ? $context["S_DRAFT_LOADED"] : null)) {
            // line 23
            echo "\t<h4>";
            echo $this->env->getExtension('phpbb')->lang("INFORMATION");
            echo "</h4>
\t<p>";
            // line 24
            echo $this->env->getExtension('phpbb')->lang("DRAFT_LOADED");
            echo "</p>
";
        }
        // line 26
        echo "
";
        // line 27
        if ((isset($context["S_SHOW_DRAFTS"]) ? $context["S_SHOW_DRAFTS"] : null)) {
            $location = "drafts.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("drafts.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 28
        echo "
";
        // line 29
        if ((isset($context["S_POST_REVIEW"]) ? $context["S_POST_REVIEW"] : null)) {
            $location = "posting_review.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("posting_review.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 30
        echo "
";
        // line 31
        if ((isset($context["S_UNGLOBALISE"]) ? $context["S_UNGLOBALISE"] : null)) {
            // line 32
            echo "\t<div class=\"panel bg3\">
\t\t<div class=\"inner\">
\t\t<fieldset class=\"fields1\">
\t\t\t<h2>";
            // line 35
            echo $this->env->getExtension('phpbb')->lang("SELECT_DESTINATION_FORUM");
            echo "</h2>
\t\t\t<p>";
            // line 36
            echo $this->env->getExtension('phpbb')->lang("UNGLOBALISE_EXPLAIN");
            echo "</p>
\t\t\t<dl>
\t\t\t\t<dt><label for=\"to_forum_id\">";
            // line 38
            echo $this->env->getExtension('phpbb')->lang("MOVE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t\t<dd><select id=\"to_forum_id\" name=\"to_forum_id\">";
            // line 39
            echo (isset($context["S_FORUM_SELECT"]) ? $context["S_FORUM_SELECT"] : null);
            echo "</select></dd>
\t\t\t</dl>
\t\t\t
\t\t\t<dl>
\t\t\t\t<dt>&nbsp;</dt>
\t\t\t\t<dd><input class=\"button1\" type=\"submit\" name=\"post\" value=\"";
            // line 44
            echo $this->env->getExtension('phpbb')->lang("CONFIRM");
            echo "\" /> <input class=\"button2\" type=\"submit\" name=\"cancel_unglobalise\" value=\"";
            echo $this->env->getExtension('phpbb')->lang("CANCEL");
            echo "\" /></dd>
\t\t\t</dl>
\t\t</fieldset>

\t\t</div>
\t</div>
";
        }
        // line 51
        echo "
";
        // line 52
        if ((isset($context["S_DISPLAY_PREVIEW"]) ? $context["S_DISPLAY_PREVIEW"] : null)) {
            $location = "posting_preview.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("posting_preview.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 53
        echo "
<div id=\"postingbox\" class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 56
        echo $this->env->getExtension('phpbb')->lang("POST_A");
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t";
        // line 59
        $value = 1;
        $context['definition']->set('EXTRA_POSTING_OPTIONS', $value);
        // line 60
        echo "\t";
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
        // line 61
        echo "\t<input type=\"hidden\" name=\"show_panel\" value=\"options-panel\" />
\t";
        // line 62
        echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
        echo "
\t</div>
</div>

";
        // line 66
        if ((isset($context["S_SHOW_ATTACH_BOX"]) ? $context["S_SHOW_ATTACH_BOX"] : null)) {
            $location = "posting_attach_body.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("posting_attach_body.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 67
        echo "
";
        // line 68
        if (((isset($context["S_SHOW_POLL_BOX"]) ? $context["S_SHOW_POLL_BOX"] : null) || (isset($context["S_POLL_DELETE"]) ? $context["S_POLL_DELETE"] : null))) {
            $location = "posting_poll_body.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("posting_poll_body.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 69
        echo "
";
        // line 70
        if ((isset($context["S_DISPLAY_REVIEW"]) ? $context["S_DISPLAY_REVIEW"] : null)) {
            $location = "posting_topic_review.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("posting_topic_review.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 71
        echo "
</form>

";
        // line 74
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
        return "posting_layout.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  291 => 74,  286 => 71,  272 => 70,  269 => 69,  255 => 68,  252 => 67,  238 => 66,  231 => 62,  228 => 61,  215 => 60,  212 => 59,  206 => 56,  201 => 53,  187 => 52,  184 => 51,  172 => 44,  164 => 39,  159 => 38,  154 => 36,  150 => 35,  145 => 32,  143 => 31,  140 => 30,  126 => 29,  123 => 28,  109 => 27,  106 => 26,  101 => 24,  96 => 23,  94 => 22,  87 => 20,  84 => 19,  80 => 17,  75 => 15,  70 => 14,  62 => 12,  60 => 11,  57 => 10,  55 => 9,  52 => 8,  44 => 6,  36 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
