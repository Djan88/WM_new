<?php

/* ucp_groups_manage.html */
class __TwigTemplate_30683353e84e95e3a386208ce6992599 extends Twig_Template
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
        echo $this->env->getExtension('phpbb')->lang("USERGROUPS");
        if ((isset($context["GROUP_NAME"]) ? $context["GROUP_NAME"] : null)) {
            echo " :: <span";
            if ((isset($context["GROUP_COLOUR"]) ? $context["GROUP_COLOUR"] : null)) {
                echo " style=\"color: #";
                echo (isset($context["GROUP_COLOUR"]) ? $context["GROUP_COLOUR"] : null);
                echo ";\"";
            }
            echo ">";
            echo (isset($context["GROUP_NAME"]) ? $context["GROUP_NAME"] : null);
            echo "</span>";
        }
        echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t";
        // line 11
        if ((isset($context["S_ERROR"]) ? $context["S_ERROR"] : null)) {
            echo "<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR_MSG"]) ? $context["ERROR_MSG"] : null);
            echo "</div>";
        }
        // line 12
        echo "
\t<p>";
        // line 13
        echo $this->env->getExtension('phpbb')->lang("GROUPS_EXPLAIN");
        echo "</p>

\t";
        // line 15
        if ((isset($context["S_EDIT"]) ? $context["S_EDIT"] : null)) {
            // line 16
            echo "\t<div class=\"panel panel-default\">
\t\t<div class=\"panel-heading\">
\t\t\t<h4 class=\"panel-title\">";
            // line 18
            echo $this->env->getExtension('phpbb')->lang("GROUP_DETAILS");
            echo "</h4>
\t\t</div>
\t\t<div class=\"panel-body\">

\t\t<fieldset class=\"form-horizontal\">
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"group_name\">";
            // line 24
            echo $this->env->getExtension('phpbb')->lang("GROUP_NAME");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">";
            // line 25
            if ((isset($context["S_SPECIAL_GROUP"]) ? $context["S_SPECIAL_GROUP"] : null)) {
                echo "<label class=\"control-label\"";
                if ((isset($context["GROUP_COLOUR"]) ? $context["GROUP_COLOUR"] : null)) {
                    echo " style=\"color: #";
                    echo (isset($context["GROUP_COLOUR"]) ? $context["GROUP_COLOUR"] : null);
                    echo ";\"";
                }
                echo ">";
                echo (isset($context["GROUP_NAME"]) ? $context["GROUP_NAME"] : null);
                echo "</label> <input name=\"group_name\" type=\"hidden\" value=\"";
                echo (isset($context["GROUP_INTERNAL_NAME"]) ? $context["GROUP_INTERNAL_NAME"] : null);
                echo "\" />
\t\t\t";
            } else {
                // line 26
                echo "<input name=\"group_name\" type=\"text\" id=\"group_name\" value=\"";
                echo (isset($context["GROUP_INTERNAL_NAME"]) ? $context["GROUP_INTERNAL_NAME"] : null);
                echo "\" class=\"form-control\" />";
            }
            echo "</dd>
\t\t</dl>
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"group_desc\">";
            // line 29
            echo $this->env->getExtension('phpbb')->lang("GROUP_DESC");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t\t<textarea id=\"group_desc\" name=\"group_desc\" rows=\"5\" cols=\"45\" class=\"form-control\">";
            // line 31
            echo (isset($context["GROUP_DESC"]) ? $context["GROUP_DESC"] : null);
            echo "</textarea><br />
\t\t\t\t<label for=\"desc_parse_bbcode\"><input type=\"checkbox\" name=\"desc_parse_bbcode\" id=\"desc_parse_bbcode\"";
            // line 32
            if ((isset($context["S_DESC_BBCODE_CHECKED"]) ? $context["S_DESC_BBCODE_CHECKED"] : null)) {
                echo " checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("PARSE_BBCODE");
            echo "</label>&nbsp;<label for=\"desc_parse_smilies\"><input type=\"checkbox\" name=\"desc_parse_smilies\" id=\"desc_parse_smilies\"";
            if ((isset($context["S_DESC_SMILIES_CHECKED"]) ? $context["S_DESC_SMILIES_CHECKED"] : null)) {
                echo " checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("PARSE_SMILIES");
            echo "</label>&nbsp;<label for=\"desc_parse_urls\"><input type=\"checkbox\" name=\"desc_parse_urls\" id=\"desc_parse_urls\"";
            if ((isset($context["S_DESC_URLS_CHECKED"]) ? $context["S_DESC_URLS_CHECKED"] : null)) {
                echo " checked=\"checked\"";
            }
            echo " /> ";
            echo $this->env->getExtension('phpbb')->lang("PARSE_URLS");
            echo "</label>
\t\t\t</dd>
\t\t</dl>
\t\t";
            // line 35
            if ((!(isset($context["S_SPECIAL_GROUP"]) ? $context["S_SPECIAL_GROUP"] : null))) {
                // line 36
                echo "\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"group_type1\">";
                // line 37
                echo $this->env->getExtension('phpbb')->lang("GROUP_TYPE");
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo "</label><br /><span class=\"help-block\">";
                echo $this->env->getExtension('phpbb')->lang("GROUP_TYPE_EXPLAIN");
                echo "</span></dt>
\t\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t\t<label for=\"group_type1\"><input type=\"radio\" class=\"radio\" name=\"group_type\" id=\"group_type1\" value=\"";
                // line 39
                echo (isset($context["GROUP_TYPE_FREE"]) ? $context["GROUP_TYPE_FREE"] : null);
                echo "\"";
                echo (isset($context["GROUP_FREE"]) ? $context["GROUP_FREE"] : null);
                echo " /> ";
                echo $this->env->getExtension('phpbb')->lang("GROUP_OPEN");
                echo "</label> 
\t\t\t\t<label for=\"group_type2\"><input type=\"radio\" class=\"radio\" name=\"group_type\" id=\"group_type2\" value=\"";
                // line 40
                echo (isset($context["GROUP_TYPE_OPEN"]) ? $context["GROUP_TYPE_OPEN"] : null);
                echo "\"";
                echo (isset($context["GROUP_OPEN"]) ? $context["GROUP_OPEN"] : null);
                echo " /> ";
                echo $this->env->getExtension('phpbb')->lang("GROUP_REQUEST");
                echo "</label> 
\t\t\t\t<label for=\"group_type3\"><input type=\"radio\" class=\"radio\" name=\"group_type\" id=\"group_type3\" value=\"";
                // line 41
                echo (isset($context["GROUP_TYPE_CLOSED"]) ? $context["GROUP_TYPE_CLOSED"] : null);
                echo "\"";
                echo (isset($context["GROUP_CLOSED"]) ? $context["GROUP_CLOSED"] : null);
                echo " /> ";
                echo $this->env->getExtension('phpbb')->lang("GROUP_CLOSED");
                echo "</label> 
\t\t\t\t<label for=\"group_type4\"><input type=\"radio\" class=\"radio\" name=\"group_type\" id=\"group_type4\" value=\"";
                // line 42
                echo (isset($context["GROUP_TYPE_HIDDEN"]) ? $context["GROUP_TYPE_HIDDEN"] : null);
                echo "\"";
                echo (isset($context["GROUP_HIDDEN"]) ? $context["GROUP_HIDDEN"] : null);
                echo " /> ";
                echo $this->env->getExtension('phpbb')->lang("GROUP_HIDDEN");
                echo "</label>
\t\t\t</dd>
\t\t</dl>
\t\t";
            } else {
                // line 46
                echo "\t\t\t<input name=\"group_type\" type=\"hidden\" value=\"";
                echo (isset($context["GROUP_TYPE_SPECIAL"]) ? $context["GROUP_TYPE_SPECIAL"] : null);
                echo "\" />
\t\t";
            }
            // line 48
            echo "\t\t</fieldset>

\t<hr />

\t<h4>";
            // line 52
            echo $this->env->getExtension('phpbb')->lang("GROUP_SETTINGS_SAVE");
            echo "</h4>

\t<fieldset class=\"form-horizontal\">
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"group_colour\">";
            // line 56
            echo $this->env->getExtension('phpbb')->lang("GROUP_COLOR");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("GROUP_COLOR_EXPLAIN");
            echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t<div class=\"input-group\">
\t\t\t<input name=\"group_colour\" type=\"text\" id=\"group_colour\" value=\"";
            // line 59
            echo (isset($context["GROUP_COLOUR"]) ? $context["GROUP_COLOUR"] : null);
            echo "\" size=\"6\" maxlength=\"6\" class=\"form-control\" />
\t\t\t<span class=\"input-group-btn\">
\t\t\t\t<span class=\"btn btn-default tip\" style=\"background-color: #";
            // line 61
            echo (isset($context["GROUP_COLOUR"]) ? $context["GROUP_COLOUR"] : null);
            echo ";\">&nbsp;&nbsp;&nbsp;</span>
\t\t\t\t<a href=\"#\" id=\"color_palette_toggle\" class=\"btn btn-default\">";
            // line 62
            echo $this->env->getExtension('phpbb')->lang("COLOUR_SWATCH");
            echo "</a>
\t\t\t</span>
\t\t</div>
\t\t\t<div id=\"color_palette_placeholder\" style=\"display: none;\" data-orientation=\"h\" data-height=\"12\" data-width=\"15\" data-target=\"#group_colour\"></div>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"group_rank\">";
            // line 69
            echo $this->env->getExtension('phpbb')->lang("GROUP_RANK");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\"><select name=\"group_rank\" id=\"group_rank\">";
            // line 70
            echo (isset($context["S_RANK_OPTIONS"]) ? $context["S_RANK_OPTIONS"] : null);
            echo "</select></dd>
\t</dl>
\t</fieldset>

\t<hr />

";
            // line 76
            $location = "ucp_avatar_options.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("ucp_avatar_options.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
            // line 77
            echo "
\t\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t";
            // line 81
            echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
            echo "
\t\t<input type=\"reset\" value=\"";
            // line 82
            echo $this->env->getExtension('phpbb')->lang("RESET");
            echo "\" name=\"reset\" class=\"btn btn-danger\" />&nbsp; 
\t\t<input type=\"submit\" name=\"update\" value=\"";
            // line 83
            echo $this->env->getExtension('phpbb')->lang("SUBMIT");
            echo "\" class=\"btn btn-success\" />
\t\t";
            // line 84
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t</fieldset>
</div>

";
        } elseif ((isset($context["S_LIST"]) ? $context["S_LIST"] : null)) {
            // line 89
            echo "
\t";
            // line 90
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "leader"))) {
                // line 91
                echo "\t<div class=\"table-responsive\">
\t<table class=\"table table-bordered\">
\t<thead>
\t<tr>
\t\t<th class=\"width-35\">";
                // line 95
                echo $this->env->getExtension('phpbb')->lang("GROUP_LEAD");
                echo "</th>
\t\t<th>";
                // line 96
                echo $this->env->getExtension('phpbb')->lang("GROUP_DEFAULT");
                echo "</th>
\t\t<th class=\"text-center\">";
                // line 97
                echo $this->env->getExtension('phpbb')->lang("POSTS");
                echo "</th>
\t\t<th class=\"joined\">";
                // line 98
                echo $this->env->getExtension('phpbb')->lang("JOINED");
                echo "</th>
\t\t<th class=\"text-center\">";
                // line 99
                echo $this->env->getExtension('phpbb')->lang("MARK");
                echo "</th>
\t</tr>
\t</thead>
\t<tbody>
\t";
                // line 103
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "leader"));
                foreach ($context['_seq'] as $context["_key"] => $context["leader"]) {
                    // line 104
                    echo "\t\t<tr class=\"";
                    if (($this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "S_ROW_COUNT") % 2 == 0)) {
                        echo "bg1";
                    } else {
                        echo "bg2";
                    }
                    echo "\">
\t\t\t<td class=\"width-35\">";
                    // line 105
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "USERNAME_FULL");
                    echo "</td>
\t\t\t<td>";
                    // line 106
                    if ($this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "S_GROUP_DEFAULT")) {
                        echo $this->env->getExtension('phpbb')->lang("YES");
                    } else {
                        echo $this->env->getExtension('phpbb')->lang("NO");
                    }
                    echo "</td>
\t\t\t<td class=\"text-center\">";
                    // line 107
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "USER_POSTS");
                    echo "</td>
\t\t\t<td class=\"joined\">";
                    // line 108
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "JOINED");
                    echo "</td>
\t\t\t<td class=\"text-center\">&nbsp;</td>
\t\t</tr>
\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['leader'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 112
                echo "\t</tbody>
\t</table>
\t</div>
\t";
            }
            // line 116
            echo "
\t";
            // line 117
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "member"));
            $context['_iterated'] = false;
            foreach ($context['_seq'] as $context["_key"] => $context["member"]) {
                // line 118
                echo "\t\t";
                if ($this->getAttribute((isset($context["member"]) ? $context["member"] : null), "S_PENDING")) {
                    // line 119
                    echo "\t\t\t<div class=\"table-responsive\">
\t\t\t<table class=\"table table-bordered\">
\t\t\t<thead>
\t\t\t<tr>
\t\t\t\t<th class=\"width-35\">";
                    // line 123
                    echo $this->env->getExtension('phpbb')->lang("GROUP_PENDING");
                    echo "</th>
\t\t\t\t<th>";
                    // line 124
                    echo $this->env->getExtension('phpbb')->lang("GROUP_DEFAULT");
                    echo "</th>
\t\t\t\t<th class=\"text-center\">";
                    // line 125
                    echo $this->env->getExtension('phpbb')->lang("POSTS");
                    echo "</th>
\t\t\t\t<th class=\"joined\">";
                    // line 126
                    echo $this->env->getExtension('phpbb')->lang("JOINED");
                    echo "</th>
\t\t\t\t<th class=\"text-center\">";
                    // line 127
                    echo $this->env->getExtension('phpbb')->lang("MARK");
                    echo "</th>
\t\t\t</tr>
\t\t\t</thead>
\t\t\t<tbody>
\t\t";
                } elseif ($this->getAttribute((isset($context["member"]) ? $context["member"] : null), "S_APPROVED")) {
                    // line 132
                    echo "\t\t\t";
                    if ((isset($context["S_PENDING_SET"]) ? $context["S_PENDING_SET"] : null)) {
                        // line 133
                        echo "\t\t\t\t</tbody>
\t\t\t\t</table>
\t\t\t\t</div>
\t\t\t";
                    }
                    // line 137
                    echo "\t\t\t<div class=\"table-responsive\">
\t\t\t<table class=\"table table-bordered\">
\t\t\t<thead>
\t\t\t<tr>
\t\t\t\t<th class=\"width-35\">";
                    // line 141
                    echo $this->env->getExtension('phpbb')->lang("GROUP_APPROVED");
                    echo "</th>
\t\t\t\t<th>";
                    // line 142
                    echo $this->env->getExtension('phpbb')->lang("GROUP_DEFAULT");
                    echo "</th>
\t\t\t\t<th class=\"text-center\">";
                    // line 143
                    echo $this->env->getExtension('phpbb')->lang("POSTS");
                    echo "</th>
\t\t\t\t<th class=\"joined\">";
                    // line 144
                    echo $this->env->getExtension('phpbb')->lang("JOINED");
                    echo "</th>
\t\t\t\t<th class=\"text-center\">";
                    // line 145
                    echo $this->env->getExtension('phpbb')->lang("MARK");
                    echo "</th>
\t\t\t</tr>
\t\t\t</thead>
\t\t\t<tbody>
\t\t";
                } else {
                    // line 150
                    echo "\t\t\t<tr class=\"";
                    if (($this->getAttribute((isset($context["member"]) ? $context["member"] : null), "S_ROW_COUNT") % 2 == 0)) {
                        echo "bg1";
                    } else {
                        echo "bg2";
                    }
                    echo "\">
\t\t\t\t<td class=\"width-35\">";
                    // line 151
                    echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "USERNAME_FULL");
                    echo "</td>
\t\t\t\t<td>";
                    // line 152
                    if ($this->getAttribute((isset($context["member"]) ? $context["member"] : null), "S_GROUP_DEFAULT")) {
                        echo $this->env->getExtension('phpbb')->lang("YES");
                    } else {
                        echo $this->env->getExtension('phpbb')->lang("NO");
                    }
                    echo "</td>
\t\t\t\t<td class=\"text-center\">";
                    // line 153
                    echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "USER_POSTS");
                    echo "</td>
\t\t\t\t<td class=\"joined\">";
                    // line 154
                    echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "JOINED");
                    echo "</td>
\t\t\t\t<td class=\"text-center\"><input type=\"checkbox\" name=\"mark[]\" value=\"";
                    // line 155
                    echo $this->getAttribute((isset($context["member"]) ? $context["member"] : null), "USER_ID");
                    echo "\" /></td>
\t\t\t</tr>
\t\t";
                }
                // line 158
                echo "\t";
                $context['_iterated'] = true;
            }
            if (!$context['_iterated']) {
                // line 159
                echo "\t\t<div class=\"table-responsive\">
\t\t<table class=\"table table-bordered\">
\t\t<thead>
\t\t<tr>
\t\t\t<th class=\"width-35\">";
                // line 163
                echo $this->env->getExtension('phpbb')->lang("MEMBERS");
                echo "</th>
\t\t</tr>
\t\t</thead>
\t\t<tbody>
\t\t<tr>
\t\t\t<td class=\"bg1 text-center\">";
                // line 168
                echo $this->env->getExtension('phpbb')->lang("GROUPS_NO_MEMBERS");
                echo "</td>
\t\t</tr>
\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['member'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 171
            echo "\t</tbody>
\t</table>
\t</div>

\t<fieldset class=\"panel-group clearfix\">
\t\t<div class=\"pull-";
            // line 176
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t<select name=\"action\"><option value=\"\">";
            // line 177
            echo $this->env->getExtension('phpbb')->lang("SELECT_OPTION");
            echo "</option>";
            echo (isset($context["S_ACTION_OPTIONS"]) ? $context["S_ACTION_OPTIONS"] : null);
            echo "</select>
\t\t\t<input class=\"btn btn-default\" type=\"submit\" name=\"update\" value=\"";
            // line 178
            echo $this->env->getExtension('phpbb')->lang("SUBMIT");
            echo "\" />
\t\t</div>
\t\t<div class=\"btn-group pull-";
            // line 180
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t\t\t<a href=\"#\" onclick=\"marklist('ucp', 'mark', false); return false;\" class=\"btn btn-warning\">";
            // line 181
            echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
            echo "</a>
\t\t\t<a href=\"#\" onclick=\"marklist('ucp', 'mark', true); return false;\" class=\"btn btn-info\">";
            // line 182
            echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
            echo "</a>
\t\t</div>
\t</fieldset>

\t";
            // line 186
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                // line 187
                echo "\t<div class=\"pages clearfix\">
\t\t";
                // line 188
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
                // line 189
                echo "\t</div>
\t";
            }
            // line 191
            echo "
\t</div>
</div>

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">
\t\t<h4 class=\"panel-title\">";
            // line 197
            echo $this->env->getExtension('phpbb')->lang("ADD_USERS");
            echo "</h4>
\t</div>
\t<div class=\"panel-body\">

\t<p>";
            // line 201
            echo $this->env->getExtension('phpbb')->lang("ADD_USERS_UCP_EXPLAIN");
            echo "</p>

\t<fieldset class=\"form-horizontal\">
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"default0\">";
            // line 205
            echo $this->env->getExtension('phpbb')->lang("USER_GROUP_DEFAULT");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("USER_GROUP_DEFAULT_EXPLAIN");
            echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<label class=\"control-label\" for=\"default1\"><input type=\"radio\" name=\"default\" id=\"default1\" value=\"1\" /> ";
            // line 207
            echo $this->env->getExtension('phpbb')->lang("YES");
            echo "</label> 
\t\t\t<label class=\"control-label\" for=\"default0\"><input type=\"radio\" name=\"default\" id=\"default0\" value=\"0\" checked=\"checked\" /> ";
            // line 208
            echo $this->env->getExtension('phpbb')->lang("NO");
            echo "</label>
\t\t</dd>
\t</dl>
\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-4 col-sm-5 col-xs-12\"><label class=\"control-label\" for=\"usernames\">";
            // line 212
            echo $this->env->getExtension('phpbb')->lang("USERNAME");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label><br /><span class=\"help-block\">";
            echo $this->env->getExtension('phpbb')->lang("USERNAMES_EXPLAIN");
            echo "</span></dt>
\t\t<dd class=\"col-md-8 col-sm-7 col-xs-12 form-inline\">
\t\t\t<textarea name=\"usernames\" id=\"usernames\" rows=\"3\" cols=\"30\" class=\"form-control\"></textarea>&nbsp;
\t\t\t<a href=\"";
            // line 215
            echo (isset($context["U_FIND_USERNAME"]) ? $context["U_FIND_USERNAME"] : null);
            echo "\" onclick=\"find_username(this.href); return false;\" class=\"btn btn-default\">";
            echo $this->env->getExtension('phpbb')->lang("FIND_USERNAME");
            echo "</a>
\t\t</dd>
\t</dl>
\t</fieldset>

\t</div>

\t<fieldset class=\"panel-footer text-center\">
\t\t<input class=\"btn btn-success\" type=\"submit\" name=\"addusers\" value=\"";
            // line 223
            echo $this->env->getExtension('phpbb')->lang("SUBMIT");
            echo "\" />
\t\t";
            // line 224
            echo (isset($context["S_FORM_TOKEN"]) ? $context["S_FORM_TOKEN"] : null);
            echo "
\t</fieldset>
</div>

";
        } else {
            // line 229
            echo "
\t";
            // line 230
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "leader"))) {
                // line 231
                echo "\t<div class=\"panel panel-default\">
\t\t<div class=\"clearfix\">
\t\t\t<h4 class=\"col-md-10 col-sm-9 col-xs-9\">";
                // line 233
                echo $this->env->getExtension('phpbb')->lang("GROUP_LEADER");
                echo "</h4>
\t\t\t<h5 class=\"col-md-2 col-sm-3 col-xs-3\">";
                // line 234
                echo $this->env->getExtension('phpbb')->lang("OPTIONS");
                echo "</h5>
\t\t</div>
\t\t";
                // line 236
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "leader"));
                foreach ($context['_seq'] as $context["_key"] => $context["leader"]) {
                    // line 237
                    echo "\t\t<div class=\"clearfix icon";
                    if (($this->getAttribute((isset($context["attachrow"]) ? $context["attachrow"] : null), "S_ROW_COUNT") % 2 == 1)) {
                        echo " bg1";
                    } else {
                        echo " bg2";
                    }
                    echo "\">
\t\t\t<div class=\"col-md-10 col-sm-9 col-xs-9\">
\t\t\t\t<a href=\"";
                    // line 239
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "U_EDIT");
                    echo "\" class=\"topictitle\"";
                    if ($this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_COLOUR")) {
                        echo " style=\"color: #";
                        echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_COLOUR");
                        echo ";\"";
                    }
                    echo ">";
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_NAME");
                    echo "</a>
\t\t\t\t";
                    // line 240
                    if ($this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_DESC")) {
                        echo "<br /><span class=\"help-block\">";
                        echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "GROUP_DESC");
                        echo "</span>";
                    }
                    // line 241
                    echo "\t\t\t</div>

\t\t\t<div class=\"col-md-2 col-sm-3 col-xs-3\"><a href=\"";
                    // line 243
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "U_EDIT");
                    echo "\" >";
                    echo $this->env->getExtension('phpbb')->lang("EDIT");
                    echo "</a><br /><a href=\"";
                    echo $this->getAttribute((isset($context["leader"]) ? $context["leader"] : null), "U_LIST");
                    echo "\">";
                    echo $this->env->getExtension('phpbb')->lang("GROUP_LIST");
                    echo "</a></div>
\t\t</div>
\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['leader'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 246
                echo "\t</div>
\t";
            } else {
                // line 248
                echo "\t\t<div class=\"alert alert-info\">
\t\t\t";
                // line 249
                echo $this->env->getExtension('phpbb')->lang("NO_LEADERS");
                echo "
\t\t</div>
\t";
            }
            // line 252
            echo "
\t</div>
</div>

";
        }
        // line 257
        echo "</form>

";
        // line 259
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
        return "ucp_groups_manage.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  746 => 259,  742 => 257,  735 => 252,  729 => 249,  726 => 248,  722 => 246,  707 => 243,  703 => 241,  697 => 240,  685 => 239,  675 => 237,  671 => 236,  666 => 234,  662 => 233,  658 => 231,  656 => 230,  653 => 229,  645 => 224,  641 => 223,  628 => 215,  619 => 212,  612 => 208,  608 => 207,  600 => 205,  593 => 201,  586 => 197,  578 => 191,  574 => 189,  562 => 188,  559 => 187,  557 => 186,  550 => 182,  546 => 181,  542 => 180,  537 => 178,  531 => 177,  527 => 176,  520 => 171,  511 => 168,  503 => 163,  497 => 159,  492 => 158,  486 => 155,  482 => 154,  478 => 153,  470 => 152,  466 => 151,  457 => 150,  449 => 145,  445 => 144,  441 => 143,  437 => 142,  433 => 141,  427 => 137,  421 => 133,  418 => 132,  410 => 127,  406 => 126,  402 => 125,  398 => 124,  394 => 123,  388 => 119,  385 => 118,  380 => 117,  377 => 116,  371 => 112,  361 => 108,  357 => 107,  349 => 106,  345 => 105,  336 => 104,  332 => 103,  325 => 99,  321 => 98,  317 => 97,  313 => 96,  309 => 95,  303 => 91,  301 => 90,  298 => 89,  290 => 84,  286 => 83,  282 => 82,  278 => 81,  272 => 77,  260 => 76,  251 => 70,  246 => 69,  236 => 62,  232 => 61,  227 => 59,  218 => 56,  211 => 52,  205 => 48,  199 => 46,  188 => 42,  180 => 41,  172 => 40,  164 => 39,  156 => 37,  153 => 36,  151 => 35,  129 => 32,  125 => 31,  119 => 29,  110 => 26,  95 => 25,  90 => 24,  81 => 18,  77 => 16,  75 => 15,  70 => 13,  67 => 12,  61 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
