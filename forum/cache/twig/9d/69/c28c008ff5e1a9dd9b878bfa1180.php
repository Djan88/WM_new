<?php

/* ucp_avatar_options_upload.html */
class __TwigTemplate_9d69c28c008ff5e1a9dd9b878bfa1180 extends Twig_Template
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
        echo "<dl class=\"form-group\">
\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"avatar_upload_file\">";
        // line 2
        echo $this->env->getExtension('phpbb')->lang("UPLOAD_AVATAR_FILE");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input type=\"hidden\" name=\"MAX_FILE_SIZE\" value=\"";
        // line 3
        echo (isset($context["AVATAR_UPLOAD_SIZE"]) ? $context["AVATAR_UPLOAD_SIZE"] : null);
        echo "\" /><input type=\"file\" name=\"avatar_upload_file\" id=\"avatar_upload_file\" class=\"btn btn-default\" /></dd>
</dl>

";
        // line 6
        if ((isset($context["S_UPLOAD_AVATAR_URL"]) ? $context["S_UPLOAD_AVATAR_URL"] : null)) {
            // line 7
            echo "<dl class=\"form-group\">
\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"avatar_upload_url\">";
            // line 8
            echo $this->env->getExtension('phpbb')->lang("UPLOAD_AVATAR_URL");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("UPLOAD_AVATAR_URL_EXPLAIN");
            echo "</span></dt>
\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><input type=\"url\" name=\"avatar_upload_url\" id=\"avatar_upload_url\" value=\"\" class=\"form-control\" /></dd>
</dl>
";
        }
    }

    public function getTemplateName()
    {
        return "ucp_avatar_options_upload.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  38 => 8,  35 => 7,  33 => 6,  27 => 3,  22 => 2,  19 => 1,);
    }
}
