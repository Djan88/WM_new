<?php

/* posting_pm_layout.html */
class __TwigTemplate_a2b6a9ca402b749907098159b27191fe extends Twig_Template
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
";
        // line 3
        if ((isset($context["S_DRAFT_LOADED"]) ? $context["S_DRAFT_LOADED"] : null)) {
            // line 4
            echo "\t<h4>";
            echo $this->env->getExtension('phpbb')->lang("INFORMATION");
            echo "</h4>
\t<p>";
            // line 5
            echo $this->env->getExtension('phpbb')->lang("DRAFT_LOADED_PM");
            echo "</p>
";
        }
        // line 7
        echo "
";
        // line 8
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
        // line 9
        echo "
";
        // line 10
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
        // line 11
        echo "
<div id=\"pmheader-postingbox\" class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
        // line 14
        echo $this->env->getExtension('phpbb')->lang("TITLE");
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">
\t\t";
        // line 17
        $location = "posting_pm_header.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("posting_pm_header.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 18
        echo "
\t\t<div id=\"postingbox\">
\t\t";
        // line 20
        $value = 1;
        $context['definition']->set('EXTRA_POSTING_OPTIONS', $value);
        // line 21
        echo "\t\t";
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
        // line 22
        echo "\t\t</div>
\t</div>
</div>

";
        // line 26
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
        // line 27
        echo "
";
        // line 28
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
        // line 29
        echo "
";
        // line 30
        if ((isset($context["S_DISPLAY_HISTORY"]) ? $context["S_DISPLAY_HISTORY"] : null)) {
            $location = "ucp_pm_history.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("ucp_pm_history.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
        // line 31
        echo "
";
        // line 32
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
        return "posting_pm_layout.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  180 => 32,  177 => 31,  163 => 30,  160 => 29,  146 => 28,  143 => 27,  129 => 26,  123 => 22,  110 => 21,  107 => 20,  103 => 18,  91 => 17,  85 => 14,  80 => 11,  66 => 10,  63 => 9,  49 => 8,  46 => 7,  41 => 5,  36 => 4,  34 => 3,  31 => 2,  38 => 5,  24 => 3,  22 => 2,  19 => 1,);
    }
}
