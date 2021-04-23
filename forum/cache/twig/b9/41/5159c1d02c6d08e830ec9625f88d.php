<?php

/* posting_attach_body.html */
class __TwigTemplate_b9415159c1d02c6d08e830ec9625f88d extends Twig_Template
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
        echo "<div id=\"attach-panel\" class=\"panel panel-default\">
\t<div class=\"panel-body\">

\t<p>";
        // line 4
        echo $this->env->getExtension('phpbb')->lang("ADD_ATTACHMENT_EXPLAIN");
        echo " <span class=\"hidden\" id=\"drag-n-drop-message\">";
        echo $this->env->getExtension('phpbb')->lang("PLUPLOAD_DRAG_TEXTAREA");
        echo "</span></p>
\t
\t<fieldset id=\"attach-panel-basic\" class=\"form-inline\">
\t<dl class=\"dl-horizontal\">
\t\t<dt><label for=\"fileupload\">";
        // line 8
        echo $this->env->getExtension('phpbb')->lang("FILENAME");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd>
\t\t\t<input type=\"file\" name=\"fileupload\" id=\"fileupload\" maxlength=\"";
        // line 10
        echo (isset($context["FILESIZE"]) ? $context["FILESIZE"] : null);
        echo "\" value=\"\" class=\"btn btn-default\" /> 
\t\t\t<input type=\"submit\" name=\"add_file\" value=\"";
        // line 11
        echo $this->env->getExtension('phpbb')->lang("ADD_FILE");
        echo "\" class=\"btn btn-default\" onclick=\"upload = true;\" />
\t\t</dd>
\t</dl>
\t<dl class=\"dl-horizontal\">
\t\t<dt><label for=\"filecomment\">";
        // line 15
        echo $this->env->getExtension('phpbb')->lang("FILE_COMMENT");
        echo $this->env->getExtension('phpbb')->lang("COLON");
        echo "</label></dt>
\t\t<dd><textarea name=\"filecomment\" id=\"filecomment\" rows=\"1\" cols=\"40\" class=\"form-control\">";
        // line 16
        echo (isset($context["FILE_COMMENT"]) ? $context["FILE_COMMENT"] : null);
        echo "</textarea></dd>
\t</dl>
\t</fieldset>

\t<div id=\"attach-panel-multi\">
\t\t<button type=\"button\" class=\"btn btn-default\" id=\"add_files\"><i class=\"fa fa-folder-open\"></i> ";
        // line 21
        echo $this->env->getExtension('phpbb')->lang("PLUPLOAD_ADD_FILES");
        echo "</button>
\t</div>

\t<div class=\"table-responsive\" id=\"file-list-container\"";
        // line 24
        if ((!twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "attach_row")))) {
            echo " style=\"display: none;\"";
        }
        echo ">
\t\t\t<table class=\"table table-bordered\">
\t\t\t\t<thead>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<th class=\"width-50\">";
        // line 28
        echo $this->env->getExtension('phpbb')->lang("PLUPLOAD_FILENAME");
        echo "</th>
\t\t\t\t\t\t<th class=\"width-35\">";
        // line 29
        echo $this->env->getExtension('phpbb')->lang("FILE_COMMENT");
        echo "</th>
\t\t\t\t\t\t<th class=\"attach-filesize\">";
        // line 30
        echo $this->env->getExtension('phpbb')->lang("PLUPLOAD_SIZE");
        echo "</th>
\t\t\t\t\t\t<th class=\"attach-status\">";
        // line 31
        echo $this->env->getExtension('phpbb')->lang("PLUPLOAD_STATUS");
        echo "</th>
\t\t\t\t\t</tr>
\t\t\t\t</thead>
\t\t\t\t<tbody class=\"responsive-skip-empty\" id=\"file-list\">
\t\t\t\t\t<tr class=\"attach-row\" id=\"attach-row-tpl\">
\t\t\t\t\t\t\t<td class=\"width-50\">
\t\t\t\t\t\t\t\t<span class=\"file-name ellipsis-text\"></span>
\t\t\t\t\t\t\t\t<span class=\"attach-controls\">
\t\t\t\t\t\t\t\t\t<input type=\"button\" value=\"";
        // line 39
        echo $this->env->getExtension('phpbb')->lang("PLACE_INLINE");
        echo "\" class=\"btn btn-default hidden file-inline-bbcode\" />&nbsp;
\t\t\t\t\t\t\t\t\t<input type=\"button\" value=\"";
        // line 40
        echo $this->env->getExtension('phpbb')->lang("DELETE_FILE");
        echo "\" class=\"btn btn-danger file-delete\" />
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t<span class=\"clear\"></span>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td class=\"width-35\">
\t\t\t\t\t\t\t\t<textarea rows=\"1\" cols=\"30\" class=\"form-control\"></textarea>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td class=\"attach-filesize\">
\t\t\t\t\t\t\t\t<span class=\"file-size\"></span>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td class=\"attach-status\">
\t\t\t\t\t\t\t\t<span class=\"file-progress\">
\t\t\t\t\t\t\t\t\t<span class=\"file-progress-bar\"></span>
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t<span class=\"file-status\"></span>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t</tr>
\t\t\t\t\t";
        // line 57
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "attach_row"));
        foreach ($context['_seq'] as $context["_key"] => $context["attach_row"]) {
            // line 58
            echo "\t\t\t\t\t\t<tr class=\"attach-row\" data-attach-id=\"";
            echo $this->getAttribute((isset($context["attach_row"]) ? $context["attach_row"] : null), "ATTACH_ID");
            echo "\">
\t\t\t\t\t\t\t<td class=\"width-50\">
\t\t\t\t\t\t\t\t<span class=\"file-name ellipsis-text\"><a href=\"";
            // line 60
            echo $this->getAttribute((isset($context["attach_row"]) ? $context["attach_row"] : null), "U_VIEW_ATTACHMENT");
            echo "\">";
            echo $this->getAttribute((isset($context["attach_row"]) ? $context["attach_row"] : null), "FILENAME");
            echo "</a></span>
\t\t\t\t\t\t\t\t<span class=\"attach-controls\">
\t\t\t\t\t\t\t\t\t";
            // line 62
            if ((isset($context["S_INLINE_ATTACHMENT_OPTIONS"]) ? $context["S_INLINE_ATTACHMENT_OPTIONS"] : null)) {
                echo "<input type=\"button\" value=\"";
                echo $this->env->getExtension('phpbb')->lang("PLACE_INLINE");
                echo "\" class=\"btn btn-default file-inline-bbcode\" />&nbsp; ";
            }
            // line 63
            echo "\t\t\t\t\t\t\t\t\t<input type=\"submit\" name=\"delete_file[";
            echo $this->getAttribute((isset($context["attach_row"]) ? $context["attach_row"] : null), "ASSOC_INDEX");
            echo "]\" value=\"";
            echo $this->env->getExtension('phpbb')->lang("DELETE_FILE");
            echo "\" class=\"btn btn-danger file-delete\" />
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t<span class=\"clear\"></span>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td class=\"35\">
\t\t\t\t\t\t\t\t<textarea name=\"comment_list[";
            // line 68
            echo $this->getAttribute((isset($context["attach_row"]) ? $context["attach_row"] : null), "ASSOC_INDEX");
            echo "]\" rows=\"1\" cols=\"30\" class=\"form-control\">";
            echo $this->getAttribute((isset($context["attach_row"]) ? $context["attach_row"] : null), "FILE_COMMENT");
            echo "</textarea>
\t\t\t\t\t\t\t\t";
            // line 69
            echo $this->getAttribute((isset($context["attach_row"]) ? $context["attach_row"] : null), "S_HIDDEN");
            echo "
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td class=\"attach-filesize\">
\t\t\t\t\t\t\t\t<span class=\"file-size\">";
            // line 72
            echo $this->getAttribute((isset($context["attach_row"]) ? $context["attach_row"] : null), "FILESIZE");
            echo "</span>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td class=\"attach-status\">
\t\t\t\t\t\t\t\t<span class=\"file-status file-uploaded\"></span>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t</tr>
\t\t\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attach_row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 79
        echo "\t\t\t\t</tbody>
\t\t\t</table>
\t</div>
\t</div>
</div>
";
    }

    public function getTemplateName()
    {
        return "posting_attach_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  171 => 72,  165 => 69,  148 => 63,  142 => 62,  135 => 60,  129 => 58,  125 => 57,  105 => 40,  90 => 31,  86 => 30,  82 => 29,  78 => 28,  69 => 24,  63 => 21,  50 => 15,  43 => 11,  39 => 10,  33 => 8,  24 => 4,  291 => 74,  286 => 71,  272 => 70,  269 => 69,  255 => 68,  252 => 67,  238 => 66,  231 => 62,  228 => 61,  215 => 60,  212 => 59,  206 => 56,  201 => 53,  187 => 52,  184 => 79,  172 => 44,  164 => 39,  159 => 68,  154 => 36,  150 => 35,  145 => 32,  143 => 31,  140 => 30,  126 => 29,  123 => 28,  109 => 27,  106 => 26,  101 => 39,  96 => 23,  94 => 22,  87 => 20,  84 => 19,  80 => 17,  75 => 15,  70 => 14,  62 => 12,  60 => 11,  57 => 10,  55 => 16,  52 => 8,  44 => 6,  36 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
